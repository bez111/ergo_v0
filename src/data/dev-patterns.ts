/**
 * Ergo Developer Patterns Library v1.0
 * 18 battle-tested patterns across 7 categories
 * Structured for SEO and developer experience
 */

export type PatternCategory = 
  | 'token-mechanics'
  | 'time-locks-access'
  | 'multisig-governance'
  | 'defi-primitives'
  | 'oracle-integration'
  | 'ergo-native'
  | 'privacy-sigma';

export type PatternDifficulty = 'beginner' | 'intermediate' | 'advanced';

export interface CodeExample {
  title: string;
  language: 'ergoscript' | 'scala' | 'typescript' | 'rust';
  code: string;
  explanation: string;
}

export interface PatternResource {
  type: 'doc' | 'github' | 'playground' | 'video' | 'blog';
  title: string;
  url: string;
}

export interface DevPattern {
  slug: string;
  title: string;
  shortDescription: string;
  seoTitle: string;
  seoDescription: string;
  keywords: string[];
  category: PatternCategory;
  difficulty: PatternDifficulty;
  timeToImplement: string;
  problem: string;
  solution: string;
  howItWorks: string[];
  codeExamples: CodeExample[];
  useCases: string[];
  relatedPatterns: string[];
  resources: PatternResource[];
  securityNotes?: string[];
  feeConsiderations?: string;
  implementations?: {
    project: string;
    description: string;
    url?: string;
  }[];
  publishDate: string;
  updatedDate?: string;
}

export const categoryLabels: Record<PatternCategory, string> = {
  'token-mechanics': 'Token Mechanics',
  'time-locks-access': 'Time Locks & Access Control',
  'multisig-governance': 'Multisig & Governance',
  'defi-primitives': 'DeFi Primitives',
  'oracle-integration': 'Oracle Integration',
  'ergo-native': 'Ergo-Native Features',
  'privacy-sigma': 'Privacy & Sigma Protocols'
};

export const categoryDescriptions: Record<PatternCategory, string> = {
  'token-mechanics': 'Create, manage, and control token supply on Ergo',
  'time-locks-access': 'Time-based locks and conditional spending patterns',
  'multisig-governance': 'Multi-party authorization and DAO structures',
  'defi-primitives': 'Building blocks for decentralized finance',
  'oracle-integration': 'Connect smart contracts to real-world data',
  'ergo-native': 'Patterns unique to Ergo: Babel fees, storage rent, eUTXO state machines',
  'privacy-sigma': 'Sigma Protocol patterns for optional privacy'
};

