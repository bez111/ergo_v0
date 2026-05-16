---
title: "Notes vs Tokens：AI Agent支付的可编程承载工具"
slug: "/blog/notes-vs-tokens"
seo_title: "Notes vs Tokens：AI Agent支付的可编程承载工具"
meta_description: "比较 Ergo Notes 和原生代币：当 AI agents 需要可编程 IOU、Reserve 支撑、到期、接受谓词和延迟结算时。"
excerpt: "代币适合所有权。Notes 更适合自主 agent 工作流中有界、可过期、有条件可赎回的信用。"
author: "Ergo Developer Relations"
date_published: "2026-02-26"
date_modified: "2026-05-08"
status: "概念解释。ChainCash/Basis Note 实现在审计之前仍为原型/测试网优先。"
tags: ["Ergo Notes", "native tokens", "AI agent payments", "bearer instruments", "programmable credit"]
target_keywords: ["Notes vs tokens", "Ergo Notes", "programmable bearer instruments", "AI agent credit", "Reserve backed Notes"]
---

# Notes vs Tokens：AI Agent支付的可编程承载工具

**2026年5月状态：** Ergo 原生代币是一个实时协议功能。本文讨论的 Note/Reserve/Tracker 系统是参考模式和原型，除非特定实现已审计并标记为生产就绪。

区块链擅长代币。代币可以代表所有权、成员资格、流动性、投票权、收藏品、稳定币声明或简单的价值单位。代币是熟悉的、可组合的，易于转移。

但 AI agents 不仅需要资产。他们需要预算。

一个父 agent 可能需要给子 agent 权限，在周五之前花费最多 0.5 ERG 进行数据调用。服务提供者可能接受一个声明，如果任务输出匹配某个谓词，可以在以后赎回。多 agent 工作流可能需要小的、可过期的、有条件可赎回的工具，在最终结算前流通。

这不是简单代币的用途。

这就是 **Note** 的用途。

## TL;DR

### 代币代表所有权

原生代币是一个可转移资产。它适合可互换余额、治理、NFT、LP 头寸和简单支付。

### Notes 代表有条件信用

Note 是一个可编程承载工具。它可以引用 Reserve、携带到期时间、编码价值并包含接受条件。

### Agents 在支付取决于工作时需要 Notes

如果支付应该只在任务被接受后赎回，或者子 agent 应该接收有界预算，Notes 比代币更具表达力。

### Notes 和代币共存

这不是竞争。真实的 agent 经济可以为所有权使用代币，为可编程支付流使用 Notes。

## 什么是代币？

Ergo 原生代币是 eUTXO 模型中的一级资产。它可以被铸造、转移并直接持有在 UTxO 中。它不需要 ERC-20 风格的包装合约。

当问题很简单时，代币效果很好：

> 谁拥有多少个这个资产的单位？

使用代币用于：

- 社区货币；
- 治理权；
- NFT；
- 流动性头寸；
- 协议份额；
- 简单无条件支付；
- 奖励积分；
- 稳定资产或包装资产；
- 不应该自动过期的资产。

代币转移是直接的。如果接收者获得了代币，所有权就改变了。这种简单性是优势。

## 什么是 Note？

Note 是建立在 eUTXO 上的高级工具。它是一个有规则的 UTxO 形状的声明。它可以指向 Reserve、指定价值、在区块高度过期并在赎回前需要接受谓词。

经济类比更接近支票、凭证、债券利息或承载 IOU，而不是现金。

Note 可以回答代币通常本身无法回答的问题：

- 哪个 Reserve 支撑这个声明？
- 它何时过期？
- 赎回前必须接受什么工作？
- 这个 Note 是否已经被赎回？
- 哪个验证者或谓词控制接受？
- 这个 Note 可以批量结算吗？

## 关键差异

| 属性 | 代币 | Note |
|---|---|---|
| 核心含义 | 资产所有权 | 对 Reserve 或发行者政策的声明 |
| 结算 | 即时转移 | 延迟赎回 |
| 到期 | 通常无 | 内置 |
| 接受条件 | 转移时不原生 | 核心功能 |
| 支撑 | 可选或外部 | Reserve 参考可以显式 |
| Agent 预算用途 | 有限 | 强 |
| 批量结算 | 不是主要模型 | 自然适配 |
| 治理用途 | 强 | 弱 |
| 长期流动性 | 强 | 通常是错误工具 |
| 任务条件支付 | 需要额外逻辑 | 原生设计目标 |

## Note 生命周期

有用的 Note 系统需要一个完整的生命周期。

### 1. 创建 Reserve

Reserve 是支撑来源。它持有抵押品或定义发行者规则。对方可以在接受 Notes 前检查 Reserve。

### 2. 发行 Note

发行者创建一个引用 Reserve 的 Note。Note 可以编码价值、到期、接收者约束、任务哈希或验证者政策。

### 3. 转移 Note

Note 可以在 agents 之间作为承载工具移动。接收者评估 Reserve 和条款是否可接受。

### 4. 执行工作

接收者或下游 agent 完成任务、调用 API、交付输出或获得验证者收据。

### 5. 赎回 Note

Note 在满足其谓词的交易中被花费。Reserve 根据规则支付或更新状态。

### 6. 更新 Tracker

Tracker 防止重复赎回。它记录已花费的 Note ID 或等效的状态转移。

### 7. 批量结算

对于许多小支付，接收者可以在单笔交易中赎回多个已接受的 Notes，减少开销。

## 当 Agents 需要 Notes

### 任务条件支付

