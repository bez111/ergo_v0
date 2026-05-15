---
title: "Accord Protocol Q2 2026 更新：Ergo 代理经济堆栈中的成果"
slug: "/blog/accord-protocol-q2-2026-update"
seo_title: "Accord Protocol Q2 2026：AI 代理支付 SDK、MCP 服务器和 Ergo 测试网演示"
meta_description: "Accord Protocol Q2 2026 更新：AI 代理支付 SDK、Ergo Notes、MCP 服务器、LangChain/OpenAI/CrewAI/AutoGen 适配器、测试网演示和审计门控主网路线图。"
excerpt: "在首个 Ergo 代理支付 SDK 发布两个月后，Accord Protocol 现已推出测试网优先的协议层、完整 Note 生命周期、框架适配器、MCP 工具和十个可运行的示例。"
author: "Ergo Developer Relations"
date_published: "2026-05-06"
date_modified: "2026-05-08"
status: "测试网测试版。Accord、ChainCash/Basis 参考合约和代理支付 SDK 流程的主网使用仍由签署的审计清单控制。"
tags: ["Accord Protocol", "Ergo", "AI agent payments", "MCP", "x402", "developer update"]
target_keywords: ["Accord Protocol", "AI agent payments SDK", "Ergo agent payments", "MCP server payments", "x402 work verification", "autonomous agent settlement"]
---

# Accord Protocol Q2 2026 更新：Ergo 代理经济堆栈中的成果

**2026 年 5 月现状：** Ergo 的基础协议原语在主网上线。Accord Protocol、Ergo 代理支付 SDK、ChainCash/Basis 参考合约和公开演示是**测试网优先**的，除非明确标注。主网生产使用应保持阻止状态，直到签署的审计清单发布并验证。

两个月前，首个公开的 Ergo 代理支付 SDK 回答了一个狭隘的问题：自主软件代理能否在没有人工干预的情况下在 Ergo 上进行支付？答案是可以，但首个版本刻意保持精简。它可以发送价值、发行基础 Note、公开几个辅助函数并证明方向。

Q2 改变了项目的形状。工作已从单一 Ergo rail SDK 转变为 **Accord Protocol**：一个用于自主代理工作的开放协议层。Ergo rail 仍然是首个端到端参考实现，但框架现在更广泛。MCP 解释代理如何调用工具。A2A 风格的协议解释代理如何通信。x402 风格的流程解释付费 HTTP 请求如何进行。Accord 解释了承诺的内容、完成的验证方式以及结算的记录方式。

这种区分很重要。仅靠支付不足以解决整个问题。付费 API 调用只能告诉你资金移动了。代理商业还需要一个协议：谁请求了工作、期望什么输出、哪个验证者接受了它、哪个 rail 结算了它，以及工作部分完成、延迟或无效时会发生什么。Accord 是将支付转变为可验证工作合同的层。

## 核心要点总结

### Accord 现在是伞形协议

前 `ergo-agent-economy` 存储库已迁移到 Accord Protocol。该存储库现在描述了一个 rail 无关的协议层，带有 Ergo、Rosen、Base/EVM 和 x402 兼容的参考 rail。Ergo rail 仍然提供最完整的端到端实现，因为 eUTXO、ErgoScript、Notes、Reserves 和接受谓词自然适合该设计。

### 该堆栈是测试网优先且审计门控的

该项目是开源的且可运行，但未经生产认证。存储库状态是明确的：**测试网测试版**和**主网在签署审计清单前被阻止**。构建者应将当前代码视为原型、演示和测试网部署的参考实现。

### Note 生命周期现已端到端实现

Ergo rail 现在覆盖完整的 Reserve → Note → Tracker → Acceptance Predicate 路径：创建 Reserve、发行 Notes、检查 Notes、赎回 Notes、结算批次和部署 Tracker 状态。这是可编程记名工具的最小可行生命周期。

### 三个开发者界面可用

TypeScript/Node、Python 和 MCP 工具让构建者可以从不同的运行时接近堆栈。JavaScript 代理可以发行 Notes。Python 代理可以为 API 支付。MCP 兼容的主机可以向 AI 助手或开发者环境公开支付工具。

### 下一个瓶颈不是想象力，而是验证

下一阶段是审计、标准化和开发者证明：外部安全审查、清晰的状态清单、托管的测试网参考 dApp、更多框架集成和更好的一致性测试。

## 命名和迁移

重新品牌化创建了一个必要的区分，每个构建者在构建前都应理解。

