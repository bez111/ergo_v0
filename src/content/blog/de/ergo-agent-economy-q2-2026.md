---
title: "Accord Protocol Q2 2026 Update: Was in Ergos Agent Economy Stack geleistet wurde"
slug: "/blog/ergo-agent-economy-q2-2026"
seo_title: "Accord Protocol Q2 2026: AI Agent Payments SDK, MCP Server und Ergo Testnet Demos"
meta_description: "Accord Protocol Q2 2026 Update: AI Agent Payment SDKs, Ergo Notes, MCP Server, LangChain/OpenAI/CrewAI/AutoGen Adapter, Testnet Demos und Audit-gesteuerte Mainnet Roadmap."
excerpt: "Zwei Monate nach der ersten Ergo Agent-Payment SDK Veröffentlichung liefert das Accord Protocol jetzt eine Testnet-zentrierte Agreement-Schicht, volständiger Note-Lebenszyklus, Framework-Adapter, MCP-Tools und zehn funktionierende Beispiele."
author: "Ergo Developer Relations"
date_published: "2026-05-06"
date_modified: "2026-05-08"
status: "Testnet Beta. Mainnet-Nutzung von Accord, ChainCash/Basis-Referenzverträgen und Agent-Payment SDK Flows bleibt durch signierte Audit-Manifeste gated."
tags: ["Accord Protocol", "Ergo", "AI agent payments", "MCP", "x402", "developer update"]
target_keywords: ["Accord Protocol", "AI agent payments SDK", "Ergo agent payments", "MCP server payments", "x402 work verification", "autonomous agent settlement"]
---

# Accord Protocol Q2 2026 Update: Was in Ergos Agent Economy Stack geleistet wurde

**Status Mai 2026:** Ergos Basis-Protokoll-Primitive sind auf Mainnet live. Accord Protocol, die Ergo Agent-Payment SDKs, ChainCash/Basis-Referenzverträge und die öffentlichen Demos sind **Testnet-zentriert**, sofern nicht explizit anders gekennzeichnet. Production-Nutzung auf Mainnet sollte blockiert bleiben, bis signierte Audit-Manifeste veröffentlicht und verifiziert werden.

Vor zwei Monaten beantwortete das erste öffentliche Ergo Agent-Payment SDK eine eng gesteckte Frage: Kann ein autonomes Software-Agenten eine Zahlung auf Ergo tätigen ohne dass ein Mensch aktiv eingreift? Die Antwort lautete ja, aber das erste Release war bewusst klein. Es konnte Wert senden, eine grundlegende Note erstellen, ein paar Helfer zeigen und die Richtung beweisen.

Q2 ändert die Form des Projekts. Die Arbeit ist von einem einzelnen Ergo-Rail SDK in das **Accord Protocol** übergegangen: ein offenes Agreement-Protokoll für autonome Agent-Arbeit. Die Ergo-Rail bleibt die erste End-to-End-Referenzimplementierung, aber der Rahmen ist jetzt breiter. MCP erklärt, wie Agenten Tools aufrufen. A2A-artige Protokolle erklären, wie Agenten kommunizieren. x402-artige Flows erklären, wie eine bezahlte HTTP-Anfrage passieren kann. Accord erklärt, was versprochen wurde, wie die Fertigstellung verifiziert wurde und wie die Abrechnung protokolliert wurde.

Diese Unterscheidung ist wichtig. Zahlung allein ist nicht das ganze Problem. Ein bezahlter API-Aufruf sagt dir nur, dass Geld bewegt wurde. Agent-Handel benötigt auch eine Vereinbarung: wer die Arbeit angefordert hat, welche Ausgabe erwartet wurde, welcher Verifier sie annahm, welche Rail sie abgewickelt hat und was passiert, wenn die Arbeit teilweise, verspätet oder ungültig ist. Accord ist die Schicht, die eine Zahlung in einen verifizierbaren Arbeitsvertrag verwandelt.

## TL;DR

### Accord ist jetzt das Umbrella-Protokoll

