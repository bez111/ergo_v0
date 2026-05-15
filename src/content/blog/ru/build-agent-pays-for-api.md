---
title: "Архитектурное руководство: создайте AI-агента, который платит за вызовы API на Ergo Testnet"
slug: "/blog/build-ai-agent-pays-api-ergo-testnet"
seo_title: "Архитектурное руководство: AI-агент платит за вызовы API на Ergo Testnet"
meta_description: "Архитектурное руководство для платного API-эндпоинта и цикла платежей AI-агента на Ergo testnet: HTTP 402 challenge, проверка платежа в цепи, защита от повторного использования и контрольный список безопасности."
excerpt: "Архитектурное руководство для платного API-эндпоинта, который AI-агент может вызвать только после создания проверяемого квитанции платежа Ergo. Включает примечания по подписанию в mock-режиме и testnet-режиме."
author: "Ergo Developer Relations"
date_published: "2026-03-26"
date_modified: "2026-05-08"
status: "Архитектурное руководство. Mock-режим полностью выполнен end-to-end (402 challenge, клиент агента и Express сервер работают). Testnet-режим требует кошелька (Nautilus или sigma-rust) и реального поиска в explorer/API в verifyErgoPayment(). Это не руководство по хранению средств на mainnet и не производственный чертёж безопасности — не развёртывайте неаудированный код или примеры потоков хранения с реальными средствами."
tags: ["Ergo", "AI agent payments", "API monetization", "x402", "developer tutorial", "testnet"]
target_keywords: ["build AI agent payments", "paid API with Ergo", "AI agent pays API calls", "HTTP 402 payments", "Ergo testnet tutorial"]
---

# Архитектурное руководство: создайте AI-агента, который платит за вызовы API на Ergo Testnet

**Статус на май 2026:** это **архитектурное руководство**, а не готовый к копированию производственный скрипт. Оно поставляется в двух режимах:

- **Mock-режим** — `verifyErgoPayment()` возвращает заглушку квитанции, поэтому Express сервер, 402 challenge и клиент агента работают end-to-end без кошелька. Используйте это, чтобы понять форму потока.
- **Testnet-режим** — подключите `verifyErgoPayment()` к реальному поиску в explorer/API и подпишите транзакцию через Nautilus или sigma-rust. Руководство проходит по изменениям.

Это не руководство по хранению средств на mainnet, не производственный чертёж безопасности и не рекомендация развёртывать неаудированные контракты с реальными средствами.

Платный вызов API звучит просто. Агент запрашивает данные, сервер берёт небольшую плату, агент платит, и сервер возвращает результат.

На практике большинство API по-прежнему выставляют счёт оператору-человеку. Разработчик создаёт аккаунт, добавляет кредитную карту, получает API-ключ и платит счёт. Это работает для SaaS. Это плохо работает для автономных агентов, которые запускаются, вызывают инструменты, делегируют подзадачи и расчётываются с расходами на скорости машины.

Это руководство показывает минимальный testnet паттерн:

1. Сервер предоставляет платный эндпоинт.
2. Агент запрашивает эндпоинт.
3. Сервер возвращает машиночитаемое требование платежа.
4. Агент создаёт или отправляет платёж Ergo testnet.
5. Сервер проверяет платёж в цепи.
6. Сервер возвращает оплаченный результат.

Это похоже по духу на HTTP 402-стиль платёжные потоки, но мы будем держать реализацию простой и Ergo-специфичной.

## Что вы будете строить

Вы будете строить две небольшие части:

- **Платный Express API** с эндпоинтами `/price`, `/verify` и `/data`.
- **Testnet клиент агента**, который запрашивает платный ресурс, платит за него, отправляет квитанцию и получает результат.

Вы можете реализовать шаг платежа в двух режимах:

### Режим для начинающих: ручное подписание

Агент строит или запрашивает транзакцию платежа, вы подписываете её тестовым кошельком, и сервер проверяет отправленный ID транзакции. Это самый безопасный способ понять поток.

### Headless режим: внешний сигнер

Контролируемый сервис подписанта или модуль кошелька автоматически подписывает testnet транзакции под строгими ограничениями политики. Это ближе к тому, как будут работать реальные агенты, но это вводит риск управления ключами.

