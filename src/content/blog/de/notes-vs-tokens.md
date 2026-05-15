---
title: "Notes vs Tokens: Programmierbare Bearer Instrumente für AI-Agent-Zahlungen"
slug: "/blog/notes-vs-tokens-agent-payments"
seo_title: "Notes vs Tokens: Programmierbare Bearer Instrumente für AI-Agent-Zahlungen"
meta_description: "Vergleiche Ergo Notes und native Tokens: Wenn AI Agents programmierbare IOUs, Reserve-Backing, Ablauf, Acceptance Predicates und aufgeschobene Abwicklung benötigen."
excerpt: "Tokens sind hervorragend für Eigentumsrechte. Notes sind besser für begrenzte, ablaufende, bedingt einlösbare Gutschriften in autonomen Agent-Workflows."
author: "Ergo Developer Relations"
date_published: "2026-02-26"
date_modified: "2026-05-08"
status: "Konzeptueller Überblick. ChainCash/Basis Note Implementierungen bleiben Prototyp/Testnet-First bis auditiert."
tags: ["Ergo Notes", "native tokens", "AI agent payments", "bearer instruments", "programmable credit"]
target_keywords: ["Notes vs tokens", "Ergo Notes", "programmable bearer instruments", "AI agent credit", "Reserve backed Notes"]
---

# Notes vs Tokens: Programmierbare Bearer Instrumente für AI-Agent-Zahlungen

**Status ab Mai 2026:** Ergo native Tokens sind ein Live-Protokoll-Feature. Die hier diskutierten Note/Reserve/Tracker-Systeme sind Referenzmuster und Prototypen, sofern eine spezifische Implementierung nicht auditiert und als produktionsreif gekennzeichnet ist.

Blockchains sind hervorragend im Umgang mit Tokens. Ein Token kann Eigentum, Mitgliedschaft, Liquidität, Stimmrecht, ein Sammelobjekt, einen Stablecoin-Anspruch oder eine einfache Werteinheit darstellen. Tokens sind vertraut, zusammensetzbar und einfach zu übertragen.

Aber AI Agents brauchen nicht nur Assets. Sie brauchen Budgets.

Ein Parent Agent muss möglicherweise einem Sub-Agent die Berechtigung geben, bis Freitag bis zu 0,5 ERG für Datenaufrufe auszugeben. Ein Service Provider kann einen Anspruch akzeptieren, der später eingelöst werden kann, wenn die Task-Ausgabe einem Predicate entspricht. Ein Multi-Agent-Workflow benötigt möglicherweise kleine, ablaufende, bedingt einlösbare Instrumente, die vor der endgültigen Abwicklung zirkulieren.

Das ist nicht das, wofür ein einfacher Token gedacht ist.

Das ist das, wofür eine **Note** gedacht ist.

## TL;DR

### Tokens repräsentieren Eigentum

Ein nativer Token ist ein übertragbares Asset. Er ist ausgezeichnet für fungible Guthaben, Governance, NFTs, LP-Positionen und einfache Zahlungen.

### Notes repräsentieren bedingte Gutschrift

Eine Note ist ein programmierbares Bearer-Instrument. Sie kann auf eine Reserve verweisen, ein Ablaufdatum enthalten, einen Wert kodieren und Akzeptanzbedingungen einschließen.

### Agents brauchen Notes, wenn Zahlung von Arbeit abhängt

Wenn eine Zahlung erst nach Akzeptanz einer Task eingelöst werden soll, oder wenn ein Sub-Agent ein begrenztes Budget erhalten soll, sind Notes ausdrucksvoller als Tokens.

### Notes und Tokens ergänzen sich

Dies ist kein Wettbewerb. Eine echte Agent-Ökonomie kann Tokens für Eigentum und Notes für programmierbare Zahlungsflüsse nutzen.

## Was ist ein Token?

Ein Ergo nativer Token ist ein First-Class-Asset im eUTXO-Modell. Er kann geprägt, übertragen und direkt in UTxOs gehalten werden. Er benötigt keinen ERC-20-ähnlichen Wrapper-Vertrag.

Tokens funktionieren gut, wenn die Frage einfach ist:

