---
title: "Notes vs Tokens : Instruments porteurs programmables pour les paiements des agents IA"
slug: "/blog/notes-vs-tokens"
seo_title: "Notes vs Tokens : Instruments porteurs programmables pour les paiements des agents IA"
meta_description: "Comparez les Notes Ergo et les tokens natifs : quand les agents IA ont besoin de créances programmables, de soutien par Reserve, d'expiration, de prédicats d'acceptation et de règlement différé."
excerpt: "Les tokens sont excellents pour la propriété. Les Notes sont meilleures pour le crédit borné, expirant et conditionnellement remboursable dans les flux de travail des agents autonomes."
author: "Ergo Developer Relations"
date_published: "2026-02-26"
date_modified: "2026-05-08"
status: "Explicateur conceptuel. Les implémentations ChainCash/Basis Note restent prototype/testnet-first jusqu'à audit."
tags: ["Ergo Notes", "native tokens", "AI agent payments", "bearer instruments", "programmable credit"]
target_keywords: ["Notes vs tokens", "Ergo Notes", "programmable bearer instruments", "AI agent credit", "Reserve backed Notes"]
---

# Notes vs Tokens : Instruments porteurs programmables pour les paiements des agents IA

**État en mai 2026 :** Les tokens natifs Ergo sont une fonctionnalité de protocole active. Les systèmes Note/Reserve/Tracker discutés ici sont des modèles de référence et des prototypes sauf si une implémentation spécifique est auditée et marquée prête pour la production.

Les blockchains sont excellentes pour les tokens. Un token peut représenter la propriété, l'adhésion, la liquidité, le pouvoir de vote, un objet de collection, une créance de stablecoin ou une simple unité de valeur. Les tokens sont familiers, composables et faciles à transférer.

Mais les agents IA n'ont pas seulement besoin d'actifs. Ils ont besoin de budgets.

Un agent parent peut avoir besoin de donner à un sous-agent la permission de dépenser jusqu'à 0,5 ERG sur les appels de données avant vendredi. Un fournisseur de services peut accepter une créance qui peut être remboursée plus tard si la sortie de la tâche correspond à un prédicat. Un flux de travail multi-agents peut avoir besoin de petits instruments expirant, conditionnellement remboursables qui circulent avant le règlement final.

Ce n'est pas ce qu'un simple token est censé faire.

C'est ce qu'une **Note** est censée faire.

## TL;DR

### Les tokens représentent la propriété

Un token natif est un actif transférable. Il est excellent pour les soldes fongibles, la gouvernance, les NFT, les positions LP et les paiements simples.

### Les Notes représentent le crédit conditionnel

Une Note est un instrument porteur programmable. Elle peut faire référence à une Reserve, porter une date d'expiration, coder une valeur et inclure des conditions d'acceptation.

### Les agents ont besoin de Notes quand le paiement dépend du travail

Si un paiement doit être remboursé seulement après acceptation d'une tâche, ou si un sous-agent doit recevoir un budget borné, les Notes sont plus expressives que les tokens.

### Les Notes et les tokens se composent

Ce n'est pas une compétition. Une véritable économie d'agents peut utiliser les tokens pour la propriété et les Notes pour les flux de paiement programmables.

## Qu'est-ce qu'un token ?

Un token natif Ergo est un actif de première classe dans le modèle eUTXO. Il peut être frappé, transféré et détenu directement dans les UTxOs. Il ne nécessite pas d'enveloppe contrat de style ERC-20.

Les tokens fonctionnent bien quand la question est simple :

> Qui possède combien d'unités de cet actif ?

Utilisez les tokens pour :

- les monnaies communautaires ;
- les droits de gouvernance ;
- les NFT ;
- les positions de liquidité ;
- les parts de protocole ;
- les paiements simples inconditionnels ;
- les points de récompense ;
- les actifs stables ou enveloppés ;
- les actifs qui ne devraient pas expirer automatiquement.

Un transfert de token est direct. Si le destinataire reçoit le token, la propriété a changé. Cette simplicité est la force.

## Qu'est-ce qu'une Note ?

Une Note est un instrument de niveau supérieur construit sur eUTXO. C'est une créance de forme UTxO avec des règles. Elle peut pointer vers une Reserve, spécifier une valeur, expirer à une hauteur de bloc et exiger un prédicat d'acceptation avant le remboursement.

L'analogie économique est plus proche d'un chèque, d'un bon, d'un coupon obligataire ou d'un IOU porteur que de l'argent comptant.

Une Note peut répondre à des questions qu'un token ne peut généralement pas répondre par lui-même :

- Quelle Reserve soutient cette créance ?
- Quand expire-t-elle ?
- Quel travail doit être accepté avant le remboursement ?
- Cette Note a-t-elle déjà été remboursée ?
- Quel vérificateur ou prédicat contrôle l'acceptation ?
- Cette Note peut-elle être réglée par lot ?

