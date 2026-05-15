---
title: "Mise à jour Q2 2026 du protocole Accord : Ce qui a été déployé dans la pile de l'économie des agents Ergo"
slug: "/blog/accord-protocol-q2-2026-update"
seo_title: "Accord Protocol Q2 2026 : SDK de paiement pour agents IA, serveur MCP et démos testnet Ergo"
meta_description: "Mise à jour Q2 2026 du protocole Accord : SDK de paiement pour agents IA, Notes Ergo, serveur MCP, adaptateurs LangChain/OpenAI/CrewAI/AutoGen, démos testnet et feuille de route mainnet contrôlée par audit."
excerpt: "Deux mois après la première version du SDK de paiement pour agents Ergo, le protocole Accord déploie maintenant une couche d'accord testnet-first, un cycle de vie Note complet, des adaptateurs de framework, des outils MCP et dix exemples fonctionnels."
author: "Ergo Developer Relations"
date_published: "2026-05-06"
date_modified: "2026-05-08"
status: "Bêta testnet. L'utilisation en mainnet d'Accord, des contrats de référence ChainCash/Basis et des flux SDK de paiement pour agents reste contrôlée par des manifestes d'audit signés."
tags: ["Accord Protocol", "Ergo", "AI agent payments", "MCP", "x402", "developer update"]
target_keywords: ["Accord Protocol", "AI agent payments SDK", "Ergo agent payments", "MCP server payments", "x402 work verification", "autonomous agent settlement"]
---

# Mise à jour Q2 2026 du protocole Accord : Ce qui a été déployé dans la pile de l'économie des agents Ergo

**État en mai 2026 :** Les primitives du protocole Ergo de base sont actives sur mainnet. Le protocole Accord, les SDK de paiement pour agents Ergo, les contrats de référence ChainCash/Basis et les démos publiques sont **testnet-first** sauf indication explicite contraire. L'utilisation en production sur mainnet devrait rester bloquée jusqu'à la publication et la vérification de manifestes d'audit signés.

Il y a deux mois, le premier SDK public de paiement pour agents Ergo répondait à une question précise : un agent logiciel autonome peut-il effectuer un paiement sur Ergo sans qu'un humain soit dans la boucle ? La réponse était oui, mais la première version était volontairement restreinte. Elle pouvait envoyer de la valeur, émettre une Note de base, exposer quelques assistants et prouver la direction.

Q2 change la forme du projet. Le travail a migré d'un seul SDK rail Ergo vers le **protocole Accord** : un protocole d'accord ouvert pour le travail autonome des agents. Le rail Ergo reste la première implémentation de référence end-to-end, mais le cadrage est désormais plus large. MCP explique comment les agents appellent des outils. Les protocoles de style A2A expliquent comment les agents communiquent. Les flux de style x402 expliquent comment une requête HTTP payante peut se produire. Accord explique ce qui a été promis, comment l'achèvement a été vérifié et comment le règlement a été enregistré.

Cette distinction est importante. Le paiement seul n'est pas tout le problème. Un appel API payant vous dit seulement que de l'argent a changé de mains. Le commerce des agents a aussi besoin d'un accord : qui a demandé le travail, quel résultat était attendu, quel vérificateur l'a accepté, quel rail a réglé et que se passe-t-il si le travail est partiel, en retard ou invalide. Accord est la couche qui transforme un paiement en contrat de travail vérifiable.

## TL;DR

### Accord est maintenant le protocole parapluie

Le référentiel `ergo-agent-economy` précédent a migré vers le protocole Accord. Le repo décrit maintenant une couche d'accord agnostique au rail avec des rails de référence Ergo, Rosen, Base/EVM et compatibles x402. Le rail Ergo fournit toujours l'implémentation end-to-end la plus complète car eUTXO, ErgoScript, Notes, Reserves et les prédicats d'acceptation s'intègrent naturellement au design.

### La pile est testnet-first et contrôlée par audit

Le projet est open source et fonctionnel, mais non certifié en production. Le statut du repo est explicite : **bêta testnet** et **mainnet bloqué jusqu'aux manifestes d'audit signés**. Les développeurs doivent traiter le code actuel comme une implémentation de référence pour les prototypes, démos et déploiements testnet.

### Le cycle de vie Note est maintenant implémenté de bout en bout

Le rail Ergo couvre maintenant le chemin complet Reserve → Note → Tracker → Acceptance Predicate : créer une Reserve, émettre des Notes, vérifier des Notes, racheter des Notes, régler les lots et déployer l'état Tracker. C'est le cycle de vie minimum viable pour les instruments porteurs programmables.

