---
title: "ErgoScript Acceptance Predicates: On-Chain Work Verification for AI Agent Payments"
slug: "/blog/ergoscript-acceptance-predicates-agent-payments"
seo_title: "ErgoScript Acceptance Predicates: On-Chain Task Verification for AI Agent Payments"
meta_description: "Erfahre, wie ErgoScript Acceptance Predicates Task-Completion-Bedingungen in Payment-UTxOs kodieren und es KI-Agenten ermöglichen, Work mit weniger Off-Chain-Vertrauensannahmen zu verifizieren."
excerpt: "Acceptance Predicates verwandeln eine Zahlung in einen bedingt einlösbaren Work-Contract: Der Empfänger kann nur einlösen, wenn die vereinbarte Task-Bedingung erfüllt ist."
author: "Ergo Developer Relations"
date_published: "2026-03-12"
date_modified: "2026-05-08"
status: "Technical explainer. Example predicates are educational; production scripts require audit and exact test vectors."
tags: ["ErgoScript", "AI agent payments", "acceptance predicates", "eUTXO", "work verification"]
target_keywords: ["ErgoScript acceptance predicate", "AI agent task verification", "on-chain work verification", "programmable payment conditions", "Ergo smart contracts"]
---

# ErgoScript Acceptance Predicates: On-Chain Work Verification for AI Agent Payments

**Status as of May 2026:** Acceptance Predicates sind ein Design Pattern, das auf ErgoScript und eUTXO basiert. Die folgenden Beispiele sind zu Bildungszwecken gedacht und sollten nicht mit echten Mitteln ohne Review, Test-Vektoren und Audit bereitgestellt werden.

Die meisten Zahlungssysteme beantworten eine Frage: Hat der Zahler das Geld gesendet?

Agent-Commerce braucht eine schwierigere Frage: Hat der Empfänger die Work abgeschlossen, für die die Zahlung bestimmt war?

Wenn ein KI-Agent für eine statische API-Response zahlt, kann eine einfache Zahlungsbestätigung ausreichen. Aber wenn der Agent einen anderen Agenten dafür bezahlt, ein Dokument zusammenzufassen, eine Task zu lösen, einen Beweis zu erbringen, Code zu generieren, Daten zu klassifizieren oder ein signiertes Ergebnis zurückzugeben, ist eine Zahlung allein unzureichend. Der Zahler braucht eine Möglichkeit, die Einlösung an die Akzeptanz zu binden.

Ein **Acceptance Predicate** ist diese Bindung. Es ist eine Bedingung, die in das Zahlungsinstrument selbst eingebettet ist. Der Empfänger kann nur einlösen, wenn das Predicate zu true evaluiert.

In Ergo-Begriffen lebt das Predicate in einer ErgoScript Spending Condition. Es kann Werte, Register, Context-Variablen, Signaturen, Block Height und andere Transaction-Daten inspizieren. Das Ergebnis ist eine Zahlung, die sich mehr wie ein selbstdurchsetzbarer Work-Contract verhält als wie eine blinde Überweisung.

## TL;DR

### Zahlung ist nicht das Gleiche wie Akzeptanz

Eine Transaktion beweist, dass Wert bewegt wurde. Sie beweist nicht, dass Work geliefert wurde. Acceptance Predicates fügen eine Verifizierungsregel zur Zahlung hinzu.

### eUTXO macht das Predicate explizit

In Ergo hat eine UTxO eine Spending Condition. Um eine Note oder Payment Box einzulösen, muss der Spender eine Transaktion erstellen, die diese Bedingung erfüllt. Die Regel ist sichtbar und deterministisch.

### Das einfachste Predicate checkt einen Task-Hash

Zum Beispiel: "Löse diese Note nur ein, wenn die eingereichte Output zu dem erwarteten Digest hashiert, bevor die Deadline abläuft." Das reicht nicht für jede Task aus, aber es ist das minimale Pattern.

### Predicates reduzieren Vertrauen; sie beseitigen nicht alle Vertrauensannahmen

Wenn das Predicate einen Hash einer bekannten Output verifiziert, ist das Vertrauen gering. Wenn es sich auf einen Third-Party-Verifier verlässt, wird der Verifier Teil des Trust Model. Das Predicate macht Annahmen explizit; es macht unmögliche Tasks nicht magisch verifizierbar.

