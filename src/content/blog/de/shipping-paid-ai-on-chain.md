---
title: "Den ersten bezahlten KI-Agenten auf einer Blockchain ausliefern"
slug: "/blog/shipping-paid-ai-on-chain"
seo_title: "Den ersten bezahlten KI-Agenten auf einer Blockchain ausliefern — Sage Build Log"
meta_description: "Wie Sage — der Agent-Economy-Concierge auf ergoblockchain.org — End-to-End auf Ergo Testnet mithilfe des Accord Protocol gebaut wurde. Architektur, Code-Oberfläche, drei echte Bugs die wir gefunden haben, und was Verify-only Mode bedeutet."
excerpt: "Sage ist ein Claude-Concierge, der 0,001 Testnet-ERG über einen Accord Note für Premium-Antworten nimmt, abgewickelt auf Ergo. Die Website demonstriert nun die Agent-Economy-These, die sie vertritt. Das ist das Build Log."
author: "Ergo Developer Relations"
date_published: "2026-05-15"
date_modified: "2026-05-15"
tags: ["Agent Economy", "Accord Protocol", "Sage", "build log", "Ergo testnet", "AI agent payments", "Claude", "Fleet SDK"]
target_keywords: ["paid AI agent on blockchain", "Sage Ergo concierge", "Accord Protocol live demo", "AI agent on-chain payment", "agent economy working demo"]
---

# Den ersten bezahlten KI-Agenten auf einer Blockchain ausliefern

