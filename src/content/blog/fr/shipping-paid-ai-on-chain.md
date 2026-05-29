---
title: "Livrer le premier agent IA payant sur une blockchain"
slug: "/blog/shipping-paid-ai-on-chain"
seo_title: "Livrer le premier agent IA payant sur une blockchain — Sage build log"
meta_description: "Comment Sage — le concierge de l'économie des agents sur ergoblockchain.org — a été construit de bout en bout sur Ergo testnet en utilisant le Accord Protocol. Architecture, surface de code, trois bugs réels que nous avons rencontrés, et ce que signifie le mode verify-only."
excerpt: "Sage est un concierge Claude qui accepte 0.001 testnet ERG via une Accord Note pour des réponses premium, réglées sur Ergo. Le site démontre maintenant la thèse de l'économie des agents qu'il défend. Ceci est le journal de développement."
author: "Ergo Developer Relations"
date_published: "2026-05-15"
date_modified: "2026-05-15"
tags: ["Agent Economy", "Accord Protocol", "Sage", "build log", "Ergo testnet", "AI agent payments", "Claude", "Fleet SDK"]
target_keywords: ["paid AI agent on blockchain", "Sage Ergo concierge", "Accord Protocol live demo", "AI agent on-chain payment", "agent economy working demo"]
---

# Livrer le premier agent IA payant sur une blockchain