> Wer besitzt wie viele Einheiten dieses Assets?

Verwende Tokens für:

- Community-Währungen;
- Governance-Rechte;
- NFTs;
- Liquiditätspositionen;
- Protokoll-Anteile;
- einfache bedingungslose Zahlungen;
- Reward-Punkte;
- Stabile Assets oder Wrapped Assets;
- Assets, die nicht automatisch ablaufen sollten.

Ein Token-Transfer ist direkt. Wenn der Empfänger den Token erhält, hat sich das Eigentum geändert. Diese Einfachheit ist die Stärke.

## Was ist eine Note?

Eine Note ist ein höherwertiges Instrument, das auf eUTXO aufgebaut ist. Sie ist ein UTxO-förmiger Anspruch mit Regeln. Sie kann auf eine Reserve verweisen, einen Wert angeben, auf einer Blockhöhe ablaufen und einen Acceptance Predicate vor der Einlösung erfordern.

Die wirtschaftliche Analogie ist näher an einen Scheck, Gutschein, Rentencoupon oder Bearer-IOU als an Bargeld.

Eine Note kann Fragen beantworten, die ein Token normalerweise nicht allein beantworten kann:

- Welche Reserve stützt diesen Anspruch?
- Wann läuft er ab?
- Welche Arbeit muss akzeptiert werden, bevor sie eingelöst wird?
- Wurde diese Note bereits eingelöst?
- Welcher Verifier oder Predicate kontrolliert die Akzeptanz?
- Kann diese Note im Batch abgewickelt werden?

## Wichtige Unterschiede

| Eigenschaft | Token | Note |
|---|---|---|
| Kernbedeutung | Eigentum an einem Asset | Anspruch gegen eine Reserve oder Issuer-Richtlinie |
| Abwicklung | Sofortige Übertragung | Aufgeschobene Einlösung |
| Ablauf | Normalerweise keine | Integriert |
| Akzeptanzbedingungen | Nicht native für Transfer | Kernfeature |
| Backing | Optional oder extern | Reserve-Referenz kann explizit sein |
| Agent-Budget-Einsatz | Begrenzt | Stark |
| Batch-Abwicklung | Nicht das Hauptmodell | Natürliche Passung |
| Governance-Einsatz | Stark | Schwach |
| Langfristige Liquidität | Stark | Normalerweise falsches Werkzeug |
| Task-bedingte Zahlung | Erfordert zusätzliche Logik | Natives Designziel |

## Der Note-Lebenszyklus

Ein nützliches Note-System benötigt einen vollständigen Lebenszyklus.

### 1. Eine Reserve erstellen

Die Reserve ist die Backing-Quelle. Sie hält Sicherheiten oder definiert Issuer-Regeln. Eine Gegenpartei kann die Reserve inspizieren, bevor sie Notes akzeptiert.

### 2. Eine Note ausstellen

Der Issuer erstellt eine Note, die auf die Reserve verweist. Die Note kann Wert, Ablauf, Receiver-Einschränkungen, Task-Hash oder Verifier-Richtlinie kodieren.

### 3. Die Note übertragen

Die Note kann als Bearer-Instrument zwischen Agents zirkulieren. Der Empfänger evaluiert, ob die Reserve und Bedingungen akzeptabel sind.

### 4. Arbeit ausführen

Der Receiver oder nachgelagerte Agent führt die Task aus, ruft eine API auf, liefert Ausgabe oder erhält eine Verifier-Quittung.

### 5. Die Note einlösen

Die Note wird in einer Transaktion ausgegeben, die ihren Predicate erfüllt. Die Reserve zahlt aus oder aktualisiert den Status nach den Regeln.

### 6. Den Tracker aktualisieren

Ein Tracker verhindert doppelte Einlösung. Er dokumentiert ausgegebene Note-IDs oder gleichwertige Statusübergänge.

### 7. Batches abwickeln

Bei vielen kleinen Zahlungen können Empfänger mehrere akzeptierte Notes in einer einzigen Charge einlösen, um den Overhead zu reduzieren.

## Wenn Agents Notes brauchen

### Task-bedingte Zahlungen