Das frühere `ergo-agent-economy` Repository ist zu Accord Protocol migriert worden. Das Repo beschreibt jetzt eine Rail-unabhängige Agreement-Schicht mit Ergo, Rosen, Base/EVM und x402-kompatiblen Referenz-Rails. Die Ergo-Rail liefert immer noch die vollständigste End-to-End-Implementierung, weil eUTXO, ErgoScript, Notes, Reserves und Acceptance Predicates natürlich zum Design passen.

### Der Stack ist Testnet-zentriert und Audit-gesteuert

Das Projekt ist Open Source und funktioniert, ist aber nicht produktionszertifiziert. Der Repo-Status ist explizit: **Testnet Beta** und **Mainnet blockiert bis signierte Audit-Manifeste vorhanden sind**. Builder sollten den aktuellen Code als Referenzimplementierung für Prototypen, Demos und Testnet-Deployments betrachten.

### Der Note-Lebenszyklus ist jetzt End-to-End implementiert

Die Ergo-Rail deckt jetzt den vollständigen Reserve → Note → Tracker → Acceptance Predicate Pfad ab: eine Reserve erstellen, Notes ausgeben, Notes prüfen, Notes einlösen, Batches abrechnen und Tracker-Status bereitstellen. Das ist der minimal viable Lebenszyklus für programmierbare Bearer-Instrumente.

### Drei Developer-Oberflächen sind verfügbar

TypeScript/Node, Python und MCP-Tools lassen Builder den Stack aus verschiedenen Runtimes heraus angehen. Ein JavaScript-Agent kann Notes ausgeben. Ein Python-Agent kann eine API bezahlen. Ein MCP-kompatibler Host kann Payment-Tools einem KI-Assistenten oder einer Developer-Umgebung bereitstellen.

### Der nächste Bottleneck ist nicht Fantasie; es ist Verifizierung

Die nächste Phase ist Audit, Standardisierung und Developer Proof: externe Sicherheitsüberprüfung, klare Status-Manifeste, eine gehostete Testnet-Referenz dApp, mehr Framework-Integrationen und bessere Conformance-Tests.

## Benennung und Migration

Das Rebranding hat eine notwendige Unterscheidung geschaffen, die jeder Developer verstehen sollte, bevor er baut.

| Schicht | Kanonischer Name | Was es bedeutet |
|---|---|---|
| Umbrella-Protokoll | Accord Protocol | Agreement, Verifizierungsquittungen, Abrechnungsquittungen und Cross-Rail Specs. |
| Kanonische Packages | `@accord-protocol/*` | Geteilte Typen, Conformance-Tools, Accord/MCP, Accord/402 und Cross-Rail Protokollobjekte. |
| Ergo-Referenz Rail | `ergo-agent-*` packages | Die Ergo-spezifischen SDKs für Notes, Reserves, Trackers, Acceptance Predicates und Testnet Demos. |
| Referenzverträge | ChainCash / Basis Prototypen | Open-Source-Referenzimplementierung von programmierbaren Notes und Credit Flows; nicht auditiert. |

Eine einfache Faustregel: wenn du die Cross-Rail Spec liest, beginne mit `@accord-protocol/*`. Wenn du heute einen Ergo Testnet Agent baust, beginne mit den `ergo-agent-*` Rail Packages. Wenn du etwas mit echten Benutzergeldern bereitstellst, stop beim Audit-Gate.

## Was geleistet wurde

### 1. Vollständiger Note-Lebenszyklus

Der Kernmeilenstein ist der Note-Lebenszyklus. Eine Note ist nicht nur ein Token. Es ist ein programmierbares Bearer-Instrument: ein UTxO-förmiger Anspruch gegen eine Reserve, mit Wert, Verfallsdatum, Einlösungsregeln und optionaler Acceptance-Logik.

Der aktuelle Lebenszyklus umfasst:

1. **Eine Reserve erstellen** — Sicherheiten bereitstellen und Ausgaberegeln definieren.
2. **Eine Note ausgeben** — einen programmierbaren Anspruch gegen die Reserve erstellen.
3. **Eine Note prüfen** — Register, Verfallsdatum und Acceptance-Parameter dekodieren.
4. **Eine Note einlösen** — die Note ausgeben wenn das Prädikat erfüllt ist.
5. **Einen Batch abrechnen** — mehrere Notes zusammen einlösen um Abrechnungsgebühren zu reduzieren.
6. **Einen Tracker aktualisieren** — Double-Redemption über das Credit-System verhindern.

Für Agenten ist dies der Unterschied zwischen "sende eine Münze" und "gib spendbare Budget mit Regeln aus." Ein Parent-Agent kann eine bounded Note an einen Sub-Agent ausgeben. Der Sub-Agent kann einen Tool-Provider bezahlen. Der Tool-Provider kann später akzeptierte Notes in einem Batch einlösen. Die Reserve bleibt die prüfbare Quelle der Deckung.

### 2. Agreement-, Verifizierungs- und Abrechnungsquittungen

Accord fügt ein Vokabular oberhalb der Rail hinzu.

Ein **Accord Agreement** beantwortet: Was wurde angefordert, von wem, für wie viel, unter welcher Verifizierungsregel?

Eine **Verification Receipt** beantwortet: Hat ein Verifier akzeptiert, abgelehnt oder teilweise akzeptiert?

Eine **Settlement Receipt** beantwortet: Hat Wert abgerechnet, auf welcher Rail, mit welcher Transaktion oder Zahlungsbescheinigung?

Diese Trennung ist das wichtigste strategische Upgrade. Das bedeutet, dass Accord mit x402-artigen HTTP-Zahlungen, Ergo Notes, Stablecoin-Rails oder zukünftigen Settlement-Systemen sprechen kann, während die gleiche Work-Agreement-Struktur erhalten bleibt.

## Zehn Beispiele, die Builder ausführen können

Das Repo enthält jetzt eine praktische Sequenz statt eines einzigen Hello-World:

1. Basis Agent-zu-Agent Zahlung.
2. Note-Zahlung statt roh ERG.
3. Acceptance Predicate an Taskausgabe angehängt.
4. Orchestrator-Budget für Sub-Agenten.
5. Bezahlter API-Server.
6. Python-Agent zahlt für API-Aufruf.
7. Streaming Pay für nutzungsbasierte Services.
8. Treasury Multisig für Multi-Agent Budgets.
9. CrewAI Multi-Agent Settlement Beispiel.
10. AutoGen Agent mit Ergo Payment Tool.

Die Beispiele sollten Testnet-zentriert bleiben. Das ist ein Feature, keine Schwäche. Agent-Zahlungen sind eine neue Oberfläche: Key-Verwahrung, Replay-Schutz, Rückerstattungen, teilweise Arbeit, Verifier-Vertrauen und fehlgeschlagene Abrechnungen benötigen alle sorgfältige Handhabung bevor Mainnet-Flows empfohlen werden.

## Framework-Adapter

Agent-Builder wollen nicht Blockchain-Spezialisten werden bevor sie einen Prototyp versenden. Die SDK-Richtung ist daher korrekt: Treffe Developer in den Frameworks, die sie bereits nutzen.

### LangChain

LangChain Beispiele zeigen Payment und Note Operationen als Tools. Eine Chain oder ein Agent kann eine bezahlte Ressource anfordern, prüfen ob eine Note akzeptiert wurde und fortfahren sobald Zahlung oder Verifizierung abgeschlossen ist.

### OpenAI Function Calling

Die OpenAI-artige Function-Oberfläche verwandelt Payment in eine aufrufbare Operation. Das Modell muss UTxO-Details nicht verstehen; es erhält eine begrenzte Tool-Definition und die Host-Anwendung erzwingt Policy.

### CrewAI und AutoGen

Multi-Agent Frameworks machen das Payment-Problem offensichtlicher. Ein Koordinator weist Agenten Arbeit zu. Agenten rufen APIs auf, delegieren Subtasks und produzieren Ausgaben. Ohne interne Budget-Instrumente kollabieren alle Kosten zurück zum menschlichen Operator. Notes ermöglichen es dem Budget, mit der Task zu bewegen.

### MCP