## Das Problem: Agenten zahlen für Outcomes, nicht nur für Zugang

Ein Mensch kann mit Mehrdeutigkeit umgehen. Wenn ein Auftragnehmer schlecht arbeitet, kann der Mensch beschwerde, anfechten, neu verhandeln oder zukünftige Zahlungen verweigern. Ein autonomer Agent braucht klarere Regeln.

Betrachte eine einfache Agent-Pipeline:

1. Research-Agent zahlt Data-Agent für einen Datensatz.
2. Data-Agent zahlt Cleaning-Agent für normalisierte Records.
3. Cleaning-Agent zahlt Model-Agent für Inference.
4. Research-Agent zahlt Editor-Agent für finales Output.

Jeder Schritt hat eine andere Definition von Erfolg. "Zahlung ist erfolgt" ist nicht ausreichend. Die Pipeline braucht Acceptance-Regeln:

- Wurde der Datensatz vom erwarteten Provider signiert?
- Entsprechen die bereinigten Daten dem erwarteten Schema?
- Hashiert die Model-Output dem committed Result?
- Wurde die Response vor Deadline geliefert?
- Hat der Verifier die Akzeptanz signiert?

Ohne programmierbare Akzeptanz lebt jede Regel off-chain im Application Code. Das erzeugt einen zentralisierten Vertrauenspunkt.

## Das Core Pattern

Ein minimales Acceptance Predicate hat vier Teile:

1. **Task Commitment** — welche Output oder welcher Beweis wird erwartet?
2. **Deadline** — bis wann kann die Note eingelöst werden?
3. **Receiver oder Verifier Authorization** — wer kann einlösen oder akzeptieren?
4. **Redemption Rule** — was muss in der Spending Transaction wahr sein?

Ein vereinfachtes Predicate könnte sagen:

```scala
val submittedOutput = getVar[Coll[Byte]](0).get
val outputHashOk = blake2b256(submittedOutput) == TASK_HASH
val beforeDeadline = HEIGHT < EXPIRY_HEIGHT
val receiverOk = proveDlog(RECEIVER_PK)

sigmaProp(outputHashOk && beforeDeadline) && receiverOk
```

Das sagt: Der Empfänger darf vor Ablauf der Deadline einlösen, wenn die Transaktion Task-Output enthält, dessen Blake2b-256-Hash dem committed Task-Hash entspricht.

In einem echten System ist die Output möglicherweise nicht das vollständige Task-Ergebnis. Es könnte eine signierte Bestätigung, ein Beweis, eine Verifier-Aussage, eine Merkle-Wurzel oder ein Digest eines extern gespeicherten Artifacts sein.

## Warum Blake2b-Konsistenz wichtig ist

Wenn das ErgoScript Predicate `blake2b256` verwendet, muss der Client Code den gleichen Digest berechnen. Berechne SHA-256 im Client und Blake2b im Contract nicht, es sei denn, der Artikel sagt klar, dass der Code Pseudocode ist.

Ein JavaScript Helper sollte eher so aussehen:

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

Die genauen Bytes sind wichtig. Normalisiere Strings, Encodings und Zeilenumbrüche vor dem Hashing. Andernfalls könnten zwei Agenten sich über den Digest des gleichen menschenlesbaren Outputs uneinig sein.

## Acceptance Predicates vs. Escrow

Traditionelles Escrow sagt: Lege Gelder in die Mitte, dann gib sie frei, nachdem jemand entschieden hat, dass die Work fertig ist.

Acceptance Predicates sagen: Lege die Release-Regel in die Spending Condition. Die Regel kann objektiv, teilweise objektiv oder Verifier-basiert sein.

| Model | Wer entscheidet? | Stärke | Schwäche |
|---|---|---|---|
| Manuelles Escrow | Menschlicher Arbitrator | Flexibel | Langsam, zentralisiert, teuer |
| API-seitige Abrechnung | Service-Server | Einfach | Server wird vertraut |
| Oracle-basierte Release | Externer Oracle | Funktioniert für externe Fakten | Oracle-Vertrauen und Latenz |
| HTLC | Hash-Preimage | Einfach und robust | Begrenzte Condition-Ausdruckskraft |
| Ergo Acceptance Predicate | ErgoScript-Regel | Programmierbar und explizit | Verifiziert nur, was das Script beobachten kann oder was ein Verifier signiert |

