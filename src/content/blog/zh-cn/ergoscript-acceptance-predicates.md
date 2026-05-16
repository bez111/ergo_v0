---
title: "ErgoScript 受理谓词：用于AI代理支付的链上工作验证"
slug: "/blog/ergoscript-acceptance-predicates"
seo_title: "ErgoScript 受理谓词：用于AI代理任务验证的链上工作验证"
meta_description: "了解如何在支付 UTxO 中使用 ErgoScript 受理谓词编码任务完成条件，使 AI 代理能够通过更少的链下信任假设来验证工作。"
excerpt: "受理谓词将支付转变为有条件可赎回的工作合约：接收方只有在满足约定的任务条件时才能赎回。"
author: "Ergo Developer Relations"
date_published: "2026-03-12"
date_modified: "2026-05-08"
status: "技术说明。示例谓词仅供教育之用；生产脚本需要审计和精确测试向量。"
tags: ["ErgoScript", "AI agent payments", "acceptance predicates", "eUTXO", "work verification"]
target_keywords: ["ErgoScript acceptance predicate", "AI agent task verification", "on-chain work verification", "programmable payment conditions", "Ergo smart contracts"]
---

# ErgoScript 受理谓词：用于AI代理支付的链上工作验证

**2026年5月状态：** 受理谓词是基于 ErgoScript 和 eUTXO 构建的设计模式。下面的示例仅供教育之用，在没有审查、测试向量和审计的情况下不应部署真实资金。

大多数支付系统回答一个问题：付款人是否发送了钱？

代理商业需要一个更难的问题：接收方是否完成了该支付所针对的工作？

如果 AI 代理为静态 API 响应付费，简单的支付收据可能就足够了。但如果代理为另一个代理付费以总结文档、解决任务、生成证明、生成代码、分类数据或返回签名结果，仅付款是不够的。付款人需要一种方法将赎回与受理绑定在一起。

**受理谓词**就是这种绑定。它是嵌入在支付工具本身中的一个条件。只有当谓词评估为真时，接收方才能赎回。

在 Ergo 术语中，谓词存在于 ErgoScript 支出条件中。它可以检查值、寄存器、上下文变量、签名、区块高度和其他交易数据。结果是一个支付行为更像自我执行工作合约，而不是盲目转账。

## TL;DR

### 支付不等于受理

交易证明价值移动。它不能证明工作已交付。受理谓词向支付添加验证规则。

### eUTXO 使谓词明确

在 Ergo 中，UTxO 有支出条件。要赎回 Note 或支付框，支出者必须创建满足该条件的交易。规则是可见的和确定性的。

### 最简单的谓词检查任务哈希

例如："仅在提交的输出在截止日期前哈希到预期摘要时赎回此 Note"。这对每项任务都不够，但它是最小的模式。

### 谓词减少信任；它们不会消除所有信任

如果谓词验证已知输出的哈希，信任很低。如果它依赖于第三方验证者，验证者就成为信任模型的一部分。谓词使假设明确；它不会使不可能的任务神奇地可验证。

## 问题：代理为结果付费，而不仅仅是访问权限

人类可以处理歧义。如果承包商做得很差，人类可以投诉、争议、重新协商或拒绝未来的付款。自主代理需要更清晰的规则。

考虑一个简单的代理管道：

1. 研究代理为数据代理的数据集付费。
2. 数据代理为清理代理的标准化记录付费。
3. 清理代理为模型代理的推理付费。
4. 研究代理为编辑代理的最终输出付费。

每一步都有不同的成功定义。"付款发生"还不够。管道需要受理规则：

- 数据集是否由预期提供商签署？
- 清理的数据是否与预期架构匹配？
- 模型输出哈希是否与承诺的结果匹配？
- 是否在截止日期前交付响应？
- 验证者是否签署了受理？

没有可编程的受理，每项规则都存在于应用程序代码之外。这会产生集中式信任点。

## 核心模式

最小的受理谓词有四个部分：

1. **任务承诺** — 期望什么输出或证明？
2. **截止日期** — Note 可以赎回多久？
3. **接收方或验证者授权** — 谁可以赎回或接受？
4. **赎回规则** — 在支出交易中什么必须为真？

