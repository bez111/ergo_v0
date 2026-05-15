---
title: "Architecture-Tutorial: Baue einen KI-Agenten, der API-Aufrufe auf Ergo Testnet bezahlt"
slug: "/blog/build-ai-agent-pays-api-ergo-testnet"
seo_title: "Architecture-Tutorial: KI-Agent bezahlt API-Aufrufe auf Ergo Testnet"
meta_description: "Architecture-Tutorial für einen bezahlten API-Endpunkt und eine KI-Agent-Zahlungsschleife auf Ergo Testnet: HTTP 402-Anforderung, On-Chain-Zahlungsüberprüfung, Replay-Schutz und Sicherheits-Checkliste."
excerpt: "Ein Architecture-Tutorial für einen bezahlten API-Endpunkt, den ein KI-Agent nur nach Vorlage eines verifizierbaren Ergo-Zahlungsbelags aufrufen kann. Enthält Hinweise zu Mock-Modus und Testnet-Modus-Signierung."
author: "Ergo Developer Relations"
date_published: "2026-03-26"
date_modified: "2026-05-08"
status: "Architecture-Tutorial. Mock-Modus ist vollständig End-to-End ausführbar (die 402-Anforderung, der Agent-Client und der Express-Server funktionieren alle). Testnet-Modus erfordert ein Wallet (Nautilus oder sigma-rust) und einen echten Explorer/API-Lookup in verifyErgoPayment(). Dies ist kein Mainnet-Custody-Guide und keine produktionsreife Sicherheitsbasis – stelle keinen nicht überprüften Code bereit und verwende keine beispielhaften Custody-Flows mit echten Mitteln."
tags: ["Ergo", "AI agent payments", "API monetization", "x402", "developer tutorial", "testnet"]
target_keywords: ["build AI agent payments", "paid API with Ergo", "AI agent pays API calls", "HTTP 402 payments", "Ergo testnet tutorial"]
---

# Architecture-Tutorial: Baue einen KI-Agenten, der API-Aufrufe auf Ergo Testnet bezahlt

**Status Mai 2026:** Dies ist ein **Architecture-Tutorial**, kein Copy-Paste-Produktionsskript. Es wird in zwei Modi bereitgestellt:

- **Mock-Modus** — `verifyErgoPayment()` gibt einen gestutzten Beleg zurück, sodass der Express-Server, die 402-Anforderung und der Agent-Client alle End-to-End ohne Wallet ausgeführt werden. Verwende dies, um die Form des Ablaufs zu verstehen.
- **Testnet-Modus** — verbinde `verifyErgoPayment()` mit einem echten Explorer/API-Lookup und signiere die Transaktion über Nautilus oder sigma-rust. Das Tutorial führt durch, welche Änderungen erforderlich sind.

Dies ist kein Mainnet-Custody-Guide, keine produktionsreife Sicherheitsbasis und keine Empfehlung, nicht überprüfte Verträge mit echten Mitteln bereitzustellen.

Ein bezahlter API-Aufruf klingt einfach. Der Agent fragt nach Daten, der Server verlangt eine kleine Gebühr, der Agent zahlt und der Server gibt das Ergebnis zurück.

In der Praxis wird die meisten APIs immer noch von dem menschlichen Betreiber berechnet. Ein Entwickler erstellt ein Konto, fügt eine Kreditkarte hinzu, erhält einen API-Schlüssel und bezahlt eine Rechnung. Das funktioniert für SaaS. Es funktioniert nicht gut für autonome Agenten, die hochfahren, Tools aufrufen, Teilaufgaben delegieren und Kosten mit Maschinengeschwindigkeit begleichen.

Dieses Tutorial zeigt das minimale Testnet-Muster:

1. Ein Server stellt einen bezahlten Endpunkt bereit.
2. Der Agent fordert den Endpunkt an.
3. Der Server gibt eine maschinenlesbare Zahlungsanforderung zurück.
4. Der Agent erstellt oder sendet eine Ergo Testnet-Zahlung.
5. Der Server überprüft die Zahlung On-Chain.
6. Der Server gibt das bezahlte Ergebnis zurück.

Dies ähnelt vom Geist her HTTP 402-ähnlichen Zahlungsflows, aber wir halten die Implementierung einfach und Ergo-spezifisch.

## Was du bauen wirst