Das richtige Design hängt von der Task ab. Ein Hash-Predicate funktioniert für committed Outputs. Ein Verifier-Signature funktioniert für subjektive Qualität. Ein Zero-Knowledge Credential könnte für privacy-preserving Akzeptanz funktionieren. Das Predicate macht das Trust Model sichtbar.

## Was Predicates verifizieren können

Acceptance Predicates funktionieren gut für:

- genaue Output-Hashes;
- signierte Verifier-Receipts;
- Deadline-Checks;
- Budget-Limits;
- Receiver-Authorization;
- Token- oder Note-Properties;
- Reserve-Referenzen;
- Tracker-Updates;
- einfache Data Commitments;
- Proofs, die durch Transaction Context weitergegeben werden.

## Was Predicates nicht allein verifizieren können

Ein Predicate kann nicht magisch willkürliche Off-Chain-Realität inspizieren. Es kann nicht wissen, ob ein generierter Essay "gut" ist, es sei denn, das Qualitätskriterium ist kodiert oder ein Verifier signiert eine Bestätigung. Es kann nicht wissen, ob eine API-Response nützlich war, es sei denn, diese Nützlichkeit wird auf eine prüfbare Bedingung reduziert.

Das ist kein Fehler. Es ist eine Disziplin: Wenn du Akzeptanz nicht definieren kannst, kannst du Zahlung nicht sicher automatisieren.

## Register Layout Beispiel

Eine Note-ähnliche Zahlung könnte Task-Daten in Registern kodieren:

| Register | Bedeutung |
|---|---|
| R4 | Reserve Box ID oder Agreement ID |
| R5 | Expiry Block Height |
| R6 | Task Hash oder Task Commitment |
| R7 | Verifier Public Key, Policy ID oder Service Metadata |

Die Redemption Transaction kann dann Context-Variablen bereitstellen:

| Context Variable | Bedeutung |
|---|---|
| Var 0 | Eingereichte Output oder Receipt Bytes |
| Var 1 | Optionale Verifier-Signatur |
| Var 2 | Optionale Metadata oder Merkle Proof |

Halte das Layout dokumentiert. Ein Predicate, das niemand dekodieren kann, ist nicht nützlich für ein Protokoll.

## Ein Verifier-basiertes Predicate

Einige Tasks benötigen subjektive Akzeptanz. In diesem Fall kann das Predicate eine Verifier-Signatur erfordern.

```scala
val receipt = getVar[Coll[Byte]](0).get
val receiptHashOk = blake2b256(receipt) == RECEIPT_HASH
val verifierOk = proveDlog(VERIFIER_PK)
val beforeDeadline = HEIGHT < EXPIRY_HEIGHT

sigmaProp(receiptHashOk && beforeDeadline) && verifierOk
```

Das beseitigt nicht das Verifier-Vertrauen. Es begrenzt es. Die Rolle des Verifiers ist explizit, und die Receipt kann von Application-Policy archiviert, überprüft oder in Frage gestellt werden.

## Warum das für Accord wichtig ist

Accord beschreibt Work-Vereinbarungen und Verification-Receipts. ErgoScript Acceptance Predicates sind eine Möglichkeit, diese Receipts auf einer Settlement-Schiene durchzusetzen.

Ein zukünftiger Flow kann so aussehen:

1. Accord Agreement definiert Task, Preis und Verifier.
2. Ergo Note kodiert Payment-Wert, Expiry und Predicate.
3. Worker vollendet Task.
4. Verifier emittiert Verification Receipt.
5. Worker löst Note ein, wenn Predicate die Receipt akzeptiert.
6. Settlement Receipt registriert die Redemption Transaction.

Das ist ein kompletter Work-Payment Loop: Agreement, Verification, Settlement.

## Threat Model

### Replay Attack

Ein Worker wiederverwendet die gleiche Receipt für mehrere Zahlungen. Mitigation: Füge callId, Agreement ID oder Note ID in die signierte/verifizierbare Receipt ein.

### Late Redemption

Ein Worker löst nach der Deadline ein. Mitigation: Füge `HEIGHT < expiry` in das Predicate ein.

### Falsche Task Output

