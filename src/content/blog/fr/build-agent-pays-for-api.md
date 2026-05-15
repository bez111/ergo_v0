---
title: "Tutoriel d'architecture : Construire un agent IA qui paie les appels API sur Ergo Testnet"
slug: "/blog/build-ai-agent-pays-api-ergo-testnet"
seo_title: "Tutoriel d'architecture : Agent IA qui paie les appels API sur Ergo Testnet"
meta_description: "Tutoriel d'architecture pour un endpoint API payant et une boucle de paiement d'agent IA sur Ergo testnet : défi HTTP 402, vérification de paiement on-chain, protection contre la relecture et liste de contrôle de sécurité."
excerpt: "Un tutoriel d'architecture pour un endpoint API payant qu'un agent IA ne peut appeler qu'après avoir produit un reçu de paiement Ergo vérifiable. Inclut des notes sur le mode de simulation et le mode testnet."
author: "Ergo Developer Relations"
date_published: "2026-03-26"
date_modified: "2026-05-08"
status: "Tutoriel d'architecture. Le mode de simulation est entièrement exécutable de bout en bout (le défi 402, le client agent et le serveur Express fonctionnent tous). Le mode testnet nécessite un portefeuille (Nautilus ou sigma-rust) et une recherche réelle d'explorateur/API dans verifyErgoPayment(). Ce n'est pas un guide de garde mainnet et pas un plan de sécurité pour la production — ne déployez pas de code non audité ou de flux de garde d'exemple avec de vrais fonds."
tags: ["Ergo", "AI agent payments", "API monetization", "x402", "developer tutorial", "testnet"]
target_keywords: ["build AI agent payments", "paid API with Ergo", "AI agent pays API calls", "HTTP 402 payments", "Ergo testnet tutorial"]
---

# Tutoriel d'architecture : Construire un agent IA qui paie les appels API sur Ergo Testnet

**État en mai 2026 :** c'est un **tutoriel d'architecture**, pas un script de copier-coller pour la production. Il est livré en deux modes :

- **Mode simulation** — `verifyErgoPayment()` renvoie un reçu en simulation afin que le serveur Express, le défi 402 et le client agent s'exécutent de bout en bout sans portefeuille. Utilise ceci pour apprendre la structure du flux.
- **Mode testnet** — connecte `verifyErgoPayment()` à une recherche réelle d'explorateur/API et signe la transaction via Nautilus ou sigma-rust. Le tutoriel montre ce qui change.

Ce n'est pas un guide de garde mainnet, pas un plan de sécurité pour la production et pas une recommandation de déployer des contrats non audités avec de vrais fonds.

Un appel API payant semble simple. L'agent demande des données, le serveur facture une petite commission, l'agent paie et le serveur retourne le résultat.

En pratique, la plupart des API facturent toujours l'opérateur humain. Un développeur crée un compte, ajoute une carte de crédit, obtient une clé API et paie une facture. Cela fonctionne pour le SaaS. Cela ne fonctionne pas bien pour les agents autonomes qui se lancent, appellent des outils, délèguent des sous-tâches et règlent les coûts à la vitesse de la machine.

Ce tutoriel montre le motif testnet minimal :

1. Un serveur expose un endpoint payant.
2. L'agent demande l'endpoint.
3. Le serveur retourne une exigence de paiement lisible par une machine.
4. L'agent crée ou soumet un paiement Ergo testnet.
5. Le serveur vérifie le paiement on-chain.
6. Le serveur retourne le résultat payé.

C'est similaire en esprit aux flux de paiement de style HTTP 402, mais nous garderons l'implémentation simple et spécifique à Ergo.

## Ce que tu vas construire

Tu vas construire deux petites pièces :

- **Une API Express payante** avec endpoints `/price`, `/verify` et `/data`.
- **Un client agent testnet** qui demande une ressource payante, la paie, soumet un reçu et reçoit le résultat.

Tu peux implémenter l'étape de paiement en deux modes :

### Mode débutant : signature manuelle

L'agent construit ou demande une transaction de paiement, tu la signes avec un portefeuille testnet, et le serveur vérifie l'ID de transaction soumis. C'est le moyen le plus sûr de comprendre le flux.

### Mode sans tête : signeur externe