简化的谓词可能说：

```scala
val submittedOutput = getVar[Coll[Byte]](0).get
val outputHashOk = blake2b256(submittedOutput) == TASK_HASH
val beforeDeadline = HEIGHT < EXPIRY_HEIGHT
val receiverOk = proveDlog(RECEIVER_PK)

sigmaProp(outputHashOk && beforeDeadline) && receiverOk
```

这意味着：如果交易包含任务输出（其 Blake2b-256 哈希与承诺的任务哈希匹配），接收方可以在过期前赎回。

在真实系统中，输出可能不是完整的任务结果。它可以是签名收据、证明、验证者声明、Merkle 根或外部存储工件的摘要。

## 为什么 Blake2b 一致性很重要

如果 ErgoScript 谓词使用 `blake2b256`，客户端代码必须计算相同的摘要。不要在客户端计算 SHA-256 并在合约中计算 Blake2b，除非文章明确说代码是伪代码。

JavaScript 助手应该看起来更像这样：

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

确切的字节很重要。在哈希前规范化字符串、编码和行尾。否则两个代理可能对同一人类可读输出的摘要不同意。

## 受理谓词 vs 托管

传统托管说：把资金放在中间，然后在有人决定工作完成后释放它们。

受理谓词说：把释放规则放在支出条件中。规则可以是客观的、部分客观的或基于验证者的。

| 模型 | 谁决定？ | 优势 | 劣势 |
|---|---|---|---|
| 手动托管 | 人工仲裁员 | 灵活 | 缓慢、集中式、昂贵 |
| API 端计费 | 服务器 | 简单 | 服务器受信任 |
| 基于预言机的释放 | 外部预言机 | 适用于外部事实 | 预言机信任和延迟 |
| HTLC | 哈希前像 | 简单可靠 | 有限的条件表现力 |
| Ergo 受理谓词 | ErgoScript 规则 | 可编程和明确 | 只能验证脚本可以观察到的内容或验证者签署的内容 |

正确的设计取决于任务。哈希谓词适用于承诺的输出。验证者签名适用于主观质量。零知识凭证可能适用于隐私保护的受理。谓词使信任模型可见。

## 谓词可以验证什么

受理谓词可以很好地用于：

- 精确输出哈希；
- 签名验证者收据；
- 截止日期检查；
- 预算限制；
- 接收方授权；
- 代币或 Note 属性；
- Reserve 引用；
- Tracker 更新；
- 简单数据承诺；
- 通过交易上下文传递的证明。

## 谓词无法单独验证的内容

谓词无法神奇地检查任意链下现实。除非质量标准已编码或验证者签署了收据，否则它无法知道生成的论文是否"好"。除非该有用性被简化为可检查的条件，否则它无法知道 API 响应是否有用。

这不是缺陷。这是一种规律：如果您无法定义受理，就无法安全地自动化支付。

## 寄存器布局示例

Note 风格的支付可以在寄存器中编码任务数据：

| 寄存器 | 含义 |
|---|---|
| R4 | Reserve 框 ID 或协议 ID |
| R5 | 过期块高度 |
| R6 | 任务哈希或任务承诺 |
| R7 | 验证者公钥、策略 ID 或服务元数据 |

赎回交易可以提供上下文变量：

| 上下文变量 | 含义 |
|---|---|
| Var 0 | 提交的输出或收据字节 |
| Var 1 | 可选验证者签名 |
| Var 2 | 可选元数据或 Merkle 证明 |

保持布局文档化。没有人可以解码的谓词不是可用的协议。

## 基于验证者的谓词

某些任务需要主观受理。在这种情况下，谓词可以要求验证者签名。

```scala
val receipt = getVar[Coll[Byte]](0).get
val receiptHashOk = blake2b256(receipt) == RECEIPT_HASH
val verifierOk = proveDlog(VERIFIER_PK)
val beforeDeadline = HEIGHT < EXPIRY_HEIGHT

sigmaProp(receiptHashOk && beforeDeadline) && verifierOk
```