export const devPatterns: DevPattern[] = [
  // ============================================
  // 1. TOKEN MECHANICS
  // ============================================
  {
    slug: "ergo-fungible-token-minting-eip4",
    title: "Fungible Token Minting on Ergo (EIP-4)",
    shortDescription: "Create a standard fungible token in one transaction using EIP-4",
    
    seoTitle: "Fungible Token Minting on Ergo: EIP-4 Token Creation Guide",
    seoDescription: "Learn how to mint fungible tokens on Ergo blockchain using EIP-4 standard. Complete ErgoScript tutorial with Fleet SDK examples.",
    keywords: ["ergo token minting", "eip-4 token", "create token ergo", "fungible token ergo", "ergoscript token"],
    
    category: "token-mechanics",
    difficulty: "beginner",
    timeToImplement: "30 minutes",
    
    problem: "You need to create a fungible token for your dApp, community, or project without complex infrastructure.",
    
    solution: "Ergo's EIP-4 standard allows token creation in a single transaction. The first output box can mint new tokens with the token ID derived from the first input box ID, ensuring globally unique identifiers.",
    
    howItWorks: [
      "Create a transaction with at least one input box",
      "The first output box declares the new token with amount and metadata",
      "Token ID is automatically derived from INPUTS(0).id",
      "Registers R4-R6 store name, description, and decimals per EIP-4",
      "R7-R9 available for custom application data",
      "Transaction is signed and broadcast to the network"
    ],
    
    codeExamples: [
      {
        title: "Token Minting Contract",
        language: "ergoscript",
        code: `{
  // Token minting happens automatically when:
  // 1. This is the first output box (index 0)
  // 2. Token amount is specified in the box
  // 3. Token ID = INPUTS(0).id (derived automatically)
  
  // EIP-4 Register Layout:
  // R4: Token name (Coll[Byte] - UTF-8)
  // R5: Token description (Coll[Byte] - UTF-8)
  // R6: Number of decimals (Int)
  // R7-R9: Application-specific data
  
  // Simple guard: only creator can mint
  val creatorPK = PK("9f...")
  proveDlog(creatorPK)
}`,
        explanation: "The simplest token minting pattern. Token ID is deterministically derived from the first input, ensuring uniqueness. EIP-4 defines the standard register layout for interoperability."
      },
      {
        title: "Minting with Fleet SDK",
        language: "typescript",
        code: `import { OutputBuilder, TransactionBuilder } from "@fleet-sdk/core";

const tokenName = "MyToken";
const tokenAmount = 1_000_000n;
const decimals = 2;

const unsignedTx = new TransactionBuilder(currentHeight)
  .from(inputs)
  .to(
    new OutputBuilder(minBoxValue, recipientAddress)
      .mintToken({
        amount: tokenAmount,
        name: tokenName,
        decimals: decimals,
        description: "Community governance token"
      })
  )
  .sendChangeTo(changeAddress)
  .payMinFee()
  .build();

// Sign with wallet and submit
const signedTx = await wallet.sign(unsignedTx);
await ergo.submitTransaction(signedTx);`,
        explanation: "Fleet SDK handles token ID derivation and register encoding automatically. The mintToken() helper ensures EIP-4 compliance."
      }
    ],
    
    useCases: [
      "Governance tokens for DAOs",
      "Loyalty points and rewards",
      "Stablecoins with collateral backing",
      "Community and meme tokens",
      "Utility tokens for dApps"
    ],
    
    relatedPatterns: ["ergo-token-burning-supply-control", "ergo-nft-minting-guide"],
    
    resources: [
      { type: "doc", title: "EIP-4: Token Standard", url: "/docs/developers/tokens/eip4" },
      { type: "github", title: "Fleet SDK", url: "https://github.com/fleet-sdk/fleet" },
      { type: "playground", title: "Token Playground", url: "https://scastie.scala-lang.org" }
    ],
    
    securityNotes: [
      "Token ID is immutable once created",
      "Metadata in registers cannot be changed after minting",
      "Consider using a dedicated minting contract for controlled issuance",
      "Verify token amounts before signing"
    ],
    
    feeConsiderations: "Standard transaction fee (~0.001 ERG). No additional minting fees on Ergo.",
    
    implementations: [
      { project: "SigmaUSD", description: "Algorithmic stablecoin using minting pattern", url: "https://sigmausd.io" },
      { project: "Ergo Raffle", description: "Raffle tickets as tokens", url: "https://ergoraffle.com" }
    ],
    
    publishDate: "2025-01-15",
    updatedDate: "2025-01-15"
  },

  {
    slug: "ergo-nft-minting-guide",
    title: "NFT Minting on Ergo (Non-Fungible EIP-4)",
    shortDescription: "Mint a unique NFT with on-chain metadata and image hash",
    
    seoTitle: "NFT Minting on Ergo: Create Non-Fungible Tokens with EIP-4",
    seoDescription: "Complete guide to minting NFTs on Ergo blockchain. Learn EIP-4 NFT standard with content hash verification and IPFS integration.",
    keywords: ["ergo nft minting", "nft ergo", "non-fungible token ergo", "eip-4 nft", "digital collectible ergo"],
    
    category: "token-mechanics",
    difficulty: "beginner",
    timeToImplement: "30 minutes",
    
    problem: "You need to create a unique, non-fungible digital asset with provable scarcity and verifiable authenticity.",
    
    solution: "NFTs on Ergo are tokens with quantity = 1. The unique token ID combined with EIP-4 metadata registers provides authenticity. Content hash in R8 enables verification against the actual file.",
    
    howItWorks: [
      "Create transaction with unique first input (ensures unique token ID)",
      "First output mints token with amount = 1 (non-fungible)",
      "R4-R6: Name, description, decimals (0 for NFT)",
      "R7: Asset type (0x0e01 for NFT picture, 0x0e02 for audio, etc.)",
      "R8: SHA-256 hash of the content file",
      "R9: Content URL (IPFS, Arweave, or other permanent storage)"
    ],
    
    codeExamples: [
      {
        title: "NFT Minting Box",
        language: "ergoscript",
        code: `{
  // NFT = token with quantity 1
  // EIP-4 Extended Register Layout for NFTs:
  // R4: Name (UTF-8 string)
  // R5: Description (UTF-8 string)  
  // R6: Decimals = 0 (always for NFT)
  // R7: Asset type byte:
  //     0x01 = picture (PNG/JPG/GIF/WEBP)
  //     0x02 = audio (MP3/WAV/OGG)
  //     0x03 = video (MP4/WEBM)
  //     0x04 = 3D model (GLB/GLTF)
  // R8: SHA-256 hash of content (for verification)
  // R9: Content URL (ipfs://... or ar://...)
  
  // Only creator can mint
  proveDlog(creatorPK)
}`,
        explanation: "EIP-4 extended layout for NFTs. The content hash in R8 allows anyone to verify the NFT points to the correct file."
      },
      {
        title: "NFT Minting with Fleet SDK",
        language: "typescript",
        code: `import { OutputBuilder, TransactionBuilder } from "@fleet-sdk/core";
import { sha256 } from "@noble/hashes/sha256";
import { bytesToHex } from "@noble/hashes/utils";

// Hash the content file
const contentBuffer = await fetch(contentUrl).then(r => r.arrayBuffer());
const contentHash = bytesToHex(sha256(new Uint8Array(contentBuffer)));

const nftMetadata = {
  name: "Ergo Art #001",
  description: "Limited edition digital artwork",
  decimals: 0,
  assetType: "0501", // Picture NFT
  contentHash: contentHash,
  contentUrl: "ipfs://QmXxx..."
};

const unsignedTx = new TransactionBuilder(currentHeight)
  .from(inputs)
  .to(
    new OutputBuilder(minBoxValue, recipientAddress)
      .mintToken({
        amount: 1n, // NFT = quantity 1
        name: nftMetadata.name,
        decimals: 0,
        description: nftMetadata.description
      })
      .setAdditionalRegisters({
        R7: SConstant(SColl(SByte, hexToBytes(nftMetadata.assetType))),
        R8: SConstant(SColl(SByte, hexToBytes(nftMetadata.contentHash))),
        R9: SConstant(SColl(SByte, stringToBytes(nftMetadata.contentUrl)))
      })
  )
  .sendChangeTo(changeAddress)
  .payMinFee()
  .build();`,
        explanation: "Complete NFT minting with content hash for authenticity verification. Always store content on permanent storage like IPFS or Arweave."
      }
    ],
    
    useCases: [
      "Digital art collectibles",
      "Gaming items and characters",
      "Event tickets with proof of attendance",
      "Membership passes and access tokens",
      "Music and video NFTs",
      "Domain names and identity tokens"
    ],
    
    relatedPatterns: ["ergo-fungible-token-minting-eip4", "ergo-onchain-auction-pattern"],
    
    resources: [
      { type: "doc", title: "EIP-4 NFT Extension", url: "/docs/developers/tokens/eip4-nft" },
      { type: "github", title: "NFT Examples", url: "https://github.com/ergoplatform/eips/blob/master/eip-0004.md" }
    ],
    
    securityNotes: [
      "Always store content on permanent storage (IPFS, Arweave)",
      "Include content hash for authenticity verification",
      "Verify hash matches content before purchase",
      "Consider royalty mechanisms for secondary sales"
    ],
    
    feeConsiderations: "Standard transaction fee. Consider IPFS pinning costs for content storage.",
    
    implementations: [
      { project: "SkyHarbor", description: "NFT marketplace", url: "https://skyharbor.io" },
      { project: "ErgoAuctions", description: "NFT auction house", url: "https://ergoauctions.org" }
    ],
    
    publishDate: "2025-01-15"
  },

  {
    slug: "ergo-token-burning-supply-control",
    title: "Token Supply & Burning Pattern (Lifecycle Control)",
    shortDescription: "Design mint/burn rules, capped supply and admin-controlled burn functions",
    
    seoTitle: "Token Burning & Supply Control on Ergo: Lifecycle Management",
    seoDescription: "Implement token burning and supply control on Ergo. Create deflationary tokenomics with capped supply and governance-controlled burns.",
    keywords: ["ergo token burn", "token supply control", "deflationary token ergo", "token lifecycle", "burn mechanism"],
    
    category: "token-mechanics",
    difficulty: "intermediate",
    timeToImplement: "1-2 hours",
    
    problem: "You need fine-grained control over token supply: capped minting, burn mechanisms, or governance-controlled supply changes.",
    
    solution: "Combine a minting contract with burn capabilities. Use a state box to track total supply, enforce caps, and require authorization for supply changes.",
    
    howItWorks: [
      "Deploy a state box holding the minting authority (NFT or special token)",
      "Minting contract checks current supply against cap before allowing new mints",
      "Burns can happen by omission (not including tokens in outputs) or sending to unspendable address",
      "Governance can control mint/burn through multi-sig or DAO voting",
      "State box tracks total minted and total burned for transparency"
    ],
    
    codeExamples: [
      {
        title: "Capped Supply Minting Contract",
        language: "ergoscript",
        code: `{
  // State box with minting authority
  val stateBox = CONTEXT.dataInputs(0)
  val mintingNFT = fromBase64("MINTING_AUTHORITY_NFT")
  
  // Verify authority
  val hasAuthority = stateBox.tokens.exists(t => t._1 == mintingNFT)
  
  // Supply tracking in state box registers
  val currentSupply = stateBox.R4[Long].get
  val maxSupply = stateBox.R5[Long].get
  val mintAmount = OUTPUTS(0).tokens(0)._2
  
  // Check cap
  val withinCap = currentSupply + mintAmount <= maxSupply
  
  // Governance approval (multi-sig)
  val governanceApproved = atLeast(2, Coll(
    proveDlog(admin1PK),
    proveDlog(admin2PK),
    proveDlog(admin3PK)
  ))
  
  hasAuthority && withinCap && governanceApproved
}`,
        explanation: "Minting contract with hard cap enforcement. State box tracks supply, governance multi-sig controls minting authority."
      },
      {
        title: "Burn Mechanism",
        language: "ergoscript",
        code: `{
  // Method 1: Burn by omission
  // Input has 1000 tokens, output has 900
  // 100 tokens are burned (not included in any output)
  
  val inputTokens = SELF.tokens(0)._2
  val outputTokens = OUTPUTS.flatMap(o => o.tokens)
    .filter(t => t._1 == SELF.tokens(0)._1)
    .map(t => t._2)
    .fold(0L, (a, b) => a + b)
  
  val burnAmount = inputTokens - outputTokens
  
  // Require minimum burn or specific burn amount
  val validBurn = burnAmount >= minBurnAmount
  
  // Only token holder can burn
  proveDlog(holderPK) && validBurn
}

// Method 2: Provably unspendable burn address
{
  // This script ALWAYS fails - tokens sent here are gone forever
  false
}`,
        explanation: "Two burn methods: (1) Omit tokens from outputs - they're destroyed. (2) Send to a false script - provably unspendable."
      },
      {
        title: "Supply Tracking State Machine",
        language: "typescript",
        code: `// State box structure for supply tracking
interface SupplyState {
  R4: bigint;  // totalMinted
  R5: bigint;  // totalBurned  
  R6: bigint;  // maxSupply (immutable cap)
  R7: string;  // lastMintTxId
}

// Current circulating = totalMinted - totalBurned
const getCirculatingSupply = (stateBox: Box): bigint => {
  const minted = stateBox.additionalRegisters.R4 as bigint;
  const burned = stateBox.additionalRegisters.R5 as bigint;
  return minted - burned;
};

// Verify mint is within cap
const canMint = (stateBox: Box, amount: bigint): boolean => {
  const current = getCirculatingSupply(stateBox);
  const max = stateBox.additionalRegisters.R6 as bigint;
  return current + amount <= max;
};`,
        explanation: "TypeScript helpers for tracking supply state. The state box provides transparent on-chain supply data."
      }
    ],
    
    useCases: [
      "Deflationary tokenomics (buyback-and-burn)",
      "Capped supply governance tokens",
      "Fee burning for protocol revenue",
      "Proof-of-burn for cross-chain bridges",
      "Elastic supply stablecoins"
    ],
    
    relatedPatterns: ["ergo-fungible-token-minting-eip4", "ergo-dao-treasury-voting-pattern", "ergo-multisig-wallet-m-of-n"],
    
    resources: [
      { type: "doc", title: "Token Lifecycle", url: "/docs/developers/tokens/lifecycle" },
      { type: "blog", title: "Deflationary Mechanics", url: "/blog/deflationary-tokens" }
    ],
    
    securityNotes: [
      "Burns are irreversible - double-check amounts",
      "Use multi-sig for governance-controlled burns",
      "Log burn events for off-chain tracking",
      "Ensure state box cannot be destroyed accidentally"
    ],
    
    feeConsiderations: "Standard transaction fees. State box updates require additional transaction.",
    
    implementations: [
      { project: "SigmaUSD", description: "Reserve-backed stablecoin with dynamic supply", url: "https://sigmausd.io" }
    ],
    
    publishDate: "2025-01-15"
  },

  // ============================================
  // 2. TIME LOCKS & ACCESS CONTROL
  // ============================================
  {
    slug: "ergo-block-height-time-lock",
    title: "Block-Height Time Lock (Timelocked Payments)",
    shortDescription: "Lock funds until a specific block height for scheduled payments",
    
    seoTitle: "Timelocked Payments on Ergo: Block-Height Time Lock Contracts",
    seoDescription: "Implement time-locked contracts on Ergo blockchain. Create vesting schedules, delayed payments, and timed releases with ErgoScript.",
    keywords: ["ergo timelock contract", "block height lock", "vesting ergo", "delayed payment", "time-locked funds"],
    
    category: "time-locks-access",
    difficulty: "beginner",
    timeToImplement: "30 minutes",
    
    problem: "You need to lock funds until a future date for vesting, escrow, or scheduled payments.",
    
    solution: "ErgoScript can check the current block HEIGHT against a target. Funds remain locked until the blockchain reaches the specified height (~2 min/block on Ergo).",
    
    howItWorks: [
      "Calculate target block height: current + (days * 720) for approximate timing",
      "Ergo averages ~2 minutes per block (720 blocks/day)",
      "Contract checks HEIGHT >= targetHeight before allowing spend",
      "Before target: funds are locked, no spending possible",
      "After target: only the designated beneficiary can claim"
    ],
    
    codeExamples: [
      {
        title: "Simple Time Lock",
        language: "ergoscript",
        code: `{
  // Lock until block height 1,500,000
  val unlockHeight = 1500000
  val beneficiary = PK("9f...")  // Beneficiary public key
  
  // Can only spend after unlock height
  HEIGHT >= unlockHeight && proveDlog(beneficiary)
}`,
        explanation: "Simplest time lock. Funds are locked until the specified block height, then only the beneficiary can claim."
      },
      {
        title: "Linear Vesting Schedule",
        language: "ergoscript",
        code: `{
  // Linear vesting over 1 year (~262,800 blocks)
  val startHeight = SELF.R4[Int].get
  val vestingBlocks = 262800  // ~1 year at 2 min/block
  val totalAmount = SELF.R5[Long].get
  val beneficiary = SELF.R6[SigmaProp].get
  
  // Calculate vested amount
  val elapsed = max(0, HEIGHT - startHeight)
  val vestingRatio = min(elapsed, vestingBlocks) * 1000 / vestingBlocks
  val vestedAmount = totalAmount * vestingRatio / 1000
  
  // Beneficiary can claim vested portion
  val claimAmount = SELF.value - OUTPUTS(0).value
  val validClaim = claimAmount <= vestedAmount
  
  // Remaining funds stay in contract with updated registers
  val validContinuation = OUTPUTS(0).propositionBytes == SELF.propositionBytes
  
  beneficiary && validClaim && validContinuation
}`,
        explanation: "Linear vesting: beneficiary can claim proportional amounts as time passes. Contract recreates itself with remaining balance."
      },
      {
        title: "Cliff + Linear Vesting",
        language: "ergoscript",
        code: `{
  // 6-month cliff, then 18-month linear vesting
  val startHeight = SELF.R4[Int].get
  val cliffBlocks = 131400   // ~6 months
  val vestingBlocks = 394200 // ~18 months after cliff
  val totalAmount = SELF.R5[Long].get
  val beneficiary = SELF.R6[SigmaProp].get
  
  val elapsed = HEIGHT - startHeight
  
  // Before cliff: nothing vested
  val beforeCliff = elapsed < cliffBlocks
  
  // After cliff: linear vesting
  val afterCliff = elapsed >= cliffBlocks
  val vestingElapsed = elapsed - cliffBlocks
  val vestingRatio = min(vestingElapsed, vestingBlocks) * 1000 / vestingBlocks
  val vestedAmount = if (afterCliff) totalAmount * vestingRatio / 1000 else 0L
  
  val claimAmount = SELF.value - OUTPUTS(0).value
  
  beneficiary && claimAmount <= vestedAmount
}`,
        explanation: "Cliff vesting: nothing unlocks for 6 months, then linear unlock over 18 months. Common for team tokens."
      }
    ],
    
    useCases: [
      "Team token vesting schedules",
      "Scheduled salary payments",
      "Escrow with timeout refunds",
      "Inheritance and succession planning",
      "Delayed governance execution",
      "Bond maturity contracts"
    ],
    
    relatedPatterns: ["ergo-sigma-or-access-control", "ergo-multisig-wallet-m-of-n", "ergo-crowdfunding-assurance-contract"],
    
    resources: [
      { type: "doc", title: "Time-Based Contracts", url: "/docs/developers/contracts/time-locks" },
      { type: "blog", title: "Vesting on Ergo", url: "/blog/vesting-contracts" }
    ],
    
    securityNotes: [
      "Block times can vary slightly - don't rely on exact timing",
      "Consider adding emergency unlock with multi-sig",
      "Test unlock conditions thoroughly on testnet",
      "Keep fee reserves for future unlock transactions"
    ],
    
    feeConsiderations: "Standard transaction fees. Reserve ~0.01 ERG for future unlock transaction.",
    
    publishDate: "2025-01-15"
  },

  {
    slug: "ergo-sigma-or-access-control",
    title: "Sigma OR Access Control (Either-Or Spend)",
    shortDescription: "Spend if key A OR key B or external condition is satisfied",
    
    seoTitle: "Sigma OR Access Control on Ergo: Zero-Knowledge Either-Or Patterns",
    seoDescription: "Implement Sigma Protocol OR proofs on Ergo. Create contracts where users prove one of multiple conditions without revealing which.",
    keywords: ["sigma or proof ergo", "zero knowledge ergo", "access control", "either or spend", "sigma protocol"],
    
    category: "time-locks-access",
    difficulty: "intermediate",
    timeToImplement: "1 hour",
    
    problem: "You need flexible access control where multiple conditions can authorize spending, without revealing which condition was satisfied.",
    
    solution: "Sigma Protocol OR compositions allow proving disjunctions (A OR B OR C) without revealing which branch is satisfied. This enables privacy-preserving access control.",
    
    howItWorks: [
      "Define multiple valid spending conditions (A, B, C...)",
      "Combine with || (OR) operator in ErgoScript",
      "Prover satisfies one condition but proof doesn't reveal which",
      "Verifier confirms one condition is met without learning which",
      "Zero-knowledge property preserved - no information leakage"
    ],
    
    codeExamples: [
      {
        title: "Multi-Authority Access",
        language: "ergoscript",
        code: `{
  // Any of three authorities can spend
  // Observer cannot tell which one signed
  
  val authority1 = PK("9f...")
  val authority2 = PK("9g...")  
  val authority3 = PK("9h...")
  
  // OR composition - ZK proof reveals nothing about signer
  proveDlog(authority1) || proveDlog(authority2) || proveDlog(authority3)
}`,
        explanation: "Three authorities can spend, but the signature doesn't reveal which one. Native Sigma Protocol feature, not a hash-based trick."
      },
      {
        title: "Key OR Timeout",
        language: "ergoscript",
        code: `{
  // Spend if:
  // 1. Owner signs, OR
  // 2. Timeout passed AND backup key signs
  
  val owner = PK("9f...")
  val backup = PK("9g...")
  val timeout = 500000  // Block height
  
  val ownerSpend = proveDlog(owner)
  val backupSpend = HEIGHT > timeout && proveDlog(backup)
  
  // Either condition works - proof hides which
  ownerSpend || backupSpend
}`,
        explanation: "Owner can always spend. After timeout, backup key can also spend. Useful for recovery scenarios."
      },
      {
        title: "Ring-Style Access",
        language: "ergoscript",
        code: `{
  // Ring signature: prove membership in a set
  // without revealing which member you are
  
  val ringMembers = Coll(
    PK("9f..."),
    PK("9g..."),
    PK("9h..."),
    PK("9i..."),
    PK("9j...")
  )
  
  // Any ring member can spend anonymously
  atLeast(1, ringMembers.map(pk => proveDlog(pk)))
  
  // Equivalent to: pk1 || pk2 || pk3 || pk4 || pk5
}`,
        explanation: "Ring signature pattern. Any member can sign without revealing identity within the ring. Privacy through anonymity set."
      },
      {
        title: "Condition OR Secret",
        language: "ergoscript",
        code: `{
  // Spend if:
  // 1. External condition is met (e.g., oracle says price > X), OR
  // 2. You know the secret preimage
  
  val oracleBox = CONTEXT.dataInputs(0)
  val oracleNFT = fromBase64("ORACLE_NFT_ID")
  val targetPrice = 100000000L  // 1 ERG in nanoERG
  
  // Condition 1: Oracle price above target
  val priceCondition = {
    oracleBox.tokens(0)._1 == oracleNFT &&
    oracleBox.R4[Long].get > targetPrice
  }
  
  // Condition 2: Know the preimage of stored hash
  val secretHash = SELF.R4[Coll[Byte]].get
  val preimage = getVar[Coll[Byte]](0).get
  val secretCondition = blake2b256(preimage) == secretHash
  
  priceCondition || secretCondition
}`,
        explanation: "Hybrid access: either prove an external condition or provide a secret. Useful for conditional payments with escape hatch."
      }
    ],
    
    useCases: [
      "Anonymous voting systems",
      "Whistleblower protection",
      "Multi-authority access control",
      "Recovery mechanisms with timeout",
      "Confidential transactions",
      "Privacy-preserving authentication"
    ],
    
    relatedPatterns: ["ergo-multisig-wallet-m-of-n", "ergo-privacy-one-time-address", "ergo-block-height-time-lock"],
    
    resources: [
      { type: "doc", title: "Sigma Protocols Guide", url: "/docs/developers/crypto/sigma-protocols" },
      { type: "blog", title: "Sigma Protocols Explained", url: "/blog/sigma-protocols-explained" },
      { type: "doc", title: "Privacy on Ergo", url: "/docs/developers/privacy" }
    ],
    
    securityNotes: [
      "OR proofs are computationally sound, not information-theoretic",
      "Ring size affects privacy level (larger = more privacy)",
      "Consider timing attacks in implementation",
      "Avoid reusing keys across different rings"
    ],
    
    feeConsiderations: "OR proofs are slightly larger than single proofs. Expect ~1.5x standard fees.",
    
    implementations: [
      { project: "ErgoMixer", description: "Non-interactive mixing using Sigma protocols", url: "https://ergomixer.com" }
    ],
    
    publishDate: "2025-01-15"
  },

  // ============================================
  // 3. MULTISIG & GOVERNANCE
  // ============================================
  {
    slug: "ergo-multisig-wallet-m-of-n",
    title: "Multisig Wallet (M-of-N Treasury Pattern)",
    shortDescription: "Require M out of N signatures to spend from a shared treasury",
    
    seoTitle: "Multisig Wallet on Ergo: M-of-N Treasury Smart Contract",
    seoDescription: "Implement multi-signature wallets on Ergo. Learn threshold signatures with ErgoScript for secure treasury management.",
    keywords: ["ergo multisig wallet", "m of n signature", "treasury contract ergo", "multi signature", "threshold signature"],
    
    category: "multisig-governance",
    difficulty: "beginner",
    timeToImplement: "30 minutes",
    
    problem: "You need multiple parties to authorize a transaction for security (treasury, DAO, escrow).",
    
    solution: "ErgoScript's atLeast() function enables native threshold signatures. Require M of N parties to sign without revealing which M signed (Sigma Protocol privacy).",
    
    howItWorks: [
      "Define N public keys of potential signers",
      "Set threshold M (minimum required signatures)",
      "Use atLeast(M, [pk1, pk2, ..., pkN])",
      "Any M signers can authorize spending",
      "Sigma protocols ensure signer privacy - observers can't tell which M signed"
    ],
    
    codeExamples: [
      {
        title: "2-of-3 Multi-Sig",
        language: "ergoscript",
        code: `{
  // Treasury requires 2 of 3 board members
  val member1 = PK("9f...")
  val member2 = PK("9g...")
  val member3 = PK("9h...")
  
  // AtLeast 2 must sign
  atLeast(2, Coll(
    proveDlog(member1),
    proveDlog(member2),
    proveDlog(member3)
  ))
}`,
        explanation: "Classic 2-of-3 multi-sig. Any two members can authorize. Sigma protocols hide which two signed."
      },
      {
        title: "5-of-9 DAO Treasury",
        language: "ergoscript",
        code: `{
  // Large DAO treasury with 5-of-9 requirement
  val councilMembers = Coll(
    PK("9a..."), PK("9b..."), PK("9c..."),
    PK("9d..."), PK("9e..."), PK("9f..."),
    PK("9g..."), PK("9h..."), PK("9i...")
  )
  
  // Require majority (5 of 9)
  atLeast(5, councilMembers.map(pk => proveDlog(pk)))
}`,
        explanation: "Larger multi-sig for DAO governance. 5 of 9 council members must agree."
      },
      {
        title: "Dynamic Multi-Sig (Upgradeable)",
        language: "ergoscript",
        code: `{
  // Threshold and keys stored in registers
  // Can be updated by creating new box
  
  val threshold = SELF.R4[Int].get
  val signerKeys = SELF.R5[Coll[GroupElement]].get
  
  // Build proofs from stored keys
  val proofs = signerKeys.map(pk => proveDlog(pk))
  
  atLeast(threshold, proofs)
}`,
        explanation: "Flexible multi-sig where threshold and signers are in registers. Update by spending to new box with new config."
      },
      {
        title: "Multi-Sig with Fleet SDK",
        language: "typescript",
        code: `import { TransactionBuilder, OutputBuilder } from "@fleet-sdk/core";
import { SGroupElement, SColl, SInt } from "@fleet-sdk/serializer";

// Create 2-of-3 multi-sig box
const threshold = 2;
const signerPKs = [pk1, pk2, pk3]; // GroupElement[]

const multisigBox = new OutputBuilder(amount, multisigScript)
  .setAdditionalRegisters({
    R4: SInt(threshold),
    R5: SColl(SGroupElement, signerPKs)
  });

// To spend: collect signatures from 2 signers
const unsignedTx = new TransactionBuilder(height)
  .from([multisigBox])
  .to(recipient)
  .build();

// Each signer signs independently
const sig1 = await signer1.sign(unsignedTx);
const sig2 = await signer2.sign(unsignedTx);

// Combine signatures
const signedTx = combineSignatures([sig1, sig2]);`,
        explanation: "Creating and spending from a multi-sig using Fleet SDK. Signatures are collected and combined."
      }
    ],
    
    useCases: [
      "DAO treasuries",
      "Corporate wallets",
      "Escrow services",
      "Cold storage security",
      "Inheritance planning",
      "Grant disbursement"
    ],
    
    relatedPatterns: ["ergo-dao-treasury-voting-pattern", "ergo-sigma-or-access-control", "ergo-block-height-time-lock"],
    
    resources: [
      { type: "doc", title: "Multi-Sig Guide", url: "/docs/developers/contracts/multisig" },
      { type: "playground", title: "Multi-Sig Playground", url: "https://ergoscript.org" }
    ],
    
    securityNotes: [
      "Store keys in separate secure locations",
      "Consider adding time-locks for large amounts",
      "Plan for key loss scenarios (recovery procedures)",
      "Test with small amounts first",
      "Document key holders and succession plan"
    ],
    
    feeConsiderations: "Multi-sig proofs are larger. Expect ~2-3x standard fees for 2-of-3, more for larger sets.",
    
    implementations: [
      { project: "Ergo Foundation", description: "Treasury management", url: "https://ergoplatform.org" },
      { project: "Paideia", description: "DAO treasury contracts", url: "https://paideia.im" }
    ],
    
    publishDate: "2025-01-15"
  },

  {
    slug: "ergo-dao-treasury-voting-pattern",
    title: "DAO Treasury & Voting Pattern",
    shortDescription: "Simple on-chain DAO: proposal boxes, token-weighted voting, timelocked execution",
    
    seoTitle: "DAO Treasury & Voting on Ergo: On-Chain Governance Smart Contract",
    seoDescription: "Build a DAO on Ergo with proposal boxes, token-weighted voting, and timelocked execution. Complete governance pattern.",
    keywords: ["ergo dao smart contract", "on-chain voting", "dao treasury", "governance token ergo", "proposal voting"],
    
    category: "multisig-governance",
    difficulty: "advanced",
    timeToImplement: "1-2 weeks",
    
    problem: "You need decentralized governance where token holders can propose and vote on treasury spending or protocol changes.",
    
    solution: "Use proposal boxes that collect votes as separate voting boxes. After voting period, proposals with sufficient support can be executed with timelock for safety.",
    
    howItWorks: [
      "Create governance token distributed to stakeholders",
      "Proposals are created as special boxes with action details in registers",
      "Token holders lock governance tokens in voting boxes pointing to proposal",
      "After voting period, tally votes from voting boxes",
      "If quorum and threshold met, proposal enters timelock period",
      "After timelock, anyone can execute the approved action"
    ],
    
    codeExamples: [
      {
        title: "Proposal Box Contract",
        language: "ergoscript",
        code: `{
  // Proposal box structure
  // R4: Proposal ID (unique identifier)
  // R5: Action type (0=spend, 1=parameter change, 2=upgrade)
  // R6: Action data (recipient address, amount, or new parameter)
  // R7: Voting start height
  // R8: Voting end height
  // R9: Execution timelock (blocks after vote ends)
  
  val proposalId = SELF.R4[Coll[Byte]].get
  val actionType = SELF.R5[Int].get
  val votingEnd = SELF.R8[Int].get
  val timelock = SELF.R9[Int].get
  val executionHeight = votingEnd + timelock
  
  val governanceNFT = fromBase64("DAO_NFT_ID")
  
  // Proposal can be executed after timelock if:
  // 1. Voting period ended
  // 2. Timelock passed
  // 3. Vote passed (checked via data inputs)
  
  val votingEnded = HEIGHT > votingEnd
  val timelockPassed = HEIGHT > executionHeight
  
  // Vote tally from data inputs (voting boxes)
  val votingBoxes = CONTEXT.dataInputs.filter(b => 
    b.R4[Coll[Byte]].get == proposalId
  )
  val yesVotes = votingBoxes.filter(b => b.R5[Boolean].get == true)
    .map(b => b.tokens(0)._2).fold(0L, (a, b) => a + b)
  val totalVotes = votingBoxes.map(b => b.tokens(0)._2)
    .fold(0L, (a, b) => a + b)
  
  val quorum = 1000000L  // Minimum total votes
  val threshold = 500    // 50% approval needed (in basis points)
  
  val quorumMet = totalVotes >= quorum
  val thresholdMet = yesVotes * 1000 / totalVotes >= threshold
  
  votingEnded && timelockPassed && quorumMet && thresholdMet
}`,
        explanation: "Proposal box that can only be spent (executed) after voting passes and timelock expires. Votes are tallied from voting boxes."
      },
      {
        title: "Voting Box Contract",
        language: "ergoscript",
        code: `{
  // Voting box: locks governance tokens as vote
  // R4: Proposal ID being voted on
  // R5: Vote direction (true=yes, false=no)
  // R6: Voter's public key (for refund)
  
  val proposalId = SELF.R4[Coll[Byte]].get
  val voteDirection = SELF.R5[Boolean].get
  val voterPK = SELF.R6[SigmaProp].get
  
  val governanceToken = fromBase64("GOV_TOKEN_ID")
  
  // Voting box holds governance tokens
  val hasGovTokens = SELF.tokens(0)._1 == governanceToken
  
  // Can be spent (tokens returned) when:
  // 1. Voting period ended, OR
  // 2. Voter wants to change vote (before period ends)
  
  val proposalBox = CONTEXT.dataInputs(0)
  val votingEnd = proposalBox.R8[Int].get
  val votingEnded = HEIGHT > votingEnd
  
  // Return tokens to voter
  val tokensReturned = OUTPUTS.exists(o =>
    o.propositionBytes == voterPK.propBytes &&
    o.tokens(0)._1 == governanceToken &&
    o.tokens(0)._2 >= SELF.tokens(0)._2
  )
  
  hasGovTokens && (votingEnded || voterPK) && tokensReturned
}`,
        explanation: "Voting box locks governance tokens as a vote. Tokens are returned after voting ends or if voter changes their vote."
      },
      {
        title: "Treasury Spend Execution",
        language: "ergoscript",
        code: `{
  // Treasury box that can be spent by approved proposals
  val treasuryNFT = fromBase64("TREASURY_NFT_ID")
  val hasTreasuryNFT = SELF.tokens(0)._1 == treasuryNFT
  
  // Check if spending is authorized by passed proposal
  val proposalBox = CONTEXT.dataInputs(0)
  val actionType = proposalBox.R5[Int].get
  val actionData = proposalBox.R6[Coll[Byte]].get
  
  // For spend action (type 0):
  // actionData = recipient address ++ amount (Long)
  val isSpendAction = actionType == 0
  
  val recipientBytes = actionData.slice(0, actionData.size - 8)
  val spendAmount = byteArrayToLong(actionData.slice(actionData.size - 8, actionData.size))
  
  // Verify output matches proposal
  val correctRecipient = OUTPUTS(0).propositionBytes == recipientBytes
  val correctAmount = OUTPUTS(0).value >= spendAmount
  
  // Treasury continues with remaining funds
  val treasuryContinues = OUTPUTS(1).tokens(0)._1 == treasuryNFT
  
  hasTreasuryNFT && isSpendAction && correctRecipient && 
    correctAmount && treasuryContinues
}`,
        explanation: "Treasury box that can only be spent according to approved proposals. Validates recipient and amount match the proposal."
      }
    ],
    
    useCases: [
      "Protocol governance",
      "Community treasury management",
      "Grant programs",
      "Parameter changes (fees, thresholds)",
      "Protocol upgrades",
      "Emergency actions with timelock"
    ],
    
    relatedPatterns: ["ergo-multisig-wallet-m-of-n", "ergo-block-height-time-lock", "ergo-crowdfunding-assurance-contract"],
    
    resources: [
      { type: "doc", title: "DAO Patterns", url: "/docs/developers/contracts/dao" },
      { type: "github", title: "Paideia Contracts", url: "https://github.com/paideiadao/paideia-contracts" }
    ],
    
    securityNotes: [
      "Use sufficient timelock for security (e.g., 7 days)",
      "Implement emergency pause mechanism",
      "Consider vote delegation for participation",
      "Guard against flash loan attacks on voting",
      "Audit proposal validation thoroughly"
    ],
    
    feeConsiderations: "Multiple transactions: create proposal, vote, tally, execute. Budget ~0.1 ERG total.",
    
    implementations: [
      { project: "Paideia", description: "Full DAO framework on Ergo", url: "https://paideia.im" }
    ],
    
    publishDate: "2025-01-15"
  },

  // ============================================
  // 4. DEFI PRIMITIVES
  // ============================================
  {
    slug: "ergo-amm-liquidity-pool",
    title: "Constant-Product AMM Liquidity Pool",
    shortDescription: "Build a Uniswap-style AMM on Ergo (x*y=k) with LP tokens",
    
    seoTitle: "AMM Liquidity Pool on Ergo: Build a DEX Smart Contract",
    seoDescription: "Create an automated market maker on Ergo. Learn the constant product AMM pattern with ErgoScript for decentralized exchanges.",
    keywords: ["ergo amm", "liquidity pool ergo", "dex ergo", "constant product", "automated market maker"],
    
    category: "defi-primitives",
    difficulty: "intermediate",
    timeToImplement: "1-2 weeks",
    
    problem: "You need permissionless, always-available liquidity for token trading without order books.",
    
    solution: "Automated Market Makers use a mathematical formula (x * y = k) to price assets. Liquidity providers deposit token pairs and earn fees from trades.",
    
    howItWorks: [
      "Pool holds reserves of two tokens (X and Y)",
      "Price is determined by ratio: price = reserveY / reserveX",
      "Trades must maintain invariant: reserveX * reserveY >= k",
      "LP tokens represent proportional share of pool",
      "Fees (typically 0.3%) go to liquidity providers",
      "Anyone can add/remove liquidity by depositing/withdrawing proportionally"
    ],
    
    codeExamples: [
      {
        title: "Constant Product AMM",
        language: "ergoscript",
        code: `{
  // AMM Pool Contract
  val poolNFT = SELF.tokens(0)._1  // Unique pool identifier
  val reserveX = SELF.tokens(1)._2  // Token X reserve
  val reserveY = SELF.tokens(2)._2  // Token Y reserve
  val lpTokens = SELF.tokens(3)._2  // LP tokens in pool
  
  val feeNum = 997L     // 0.3% fee (1000 - 3)
  val feeDenom = 1000L
  
  // Pool must continue with same NFT
  val poolContinues = OUTPUTS(0).tokens(0)._1 == poolNFT
  
  val newReserveX = OUTPUTS(0).tokens(1)._2
  val newReserveY = OUTPUTS(0).tokens(2)._2
  
  // Swap validation: constant product with fee
  val validSwap = {
    val deltaX = newReserveX - reserveX
    val deltaY = newReserveY - reserveY
    
    if (deltaX > 0) {
      // Selling X for Y (X increases, Y decreases)
      val xWithFee = deltaX * feeNum
      newReserveY * (reserveX * feeDenom + xWithFee) >= 
        reserveY * reserveX * feeDenom
    } else {
      // Selling Y for X (Y increases, X decreases)
      val yWithFee = -deltaY * feeNum
      newReserveX * (reserveY * feeDenom + yWithFee) >= 
        reserveX * reserveY * feeDenom
    }
  }
  
  // Add/remove liquidity validation
  val validLiquidity = {
    val newLpTokens = OUTPUTS(0).tokens(3)._2
    val lpDelta = newLpTokens - lpTokens
    
    if (lpDelta > 0) {
      // Adding liquidity: must add proportionally
      val xRatio = (newReserveX - reserveX) * lpTokens / reserveX
      val yRatio = (newReserveY - reserveY) * lpTokens / reserveY
      lpDelta <= min(xRatio, yRatio)
    } else {
      // Removing liquidity: receive proportionally
      val xOut = -lpDelta * reserveX / lpTokens
      val yOut = -lpDelta * reserveY / lpTokens
      (reserveX - newReserveX) <= xOut &&
      (reserveY - newReserveY) <= yOut
    }
  }
  
  poolContinues && (validSwap || validLiquidity)
}`,
        explanation: "Core AMM logic with 0.3% swap fee. Validates both swaps (constant product) and liquidity operations (proportional)."
      },
      {
        title: "Swap Calculation (Off-chain)",
        language: "typescript",
        code: `// Calculate output amount for a swap
function getAmountOut(
  amountIn: bigint,
  reserveIn: bigint,
  reserveOut: bigint,
  feeNum: bigint = 997n,
  feeDenom: bigint = 1000n
): bigint {
  const amountInWithFee = amountIn * feeNum;
  const numerator = amountInWithFee * reserveOut;
  const denominator = reserveIn * feeDenom + amountInWithFee;
  return numerator / denominator;
}

// Calculate price impact
function getPriceImpact(
  amountIn: bigint,
  reserveIn: bigint,
  reserveOut: bigint
): number {
  const spotPrice = Number(reserveOut) / Number(reserveIn);
  const amountOut = getAmountOut(amountIn, reserveIn, reserveOut);
  const executionPrice = Number(amountOut) / Number(amountIn);
  return (spotPrice - executionPrice) / spotPrice;
}

// Calculate LP tokens for deposit
function getLpTokensForDeposit(
  amountX: bigint,
  amountY: bigint,
  reserveX: bigint,
  reserveY: bigint,
  totalLp: bigint
): bigint {
  const lpFromX = amountX * totalLp / reserveX;
  const lpFromY = amountY * totalLp / reserveY;
  return lpFromX < lpFromY ? lpFromX : lpFromY;
}`,
        explanation: "Off-chain helpers for swap calculations, price impact estimation, and LP token math."
      }
    ],
    
    useCases: [
      "Decentralized token exchanges",
      "Liquidity bootstrapping for new tokens",
      "Yield farming infrastructure",
      "Price discovery for illiquid assets",
      "Stablecoin swaps"
    ],
    
    relatedPatterns: ["ergo-cross-chain-atomic-swap", "ergo-liquidity-mining-rewards-vault", "ergo-oracle-data-consumption"],
    
    resources: [
      { type: "doc", title: "AMM Deep Dive", url: "/docs/developers/defi/amm" },
      { type: "github", title: "Spectrum Contracts", url: "https://github.com/spectrum-finance/ergo-dex" }
    ],
    
    securityNotes: [
      "Protect against sandwich attacks with slippage limits",
      "Use time-weighted average prices for oracles",
      "Implement emergency pause mechanisms",
      "Audit math for overflow/underflow",
      "Consider concentrated liquidity for efficiency"
    ],
    
    feeConsiderations: "Swap fees typically 0.3%. Transaction fees standard. Consider batching for gas efficiency.",
    
    implementations: [
      { project: "Spectrum Finance", description: "Production AMM DEX on Ergo", url: "https://spectrum.fi" }
    ],
    
    publishDate: "2025-01-15"
  },

  {
    slug: "ergo-cross-chain-atomic-swap",
    title: "Cross-Chain Atomic Swap Pattern",
    shortDescription: "Trustless swap between ERG and another chain using HTLC-style contracts",
    
    seoTitle: "Cross-Chain Atomic Swaps on Ergo: Trustless Multi-Chain Exchange",
    seoDescription: "Implement atomic swaps between Ergo and other blockchains. Learn HTLC patterns for trustless cross-chain token exchange.",
    keywords: ["ergo atomic swap", "cross chain swap", "htlc ergo", "trustless exchange", "multi chain"],
    
    category: "defi-primitives",
    difficulty: "intermediate",
    timeToImplement: "2-4 hours",
    
    problem: "You want to exchange ERG for BTC/ETH/other chain assets without trusting a centralized exchange or bridge.",
    
    solution: "Hash Time-Locked Contracts (HTLCs) enable atomic swaps. Both parties lock funds with the same hash lock. Revealing the preimage on one chain allows claiming on both.",
    
    howItWorks: [
      "Party A generates a secret and its hash",
      "Party A locks ERG in HTLC with hash lock + timeout",
      "Party B sees the hash and locks BTC in matching HTLC",
      "Party A claims BTC by revealing secret (preimage)",
      "Party B uses revealed secret to claim ERG",
      "If timeout expires, both parties can refund"
    ],
    
    codeExamples: [
      {
        title: "HTLC Contract (Ergo side)",
        language: "ergoscript",
        code: `{
  // Hash Time-Locked Contract for atomic swaps
  // R4: Hash of secret (blake2b256)
  // R5: Recipient public key (Party B)
  // R6: Refund public key (Party A)
  // R7: Timeout block height
  
  val secretHash = SELF.R4[Coll[Byte]].get
  val recipient = SELF.R5[SigmaProp].get
  val refundTo = SELF.R6[SigmaProp].get
  val timeout = SELF.R7[Int].get
  
  // Claim path: provide preimage that hashes to secretHash
  val preimage = getVar[Coll[Byte]](0).get
  val validPreimage = blake2b256(preimage) == secretHash
  val claim = validPreimage && recipient
  
  // Refund path: after timeout, original sender can reclaim
  val refund = HEIGHT > timeout && refundTo
  
  claim || refund
}`,
        explanation: "HTLC on Ergo. Recipient can claim with secret preimage. Sender can refund after timeout."
      },
      {
        title: "Atomic Swap Flow",
        language: "typescript",
        code: `import { blake2b } from "@noble/hashes/blake2b";
import { randomBytes } from "crypto";

// Step 1: Party A generates secret
const secret = randomBytes(32);
const secretHash = blake2b(secret, { dkLen: 32 });

// Step 2: Party A creates HTLC on Ergo
const ergoHtlc = createErgoHtlc({
  secretHash: secretHash,
  recipient: partyBPubKey,
  refundTo: partyAPubKey,
  timeout: currentHeight + 720, // ~24 hours
  amount: 100n * ERG
});

// Step 3: Party B verifies and creates matching HTLC on Bitcoin
// (Party B uses same secretHash, shorter timeout)
const btcHtlc = createBtcHtlc({
  secretHash: secretHash,
  recipient: partyABtcAddress,
  refundTo: partyBBtcAddress,
  timeout: btcBlockHeight + 144, // ~24 hours (shorter than Ergo)
  amount: 0.1 // BTC
});

// Step 4: Party A claims BTC by revealing secret
const btcClaimTx = claimBtcHtlc(btcHtlc, secret);
// Secret is now public on Bitcoin blockchain

// Step 5: Party B extracts secret from Bitcoin tx and claims ERG
const extractedSecret = extractSecretFromBtcTx(btcClaimTx);
const ergoClaimTx = claimErgoHtlc(ergoHtlc, extractedSecret);

// Swap complete! Both parties have their funds.`,
        explanation: "Complete atomic swap flow. Key insight: Party B's timeout must be shorter so Party A can't claim BTC then let ERG timeout."
      },
      {
        title: "Same-Chain Atomic Swap",
        language: "ergoscript",
        code: `{
  // Simpler atomic swap within Ergo (no hash lock needed)
  // Both parties' boxes consumed in single transaction
  
  val partyA = PK("9f...")
  val partyB = PK("9g...")
  val tokenIdA = fromBase64("TOKEN_A_ID")
  val tokenIdB = fromBase64("TOKEN_B_ID")
  val amountA = 1000L
  val amountB = 500L
  
  // This box (Party A's offer): has tokenA, wants tokenB
  val hasTokenA = SELF.tokens(0)._1 == tokenIdA && 
                  SELF.tokens(0)._2 >= amountA
  
  // Verify Party A receives tokenB
  val aReceivesB = OUTPUTS.exists(o =>
    o.propositionBytes == partyA.propBytes &&
    o.tokens(0)._1 == tokenIdB &&
    o.tokens(0)._2 >= amountB
  )
  
  // Verify Party B receives tokenA
  val bReceivesA = OUTPUTS.exists(o =>
    o.propositionBytes == partyB.propBytes &&
    o.tokens(0)._1 == tokenIdA &&
    o.tokens(0)._2 >= amountA
  )
  
  // Refund if not matched
  val refund = HEIGHT > SELF.R4[Int].get && partyA
  
  (hasTokenA && aReceivesB && bReceivesA) || refund
}`,
        explanation: "Same-chain atomic swap is simpler: both boxes are spent in one transaction, no hash lock needed."
      }
    ],
    
    useCases: [
      "Cross-chain trading (ERG/BTC, ERG/ETH)",
      "OTC deals without intermediaries",
      "Decentralized exchange between chains",
      "Trustless bridge alternatives",
      "P2P trading"
    ],
    
    relatedPatterns: ["ergo-amm-liquidity-pool", "ergo-block-height-time-lock", "ergo-sigma-or-access-control"],
    
    resources: [
      { type: "doc", title: "Atomic Swaps Guide", url: "/docs/developers/defi/atomic-swaps" },
      { type: "blog", title: "Cross-Chain Trading", url: "/blog/cross-chain-swaps" }
    ],
    
    securityNotes: [
      "Initiator's timeout must be longer than responder's",
      "Verify hash algorithm matches on both chains",
      "Monitor both chains for claim transactions",
      "Use secure random for secret generation",
      "Consider griefing attacks (locking funds without completing)"
    ],
    
    feeConsiderations: "Two transactions on each chain. Budget for fees on both networks.",
    
    publishDate: "2025-01-15"
  },

  {
    slug: "ergo-cdp-collateralized-loans",
    title: "CDP / Collateralized Lending Pattern",
    shortDescription: "Borrow stable/credit tokens against locked ERG with liquidation rules",
    
    seoTitle: "Collateralized Loans on Ergo: CDP Lending Smart Contract",
    seoDescription: "Build a collateralized debt position (CDP) system on Ergo. Learn lending patterns with liquidation, oracle integration, and stablecoin minting.",
    keywords: ["ergo lending cdp", "collateralized loan", "defi lending ergo", "stablecoin ergo", "liquidation"],
    
    category: "defi-primitives",
    difficulty: "advanced",
    timeToImplement: "2-4 weeks",
    
    problem: "Users want to borrow against their ERG holdings without selling, and lenders want to earn yield on stable assets.",
    
    solution: "Collateralized Debt Positions (CDPs) lock ERG as collateral and mint/borrow stable tokens. Oracle prices determine collateralization ratio. Under-collateralized positions are liquidated.",
    
    howItWorks: [
      "User deposits ERG into CDP box as collateral",
      "Oracle provides ERG/USD price",
      "User can borrow up to (collateral * price * maxLTV)",
      "Borrowed tokens are minted or drawn from lending pool",
      "If collateral ratio falls below liquidation threshold, anyone can liquidate",
      "Liquidator repays debt and receives collateral at discount"
    ],
    
    codeExamples: [
      {
        title: "CDP Box Contract",
        language: "ergoscript",
        code: `{
  // CDP (Collateralized Debt Position) Box
  // R4: Owner public key
  // R5: Debt amount (in stable tokens)
  // R6: Minimum collateral ratio (e.g., 150 = 150%)
  // R7: Liquidation ratio (e.g., 120 = 120%)
  
  val owner = SELF.R4[SigmaProp].get
  val debtAmount = SELF.R5[Long].get
  val minRatio = SELF.R6[Int].get
  val liqRatio = SELF.R7[Int].get
  
  val collateralErg = SELF.value
  val stableTokenId = fromBase64("STABLE_TOKEN_ID")
  
  // Oracle price (nanoERG per stable token)
  val oracleBox = CONTEXT.dataInputs(0)
  val oracleNFT = fromBase64("ORACLE_NFT_ID")
  val validOracle = oracleBox.tokens(0)._1 == oracleNFT
  val ergPrice = oracleBox.R4[Long].get  // e.g., 2000000 = $2 per ERG
  
  // Calculate collateral ratio
  val collateralValue = collateralErg * ergPrice / 1000000000L
  val currentRatio = if (debtAmount > 0) collateralValue * 100 / debtAmount else 999
  
  // Owner operations (add collateral, repay debt, withdraw)
  val ownerAction = {
    val newCdp = OUTPUTS(0)
    val newDebt = newCdp.R5[Long].get
    val newCollateral = newCdp.value
    
    // Can add collateral freely
    val addingCollateral = newCollateral > collateralErg && newDebt == debtAmount
    
    // Can repay debt (must provide stable tokens)
    val repayingDebt = newDebt < debtAmount
    
    // Can withdraw if ratio stays above minimum
    val newRatio = newCollateral * ergPrice * 100 / (newDebt * 1000000000L)
    val safeWithdraw = newRatio >= minRatio
    
    owner && (addingCollateral || (repayingDebt && safeWithdraw))
  }
  
  // Liquidation (anyone can call if under-collateralized)
  val liquidation = {
    val underCollateralized = currentRatio < liqRatio
    
    // Liquidator must repay debt
    val debtRepaid = OUTPUTS.exists(o =>
      o.tokens.exists(t => t._1 == stableTokenId && t._2 >= debtAmount)
    )
    
    // Liquidator receives collateral at discount (e.g., 10%)
    val liquidatorBonus = 10  // 10% discount
    val liquidatorReceives = collateralErg * (100 - liquidatorBonus) / 100
    
    underCollateralized && debtRepaid
  }
  
  validOracle && (ownerAction || liquidation)
}`,
        explanation: "CDP contract with oracle-based pricing. Owner can manage position, anyone can liquidate if under-collateralized."
      },
      {
        title: "Liquidation Bot Logic",
        language: "typescript",
        code: `interface CDP {
  boxId: string;
  collateralErg: bigint;
  debtAmount: bigint;
  owner: string;
  liqRatio: number;
}

async function findLiquidatableCDPs(
  cdps: CDP[],
  ergPriceUsd: number,
  minProfitUsd: number = 10
): Promise<CDP[]> {
  return cdps.filter(cdp => {
    const collateralValue = Number(cdp.collateralErg) / 1e9 * ergPriceUsd;
    const debtValue = Number(cdp.debtAmount) / 1e6; // Assuming 6 decimals
    const ratio = collateralValue / debtValue * 100;
    
    if (ratio >= cdp.liqRatio) return false;
    
    // Calculate profit (10% liquidation bonus)
    const bonus = collateralValue * 0.10;
    return bonus >= minProfitUsd;
  });
}

async function liquidateCDP(cdp: CDP, stableTokens: bigint) {
  const tx = new TransactionBuilder(currentHeight)
    .from([cdpBox, liquidatorBox])
    .to([
      // Repay debt to protocol
      new OutputBuilder(minValue, protocolAddress)
        .addTokens({ tokenId: stableTokenId, amount: cdp.debtAmount }),
      // Liquidator receives collateral
      new OutputBuilder(cdp.collateralErg * 90n / 100n, liquidatorAddress)
    ])
    .withDataInputs([oracleBox])
    .build();
    
  return wallet.sign(tx);
}`,
        explanation: "Off-chain liquidation bot that monitors CDPs and liquidates profitable positions."
      }
    ],
    
    useCases: [
      "Stablecoin minting (like MakerDAO)",
      "Leveraged trading",
      "Yield farming collateral",
      "Self-repaying loans",
      "Credit lines"
    ],
    
    relatedPatterns: ["ergo-oracle-data-consumption", "ergo-amm-liquidity-pool", "ergo-liquidity-mining-rewards-vault"],
    
    resources: [
      { type: "doc", title: "Lending Protocols", url: "/docs/developers/defi/lending" },
      { type: "github", title: "SigmaUSD Contracts", url: "https://github.com/ergoplatform/ergo-contracts" }
    ],
    
    securityNotes: [
      "Oracle manipulation is critical risk - use multiple sources",
      "Set conservative collateral ratios (150%+)",
      "Implement circuit breakers for extreme price moves",
      "Consider flash loan attacks on liquidations",
      "Audit liquidation math thoroughly"
    ],
    
    feeConsiderations: "Liquidation transactions can be gas-intensive. Ensure liquidation bonus covers fees.",
    
    implementations: [
      { project: "SigmaUSD", description: "Algorithmic stablecoin with reserve-backed CDPs", url: "https://sigmausd.io" }
    ],
    
    publishDate: "2025-01-15"
  },

  {
    slug: "ergo-liquidity-mining-rewards-vault",
    title: "Rewards Vault & Liquidity Mining Pattern",
    shortDescription: "Time-based rewards distribution to LP stakers from a single vault",
    
    seoTitle: "Liquidity Mining on Ergo: Rewards Vault Smart Contract",
    seoDescription: "Implement liquidity mining and staking rewards on Ergo. Learn time-based reward distribution patterns for DeFi protocols.",
    keywords: ["ergo liquidity mining", "staking rewards", "rewards vault", "yield farming ergo", "lp staking"],
    
    category: "defi-primitives",
    difficulty: "advanced",
    timeToImplement: "1-2 weeks",
    
    problem: "You want to incentivize liquidity provision by distributing reward tokens to LP stakers over time.",
    
    solution: "A rewards vault holds reward tokens and distributes them proportionally to stakers based on their stake amount and duration. Uses accumulator pattern for gas efficiency.",
    
    howItWorks: [
      "Protocol deposits reward tokens into vault with emission schedule",
      "Users stake LP tokens to receive proportional rewards",
      "Reward rate = totalRewards / emissionPeriod",
      "Each staker earns: (theirStake / totalStake) * rewardRate * timeStaked",
      "Accumulator pattern tracks rewards without iterating all stakers",
      "Users can claim rewards and unstake at any time"
    ],
    
    codeExamples: [
      {
        title: "Rewards Vault Contract",
        language: "ergoscript",
        code: `{
  // Rewards Vault with accumulator pattern
  // R4: Reward per token accumulated (scaled by 1e18)
  // R5: Last update height
  // R6: Reward rate per block
  // R7: Total staked amount
  
  val vaultNFT = SELF.tokens(0)._1
  val rewardToken = SELF.tokens(1)._1
  val rewardBalance = SELF.tokens(1)._2
  
  val rewardPerToken = SELF.R4[Long].get
  val lastUpdate = SELF.R5[Int].get
  val rewardRate = SELF.R6[Long].get
  val totalStaked = SELF.R7[Long].get
  
  // Calculate new accumulated rewards
  val blocksPassed = HEIGHT - lastUpdate
  val newRewards = if (totalStaked > 0) {
    blocksPassed * rewardRate * 1000000000000000000L / totalStaked
  } else 0L
  val newRewardPerToken = rewardPerToken + newRewards
  
  // Vault continues with updated state
  val vaultContinues = {
    val newVault = OUTPUTS(0)
    newVault.tokens(0)._1 == vaultNFT &&
    newVault.R4[Long].get == newRewardPerToken &&
    newVault.R5[Int].get == HEIGHT
  }
  
  // Validate stake/unstake/claim operations
  val validOperation = {
    // Check stake boxes in data inputs for reward calculation
    // Implementation depends on staking box structure
    true
  }
  
  vaultContinues && validOperation
}`,
        explanation: "Rewards vault using accumulator pattern. Tracks rewardPerToken to calculate individual rewards without iterating all stakers."
      },
      {
        title: "Staking Box Contract",
        language: "ergoscript",
        code: `{
  // Individual staking position
  // R4: Staker public key
  // R5: Reward per token at stake time (snapshot)
  // R6: Stake height
  
  val lpToken = SELF.tokens(0)._1
  val stakedAmount = SELF.tokens(0)._2
  val staker = SELF.R4[SigmaProp].get
  val rewardPerTokenPaid = SELF.R5[Long].get
  val stakeHeight = SELF.R6[Int].get
  
  // Get current reward per token from vault
  val vaultBox = CONTEXT.dataInputs(0)
  val currentRewardPerToken = vaultBox.R4[Long].get
  
  // Calculate pending rewards
  val pendingReward = stakedAmount * 
    (currentRewardPerToken - rewardPerTokenPaid) / 1000000000000000000L
  
  // Claim rewards
  val claimRewards = {
    // Staking box continues with updated snapshot
    val newStake = OUTPUTS(0)
    newStake.tokens(0) == SELF.tokens(0) &&
    newStake.R4[SigmaProp].get == staker &&
    newStake.R5[Long].get == currentRewardPerToken &&
    
    // Staker receives rewards
    OUTPUTS.exists(o =>
      o.propositionBytes == staker.propBytes &&
      o.tokens.exists(t => t._2 >= pendingReward)
    )
  }
  
  // Unstake (claim + withdraw LP tokens)
  val unstake = {
    // Staker receives LP tokens back
    OUTPUTS.exists(o =>
      o.propositionBytes == staker.propBytes &&
      o.tokens(0)._1 == lpToken &&
      o.tokens(0)._2 >= stakedAmount
    )
  }
  
  staker && (claimRewards || unstake)
}`,
        explanation: "Individual staking position that tracks reward snapshot. Calculates pending rewards based on vault's accumulator."
      },
      {
        title: "Reward Calculation (Off-chain)",
        language: "typescript",
        code: `interface StakingPosition {
  stakedAmount: bigint;
  rewardPerTokenPaid: bigint;
  stakeHeight: number;
}

interface RewardsVault {
  rewardPerToken: bigint;
  lastUpdate: number;
  rewardRate: bigint;
  totalStaked: bigint;
}

const PRECISION = 10n ** 18n;

function calculatePendingRewards(
  position: StakingPosition,
  vault: RewardsVault,
  currentHeight: number
): bigint {
  // Update vault accumulator
  const blocksPassed = BigInt(currentHeight - vault.lastUpdate);
  const newRewards = vault.totalStaked > 0n
    ? blocksPassed * vault.rewardRate * PRECISION / vault.totalStaked
    : 0n;
  const currentRewardPerToken = vault.rewardPerToken + newRewards;
  
  // Calculate user's pending rewards
  const rewardDelta = currentRewardPerToken - position.rewardPerTokenPaid;
  return position.stakedAmount * rewardDelta / PRECISION;
}

function calculateAPR(
  vault: RewardsVault,
  rewardTokenPrice: number,
  lpTokenPrice: number
): number {
  const blocksPerYear = 262800n; // ~2 min blocks
  const yearlyRewards = vault.rewardRate * blocksPerYear;
  const yearlyRewardValue = Number(yearlyRewards) * rewardTokenPrice;
  const totalStakedValue = Number(vault.totalStaked) * lpTokenPrice;
  
  return (yearlyRewardValue / totalStakedValue) * 100;
}`,
        explanation: "Off-chain helpers for calculating pending rewards and APR display."
      }
    ],
    
    useCases: [
      "Liquidity mining programs",
      "Protocol token distribution",
      "Staking rewards",
      "Yield farming incentives",
      "Governance token distribution"
    ],
    
    relatedPatterns: ["ergo-amm-liquidity-pool", "ergo-dao-treasury-voting-pattern", "ergo-block-height-time-lock"],
    
    resources: [
      { type: "doc", title: "Staking Patterns", url: "/docs/developers/defi/staking" },
      { type: "github", title: "Yield Farming Examples", url: "https://github.com/spectrum-finance" }
    ],
    
    securityNotes: [
      "Use accumulator pattern to avoid iteration gas costs",
      "Protect against reward manipulation via flash stakes",
      "Consider minimum stake duration",
      "Audit precision and rounding",
      "Plan for reward token exhaustion"
    ],
    
    feeConsiderations: "Claiming rewards requires transaction. Consider batching claims or minimum claim amounts.",
    
    implementations: [
      { project: "Spectrum Finance", description: "LP staking rewards", url: "https://spectrum.fi" }
    ],
    
    publishDate: "2025-01-15"
  },

  // ============================================
  // 5. ORACLE INTEGRATION
  // ============================================
  {
    slug: "ergo-oracle-data-consumption",
    title: "Oracle Data Consumption (Read-Only Oracle Pattern)",
    shortDescription: "Safely read latest price/feed from an Oracle Pool inside a contract",
    
    seoTitle: "Oracle Data Consumption on Ergo: Smart Contract Price Feeds",
    seoDescription: "Learn how to consume oracle data in ErgoScript. Connect your smart contracts to real-world prices, weather, and more.",
    keywords: ["ergo oracle contract", "price feed ergo", "oracle pools", "smart contract data", "ergoscript oracle"],
    
    category: "oracle-integration",
    difficulty: "intermediate",
    timeToImplement: "2 hours",
    
    problem: "Your smart contract needs real-world data (prices, weather, sports scores) that doesn't exist on-chain.",
    
    solution: "Ergo's Oracle Pools provide decentralized data feeds stored in special boxes. Contracts read this data by including oracle boxes as data inputs (read-only, not consumed).",
    
    howItWorks: [
      "Oracle pool operators post data to a known box address",
      "Data is stored in registers (R4-R9) with timestamps",
      "Your contract includes oracle box as a data input",
      "Read values from oracle box registers",
      "Validate oracle identity via NFT and check data freshness"
    ],
    
    codeExamples: [
      {
        title: "Price Feed Consumer",
        language: "ergoscript",
        code: `{
  // Read ERG/USD price from oracle pool
  val oracleBox = CONTEXT.dataInputs(0)
  
  // Verify oracle identity (known pool NFT)
  val oracleNFT = fromBase64("ORACLE_POOL_NFT_ID")
  val validOracle = oracleBox.tokens(0)._1 == oracleNFT
  
  // Read price from R4 (nanoERG per USD, scaled)
  // Example: 500000000 = 0.5 ERG per USD = $2 per ERG
  val ergUsdPrice = oracleBox.R4[Long].get
  
  // Check data freshness (within 30 blocks = ~1 hour)
  val dataHeight = oracleBox.R5[Int].get
  val isFresh = HEIGHT - dataHeight < 30
  
  // Use price in your logic
  val collateralErg = SELF.value
  val collateralUsd = collateralErg * 1000000000L / ergUsdPrice
  val requiredUsd = 100000000L  // $100 in cents
  
  validOracle && isFresh && (collateralUsd >= requiredUsd)
}`,
        explanation: "Pattern for consuming oracle price data. Validates oracle identity via NFT, checks freshness, and uses price for collateral calculation."
      },
      {
        title: "Multi-Oracle Validation",
        language: "ergoscript",
        code: `{
  // Use multiple oracles for redundancy
  val oracle1 = CONTEXT.dataInputs(0)
  val oracle2 = CONTEXT.dataInputs(1)
  val oracle3 = CONTEXT.dataInputs(2)
  
  val oracleNFT1 = fromBase64("ORACLE_1_NFT")
  val oracleNFT2 = fromBase64("ORACLE_2_NFT")
  val oracleNFT3 = fromBase64("ORACLE_3_NFT")
  
  // Verify all oracles
  val validOracles = 
    oracle1.tokens(0)._1 == oracleNFT1 &&
    oracle2.tokens(0)._1 == oracleNFT2 &&
    oracle3.tokens(0)._1 == oracleNFT3
  
  // Get prices
  val price1 = oracle1.R4[Long].get
  val price2 = oracle2.R4[Long].get
  val price3 = oracle3.R4[Long].get
  
  // Use median (sort and take middle)
  val sorted = Coll(price1, price2, price3).sorted
  val medianPrice = sorted(1)
  
  // Check deviation (all within 5% of median)
  val maxDeviation = medianPrice * 5 / 100
  val price1Valid = abs(price1 - medianPrice) <= maxDeviation
  val price2Valid = abs(price2 - medianPrice) <= maxDeviation
  val price3Valid = abs(price3 - medianPrice) <= maxDeviation
  
  validOracles && price1Valid && price2Valid && price3Valid
}`,
        explanation: "Multi-oracle pattern for critical applications. Uses median and validates all prices are within acceptable deviation."
      },
      {
        title: "Oracle Consumer with Fleet SDK",
        language: "typescript",
        code: `import { TransactionBuilder } from "@fleet-sdk/core";

const ORACLE_NFT_ID = "...";

async function getOracleBox(): Promise<Box> {
  // Find oracle box by NFT
  const boxes = await ergo.getUnspentBoxesByTokenId(ORACLE_NFT_ID);
  if (boxes.length === 0) throw new Error("Oracle not found");
  return boxes[0];
}

async function getErgPrice(): Promise<number> {
  const oracleBox = await getOracleBox();
  const priceRaw = oracleBox.additionalRegisters.R4;
  // Decode and convert to human-readable
  const nanoErgPerUsd = BigInt(priceRaw);
  return 1e9 / Number(nanoErgPerUsd); // USD per ERG
}

async function buildTxWithOracle(
  inputs: Box[],
  outputs: OutputBuilder[]
): Promise<UnsignedTransaction> {
  const oracleBox = await getOracleBox();
  
  return new TransactionBuilder(currentHeight)
    .from(inputs)
    .to(outputs)
    .withDataInputs([oracleBox]) // Oracle as data input
    .build();
}`,
        explanation: "Off-chain helpers for finding oracle boxes and building transactions with oracle data inputs."
      }
    ],
    
    useCases: [
      "Stablecoin collateral pricing",
      "Derivatives and options",
      "Insurance contracts",
      "Prediction markets",
      "Cross-chain price verification",
      "Dynamic NFT pricing"
    ],
    
    relatedPatterns: ["ergo-oracle-pool-median-aggregation", "ergo-cdp-collateralized-loans", "ergo-amm-liquidity-pool"],
    
    resources: [
      { type: "doc", title: "Oracle Pools Documentation", url: "/docs/developers/oracles" },
      { type: "blog", title: "Oracle Pools Explained", url: "/blog/oracle-pools-explained" },
      { type: "github", title: "Oracle Pool Contracts", url: "https://github.com/ergoplatform/oracle-core" }
    ],
    
    securityNotes: [
      "Always verify oracle identity via NFT",
      "Check data freshness before use",
      "Use multiple oracles for critical applications",
      "Implement circuit breakers for extreme price movements",
      "Consider TWAP for manipulation resistance"
    ],
    
    feeConsiderations: "Data inputs don't add to transaction size fees. Oracle pools charge posting fees to data providers, not consumers.",
    
    implementations: [
      { project: "SigmaUSD", description: "Uses oracle pools for ERG/USD pricing", url: "https://sigmausd.io" },
      { project: "Spectrum Finance", description: "Oracle integration for DEX", url: "https://spectrum.fi" }
    ],
    
    publishDate: "2025-01-15"
  },

  {
    slug: "ergo-oracle-pool-median-aggregation",
    title: "Oracle Pool Aggregation & Medianization",
    shortDescription: "Build an Oracle Pool that aggregates multiple data points and publishes median",
    
    seoTitle: "Oracle Pool on Ergo: Build Decentralized Data Aggregation",
    seoDescription: "Create an Oracle Pool on Ergo that aggregates data from multiple sources and publishes median values. Complete oracle operator guide.",
    keywords: ["ergo oracle pool", "data aggregation", "median oracle", "decentralized oracle", "oracle operator"],
    
    category: "oracle-integration",
    difficulty: "advanced",
    timeToImplement: "1-2 weeks",
    
    problem: "You need to provide reliable, manipulation-resistant data feeds by aggregating multiple data sources.",
    
    solution: "Oracle pools collect data points from multiple operators, calculate median/aggregate, and publish to a single canonical box that consumers can trust.",
    
    howItWorks: [
      "Multiple oracle operators submit data points to individual boxes",
      "Each operator stakes collateral as commitment",
      "Aggregator contract collects all data points",
      "Median (or other aggregation) is calculated",
      "Result is published to canonical oracle box with pool NFT",
      "Operators who deviate significantly can be slashed"
    ],
    
    codeExamples: [
      {
        title: "Oracle Data Point Submission",
        language: "ergoscript",
        code: `{
  // Individual oracle operator submission
  // R4: Data value (e.g., price)
  // R5: Timestamp (block height)
  // R6: Operator public key
  // R7: Signature of data (for accountability)
  
  val operatorNFT = SELF.tokens(0)._1  // Operator identity
  val dataValue = SELF.R4[Long].get
  val submissionHeight = SELF.R5[Int].get
  val operatorPK = SELF.R6[SigmaProp].get
  
  // Data must be recent (within 5 blocks of current height)
  val isRecent = HEIGHT - submissionHeight < 5
  
  // Operator can update their data point
  val operatorUpdate = {
    val newBox = OUTPUTS(0)
    newBox.tokens(0)._1 == operatorNFT &&
    newBox.R5[Int].get == HEIGHT &&
    operatorPK
  }
  
  // Aggregator can consume for pool update
  val aggregatorConsume = {
    val poolBox = OUTPUTS(0)
    val poolNFT = fromBase64("ORACLE_POOL_NFT")
    poolBox.tokens(0)._1 == poolNFT
  }
  
  isRecent && (operatorUpdate || aggregatorConsume)
}`,
        explanation: "Individual operator submission box. Operators update their data points, aggregator collects them for pool update."
      },
      {
        title: "Oracle Pool Aggregation Contract",
        language: "ergoscript",
        code: `{
  // Oracle Pool - aggregates operator submissions
  val poolNFT = SELF.tokens(0)._1
  val currentValue = SELF.R4[Long].get
  val lastUpdate = SELF.R5[Int].get
  val minOperators = 3  // Minimum for valid update
  
  // Collect operator data points from inputs
  val operatorBoxes = INPUTS.filter(b => 
    b.tokens.size > 0 && 
    b.R4[Long].isDefined &&
    HEIGHT - b.R5[Int].get < 10  // Fresh data only
  )
  
  val hasEnoughOperators = operatorBoxes.size >= minOperators
  
  // Extract and sort values for median
  val values = operatorBoxes.map(b => b.R4[Long].get)
  val sortedValues = values.sorted
  val medianIndex = sortedValues.size / 2
  val medianValue = sortedValues(medianIndex)
  
  // Pool box continues with updated value
  val poolContinues = {
    val newPool = OUTPUTS(0)
    newPool.tokens(0)._1 == poolNFT &&
    newPool.R4[Long].get == medianValue &&
    newPool.R5[Int].get == HEIGHT
  }
  
  // Operator boxes are returned (not consumed permanently)
  val operatorsReturned = operatorBoxes.forall(opBox =>
    OUTPUTS.exists(o => 
      o.tokens(0)._1 == opBox.tokens(0)._1 &&
      o.value >= opBox.value
    )
  )
  
  hasEnoughOperators && poolContinues && operatorsReturned
}`,
        explanation: "Pool aggregation contract. Collects fresh operator submissions, calculates median, and updates canonical pool box."
      },
      {
        title: "Oracle Pool Operator Script",
        language: "typescript",
        code: `import { TransactionBuilder, OutputBuilder } from "@fleet-sdk/core";

interface OracleConfig {
  operatorNFT: string;
  poolNFT: string;
  dataSource: () => Promise<number>;
  updateInterval: number; // blocks
}

class OracleOperator {
  constructor(private config: OracleConfig, private wallet: Wallet) {}

  async fetchAndSubmit(): Promise<string> {
    // Fetch data from external source
    const price = await this.config.dataSource();
    const priceScaled = BigInt(Math.round(price * 1e6));
    
    // Find existing operator box
    const operatorBox = await this.findOperatorBox();
    
    // Build update transaction
    const tx = new TransactionBuilder(currentHeight)
      .from([operatorBox])
      .to(
        new OutputBuilder(operatorBox.value, operatorScript)
          .addTokens({ tokenId: this.config.operatorNFT, amount: 1n })
          .setAdditionalRegisters({
            R4: SLong(priceScaled),
            R5: SInt(currentHeight),
            R6: SSigmaProp(this.wallet.publicKey)
          })
      )
      .build();
    
    const signed = await this.wallet.sign(tx);
    return await ergo.submitTransaction(signed);
  }

  async runLoop(): Promise<void> {
    while (true) {
      try {
        const txId = await this.fetchAndSubmit();
        console.log(\`Submitted oracle update: \${txId}\`);
      } catch (e) {
        console.error(\`Oracle update failed: \${e}\`);
      }
      
      // Wait for next update interval
      await this.waitBlocks(this.config.updateInterval);
    }
  }
}

// Price source example
async function fetchErgUsdPrice(): Promise<number> {
  const response = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=ergo&vs_currencies=usd");
  const data = await response.json();
  return data.ergo.usd;
}`,
        explanation: "Oracle operator bot that fetches external data and submits to the oracle pool on a regular schedule."
      }
    ],
    
    useCases: [
      "Price feed oracles",
      "Weather data for insurance",
      "Sports scores for betting",
      "Random number generation",
      "Cross-chain data bridges"
    ],
    
    relatedPatterns: ["ergo-oracle-data-consumption", "ergo-cdp-collateralized-loans", "ergo-multisig-wallet-m-of-n"],
    
    resources: [
      { type: "doc", title: "Oracle Core", url: "/docs/developers/oracles/core" },
      { type: "github", title: "Oracle Pool Framework", url: "https://github.com/ergoplatform/oracle-core" }
    ],
    
    securityNotes: [
      "Require minimum number of operators for updates",
      "Implement slashing for malicious operators",
      "Use median to resist outlier manipulation",
      "Monitor for coordinated attacks",
      "Consider time-weighted averages for critical data"
    ],
    
    feeConsiderations: "Operators pay for submission transactions. Consider reward mechanisms to incentivize honest participation.",
    
    implementations: [
      { project: "Ergo Oracle Pools", description: "ERG/USD price feed", url: "https://explorer.ergoplatform.com" }
    ],
    
    publishDate: "2025-01-15"
  },

  // ============================================
  // 6. ERGO-NATIVE FEATURES
  // ============================================
  {
    slug: "ergo-babel-fees-box-pattern",
    title: "Babel Fee Box Pattern (Pay Fees in Any Token)",
    shortDescription: "Use Babel boxes so users pay network fees in arbitrary tokens",
    
    seoTitle: "Babel Fees on Ergo: Pay Transaction Fees in Any Token",
    seoDescription: "Implement Babel fee boxes on Ergo. Learn how users can pay network fees in any token while miners still receive ERG.",
    keywords: ["ergo babel fees", "pay fees tokens", "gas abstraction", "ux ergo", "fee payment"],
    
    category: "ergo-native",
    difficulty: "intermediate",
    timeToImplement: "2-4 hours",
    
    problem: "Users hold tokens but no ERG. They can't transact because they can't pay network fees.",
    
    solution: "Babel fee boxes allow third parties (arbitrageurs) to pay ERG fees in exchange for tokens. Users include a Babel box offering tokens for ERG, and anyone can fulfill it.",
    
    howItWorks: [
      "User creates a Babel fee box: offers X tokens for Y ERG",
      "User's main transaction references Babel box",
      "Arbitrageur sees opportunity: provides ERG, takes tokens",
      "Transaction executes with ERG fees paid by arbitrageur",
      "User's tokens are exchanged for the fee payment",
      "Miners receive ERG as normal - no protocol changes needed"
    ],
    
    codeExamples: [
      {
        title: "Babel Fee Box Contract",
        language: "ergoscript",
        code: `{
  // Babel Fee Box: offers tokens for ERG
  // R4: Token ID being offered
  // R5: Token amount offered
  // R6: ERG amount requested
  // R7: User's address (for any leftover)
  
  val offeredTokenId = SELF.R4[Coll[Byte]].get
  val offeredAmount = SELF.R5[Long].get
  val requestedErg = SELF.R6[Long].get
  val userAddress = SELF.R7[Coll[Byte]].get
  
  // Verify box has the offered tokens
  val hasTokens = SELF.tokens(0)._1 == offeredTokenId &&
                  SELF.tokens(0)._2 >= offeredAmount
  
  // Babel box can be consumed if:
  // 1. User receives the requested ERG, OR
  // 2. User cancels (returns tokens to self)
  
  val fulfilled = {
    // User receives ERG
    OUTPUTS.exists(o =>
      o.propositionBytes == userAddress &&
      o.value >= requestedErg
    )
  }
  
  val cancelled = {
    // User gets tokens back
    OUTPUTS.exists(o =>
      o.propositionBytes == userAddress &&
      o.tokens(0)._1 == offeredTokenId &&
      o.tokens(0)._2 >= offeredAmount
    )
  }
  
  hasTokens && (fulfilled || cancelled)
}`,
        explanation: "Babel fee box offers tokens in exchange for ERG. Anyone can fulfill by providing ERG, or the user can cancel."
      },
      {
        title: "Creating Babel Fee Box",
        language: "typescript",
        code: `import { TransactionBuilder, OutputBuilder } from "@fleet-sdk/core";

interface BabelFeeParams {
  tokenId: string;
  tokenAmount: bigint;
  ergRequested: bigint;
  userAddress: string;
}

async function createBabelFeeBox(params: BabelFeeParams): Promise<Box> {
  // User creates Babel box offering tokens for ERG
  const babelBox = new OutputBuilder(
    1000000n, // Minimum ERG for box
    babelFeeScript
  )
    .addTokens({ tokenId: params.tokenId, amount: params.tokenAmount })
    .setAdditionalRegisters({
      R4: SColl(SByte, hexToBytes(params.tokenId)),
      R5: SLong(params.tokenAmount),
      R6: SLong(params.ergRequested),
      R7: SColl(SByte, addressToBytes(params.userAddress))
    });
  
  const tx = new TransactionBuilder(currentHeight)
    .from(userInputs)
    .to(babelBox)
    .sendChangeTo(params.userAddress)
    .payMinFee()
    .build();
  
  const signed = await wallet.sign(tx);
  await ergo.submitTransaction(signed);
  
  return babelBox;
}

// User's main transaction references Babel box
async function buildTxWithBabelFee(
  mainInputs: Box[],
  mainOutputs: OutputBuilder[],
  babelBox: Box
): Promise<UnsignedTransaction> {
  // Transaction includes Babel box as input
  // Arbitrageur will add ERG input and claim tokens
  return new TransactionBuilder(currentHeight)
    .from([...mainInputs, babelBox])
    .to(mainOutputs)
    .build();
}`,
        explanation: "Creating a Babel fee box and building transactions that use it. The Babel box is included as an input."
      },
      {
        title: "Babel Fee Arbitrageur Bot",
        language: "typescript",
        code: `interface BabelOpportunity {
  babelBox: Box;
  tokenId: string;
  tokenAmount: bigint;
  ergRequested: bigint;
  profitMargin: number;
}

async function findBabelOpportunities(): Promise<BabelOpportunity[]> {
  // Scan mempool and unspent boxes for Babel fee boxes
  const babelBoxes = await ergo.getUnspentBoxesByErgoTree(BABEL_SCRIPT_HASH);
  
  const opportunities: BabelOpportunity[] = [];
  
  for (const box of babelBoxes) {
    const tokenId = box.additionalRegisters.R4;
    const tokenAmount = box.additionalRegisters.R5;
    const ergRequested = box.additionalRegisters.R6;
    
    // Get current market price for token
    const tokenPrice = await getTokenPrice(tokenId);
    const tokenValueErg = tokenAmount * tokenPrice;
    
    // Calculate profit margin
    const profit = tokenValueErg - ergRequested;
    const margin = Number(profit) / Number(ergRequested);
    
    if (margin > 0.01) { // 1% minimum profit
      opportunities.push({
        babelBox: box,
        tokenId,
        tokenAmount,
        ergRequested,
        profitMargin: margin
      });
    }
  }
  
  return opportunities.sort((a, b) => b.profitMargin - a.profitMargin);
}

async function fulfillBabelBox(opp: BabelOpportunity): Promise<string> {
  const tx = new TransactionBuilder(currentHeight)
    .from([opp.babelBox, ...arbitrageurErgBoxes])
    .to([
      // User receives requested ERG
      new OutputBuilder(opp.ergRequested, userAddress),
      // Arbitrageur receives tokens
      new OutputBuilder(minBoxValue, arbitrageurAddress)
        .addTokens({ tokenId: opp.tokenId, amount: opp.tokenAmount })
    ])
    .sendChangeTo(arbitrageurAddress)
    .payMinFee()
    .build();
  
  const signed = await wallet.sign(tx);
  return await ergo.submitTransaction(signed);
}`,
        explanation: "Arbitrageur bot that finds profitable Babel fee opportunities and fulfills them."
      }
    ],
    
    useCases: [
      "Onboarding users with only tokens",
      "Token-only wallets and dApps",
      "Gasless transactions for end users",
      "Improved UX for token transfers",
      "Fee abstraction layer"
    ],
    
    relatedPatterns: ["ergo-storage-rent-aware-contracts", "ergo-cross-chain-atomic-swap", "ergo-amm-liquidity-pool"],
    
    resources: [
      { type: "doc", title: "Babel Fees Guide", url: "/docs/developers/babel-fees" },
      { type: "blog", title: "Babel Fees Explained", url: "/blog/babel-fees" }
    ],
    
    securityNotes: [
      "Set reasonable exchange rates to attract arbitrageurs",
      "Consider slippage in volatile markets",
      "Babel boxes can be front-run - use appropriate rates",
      "Include cancellation option for users"
    ],
    
    feeConsiderations: "Users pay in tokens at a premium over ERG. Arbitrageurs profit from the spread. No protocol-level changes needed.",
    
    implementations: [
      { project: "Nautilus Wallet", description: "Babel fee support in wallet", url: "https://nautilus.io" }
    ],
    
    publishDate: "2025-01-15"
  },

  {
    slug: "ergo-storage-rent-aware-contracts",
    title: "Storage-Rent Aware Contract (Long-Lived State)",
    shortDescription: "Design contracts that survive storage rent: state refresh and rent safety",
    
    seoTitle: "Storage Rent Aware Contracts on Ergo: Long-Lived State Design",
    seoDescription: "Build contracts that survive Ergo's storage rent. Learn state refresh patterns, rent-safe design, and long-lived box management.",
    keywords: ["ergo storage rent", "long lived state", "rent aware", "state management", "box lifecycle"],
    
    category: "ergo-native",
    difficulty: "intermediate",
    timeToImplement: "2-4 hours",
    
    problem: "Ergo's storage rent can consume boxes after ~4 years if not maintained. Long-lived contracts need to survive rent collection.",
    
    solution: "Design contracts with rent awareness: sufficient ERG reserves, refresh mechanisms, and state recreation patterns. Anyone can refresh a box to reset the rent timer.",
    
    howItWorks: [
      "Ergo charges ~0.14 ERG/byte per 4 years for storage",
      "Boxes below minimum value can be collected by miners after rent period",
      "Refresh = spend and recreate box with same state (resets timer)",
      "Anyone can refresh (no signature needed if state preserved)",
      "Keep sufficient ERG reserves for multiple rent periods",
      "Design state to be recoverable if box is collected"
    ],
    
    codeExamples: [
      {
        title: "Rent-Aware State Box",
        language: "ergoscript",
        code: `{
  // State box that anyone can refresh
  val stateNFT = SELF.tokens(0)._1  // Unique identifier
  val stateData = SELF.R4[Coll[Byte]].get
  val lastRefresh = SELF.R5[Int].get
  
  // Minimum ERG to survive rent (conservative estimate)
  val minRentReserve = 10000000L  // 0.01 ERG
  
  // State operations by owner
  val ownerPK = SELF.R6[SigmaProp].get
  val ownerUpdate = {
    val newState = OUTPUTS(0)
    newState.tokens(0)._1 == stateNFT &&
    newState.value >= minRentReserve &&
    ownerPK
  }
  
  // Anyone can refresh (preserves state, resets rent timer)
  val anyoneRefresh = {
    val refreshedBox = OUTPUTS(0)
    
    // State must be preserved exactly
    val statePreserved = 
      refreshedBox.tokens(0)._1 == stateNFT &&
      refreshedBox.R4[Coll[Byte]].get == stateData &&
      refreshedBox.R6[SigmaProp].get == ownerPK &&
      refreshedBox.propositionBytes == SELF.propositionBytes
    
    // Value must be maintained or increased
    val valueOk = refreshedBox.value >= SELF.value
    
    // Update refresh timestamp
    val timestampUpdated = refreshedBox.R5[Int].get == HEIGHT
    
    statePreserved && valueOk && timestampUpdated
  }
  
  ownerUpdate || anyoneRefresh
}`,
        explanation: "State box that anyone can refresh without owner's signature. Preserves state exactly while resetting rent timer."
      },
      {
        title: "Rent Reserve Calculator",
        language: "typescript",
        code: `// Storage rent constants
const RENT_PERIOD_BLOCKS = 1051200; // ~4 years at 2 min/block
const RENT_PER_BYTE = 1250000n; // nanoERG per byte per period
const MIN_BOX_VALUE = 1000000n; // 0.001 ERG minimum

interface BoxSizeEstimate {
  baseSize: number;      // Fixed overhead
  registersSize: number; // R4-R9 data
  tokensSize: number;    // Token entries
}

function estimateBoxSize(estimate: BoxSizeEstimate): number {
  return estimate.baseSize + estimate.registersSize + estimate.tokensSize;
}

function calculateRentReserve(
  boxSize: number,
  periodsToSurvive: number = 3
): bigint {
  const rentPerPeriod = BigInt(boxSize) * RENT_PER_BYTE;
  const totalReserve = rentPerPeriod * BigInt(periodsToSurvive);
  
  // Ensure above minimum box value
  return totalReserve > MIN_BOX_VALUE ? totalReserve : MIN_BOX_VALUE;
}

// Example: Calculate reserve for a typical state box
const stateBoxSize = estimateBoxSize({
  baseSize: 100,        // Base box overhead
  registersSize: 200,   // State data in registers
  tokensSize: 40        // One NFT token
});

const reserve = calculateRentReserve(stateBoxSize, 3);
console.log(\`Reserve needed: \${Number(reserve) / 1e9} ERG\`);`,
        explanation: "Calculate ERG reserves needed for a box to survive multiple rent periods."
      },
      {
        title: "Automatic Refresh Service",
        language: "typescript",
        code: `interface RefreshableBox {
  boxId: string;
  lastRefresh: number;
  value: bigint;
  estimatedSize: number;
}

async function findBoxesNeedingRefresh(): Promise<RefreshableBox[]> {
  const rentPeriod = 1051200; // blocks
  const refreshThreshold = rentPeriod * 0.75; // Refresh at 75% of period
  
  const stateBoxes = await getTrackedStateBoxes();
  
  return stateBoxes.filter(box => {
    const blocksSinceRefresh = currentHeight - box.lastRefresh;
    return blocksSinceRefresh > refreshThreshold;
  });
}

async function refreshBox(box: RefreshableBox): Promise<string> {
  const currentBox = await ergo.getBox(box.boxId);
  
  // Build refresh transaction (anyone can do this)
  const tx = new TransactionBuilder(currentHeight)
    .from([currentBox])
    .to(
      new OutputBuilder(currentBox.value, currentBox.ergoTree)
        .addTokens(currentBox.assets)
        .setAdditionalRegisters({
          ...currentBox.additionalRegisters,
          R5: SInt(currentHeight) // Update refresh timestamp
        })
    )
    .payMinFee()
    .build();
  
  const signed = await wallet.sign(tx);
  return await ergo.submitTransaction(signed);
}

// Run refresh service
async function refreshService(): Promise<void> {
  while (true) {
    const boxesToRefresh = await findBoxesNeedingRefresh();
    
    for (const box of boxesToRefresh) {
      try {
        const txId = await refreshBox(box);
        console.log(\`Refreshed box \${box.boxId}: \${txId}\`);
      } catch (e) {
        console.error(\`Failed to refresh \${box.boxId}: \${e}\`);
      }
    }
    
    // Check every hour
    await sleep(3600000);
  }
}`,
        explanation: "Automatic refresh service that monitors state boxes and refreshes them before rent collection."
      }
    ],
    
    useCases: [
      "Long-lived protocol state",
      "DAO treasuries and governance",
      "Oracle pool boxes",
      "DEX liquidity pools",
      "NFT collections with metadata"
    ],
    
    relatedPatterns: ["ergo-dao-treasury-voting-pattern", "ergo-oracle-pool-median-aggregation", "ergo-amm-liquidity-pool"],
    
    resources: [
      { type: "doc", title: "Storage Rent", url: "/docs/developers/storage-rent" },
      { type: "blog", title: "Storage Rent Explained", url: "/blog/storage-rent" }
    ],
    
    securityNotes: [
      "Always keep sufficient ERG reserves",
      "Design state to be recoverable if collected",
      "Consider community-run refresh services",
      "Monitor box ages and refresh proactively",
      "Test rent scenarios on testnet"
    ],
    
    feeConsiderations: "Refresh transactions cost standard fees. Budget for periodic refreshes (~1 per year minimum).",
    
    publishDate: "2025-01-15"
  },

  {
    slug: "ergo-crowdfunding-assurance-contract",
    title: "Crowdfunding / Assurance Contract Pattern",
    shortDescription: "On-chain crowdfunding where contributors are refunded if target is not reached",
    
    seoTitle: "Crowdfunding on Ergo: Assurance Contract Smart Contract",
    seoDescription: "Build crowdfunding campaigns on Ergo with automatic refunds. Learn the assurance contract pattern for trustless fundraising.",
    keywords: ["ergo crowdfunding", "assurance contract", "fundraising ergo", "refund mechanism", "crowdfund smart contract"],
    
    category: "ergo-native",
    difficulty: "intermediate",
    timeToImplement: "4-8 hours",
    
    problem: "You want to raise funds for a project, but contributors need assurance they'll get refunds if the goal isn't met.",
    
    solution: "Assurance contracts collect contributions into a shared box. If the funding goal is reached before deadline, funds go to the project. Otherwise, contributors can claim refunds.",
    
    howItWorks: [
      "Project creates campaign box with goal, deadline, and recipient",
      "Contributors add funds to campaign (tracked via tokens or registers)",
      "Each contribution creates a refund token for the contributor",
      "If goal reached: recipient can claim all funds",
      "If deadline passes without goal: contributors claim refunds with tokens",
      "Refund tokens are burned on claim"
    ],
    
    codeExamples: [
      {
        title: "Campaign Box Contract",
        language: "ergoscript",
        code: `{
  // Crowdfunding campaign box
  // R4: Funding goal (nanoERG)
  // R5: Deadline (block height)
  // R6: Project recipient address
  // R7: Refund token ID
  
  val fundingGoal = SELF.R4[Long].get
  val deadline = SELF.R5[Int].get
  val recipient = SELF.R6[Coll[Byte]].get
  val refundTokenId = SELF.R7[Coll[Byte]].get
  
  val currentFunds = SELF.value
  val goalReached = currentFunds >= fundingGoal
  val deadlinePassed = HEIGHT > deadline
  
  // Success: goal reached, recipient claims
  val successClaim = {
    goalReached &&
    OUTPUTS(0).propositionBytes == recipient &&
    OUTPUTS(0).value >= fundingGoal
  }
  
  // Add contribution (before deadline)
  val addContribution = {
    !deadlinePassed &&
    OUTPUTS(0).propositionBytes == SELF.propositionBytes &&
    OUTPUTS(0).value > SELF.value &&
    OUTPUTS(0).R4[Long].get == fundingGoal &&
    OUTPUTS(0).R5[Int].get == deadline
  }
  
  // Refund claim (deadline passed, goal not reached)
  val refundClaim = {
    deadlinePassed && !goalReached &&
    // Refund token burned in this transaction
    INPUTS.exists(i => 
      i.tokens.exists(t => t._1 == refundTokenId)
    )
  }
  
  successClaim || addContribution || refundClaim
}`,
        explanation: "Campaign box that accepts contributions, allows success claim if goal met, or refunds if deadline passes."
      },
      {
        title: "Contribution with Refund Token",
        language: "ergoscript",
        code: `{
  // Refund token box - proves contribution for refund
  // R4: Campaign box ID
  // R5: Contribution amount
  // R6: Contributor address
  
  val campaignId = SELF.R4[Coll[Byte]].get
  val contributionAmount = SELF.R5[Long].get
  val contributor = SELF.R6[Coll[Byte]].get
  
  val refundTokenId = SELF.tokens(0)._1
  
  // Refund claim: burn token, receive contribution back
  val claimRefund = {
    // Campaign must have failed (deadline passed, goal not reached)
    val campaignBox = CONTEXT.dataInputs(0)
    val deadline = campaignBox.R5[Int].get
    val goal = campaignBox.R4[Long].get
    val campaignFunds = campaignBox.value
    
    val campaignFailed = HEIGHT > deadline && campaignFunds < goal
    
    // Contributor receives refund
    val refundReceived = OUTPUTS.exists(o =>
      o.propositionBytes == contributor &&
      o.value >= contributionAmount
    )
    
    // Token is burned (not in outputs)
    val tokenBurned = !OUTPUTS.exists(o =>
      o.tokens.exists(t => t._1 == refundTokenId)
    )
    
    campaignFailed && refundReceived && tokenBurned
  }
  
  claimRefund
}`,
        explanation: "Refund token that proves contribution. Can be burned to claim refund if campaign fails."
      },
      {
        title: "Campaign Interaction Flow",
        language: "typescript",
        code: `interface Campaign {
  boxId: string;
  goal: bigint;
  deadline: number;
  recipient: string;
  refundTokenId: string;
  currentFunds: bigint;
}

async function contribute(
  campaign: Campaign,
  amount: bigint,
  contributorAddress: string
): Promise<{ txId: string; refundTokenBox: Box }> {
  // Mint refund token for contributor
  const refundTokenMint = new OutputBuilder(minBoxValue, refundTokenScript)
    .mintToken({ amount: 1n, name: \`Refund-\${campaign.boxId.slice(0, 8)}\` })
    .setAdditionalRegisters({
      R4: SColl(SByte, hexToBytes(campaign.boxId)),
      R5: SLong(amount),
      R6: SColl(SByte, addressToBytes(contributorAddress))
    });
  
  // Add to campaign
  const updatedCampaign = new OutputBuilder(
    campaign.currentFunds + amount,
    campaignScript
  ).setAdditionalRegisters({
    R4: SLong(campaign.goal),
    R5: SInt(campaign.deadline),
    R6: SColl(SByte, addressToBytes(campaign.recipient)),
    R7: SColl(SByte, hexToBytes(campaign.refundTokenId))
  });
  
  const tx = new TransactionBuilder(currentHeight)
    .from([campaignBox, contributorInputs])
    .to([updatedCampaign, refundTokenMint])
    .sendChangeTo(contributorAddress)
    .payMinFee()
    .build();
  
  const signed = await wallet.sign(tx);
  const txId = await ergo.submitTransaction(signed);
  
  return { txId, refundTokenBox: refundTokenMint };
}

async function claimRefund(
  campaign: Campaign,
  refundTokenBox: Box
): Promise<string> {
  const contributionAmount = refundTokenBox.additionalRegisters.R5 as bigint;
  const contributor = refundTokenBox.additionalRegisters.R6;
  
  const tx = new TransactionBuilder(currentHeight)
    .from([refundTokenBox, campaignBox])
    .withDataInputs([campaignBox])
    .to(
      new OutputBuilder(contributionAmount, contributor)
    )
    .sendChangeTo(contributor)
    .payMinFee()
    .build();
  
  const signed = await wallet.sign(tx);
  return await ergo.submitTransaction(signed);
}`,
        explanation: "Full contribution and refund flow using the crowdfunding contracts."
      }
    ],
    
    useCases: [
      "Project fundraising",
      "Community initiatives",
      "Charity campaigns",
      "Product pre-orders",
      "DAO treasury bootstrapping"
    ],
    
    relatedPatterns: ["ergo-block-height-time-lock", "ergo-dao-treasury-voting-pattern", "ergo-onchain-auction-pattern"],
    
    resources: [
      { type: "doc", title: "Crowdfunding Contracts", url: "/docs/developers/contracts/crowdfunding" },
      { type: "blog", title: "Assurance Contracts", url: "/blog/assurance-contracts" }
    ],
    
    securityNotes: [
      "Set realistic deadlines and goals",
      "Test refund mechanism thoroughly",
      "Consider partial funding scenarios",
      "Protect against griefing attacks",
      "Audit token minting and burning logic"
    ],
    
    feeConsiderations: "Contributors pay for contribution tx. Refund claims also require fees. Consider fee reserves.",
    
    implementations: [
      { project: "Ergo Raffle", description: "Raffle-style crowdfunding", url: "https://ergoraffle.com" }
    ],
    
    publishDate: "2025-01-15"
  },

  {
    slug: "ergo-onchain-auction-pattern",
    title: "On-Chain Auction Pattern (English Auction on eUTXO)",
    shortDescription: "Time-bounded auctions with bids as boxes, automatic winner settlement",
    
    seoTitle: "On-Chain Auctions on Ergo: English Auction Smart Contract",
    seoDescription: "Build decentralized auctions on Ergo. Learn the English auction pattern with automatic settlement and refunds.",
    keywords: ["ergo auction smart contract", "on-chain auction", "nft auction ergo", "english auction", "decentralized auction"],
    
    category: "ergo-native",
    difficulty: "advanced",
    timeToImplement: "1-2 weeks",
    
    problem: "You want to sell an asset to the highest bidder without trusting a centralized auction house.",
    
    solution: "English auction on eUTXO: the auction box holds the asset, bids are separate boxes. Highest bid at deadline wins. Outbid bidders can reclaim their funds. Winner receives asset, seller receives payment.",
    
    howItWorks: [
      "Seller creates auction box with asset, minimum bid, and deadline",
      "Bidders create bid boxes with their offer amount",
      "Each new highest bid must exceed previous by minimum increment",
      "Previous highest bidder can reclaim their bid",
      "At deadline: highest bidder wins",
      "Winner claims asset, seller claims winning bid",
      "Unsettled bids can be reclaimed after deadline"
    ],
    
    codeExamples: [
      {
        title: "Auction Box Contract",
        language: "ergoscript",
        code: `{
  // Auction box holding the asset
  // R4: Minimum bid (nanoERG)
  // R5: Minimum increment
  // R6: Deadline (block height)
  // R7: Seller address
  // R8: Current highest bid amount
  // R9: Current highest bidder address
  
  val auctionNFT = SELF.tokens(0)._1  // Auction identifier
  val assetToken = SELF.tokens(1)     // Asset being auctioned
  
  val minBid = SELF.R4[Long].get
  val minIncrement = SELF.R5[Long].get
  val deadline = SELF.R6[Int].get
  val seller = SELF.R7[Coll[Byte]].get
  val currentBid = SELF.R8[Long].get
  val currentBidder = SELF.R9[Coll[Byte]].get
  
  val auctionActive = HEIGHT <= deadline
  val auctionEnded = HEIGHT > deadline
  
  // Place new bid (must be higher than current)
  val placeBid = {
    auctionActive &&
    
    val newAuction = OUTPUTS(0)
    val newBidAmount = newAuction.R8[Long].get
    val newBidder = newAuction.R9[Coll[Byte]].get
    
    // New bid must exceed current by minimum increment
    val validBidAmount = newBidAmount >= currentBid + minIncrement
    
    // Auction continues with updated bid
    val auctionContinues = 
      newAuction.tokens(0)._1 == auctionNFT &&
      newAuction.tokens(1) == assetToken &&
      newAuction.R4[Long].get == minBid &&
      newAuction.R5[Long].get == minIncrement &&
      newAuction.R6[Int].get == deadline &&
      newAuction.R7[Coll[Byte]].get == seller
    
    // Previous bidder gets refund (if there was one)
    val previousBidderRefunded = currentBid == 0 || OUTPUTS.exists(o =>
      o.propositionBytes == currentBidder &&
      o.value >= currentBid
    )
    
    validBidAmount && auctionContinues && previousBidderRefunded
  }
  
  // Settle auction (after deadline)
  val settleAuction = {
    auctionEnded && currentBid > 0 &&
    
    // Winner receives asset
    val winnerReceivesAsset = OUTPUTS.exists(o =>
      o.propositionBytes == currentBidder &&
      o.tokens.exists(t => t._1 == assetToken._1)
    )
    
    // Seller receives payment
    val sellerReceivesPayment = OUTPUTS.exists(o =>
      o.propositionBytes == seller &&
      o.value >= currentBid
    )
    
    winnerReceivesAsset && sellerReceivesPayment
  }
  
  // Cancel auction (seller, if no bids)
  val cancelAuction = {
    currentBid == 0 &&
    OUTPUTS.exists(o =>
      o.propositionBytes == seller &&
      o.tokens.exists(t => t._1 == assetToken._1)
    )
  }
  
  placeBid || settleAuction || cancelAuction
}`,
        explanation: "Full English auction contract. Handles bidding, automatic refunds to outbid bidders, and final settlement."
      },
      {
        title: "Bid Placement",
        language: "typescript",
        code: `interface Auction {
  boxId: string;
  assetTokenId: string;
  minBid: bigint;
  minIncrement: bigint;
  deadline: number;
  seller: string;
  currentBid: bigint;
  currentBidder: string | null;
}

async function placeBid(
  auction: Auction,
  bidAmount: bigint,
  bidderAddress: string
): Promise<string> {
  // Validate bid
  const minValidBid = auction.currentBid > 0n
    ? auction.currentBid + auction.minIncrement
    : auction.minBid;
  
  if (bidAmount < minValidBid) {
    throw new Error(\`Bid must be at least \${minValidBid}\`);
  }
  
  const auctionBox = await ergo.getBox(auction.boxId);
  
  const outputs: OutputBuilder[] = [
    // Updated auction box
    new OutputBuilder(auctionBox.value, auctionScript)
      .addTokens(auctionBox.assets)
      .setAdditionalRegisters({
        R4: SLong(auction.minBid),
        R5: SLong(auction.minIncrement),
        R6: SInt(auction.deadline),
        R7: SColl(SByte, addressToBytes(auction.seller)),
        R8: SLong(bidAmount),
        R9: SColl(SByte, addressToBytes(bidderAddress))
      })
  ];
  
  // Refund previous bidder if exists
  if (auction.currentBidder && auction.currentBid > 0n) {
    outputs.push(
      new OutputBuilder(auction.currentBid, auction.currentBidder)
    );
  }
  
  const tx = new TransactionBuilder(currentHeight)
    .from([auctionBox, ...bidderInputs])
    .to(outputs)
    .sendChangeTo(bidderAddress)
    .payMinFee()
    .build();
  
  const signed = await wallet.sign(tx);
  return await ergo.submitTransaction(signed);
}

async function settleAuction(auction: Auction): Promise<string> {
  if (currentHeight <= auction.deadline) {
    throw new Error("Auction not ended yet");
  }
  
  const auctionBox = await ergo.getBox(auction.boxId);
  
  const tx = new TransactionBuilder(currentHeight)
    .from([auctionBox])
    .to([
      // Winner receives asset
      new OutputBuilder(minBoxValue, auction.currentBidder!)
        .addTokens({ tokenId: auction.assetTokenId, amount: 1n }),
      // Seller receives payment
      new OutputBuilder(auction.currentBid, auction.seller)
    ])
    .payMinFee()
    .build();
  
  const signed = await wallet.sign(tx);
  return await ergo.submitTransaction(signed);
}`,
        explanation: "Off-chain bid placement and settlement logic for the auction contract."
      }
    ],
    
    useCases: [
      "NFT auctions",
      "Token sales",
      "Domain name auctions",
      "Rare item sales",
      "Liquidation auctions"
    ],
    
    relatedPatterns: ["ergo-nft-minting-guide", "ergo-block-height-time-lock", "ergo-crowdfunding-assurance-contract"],
    
    resources: [
      { type: "doc", title: "Auction Contracts", url: "/docs/developers/contracts/auctions" },
      { type: "github", title: "ErgoAuctions", url: "https://github.com/ergoplatform/ergo-contracts" }
    ],
    
    securityNotes: [
      "Ensure automatic refunds for outbid bidders",
      "Set reasonable minimum increments",
      "Consider sniping protection (extend deadline on late bids)",
      "Audit settlement logic thoroughly",
      "Handle edge cases (no bids, single bid)"
    ],
    
    feeConsiderations: "Each bid requires transaction. Settlement requires transaction. Budget accordingly.",
    
    implementations: [
      { project: "ErgoAuctions", description: "NFT auction house", url: "https://ergoauctions.org" },
      { project: "SkyHarbor", description: "NFT marketplace with auctions", url: "https://skyharbor.io" }
    ],
    
    publishDate: "2025-01-15"
  },

  // ============================================
  // 7. PRIVACY & SIGMA PROTOCOLS
  // ============================================
  {
    slug: "ergo-privacy-one-time-address",
    title: "Privacy-Friendly One-Time Receive Pattern",
    shortDescription: "Generate one-time addresses/boxes for better transaction graph privacy",
    
    seoTitle: "One-Time Addresses on Ergo: Privacy-Friendly Receive Pattern",
    seoDescription: "Implement one-time addresses on Ergo for enhanced privacy. Learn stealth receive patterns to break transaction graph linkability.",
    keywords: ["ergo privacy pattern", "one-time address", "stealth address ergo", "privacy receive", "transaction privacy"],
    
    category: "privacy-sigma",
    difficulty: "intermediate",
    timeToImplement: "2-4 hours",
    
    problem: "Reusing addresses links all your transactions together, reducing privacy. Anyone can see your full transaction history.",
    
    solution: "Generate unique one-time addresses for each receive. Using Diffie-Hellman key exchange, sender creates a box only the receiver can spend, without revealing the receiver's main address.",
    
    howItWorks: [
      "Receiver publishes a public key (or derives from main address)",
      "Sender generates ephemeral keypair for this transaction",
      "Sender computes shared secret via ECDH",
      "Sender creates box spendable by derived one-time key",
      "Receiver scans blockchain for boxes they can spend",
      "Receiver derives private key from shared secret to spend"
    ],
    
    codeExamples: [
      {
        title: "One-Time Address Generation",
        language: "ergoscript",
        code: `{
  // One-time receive box
  // R4: Ephemeral public key (sender's temporary key)
  // R5: Encrypted memo (optional)
  
  // The box is spendable by the one-time key derived from:
  // oneTimePrivKey = receiverPrivKey * hash(sharedSecret)
  // sharedSecret = ECDH(ephemeralPriv, receiverPub)
  //              = ECDH(receiverPriv, ephemeralPub)
  
  val ephemeralPubKey = SELF.R4[GroupElement].get
  
  // The proposition is a standard proveDlog
  // but the public key is the one-time derived key
  // Receiver computes: oneTimePub = receiverPub * hash(sharedSecret)
  
  proveDlog(oneTimePubKey)
}`,
        explanation: "One-time receive box. The spending key is derived from shared secret, only computable by the intended receiver."
      },
      {
        title: "One-Time Address Protocol",
        language: "typescript",
        code: `import { Point } from "@noble/secp256k1";
import { sha256 } from "@noble/hashes/sha256";

interface OneTimeAddress {
  oneTimePubKey: Point;
  ephemeralPubKey: Point;
  sharedSecretHash: Uint8Array;
}

// Sender side: create one-time address for receiver
function createOneTimeAddress(receiverPubKey: Point): OneTimeAddress {
  // Generate ephemeral keypair
  const ephemeralPrivKey = randomBytes(32);
  const ephemeralPubKey = Point.BASE.multiply(BigInt("0x" + bytesToHex(ephemeralPrivKey)));
  
  // Compute shared secret via ECDH
  const sharedPoint = receiverPubKey.multiply(BigInt("0x" + bytesToHex(ephemeralPrivKey)));
  const sharedSecret = sharedPoint.toRawBytes();
  const sharedSecretHash = sha256(sharedSecret);
  
  // Derive one-time public key
  // oneTimePub = receiverPub + G * hash(sharedSecret)
  const hashScalar = BigInt("0x" + bytesToHex(sharedSecretHash));
  const derivedPoint = Point.BASE.multiply(hashScalar);
  const oneTimePubKey = receiverPubKey.add(derivedPoint);
  
  return { oneTimePubKey, ephemeralPubKey, sharedSecretHash };
}

// Receiver side: derive private key to spend
function deriveOneTimePrivKey(
  receiverPrivKey: Uint8Array,
  ephemeralPubKey: Point
): Uint8Array {
  // Compute shared secret
  const sharedPoint = ephemeralPubKey.multiply(BigInt("0x" + bytesToHex(receiverPrivKey)));
  const sharedSecret = sharedPoint.toRawBytes();
  const sharedSecretHash = sha256(sharedSecret);
  
  // Derive one-time private key
  // oneTimePriv = receiverPriv + hash(sharedSecret)
  const receiverScalar = BigInt("0x" + bytesToHex(receiverPrivKey));
  const hashScalar = BigInt("0x" + bytesToHex(sharedSecretHash));
  const oneTimePrivScalar = (receiverScalar + hashScalar) % Point.ORDER;
  
  return hexToBytes(oneTimePrivScalar.toString(16).padStart(64, "0"));
}

// Receiver: scan for incoming payments
async function scanForPayments(
  receiverPrivKey: Uint8Array,
  receiverPubKey: Point
): Promise<Box[]> {
  const allBoxes = await ergo.getUnspentBoxes();
  const myBoxes: Box[] = [];
  
  for (const box of allBoxes) {
    if (!box.additionalRegisters.R4) continue;
    
    try {
      const ephemeralPubKey = decodeGroupElement(box.additionalRegisters.R4);
      const oneTimePrivKey = deriveOneTimePrivKey(receiverPrivKey, ephemeralPubKey);
      const oneTimePubKey = Point.BASE.multiply(BigInt("0x" + bytesToHex(oneTimePrivKey)));
      
      // Check if this box is spendable by our derived key
      const boxPubKey = extractPubKeyFromErgoTree(box.ergoTree);
      if (oneTimePubKey.equals(boxPubKey)) {
        myBoxes.push(box);
      }
    } catch {
      // Not our box
    }
  }
  
  return myBoxes;
}`,
        explanation: "Complete one-time address protocol. Sender creates unique address, receiver scans and derives spending key."
      },
      {
        title: "Sending to One-Time Address",
        language: "typescript",
        code: `async function sendToOneTimeAddress(
  receiverPubKey: Point,
  amount: bigint,
  memo?: string
): Promise<string> {
  // Create one-time address
  const { oneTimePubKey, ephemeralPubKey } = createOneTimeAddress(receiverPubKey);
  
  // Build ErgoTree for one-time key
  const oneTimeErgoTree = buildProveDlogTree(oneTimePubKey);
  
  // Create output with ephemeral key in R4
  const output = new OutputBuilder(amount, oneTimeErgoTree)
    .setAdditionalRegisters({
      R4: SGroupElement(ephemeralPubKey),
      R5: memo ? SColl(SByte, stringToBytes(memo)) : undefined
    });
  
  const tx = new TransactionBuilder(currentHeight)
    .from(senderInputs)
    .to(output)
    .sendChangeTo(senderAddress)
    .payMinFee()
    .build();
  
  const signed = await wallet.sign(tx);
  return await ergo.submitTransaction(signed);
}

// Spending from one-time address
async function spendOneTimeBox(
  box: Box,
  receiverPrivKey: Uint8Array,
  destinationAddress: string
): Promise<string> {
  const ephemeralPubKey = decodeGroupElement(box.additionalRegisters.R4);
  const oneTimePrivKey = deriveOneTimePrivKey(receiverPrivKey, ephemeralPubKey);
  
  const tx = new TransactionBuilder(currentHeight)
    .from([box])
    .to(new OutputBuilder(box.value - txFee, destinationAddress))
    .payMinFee()
    .build();
  
  // Sign with derived one-time key
  const signed = signWithPrivateKey(tx, oneTimePrivKey);
  return await ergo.submitTransaction(signed);
}`,
        explanation: "Sending to and spending from one-time addresses. Breaks transaction graph linkability."
      }
    ],
    
    useCases: [
      "Private donations",
      "Salary payments",
      "Merchant payments",
      "Anonymous tips",
      "Privacy-preserving invoices"
    ],
    
    relatedPatterns: ["ergo-sigma-or-access-control", "ergo-babel-fees-box-pattern"],
    
    resources: [
      { type: "doc", title: "Privacy on Ergo", url: "/docs/developers/privacy" },
      { type: "blog", title: "Stealth Addresses", url: "/blog/stealth-addresses" },
      { type: "github", title: "ErgoMixer", url: "https://github.com/ergoMixer/ergoMixBack" }
    ],
    
    securityNotes: [
      "Store receiver private key securely",
      "Scan regularly for incoming payments",
      "Consider timing attacks when spending",
      "Use with mixing for enhanced privacy",
      "Ephemeral keys must be truly random"
    ],
    
    feeConsiderations: "Standard transaction fees. Scanning requires indexing or full node access.",
    
    implementations: [
      { project: "ErgoMixer", description: "Privacy-focused wallet features", url: "https://ergomixer.com" }
    ],
    
    publishDate: "2025-01-15"
  }
];

// Helper functions
export function getPatternBySlug(slug: string): DevPattern | undefined {
  return devPatterns.find(p => p.slug === slug);
}

export function getPatternsByCategory(category: PatternCategory): DevPattern[] {
  return devPatterns.filter(p => p.category === category);
}

export function getPatternsByDifficulty(difficulty: PatternDifficulty): DevPattern[] {
  return devPatterns.filter(p => p.difficulty === difficulty);
}

export function getAllCategories(): PatternCategory[] {
  return [...new Set(devPatterns.map(p => p.category))];
}

export function searchPatterns(query: string): DevPattern[] {
  const lowerQuery = query.toLowerCase();
  return devPatterns.filter(p => 
    p.title.toLowerCase().includes(lowerQuery) ||
    p.shortDescription.toLowerCase().includes(lowerQuery) ||
    p.keywords.some(k => k.toLowerCase().includes(lowerQuery))
  );
}
