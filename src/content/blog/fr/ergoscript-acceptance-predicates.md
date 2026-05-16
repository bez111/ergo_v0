---
title: "Prédicats d'acceptation ErgoScript : vérification du travail on-chain pour les paiements d'agents IA"
slug: "/blog/ergoscript-acceptance-predicates"
seo_title: "Prédicats d'acceptation ErgoScript : vérification de tâches on-chain pour les paiements d'agents IA"
meta_description: "Découvrez comment les prédicats d'acceptation ErgoScript codent les conditions d'accomplissement des tâches dans les UTxOs de paiement, permettant aux agents IA de vérifier le travail avec moins d'hypothèses de confiance hors chaîne."
excerpt: "Les prédicats d'acceptation transforment un paiement en contrat de travail conditionnellement remboursable : le destinataire ne peut rembourser que lorsque la condition de tâche convenue est satisfaite."
author: "Ergo Developer Relations"
date_published: "2026-03-12"
date_modified: "2026-05-08"
status: "Expliqueur technique. Les exemples de prédicats sont éducatifs ; les scripts de production nécessitent un audit et des vecteurs de test exacts."
tags: ["ErgoScript", "AI agent payments", "acceptance predicates", "eUTXO", "work verification"]
target_keywords: ["prédicat d'acceptation ErgoScript", "vérification de tâche d'agent IA", "vérification de travail on-chain", "conditions de paiement programmables", "contrats intelligents Ergo"]
---

# Prédicats d'acceptation ErgoScript : vérification du travail on-chain pour les paiements d'agents IA

**État en mai 2026 :** les prédicats d'acceptation sont un modèle de conception construit sur ErgoScript et eUTXO. Les exemples ci-dessous sont éducatifs et ne doivent pas être déployés avec de vrais fonds sans examen, vecteurs de test et audit.

La plupart des systèmes de paiement répondent à une seule question : le payeur a-t-il envoyé de l'argent ?

Le commerce avec agents autonomes pose une question plus difficile : le destinataire a-t-il complété le travail pour lequel le paiement était destiné ?

Si un agent IA paie pour une réponse d'API statique, un simple reçu de paiement peut suffire. Mais si l'agent paie un autre agent pour résumer un document, accomplir une tâche, produire une preuve, générer du code, classifier des données ou retourner un résultat signé, le paiement seul est insuffisant. Le payeur a besoin d'un moyen de lier le remboursement à l'acceptation.

Un **prédicat d'acceptation** est cette liaison. C'est une condition intégrée à l'instrument de paiement lui-même. Le destinataire ne peut rembourser que si le prédicat évalue à vrai.

En termes Ergo, le prédicat vit dans une condition de dépense ErgoScript. Il peut inspecter les valeurs, les registres, les variables de contexte, les signatures, la hauteur de bloc et autres données de transaction. Le résultat est un paiement qui se comporte plus comme un contrat de travail auto-exécutoire qu'un simple transfert.

## TL;DR

### Le paiement n'est pas la même chose que l'acceptation

Une transaction prouve que la valeur s'est déplacée. Elle ne prouve pas que le travail a été livré. Les prédicats d'acceptation ajoutent une règle de vérification au paiement.

### eUTXO rend le prédicat explicite

Dans Ergo, une UTxO a une condition de dépense. Pour rembourser une Note ou une boîte de paiement, le dépensier doit créer une transaction qui satisfait cette condition. La règle est visible et déterministe.

### Le prédicat le plus simple vérifie un hash de tâche

Par exemple : « rembourser cette Note uniquement si la sortie soumise fait un hash correspondant au digest attendu avant la limite de temps ». Ce n'est pas suffisant pour chaque tâche, mais c'est le modèle minimal.

### Les prédicats réduisent la confiance ; ils n'éliminent pas toute confiance

Si le prédicat vérifie un hash de sortie connu, la confiance est faible. S'il s'appuie sur un vérificateur tiers, le vérificateur devient une partie du modèle de confiance. Le prédicat rend les hypothèses explicites ; il ne rend pas magiquement possibles les tâches impossibles à vérifier.

## Le problème : les agents paient pour les résultats, pas seulement l'accès

