---
title: "아키텍처 튜토리얼: Ergo 테스트넷에서 API 호출 비용을 지불하는 AI 에이전트 구축"
slug: "/blog/build-ai-agent-pays-api-ergo-testnet"
seo_title: "아키텍처 튜토리얼: Ergo 테스트넷에서 API 호출 비용을 지불하는 AI 에이전트"
meta_description: "Ergo 테스트넷에서 유료 API 및 AI 에이전트 지불 루프에 대한 아키텍처 튜토리얼: HTTP 402 챌린지, 온체인 결제 검증, 재생 공격 방지 및 보안 체크리스트."
excerpt: "AI 에이전트가 검증 가능한 Ergo 결제 영수증을 생성한 후에만 호출할 수 있는 유료 API 엔드포인트의 아키텍처 튜토리얼입니다. 모의 모드 및 테스트넷 모드 서명 참고 사항 포함."
author: "Ergo Developer Relations"
date_published: "2026-03-26"
date_modified: "2026-05-08"
status: "아키텍처 튜토리얼. 모의 모드는 전체 엔드투엔드에서 완전히 실행 가능합니다(402 챌린지, 에이전트 클라이언트 및 Express 서버 모두 작동). 테스트넷 모드는 지갑(Nautilus 또는 sigma-rust)과 verifyErgoPayment()의 실제 익스플로러/API 조회가 필요합니다. 이것은 메인넷 자산 보관 가이드가 아니며 프로덕션 보안 청사진이 아닙니다 — 감사되지 않은 코드나 실제 자금을 사용한 예제 자산 보관 흐름을 배포하지 마세요."
tags: ["Ergo", "AI agent payments", "API monetization", "x402", "developer tutorial", "testnet"]
target_keywords: ["build AI agent payments", "paid API with Ergo", "AI agent pays API calls", "HTTP 402 payments", "Ergo testnet tutorial"]
---

# 아키텍처 튜토리얼: Ergo 테스트넷에서 API 호출 비용을 지불하는 AI 에이전트 구축

**2026년 5월 기준 상태:** 이것은 **아키텍처 튜토리얼**이며, 복사해서 붙여넣기 가능한 프로덕션 스크립트가 아닙니다. 두 가지 모드로 제공됩니다:

- **모의 모드** — `verifyErgoPayment()`가 스텁 처리된 영수증을 반환하므로 Express 서버, 402 챌린지 및 에이전트 클라이언트 모두 지갑 없이 엔드투엔드로 실행됩니다. 이를 사용하여 흐름의 모양을 배웁니다.
- **테스트넷 모드** — `verifyErgoPayment()`를 실제 익스플로러/API 조회에 연결하고 Nautilus 또는 sigma-rust를 통해 거래에 서명합니다. 튜토리얼에서는 무엇이 변경되는지 설명합니다.

이것은 메인넷 자산 보관 가이드가 아니며, 프로덕션 보안 청사진이 아니고, 감사되지 않은 계약을 실제 자금으로 배포하라는 권장사항도 아닙니다.

유료 API 호출은 간단해 보입니다. 에이전트가 데이터를 요청하고, 서버가 작은 수수료를 청구하고, 에이전트가 결제하고, 서버가 결과를 반환합니다.

실제로는 대부분의 API가 여전히 인간 운영자에게 청구합니다. 개발자가 계정을 생성하고, 신용 카드를 추가하고, API 키를 받고, 청구서를 지불합니다. 이것은 SaaS에 효과적입니다. 하지만 자동으로 시작되고, 도구를 호출하고, 하위 작업을 위임하고, 머신 속도로 비용을 정산하는 자율 에이전트에는 잘 작동하지 않습니다.

이 튜토리얼은 최소한의 테스트넷 패턴을 보여줍니다:

1. 서버가 유료 엔드포인트를 노출합니다.
2. 에이전트가 엔드포인트를 요청합니다.
3. 서버가 머신 읽기 가능한 결제 요구 사항을 반환합니다.
4. 에이전트가 Ergo 테스트넷 결제를 생성하거나 제출합니다.
5. 서버가 온체인 결제를 검증합니다.
6. 서버가 결제된 결과를 반환합니다.

이것은 정신적으로 HTTP 402 스타일의 결제 흐름과 유사하지만, 구현은 간단하고 Ergo 특화적으로 유지합니다.

## 구축할 내용

두 가지 작은 부분을 구축합니다:

- **유료 Express API** — `/price`, `/verify` 및 `/data` 엔드포인트 포함.
- **테스트넷 에이전트 클라이언트** — 유료 리소스를 요청하고, 비용을 지불하고, 영수증을 제출하고, 결과를 받습니다.

결제 단계를 두 가지 모드로 구현할 수 있습니다:

### 초급자 모드: 수동 서명

에이전트가 결제 거래를 구성하거나 요청하고, 테스트넷 지갑으로 서명한 후, 서버가 제출된 거래 ID를 검증합니다. 이것이 흐름을 이해하기에 가장 안전한 방법입니다.

### 헤드리스 모드: 외부 서명자