Du wirst zwei kleine Teile bauen:

- **Eine bezahlte Express-API** mit `/price`, `/verify` und `/data`-Endpunkten.
- **Ein Testnet-Agent-Client**, der eine bezahlte Ressource anfordert, dafür bezahlt, einen Beleg einreicht und das Ergebnis erhält.

Du kannst den Zahlungsschritt in zwei Modi implementieren:

### Anfänger-Modus: manuelle Signierung

Der Agent erstellt oder fordert eine Zahlungstransaktion an, du signierst sie mit einem Testnet-Wallet und der Server überprüft die eingereichte Transaktions-ID. Dies ist der sicherste Weg, den Ablauf zu verstehen.

### Headless-Modus: externer Unterzeichner

Ein kontrollierter Signer-Service oder Wallet-Modul signiert Testnet-Transaktionen automatisch unter strenger Richtlinienbegrenzung. Dies ist näher dran, wie echte Agenten arbeiten werden, bringt aber Schlüsselverwaltungsrisiken mit sich.

Dieser Artikel konzentriert sich auf Architektur und Überprüfung. Genaue SDK-Namen und APIs können sich ändern, während Accord und die Ergo-Referenz-Rail weiterentwickeln. Überprüfe daher immer das aktuelle Repo, bevor du Code in ein Projekt kopierst.

## Voraussetzungen

Du benötigst:

- Node.js 20 oder später.
- Grundkenntnisse in TypeScript oder JavaScript.
- Eine Ergo Testnet-Adresse.
- Eine kleine Menge Testnet ERG aus einem Faucet.
- Einen Ergo Testnet-Explorer/API-Endpunkt.
- Eine Zahlungsrichtlinie: Preis, Empfängeradresse, Ablauf und Replay-Regeln.

Optional:

- Accord Protocol Repo für Beispiele.
- Fleet SDK oder ein Ergo SDK für Transaktionserstellung.
- Ein Testnet-Wallet wie Nautilus Testnet-Modus oder einen anderen kompatiblen Unterzeichner.

## Architektur

Eine robuste bezahlte API sollte nicht einfach fragen „hat diese Wallet mir Geld geschickt?" Sie sollte die Zahlung an eine bestimmte Anforderung binden.

Die einfachste Bindung ist eine `callId`:

```text
Client -> GET /data?query=Wetter
Server -> 402 Payment Required
Server -> { callId, Preis, Empfänger, expiresAt, memoHash }
Client -> sendet Zahlung mit callId-Commitment
Client -> POST /verify { callId, txId }
Server -> überprüft tx-Ausgabe, Betrag, Empfänger, callId, Ablauf, Replay
Server -> kennzeichnet callId als bezahlt
Client -> GET /data?callId=...
Server -> gibt Ergebnis zurück
```

Ohne `callId` könnte eine einzelne Zahlung gegen mehrere API-Aufrufe wiedergegeben werden. Ohne Ablauf bleiben alte Zahlungsanforderungen für immer gültig. Ohne Empfänger- und Betragsprüfungen könnte der Agent eine nicht verwandte Transaktion einreichen. Ohne Bestätigungsrichtlinie kann der Server bezahlte Daten bereitstellen, bevor die Begleichung ausreichend endgültig ist.

## Schritt 1: Erstelle das Projekt

```bash
mkdir ergo-paid-api-demo
cd ergo-paid-api-demo
npm init -y
npm install express zod nanoid
npm install --save-dev typescript tsx @types/node @types/express
```

Erstelle eine minimale `tsconfig.json`:

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

## Schritt 2: Definiere die Zahlungsanforderung

Erstelle `src/policy.ts`:

```ts
export const PAYMENT_POLICY = {
  network: "ergo-testnet",
  receiverAddress: process.env.ERGO_RECEIVER_ADDRESS || "PUT_TESTNET_ADDRESS_HERE",
  priceNanoErg: 1_000_000n, // 0.001 ERG nur für Demo
  expiryMs: 10 * 60 * 1000,
  minConfirmations: 1
};
```

Codiere Adressen oder Preise in der Produktion nicht hart. Lade sie aus einer signierten Richtliniendatei oder einem Konfigurationsservice.

## Schritt 3: Baue den bezahlten API-Server