Un service signeur contrôlé ou un module de portefeuille signe automatiquement les transactions testnet dans le cadre de limites de politique stricte. C'est plus proche de la façon dont les vrais agents fonctionneront, mais cela introduit un risque de gestion des clés.

Cet article se concentre sur l'architecture et la vérification. Les noms SDK exacts et les APIs peuvent changer à mesure que l'Accord et le rail de référence Ergo évoluent, donc vérifie toujours le dépôt actuel avant de copier le code dans un projet.

## Prérequis

Tu as besoin de :

- Node.js 20 ou version ultérieure.
- Expérience de base en TypeScript ou JavaScript.
- Une adresse Ergo testnet.
- Une petite quantité d'ERG testnet depuis un robinet.
- Un endpoint d'explorateur/API Ergo testnet.
- Une politique de paiement : prix, adresse du destinataire, expiration et règles de relecture.

Optionnel :

- Dépôt du protocole Accord pour les exemples.
- Fleet SDK ou un SDK Ergo pour la construction de transactions.
- Un portefeuille testnet tel que le mode testnet Nautilus ou un autre signeur compatible.

## Architecture

Une API payante robuste ne devrait pas simplement demander « ce portefeuille m'a-t-il envoyé de l'argent ? » Elle devrait lier le paiement à une demande spécifique.

La liaison la plus simple est un `callId` :

```text
client -> GET /data?query=weather
server -> 402 Payment Required
server -> { callId, price, receiver, expiresAt, memoHash }
client -> sends payment with callId commitment
client -> POST /verify { callId, txId }
server -> checks tx output, amount, receiver, callId, expiry, replay
server -> marks callId as paid
client -> GET /data?callId=...
server -> returns result
```

Sans `callId`, un paiement unique pourrait être rejoué contre plusieurs appels API. Sans expiration, les anciennes exigences de paiement restent valides pour toujours. Sans vérifications de destinataire et de montant, l'agent pourrait soumettre une transaction non liée. Sans politique de confirmation, le serveur peut servir les données payées avant que le règlement soit suffisamment final.

## Étape 1 : créer le projet

```bash
mkdir ergo-paid-api-demo
cd ergo-paid-api-demo
npm init -y
npm install express zod nanoid
npm install --save-dev typescript tsx @types/node @types/express
```

Crée un minimal `tsconfig.json` :

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "ESNext",
    "moduleResolution": "Bundler",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true
  }
}
```

## Étape 2 : définir l'exigence de paiement

Crée `src/policy.ts` :

```ts
export const PAYMENT_POLICY = {
  network: "ergo-testnet",
  receiverAddress: process.env.ERGO_RECEIVER_ADDRESS || "PUT_TESTNET_ADDRESS_HERE",
  priceNanoErg: 1_000_000n, // 0.001 ERG for demo only
  expiryMs: 10 * 60 * 1000,
  minConfirmations: 1
};
```

En production, ne code jamais en dur les adresses ou les prix. Charge-les depuis un fichier de politique signé ou un service de configuration.

## Étape 3 : construire le serveur API payant

Crée `src/server.ts` :

```ts
import express from "express";
import { nanoid } from "nanoid";
import { z } from "zod";
import { PAYMENT_POLICY } from "./policy";

const app = express();
app.use(express.json());

type PaymentRequest = {
  callId: string;
  query: string;
  priceNanoErg: string;
  receiverAddress: string;
  expiresAt: number;
  paid: boolean;
  txId?: string;
};

const requests = new Map<string, PaymentRequest>();

app.get("/price", (req, res) => {
  const query = String(req.query.query || "demo");
  const callId = nanoid();
  const expiresAt = Date.now() + PAYMENT_POLICY.expiryMs;

  const paymentRequest: PaymentRequest = {
    callId,
    query,
    priceNanoErg: PAYMENT_POLICY.priceNanoErg.toString(),
    receiverAddress: PAYMENT_POLICY.receiverAddress,
    expiresAt,
    paid: false
  };

  requests.set(callId, paymentRequest);

  res.status(402).json({
    error: "PAYMENT_REQUIRED",
    callId,
    network: PAYMENT_POLICY.network,
    priceNanoErg: paymentRequest.priceNanoErg,
    receiverAddress: paymentRequest.receiverAddress,
    expiresAt,
    instructions: "Send an Ergo testnet payment that commits to this callId, then POST { callId, txId } to /verify."
  });
});