### Trois surfaces de développement sont disponibles

Les outils TypeScript/Node, Python et MCP permettent aux développeurs d'aborder la pile depuis différents runtimes. Un agent JavaScript peut émettre des Notes. Un agent Python peut payer une API. Un hôte compatible MCP peut exposer des outils de paiement à un assistant IA ou un environnement de développement.

### Le prochain goulot d'étranglement n'est pas l'imagination ; c'est la vérification

La phase suivante est l'audit, la normalisation et la preuve des développeurs : examen de sécurité externe, manifestes de statut clairs, une dApp de référence testnet hébergée, plus d'intégrations de framework et de meilleures tests de conformité.

## Nommage et migration

Le changement de marque a créé une distinction nécessaire que chaque développeur doit comprendre avant de construire.

| Couche | Nom canonique | Signification |
|---|---|---|
| Protocole parapluie | Accord Protocol | Accord, reçus de vérification, reçus de règlement et spécifications cross-rail. |
| Packages canoniques | `@accord-protocol/*` | Types partagés, outils de conformité, Accord/MCP, Accord/402 et objets de protocole cross-rail. |
| Rail de référence Ergo | Packages `ergo-agent-*` | Les SDK spécifiques à Ergo pour Notes, Reserves, Trackers, prédicats d'acceptation et démos testnet. |
| Contrats de référence | Prototypes ChainCash / Basis | Implémentation de référence open-source de Notes programmables et flux de crédit ; non audité. |

Une simple règle empirique : si vous lisez la spécification cross-rail, commencez par `@accord-protocol/*`. Si vous construisez un agent testnet Ergo aujourd'hui, commencez par les packages rail `ergo-agent-*`. Si vous déployez quelque chose impliquant les vrais fonds des utilisateurs, arrêtez à la porte d'audit.

## Ce qui a été déployé

### 1. Cycle de vie Note complet

L'étape clé est le cycle de vie Note. Une Note n'est pas simplement un token. C'est un instrument porteur programmable : une créance en forme de UTxO contre une Reserve, avec valeur, expiration, règles de rachat et logique d'acceptation optionnelle.

Le cycle de vie actuel comprend :

1. **Créer une Reserve** — déployer les collatéraux et définir les règles d'émission.
2. **Émettre une Note** — créer une créance programmable contre la Reserve.
3. **Vérifier une Note** — décoder les registres, l'expiration et les paramètres d'acceptation.
4. **Racheter une Note** — dépenser la Note quand le prédicat est satisfait.
5. **Régler un lot** — racheter plusieurs Notes ensemble pour réduire les frais de règlement.
6. **Mettre à jour un Tracker** — prévenir le double-rachat dans le système de crédit.

Pour les agents, c'est la différence entre « envoyer une pièce » et « émettre un budget dépensable avec des règles ». Un agent parent peut émettre une Note limitée à un sous-agent. Le sous-agent peut payer un fournisseur d'outil. Le fournisseur d'outil peut plus tard racheter les Notes acceptées en lot. La Reserve reste la source auditable du soutien.

### 2. Accords, reçus de vérification et reçus de règlement

Accord ajoute un vocabulaire au-dessus du rail.

Un **accord Accord** répond à : qu'a été demandé, par qui, pour combien, selon quelle règle de vérification ?

Un **reçu de vérification** répond : un vérificateur a-t-il accepté, rejeté ou accepté partiellement le travail ?

Un **reçu de règlement** répond : la valeur s'est-elle réglée, sur quel rail, avec quelle transaction ou preuve de paiement ?

Cette séparation est la principale mise à niveau stratégique. Elle signifie qu'Accord peut discuter de paiements x402-style HTTP, de Notes Ergo, de rails de pièces stables ou de futurs systèmes de règlement tout en préservant la même structure d'accord de travail.

## Dix exemples que les développeurs peuvent exécuter

Le repo inclut maintenant une séquence pratique plutôt qu'un seul hello-world :

1. Paiement agent-à-agent basique.
2. Paiement par Note au lieu d'ERG brut.
3. Prédicat d'acceptation attaché à la sortie de la tâche.
4. Budget d'orchestrateur pour sous-agents.
5. Serveur API payant.
6. Agent Python payant pour un appel API.
7. Paiement en streaming pour services basés sur l'utilisation.
8. Trésor multisig pour budgets multi-agents.
9. Exemple de règlement multi-agent CrewAI.
10. Agent AutoGen avec un outil de paiement Ergo.