Erstelle `src/server.ts`:

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
    instructions: "Sende eine Ergo Testnet-Zahlung, die sich zu dieser callId verpflichtet, dann POST { callId, txId } zu /verify."
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
    answer: `Bezahlte Testnet-Antwort für Abfrage: ${paymentRequest.query}`,
    paidByTx: paymentRequest.txId
  });
});

async function verifyErgoPayment(input: {
  txId: string;
  callId: string;
  receiverAddress: string;
  minAmountNanoErg: bigint;
}): Promise<{ ok: boolean; reason?: string }> {
  // Ersetze diesen Stub mit einem echten Ergo Testnet-Explorer/API-Lookup.
  // Die Überprüfung muss folgende Punkte kontrollieren:
  // 1. Transaktion existiert;
  // 2. Transaktion befindet sich im erwarteten Netzwerk;
  // 3. Ausgabe zahlt receiverAddress;
  // 4. Ausgabewert >= minAmountNanoErg;
  // 5. callId ist in einem Register, Token-Namen, Memo-Konvention oder vereinbartem Beleg committet;
  // 6. Transaktion hat genug Bestätigungen für deine Richtlinie;
  // 7. txId wurde nicht für eine andere callId verwendet.
  return { ok: false, reason: "Überprüfungs-Stub nicht implementiert" };
}

app.listen(3000, () => {
  console.log("Bezahlte API lauscht auf http://localhost:3000");
});
```

Dies schlägt absichtlich fehl, bis du einen echten Ergo Testnet-Lookup verbindest. Das ist besser, als lautlos vorzutäuschen, dass eine Zahlung überprüft wurde.

## Schritt 4: Implementiere echte Überprüfung

Ein produktionsreifer Verifier muss die Transaktion inspizieren. Für ein Tutorial kannst du eine Testnet-Explorer-API verwenden. Die Kernlogik ist:

```ts
async function verifyErgoPayment(input: {
  txId: string;
  callId: string;
  receiverAddress: string;
  minAmountNanoErg: bigint;
}) {
  const tx = await fetchTestnetTransaction(input.txId);
  if (!tx) return { ok: false, reason: "tx nicht gefunden" };

  const paidOutput = tx.outputs.find((out: any) =>
    out.address === input.receiverAddress &&
    BigInt(out.value) >= input.minAmountNanoErg
  );

  if (!paidOutput) return { ok: false, reason: "erforderliche Ausgabe nicht gefunden" };

  const commitsToCall = outputCommitsToCallId(paidOutput, input.callId);
  if (!commitsToCall) return { ok: false, reason: "callId-Commitment fehlt" };

  return { ok: true };
}
```

Die Commitment-Methode ist eine Designentscheidung. Für eine einfache Demo kannst du `callId` in einem vereinbarten Register oder Receipt-Objekt kodieren. Für einen seriöseeren Ergo Note-Ablauf sollte die Note selbst aufgabenspezifische Daten und Einlösungsregeln kodieren.

## Schritt 5: Schreibe den Agent-Client

Erstelle `src/agent.ts`:

```ts
async function main() {
  const query = "Wetter in Lissabon";

  const priceResponse = await fetch(`http://localhost:3000/price?query=${encodeURIComponent(query)}`);
  const paymentRequirement = await priceResponse.json();

  console.log("Zahlung erforderlich:", paymentRequirement);

  // Anfänger-Modus: Baue oder erstelle manuell eine Testnet-Zahlung mit deinem Wallet.
  // Die Zahlung muss Empfänger, Betrag und callId-Commitment erfüllen.
  const txId = await getSignedTestnetPaymentTxId(paymentRequirement);

  const verifyResponse = await fetch("http://localhost:3000/verify", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ callId: paymentRequirement.callId, txId })
  });

  const verifyResult = await verifyResponse.json();
  console.log("Überprüfung:", verifyResult);

  if (!verifyResult.ok) throw new Error("Zahlung hat Überprüfung nicht bestanden");

  const dataResponse = await fetch(`http://localhost:3000/data?callId=${paymentRequirement.callId}`);
  const data = await dataResponse.json();
  console.log("Bezahltes Ergebnis:", data);
}