| 层 | 规范名称 | 意义 |
|---|---|---|
| 伞形协议 | Accord Protocol | 协议、验证收据、结算收据和跨 rail 规范。 |
| 规范包 | `@accord-protocol/*` | 共享类型、一致性工具、Accord/MCP、Accord/402 和跨 rail 协议对象。 |
| Ergo 参考 rail | `ergo-agent-*` 包 | Ergo 特定的 SDK，用于 Notes、Reserves、Trackers、接受谓词和测试网演示。 |
| 参考合约 | ChainCash / Basis 原型 | 可编程 Notes 和信用流的开源参考实现；未经审计。 |

一个简单的经验法则：如果你阅读跨 rail 规范，从 `@accord-protocol/*` 开始。如果你今天正在构建 Ergo 测试网代理，从 `ergo-agent-*` rail 包开始。如果你部署任何涉及真实用户资金的内容，停在审计门处。

## 发布的内容

### 1. 完整的 Note 生命周期

核心里程碑是 Note 生命周期。Note 不仅仅是一个代币。它是一个可编程的记名工具：一个 UTxO 形状的针对 Reserve 的索赔，具有价值、到期、赎回规则和可选接受逻辑。

当前生命周期包括：

1. **创建 Reserve** — 部署抵押品并定义发行规则。
2. **发行 Note** — 创建针对 Reserve 的可编程索赔。
3. **检查 Note** — 解码寄存器、到期和接受参数。
4. **赎回 Note** — 当谓词满足时花费 Note。
5. **结算批次** — 一起赎回多个 Notes 以减少结算开销。
6. **更新 Tracker** — 在整个信用系统中防止重复赎回。

对于代理，这是"发送币"和"发行带有规则的可花费预算"之间的区别。父代理可以向子代理发行有界 Note。子代理可以向工具提供者支付。工具提供者稍后可以赎回一批接受的 Notes。Reserve 保持可审计的支持来源。

### 2. 协议、验证和结算收据

Accord 在 rail 之上添加了一个词汇表。

**Accord 协议**回答：请求了什么、由谁、多少金额、在什么验证规则下？

**验证收据**回答：验证者是否接受、拒绝或部分接受了工作？

**结算收据**回答：价值是否结算、在哪个 rail 上、使用哪个交易或支付证明？

这种分离是主要的战略升级。这意味着 Accord 可以与 x402 风格的 HTTP 支付、Ergo Notes、稳定币 rail 或未来结算系统交流，同时保留相同的工作协议结构。

## 构建者可运行的十个示例

存储库现在包括一个实用序列，而不是单个 hello-world：

1. 基本代理到代理支付。
2. Note 支付而不是原始 ERG。
3. 附加到任务输出的接受谓词。
4. 子代理的编排器预算。
5. 付费 API 服务器。
6. Python 代理为 API 调用付费。
7. 基于使用的服务的流式支付。
8. 用于多代理预算的财政部多签。
9. CrewAI 多代理结算示例。
10. 具有 Ergo 支付工具的 AutoGen 代理。

这些示例应保持测试网优先。这是一个特性，不是弱点。代理支付是新的表面区域：密钥托管、重放保护、退款、部分工作、验证者信任和失败结算都需要在建议主网流程之前谨慎处理。

## 框架适配器

代理构建者不想在发送原型之前成为区块链专家。SDK 方向因此是正确的：在构建者已经使用的框架内满足他们。

### LangChain

LangChain 示例将支付和 Note 操作公开为工具。链或代理可以请求付费资源、检查 Note 是否被接受，并在支付或验证完成后继续。

### OpenAI 函数调用

OpenAI 风格的函数接口将支付转变为可调用操作。模型不需要理解 UTxO 细节；它接收约束的工具定义，主机应用强制策略。

### CrewAI 和 AutoGen

多代理框架使支付问题更加明显。协调员分配工作给代理。代理调用 API、委派子任务并产生输出。没有内部预算工具，所有成本都会回到人工操作者。Notes 允许预算随任务移动。

### MCP

MCP 很重要，因为它是 AI 助手、开发者工具和外部功能之间的实用桥梁。MCP 支付服务器可以向兼容的主机公开"pay"、"issue Note"、"check Note"或"verify work"。这使支付成为一个工具，而不是自定义集成。

## x402 的作用

x402 很重要，因为它将 HTTP 402 Payment Required 作为真正的可编程支付模式带回。服务器可以响应支付说明，客户端可以附加支付负载，促进者可以验证和结算支付。这是付费 API、付费墙内容和机器到机器请求的清洁接口。

Accord 不应声称替代 x402。更强的立场是：

> **x402 验证支付。Accord 验证完成。Ergo 结算可编程价值。**

付费请求可以使用 x402 风格的挑战。工作协议可以记录在 Accord 中。结算可以通过 Ergo Notes、Rosen 资产、EVM 稳定币 rail 或另一个适配器进行。重点不在于哪个 rail 赢得每笔支付，而在于协议、验证和结算是否可组合。