Au cours des six derniers mois, [le site sur lequel tu te trouves](https://www.ergoblockchain.org) défendait une thèse : les agents IA autonomes auront besoin d'argent programmable — crédits délimités, termes lisibles par les machines, vérification du travail, reçus de règlement. Le [Manifeste de l'Économie des Agents](/blog/agent-economy-manifesto) le démontrait. La page d'architecture exposait les [quatre primitives](/build/agent-payments). Le blog expliquait [pourquoi les agents ne peuvent pas utiliser Stripe](/blog/agents-cant-use-stripe).

C'était la théorie. À partir de cette semaine, le site lui-même est la démo fonctionnelle.

**Sage** est le widget de chat en bas à droite de chaque page. Pose-lui une question substantielle sur Ergo, l'économie des agents, ou Accord. L'accès gratuit utilise Claude Haiku 4.5 sur un corpus indexé des docs. Demande `/code` ou quelque chose qui déclenche la barrière de détection premium, et Sage retourne HTTP 402 avec un devis : 0.001 testnet ERG, payable comme une Accord Note fixée à un hachis de tâche. Paie-le. L'adaptateur rail de Sage vérifie la Note on-chain, puis Claude Sonnet 4.6 diffuse la réponse. Chaque tour payant devient un reçu public à `/r/sage/<box_id>` avec un balisage `Action` Schema.org afin que les moteurs de recherche et les moteurs IA puissent indexer le règlement.

Ce post est le journal de développement. Ce que ça fait, ce que ça a pris, trois bugs qui ont mangé des heures, et ce qui honnêtement n'est pas encore fini.

## Ce que Sage est et ce qu'il fait

Sage est un concierge d'économie des agents mono-tenant :

- **Accès gratuit** — Haiku 4.5 sur la récupération BM25 des docs et blogs Ergo indexés. Réponses d'environ 250 mots. Refuse d'inventer du code, refuse de parler prix, refuse les hors-sujets. Coûte environ $0.001 par tour du côté Anthropic ; limité en taux par IP.
- **Accès premium** — Sonnet 4.6 avec récupération plus profonde (RAG_K=10 vs 5), max_tokens 2400 vs 800, et raisonnement explicite. Contrôlé par un défi 402 : une Note payée sur Ergo testnet déverrouille un tour premium.
- **Reçus** — chaque tour payant produit une URL publique avec identifiant de box Note, tx d'émission, valeur, délai, et un bloc `Action` Schema.org que les moteurs IA et les crawlers peuvent lire.

La barrière premium est déclenchée quand la question de l'utilisateur correspond à l'un de : préfixe `/command` explicite, intention de code, formulation de recherche profonde, longueur supérieure à 400 caractères, ou un suivi multi-tour dans un long fil. Les heuristiques sont dans `src/lib/sage/payments/gate.ts`. On bias vers les faux négatifs — mieux de sous-facturer que de surprendre les cent premiers utilisateurs.

## Les quatre primitives qui font le travail

Sage n'est pas construit sur un SDK de paiement personnalisé. Il compose les mêmes quatre primitives que le [Accord Protocol](https://github.com/accord-protocol/accord-protocol) définit et que le manifeste défend :

| Primitive | Ce qu'elle fait dans Sage |
|-----------|--------------------------|
| **Reserve** | Une box 0.1-ERG sur Ergo testnet qui soutient chaque Note. Configuration unique. ID de box `4af1816c…` (vérifiable sur [explorer](https://testnet.ergoplatform.com/transactions/195f769dc25d36244c271ff8bdc2be65b3f184a0440459fb67116f9b55d1f041)). |
| **Note** | Un instrument au porteur émis contre la Reserve. Porte 0.001 ERG, expire à `+120 blocks`, et a le hachis de tâche de la question dans le registre R6. |
| **Acceptance Predicate** | La condition de dépense ErgoScript intégrée dans la Note : blake2b256(task_output) == R6. Force le remboursement à s'engager sur le travail correct. |
| **Tracker** | Optionnel en v0 — l'accès gratuit de Sage n'en a pas besoin car chaque Note est liée à un hachis de tâche unique ; la double-rédemption est détectée par l'état de la chaîne. |

Ensemble, ces éléments transforment le paiement en un petit contrat de travail. La Note n'est pas un transfert avec un reçu attaché — elle *est* le reçu, avec la règle de remboursement intégrée.

## Cycle de vie de bout en bout d'une requête payée

```text
1.  L'utilisateur tape : "/code show me a Fleet SDK example"
2.  Widget POST /api/sage/chat → le serveur retourne 402 avec justification
3.  Widget POST /api/sage/quote → le serveur retourne SageQuote:
      receiver_address  3Wz1Lmu…AY28w        (portefeuille Sage testnet)
      reserve_box_id    4af1816c…628a4d       (Reserve réelle on-chain)
      task_hash         9674cd…ced33          (blake2b256 de la question canonicalisée)
      price             0.001 testnet ERG
      deadline          +120 blocks
      expires_at        T+10min                (fraîcheur du devis côté serveur)
4.  PaymentPanel rend le devis avec boutons de copie + guide "comment payer"
5.  Portefeuille de l'acheteur (Nautilus / notre CLI bootstrap / tout portefeuille compatible)
    émet une Note avec R4=reserve, R5=expiry, R6=task_hash
6.  La tx Note est confirmée sur Ergo testnet (~2 min)
7.  L'acheteur colle note_box_id dans le panel → Verify
8.  Serveur POST /api/sage/verify-payment:
      • rails-ergo verifyPayment récupère la Note de la chaîne
      • vérifie le lien reserve R4, expiry R5, task hash R6, valeur ≥ prix
      • vérifié
9.  Le serveur retourne token de paiement HMAC + identifiant de reçu + (optionnellement) tx de règlement
10. Widget reprend le chat avec paymentToken
11. /api/sage/chat voit un token valide → routes vers Sonnet 4.6 + RAG plus profond
12. La réponse premium diffuse via SSE avec un badge "PREMIUM · paid"
13. Le lien "view receipt →" pointe vers /r/sage/<box_or_tx_id>
14. La page de reçu rend côté serveur avec balisage Schema.org Action
```

Douze étapes discrètes. Deux transactions on-chain (émission de Note + remboursement optionnel). Un appel LLM. Une page de reçu publique indexable par chaque moteur de recherche et IA du monde.

## Surface de code — ce que nous avons réellement construit

Le tout tient dans un petit ensemble de fichiers. Le gros de la complexité vit à deux endroits : le wrapper de l'adaptateur rail (parce que l'API de l'explorateur testnet a des bizarreries) et l'abstraction de portefeuille (parce qu'on ne met pas la clé de signature sur Vercel).

```
src/lib/sage/
├── retrieve.ts                 Récupération BM25 sur l'index de docs
├── rate-limit.ts               Fenêtre glissante par IP
├── payments/
│   ├── agreement.ts            buildSageQuote() + canonicalizeQuestion()
│   ├── gate.ts                 Heuristiques decidePremium()
│   ├── note-ops.ts             Wrapper ErgoNoteOps qui normalise
│   │                           les registres au format objet de
│   │                           l'explorateur v1
│   ├── token.ts                Token de paiement HMAC-SHA256, TTL 30 min,
│   │                           lié au hachis de question afin qu'un
│   │                           token volé ne puisse pas déverrouiller
│   │                           une question différente
│   ├── verify.ts               rails-ergo verifyPayment + settle
│   ├── wallet.ts               getSageAgent(): singleton ErgoAgentPay,
│   │                           signer = URL distante ou seed local (ou
│   │                           mode verify-only si aucun des deux n'est configuré)
│   └── types.ts                SageQuote, PaymentProof, etc.
└── explorer/
    └── fetch-tx.ts             Récupérateur d'explorateur testnet avec bizarreries v1

src/app/api/sage/
├── chat/route.ts               Point d'accès SSE streaming, conscient du premium
├── quote/route.ts              POST { question } → SageQuote | { premium: false }
└── verify-payment/route.ts     POST { quote, question, noteBoxId } → token

src/components/sage/
├── SageWidget.tsx              Chat flottant, orchestre le flux de paiement
├── PaymentPanel.tsx            402 → quote → input → verify
└── MessageBody.tsx             Rendu markdown minimal

src/app/[locale]/r/sage/[id]/
└── page.tsx                    Reçu public, Schema.org Action

scripts/sage-signer/
├── bootstrap.mjs               --reserve, --issue-note, --balance, --env-out
└── signer.mjs                  Signataire HTTP autonome, Fleet SDK Prover
```

Code Sage total : ~2500 lignes réparties sur le chat, la lib de paiement, le widget, la page de reçu, et le CLI bootstrap. Le CLI bootstrap est ce qui a créé la Reserve on-chain et ce qu'on utilise pour émettre des Notes d'auto-test — c'est aussi une référence utile pour tout autre service MCP payant qui veut se livrer sur Ergo sans écrire le câblage du signataire de zéro.

## Trois problèmes réels que nous avons rencontrés

### 1. Le point d'accès `/boxes/{id}` de l'explorateur testnet est silencieusement cassé pour les boxes non dépensées

Le `verifyPayment` de Sage appelle `ergo-agent-pay.checkNote(boxId)`. Cela frappe l'explorateur v1 à `/boxes/{box_id}`. Pour les sorties DÉPENSÉES ça marche. Pour les boxes NON DÉPENSÉES — le cas qui compte réellement, puisqu'on vérifie une Note fraîchement émise qui n'a pas encore été remboursée — ça retourne 404. La même box apparaît parfaitement dans `/boxes/unspent/byAddress/{addr}`.

La page de reçu a heurté le même mur.

On le contourne avec un fallback dans `fetch-tx.ts` : si la recherche autonome échoue, on scanne la liste des sorties non dépensées du portefeuille et on trouve la correspondance. C'est moche. C'est le bon move jusqu'à ce qu'on file un correctif en amont ou qu'on se détourne complètement du point d'accès v1.

### 2. L'explorateur v1 retourne les registres comme objets, pas comme des chaînes hex

`ergo-agent-pay@0.3.0` tape `additionalRegisters` comme `Record<string, string>` et appelle `regs.R5.slice(2)` pour supprimer le préfixe de type sigma. L'explorateur testnet v1 retourne en fait chaque registre comme `{ serializedValue, sigmaType, renderedValue }`. L'appel `.slice()` meurt avec `e.slice is not a function` et le `verifyPayment` de rails-ergo qui l'entoure mappe l'erreur à `NOTE_NOT_FOUND`.

On enveloppe l'agent avec un Proxy dans `note-ops.ts` qui intercepte `network.getBox` et aplatit tout registre de forme objet à sa chaîne hex `serializedValue`. Remplacement `ErgoNoteOps` drop-in. ~30 lignes incluant les imports. Une fois que `ergo-agent-pay@0.4` accepte les deux formes en amont, le wrapper disparaît.

### 3. On envoyait le mauvais `task_output` au rail

Celle-là a coûté une après-midi. Le `verifyPayment` de rails-ergo calcule `blake2b256(task_output)` et le compare à R6 de la Note. La Note a été émise avec `R6 = blake2b256(canonicalize(question))`. Donc `task_output` doit égaler `canonicalize(question)` — les bytes bruts dont le hash correspond à R6.

On avait été en train d'envoyer `hashQuestionForToken(question)` — un hash HMAC totalement différent utilisé ailleurs pour la liaison de token. Résultat : `TASK_HASH_MISMATCH` sur chaque tour payant.

Le fix est une ligne dans `verify-payment/route.ts`. La leçon est le commentaire qu'on a laissé à côté : quand deux couches impliquent toutes les deux du hachage, nomme les variables pour ce qu'elles hachent, pas pour ce qu'elles s'appellent dans le protocole.

## Ce que signifie le mode "verify-only" et pourquoi on l'a livré

Sage s'exécute actuellement en **mode verify-only** : l'étape `verifyPayment` s'exécute sur chaque tour payant (lecture seule — pas de signature nécessaire), mais la deuxième transaction on-chain (celle qui rédempt la Note et déplace le 0.001 ERG dans le portefeuille de Sage) est **différée**.

C'est intentionnel, pas un bug. Deux raisons :

1. **La clé de signature vit en dehors de Vercel.** Mettre la clé privée du portefeuille du vendeur dans une var env serverless est une mauvaise hygiène opérationnelle. Le compromis de `ANTHROPIC_API_KEY` ne devrait pas drainer le portefeuille. Donc la signature de remboursement se fait via un signataire HTTP local (`scripts/sage-signer/signer.mjs`) que l'opérateur exécute sur sa propre machine et expose via `cloudflared tunnel`. Sage POST les txs non signées; le signataire valide contre un plafond de dépense par-tx + liste blanche de destinataires avant de signer.
2. **La Note se rembourse automatiquement à l'expiration.** Si Sage ne rembourse pas la Note avant la deadline `+120 blocks`, la condition de dépense de la Note rétablit les fonds à la reserve de l'acheteur. Donc un remboursement différé ne piège pas l'argent — au pire c'est une réponse premium gratuite, ce qui est OK en phase de mise en place testnet.

Les reçus en mode verify-only affichent un badge jaune `verified · pending redemption`. Quand le signataire est câblé et que la prochaine requête payée arrive, ce tour et les Notes passées non remboursées basculent tous à une vue verte `settled` automatiquement — la page s'upgrade elle-même quand l'état de la chaîne change.

L'annonce Twitter dira "vérifié, règlement en attente dans cette exécution" honnêtement. Le câblage du signataire est une tâche d'une soirée ; on ne veut pas survaloriser.

## Ce qui vient ensuite

- **Settler online.** Tunnel le signataire, configure `SAGE_SIGNER_URL` sur Vercel, vois la prochaine Note payée basculer de en attente à réglée avec une tx on-chain de remboursement réelle.
- **Conformité Accord.** Exécute `@accord-protocol/conformance --target https://www.ergoblockchain.org/api/sage/quote`, signe le résultat avec une clé ed25519, publie l'artifact signé, met à jour l'entrée [Sage dans le registre](https://github.com/accord-protocol/accord-protocol/blob/main/registry/providers/sage.json) avec le hash de conformité. Sage devient le premier fournisseur L4-certifié dans le registre Accord public.
- **Registre des agents surfacé sur le site.** `/ergo-watch/agents` récupérera le registre Accord et rendra chaque fournisseur listé avec ses capacités, rails, et reçus récents. La page de profil de Sage devient un parmi tant d'autres.
- **Bande d'activité agent en direct sur la page d'accueil.** Les reçus payés les plus récents sur le registre, défilant sous les stats du réseau. Le site passe de "on décrit l'économie des agents" à "voici ce qu'elle fait en ce moment."
- **Sage multi-tenant.** Extrait le widget dans un paquet npm `@accord/sage-widget` autonome. N'importe quel site de docs peut déposer `<script src="…/sage.js" data-rag="…" data-receiver="9f…">` et avoir son propre concierge payant avec son propre portefeuille Ergo. Multiplicateur de distribution — chaque embed est une nouvelle adresse Ergo de récepteur sur un nouveau domaine.

## Essaie-le

[Ouvre ergoblockchain.org](https://www.ergoblockchain.org). En bas à droite, le bouton orange **Ask Sage**. Les questions gratuites restent gratuites. Demande `/code` ou quelque chose de substantiel — le panel de paiement te guide pour émettre une Note testnet. Utilise un portefeuille testnet ([Nautilus](https://github.com/capt-nemo429/nautilus-wallet) est le standard, ou exécute `node scripts/sage-signer/bootstrap.mjs --issue-note` depuis un clone du repo) et une petite quantité de testnet ERG depuis le [faucet public](https://testnet.ergofaucet.org/).

Source : [le repo ergoblockchain.org](https://github.com/ergoplatform) expédie tout ce qui est décrit ci-dessus. Le pattern Accord que Sage utilise est le câblage acheteur/vendeur canonique à [`examples/16-paid-mcp-ergo-testnet`](https://github.com/accord-protocol/accord-protocol/tree/main/examples/16-paid-mcp-ergo-testnet).

Le manifeste et l'agent fonctionnel sont maintenant la même chose. C'est tout l'intérêt.

## FAQ

### Pourquoi testnet et pas mainnet ?

Deux raisons. Premièrement, le contrat de remboursement utilise le portefeuille du vendeur Sage comme condition de dépense sans audit. Les écritures mainnet contre ErgoScript non audité ne devraient jamais arriver — les portes de sécurité de production dans `ergo-agent-pay` les bloquent activement. Deuxièmement, l'ensemble de la pile Accord est à v0.4 et les manifestes de conformité sont toujours en `draft-pre-audit`. Mainnet est sur la roadmap ; la preuve d'aujourd'hui est testnet.

### Comment c'est différent de x402 ou Stripe Agentic Commerce ?

x402 est un protocole payment-required — le pattern du "défi 402" est le même. La différence est le rail. x402 enveloppe typiquement un paiement par carte / Stripe et traite la chaîne comme une couche de reporting. Accord met la règle d'acceptation du travail dans la condition de dépense elle-même : la Note ne peut pas être remboursée sauf si le vendeur a réellement livré du travail qui se hache avec le hash de la tâche de l'accord. Stripe Agentic Commerce est le miroir côté acheteur — les agents tenant les cartes. Utile pour les achats autorisés par humains. Couche différente du règlement agent-à-agent.

### Est-ce que ça marche sans le signataire ?

Oui. C'est le mode verify-only décrit ci-dessus. Le flux de réponse premium sur chaque verify réussi ; seule la deuxième transaction on-chain (remboursement de Sage) est différée. Les reçus affichent "settlement pending" jusqu'à ce que le signataire soit online.

### Puis-je exécuter mon propre Sage ?

Bientôt, correctement — c'est le travail multi-tenant dans la section "Ce qui vient ensuite". Aujourd'hui, tu peux cloner le repo, configurer ton propre portefeuille via `scripts/sage-signer/bootstrap.mjs`, et exécuter une instance Sage depuis ton propre déploiement. Documentation dans [`docs/sage-provisioning.md`](https://github.com/ergoplatform).

### Où vont les coûts de l'API Anthropic ?

La clé API Anthropic est en env Vercel. On paie pour le trafic de l'accès gratuit. Les tours premium récupèrent le coût LLM via la Note (0.001 ERG ≈ $0.0007 aux "taux" testnet imaginaires comme réels). L'économie de la tarification mainnet est ouverte — le navire v0 est un point de preuve, pas un modèle de marge.