Un humain peut gérer l'ambiguïté. Si un entrepreneur fait du mauvais travail, l'humain peut se plaindre, contester, renégocier ou refuser un paiement futur. Un agent autonome a besoin de règles plus claires.

Considérez un simple pipeline d'agents :

1. L'agent de recherche paie l'agent de données pour un ensemble de données.
2. L'agent de données paie l'agent de nettoyage pour des enregistrements normalisés.
3. L'agent de nettoyage paie l'agent de modèle pour l'inférence.
4. L'agent de recherche paie l'agent d'édition pour la sortie finale.

Chaque étape a une définition différente du succès. « Le paiement s'est produit » n'est pas suffisant. Le pipeline a besoin de règles d'acceptation :

- L'ensemble de données a-t-il été signé par le fournisseur attendu ?
- Les données nettoyées correspondaient-elles au schéma attendu ?
- Le hash de la sortie du modèle correspondait-il au résultat engagé ?
- La réponse a-t-elle été livrée avant la limite de temps ?
- Le vérificateur a-t-il signé l'acceptation ?

Sans acceptation programmable, chaque règle vit hors chaîne dans le code d'application. Cela crée un point de confiance centralisé.

## Le modèle fondamental

Un prédicat d'acceptation minimal a quatre parties :

1. **Engagement de tâche** — quelle sortie ou preuve est attendue ?
2. **Limite de temps** — jusqu'à quand la Note peut-elle être remboursée ?
3. **Autorisation du destinataire ou du vérificateur** — qui peut rembourser ou accepter ?
4. **Règle de remboursement** — qu'est-ce qui doit être vrai dans la transaction de dépense ?

Un prédicat simplifié pourrait dire :

```scala
val submittedOutput = getVar[Coll[Byte]](0).get
val outputHashOk = blake2b256(submittedOutput) == TASK_HASH
val beforeDeadline = HEIGHT < EXPIRY_HEIGHT
val receiverOk = proveDlog(RECEIVER_PK)

sigmaProp(outputHashOk && beforeDeadline) && receiverOk
```

Cela signifie : le destinataire peut rembourser avant l'expiration si la transaction inclut la sortie de tâche dont le hash Blake2b-256 correspond au hash de tâche engagé.

Dans un système réel, la sortie peut ne pas être le résultat complet de la tâche. Cela pourrait être un reçu signé, une preuve, une déclaration de vérificateur, une racine Merkle ou un digest d'un artefact stocké en externe.

## Pourquoi la cohérence Blake2b est importante

Si le prédicat ErgoScript utilise `blake2b256`, le code client doit calculer le même digest. Ne calculez pas SHA-256 dans le client et Blake2b dans le contrat sauf si l'article indique clairement que le code est du pseudo-code.

Un assistant JavaScript devrait ressembler davantage à ceci :

```ts
import { blake2b } from "@noble/hashes/blake2b";
import { bytesToHex, utf8ToBytes } from "@noble/hashes/utils";

export function taskHash(output: string): string {
  const digest = blake2b(utf8ToBytes(output), { dkLen: 32 });
  return bytesToHex(digest);
}

const expected = taskHash("the answer is 42");
console.log(expected);
```

Les octets exacts importent. Normalisez les chaînes, les encodages et les fins de ligne avant le hachage. Sinon, deux agents pourraient ne pas être d'accord sur le digest de la même sortie lisible par l'humain.

## Prédicats d'acceptation vs dépôt de garantie

Le dépôt de garantie traditionnel dit : mettez les fonds au milieu, puis libérez-les après que quelqu'un décide que le travail est terminé.

Les prédicats d'acceptation disent : mettez la règle de libération dans la condition de dépense. La règle peut être objective, partiellement objective ou basée sur un vérificateur.

| Modèle | Qui décide ? | Force | Faiblesse |
|---|---|---|---|
| Dépôt de garantie manuel | Arbitre humain | Flexible | Lent, centralisé, coûteux |
| Facturation côté API | Serveur de service | Simple | Le serveur est de confiance |
| Libération basée sur oracle | Oracle externe | Fonctionne pour les faits externes | Confiance et latence de l'oracle |
| HTLC | Préimage de hash | Simple et robuste | Expressivité limitée des conditions |
| Prédicat d'acceptation Ergo | Règle ErgoScript | Programmable et explicite | Vérifie uniquement ce que le script peut observer ou ce qu'un vérificateur signe |