Эта статья сосредоточена на архитектуре и проверке. Точные имена SDK и API могут измениться по мере развития Accord и эталонного рельса Ergo, поэтому всегда проверяйте текущее хранилище перед копированием кода в проект.

## Предварительные условия

Вам нужно:

- Node.js 20 или позже.
- Базовый опыт TypeScript или JavaScript.
- Адрес Ergo testnet.
- Небольшое количество testnet ERG из крана.
- Эндпоинт Ergo testnet explorer/API.
- Политика платежа: цена, адрес получателя, истечение и правила повторного использования.

Опционально:

- Репозиторий Accord Protocol для примеров.
- Fleet SDK или Ergo SDK для создания транзакций.
- Testnet кошелек, такой как режим Nautilus testnet или другой совместимый подписант.

## Архитектура

Надёжный платный API не должен просто спрашивать "отправил ли этот кошелек мне деньги?" Он должен привязать платёж к конкретному запросу.

Самая простая привязка — это `callId`:

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

Без `callId` один платёж можно повторно использовать для множественных вызовов API. Без истечения старые требования платежа остаются действительными навечно. Без проверок получателя и суммы агент может отправить несвязанную транзакцию. Без политики подтверждения сервер может обслуживать оплаченные данные до того, как расчёт будет достаточно окончательным.

## Шаг 1: создайте проект

```bash
mkdir ergo-paid-api-demo
cd ergo-paid-api-demo
npm init -y
npm install express zod nanoid
npm install --save-dev typescript tsx @types/node @types/express
```

Создайте минимальный `tsconfig.json`:

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

## Шаг 2: определите требование платежа

Создайте `src/policy.ts`:

```ts
export const PAYMENT_POLICY = {
  network: "ergo-testnet",
  receiverAddress: process.env.ERGO_RECEIVER_ADDRESS || "PUT_TESTNET_ADDRESS_HERE",
  priceNanoErg: 1_000_000n, // 0.001 ERG for demo only
  expiryMs: 10 * 60 * 1000,
  minConfirmations: 1
};
```

В production никогда не жёстко кодируйте адреса или цены. Загружайте их из подписанного файла политики или сервиса конфигурации.

## Шаг 3: постройте платный API сервер

Создайте `src/server.ts`:

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

Это сознательно не проходит проверку, пока вы не подключите реальный поиск Ergo testnet. Это лучше, чем молча претворяться, что платёж был проверен.

## Шаг 4: реализуйте реальную проверку

Верификатор production-grade должен проверить транзакцию. Для руководства вы можете использовать API explorer testnet. Основная логика:

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

Метод commitment — это выбор дизайна. Для простой демо вы можете кодировать `callId` в согласованный регистр или объект квитанции. Для более серьёзного потока Note сама Note должна кодировать данные, специфичные для задачи, и правила искупления.

## Шаг 5: напишите клиент агента

Создайте `src/agent.ts`:

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

Главное улучшение руководства — честность: пока подписание и проверка не реализованы, пример не должен претендовать на полное end-to-end. Полная демо должна создать транзакцию, отправить её, проверить и разблокировать эндпоинт.

## Шаг 6: сопоставьте это с HTTP 402 и x402-стиль потоками

Демо использует `/price` для ясности, но web-нативная версия — это прямой ответ 402:

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

Будущая версия Accord/402 может включать:

- ID соглашения;
- рельсовый адаптер;
- актив;
- цену;
- верификатор;
- политику возврата;
- предикат принятия;
- формат квитанции расчёта.

Платёж должен разблокировать доступ только после успешной проверки.

## Контрольный список безопасности

Перед тем как взять этот паттерн за пределы localhost, обработайте следующее.

### Защита от повторного использования

ID транзакции не должен разблокировать более одного вызова, если это поведение не является явным. Храните используемые txIds и callIds.

### Истечение

Требования платежа должны истекать. Иначе старая цитата может быть использована после изменения цены, политики или получателя.

### Политика подтверждения

Доступ с нулевым подтверждением рискован. Решите, сколько подтверждений вам нужно на основе значения, задержки и толерантности к риску.

### Хранение ключей