Agent A 想只在 B 返回与已提交哈希匹配或被接受的验证者收据接受的输出时才支付 Agent B。代币转移本身无法表达该条件。Note 可以。

### 多 Agent 预算

编排器给子 agents 有限的支出权力。预算应该过期，保留在 Reserve 限制内，可能限于服务类别。Note 是该工具的自然选择。

### 延迟结算

服务提供者可能在全天接受许多小 Notes 并稍后赎回。这避免了立即结算每个微小交互。

### 内部信用

受信任的发行者可能想在有界网络内创建可花费的信用。Notes 可以代表对 Reserve 或发行者政策的声明。

### 工作市场

买方发布任务。工作者接受 Note。验证者签署收据。工作者在接受后赎回。这是比"现在发送代币并希望工作到达"更清晰的原语。

## 当代币更好时

### 长期所有权

治理权、质押头寸、NFT 和 LP 份额通常应该是代币。它们不是临时支付声明。

### 简单无条件转移

如果目标是"向此地址发送 10 个单位"，使用代币。不要在不需要条件的地方添加 Note 复杂性。

### 流动市场

代币更适合交换、做市和一般流动性。Notes 更具上下文特定性，可能携带发行者、到期和谓词风险。

### 公共资产

如果许多不相关的用户应该无限期地识别和持有资产，代币语义更合适。

## 何时不使用 Notes

不要仅仅因为 Notes 听起来很高级就使用它们。在以下情况避免：

- 不需要到期；
- 不需要接受条件；
- 工具应该作为标准化资产自由交易；
- Reserve 对用户不可理解；
- 实现未审计且涉及真实资金；
- 任务无法客观验证或由受信任的验证者验证；
- 用户会将 Notes 与稳定币或有保证的存款混淆。

Notes 强大是因为它们具体。它们不是代币的通用替代品。

## 示例：agent API 预算

想象一个需要调用付费数据 API 的研究 agent。人类操作者不想给 agent 一个不受限制的钱包。

操作者创建 Reserve 并发行三个 Notes：

- 天气数据的 0.05 ERG Note，24 小时到期。
- 市场数据的 0.10 ERG Note，12 小时到期。
- 文档检索的 0.20 ERG Note，需要收据哈希。

Agent 可以在这些界限内花费。如果被破坏，它无法超过已发行的 Notes。如果 Notes 过期，预算关闭。如果服务无法满足接受谓词，它无法赎回。

这比给 agent 一个原始钱包余额更安全。

## 示例：多 agent 工作流

协调器雇用三个子 agents：

1. 提取 agent：解析文档。
2. 分析 agent：总结发现。
3. 验证 agent：验证输出。

协调器向每个发行 Notes。提取器的 Note 需要架构有效的输出。分析器的 Note 需要已接受摘要的哈希。验证器的 Note 需要签署的验证收据。每个 Note 可以稍后针对 Reserve 结算。

支付图现在反映了工作图。

## 风险模型

Note 只与其 Reserve、谓词和实现一样好。

问：

- Reserve 真实且充分吗？
- 谁可以发行 Notes？
- 未偿 Notes 可以超过支撑吗？
- 如何防止重复赎回？
- 到期后会发生什么？
- 谁验证工作？
- 脚本是否经过审计？
- 用户可以理解风险吗？

如果这些答案不清楚，不要用真实资金部署。

## FAQ

### 您可以为 agent 支付使用 Ergo 原生代币吗？

是的。对于简单的无条件支付，原生代币效果很好。当支付需要到期、Reserve 支撑、延迟结算或工作接受条件时，Notes 变得有用。

### 什么是承载工具？

承载工具是持有人可以出示以进行赎回或价值转移的东西。在此上下文中，Note 是一个可编程声明，可以在 agents 之间转移并根据其脚本规则赎回。

### Notes 与稳定币相同吗？

不是。稳定币通常是旨在追踪外部记账单位的可互换代币。Note 是对 Reserve 或发行者政策的上下文特定声明。它可能以 ERG、代币或其他单位计价，但其定义特征是可编程赎回。

### Notes 可以在 DeFi 中交易吗？

可能，但那不是它们的主要目的。因为 Notes 可能携带到期、发行者和谓词风险，它们比可互换代币更复杂。任何 DeFi 集成都应明确说明这些风险。

### Notes 今天可以生产就绪吗？

该概念很强大，Ergo 的 eUTXO 模型支持该模式。特定的 Note 系统，如 ChainCash/Basis 参考合约，在审计并清楚标记为生产就绪前应视为原型或测试网优先。

## 文章 JSON-LD 草案

```json
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Notes vs Tokens：AI Agent支付的可编程承载工具",
  "description": "比较 Ergo Notes 和原生代币：当 AI agents 需要可编程 IOU、Reserve 支撑、到期、接受谓词和延迟结算时。",
  "datePublished": "2026-02-26",
  "dateModified": "2026-05-08",
  "author": { "@type": "Organization", "name": "Ergo Developer Relations" },
  "publisher": { "@type": "Organization", "name": "Ergo Platform" },
  "mainEntityOfPage": "https://www.ergoblockchain.org/blog/notes-vs-tokens",
  "keywords": ["Ergo Notes", "native tokens", "AI agent payments", "programmable credit", "bearer instruments"]
}
```

## 源注释

- 原始文章：https://www.ergoblockchain.org/blog/notes-vs-tokens
- Accord Protocol 仓库：https://github.com/accord-protocol/accord-protocol
- Ergo 技术页面：https://www.ergoblockchain.org/technology