La conception correcte dépend de la tâche. Un prédicat de hash fonctionne pour les sorties engagées. Un vérificateur signé fonctionne pour la qualité subjective. Une preuve sans connaissance peut fonctionner pour l'acceptation préservant la confidentialité. Le prédicat rend le modèle de confiance visible.

## Ce que les prédicats peuvent vérifier

Les prédicats d'acceptation fonctionnent bien pour :

- les hashes de sortie exacts ;
- les reçus de vérificateur signés ;
- les vérifications de limite de temps ;
- les limites de budget ;
- l'autorisation des destinataires ;
- les propriétés des jetons ou Notes ;
- les références Reserve ;
- les mises à jour de Tracker ;
- les engagements de données simples ;
- les preuves transmises via le contexte de transaction.

## Ce que les prédicats ne peuvent pas vérifier seuls

Un prédicat ne peut pas magiquement inspecter la réalité arbitraire hors chaîne. Il ne peut pas savoir si un essai généré est « bon » sauf si le critère de qualité est codé ou un vérificateur signe un reçu. Il ne peut pas savoir si une réponse d'API était utile sauf si cette utilité est réduite à une condition vérifiable.

Ce n'est pas un défaut. C'est une discipline : si vous ne pouvez pas définir l'acceptation, vous ne pouvez pas automatiser le paiement en toute sécurité.

## Exemple de disposition de registre

Un paiement de style Note pourrait coder les données de tâche dans les registres :

| Registre | Signification |
|---|---|
| R4 | ID de boîte Reserve ou ID d'accord |
| R5 | Hauteur de bloc d'expiration |
| R6 | Hash de tâche ou engagement de tâche |
| R7 | Clé publique du vérificateur, ID de politique ou métadonnées de service |

La transaction de remboursement peut alors fournir des variables de contexte :

| Variable de contexte | Signification |
|---|---|
| Var 0 | Octets de sortie soumis ou de reçu |
| Var 1 | Signature de vérificateur optionnelle |
| Var 2 | Métadonnées optionnelles ou preuve Merkle |

Gardez la disposition documentée. Un prédicat que personne ne peut décoder n'est pas un protocole utilisable.

## Un prédicat basé sur vérificateur

Certaines tâches nécessitent une acceptation subjective. Dans ce cas, le prédicat peut exiger une signature de vérificateur.

```scala
val receipt = getVar[Coll[Byte]](0).get
val receiptHashOk = blake2b256(receipt) == RECEIPT_HASH
val verifierOk = proveDlog(VERIFIER_PK)
val beforeDeadline = HEIGHT < EXPIRY_HEIGHT

sigmaProp(receiptHashOk && beforeDeadline) && verifierOk
```

Cela n'élimine pas la confiance du vérificateur. Elle la limite. Le rôle du vérificateur est explicite, et le reçu peut être archivé, audité ou défié par la politique d'application.

## Pourquoi c'est important pour Accord

Accord décrit les accords de travail et les reçus de vérification. Les prédicats d'acceptation ErgoScript sont un moyen d'appliquer ces reçus sur un rail de règlement.

Un flux futur peut ressembler à ceci :

1. L'accord Accord définit la tâche, le prix et le vérificateur.
2. La Note Ergo code la valeur de paiement, l'expiration et le prédicat.
3. Le travailleur complète la tâche.
4. Le vérificateur émet un reçu de vérification.
5. Le travailleur rembourse la Note si le prédicat accepte le reçu.
6. Le reçu de règlement enregistre la transaction de remboursement.

C'est une boucle complète travail-paiement : accord, vérification, règlement.

## Modèle de menace

### Attaque par rejeu

Un travailleur réutilise le même reçu pour plusieurs paiements. Atténuation : incluez callId, ID d'accord ou ID de Note dans le reçu signé/vérifiable.

### Remboursement tardif

Un travailleur rembourse après la limite de temps. Atténuation : incluez `HEIGHT < expiry` dans le prédicat.

### Sortie de tâche incorrecte