제어되는 서명자 서비스 또는 지갑 모듈이 엄격한 정책 제한 범위 내에서 테스트넷 거래에 자동으로 서명합니다. 이것은 실제 에이전트가 어떻게 작동할지에 더 가깝지만, 키 관리 위험이 발생합니다.

이 문서는 아키텍처와 검증에 중점을 둡니다. 정확한 SDK 이름과 API는 Accord 및 Ergo 참조 레일이 진화함에 따라 변할 수 있으므로, 항상 프로젝트에 코드를 복사하기 전에 현재 저장소를 확인하세요.

## 사전 요구 사항

다음이 필요합니다:

- Node.js 20 이상.
- 기본 TypeScript 또는 JavaScript 경험.
- Ergo 테스트넷 주소.
- 수도꼭지에서 가져온 적은 양의 테스트넷 ERG.
- Ergo 테스트넷 익스플로러/API 엔드포인트.
- 결제 정책: 가격, 수신자 주소, 만료 및 재생 공격 방지 규칙.

선택 사항:

- Accord Protocol 저장소(예제 포함).
- Fleet SDK 또는 거래 구성을 위한 Ergo SDK.
- Nautilus 테스트넷 모드 또는 기타 호환 서명자와 같은 테스트넷 지갑.

## 아키텍처

견고한 유료 API는 단순히 "이 지갑이 나에게 돈을 보냈는가?"라고 묻지 않아야 합니다. 특정 요청에 결제를 바인딩해야 합니다.

가장 간단한 바인딩은 `callId`입니다:

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

`callId` 없이는 단일 결제가 여러 API 호출에 대해 재생될 수 있습니다. 만료 없이는 오래된 결제 요구 사항이 영원히 유효합니다. 수신자 및 금액 확인 없이 에이전트는 무관한 거래를 제출할 수 있습니다. 확인 정책 없이는 서버가 정산이 충분히 최종적이기 전에 결제된 데이터를 제공할 수 있습니다.

## 1단계: 프로젝트 생성

```bash
mkdir ergo-paid-api-demo
cd ergo-paid-api-demo
npm init -y
npm install express zod nanoid
npm install --save-dev typescript tsx @types/node @types/express
```

최소 `tsconfig.json` 생성:

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

## 2단계: 결제 요구 사항 정의

`src/policy.ts` 생성:

```ts
export const PAYMENT_POLICY = {
  network: "ergo-testnet",
  receiverAddress: process.env.ERGO_RECEIVER_ADDRESS || "PUT_TESTNET_ADDRESS_HERE",
  priceNanoErg: 1_000_000n, // 0.001 ERG for demo only
  expiryMs: 10 * 60 * 1000,
  minConfirmations: 1
};
```

프로덕션에서는 주소나 가격을 절대 하드코딩하지 마세요. 서명된 정책 파일이나 구성 서비스에서 로드하세요.

## 3단계: 유료 API 서버 구축

`src/server.ts` 생성:

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

이것은 의도적으로 실제 Ergo 테스트넷 조회를 연결할 때까지 검증에 실패합니다. 이것은 결제가 검증되었다고 조용히 가장하는 것보다 낫습니다.

## 4단계: 실제 검증 구현

프로덕션 등급 검증자는 거래를 검사해야 합니다. 튜토리얼의 경우 테스트넷 익스플로러 API를 사용할 수 있습니다. 핵심 로직은:

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

커밋 메서드는 설계 선택입니다. 간단한 데모의 경우 합의된 레지스터 또는 영수증 객체에 `callId`를 인코딩할 수 있습니다. 더 진지한 Ergo Note 흐름의 경우 Note 자체가 작업 특정 데이터 및 상환 규칙을 인코딩해야 합니다.

## 5단계: 에이전트 클라이언트 작성

`src/agent.ts` 생성:

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

이 튜토리얼의 주요 개선 사항은 정직함입니다: 서명과 검증이 구현될 때까지 예제는 완전히 엔드투엔드라고 주장해서는 안 됩니다. 완전한 데모는 거래를 생성하고, 제출하고, 검증하고, 엔드포인트를 잠금 해제해야 합니다.

## 6단계: HTTP 402 및 x402 스타일 흐름에 매핑

데모는 명확성을 위해 `/price`를 사용하지만, 웹 네이티브 버전은 직접 402 응답입니다:

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

향후 Accord/402 버전은 다음을 포함할 수 있습니다:

- 동의 ID;
- 레일 어댑터;
- 자산;
- 가격;
- 검증자;
- 환불 정책;
- Acceptance Predicate;
- 정산 영수증 형식.

결제는 검증이 성공한 후에만 액세스 권한을 부여해야 합니다.

## 보안 체크리스트

이 패턴을 localhost 이상으로 가져가기 전에 다음을 처리하세요.

### 재생 공격 방지

거래 ID는 해당 동작이 명시적이 아닌 한 한 번의 호출 이상을 잠금 해제해야 합니다. 사용된 txID와 callID를 저장합니다.

### 만료

결제 요구 사항은 만료되어야 합니다. 그렇지 않으면 오래된 견적이 가격, 정책 또는 수신자가 변경된 후에 사용될 수 있습니다.

### 확인 정책

