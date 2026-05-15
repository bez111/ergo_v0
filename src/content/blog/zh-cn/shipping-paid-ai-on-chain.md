---
title: "在区块链上发布第一个付费 AI 代理"
slug: "/blog/shipping-paid-ai-on-chain"
seo_title: "在区块链上发布第一个付费 AI 代理 — Sage 构建日志"
meta_description: 'Sage 是一个 Claude 礼宾服务，通过 Accord Note 收取 0.001 testnet ERG，在 Ergo testnet 上完全端到端构建。架构、代码表面、我们遇到的三个真实 bug，以及"仅验证"模式的含义。'
excerpt: "Sage 是一个 Claude 礼宾服务，通过 Accord Note 收取 0.001 testnet ERG，在 Ergo 上结算。该网站现在展示了它所倡导的代理经济论文的真实演示。这是构建日志。"
author: "Ergo Developer Relations"
date_published: "2026-05-15"
date_modified: "2026-05-15"
tags: ["Agent Economy", "Accord Protocol", "Sage", "build log", "Ergo testnet", "AI agent payments", "Claude", "Fleet SDK"]
target_keywords: ["paid AI agent on blockchain", "Sage Ergo concierge", "Accord Protocol live demo", "AI agent on-chain payment", "agent economy working demo"]
---

# 在区块链上发布第一个付费 AI 代理