Un travailleur soumet une sortie pour une autre tâche. Atténuation : incluez le hash de tâche, l'ID d'accord et les données de payeur/destinataire dans l'engagement.

### Capture du vérificateur

Un vérificateur accepte du mauvais travail. Atténuation : utilisez la réputation, le seuil multi-vérificateur, la participation, les journaux d'audit ou des prédicats objectifs quand possible.

### Incompatibilité d'encodage

Les agents font un hash de représentations d'octets différentes. Atténuation : publiez l'encodage canonique et les vecteurs de test.

### Bug de contrat

Le prédicat a une erreur de logique. Atténuation : testnet, examen formel, audit externe et manifestes signés.

## Meilleures pratiques

- Publiez la source du prédicat et le hash compilé.
- Utilisez des encodages canoniques.
- Incluez des vecteurs de test.
- Gardez les prédicats étroits.
- Séparez le reçu de paiement du reçu de travail.
- Ajoutez une expiration.
- Ajoutez la protection contre la relecture.
- Évitez les prédicats subjectifs sauf si un vérificateur est explicite.
- Ne déployez pas d'exemples non auditées avec de vrais fonds.

## FAQ

### Qu'est-ce qu'un prédicat d'acceptation ?

Un prédicat d'acceptation est une condition programmable qui doit être satisfaite avant qu'un instrument de paiement ne puisse être remboursé. Dans un contexte de paiement d'agent Ergo, il peut lier le remboursement à la sortie de tâche, un reçu de vérificateur, une limite de temps ou une autre condition codée dans ErgoScript.

### Cela élimine-t-il le besoin de dépôt de garantie ?

Cela peut éliminer certains cas d'usage de dépôt de garantie, surtout quand la règle d'acceptation est objective. Si le travail nécessite un jugement subjectif, vous pourriez toujours avoir besoin d'un vérificateur ou d'un processus de différend. La différence est que le rôle du vérificateur peut être codé et audité.

### Ethereum peut-il implémenter la même idée ?

Ethereum peut implémenter des contrats de paiement conditionnels, mais la conception est généralement au niveau de l'application et peut impliquer des contrats de dépôt de garantie, des choix d'améliorabilité, une conception d'oracle, une dynamique de gaz et des risques de modèle de compte. Le modèle eUTXO d'Ergo rend l'objet de paiement et la règle de dépense explicites.

### Les prédicats d'acceptation sont-ils prêts pour la production ?

La capacité ErgoScript sous-jacente est réelle, mais tout prédicat spécifique doit être examiné. Un prédicat de démonstration n'est pas un contrat de production. Utilisez testnet, publiez des vecteurs de test et attendez les audits avant l'utilisation mainnet.

### Quel est le prédicat utile le plus simple ?

Le prédicat utile le plus simple vérifie un hash de tâche et une limite de temps : rembourser uniquement si la sortie soumise fait un hash correspondant au digest engagé avant l'expiration. C'est limité, mais cela démontre le concept fondamental.

## Brouillon JSON-LD d'article

```json
{
  "@context": "https://schema.org",
  "@type": "TechArticle",
  "headline": "Prédicats d'acceptation ErgoScript : vérification du travail on-chain pour les paiements d'agents IA",
  "description": "Découvrez comment les prédicats d'acceptation ErgoScript codent les conditions d'accomplissement des tâches dans les UTxOs de paiement, permettant aux agents IA de vérifier le travail avec moins d'hypothèses de confiance hors chaîne.",
  "datePublished": "2026-03-12",
  "dateModified": "2026-05-08",
  "author": { "@type": "Organization", "name": "Ergo Developer Relations" },
  "publisher": { "@type": "Organization", "name": "Ergo Platform" },
  "mainEntityOfPage": "https://www.ergoblockchain.org/blog/ergoscript-acceptance-predicates",
  "keywords": ["ErgoScript", "acceptance predicates", "AI agent payments", "eUTXO", "work verification"]
}
```

## Notes de source

- Article original : https://www.ergoblockchain.org/blog/ergoscript-acceptance-predicates
- Dépôt du protocole Accord : https://github.com/accord-protocol/accord-protocol
- Page technologique Ergo : https://www.ergoblockchain.org/technology