Agent A möchte Agent B bezahlen, nur wenn B Ausgabe zurückgibt, die einem committed Hash entspricht oder eine akzeptierte Verifier-Quittung hat. Ein Token-Transfer kann diese Bedingung allein nicht ausdrücken. Eine Note kann es.

### Multi-Agent-Budgets

Ein Orchestrator gibt Sub-Agents begrenzte Ausgabefähigkeit. Das Budget sollte ablaufen, innerhalb eines Reserve-Limits bleiben und möglicherweise auf eine Service-Kategorie beschränkt sein. Eine Note ist ein natürliches Instrument dafür.

### Aufgeschobene Abwicklung

Ein Service Provider kann viele kleine Notes über den Tag verteilt akzeptieren und sie später einlösen. Dies vermeidet die sofortige Abwicklung jeder winzigen Interaktion.

### Interne Gutschrift

Ein vertrauenswürdiger Issuer kann innerhalb eines begrenzten Netzwerks spendbare Gutschrift erstellen. Notes können Ansprüche gegen eine Reserve oder Issuer-Richtlinie darstellen.

### Work-Marktplätze

Ein Käufer veröffentlicht eine Task. Ein Worker akzeptiert eine Note. Ein Verifier signiert die Quittung. Der Worker löst nach Akzeptanz ein. Dies ist ein sauberer Primitive als "Token jetzt senden und hoffen, dass die Arbeit ankommt."

## Wenn Tokens besser sind

### Langfristiges Eigentum

Governance-Rechte, Staking-Positionen, NFTs und LP-Anteile sollten normalerweise Tokens sein. Sie sind keine temporären Zahlungsansprüche.

### Einfache bedingungslose Übertragungen

Wenn das Ziel "10 Einheiten an diese Adresse senden" ist, verwende einen Token. Füge Note-Komplexität nicht hinzu, wo keine Bedingung benötigt wird.

### Flüssige Märkte

Tokens sind besser für Austausch, Market Making und allgemeine Liquidität. Notes sind kontextueller und können Issuer-, Ablauf- und Predicate-Risiken tragen.

### Öffentliche Assets

Wenn viele unabhängige Benutzer ein Asset unbegrenzt erkennen und halten sollen, sind Token-Semantiken angemessener.

## Wann Notes nicht verwenden

Verwende Notes nicht nur, weil sie fortgeschritten klingen. Vermeide sie, wenn:

- kein Ablauf benötigt wird;
- keine Akzeptanzbedingung benötigt wird;
- das Instrument frei als standardisiertes Asset handeln sollte;
- die Reserve für Benutzer nicht verständlich ist;
- die Implementierung nicht auditiert ist und echte Mittel beteiligt sind;
- die Task nicht objektiv oder durch einen vertrauenswürdigen Verifier verifiziert werden kann;
- Benutzer Notes mit Stablecoins oder garantierten Einzahlungen verwechseln würden.

Notes sind mächtig, weil sie spezifisch sind. Sie sind kein universeller Ersatz für Tokens.

## Beispiel: Agent-API-Budget

Stellen dir vor, ein Research Agent muss bezahlte Daten-APIs aufrufen. Der Betreiber möchte dem Agent keine unbegrenzte Wallet geben.

Der Betreiber erstellt eine Reserve und gibt drei Notes aus:

- 0,05 ERG Note für Wetterdaten, läuft in 24 Stunden ab.
- 0,10 ERG Note für Marktdaten, läuft in 12 Stunden ab.
- 0,20 ERG Note für Dokumentabruf, erfordert Quittungs-Hash.

Der Agent kann innerhalb dieser Grenzen ausgeben. Wenn er kompromittiert ist, kann er die ausgegebenen Notes nicht überschreiten. Wenn die Notes ablaufen, schließt sich das Budget. Wenn ein Service den Acceptance Predicate nicht erfüllen kann, kann er ihn nicht einlösen.

Das ist sicherer, als dem Agent ein rohes Wallet-Guthaben zu geben.

## Beispiel: Multi-Agent-Workflow

Ein Koordinator stellt drei Sub-Agents ein:

1. Extractor Agent: Dokumente analysieren.
2. Analyst Agent: Ergebnisse zusammenfassen.
3. Verifier Agent: Ausgaben validieren.

Der Koordinator gibt jedem Notes aus. Die Note des Extractors erfordert eine schema-valide Ausgabe. Die Note des Analysten erfordert einen Hash der akzeptierten Zusammenfassung. Die Note des Verifiers erfordert eine signierte Validierungsquittung. Jede Note kann später gegen die Reserve abgewickelt werden.

Der Zahlungsgraph spiegelt nun den Work-Graphen wider.

## Risikomodell

Eine Note ist nur so gut wie ihre Reserve, ihr Predicate und ihre Implementierung.

Frage dich:

- Ist die Reserve real und ausreichend?
- Wer kann Notes ausstellen?
- Können ausstehende Notes das Backing überschreiten?
- Wie wird doppelte Einlösung verhindert?
- Was passiert nach Ablauf?
- Wer verifiziert Arbeit?
- Ist das Skript auditiert?
- Können Benutzer das Risiko verstehen?

Wenn diese Antworten unklar sind, stelle nicht mit echten Mitteln bereit.

## FAQ

### Kannst du Ergo native Tokens für Agent-Zahlungen verwenden?

Ja. Bei einfachen bedingungslosen Zahlungen funktionieren native Tokens gut. Notes werden nützlich, wenn die Zahlung Ablauf, Reserve-Backing, aufgeschobene Abwicklung oder eine Work-Akzeptanzbedingung benötigt.

### Was ist ein Bearer-Instrument?

Ein Bearer-Instrument ist etwas, das der Inhaber zur Einlösung oder Wertübertragung vorlegen kann. In diesem Kontext ist eine Note ein programmierbarer Anspruch, der zwischen Agents übertragen und gemäß seinen Skript-Regeln eingelöst werden kann.

### Sind Notes dasselbe wie Stablecoins?

Nein. Ein Stablecoin ist normalerweise ein fungibles Token, das dazu dient, eine externe Rechnungseinheit nachzuverfolgen. Eine Note ist ein kontextueller Anspruch gegen eine Reserve oder Issuer-Richtlinie. Sie kann in ERG, einem Token oder einer anderen Einheit denominiert sein, aber sein definierendes Merkmal ist programmierbare Einlösung.

### Können Notes in DeFi gehandelt werden?

Möglicherweise, aber das ist nicht ihr primärer Zweck. Da Notes Issuer-, Ablauf- und Predicate-Risiken tragen können, sind sie komplexer als fungible Tokens. Jede DeFi-Integration sollte diese Risiken explizit machen.

### Sind Notes heute produktionsreif?

Das Konzept ist stark, und Ergos eUTXO-Modell unterstützt das Muster. Spezifische Note-Systeme wie ChainCash/Basis-Referentzverträge sollten als Prototyp oder Testnet-First behandelt werden, sofern sie nicht auditiert und eindeutig als produktionsreif gekennzeichnet sind.

## Artikel JSON-LD Entwurf

```json
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Notes vs Tokens: Programmierbare Bearer Instrumente für AI-Agent-Zahlungen",
  "description": "Vergleiche Ergo Notes und native Tokens: Wenn AI Agents programmierbare IOUs, Reserve-Backing, Ablauf, Acceptance Predicates und aufgeschobene Abwicklung benötigen.",
  "datePublished": "2026-02-26",
  "dateModified": "2026-05-08",
  "author": { "@type": "Organization", "name": "Ergo Developer Relations" },
  "publisher": { "@type": "Organization", "name": "Ergo Platform" },
  "mainEntityOfPage": "https://www.ergoblockchain.org/blog/notes-vs-tokens-agent-payments",
  "keywords": ["Ergo Notes", "native tokens", "AI agent payments", "programmable credit", "bearer instruments"]
}
```

## Quellennotizen

- Originalartikel: https://www.ergoblockchain.org/blog/notes-vs-tokens
- Accord Protocol Repo: https://github.com/accord-protocol/accord-protocol
- Ergo-Technologieseite: https://www.ergoblockchain.org/technology