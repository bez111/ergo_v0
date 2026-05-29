---
title: "블록체인에 탑재된 첫 번째 유료 AI 에이전트 출시"
slug: "/blog/shipping-paid-ai-on-chain"
seo_title: "블록체인에 탑재된 첫 번째 유료 AI 에이전트 출시 — Sage 빌드 로그"
meta_description: "Accord Protocol을 사용하여 Ergo 테스트넷에서 엔드-투-엔드로 구축된 ergoblockchain.org의 에이전트-이코노미 컨시어지인 Sage는 Accord Note를 통해 0.001 테스트넷 ERG를 받고 Ergo에서 결제됩니다. 아키텍처, 코드 범위, 마주친 세 가지 실제 버그, 그리고 verify-only 모드의 의미를 설명합니다."
excerpt: "Sage는 Accord Note를 통해 프리미엄 답변에 대해 0.001 테스트넷 ERG를 받는 Claude 컨시어지이며 Ergo에서 결제됩니다. 이제 사이트는 자신이 주장하는 에이전트-이코노미 테제를 증명하는 작동 데모입니다. 이것이 빌드 로그입니다."
author: "Ergo Developer Relations"
date_published: "2026-05-15"
date_modified: "2026-05-15"
tags: ["Agent Economy", "Accord Protocol", "Sage", "build log", "Ergo testnet", "AI agent payments", "Claude", "Fleet SDK"]
target_keywords: ["paid AI agent on blockchain", "Sage Ergo concierge", "Accord Protocol live demo", "AI agent on-chain payment", "agent economy working demo"]
---

# 블록체인에 탑재된 첫 번째 유료 AI 에이전트 출시