const VerifyBody = z.object({
  callId: z.string(),
  txId: z.string().min(20)
});

app.post("/verify", async (req, res) => {
  const body = VerifyBody.parse(req.body);
  const paymentRequest = requests.get(body.callId);

  if (!paymentRequest) {
    return res.status(404).json({ error: "UNKNOWN_CALL_ID" });
  }

  if (Date.now() > paymentRequest.expiresAt) {
    return res.status(400).json({ error: "PAYMENT_REQUEST_EXPIRED" });
  }

  if (paymentRequest.paid) {
    return res.json({ ok: true, alreadyPaid: true });
  }

  const verified = await verifyErgoPayment({
    txId: body.txId,
    callId: body.callId,
    receiverAddress: paymentRequest.receiverAddress,
    minAmountNanoErg: BigInt(paymentRequest.priceNanoErg)
  });

  if (!verified.ok) {
    return res.status(400).json({ error: "PAYMENT_NOT_VERIFIED", reason: verified.reason });
  }

  paymentRequest.paid = true;
  paymentRequest.txId = body.txId;
  requests.set(body.callId, paymentRequest);

  return res.json({ ok: true, callId: body.callId, txId: body.txId });
});

app.get("/data", (req, res) => {
  const callId = String(req.query.callId || "");
  const paymentRequest = requests.get(callId);

  if (!paymentRequest || !paymentRequest.paid) {
    return res.status(402).json({ error: "PAYMENT_REQUIRED", callId });
  }

  return res.json({
    callId,
    query: paymentRequest.query,
    answer: `Paid testnet response for query: ${paymentRequest.query}`,
    paidByTx: paymentRequest.txId
  });
});

async function verifyErgoPayment(input: {
  txId: string;
  callId: string;
  receiverAddress: string;
  minAmountNanoErg: bigint;
}): Promise<{ ok: boolean; reason?: string }> {
  // Replace this stub with a real Ergo testnet explorer/API lookup.
  // Verification must check:
  // 1. transaction exists;
  // 2. transaction is on the expected network;
  // 3. output pays receiverAddress;
  // 4. output value >= minAmountNanoErg;
  // 5. callId is committed in a register, token name, memo convention, or agreed receipt;
  // 6. transaction has enough confirmations for your policy;
  // 7. txId has not been used for another callId.
  return { ok: false, reason: "verification stub not implemented" };
}

app.listen(3000, () => {
  console.log("Paid API listening on http://localhost:3000");
});
```

Cela échoue intentionnellement la vérification jusqu'à ce que tu connectes une recherche Ergo testnet réelle. C'est mieux que de prétendre silencieusement qu'un paiement a été vérifié.

## Étape 4 : implémenter la vérification réelle

Un vérificateur de qualité production doit inspecter la transaction. Pour un tutoriel, tu peux utiliser une API d'explorateur testnet. La logique de base est :

```ts
async function verifyErgoPayment(input: {
  txId: string;
  callId: string;
  receiverAddress: string;
  minAmountNanoErg: bigint;
}) {
  const tx = await fetchTestnetTransaction(input.txId);
  if (!tx) return { ok: false, reason: "tx not found" };

  const paidOutput = tx.outputs.find((out: any) =>
    out.address === input.receiverAddress &&
    BigInt(out.value) >= input.minAmountNanoErg
  );

  if (!paidOutput) return { ok: false, reason: "required output not found" };

  const commitsToCall = outputCommitsToCallId(paidOutput, input.callId);
  if (!commitsToCall) return { ok: false, reason: "callId commitment missing" };

  return { ok: true };
}
```

La méthode d'engagement est un choix de conception. Pour une démo simple, tu peux encoder `callId` dans un registre convenu ou un objet de reçu. Pour un flux Ergo Note plus sérieux, la Note elle-même devrait encoder les données spécifiques à la tâche et les règles de rédemption.

## Étape 5 : écrire le client agent

Crée `src/agent.ts` :

```ts
async function main() {
  const query = "weather in Lisbon";

  const priceResponse = await fetch(`http://localhost:3000/price?query=${encodeURIComponent(query)}`);
  const paymentRequirement = await priceResponse.json();

  console.log("Payment required:", paymentRequirement);

  // Beginner mode: build or manually create a testnet payment using your wallet.
  // The payment must satisfy receiver, amount and callId commitment.
  const txId = await getSignedTestnetPaymentTxId(paymentRequirement);

  const verifyResponse = await fetch("http://localhost:3000/verify", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ callId: paymentRequirement.callId, txId })
  });

  const verifyResult = await verifyResponse.json();
  console.log("Verification:", verifyResult);

  if (!verifyResult.ok) throw new Error("Payment failed verification");

  const dataResponse = await fetch(`http://localhost:3000/data?callId=${paymentRequirement.callId}`);
  const data = await dataResponse.json();
  console.log("Paid result:", data);
}