Не помещайте приватные ключи в подсказки агентов, исходный код или переменные, доступные браузеру. Используйте кошелек, подписант с аппаратной поддержкой, KMS, локальный агент политики или выделенный сервис подписания.

### Ограничения расходов

Автономный агент должен иметь дневные, почасовые и поставщик-специфичные ограничения расходов. Ошибка не должна осушить кошелёк.

### Возвраты и неудачная работа

Если API не удаётся после платежа, определите, что происходит. Повтор? Возврат? Note кредита? Ручная поддержка? Агенты нуждаются в детерминистичных политиках.

### Журналы проверки

Логируйте требование платежа, ID транзакции, результат проверки и ответ. Будущая квитанция Accord должна сделать это переносимым.

## Устранение неполадок

### "Сервер говорит, что платёж не найден"

Проверьте, что транзакция находится на testnet, а не на mainnet. Затем подтвердите, что explorer/API может её видеть и что ваш верификатор проверяет правильную сеть.

### "TX заплатил правому адресу, но всё ещё не прошёл"

Commitment callId может быть отсутствующим или закодированным иначе, чем ожидает верификатор. Платёж должен быть привязан к конкретному запросу.

### "Агент платил дважды"

Добавьте идемпотентность. Агент должен переиспользовать существующий неполный платёж для того же callId вместо создания второго после истечения времени ожидания.

### "Платёж подтвердился после истечения запроса"

Решите, возвращаются ли опоздавшие платежи, отклоняются ли или зачисляются в кредит. Не оставляйте опоздавшие платежи неясными.

### "Могу ли я пропустить проверку в цепи?"

Для toy-демо, да. Для реальных платёжных потоков, нет. Вся суть в том, что сервер может независимо проверить платёж или расчёт, а не полагаться на клиента.

## Где Notes улучшают этот дизайн

Сырой ERG платёж полезен для hello-world демо. Notes становятся полезными, когда агент нуждается в программируемом бюджете.

Родительский агент может выпустить Note подагенту с:

- максимальной стоимостью;
- истечением;
- разрешённой категорией сервиса;
- хешем задачи;
- предикатом искупления;
- ссылкой Reserve.

Платный API может принять Note, если Note действителен и искупляем в соответствии с политикой API. Это сдвигает модель от "агент тратит монеты" к "агент тратит ограниченный, проверяемый, программируемый кредит."

## Часто задаваемые вопросы

### Может ли AI-агент действительно платить за вызов API на Ergo?

Да на testnet, используя кошелек или подписант, контролируемый разработчиком. Агент может запросить условия платежа, отправить транзакцию и предоставить ID транзакции или квитанцию для проверки. Производственный вызов — не сам платёж; это управление ключами, политика расходов, защита от повторного использования, возвраты и готовность к аудиту.

### Это то же самое, что x402?

Это похоже на пользовательский поток, но не идентично. x402 стандартизирует HTTP-вызовы платежа и проверку платежа. Эта демо показывает Ergo-специфичный паттерн. Будущий поток Accord/402 может сочетать открытие в стиле x402 с квитанциями работы Accord и расчётом Ergo.

### Нужны ли мне Notes для платного API?

Нет. Простой testnet API может использовать сырые ERG платежи. Notes становятся ценными, когда вам нужны истекающие бюджеты, условное искупление, пакетный расчёт или кредит подагента.

### Могу ли я запустить это на mainnet?

Только после замены учебного кода на проверенные контракты, реальную проверку, безопасное хранение, чистые раскрытия пользователям и консервативные ограничения. Текущие эталонные SDK и контракты следует рассматривать как testnet-first.

### Какая минимальная жизнеспособная производственная архитектура?

Реальное развёртывание нуждается в внешнем подписанте или двигателе политики кошелька, постоянном хранилище, проверке транзакций, идемпотентности, защите от повторного использования, логировании, обработке возврата, мониторинге и документированном обзоре безопасности.

## Черновик JSON-LD статьи

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

## Примечания источников

- Оригинальная статья: https://www.ergoblockchain.org/blog/build-agent-pays-for-api
- Репозиторий Accord Protocol: https://github.com/accord-protocol/accord-protocol
- Документация x402: https://docs.cdp.coinbase.com/x402/welcome
- Документация Fleet SDK: https://fleet-sdk.github.io/docs