Les exemples doivent rester testnet-first. C'est une fonctionnalité, pas une faiblesse. Les paiements par agents sont une nouvelle zone de surface : la garde des clés, la protection contre les rejeux, les remboursements, le travail partiel, la confiance du vérificateur et le règlement échoué ont tous besoin d'une manipulation soigneuse avant que les flux mainnet ne soient recommandés.

## Adaptateurs de framework

Les développeurs d'agents ne veulent pas devenir des spécialistes blockchain avant de livrer un prototype. La direction du SDK est donc correcte : rencontrer les développeurs à l'intérieur des frameworks qu'ils utilisent déjà.

### LangChain

Les exemples LangChain exposent le paiement et les opérations Note comme des outils. Une chaîne ou un agent peut demander une ressource payante, vérifier si une Note a été acceptée et continuer une fois le paiement ou la vérification complétée.

### Appel de fonction OpenAI

L'interface de style fonction OpenAI transforme le paiement en opération appelable. Le modèle n'a pas besoin de comprendre les détails de l'UTxO ; il reçoit une définition d'outil contrainte et l'application hôte applique la politique.

### CrewAI et AutoGen

Les frameworks multi-agents rendent le problème de paiement plus évident. Un coordinateur assigne du travail aux agents. Les agents appellent des APIs, délèguent des sous-tâches et produisent des résultats. Sans instruments budgétaires internes, tous les coûts s'effondrent de nouveau sur l'opérateur humain. Les Notes permettent au budget de se déplacer avec la tâche.

### MCP

MCP est important car c'est un pont pratique entre les assistants IA, les outils de développement et les capacités externes. Un serveur de paiement MCP peut exposer « payer », « émettre Note », « vérifier Note » ou « vérifier travail » à un hôte compatible. Cela rend le paiement un outil, pas une intégration personnalisée.

## Où x402 s'intègre

x402 est important car il réintroduit HTTP 402 Payment Required comme un vrai motif de paiement programmatique. Un serveur peut répondre avec des instructions de paiement, le client peut joindre un paquet de paiement, et un facilitateur peut vérifier et régler le paiement. C'est une interface propre pour les APIs payantes, le contenu réservé aux abonnés et les requêtes machine-à-machine.

Accord ne devrait pas prétendre remplacer x402. Le positionnement plus fort est :

> **x402 vérifie le paiement. Accord vérifie l'achèvement. Ergo règle la valeur programmable.**

Une requête payée peut utiliser un défi de style x402. L'accord de travail peut être enregistré dans Accord. Le règlement peut se produire via des Notes Ergo, des actifs Rosen, un rail stablecoin EVM ou un autre adaptateur. Le point important n'est pas quel rail remporte tous les paiements ; c'est si l'accord, la vérification et le règlement sont composables.

## Ce que vous pouvez construire aujourd'hui

Utilisez la pile actuelle pour des expériences testnet telles que :

- un endpoint API payant qui retourne des données après un paiement testnet vérifié ;
- un outil MCP qui charge par appel ;
- un agent parent qui émet des Notes aux sous-agents avec des limites de dépense ;
- un marché de travail où l'acheteur paie seulement après qu'un vérificateur accepte la sortie ;
- une démo d'inférence en streaming avec de petits paiements mesurés ;
- une démo de documentation montrant la différence entre vérification de paiement et vérification de travail.

N'utilisez pas les contrats de référence non audités pour l'émission de crédit avec argent réel. Ne détenez pas les fonds des utilisateurs. N'annoncez pas la préparation pour la production avant que les manifestes d'audit n'existent.

## Feuille de route pour le reste de 2026

### 1. Audit externe et manifestes signés

La priorité absolue est l'examen de sécurité. Un manifeste d'audit signé devrait spécifier le hash de script exact, l'ErgoTree compilé, la version du package, l'adaptateur rail et le réseau de déploiement. « Audité » doit signifier un artefact spécifique, pas une affirmation large.

### 2. Découverte standard

Les agents ont besoin d'un moyen prévisible de découvrir les conditions de paiement. Une future norme pourrait exposer `.well-known/accord.json`, des en-têtes HTTP ou une extension compatible x402 décrivant le prix, le rail, les actifs acceptés, la règle de vérification et la politique de remboursement.

### 3. Application de référence testnet hébergée