## 你今天可以构建什么

使用当前堆栈进行测试网实验，例如：

- 经过验证的测试网支付后返回数据的付费 API 端点；
- 按调用次数收费的 MCP 工具；
- 向子代理发行带有支出限制的 Notes 的父代理；
- 买方仅在验证者接受输出后支付的工作市场；
- 具有小额计费支付的流式推理演示；
- 展示支付验证和工作验证区别的文档演示。

不要将未经审计的参考合约用于真实货币信用发行。不要持有用户资金。在审计清单存在之前，不要宣传生产就绪。

## 2026 年余下时间的路线图

### 1. 外部审计和签署清单

首要优先事项是安全审查。签署的审计清单应指定确切的脚本散列、编译的 ErgoTree、包版本、rail 适配器和部署网络。"已审计"必须表示特定工件，而不是广泛声明。

### 2. 标准发现

代理需要一个可预测的方式来发现支付条款。未来的标准可以公开 `.well-known/accord.json`、HTTP 头或 x402 兼容的扩展，描述价格、rail、接受的资产、验证规则和退款策略。

### 3. 托管测试网参考 dApp

公开演示比另一份宣言更重要。构建者应该能够打开页面、请求付费任务、看到 402 风格的挑战、用测试网钱包支付、观看 Note 赎回并检查收据。

### 4. 一致性测试

每个 rail 适配器应产生可比的协议、验证和结算收据。一致性测试是使 Accord 成为协议而不仅是示例集合的原因。

### 5. 更多框架集成

LangGraph、LlamaIndex、Vercel AI SDK、DSPy 和本地代理框架都应该有简单的支付钩子。最好的 SDK 是构建者可以添加而无需改变其应用程序架构的。

## 构建者的实现说明

在测试网上开始。使用小值。使用显式允许列表。将私钥保持在源代码之外。为每个付费操作添加重放保护。将验证视为支付的单独步骤。记录支付收据和工作收据。使退款和失败工作处理明确。

一个好的演示不隐藏失败模式。它展示它们。

## 常见问题

### Accord Protocol 是否生产就绪？

不是。当前的公开存储库是测试网优先的参考实现。它对原型、演示和开发者探索很有用。主网生产使用应保持阻止状态，直到签署的审计清单标识已审查脚本、包版本和 rail 适配器。

### Accord 和 Ergo 代理支付之间的区别是什么？

Accord 是协议层：条款、验证收据和结算收据。Ergo 代理支付是一个 rail 实现：Ergo 上的 Notes、Reserves、Trackers 和接受谓词。Accord 可以在 rail 中描述工作协议；Ergo 提供当今最完整的可编程结算原语集。

### 在 Accord 重新品牌化后为什么保留 `ergo-agent-*` 包？

因为它们仍然作为 Ergo 特定的入口点有用。规范伞形可能是 Accord，但想要创建 Ergo Notes 或运行测试网 Ergo 示例的构建者仍然需要 rail 特定的 SDK。关键是清楚地标签它们为参考 rail 包。

### Accord 与 x402 有何不同？

x402 关注 HTTP 上的支付：资源需要支付，客户端提交支付负载，验证/结算解锁访问。Accord 关注工作协议：承诺了什么、如何验证以及结算如何记录。它们可以很好地组合。

### 下一个演示应该展示什么？

返回 HTTP 402 的托管测试网 API、接受 Accord/402 支付流、验证任务完成、发出验证收据并通过 Ergo Note 结算将是最强的公开证明。

## 文章 JSON-LD 草稿

```json
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Accord Protocol Q2 2026 Update: What Shipped in Ergo's Agent Economy Stack",
  "description": "Accord Protocol Q2 2026 update: AI agent payment SDKs, Ergo Notes, MCP server, framework adapters, testnet demos and audit-gated mainnet roadmap.",
  "datePublished": "2026-05-06",
  "dateModified": "2026-05-08",
  "author": { "@type": "Organization", "name": "Ergo Developer Relations" },
  "publisher": { "@type": "Organization", "name": "Ergo Platform" },
  "mainEntityOfPage": "https://www.ergoblockchain.org/blog/accord-protocol-q2-2026-update",
  "keywords": ["Accord Protocol", "AI agent payments", "Ergo", "MCP", "x402", "testnet"]
}
```

## 源注释

- 当前博客文章：https://www.ergoblockchain.org/blog/ergo-agent-economy-q2-2026
- Accord Protocol 存储库：https://github.com/accord-protocol/accord-protocol
- x402 文档：https://docs.cdp.coinbase.com/x402/welcome
- 文章结构化数据指南：https://developers.google.com/search/docs/appearance/structured-data/article