MCP ist wichtig, weil es eine praktische Brücke zwischen KI-Assistenten, Developer-Tools und externen Fähigkeiten ist. Ein MCP-Payment-Server kann "pay", "issue Note", "check Note" oder "verify work" einem kompatiblen Host zeigen. Das macht Payment zu einem Tool, nicht zu einer Custom-Integration.

## Wo x402 passt

x402 ist wichtig, weil es HTTP 402 Payment Required als echtes programmatisches Payment-Muster zurückbringt. Ein Server kann mit Payment-Anweisungen antworten, der Client kann eine Payment-Payload anhängen und ein Facilitator kann die Zahlung verifizieren und abrechnen. Das ist eine saubere Oberfläche für bezahlte APIs, Paywalled-Inhalte und Machine-to-Machine Anfragen.

Accord sollte nicht so tun als würde es x402 ersetzen. Die stärkere Positionierung ist:

> **x402 verifiziert Zahlung. Accord verifiziert Fertigstellung. Ergo rechnet programmierbaren Wert ab.**

Eine bezahlte Anfrage kann einen x402-artigen Challenge nutzen. Die Work-Agreement kann in Accord protokolliert werden. Die Abrechnung kann durch Ergo Notes, Rosen Assets, eine EVM Stablecoin-Rail oder einen anderen Adapter passieren. Der wichtige Punkt ist nicht, welche Rail jede Zahlung gewinnt; es ist, ob Agreement, Verifizierung und Abrechnung komponierbar sind.

## Was du heute bauen kannst

Nutze den aktuellen Stack für Testnet-Experimente wie:

- einen bezahlten API-Endpoint der Daten nach einer verifizierten Testnet-Zahlung zurückgibt;
- ein MCP-Tool das pro Aufruf berechnet;
- einen Parent-Agent der Notes an Sub-Agenten mit Ausgabegrenzen ausstellt;
- einen Work-Marketplace wo der Käufer erst bezahlt nachdem ein Verifier die Ausgabe akzeptiert;
- eine Streaming-Inferenz-Demo mit kleinen gemessenen Zahlungen;
- eine Dokumentations-Demo die den Unterschied zwischen Zahlungsverifizierung und Work-Verifizierung zeigt.

Nutze die unauditierten Referenzverträge nicht für echte Geld-Kreditausgabe. Halte nicht die Mittel von Benutzern. Kündige keine Production-Bereitschaft an bevor die Audit-Manifeste vorhanden sind.

## Roadmap für den Rest von 2026

### 1. Externe Audit und signierte Manifeste

Die oberste Priorität ist Sicherheitsüberprüfung. Ein signiertes Audit-Manifest sollte den exakten Script-Hash, kompiliertes ErgoTree, Paket-Version, Rail-Adapter und Deployment-Netzwerk spezifizieren. "Auditiert" muss ein spezifisches Artefakt bedeuten, nicht eine breite Aussage.

### 2. Standard Discovery

Agenten benötigen einen vorhersehbaren Weg um Payment-Bedingungen zu entdecken. Ein zukünftiger Standard könnte `.well-known/accord.json`, HTTP-Header oder eine x402-kompatible Extension zeigen die Preis, Rail, akzeptierte Assets, Verifizierungsregel und Refund-Policy beschreibt.

### 3. Gehostete Testnet-Referenz dApp

Ein öffentliche Demo ist wichtiger als ein weiteres Manifesto. Ein Builder sollte eine Seite öffnen können, eine bezahlte Task anfordern, einen 402-artigen Challenge sehen, mit einer Testnet-Wallet bezahlen, eine Note einlösen sehen und die Quittungen inspizieren können.

### 4. Conformance Tests

Jeder Rail-Adapter sollte vergleichbare Agreement-, Verifizierungs- und Abrechnungsquittungen produzieren. Conformance Tests sind das, was Accord zu einem Protokoll statt zu einer Collection von Beispielen macht.

### 5. Mehr Framework-Integrationen