## Différences clés

| Propriété | Token | Note |
|---|---|---|
| Sens fondamental | Propriété d'un actif | Créance contre une Reserve ou une politique d'émetteur |
| Règlement | Transfert immédiat | Remboursement différé |
| Expiration | Généralement aucune | Intégrée |
| Conditions d'acceptation | Non native au transfert | Fonctionnalité fondamentale |
| Soutien | Optionnel ou externe | La référence Reserve peut être explicite |
| Utilisation budgétaire par agent | Limitée | Fort |
| Règlement par lot | Pas le modèle principal | Adaptation naturelle |
| Utilisation de gouvernance | Fort | Faible |
| Liquidité longue durée | Fort | Généralement mauvais outil |
| Paiement conditionnel à la tâche | Nécessite logique supplémentaire | Objectif de conception natif |

## Le cycle de vie de la Note

Un système Note utile a besoin d'un cycle de vie complet.

### 1. Créer une Reserve

La Reserve est la source de soutien. Elle contient des garanties ou définit les règles de l'émetteur. Une contrepartie peut inspecter la Reserve avant d'accepter les Notes.

### 2. Émettre une Note

L'émetteur crée une Note qui référence la Reserve. La Note peut coder une valeur, une date d'expiration, des contraintes de destinataire, un hash de tâche ou une politique de vérificateur.

### 3. Transférer la Note

La Note peut se déplacer entre les agents en tant qu'instrument porteur. Le destinataire évalue si la Reserve et les termes sont acceptables.

### 4. Effectuer le travail

Le destinataire ou l'agent en aval complète la tâche, appelle une API, livre la sortie ou obtient un reçu de vérificateur.

### 5. Rembourser la Note

La Note est dépensée dans une transaction qui satisfait son prédicat. La Reserve paie ou met à jour l'état selon les règles.

### 6. Mettre à jour le Tracker

Un Tracker prévient le double remboursement. Il enregistre les Notes dépensées ou les transitions d'état équivalentes.

### 7. Régler les lots

Pour de nombreux petits paiements, les destinataires peuvent rembourser plusieurs Notes acceptées en un seul lot, réduisant les frais généraux.

## Quand les agents ont besoin de Notes

### Paiements conditionnels à la tâche

L'agent A veut payer l'agent B seulement si B retourne une sortie correspondant à un hash engagé ou reçu de vérificateur accepté. Un transfert de token ne peut pas exprimer cette condition par lui-même. Une Note peut.

### Budgets multi-agents

Un orchestrateur donne aux sous-agents un pouvoir de dépense limité. Le budget devrait expirer, rester dans une limite de Reserve et possibllement être restreint à une catégorie de service. Une Note est un instrument naturel pour cela.

### Règlement différé

Un fournisseur de services peut accepter de nombreuses petites Notes tout au long de la journée et les rembourser plus tard. Cela évite de régler chaque petite interaction immédiatement.

### Crédit interne

Un émetteur de confiance peut vouloir créer du crédit dépensable au sein d'un réseau borné. Les Notes peuvent représenter des créances contre une Reserve ou une politique d'émetteur.

### Marchés de travail

Un acheteur publie une tâche. Un travailleur accepte une Note. Un vérificateur signe le reçu. Le travailleur rembourse après acceptation. C'est une primitive plus propre que "envoyer un token maintenant et espérer que le travail arrive".

## Quand les tokens sont meilleurs

### Propriété longue durée

Les droits de gouvernance, les positions de jalonnement, les NFT et les parts LP devraient généralement être des tokens. Ce ne sont pas des créances de paiement temporaires.

### Transferts simples inconditionnels

Si l'objectif est "envoyer 10 unités à cette adresse", utilisez un token. N'ajoutez pas la complexité de la Note où aucune condition n'est nécessaire.

### Marchés liquides

Les tokens sont meilleurs pour l'échange, la tenue de marché et la liquidité générale. Les Notes sont plus contextuelles et peuvent porter un risque d'émetteur, d'expiration et de prédicat.

### Actifs publics

Si de nombreux utilisateurs non liés devraient reconnaître et détenir un actif indéfiniment, la sémantique des tokens est plus appropriée.

## Quand ne pas utiliser les Notes

N'utilisez pas les Notes simplement parce qu'elles semblent avancées. Évitez-les quand :

- aucune expiration n'est nécessaire ;
- aucune condition d'acceptation n'est nécessaire ;
- l'instrument devrait se négocier librement en tant qu'actif standardisé ;
- la Reserve n'est pas compréhensible pour les utilisateurs ;
- l'implémentation n'est pas auditée et des fonds réels sont impliqués ;
- la tâche ne peut pas être vérifiée objectivement ou par un vérificateur de confiance ;
- les utilisateurs confondaient les Notes avec des stablecoins ou des dépôts garantis.