Ein Worker reicht Output für eine andere Task ein. Mitigation: Füge Task Hash, Agreement ID und Payer/Receiver-Daten in das Commitment ein.

### Verifier Capture

Ein Verifier akzeptiert schlechte Work. Mitigation: Nutze Reputation, Multi-Verifier Threshold, Stake, Audit Logs oder objektive Predicates wo möglich.

### Encoding Mismatch

Agenten hashen unterschiedliche Byte-Repräsentationen. Mitigation: Veröffentliche kanonische Encoding und Test-Vektoren.

### Contract Bug

Das Predicate hat einen Logic Error. Mitigation: Testnet, formale Review, externe Audit und signierte Manifests.

## Best Practices

- Veröffentliche Predicate Source und kompilierten Hash.
- Nutze kanonische Encodings.
- Füge Test-Vektoren ein.
- Halte Predicates schmal.
- Trenne Payment-Receipt von Work-Receipt.
- Füge Expiry hinzu.
- Füge Replay-Protection hinzu.
- Vermeide subjektive Predicates, es sei denn ein Verifier ist explizit.
- Stelle ungeprüfte Beispiele nicht mit echten Mitteln bereit.

## FAQ

### Was ist ein Acceptance Predicate?

Ein Acceptance Predicate ist eine programmierbare Bedingung, die erfüllt sein muss, bevor ein Zahlungsinstrument eingelöst werden kann. Im Kontext von Ergo Agent-Payments kann es die Einlösung an Task-Output, eine Verifier-Receipt, eine Deadline oder eine andere in ErgoScript kodierte Bedingung binden.

### Entfernt das die Notwendigkeit für Escrow?

Es kann einige Escrow-Anwendungsfälle entfernen, besonders wenn die Acceptance-Regel objektiv ist. Wenn die Work subjektive Beurteilung erfordert, kannst du möglicherweise immer noch einen Verifier oder einen Dispute-Prozess benötigen. Der Unterschied ist, dass die Verifier-Rolle kodiert und geprüft werden kann.

### Können Ethereum das gleiche implementieren?

Ethereum kann bedingte Payment-Contracts implementieren, aber das Design ist normalerweise auf Application-Ebene und kann Escrow-Contracts, Upgradeability Choices, Oracle Design, Gas Dynamics und Account-Model Risiken beinhalten. Ergo's eUTXO Model macht das Payment-Objekt und die Spending-Regel explizit.

### Sind Acceptance Predicates produktionsreif?

Die zugrunde liegende ErgoScript Fähigkeit ist real, aber jedes spezifische Predicate muss überprüft werden. Ein Demo-Predicate ist nicht ein Production-Contract. Nutze Testnet, veröffentliche Test-Vektoren und warte auf Audits vor Mainnet-Nutzung.

### Was ist das einfachste nützliche Predicate?

Das einfachste nützliche Predicate checkt einen Task-Hash und eine Deadline: Löse nur ein, wenn die eingereichte Output zu dem committed Digest hashiert, bevor die Deadline abläuft. Es ist begrenzt, aber es demonstriert das Kernkonzept.

## Article JSON-LD Draft

```json
{
  "@context": "https://schema.org",
  "@type": "TechArticle",
  "headline": "ErgoScript Acceptance Predicates: On-Chain Work Verification for AI Agent Payments",
  "description": "Erfahre, wie ErgoScript Acceptance Predicates Task-Completion-Bedingungen in Payment-UTxOs kodieren und es KI-Agenten ermöglichen, Work mit weniger Off-Chain-Vertrauensannahmen zu verifizieren.",
  "datePublished": "2026-03-12",
  "dateModified": "2026-05-08",
  "author": { "@type": "Organization", "name": "Ergo Developer Relations" },
  "publisher": { "@type": "Organization", "name": "Ergo Platform" },
  "mainEntityOfPage": "https://www.ergoblockchain.org/blog/ergoscript-acceptance-predicates-agent-payments",
  "keywords": ["ErgoScript", "acceptance predicates", "AI agent payments", "eUTXO", "work verification"]
}
```

## Source Notes

- Original article: https://www.ergoblockchain.org/blog/ergoscript-acceptance-predicates
- Accord Protocol repo: https://github.com/accord-protocol/accord-protocol
- Ergo technology page: https://www.ergoblockchain.org/technology