영 확인 액세스는 위험합니다. 값, 지연 시간 및 위험 허용도를 기반으로 필요한 확인 수를 결정합니다.

### 키 보관

개인 키를 에이전트 프롬프트, 소스 코드 또는 브라우저 노출 변수에 넣지 마세요. 지갑, 하드웨어 지원 서명자, KMS, 로컬 정책 에이전트 또는 전용 서명 서비스를 사용하세요.

### 지출 한도

자율 에이전트는 일일, 호출별 및 거래 상대방별 지출 한도를 가져야 합니다. 버그로 인해 지갑이 비워져서는 안 됩니다.

### 환불 및 작업 실패

결제 후 API가 실패하는 경우 어떤 일이 발생하는지 정의합니다. 다시 시도? 환불? 크레딧 Note? 수동 지원? 에이전트는 결정론적 정책이 필요합니다.

### 검증 로그

결제 요구 사항, 거래 ID, 검증 결과 및 응답을 기록합니다. 향후 Accord 영수증이 이를 휴대 가능하게 만들어야 합니다.

## 문제 해결

### "서버에서 결제를 찾을 수 없다고 말합니다"

거래가 메인넷이 아닌 테스트넷에 있는지 확인하세요. 그런 다음 익스플로러/API가 이를 볼 수 있는지, 검증자가 올바른 네트워크를 확인하고 있는지 확인합니다.

### "tx가 올바른 주소에 결제했지만 여전히 실패했습니다"

callId 커밋이 누락되었거나 검증자가 기대하는 것과 다르게 인코딩되었을 수 있습니다. 결제는 특정 요청에 바인딩되어야 합니다.

### "에이전트가 두 번 결제했습니다"

멱등성을 추가합니다. 에이전트는 타임아웃 후 두 번째 항목을 생성하는 대신 동일한 callId에 대한 기존 보류 중인 결제를 재사용해야 합니다.

### "결제가 요청 만료 후 확인되었습니다"

늦은 결제가 환불되었는지, 거부되었는지 또는 크레딧된 것인지 결정합니다. 늦은 결제를 모호하게 두지 마세요.

### "온체인 검증을 건너뛸 수 있습니까?"

장난감 데모의 경우 예. 실제 결제 흐름의 경우 아니요. 전체 요점은 서버가 클라이언트를 신뢰하는 대신 결제 또는 정산을 독립적으로 검증할 수 있다는 것입니다.

## Note가 이 설계를 어떻게 개선하는지

원본 ERG 결제는 hello-world 데모에 유용합니다. Note는 에이전트가 프로그래밍 가능한 예산이 필요할 때 유용하게 됩니다.

부모 에이전트는 다음을 사용하여 하위 에이전트에 Note를 발급할 수 있습니다:

- 최대 값;
- 만료;
- 허용된 서비스 카테고리;
- 작업 해시;
- 상환 predicate;
- Reserve 참조.

유료 API는 Note가 유효하고 API의 정책 하에서 상환 가능한 경우 Note를 수락할 수 있습니다. 이것은 모델을 "에이전트가 동전을 지출"에서 "에이전트가 바인딩되고, 감사 가능하고, 프로그래밍 가능한 크레딧을 지출"로 이동합니다.

## FAQ

### AI 에이전트가 정말로 Ergo에서 API 호출 비용을 지불할 수 있습니까?

개발자가 제어하는 지갑 또는 서명자를 사용하는 테스트넷에서는 예입니다. 에이전트는 결제 조건을 요청하고, 거래를 제출하고, 검증을 위해 거래 ID 또는 영수증을 제공할 수 있습니다. 프로덕션 문제는 결제 자체가 아니라 키 관리, 지출 정책, 재생 공격 방지, 환불 및 감사 준비입니다.

### 이것이 x402와 같습니까?

사용자 흐름에서는 유사하지만 동일하지는 않습니다. x402는 HTTP 결제 챌린지 및 결제 검증을 표준화합니다. 이 데모는 Ergo 특화 패턴을 보여줍니다. 향후 Accord/402 흐름은 x402 스타일 검색을 Accord 작업 영수증 및 Ergo 정산과 결합할 수 있습니다.

### 유료 API를 위해 Note가 필요합니까?

아니요. 간단한 테스트넷 API는 원본 ERG 결제를 사용할 수 있습니다. Note는 만료 예산, 조건부 상환, 배치 정산 또는 하위 에이전트 크레딧이 필요할 때 가치 있게 됩니다.

### 이것을 메인넷에서 실행할 수 있습니까?

감사된 계약, 실제 검증, 안전 보관, 명확한 사용자 공개 및 보수적인 제한으로 튜토리얼 코드를 교체한 후에만. 현재 참조 SDK 및 계약은 테스트넷 우선으로 처리되어야 합니다.

### 최소한의 실행 가능한 프로덕션 아키텍처는 무엇입니까?

실제 배포에는 외부 서명자 또는 지갑 정책 엔진, 지속형 저장소, 거래 검증, 멱등성, 재생 공격 방지, 로깅, 환불 처리, 모니터링 및 문서화된 보안 검토가 필요합니다.

## 문서 JSON