在过去的六个月里，[你正在浏览的这个网站](https://www.ergoblockchain.org)一直在论证一个主题：自主 AI 代理将需要可编程资金——有界额度、机器可读条款、工作验证、结算收据。[代理经济宣言](/blog/agent-economy-manifesto)陈述了这个理由。架构页面阐明了[四个原始元素](/build/agent-payments)。博客解释了[为什么代理不能使用 Stripe](/blog/agents-cant-use-stripe)。

那是理论。截至本周，该网站本身就是一个工作演示。

**Sage** 是每个页面右下角的聊天小部件。问它任何有关 Ergo、代理经济或 Accord 的实质性问题。免费层是 Claude Haiku 4.5，在索引的文档语料库上运行。问 `/code` 或触发任何高级检测门的东西，Sage 会返回 HTTP 402 和报价：0.001 testnet ERG，可作为绑定到任务哈希的 Accord Note 支付。支付它。Sage 的 rail 适配器在链上验证 Note，然后 Claude Sonnet 4.6 流式传输答案。每个付费轮次都成为 `/r/sage/<box_id>` 上的公开收据，带有 Schema.org `Action` 标记，以便搜索引擎和 AI 引擎可以索引结算。

这篇文章是构建日志。它做什么、花费了什么、三个消耗几小时的 bug，以及诚实地说还没做什么。

## Sage 是什么以及它做什么

Sage 是一个单租户代理经济礼宾服务：

- **免费层** — Haiku 4.5 加 BM25 检索索引的 Ergo 文档和博客。约 250 字的答案。拒绝编造代码、拒绝价格讨论、拒绝离题。Anthropic 端成本约 $0.001 per turn；按 IP 速率限制。
- **高级层** — Sonnet 4.6，更深入的检索（RAG_K=10 vs 5）、2400 max_tokens vs 800，以及显式推理。由 402 挑战门控：Ergo testnet 上的付费 Note 解锁一个高级轮次。
- **收据** — 每个付费轮次产生一个公开 URL，包含 Note box id、发行交易、价值、期限，以及 AI 引擎和爬虫可以读取的 Schema.org `Action` 块。

高级门在用户的问题匹配以下之一时触发：显式 `/command` 前缀、类似代码的意图、深度研究措辞、长度超过 400 字符，或长线程中的多轮后续。启发式在 `src/lib/sage/payments/gate.ts` 中。我们偏向假阴性——宁可少收费也不要让前 100 个用户惊讶。

## 执行工作的四个原始元素

Sage 不是在自定义支付 SDK 上构建的。它组合了相同的四个原始元素，[Accord Protocol](https://github.com/accord-protocol/accord-protocol) 定义了这些元素，宣言论证了这些元素：

| 原始元素 | 在 Sage 中的作用 |
|---------|-----------------|
| **Reserve** | Ergo testnet 上的 0.1-ERG box，支持每个 Note。一次性设置。Box id `4af1816c…`（可在 [explorer](https://testnet.ergoplatform.com/transactions/195f769dc25d36244c271ff8bdc2be65b3f184a0440459fb67116f9b55d1f041) 上验证）。 |
| **Note** | 针对 Reserve 发行的记名工具。携带 0.001 ERG、在 `+120 blocks` 时过期，寄存器 R6 中有问题的任务哈希。 |
| **Acceptance Predicate** | 嵌入在 Note 中的 ErgoScript 支出条件：blake2b256(task_output) == R6。强制兑换承诺正确的工作。 |
| **Tracker** | 在 v0 中可选 — Sage 的免费层不需要，因为每个 Note 都绑定到唯一的任务哈希；双重兑换通过链状态检测。 |

这些共同将支付转变为工作的小型合约。Note 不是附带收据的转账——它*就是*收据，兑换规则内置其中。

## 一个付费查询的端到端生命周期

```text
1.  用户输入: "/code show me a Fleet SDK example"
2.  Widget POST /api/sage/chat → 服务器返回 402 带理由
3.  Widget POST /api/sage/quote → 服务器返回 SageQuote:
      receiver_address  3Wz1Lmu…AY28w        (Sage testnet 钱包)
      reserve_box_id    4af1816c…628a4d       (真实链上 Reserve)
      task_hash         9674cd…ced33          (规范化问题的 blake2b256)
      price             0.001 testnet ERG
      deadline          +120 blocks
      expires_at        T+10min                (服务器端报价新鲜度)
4.  PaymentPanel 渲染报价，含复制按钮 + "如何支付" 演练
5.  买家钱包（Nautilus / 我们的引导 CLI / 任何兼容钱包）
    发行 Note，R4=reserve, R5=expiry, R6=task_hash
6.  Note tx 在 Ergo testnet 上确认（~2 分钟）
7.  买家将 note_box_id 粘贴到面板 → 验证
8.  服务器 POST /api/sage/verify-payment:
      • rails-ergo verifyPayment 从链上获取 Note
      • 检查 R4 reserve 绑定、R5 expiry、R6 task hash、value ≥ price
      • 已验证
9.  服务器返回 HMAC 支付令牌 + 收据 id + （可选）结算 tx
10. Widget 使用 paymentToken 恢复聊天
11. /api/sage/chat 看到有效令牌 → 路由到 Sonnet 4.6 + 更深入 RAG
12. 高级答案通过 SSE 流式传输，带"PREMIUM · paid"徽章
13. "view receipt →" 链接指向 /r/sage/<box_or_tx_id>
14. 收据页面服务器渲染，含 Schema.org Action 标记
```

十二个离散步骤。两个链上交易（Note 发行 + 可选结算）。一个 LLM 调用。一个公开收据页面，可被世界上每个搜索和 AI 引擎索引。

## 代码表面——我们实际构建的内容

整个事情适应一个小的文件集。大部分复杂性位于两个地方：rail 适配器包装（因为 testnet explorer 的 API 有怪癖）和钱包抽象（因为我们不把签名密钥放在 Vercel 上）。

```
src/lib/sage/
├── retrieve.ts                 BM25 检索索引文档
├── rate-limit.ts               每 IP 滑动窗口
├── payments/
│   ├── agreement.ts            buildSageQuote() + canonicalizeQuestion()
│   ├── gate.ts                 decidePremium() 启发式
│   ├── note-ops.ts             ErgoNoteOps 包装器，规范化
│   │                           v1 explorer 对象格式寄存器
│   ├── token.ts                HMAC-SHA256 支付令牌，30 分钟 TTL，
│   │                           绑定到问题哈希，所以被盗令牌
│   │                           不能解锁不同的问题
│   ├── verify.ts               rails-ergo verifyPayment + settle
│   ├── wallet.ts               getSageAgent(): ErgoAgentPay 单例，
│   │                           signer = 远程 URL 或本地种子（或
│   │                           仅验证模式，如果两者都未配置）
│   └── types.ts                SageQuote、PaymentProof 等
└── explorer/
    └── fetch-tx.ts             Testnet explorer 获取器，v1 怪癖

src/app/api/sage/
├── chat/route.ts               SSE 流式端点，高级感知
├── quote/route.ts              POST { question } → SageQuote | { premium: false }
└── verify-payment/route.ts     POST { quote, question, noteBoxId } → token

src/components/sage/
├── SageWidget.tsx              浮动聊天，编排支付流
├── PaymentPanel.tsx            402 → quote → input → verify
└── MessageBody.tsx             最小 markdown 渲染器

src/app/[locale]/r/sage/[id]/
└── page.tsx                    公开收据，Schema.org Action

scripts/sage-signer/
├── bootstrap.mjs               --reserve, --issue-note, --balance, --env-out
└── signer.mjs                  独立 HTTP 签名者，Fleet SDK Prover
```

总 Sage 代码：约 2500 行，跨越聊天、支付库、小部件、收据页面和引导 CLI。引导 CLI 是创建链上 Reserve 和发行自测 Note 的工具——它也是任何其他想在 Ergo 上发布的付费 MCP 服务的有用参考，无需从零开始编写签名者布线。

## 我们遇到的三个真实问题

### 1. Testnet explorer 的 `/boxes/{id}` 端点对未花费的 box 沉默失败

Sage 的 `verifyPayment` 调用 `ergo-agent-pay.checkNote(boxId)`。它在 `/boxes/{box_id}` 处击中 v1 explorer。对于已花费的输出，它有效。对于未花费的 box——真正重要的情况，因为我们验证一个刚发行的 Note，尚未被兑换——它返回 404。相同的 box 在 `/boxes/unspent/byAddress/{addr}` 中完美出现。

收据页面遇到了相同的问题。

我们在 `fetch-tx.ts` 中使用备用方案解决：如果独立查找失败，扫描钱包的未花费列表并找到匹配。这很丑陋。这是正确的举动，直到我们提交上游修复或完全离开 v1 端点。

### 2. V1 explorer 以对象形式返回寄存器，而不是十六进制字符串

`ergo-agent-pay@0.3.0` 类型化 `additionalRegisters` 为 `Record<string, string>` 并调用 `regs.R5.slice(2)` 去除 sigma 类型前缀。V1 testnet explorer 实际上以 `{ serializedValue, sigmaType, renderedValue }` 的形式返回每个寄存器。`.slice()` 调用死于 `e.slice is not a function`，周围的 rails-ergo `verifyPayment` 将错误映射到 `NOTE_NOT_FOUND`。

我们在 `note-ops.ts` 中用 Proxy 包装代理，它拦截 `network.getBox` 并将任何对象形状的寄存器展平为其 `serializedValue` 十六进制字符串。即插即用 `ErgoNoteOps` 替换。约 30 行，包括导入。一旦 `ergo-agent-pay@0.4` 在上游接受两种形状，包装器就消失了。

### 3. 我们向 rail 发送了错误的 `task_output`

这个花了一个下午。rails-ergo 的 `verifyPayment` 计算 `blake2b256(task_output)` 并将其与 Note 的 R6 比较。Note 以 `R6 = blake2b256(canonicalize(question))` 发行。所以 `task_output` 必须等于 `canonicalize(question)` ——其哈希与 R6 匹配的原始字节。

我们一直在发送 `hashQuestionForToken(question)` ——在协议其他地方用于令牌绑定的完全不同的 HMAC 哈希。结果：每个付费轮次上的 `TASK_HASH_MISMATCH`。

修复是 `verify-payment/route.ts` 中的一行。教训是我们在它旁边留下的注释：当两个层都涉及哈希时，按它们哈希的内容命名变量，而不是按协议中的调用方式命名。

## "仅验证"模式是什么意思以及为什么我们发布它

Sage 当前以**仅验证模式**运行：`verifyPayment` 步骤在每个付费轮次上运行（只读——不需要签名），但第二个链上交易（将 0.001 ERG 从 Note 赎回到 Sage 的钱包）是**延迟的**。

这是故意的，不是 bug。两个原因：

1. **签名密钥位于 Vercel 之外。** 将卖家钱包的私钥放在无服务器环境变量中是不好的操作实践。`ANTHROPIC_API_KEY` 的泄露不应该排干钱包。所以赎回签名通过本地 HTTP 签名者（`scripts/sage-signer/signer.mjs`）发生，操作者在自己的机器上运行并通过 `cloudflared tunnel` 公开。Sage 向它 POST 无符号 tx；签名者在验证每个 tx 支出上限 + 收款人白名单后验证并签名。
2. **Note 在过期时自动退款。** 如果 Sage 在其 `+120 blocks` 期限前未赎回 Note，Note 的支出条件会将资金返回给买家的 reserve。所以延迟赎回不会困住资金——最坏的情况是一个免费的高级答案，这在 testnet 启动阶段很好。

仅验证模式的收据显示黄色 `verified · pending redemption` 徽章。当签名者被连接和下一个付费查询到达时，该轮次和任何未赎回的过去 Note 都自动翻转到绿色 `settled` 视图——当链状态改变时，页面升级自己。

Twitter 宣布会坦诚地说"已验证，本运行中结算待处理"。签名者布线是一个晚上的任务；我们不想言过其实。

## 接下来是什么

- **Settler 上线。** 隧道 signer，设置 Vercel 上的 `SAGE_SIGNER_URL`，看下一个付费 Note 从待处理翻转到已结算，带有真实的链上赎回 tx。
- **Accord 符合性。** 运行 `@accord-protocol/conformance --target https://www.ergoblockchain.org/api/sage/quote`，用 ed25519 密钥签署结果，发布已签署工件，用符合性哈希更新 Sage 的[注册表条目](https://github.com/accord-protocol/accord-protocol/blob/main/registry/providers/sage.json)。Sage 成为公开 Accord 注册表中的第一个 L4 认证提供者。
- **网站上呈现的代理注册表。** `/ergo-watch/agents` 将获取 Accord 注册表并渲染每个列出的提供者及其功能、rail 和最近收据。Sage 的档案页面成为许多中的一个。
- **主页上的实时代理活动条。** 整个注册表中的最新付费收据，滚动在网络统计下方。网站从"我们描述代理经济"变为"以下是它现在在做什么"。
- **多租户 Sage。** 将小部件提取为独立的 `@accord/sage-widget` npm 包。任何文档网站都可以放入 `<script src="…/sage.js" data-rag="…" data-receiver="9f…">` 并拥有自己的付费礼宾服务，带有自己的 Ergo 钱包。分发乘数——每个嵌入都是新域上的新 Ergo 接收者地址。

## 尝试它

[打开 ergoblockchain.org](https://www.ergoblockchain.org)。右下方，橙色的**问 Sage** 按钮。免费问题保持免费。问 `/code` 或任何实质性的东西——支付面板会指导你完成发行 testnet Note 的过程。使用 testnet 钱包（[Nautilus](https://github.com/capt-nemo429/nautilus-wallet) 是标准，或从仓库克隆运行 `node scripts/sage-signer/bootstrap.mjs --issue-note`）和 `0.001` testnet ERG（[faucet](https://testnet.ergoplatform.com/faucet) 每个请求给出 ~1 ERG）。

源：[ergoblockchain.org 仓库](https://github.com/ergoplatform)发布上面描述的一切。Sage 使用的 Accord 模式是 [`examples/16-paid-mcp-ergo-testnet`](https://github.com/accord-protocol/accord-protocol/tree/main/examples/16-paid-mcp-ergo-testnet) 的规范买家/卖家布线。

宣言和工作代理现在是同一件事。那就是全部要点。

## 常见问题

### 为什么是 testnet 而不是 mainnet？

两个原因。首先，赎回合约使用 Sage 的卖家钱包作为支出条件，没有审计。Mainnet 针对未审计的 ErgoScript 的写入应该永远不会发生——`ergo-agent-pay` 中的整个生产安全门都会主动阻止它们。其次，整个 Accord 堆栈位于 v0.4，符合性清单仍处于 `draft-pre-audit`。Mainnet 在路线图上；今天的证据是 testnet。

### 这与 x402 或 Stripe Agentic Commerce 有什么不同？

x402 是支付必需的协议——"402 挑战"模式是相同的。区别在于 rail。x402 通常包裹卡 / Stripe 支付并将链视为报告层。Accord 将工作接受规则放入支出条件本身：除非卖家实际交付了哈希到协议任务哈希的工作，否则 Note 无法赎回。Stripe Agentic Commerce 是买方端镜像——代理持有卡。对人类授权的购买很有用。代理对代理结算不同层。

### 没有签名者可以工作吗？

是的。这是上面描述的仅验证模式。高级答案流在每个成功验证上；只有第二个链上交易（Sage 的赎回）延迟。收据显示"结算待处理"，直到签名者上线。

### 我可以运行自己的 Sage 吗？

很快，正确——那是"接下来是什么"部分中的多租户工作。今天，你可以克隆仓库，通过 `scripts/sage-signer/bootstrap.mjs` 配置自己的钱包，并从自己的部署运行 Sage 实例。文档在 [`docs/sage-provisioning.md`](https://github.com/ergoplatform)。

### Anthropic API 成本去哪里了？

Anthropic API 密钥在 Vercel 环境中。我们为免费层流量付费。高级轮次通过 Note 恢复 LLM 成本（0.001 ERG ≈ $0.0007，如果你将 testnet"费率"想象为真实）。Mainnet 定价的经济学是开放的——v0 发布是一个证明点，而不是边际模型。