Les Notes sont puissantes parce qu'elles sont spécifiques. Ce ne sont pas un remplacement universel pour les tokens.

## Exemple : budget API d'agent

Imaginez un agent de recherche qui doit appeler des API de données payantes. L'opérateur humain ne veut pas donner à l'agent un portefeuille sans restriction.

L'opérateur crée une Reserve et émet trois Notes :

- 0,05 ERG Note pour les données météorologiques, expire dans 24 heures.
- 0,10 ERG Note pour les données de marché, expire dans 12 heures.
- 0,20 ERG Note pour la récupération de documents, nécessite un hash de reçu.

L'agent peut dépenser dans ces limites. S'il est compromis, il ne peut pas dépasser les Notes émises. Si les Notes expirent, le budget se ferme. Si un service ne peut pas satisfaire le prédicat d'acceptation, il ne peut pas rembourser.

C'est plus sûr que de donner à l'agent un solde de portefeuille brut.

## Exemple : flux de travail multi-agents

Un coordonnateur embauche trois sous-agents :

1. Agent d'extraction : analyser les documents.
2. Agent d'analyse : résumer les résultats.
3. Agent de vérification : valider les sorties.

Le coordonnateur émet des Notes à chacun. La Note de l'extracteur nécessite une sortie valide au schéma. La Note de l'analyste nécessite un hash du résumé accepté. La Note du vérificateur nécessite un reçu de validation signé. Chaque Note peut se régler plus tard contre la Reserve.

Le graphique de paiement correspond maintenant au graphique de travail.

## Modèle de risque

Une Note n'est aussi bonne que sa Reserve, son prédicat et son implémentation.

Demandez :

- La Reserve est-elle réelle et suffisante ?
- Qui peut émettre des Notes ?
- Les Notes en circulation peuvent-elles dépasser le soutien ?
- Comment le double remboursement est-il prévenu ?
- Que se passe-t-il après l'expiration ?
- Qui vérifie le travail ?
- Le script est-il audité ?
- Les utilisateurs peuvent-ils comprendre le risque ?

Si ces réponses ne sont pas claires, ne déployer pas avec des fonds réels.

## FAQ

### Pouvez-vous utiliser les tokens natifs Ergo pour les paiements des agents ?

Oui. Pour les paiements simples inconditionnels, les tokens natifs fonctionnent bien. Les Notes deviennent utiles quand le paiement a besoin d'expiration, de soutien par Reserve, de règlement différé ou d'une condition d'acceptation du travail.

### Qu'est-ce qu'un instrument porteur ?

Un instrument porteur est quelque chose que le détenteur peut présenter pour le remboursement ou le transfert de valeur. Dans ce contexte, une Note est une créance programmable qui peut être transférée entre les agents et remboursée selon les règles de son script.

### Les Notes sont-elles identiques aux stablecoins ?

Non. Un stablecoin est généralement un token fongible conçu pour suivre une unité de compte externe. Une Note est une créance contextuelle contre une Reserve ou une politique d'émetteur. Elle peut être libellée en ERG, en token ou en une autre unité, mais sa fonctionnalité définissante est le remboursement programmable.

### Les Notes peuvent-elles être négociées en DeFi ?

Possiblement, mais ce n'est pas leur objectif principal. Parce que les Notes peuvent porter un risque d'expiration, d'émetteur et de prédicat, elles sont plus complexes que les tokens fongibles. Toute intégration DeFi devrait rendre ces risques explicites.

### Les Notes sont-elles prêtes pour la production aujourd'hui ?

Le concept est solide, et le modèle eUTXO d'Ergo soutient le motif. Des systèmes de Notes spécifiques tels que les contrats de référence ChainCash/Basis devraient être traités comme prototype ou testnet-first sauf s'ils sont auditées et clairement marqués prêts pour la production.

## Brouillon JSON-LD de l'article

```json
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Notes vs Tokens : Instruments porteurs programmables pour les paiements des agents IA",
  "description": "Comparez les Notes Ergo et les tokens natifs : quand les agents IA ont besoin de créances programmables, de soutien par Reserve, d'expiration, de prédicats d'acceptation et de règlement différé.",
  "datePublished": "2026-02-26",
  "dateModified": "2026-05-08",
  "author": { "@type": "Organization", "name": "Ergo Developer Relations" },
  "publisher": { "@type": "Organization", "name": "Ergo Platform" },
  "mainEntityOfPage": "https://www.ergoblockchain.org/blog/notes-vs-tokens",
  "keywords": ["Ergo Notes", "native tokens", "AI agent payments", "programmable credit", "bearer instruments"]
}
```

## Notes sources

- Article original : https://www.ergoblockchain.org/blog/notes-vs-tokens
- Dépôt du protocole Accord : https://github.com/accord-protocol/accord-protocol
- Page technologie Ergo : https://www.ergoblockchain.org/technology