In den letzten sechs Monaten hat [die Website, auf der du bist](https://www.ergoblockchain.org) eine These vertreten: Autonome KI-Agenten werden programmierbares Geld brauchen — begrenzte Credits, maschinenlesbare Bedingungen, Arbeitsverifikation, Abwicklungsquittungen. Das [Agent Economy Manifesto](/blog/agent-economy-manifesto) machte den Fall. Die Architektur-Seite legte die [vier Primitiven](/build/agent-payments) dar. Der Blog erklärte, [warum Agenten Stripe nicht nutzen können](/blog/agents-cant-use-stripe).

Das war Theorie. Seit dieser Woche ist die Website selbst die funktionierende Demo.

**Sage** ist das Chat-Widget unten rechts auf jeder Seite. Frag Sage alles Substantielle über Ergo, die Agent Economy oder Accord. Der kostenlose Tarif ist Claude Haiku 4.5 über einen indizierten Dokumenten-Corpus. Frag `/code` oder irgendetwas, das die Premium-Gate auslöst, und Sage gibt HTTP 402 zurück mit einem Angebot: 0,001 Testnet-ERG, zahlbar als Accord Note pinned an einen Task-Hash. Bezahle es. Der Rail-Adapter von Sage verifikiert die Note on-chain, dann streamt Claude Sonnet 4.6 die Antwort. Jeder bezahlte Turn wird eine öffentliche Quittung unter `/r/sage/<box_id>` mit Schema.org `Action` Markup, damit Suchmaschinen und KI-Engines die Abwicklung indizieren können.

Dieser Post ist das Build Log. Was es macht, was es kostete, drei Bugs die Stunden fraßen, und was ehrlich gesagt noch nicht fertig ist.

## Was Sage ist und was es macht

Sage ist ein Single-Tenant-Agent-Economy-Concierge:

- **Free Tier** — Haiku 4.5 über BM25-Retrieval des indizierten Ergo Dokumentation und Blog. ~250-Wort-Antworten. Weigert sich, Code zu erfinden, weigert sich, über Preise zu sprechen, weigert sich, off-topic zu gehen. Kostet ~$0,001 pro Turn auf der Anthropic-Seite; Rate-Limited pro IP.
- **Premium Tier** — Sonnet 4.6 mit tieferem Retrieval (RAG_K=10 vs 5), 2400 max_tokens vs 800, und explizitem Reasoning. Gated durch eine 402 Challenge: eine bezahlte Note auf Ergo Testnet entsperrt einen Premium-Turn.
- **Receipts** — Jeder bezahlte Turn produziert eine öffentliche URL mit Note-Box-ID, Emissions-Tx, Wert, Deadline, und einem Schema.org `Action` Block, den KI-Engines und Crawler lesen können.

Das Premium-Gate wird ausgelöst, wenn die Frage des Benutzers einem dieser Muster entspricht: explizites `/command` Präfix, Code-ähnliche Intent, Deep-Research-Phrasing, Länge über 400 Zeichen, oder ein Multi-Turn Follow-up in einem langen Thread. Heuristiken in `src/lib/sage/payments/gate.ts`. Wir bevorzugen False Negatives — besser zu wenig berechnen als die ersten 100 Nutzer zu überraschen.

## Die vier Primitiven, die die Arbeit leisten

Sage ist nicht auf einer Custom-Payment-SDK gebaut. Es kombiniert die gleichen vier Primitiven, die das [Accord Protocol](https://github.com/accord-protocol/accord-protocol) definiert und das Manifesto argumentiert:

| Primitiv | Was er in Sage macht |
|----------|---------------------|
| **Reserve** | Eine 0,1-ERG-Box auf Ergo Testnet, die jeden Note backing. Einmalige Einrichtung. Box-ID `4af1816c…` (verifizierbar auf [Explorer](https://testnet.ergoplatform.com/transactions/195f769dc25d36244c271ff8bdc2be65b3f184a0440459fb67116f9b55d1f041)). |
| **Note** | Ein Bearer-Instrument ausgegeben gegen die Reserve. Trägt 0,001 ERG, verfällt bei `+120 Blöcke`, und hat den Task-Hash der Frage in Register R6. |
| **Acceptance Predicate** | Die ErgoScript-Ausgabebedingedung eingebettet in der Note: blake2b256(task_output) == R6. Erzwingt Einlösung um die korrekte Arbeit zu committen. |
| **Tracker** | Optional in v0 — Sages Free Tier braucht keinen, weil jede Note an einen eindeutigen Task-Hash gebunden ist; Double-Redemption wird durch Chain State erkannt. |

Zusammen verwandeln diese Zahlung in einen kleinen Vertrag für Arbeit. Der Note ist keine Übertragung mit angehängter Quittung — er *ist* die Quittung, mit der Einlösungsregel eingebaut.

## End-to-End Lebenszyklus einer bezahlten Query

```text
1.  Benutzer tippt: "/code zeige mir ein Fleet SDK Beispiel"
2.  Widget POST /api/sage/chat → Server gibt 402 mit Begründung zurück
3.  Widget POST /api/sage/quote → Server gibt SageQuote zurück:
      receiver_address  3Wz1Lmu…AY28w        (Sage Testnet Wallet)
      reserve_box_id    4af1816c…628a4d       (echte on-chain Reserve)
      task_hash         9674cd…ced33          (blake2b256 der kanonisierten Frage)
      price             0.001 testnet ERG
      deadline          +120 blocks
      expires_at        T+10min                (Server-seitige Quote Frische)
4.  PaymentPanel rendert Quote mit Copy-Buttons + "wie man bezahlt" Walkthrough
5.  Käufer-Wallet (Nautilus / unsere Bootstrap-CLI / kompatibles Wallet)
    gibt einen Note aus mit R4=reserve, R5=expiry, R6=task_hash
6.  Note Tx bestätigt auf Ergo Testnet (~2 Min)
7.  Käufer fügt note_box_id in Panel ein → Verify
8.  Server POST /api/sage/verify-payment:
      • rails-ergo verifyPayment holt Note von Chain
      • überprüft R4 Reserve-Binding, R5 Expiry, R6 Task Hash, Value ≥ Price
      • verifiziert
9.  Server gibt HMAC Payment Token + Receipt ID + (optional) Settlement TX zurück
10. Widget setzt das Chat fort mit paymentToken
11. /api/sage/chat sieht gültigen Token → routed zu Sonnet 4.6 + tieferem RAG
12. Premium-Antwort streamt via SSE mit "PREMIUM · paid" Badge
13. "Quittung ansehen →" Link zeigt auf /r/sage/<box_or_tx_id>
14. Quittungsseite Server-rendert mit Schema.org Action Markup
```

Zwölf diskrete Schritte. Zwei On-Chain-Transaktionen (Note-Emission + optionale Abwicklung). Ein LLM Call. Eine öffentliche Quittungsseite indizierbar durch jede Such- und KI-Engine der Welt.

## Code-Oberfläche — was wir wirklich gebaut haben

Das ganze Ding passt in einen kleinen Satz von Dateien. Der Großteil der Komplexität lebt an zwei Orten: der Rail-Adapter Wrapping (weil die Testnet-Explorer-API Eigenheiten hat) und die Wallet-Abstraktion (weil wir den Signing-Schlüssel nicht auf Vercel legen).

```
src/lib/sage/
├── retrieve.ts                 BM25 Retrieval über den Doc Index
├── rate-limit.ts               Per-IP Sliding Window
├── payments/
│   ├── agreement.ts            buildSageQuote() + canonicalizeQuestion()
│   ├── gate.ts                 decidePremium() Heuristiken
│   ├── note-ops.ts             ErgoNoteOps Wrapper, der normalisiert
│   │                           v1 Explorer's Object-Format Register
│   ├── token.ts                HMAC-SHA256 Payment Token, 30-min TTL,
│   │                           an Question Hash gebunden, damit ein
│   │                           gestohlener Token nicht eine andere
│   │                           Frage freischalten kann
│   ├── verify.ts               rails-ergo verifyPayment + settle
│   ├── wallet.ts               getSageAgent(): ErgoAgentPay Singleton,
│   │                           Signer = Remote URL oder Local Seed
│   │                           (oder verify-only Mode wenn kein von
│   │                           beiden konfiguriert)
│   └── types.ts                SageQuote, PaymentProof, etc.
└── explorer/
    └── fetch-tx.ts             Testnet Explorer Fetcher mit v1 Eigenheiten

src/app/api/sage/
├── chat/route.ts               SSE Streaming Endpoint, Premium-aware
├── quote/route.ts              POST { question } → SageQuote | { premium: false }
└── verify-payment/route.ts     POST { quote, question, noteBoxId } → token

src/components/sage/
├── SageWidget.tsx              Floating Chat, orchestriert Payment Flow
├── PaymentPanel.tsx            402 → Quote → Input → Verify
└── MessageBody.tsx             Minimaler Markdown Renderer

src/app/[locale]/r/sage/[id]/
└── page.tsx                    Öffentliche Quittung, Schema.org Action

scripts/sage-signer/
├── bootstrap.mjs               --reserve, --issue-note, --balance, --env-out
└── signer.mjs                  Standalone HTTP Signer, Fleet SDK Prover
```

Insgesamt Sage Code: ~2500 Zeilen über Chat, Payment-Lib, Widget, Quittungsseite und Bootstrap-CLI. Die Bootstrap-CLI ist, was die On-Chain-Reserve erstellt hat und was wir zum Ausstellen von Self-Test-Notes verwenden — es ist auch eine nützliche Referenz für jeden anderen Paid-MCP-Service, der auf Ergo ausliefern will, ohne die Signer-Verdrahtung von Grund auf zu schreiben.

## Drei echte Probleme, auf die wir stießen

### 1. Der Testnet-Explorer `/boxes/{id}` Endpoint ist still kaputt für ungenutzte Boxes

Sages `verifyPayment` ruft `ergo-agent-pay.checkNote(boxId)` auf. Das trifft den v1 Explorer bei `/boxes/{box_id}`. Für SPENT Outputs funktioniert es. Für UNSPENT Boxes — der Fall, der wirklich zählt, da wir einen frisch ausgegebenen Note verifizieren, der noch nicht eingelöst wurde — es 404t. Die gleiche Box erscheint in `/boxes/unspent/byAddress/{addr}` perfekt.

Die Quittungsseite traf die gleiche Wand.

Wir umgehen es mit einem Fallback in `fetch-tx.ts`: Wenn das Standalone-Lookup misst, scannen wir die ungenutzte Liste des Wallets und finden die Übereinstimmung. Es ist hässlich. Es ist der richtige Zug, bis wir einen Upstream-Fix einreichen oder ganz vom v1 Endpoint weggehen.

### 2. Der v1 Explorer gibt Register als Objekte zurück, nicht als Hex-Strings

`ergo-agent-pay@0.3.0` typisiert `additionalRegisters` als `Record<string, string>` und ruft `regs.R5.slice(2)` auf, um das Sigma-Typ-Präfix zu entfernen. Der v1 Testnet-Explorer gibt tatsächlich jeden Register als `{ serializedValue, sigmaType, renderedValue }` zurück. Der `.slice()` Call stirbt mit `e.slice is not a function` und der umliegende rails-ergo `verifyPayment` mapt den Fehler zu `NOTE_NOT_FOUND`.

Wir wrappen den Agent mit einem Proxy in `note-ops.ts`, der `network.getBox` interceptiert und jedes Objekt-förmige Register auf seinen `serializedValue` Hex-String flacht. Drop-in `ErgoNoteOps` Ersatz. ~30 Zeilen inkl. Imports. Sobald `ergo-agent-pay@0.4` beide Formen Upstream akzeptiert, verschwindet der Wrapper.

### 3. Wir sendeten den falschen `task_output` an die Rail

Das eine kostete einen Nachmittag. rails-ergo's `verifyPayment` berechnet `blake2b256(task_output)` und vergleicht es mit dem Note's R6. Der Note wurde mit `R6 = blake2b256(canonicalize(question))` ausgegeben. Also muss `task_output` gleich `canonicalize(question)` sein — die rohen Bytes, deren Hash R6 passt.

Wir sendeten `hashQuestionForToken(question)` — einen total anderen HMAC Hash, der anderswo für Token-Binding verwendet wird. Ergebnis: `TASK_HASH_MISMATCH` bei jedem bezahlten Turn.

Die Fehlerbehebung ist eine Zeile in `verify-payment/route.ts`. Die Lektion ist der Kommentar, den wir daneben hinterlassen haben: Wenn zwei Layer beide Hashing beinhalten, benenne die Variablen nach dem, was sie hashen, nicht nach dem, wie sie im Protokoll heißen.

## Was "Verify-only Mode" bedeutet und warum wir ihn ausgeliefert haben

Sage läuft derzeit im **Verify-only Mode**: Der `verifyPayment` Schritt läuft auf jedem bezahlten Turn (Read-only — keine Signatur nötig), aber die zweite On-Chain-Transaktion (die, die den Note einlöst und die 0,001 ERG in Sages Wallet bewegt) ist **aufgeschoben**.

Das ist Absicht, keine Lücke. Zwei Gründe:

1. **Der Signing-Schlüssel lebt außerhalb von Vercel.** Den Private Key des Seller-Wallets in eine Serverless Env-Var zu legen ist schlechte operative Hygiene. Compromise von `ANTHROPIC_API_KEY` sollte nicht den Wallet ablaufen lassen. Also erfolgt das Einlösungs-Signing via einen lokalen HTTP Signer (`scripts/sage-signer/signer.mjs`), den der Operator auf ihrer eigenen Maschine laufen lässt und via `cloudflared tunnel` exponiert. Sage POSTs unsignierte Txs zu ihm; der Signer validiert gegen eine Pro-Tx Ausgabe Cap + Empfänger-Whitelist vor Signing.
2. **Der Note refundiert Auto bei Ablauf.** Wenn Sage den Note nicht vor seiner `+120 Blöcke` Deadline einlöst, reverts die Spending-Bedingung des Note die Gelder zurück zur Reserve des Käufers. Also trapped eine aufgeschobene Einlösung kein Geld — im schlimmsten Fall ist es eine kostenlose Premium-Antwort, was in der Testnet Bring-up Phase OK ist.

Quittungen im Verify-only Mode zeigen ein gelbes `verified · pending redemption` Badge. Wenn der Signer verdrahtet ist und der nächste bezahlte Query landet, flippen beide das Turn und alle unreleased Past Notes zu einer grünen `settled` View automatisch — die Seite aktualisiert sich selbst, wenn sich der Chain State ändert.

Der Twitter Announce wird ehrlich sagen "verified, settlement pending in this run". Die Signer-Verdrahtung ist eine Eins-Abend-Aufgabe; wir wollen nicht überständigen.

## Was als Nächstes kommt

- **Settler Online.** Tunnel zum Signer, setze `SAGE_SIGNER_URL` auf Vercel, sieh den nächsten bezahlten Note von pending zu settled flippen mit einer echten On-Chain Redemption Tx.
- **Accord Konformität.** Laufe `@accord-protocol/conformance --target https://www.ergoblockchain.org/api/sage/quote`, signiere das Ergebnis mit einem ed25519 Schlüssel, veröffentliche das signierte Artefakt, aktualisiere Sages [Registry-Eintrag](https://github.com/accord-protocol/accord-protocol/blob/main/registry/providers/sage.json) mit dem Konformitäts-Hash. Sage wird der erste L4-zertifizierte Provider in der öffentlichen Accord Registry.
- **Agent Registry auf der Website surfed.** `/ergo-watch/agents` wird die Accord Registry fetchen und jeden gelisteten Provider mit ihren Fähigkeiten, Rails und Recent Receipts rendern. Sages Profilseite wird eine von vielen.
- **Live Agent Activity Strip auf der Homepage.** Newest bezahlte Receipts über der Registry, scrollend unter den Network Stats. Die Website geht von "wir beschreiben die Agent Economy" zu "hier ist, was sie gerade tut".
- **Multi-Tenant Sage.** Extrahiere das Widget in ein standalone `@accord/sage-widget` npm Paket. Jede Docs-Website kann `<script src="…/sage.js" data-rag="…" data-receiver="9f…">` droppen und ihren eigenen bezahlten Concierge mit seinem eigenen Ergo Wallet haben. Distributions-Multiplikator — jedes Embed ist eine neue Ergo Empfänger-Adresse auf einer neuen Domain.

## Probiere es aus

[Öffne ergoblockchain.org](https://www.ergoblockchain.org). Unten rechts, der orange **Ask Sage** Button. Kostenlose Fragen bleiben kostenlos. Frag `/code` oder irgendetwas Substantielles — das Payment Panel leitet dich durch die Ausgabe eines Testnet Notes. Nutze ein Testnet Wallet ([Nautilus](https://github.com/capt-nemo429/nautilus-wallet) ist der Standard, oder laufe `node scripts/sage-signer/bootstrap.mjs --issue-note` von einem Klon des Repos) und `0.001` Testnet ERG (der [Faucet](https://testnet.ergoplatform.com/faucet) gibt ~1 ERG pro Request).

Source: [das ergoblockchain.org Repo](https://github.com/ergoplatform) liefert alles beschriebene oben. Das Accord Pattern, das Sage verwendet, ist die kanonische Käufer/Verkäufer-Verdrahtung unter [`examples/16-paid-mcp-ergo-testnet`](https://github.com/accord-protocol/accord-protocol/tree/main/examples/16-paid-mcp-ergo-testnet).

Das Manifesto und der funktionierende Agent sind jetzt das gleiche Ding. Das ist der ganze Punkt.

## Häufig gestellte Fragen

### Warum Testnet und nicht Mainnet?

Zwei Gründe. Erstens verwendet der Einlösungsvertrag Sages Seller-Wallet als Spending-Bedingung mit kein Audit. Mainnet Writes gegen ungeprüfte ErgoScript sollten nie passieren — die Produktions-Safety Gates in `ergo-agent-pay` blockieren sie aktiv. Zweitens ist der ganze Accord Stack bei v0.4 und die Konformität Manifests sind noch in `draft-pre-audit`. Mainnet ist auf der Roadmap; Heute's Beweise sind Testnet.

### Wie unterscheidet sich das von x402 oder Stripe Agentic Commerce?

x402 ist ein Payment-Required Protokoll — das "402 Challenge" Pattern ist das gleiche. Der Unterschied ist die Rail. x402 wraps typisch eine Karten-/Stripe-Zahlung und behandelt die Chain als Reporting-Layer. Accord legt die Arbeits-Acceptance-Regel in die Spending-Bedingung selbst: Der Note kann nicht eingelöst werden, es sei denn, der Verkäufer hat tatsächlich Arbeit geleistet, die zum Task-Hash der Vereinbarung hashed. Stripe Agentic Commerce ist der Käufer-seitiger Spiegel — Agenten mit Karten. Nützlich für menschlich-genehmigte Käufe. Unterschiedliche Layer von Agent-to-Agent Abwicklung.

### Funktioniert es ohne den Signer?

Ja. Das ist der oben beschriebene Verify-only Mode. Der Premium-Antwort-Flow auf jedem erfolgreichen Verify; nur die zweite On-Chain-Transaktion (Sages Redemption) ist aufgeschoben. Quittungen zeigen "settlement pending", bis der Signer online ist.

### Kann ich meinen eigenen Sage laufen?

Bald, ordnungsgemäß — das ist die Multi-Tenant-Arbeit im "Was als Nächstes kommt" Abschnitt. Heute kannst du das Repo klonen, deinen eigenen Wallet über `scripts/sage-signer/bootstrap.mjs` konfigurieren und eine Sage-Instanz von deinem eigenen Deploy laufen. Dokumentation in [`docs/sage-provisioning.md`](https://github.com/ergoplatform).

### Wohin gehen die Anthropic API Kosten?

Der Anthropic API Schlüssel ist in Vercel env. Wir bezahlen für Free-Tier Traffic. Premium Turns erholen die LLM-Kosten über den Note (0,001 ERG ≈ $0,0007 bei Testnet "rates", wenn du sie dir als real vorstellst). Die Ökonomie der Mainnet-Preisgestaltung ist offen — der v0 Ship ist ein Proof Point, nicht ein Marge-Modell.