Une démo publique compte plus qu'un autre manifeste. Un développeur devrait pouvoir ouvrir une page, demander une tâche payée, voir un défi de style 402, payer avec un portefeuille testnet, regarder une Note être rachetée et inspecter les reçus.

### 4. Tests de conformité

Chaque adaptateur rail devrait produire des accords comparables, des reçus de vérification et des reçus de règlement. Les tests de conformité sont ce qui fait d'Accord un protocole au lieu d'une collection d'exemples.

### 5. Plus d'intégrations de framework

LangGraph, LlamaIndex, Vercel AI SDK, DSPy et les frameworks d'agents locaux devraient tous avoir des crochets de paiement simples. Le meilleur SDK est celui qu'un développeur peut ajouter sans changer l'architecture de son application.

## Notes d'implémentation pour les développeurs

Commencez sur testnet. Utilisez de petites valeurs. Utilisez des listes blanches explicites. Gardez les clés privées hors du code source. Ajoutez la protection contre les rejeux à chaque action payée. Traitez la vérification comme une étape séparée du paiement. Enregistrez à la fois les reçus de paiement et les reçus de travail. Rendez les remboursements et la gestion du travail échoué explicites.

Une bonne démo ne cache pas les modes de défaillance. Elle les montre.

## FAQ

### Le protocole Accord est-il prêt pour la production ?

Non. Le repo public actuel est une implémentation de référence testnet-first. C'est utile pour les prototypes, démos et l'exploration des développeurs. L'utilisation en production sur mainnet devrait rester bloquée jusqu'à ce que les manifestes d'audit signés identifient les scripts examinés, les versions de packages et les adaptateurs rail.

### Quelle est la différence entre Accord et les paiements pour agents Ergo ?

Accord est la couche d'accord : termes, reçus de vérification et reçus de règlement. Les paiements pour agents Ergo sont une implémentation rail : Notes, Reserves, Trackers et prédicats d'acceptation sur Ergo. Accord peut décrire les accords de travail entre les rails ; Ergo fournit l'ensemble de primitives de règlement programmable le plus complet aujourd'hui.

### Pourquoi conserver les packages `ergo-agent-*` après le changement de marque Accord ?

Parce qu'ils restent utiles comme points d'entrée spécifiques à Ergo. Le parapluie canonique peut être Accord, mais les développeurs qui veulent créer des Notes Ergo ou exécuter des exemples Ergo testnet ont toujours besoin de SDK spécifiques au rail. La clé est de les étiqueter clairement comme packages rail de référence.

### Comment Accord est-il différent de x402 ?

x402 se concentre sur le paiement via HTTP : une ressource nécessite un paiement, le client soumet un paquet de paiement, et la vérification/le règlement déverrouille l'accès. Accord se concentre sur les accords de travail : ce qui a été promis, comment c'était vérifié et comment le règlement a été enregistré. Ils peuvent bien se composer.

### Que devrait montrer la prochaine démo ?

Une API testnet hébergée qui retourne HTTP 402, accepte un flux de paiement Accord/402, vérifie l'achèvement de la tâche, émet un reçu de vérification et règle via une Note Ergo serait la preuve publique la plus forte.

## Brouillon Article JSON-LD

```json
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Mise à jour Q2 2026 du protocole Accord : Ce qui a été déployé dans la pile de l'économie des agents Ergo",
  "description": "Mise à jour Q2 2026 du protocole Accord : SDK de paiement pour agents IA, Notes Ergo, serveur MCP, adaptateurs de framework, démos testnet et feuille de route mainnet contrôlée par audit.",
  "datePublished": "2026-05-06",
  "dateModified": "2026-05-08",
  "author": { "@type": "Organization", "name": "Ergo Developer Relations" },
  "publisher": { "@type": "Organization", "name": "Ergo Platform" },
  "mainEntityOfPage": "https://www.ergoblockchain.org/blog/accord-protocol-q2-2026-update",
  "keywords": ["Accord Protocol", "AI agent payments", "Ergo", "MCP", "x402", "testnet"]
}
```

## Notes sources

- Article de blog actuel : https://www.ergoblockchain.org/blog/ergo-agent-economy-q2-2026
- Repo du protocole Accord : https://github.com/accord-protocol/accord-protocol
- Documentation x402 : https://docs.cdp.coinbase.com/x402/welcome
- Guidance sur les données structurées d'article : https://developers.google.com/search/docs/appearance/structured-data/article