这不会消除验证者信任。它限制了范围。验证者的角色是明确的，收据可以由应用程序策略存档、审计或质疑。

## 为什么这对 Accord 很重要

Accord 描述工作协议和验证收据。ErgoScript 受理谓词是在结算轨道上强制这些收据的一种方式。

未来流可以看起来像这样：

1. Accord 协议定义任务、价格和验证者。
2. Ergo Note 编码支付价值、过期和谓词。
3. 工作人员完成任务。
4. 验证者发出验证收据。
5. 如果谓词接受收据，工作人员赎回 Note。
6. 结算收据记录赎回交易。

这是一个完整的工作支付循环：协议、验证、结算。

## 威胁模型

### 重放攻击

工作人员为多个支付重复使用相同的收据。缓解：在签名/可验证的收据中包含 callId、协议 ID 或 Note ID。

### 延迟赎回

工作人员在截止日期后赎回。缓解：在谓词中包含 `HEIGHT < expiry`。

### 错误的任务输出

工作人员提交另一个任务的输出。缓解：在承诺中包含任务哈希、协议 ID 和付款人/接收人数据。

### 验证者被俘获

验证者接受不良工作。缓解：使用声誉、多验证者阈值、质押、审计日志或尽可能使用客观谓词。

### 编码不匹配

代理哈希不同的字节表示。缓解：发布规范编码和测试向量。

### 合约错误

谓词有逻辑错误。缓解：testnet、正式审查、外部审计和签名清单。

## 最佳实践

- 发布谓词源代码和编译哈希。
- 使用规范编码。
- 包含测试向量。
- 保持谓词狭窄。
- 将支付收据与工作收据分离。
- 添加过期。
- 添加重放保护。
- 除非验证者明确，否则避免主观谓词。
- 不要使用真实资金部署未经审计的示例。

## 常见问题

### 什么是受理谓词？

受理谓词是一个可编程条件，支付工具必须满足该条件才能赎回。在 Ergo 代理支付上下文中，它可以将赎回绑定到任务输出、验证者收据、截止日期或在 ErgoScript 中编码的另一个条件。

### 这是否消除了对托管的需求？

它可以消除某些托管用例，尤其是当受理规则是客观时。如果工作需要主观判断，您仍可能需要验证者或争议流程。区别在于验证者的角色可以编码和审计。

### Ethereum 能实现相同的想法吗？

Ethereum 可以实现条件支付合约，但设计通常是应用程序级别，可能涉及托管合约、可升级性选择、预言机设计、燃气动态和账户模型风险。Ergo 的 eUTXO 模型使支付对象和支出规则明确。

### 受理谓词生产就绪吗？

底层 ErgoScript 功能是真实的，但任何特定谓词都必须进行审查。演示谓词不是生产合约。在主网使用前使用 testnet、发布测试向量并等待审计。

### 最简单有用的谓词是什么？

最简单有用的谓词检查任务哈希和截止日期：仅在提交的输出哈希到承诺摘要且在过期前赎回。它是有限的，但它演示了核心概念。

## 文章 JSON-LD 草稿

```json
{
  "@context": "https://schema.org",
  "@type": "TechArticle",
  "headline": "ErgoScript 受理谓词：用于AI代理支付的链上工作验证",
  "description": "了解如何在支付 UTxO 中使用 ErgoScript 受理谓词编码任务完成条件，使 AI 代理能够通过更少的链下信任假设来验证工作。",
  "datePublished": "2026-03-12",
  "dateModified": "2026-05-08",
  "author": { "@type": "Organization", "name": "Ergo Developer Relations" },
  "publisher": { "@type": "Organization", "name": "Ergo Platform" },
  "mainEntityOfPage": "https://www.ergoblockchain.org/blog/ergoscript-acceptance-predicates",
  "keywords": ["ErgoScript", "acceptance predicates", "AI agent payments", "eUTXO", "work verification"]
}
```

## 源注释

- 原始文章：https://www.ergoblockchain.org/blog/ergoscript-acceptance-predicates
- Accord Protocol 仓库：https://github.com/accord-protocol/accord-protocol
- Ergo 技术页面：https://www.ergoblockchain.org/technology