LangGraph, LlamaIndex, Vercel AI SDK, DSPy und lokale Agent-Frameworks sollten alle einfache Payment-Hooks haben. Das beste SDK ist dasjenige, das ein Builder hinzufügen kann ohne seine Anwendungsarchitektur zu ändern.

## Implementierungsnotizen für Builder

Starten auf Testnet. Nutze kleine Werte. Nutze explizite Allowlists. Halte Private Keys aus dem Source Code. Füge Replay-Schutz zu jeder bezahlten Action hinzu. Behandle Verifizierung als einen separaten Schritt von Zahlung. Protokolliere sowohl Payment-Quittungen als auch Work-Quittungen. Mache Refunds und Failed-Work Handling explizit.

Eine gute Demo versteckt nicht die Failure Modes. Sie zeigt sie.

## FAQ

### Ist Accord Protocol production-ready?

Nein. Das aktuelle öffentliche Repo ist eine Testnet-zentrierte Referenzimplementierung. Es ist nützlich für Prototypen, Demos und Developer-Erkundung. Production-Mainnet-Nutzung sollte blockiert bleiben bis signierte Audit-Manifeste überprüfte Scripts, Paketversionen und Rail-Adapter identifizieren.

### Was ist der Unterschied zwischen Accord und Ergo Agent Payments?

Accord ist die Agreement-Schicht: Bedingungen, Verifizierungsquittungen und Abrechnungsquittungen. Ergo Agent Payments sind eine Rail-Implementierung: Notes, Reserves, Trackers und Acceptance Predicates auf Ergo. Accord kann Work-Agreements über Rails beschreiben; Ergo bietet heute die vollständigste programmierbare Settlement-Primitive-Menge.

### Warum `ergo-agent-*` Packages nach dem Accord Rebrand behalten?

Weil sie als Ergo-spezifische Entry Points nützlich bleiben. Das kanonische Umbrella kann Accord sein, aber Builder die Ergo Notes erstellen oder Testnet Ergo Beispiele ausführen wollen benötigen immer noch Rail-spezifische SDKs. Der Schlüssel ist, sie klar als Referenz-Rail Packages zu kennzeichnen.

### Wie unterscheidet sich Accord von x402?

x402 konzentriert sich auf Payment über HTTP: eine Ressource erfordert Zahlung, der Client sendet eine Payment-Payload und Verifizierung/Abrechnnung entsperren den Zugang. Accord konzentriert sich auf Work-Agreements: was versprochen wurde, wie es verifiziert wurde und wie die Abrechnung protokolliert wurde. Sie können gut zusammenarbeiten.

### Was sollte die nächste Demo zeigen?

Eine gehostete Testnet-API die HTTP 402 zurückgibt, einen Accord/402 Payment Flow akzeptiert, Task-Fertigstellung verifiziert, eine Verification Receipt ausstellt und durch eine Ergo Note abrechnet würde der stärkste öffentliche Beweis sein.

## Article JSON-LD Entwurf

```json
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Accord Protocol Q2 2026 Update: Was in Ergos Agent Economy Stack geleistet wurde",
  "description": "Accord Protocol Q2 2026 Update: AI Agent Payment SDKs, Ergo Notes, MCP Server, Framework-Adapter, Testnet Demos und Audit-gesteuerte Mainnet Roadmap.",
  "datePublished": "2026-05-06",
  "dateModified": "2026-05-08",
  "author": { "@type": "Organization", "name": "Ergo Developer Relations" },
  "publisher": { "@type": "Organization", "name": "Ergo Platform" },
  "mainEntityOfPage": "https://www.ergoblockchain.org/blog/ergo-agent-economy-q2-2026",
  "keywords": ["Accord Protocol", "AI agent payments", "Ergo", "MCP", "x402", "testnet"]
}
```

## Source Notes

- Aktueller Blog-Artikel: https://www.ergoblockchain.org/blog/ergo-agent-economy-q2-2026
- Accord Protocol Repo: https://github.com/accord-protocol/accord-protocol
- x402 Dokumentation: https://docs.cdp.coinbase.com/x402/welcome
- Strukturierte Daten-Richtlinie für Artikel: https://developers.google.com/search/docs/appearance/structured-data/article