지난 6개월 동안 [지금 보고 있는 이 사이트](https://www.ergoblockchain.org)는 다음과 같은 테제를 주장해왔습니다: 자율적인 AI 에이전트는 프로그래머블 머니가 필요할 것이다 — 한정된 크레딧, 기계가 읽을 수 있는 조건, 작업 검증, 결제 영수증. [에이전트 이코노미 선언문](/blog/agent-economy-manifesto)이 그 근거를 제시했습니다. 아키텍처 페이지는 [네 가지 프리미티브](/build/agent-payments)를 설명했습니다. 블로그에서는 [에이전트가 Stripe를 사용할 수 없는 이유](/blog/agents-cant-use-stripe)를 설명했습니다.

그건 이론이었습니다. 이번 주부터 사이트 자체가 작동하는 데모입니다.

**Sage**는 모든 페이지의 오른쪽 하단에 있는 채팅 위젯입니다. Ergo, 에이전트 이코노미, 또는 Accord에 대해 실질적인 질문을 하세요. 무료 티어는 문서 색인을 통한 Claude Haiku 4.5입니다. `/code`를 묻거나 프리미엄 감지 게이트를 트리거하는 모든 것을 물으면, Sage는 HTTP 402를 반환하며 견적을 제시합니다: 0.001 테스트넷 ERG, Accord Note로 지불 가능하며 작업 해시에 고정됩니다. 이를 지불하면, Sage의 레일 어댑터가 Note를 체인에서 검증하고, Claude Sonnet 4.6이 답변을 스트리밍합니다. 모든 유료 턴은 `/r/sage/<box_id>`에서 공개 영수증이 되며, Schema.org `Action` 마크업이 포함되어 검색 엔진과 AI 엔진이 결제를 인덱싱할 수 있습니다.

이 글은 빌드 로그입니다. 무엇을 하는지, 무엇을 필요로 하는지, 몇 시간을 소모한 세 가지 버그, 그리고 정직하게 아직 완료되지 않은 것들입니다.

## Sage가 무엇인지 그리고 무엇을 하는지

Sage는 단일 테넌트 에이전트-이코노미 컨시어지입니다:

- **무료 티어** — Ergo 문서 및 블로그의 BM25 검색을 통한 Haiku 4.5. ~250단어 답변. 코드 발명을 거부하고, 가격 논의를 거부하고, 주제 외적인 것을 거부합니다. Anthropic 측에서 턴당 ~$0.001 비용; IP당 속도 제한.
- **프리미엄 티어** — 더 깊은 검색(RAG_K=10 vs 5), 2400 max_tokens vs 800, 그리고 명시적 추론을 제공하는 Sonnet 4.6. 402 챌린지로 게이트됨: Ergo 테스트넷의 유료 Note가 하나의 프리미엄 턴을 잠금 해제합니다.
- **영수증** — 모든 유료 턴은 Note 박스 id, 발행 tx, 값, 마감일, 그리고 AI 엔진과 크롤러가 읽을 수 있는 Schema.org `Action` 블록이 포함된 공개 URL을 생성합니다.

프리미엄 게이트는 사용자의 질문이 다음 중 하나와 일치할 때 트리거됩니다: 명시적 `/command` 접두사, 코드 형태의 의도, 깊은 연구 표현, 400자 이상의 길이, 또는 긴 스레드의 다중 턴 후속 조치. `src/lib/sage/payments/gate.ts`의 휴리스틱. 거짓 음성을 향해 편향됩니다 — 처음 100명의 사용자를 놀라게 하는 것보다 과소 청구하는 것이 낫습니다.

## 작업을 수행하는 네 가지 프리미티브

Sage는 사용자 지정 결제 SDK 위에 구축되지 않습니다. [Accord Protocol](https://github.com/accord-protocol/accord-protocol)이 정의하고 선언문이 주장하는 동일한 네 가지 프리미티브를 구성합니다:

| 프리미티브 | Sage에서 수행하는 역할 |
|-----------|----------------------|
| **Reserve** | 모든 Note를 백업하는 Ergo 테스트넷의 0.1-ERG 박스. 일회성 설정. 박스 id `4af1816c…` ([익스플로러](https://testnet.ergoplatform.com/transactions/195f769dc25d36244c271ff8bdc2be65b3f184a0440459fb67116f9b55d1f041)에서 검증 가능). |
| **Note** | Reserve에 대해 발행된 무기명 증서. 0.001 ERG를 운반하고, `+120 블록`에 만료되며, 질문의 작업 해시가 레지스터 R6에 있습니다. |
| **Acceptance Predicate** | Note에 내장된 ErgoScript 지출 조건: blake2b256(task_output) == R6. 판매자가 실제로 합의한 작업을 전달했다는 것에 대한 상환을 강제합니다. |
| **Tracker** | v0에서는 선택사항 — Sage의 무료 티어는 각 Note가 고유한 작업 해시에 바인딩되어 있기 때문에 필요하지 않습니다; 이중 상환은 체인 상태로 감지됩니다. |

함께 이들은 지불을 작업에 대한 작은 계약으로 바꿉니다. Note는 첨부된 영수증이 있는 전송이 아닙니다 — 그것 자체로 영수증이며, 상환 규칙이 내장되어 있습니다.

## 하나의 유료 쿼리의 엔드-투-엔드 라이프사이클

```text
1.  사용자가 입력합니다: "/code show me a Fleet SDK example"
2.  위젯 POST /api/sage/chat → 서버는 합리적 설명과 함께 402를 반환합니다
3.  위젯 POST /api/sage/quote → 서버가 SageQuote를 반환합니다:
      receiver_address  3Wz1Lmu…AY28w        (Sage 테스트넷 지갑)
      reserve_box_id    4af1816c…628a4d       (실제 온체인 Reserve)
      task_hash         9674cd…ced33          (정규화된 질문의 blake2b256)
      price             0.001 testnet ERG
      deadline          +120 blocks
      expires_at        T+10min                (서버 측 견적 신선도)
4.  PaymentPanel이 사본 버튼 + "how to pay" 안내와 함께 견적을 렌더링합니다
5.  구매자 지갑(Nautilus / 우리의 부트스트랩 CLI / 호환되는 모든 지갑)이
    R4=reserve, R5=expiry, R6=task_hash를 사용하여 Note를 발행합니다
6.  Note tx가 Ergo 테스트넷에서 확인됩니다 (~2분)
7.  구매자가 note_box_id를 패널에 붙여넣습니다 → 검증
8.  서버 POST /api/sage/verify-payment:
      • rails-ergo verifyPayment가 체인에서 Note를 가져옵니다
      • R4 reserve 바인딩, R5 만료, R6 작업 해시, 값 ≥ 가격을 확인합니다
      • 검증됨
9.  서버는 HMAC 결제 토큰 + 영수증 id + (선택적으로) 결제 tx를 반환합니다
10. 위젯은 paymentToken으로 채팅을 재개합니다
11. /api/sage/chat이 유효한 토큰을 확인 → Sonnet 4.6 + 더 깊은 RAG로 라우트합니다
12. 프리미엄 답변이 "PREMIUM · paid" 배지와 함께 SSE를 통해 스트리밍됩니다
13. "view receipt →" 링크가 /r/sage/<box_or_tx_id>를 가리킵니다
14. 영수증 페이지가 Schema.org Action 마크업과 함께 서버 렌더링됩니다
```

12개의 별개 단계. 2개의 온체인 트랜잭션 (Note 발행 + 선택적 결제). 1개의 LLM 호출. 1개의 공개 영수증 페이지로 세계의 모든 검색 및 AI 엔진에 의해 인덱싱 가능합니다.

## 코드 범위 — 우리가 실제로 구축한 것

전체 내용은 작은 파일 세트에 맞습니다. 복잡성의 대부분은 두 곳에 있습니다: 레일 어댑터 래핑(테스트넷 익스플로러의 API에 기묘한 점이 있기 때문)과 지갑 추상화(Vercel에 서명 키를 두지 않기 때문).

```
src/lib/sage/
├── retrieve.ts                 문서 인덱스에 대한 BM25 검색
├── rate-limit.ts               IP당 슬라이딩 윈도우
├── payments/
│   ├── agreement.ts            buildSageQuote() + canonicalizeQuestion()
│   ├── gate.ts                 decidePremium() 휴리스틱
│   ├── note-ops.ts             v1 익스플로러의 객체 형식 레지스터를
│   │                           정규화하는 ErgoNoteOps 래퍼
│   ├── token.ts                HMAC-SHA256 결제 토큰, 30분 TTL,
│   │                           질문 해시에 바인딩되어 있으므로 도난당한
│   │                           토큰이 다른 질문을 잠금 해제할 수 없습니다
│   ├── verify.ts               rails-ergo verifyPayment + settle
│   ├── wallet.ts               getSageAgent(): ErgoAgentPay 싱글톤,
│   │                           signer = 원격 URL 또는 로컬 시드 (또는
│   │                           구성되지 않은 경우 verify-only 모드)
│   └── types.ts                SageQuote, PaymentProof 등.
└── explorer/
    └── fetch-tx.ts             v1 기묘한 점을 가진 테스트넷 익스플로러 페처

src/app/api/sage/
├── chat/route.ts               SSE 스트리밍 엔드포인트, 프리미엄 인식
├── quote/route.ts              POST { question } → SageQuote | { premium: false }
└── verify-payment/route.ts     POST { quote, question, noteBoxId } → token

src/components/sage/
├── SageWidget.tsx              플로팅 채팅, 결제 흐름을 조율합니다
├── PaymentPanel.tsx            402 → 견적 → 입력 → 검증
└── MessageBody.tsx             최소한의 마크다운 렌더러

src/app/[locale]/r/sage/[id]/
└── page.tsx                    공개 영수증, Schema.org Action

scripts/sage-signer/
├── bootstrap.mjs               --reserve, --issue-note, --balance, --env-out
└── signer.mjs                  독립 실행형 HTTP 서명자, Fleet SDK Prover
```

총 Sage 코드: 채팅, 결제 라이브러리, 위젯, 영수증 페이지, 부트스트랩 CLI에 걸쳐 ~2500줄. 부트스트랩 CLI는 온체인 Reserve를 생성하는 데 사용되며, 자체 테스트 Note를 발행하는 데 사용합니다 — 또한 Ergo에서 서명자 배선을 작성하지 않고 유료 MCP 서비스를 배송하려는 다른 사람들에게 유용한 참조입니다.

## 마주친 세 가지 실제 문제

### 1. 테스트넷 익스플로러의 `/boxes/{id}` 엔드포인트는 미사용 박스에 대해 조용히 중단됩니다

Sage의 `verifyPayment`는 `ergo-agent-pay.checkNote(boxId)`를 호출합니다. 이는 v1 익스플로러를 `/boxes/{box_id}`에 호출합니다. 사용된 출력에 대해서는 작동합니다. 미사용 박스의 경우 — 실제로 중요한 경우, 신선하게 발행된 Note를 검증하고 아직 상환되지 않은 경우 — 404입니다. 동일한 박스는 `/boxes/unspent/byAddress/{addr}`에서 완벽하게 나타납니다.

영수증 페이지도 동일한 벽에 부딪혔습니다.

우리는 `fetch-tx.ts`의 폴백으로 이를 해결합니다: 독립 실행형 조회가 놓치면, 지갑의 미사용 목록을 스캔하고 일치 항목을 찾습니다. 못생겼습니다. 상류 수정을 제출하거나 v1 엔드포인트에서 완전히 이동할 때까지 올바른 움직임입니다.

### 2. v1 익스플로러는 레지스터를 16진수 문자열이 아닌 객체로 반환합니다

`ergo-agent-pay@0.3.0`은 `additionalRegisters`를 `Record<string, string>`으로 타입화하고 `regs.R5.slice(2)`를 호출하여 시그마 타입 접두사를 제거합니다. v1 테스트넷 익스플로러는 실제로 각 레지스터를 `{ serializedValue, sigmaType, renderedValue }`로 반환합니다. `.slice()` 호출이 `e.slice is not a function`으로 중단되고 주변 rails-ergo `verifyPayment`가 오류를 `NOTE_NOT_FOUND`로 매핑합니다.

우리는 `note-ops.ts`의 Proxy로 에이전트를 래핑합니다. 이는 `network.getBox`를 인터셉트하고 객체 모양의 레지스터를 해당 `serializedValue` 16진수 문자열로 평탄화합니다. 드롭인 `ErgoNoteOps` 대체. 가져오기 포함 ~30줄. `ergo-agent-pay@0.4`가 상류에서 두 가지 형태를 모두 받아들이면, 래퍼가 사라집니다.

### 3. 우리는 잘못된 `task_output`을 레일에 보내고 있었습니다

이것은 오후를 소모했습니다. rails-ergo의 `verifyPayment`는 `blake2b256(task_output)`을 계산하고 이를 Note의 R6과 비교합니다. Note는 `R6 = blake2b256(canonicalize(question))`으로 발행되었습니다. 따라서 `task_output`은 `canonicalize(question)` — 정규화된 질문의 원시 바이트와 같아야 하며, 그 해시는 R6과 일치합니다.

우리는 `hashQuestionForToken(question)` — 토큰 바인딩을 위해 다른 곳에서 사용되는 완전히 다른 HMAC 해시를 보내고 있었습니다. 결과: 모든 유료 턴에서 `TASK_HASH_MISMATCH`.

수정은 `verify-payment/route.ts`의 한 줄입니다. 교훈은 그 옆에 남겨둔 주석입니다: 두 계층이 모두 해싱을 포함할 때, 변수를 프로토콜에서 호출되는 것이 아니라 해시하는 것으로 명명합니다.

## "verify-only 모드"가 의미하는 것과 우리가 왜 이를 배송했는지

Sage는 현재 **verify-only 모드**에서 실행됩니다: `verifyPayment` 단계는 모든 유료 턴에서 실행됩니다 (읽기 전용 — 서명이 필요하지 않음). 하지만 두 번째 온체인 트랜잭션 (Note를 상환하고 0.001 ERG를 Sage의 지갑으로 이동하는 것)은 **연기됩니다**.

이것은 의도적이며, 버그가 아닙니다. 두 가지 이유:

1. **서명 키는 Vercel 밖에 있습니다.** 판매자 지갑의 개인 키를 서버리스 환경 변수에 두는 것은 나쁜 운영 위생입니다. `ANTHROPIC_API_KEY`의 손상이 지갑을 빼앗으면 안 됩니다. 따라서 상환 서명은 로컬 HTTP 서명자(`scripts/sage-signer/signer.mjs`)를 통해 발생하며, 운영자는 자신의 머신에서 이를 실행하고 `cloudflared tunnel`을 통해 노출합니다. Sage는 서명되지 않은 tx를 그것에 POST합니다; 서명자는 서명하기 전에 tx당 지출 상한선 + 수신자 화이트리스트에 대해 검증합니다.
2. **Note는 만료 시 자동 환불됩니다.** Sage가 `+120 블록` 마감일 전에 Note를 상환하지 않으면, Note의 지출 조건이 자금을 구매자의 reserve로 되돌립니다. 따라서 연기된 상환은 자금을 트래핑하지 않습니다 — 최악의 경우 무료 프리미엄 답변으로, 테스트넷 출시 단계에서는 괜찮습니다.

verify-only 모드의 영수증은 노란색 `verified · pending redemption` 배지를 표시합니다. 서명자가 배선되고 다음 유료 쿼리가 도착하면, 그 턴과 상환되지 않은 모든 과거 Note는 자동으로 녹색 `settled` 보기로 전환됩니다 — 페이지는 체인 상태가 변경될 때 자체적으로 업그레이드됩니다.

Twitter 발표는 "검증됨, 이번 실행에서 결제 보류 중"을 정직하게 말할 것입니다. 서명자 배선은 한 저녁 작업입니다; 우리는 과장하고 싶지 않습니다.

## 다음 단계

- **Settler 온라인.** 터널을 통해 서명자를 공개하고, Vercel에서 `SAGE_SIGNER_URL`을 설정하고, 다음 유료 Note가 보류 중에서 실제 온체인 상환 tx로 전환되는 것을 확인합니다.
- **Accord 준수.** `@accord-protocol/conformance --target https://www.ergoblockchain.org/api/sage/quote`를 실행하고, ed25519 키로 결과에 서명하고, 서명된 아티팩트를 발행하고, Sage의 [레지스트리 항목](https://github.com/accord-protocol/accord-protocol/blob/main/registry/providers/sage.json)을 준수 해시로 업데이트합니다. Sage는 공개 Accord 레지스트리의 첫 번째 L4 인증 공급자가 됩니다.
- **사이트에 표시된 에이전트 레지스트리.** `/ergo-watch/agents`가 Accord 레지스트리를 가져오고 모든 나열된 공급자를 해당 기능, 레일, 최근 영수증과 함께 렌더링합니다. Sage의 프로필 페이지는 많은 것 중 하나가 됩니다.
- **홈페이지의 라이브 에이전트 활동 스트립.** 레지스트리의 최신 유료 영수증, 네트워크 통계 아래에서 스크롤합니다. 사이트는 "우리는 에이전트 이코노미를 설명합니다"에서 "여기 지금 그것이 하고 있는 것입니다"로 이동합니다.
- **다중 테넌트 Sage.** 위젯을 독립형 `@accord/sage-widget` npm 패키지로 추출합니다. 모든 문서 사이트는 `<script src="…/sage.js" data-rag="…" data-receiver="9f…">`를 드롭인할 수 있으며 자신의 유료 컨시어지를 가질 수 있으며, 자신의 Ergo 지갑이 있습니다. 배포 승수 — 모든 임베드는 새 도메인의 새로운 Ergo 수신자 주소입니다.

## 시도해 보세요

[ergoblockchain.org을 엽니다](https://www.ergoblockchain.org). 오른쪽 하단에 주황색 **Sage에게 물어보세요** 버튼. 무료 질문은 무료로 남습니다. `/code`를 물어보거나 실질적인 것 — 결제 패널이 테스트넷 Note 발행을 통해 안내합니다. 테스트넷 지갑을 사용합니다 ([Nautilus](https://github.com/capt-nemo429/nautilus-wallet)가 표준이거나, 리포 클론에서 `node scripts/sage-signer/bootstrap.mjs --issue-note` 실행) 그리고 공개 [faucet](https://testnet.ergofaucet.org/)에서 소량의 테스트넷 ERG를 받습니다.

소스: [ergoblockchain.org 리포](https://github.com/ergoplatform)는 위에서 설명한 모든 것을 배송합니다. Sage가 사용하는 Accord 패턴은 [`examples/16-paid-mcp-ergo-testnet`](https://github.com/accord-protocol/accord-protocol/tree/main/examples/16-paid-mcp-ergo-testnet)의 정규 구매자/판매자 배선입니다.

선언문과 작동하는 에이전트는 이제 같은 것입니다. 그것이 전부입니다.

## FAQ

### 왜 테스트넷이고 메인넷이 아닙니까?

두 가지 이유가 있습니다. 첫째, 상환 계약은 감사 없이 Sage의 판매자 지갑을 지출 조건으로 사용합니다. 감사되지 않은 ErgoScript에 대한 메인넷 쓰기는 절대 발생하지 않아야 합니다 — `ergo-agent-pay`의 프로덕션 안전 게이트가 적극적으로 차단합니다. 둘째, 전체 Accord 스택은 v0.4에 있으며 준수 매니페스트는 여전히 `draft-pre-audit`에 있습니다. 메인넷은 로드맵에 있습니다; 오늘의 증거는 테스트넷입니다.

### 이것이 x402 또는 Stripe Agentic Commerce와 어떻게 다릅니까?

x402는 payment-required 프로토콜입니다 — "402 챌린지" 패턴은 동일합니다. 차이는 레일에 있습니다. x402는 일반적으로 카드