async function getSignedTestnetPaymentTxId(requirement: any): Promise<string> {
  console.log("Erstelle eine Testnet-Zahlung mit diesen Bedingungen:");
  console.log(requirement);
  console.log("Nach dem Signieren/Absenden gebe die txId in diese Demo ein.");

  // Ersetze mit CLI-Eingabeaufforderung, Wallet-Integration oder externem Signer.
  throw new Error("manuelle txId-Eingabe nicht implementiert in diesem Snippet");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
```

Die wichtigste Tutorial-Verbesserung ist Ehrlichkeit: Bis zu Signierung und Überprüfung implementiert sind, sollte das Beispiel nicht vorgeben, vollständig End-to-End zu sein. Eine vollständige Demo muss eine Transaktion erzeugen, absenden, überprüfen und den Endpunkt freischalten.

## Schritt 6: Ordne dies HTTP 402 und x402-ähnliche Flows zu

Die Demo verwendet `/price` aus Gründen der Klarheit, aber die Web-native Version ist eine direkte 402-Antwort:

```http
GET /data?query=Wetter

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

Eine zukünftige Accord/402-Version könnte enthalten:

- Vereinbarungs-ID;
- Rail-Adapter;
- Vermögenswert;
- Preis;
- Verifier;
- Rückerstattungsrichtlinie;
- Acceptance Predicate;
- Abwicklungsbeleg-Format.

Die Zahlung sollte den Zugang nur nach erfolgreicher Überprüfung freischalten.

## Sicherheits-Checkliste

Bevor du dieses Muster über localhost hinaus erweiterst, handhabe Folgendes.

### Replay-Schutz

Eine Transaktions-ID darf nicht mehr als einen Aufruf freischalten, es sei denn, dieses Verhalten ist explizit. Speichere verwendete txIds und callIds.

### Ablauf

Zahlungsanforderungen sollten ablaufen. Ansonsten kann ein altes Angebot verwendet werden, nachdem sich Preis, Richtlinie oder Empfänger geändert haben.

### Bestätigungsrichtlinie

Null-Bestätigungs-Zugang ist riskant. Entscheide anhand von Wert, Latenz und Risikotoleranz, wie viele Bestätigungen du benötigst.

### Schlüssel-Verwahrung

Gebe private Schlüssel nicht in Agent-Prompts, Quellcode oder Browser-exponierte Variablen. Verwende ein Wallet, einen Hardware-gestützten Signer, KMS, lokalen Policy-Agenten oder einen dedizierten Signatur-Service.

### Ausgabenlimits

Ein autonomer Agent sollte täglich, Pro-Aufruf und Pro-Gegenpartei-Ausgabenlimits haben. Ein Fehler sollte keine Wallet leeren.

### Rückerstattungen und fehlgeschlagene Arbeiten

Wenn die API nach der Zahlung fehlschlägt, definiere, was passiert. Erneuter Versuch? Rückerstattung? Credit Note? Manueller Support? Agenten brauchen deterministische Richtlinien.

### Überprüfungsprotokolle

Protokolliere die Zahlungsanforderung, Transaktions-ID, Überprüfungsergebnis und Antwort. Ein zukünftiger Accord-Beleg sollte dies portabel machen.

## Fehlerbehebung

### „Der Server sagt, dass Zahlung nicht gefunden wurde"

Überprüfe, dass sich die Transaktion im Testnet befindet, nicht im Mainnet. Bestätige dann, dass der Explorer/die API diese sehen kann und dass dein Verifier das richtige Netzwerk überprüft.

### „Die tx hat die richtige Adresse bezahlt, schlägt aber immer noch fehl"

Das callId-Commitment fehlt möglicherweise oder ist anders kodiert als der Verifier erwartet. Die Zahlung muss an die spezifische Anforderung gebunden sein.

### „Der Agent hat zweimal bezahlt"

Füge Idempotenz hinzu. Der Agent sollte eine bestehende ausstehende Zahlung für denselben callId wiederverwenden, anstatt nach einem Timeout eine zweite zu erstellen.

### „Die Zahlung hat sich nach Ablauf der Anforderung bestätigt"

Entscheide, ob verspätete Zahlungen erstattet, abgelehnt oder gutgeschrieben werden. Lasse verspätete Zahlungen nicht mehrdeutig.

### „Kann ich die On-Chain-Überprüfung überspringen?"

Für Spielzeug-Demos ja. Für echte Zahlungsflows nein. Der ganze Zweck besteht darin, dass der Server die Zahlung oder Begleichung unabhängig überprüfen kann, anstatt dem Client zu vertrauen.

## Wie Notes dieses Design verbessern

Eine rohe ERG-Zahlung ist nützlich für Hello-World-Demos. Notes werden nützlich, wenn der Agent programmiertes Budget braucht.

Ein übergeordneter Agent kann einen Note mit folgendem an einen Sub-Agenten ausstellen:

- maximaler Wert;
- Ablauf;
- zulässige Service-Kategorie;
- Task-Hash;
- Einlösungs-Predicate;
- Reserve-Referenz.

die bezahlte API kann den Note akzeptieren, wenn der Note gültig ist und unter der API-Richtlinie einlösbar ist. Dies verlagert das Modell von „Agent gibt Münzen aus" zu „Agent gibt begrenzte, überprüfbare, programmierbare Gutschrift aus".

## Häufig gestellte Fragen

### Kann ein KI-Agent wirklich für einen API-Aufruf auf Ergo bezahlen?

Ja auf Testnet, mit einem Wallet oder Signer, der vom Entwickler kontrolliert wird. Der Agent kann Zahlungsbedingungen anfordern, eine Transaktion absenden und eine Transaktions-ID oder einen Beleg für die Überprüfung bereitstellen. Die Produktionsherausforderung ist nicht die Zahlung selbst; es ist Schlüsselverwaltung, Ausgabenrichtlinie, Replay-Schutz, Rückerstattungen und Audit-Bereitschaft.

### Ist dies das Gleiche wie x402?

Es ist ähnlich im Benutzer-Ablauf, aber nicht identisch. x402 standardisiert HTTP-Zahlungsaufforderungen und Zahlungsüberprüfung. Diese Demo zeigt ein Ergo-spezifisches Muster. Ein zukünftiger Accord/402-Ablauf kann x402-ähnliche Ermittlung mit Accord-Arbeitsbelechen und Ergo-Abwicklung kombinieren.

### Brauche ich Notes für eine bezahlte API?

Nein. Eine einfache Testnet-API kann rohe ERG-Zahlungen verwenden. Notes werden wertvoll, wenn du ablaufende Budgets, bedingte Einlösung, Batch-Abwicklung oder Sub-Agent-Gutschrift brauchst.

### Kann ich das auf Mainnet ausführen?

Nur nach dem Ersetzen von Tutorial-Code durch überprüfte Verträge, echte Überprüfung, sichere Verwahrung, klare Benutzer-Offenlegungen und konservative Limits. Die aktuellen Referenz-SDKs und Verträge sollten als Testnet-First behandelt werden.

### Was ist die minimal überlebensfähige Produktionsarchitektur?

Eine echte Bereitstellung benötigt einen externen Signer oder Wallet-Richtlinie-Engine, beständigen Speicher, Transaktionsüberprüfung, Idempotenz, Replay-Schutz, Protokollierung, Rückerstattungshandhabung, Überwachung und eine dokumentierte Sicherheitsüberprüfung.

## Artikel JSON-LD-Entwurf

```json
{
  "@context": "https://schema.org",
  "@type": "TechArticle",
  "headline": "Baue einen KI-Agenten, der API-Aufrufe auf Ergo Testnet bezahlt",
  "description": "Schritt-für-Schritt-Tutorial zum Bauen einer bezahlten API mit einem KI-Agent-Wallet, Ergo Testnet-Zahlung, On-Chain-Überprüfung, Replay-Schutz und einem HTTP 402-ähnlichen Ablauf.",
  "datePublished": "2026-03-26",
  "dateModified": "2026-05-08",
  "author": { "@type": "Organization", "name": "Ergo Developer Relations" },
  "publisher": { "@type": "Organization", "name": "Ergo Platform" },
  "mainEntityOfPage": "https://www.ergoblockchain.org/blog/build-ai-agent-pays-api-ergo-testnet",
  "keywords": ["Ergo testnet", "AI agent payments", "paid API", "HTTP 402", "x402", "Accord Protocol"]
}
```

## Quellen-Notizen

- Originalartikel: https://www.ergoblockchain.org/blog/build-agent-pays-for-api
- Accord Protocol Repo: https://github.com/accord-protocol/accord-protocol
- x402-Dokumentation: https://docs.cdp.coinbase.com/x402/welcome
- Fleet SDK Docs: https://fleet-sdk.github.io/docs