async function getSignedTestnetPaymentTxId(requirement: any): Promise<string> {
  console.log("Create a testnet payment with these terms:");
  console.log(requirement);
  console.log("After signing/submitting, paste the txId into this demo.");

  // Replace with CLI prompt, wallet integration, or external signer.
  throw new Error("manual txId input not implemented in this snippet");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
```

L'amélioration principale du tutoriel est l'honnêteté : jusqu'à ce que la signature et la vérification soient implémentées, l'exemple ne devrait pas prétendre être complètement de bout en bout. Une démo complète doit produire une transaction, la soumettre, la vérifier et déverrouiller l'endpoint.

## Étape 6 : cartographier ceci aux flux de style HTTP 402 et x402

La démo utilise `/price` pour la clarté, mais la version web-native est une réponse 402 directe :

```http
GET /data?query=weather

HTTP/1.1 402 Payment Required
Content-Type: application/json

{
  "network": "ergo-testnet",
  "priceNanoErg": "1000000",
  "receiverAddress": "...",
  "callId": "...",
  "expiresAt": 1770000000000,
  "verification": "ergo-output-with-callid"
}
```

Une version future Accord/402 pourrait inclure :

- ID d'accord ;
- adaptateur de rail ;
- actif ;
- prix ;
- vérificateur ;
- politique de remboursement ;
- prédicat d'acceptation ;
- format de reçu de règlement.

Le paiement devrait déverrouiller l'accès seulement après que la vérification réussisse.

## Liste de contrôle de sécurité

Avant de prendre ce motif au-delà de localhost, traite ce qui suit.

### Protection contre la relecture

Un ID de transaction ne doit pas déverrouiller plus d'un appel à moins que ce comportement soit explicite. Stocke les txIds et callIds utilisés.

### Expiration

Les exigences de paiement doivent expirer. Sinon, une ancienne devis peut être utilisée après un changement de prix, de politique ou de destinataire.

### Politique de confirmation

L'accès sans confirmation est risqué. Décide combien de confirmations tu as besoin en fonction de la valeur, de la latence et de la tolérance au risque.

### Garde des clés

Ne mets pas de clés privées dans les invites agent, le code source ou les variables exposées au navigateur. Utilise un portefeuille, un signeur soutenu par le matériel, un KMS, un agent de politique local ou un service de signature dédié.

### Limites de dépenses

Un agent autonome devrait avoir des limites de dépenses quotidiennes, par appel et par contrepartie. Un bug ne devrait pas vider un portefeuille.

### Remboursements et travail échoué

Si l'API échoue après le paiement, définis ce qui se passe. Réessayer ? Rembourser ? Reçu de crédit ? Support manuel ? Les agents ont besoin de politiques déterministes.

### Journaux de vérification

Enregistre l'exigence de paiement, l'ID de transaction, le résultat de vérification et la réponse. Un reçu Accord futur devrait rendre ceci portable.

## Dépannage

### "Le serveur dit que le paiement n'a pas été trouvé"

Vérifie que la transaction est sur testnet, pas mainnet. Puis confirme que l'explorateur/API peut la voir et que ton vérificateur vérifie le bon réseau.

### "La tx a payé la bonne adresse mais a quand même échoué"

L'engagement callId peut être manquant ou codé différemment de ce que le vérificateur attend. Le paiement doit être lié à la demande spécifique.

### "L'agent a payé deux fois"

Ajoute l'idempotence. L'agent devrait réutiliser un paiement existant en attente pour le même callId au lieu de créer un second après un délai d'attente.

### "Le paiement a confirmé après l'expiration de la demande"

Décide si les paiements tardifs sont remboursés, rejetés ou crédités. Ne laisse pas les paiements tardifs ambigus.

### "Puis-je ignorer la vérification on-chain ?"

Pour les démos jouets, oui. Pour les flux de paiement réels, non. Le point entier est que le serveur peut indépendamment vérifier le paiement ou le règlement plutôt que de faire confiance au client.

## Comment les Notes améliorent cette conception

Un paiement ERG brut est utile pour les démos hello-world. Les Notes deviennent utiles quand l'agent a besoin d'un budget programmable.

Un agent parent peut émettre une Note vers un sous-agent avec :

- valeur maximale ;
- expiration ;
- catégorie de service autorisée ;
- hash de tâche ;
- prédicat de rédemption ;
- référence de réserve.

L'API payante peut accepter la Note si la Note est valide et rédemptible selon la politique de l'API. Ceci décale le modèle de « l'agent dépense des pièces » à « l'agent dépense un crédit limité, auditable et programmable ».

## FAQ

### Un agent IA peut-il vraiment payer un appel API sur Ergo ?

Oui sur testnet, en utilisant un portefeuille ou un signeur contrôlé par le développeur. L'agent peut demander les conditions de paiement, soumettre une transaction et fournir un ID de transaction ou un reçu pour vérification. Le défi de production n'est pas le paiement lui-même ; c'est la gestion des clés, la politique de dépenses, la protection contre la relecture, les remboursements et la préparation de l'audit.

### C'est la même chose que x402 ?

C'est similaire dans le flux utilisateur mais pas identique. x402 standardise les défis de paiement HTTP et la vérification de paiement. Cette démo montre un motif spécifique à Ergo. Un flux Accord/402 futur peut combiner la découverte de style x402 avec les reçus de travail Accord et le règlement Ergo.

### Ai-je besoin de Notes pour une API payante ?

Non. Une API testnet simple peut utiliser des paiements ERG bruts. Les Notes deviennent précieuses quand tu as besoin de budgets expirant, de rédemption conditionnelle, de règlement par lot ou de crédit de sous-agent.

### Puis-je exécuter ceci sur mainnet ?

Seulement après avoir remplacé le code tutoriel par des contrats audités, une vérification réelle, une garde sûre, des divulgations claires aux utilisateurs et des limites conservatrices. Les SDK de référence actuels et les contrats doivent être traités comme testnet-first.

### Quelle est l'architecture minimale viable pour la production ?

Un déploiement réel a besoin d'un signeur externe ou d'un moteur de politique de portefeuille, d'un stockage durable, de vérification de transaction, d'idempotence, de protection contre la relecture, de journalisation, de gestion des remboursements, de surveillance et d'un examen de sécurité documenté.

## Brouillon JSON-LD d'article

```json
{
  "@context": "https://schema.org",
  "@type": "TechArticle",
  "headline": "Build an AI Agent That Pays for API Calls on Ergo Testnet",
  "description": "Step-by-step tutorial for building a paid API with an AI agent wallet, Ergo testnet payment, on-chain verification, replay protection and an HTTP 402-style flow.",
  "datePublished": "2026-03-26",
  "dateModified": "2026-05-08",
  "author": { "@type": "Organization", "name": "Ergo Developer Relations" },
  "publisher": { "@type": "Organization", "name": "Ergo Platform" },
  "mainEntityOfPage": "https://www.ergoblockchain.org/blog/build-ai-agent-pays-api-ergo-testnet",
  "keywords": ["Ergo testnet", "AI agent payments", "paid API", "HTTP 402", "x402", "Accord Protocol"]
}
```

## Notes de source

- Article original : https://www.ergoblockchain.org/blog/build-agent-pays-for-api
- Dépôt du protocole Accord : https://github.com/accord-protocol/accord-protocol
- Documentation x402 : https://docs.cdp.coinbase.com/x402/welcome
- Docs Fleet SDK : https://fleet-sdk.github.io/docs