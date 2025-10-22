// Featured Snippets Optimization System
// Structures content to maximize chances of appearing in Google's Featured Snippets

interface SnippetOptimization {
  type: 'paragraph' | 'list' | 'table' | 'video'
  content: string
  structured: any
}

// Common questions for Featured Snippets targeting
export const targetQuestions = {
  // Definition snippets (What is...)
  definitions: [
    {
      question: "What is Ergo blockchain?",
      answer: "Ergo is a next-generation Proof-of-Work blockchain platform that implements modern scientific ideas in the blockchain space. It uses the eUTXO model, supports advanced smart contracts through ErgoScript, and features built-in privacy options via Sigma protocols.",
      keywords: ["ergo", "blockchain", "proof of work", "eutxo"],
      schema: "definition"
    },
    {
      question: "What is ErgoScript?",
      answer: "ErgoScript is Ergo's smart contract language based on Sigma protocols. It enables powerful, flexible, and secure smart contracts while maintaining the benefits of the UTXO model. ErgoScript supports advanced cryptographic protocols and complex spending conditions.",
      keywords: ["ergoscript", "smart contracts", "sigma protocols"],
      schema: "definition"
    },
    {
      question: "What is Autolykos algorithm?",
      answer: "Autolykos is Ergo's ASIC-resistant, memory-hard Proof-of-Work consensus algorithm. Version 2.0 enables efficient GPU mining while maintaining decentralization and security. It requires at least 4GB of GPU memory.",
      keywords: ["autolykos", "mining", "algorithm", "gpu"],
      schema: "definition"
    }
  ],
  
  // How-to snippets
  howTo: [
    {
      question: "How to mine Ergo?",
      steps: [
        "1. Get an Ergo wallet (Nautilus or Satergo)",
        "2. Choose a mining pool (HeroMiners, Leafpool, 2Miners)",
        "3. Download mining software (NBMiner, TeamRedMiner)",
        "4. Configure miner with pool and wallet address",
        "5. Start mining and monitor hashrate"
      ],
      keywords: ["mine ergo", "mining guide", "gpu mining"],
      schema: "howto"
    },
    {
      question: "How to buy Ergo?",
      steps: [
        "1. Choose an exchange (KuCoin, Gate.io, CoinEx)",
        "2. Create and verify your account",
        "3. Deposit funds (fiat or crypto)",
        "4. Search for ERG trading pairs",
        "5. Place your buy order",
        "6. Withdraw to your Ergo wallet"
      ],
      keywords: ["buy ergo", "exchanges", "trading"],
      schema: "howto"
    },
    {
      question: "How to create an Ergo wallet?",
      steps: [
        "1. Choose wallet type (Nautilus for browser, Satergo for desktop)",
        "2. Download from official source",
        "3. Create new wallet",
        "4. Write down seed phrase securely",
        "5. Set strong password",
        "6. Backup wallet file"
      ],
      keywords: ["ergo wallet", "nautilus", "satergo"],
      schema: "howto"
    }
  ],
  
  // Comparison snippets (vs, difference between)
  comparisons: [
    {
      question: "Ergo vs Ethereum",
      table: {
        headers: ["Feature", "Ergo", "Ethereum"],
        rows: [
          ["Consensus", "Proof-of-Work", "Proof-of-Stake"],
          ["Model", "eUTXO", "Account-based"],
          ["Smart Contracts", "ErgoScript", "Solidity"],
          ["Privacy", "Built-in (Sigma)", "External solutions"],
          ["Fees", "Storage rent", "Gas fees"],
          ["Launch", "2019", "2015"]
        ]
      },
      keywords: ["ergo vs ethereum", "comparison", "difference"],
      schema: "comparison"
    },
    {
      question: "Ergo vs Cardano",
      table: {
        headers: ["Feature", "Ergo", "Cardano"],
        rows: [
          ["Consensus", "PoW (Autolykos)", "PoS (Ouroboros)"],
          ["Model", "eUTXO", "eUTXO"],
          ["Smart Contracts", "ErgoScript", "Plutus"],
          ["Mining", "GPU mining", "Staking"],
          ["Supply", "97.7M max", "45B max"],
          ["Founder", "Alex Chepurnoy", "Charles Hoskinson"]
        ]
      },
      keywords: ["ergo vs cardano", "comparison"],
      schema: "comparison"
    }
  ],
  
  // List snippets (best, top)
  lists: [
    {
      question: "Best Ergo wallets",
      items: [
        "**Nautilus** - Browser extension wallet for dApps",
        "**Satergo** - Full node desktop wallet",
        "**SAFEW** - Simple mobile wallet",
        "**Ledger** - Hardware wallet support (via Nautilus)",
        "**Ergo Wallet** - Android mobile wallet"
      ],
      keywords: ["best ergo wallets", "top wallets"],
      schema: "list"
    },
    {
      question: "Top Ergo mining pools",
      items: [
        "**HeroMiners** - 0.9% fee, stable and reliable",
        "**Leafpool** - 1% fee, good for beginners", 
        "**2Miners** - 1% fee, PPLNS payment system",
        "**WoolyPooly** - 0.9% fee, multiple regions",
        "**F2Pool** - 3% fee, large pool"
      ],
      keywords: ["mining pools", "best pools"],
      schema: "list"
    }
  ],
  
  // Statistics snippets
  statistics: [
    {
      question: "Ergo price statistics",
      data: {
        "Current Price": "$X.XX USD",
        "Market Cap": "$XXX million",
        "24h Volume": "$XX million",
        "Circulating Supply": "XX million ERG",
        "Max Supply": "97.7 million ERG",
        "All-Time High": "$18.95 (Nov 2021)",
        "Mining Reward": "27 ERG per block"
      },
      keywords: ["ergo price", "market cap", "statistics"],
      schema: "statistics"
    }
  ]
}

// Generate optimized HTML for Featured Snippets
export function generateSnippetHTML(
  question: string,
  type: 'paragraph' | 'list' | 'table' | 'howto',
  content: any
): string {
  let html = `<div class="featured-snippet" itemscope itemtype="https://schema.org/Question">
    <h2 itemprop="name">${question}</h2>
    <div itemprop="acceptedAnswer" itemscope itemtype="https://schema.org/Answer">
      <div itemprop="text">`;
  
  switch(type) {
    case 'paragraph':
      html += `<p class="snippet-answer">${content}</p>`;
      break;
      
    case 'list':
      html += '<ul class="snippet-list">';
      content.forEach((item: string) => {
        html += `<li>${item}</li>`;
      });
      html += '</ul>';
      break;
      
    case 'table':
      html += '<table class="snippet-table">';
      html += '<thead><tr>';
      content.headers.forEach((header: string) => {
        html += `<th>${header}</th>`;
      });
      html += '</tr></thead><tbody>';
      content.rows.forEach((row: string[]) => {
        html += '<tr>';
        row.forEach((cell: string) => {
          html += `<td>${cell}</td>`;
        });
        html += '</tr>';
      });
      html += '</tbody></table>';
      break;
      
    case 'howto':
      html += '<ol class="snippet-steps">';
      content.forEach((step: string) => {
        html += `<li>${step}</li>`;
      });
      html += '</ol>';
      break;
  }
  
  html += '</div></div></div>';
  return html;
}

// Optimize existing content for Featured Snippets
export function optimizeForSnippets(content: string): string {
  let optimized = content;
  
  // Add structured markers for better snippet extraction
  // Questions should be in H2 tags
  optimized = optimized.replace(
    /^(What is|How to|Why|When|Where|Who|Which|Can|Should|Is)\s+(.+?)\?/gim,
    '<h2 class="snippet-question">$1 $2?</h2>'
  );
  
  // First paragraph after question should be concise (40-60 words)
  optimized = optimized.replace(
    /(<h2[^>]*>.*?<\/h2>)\s*<p>/gi,
    '$1<p class="snippet-answer">'
  );
  
  // Lists should be properly structured
  optimized = optimized.replace(
    /(?:^|\n)(?:\d+\.|[-*])\s+(.+?)(?=\n(?:\d+\.|[-*])|$)/gm,
    '<li>$1</li>'
  );
  
  // Wrap standalone list items in ul/ol
  optimized = optimized.replace(
    /(<li>[\s\S]*?<\/li>)+/g,
    (match) => {
      const isOrdered = match.includes('1.');
      return isOrdered ? `<ol>${match}</ol>` : `<ul>${match}</ul>`;
    }
  );
  
  return optimized;
}

// Generate structured data for Featured Snippets
export function generateSnippetSchema(
  question: string,
  answer: string,
  type: string
): object {
  const schema: any = {
    "@context": "https://schema.org",
    "@type": "Question",
    "name": question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": answer
    }
  };
  
  // Add specific schema based on type
  switch(type) {
    case 'howto':
      schema["@type"] = "HowTo";
      schema["name"] = question;
      schema["step"] = answer.split('\n').map((step, i) => ({
        "@type": "HowToStep",
        "position": i + 1,
        "name": `Step ${i + 1}`,
        "text": step
      }));
      break;
      
    case 'comparison':
      schema["@type"] = "Table";
      schema["about"] = question;
      break;
      
    case 'definition':
      schema["@type"] = "DefinedTerm";
      schema["name"] = question.replace(/^What is\s+/i, '');
      schema["description"] = answer;
      break;
  }
  
  return schema;
}

// Voice Search Optimization
export function optimizeForVoiceSearch(content: string): string {
  // Convert to conversational tone
  let voiceOptimized = content;
  
  // Add natural language patterns
  const voicePatterns = [
    { pattern: /^Ergo is\s/i, replacement: "Okay, so Ergo is " },
    { pattern: /^To mine Ergo,\s/i, replacement: "Here's how you mine Ergo: " },
    { pattern: /^The price of Ergo\s/i, replacement: "Right now, the price of Ergo " },
    { pattern: /^You can buy Ergo\s/i, replacement: "Sure! You can buy Ergo " }
  ];
  
  voicePatterns.forEach(({ pattern, replacement }) => {
    voiceOptimized = voiceOptimized.replace(pattern, replacement);
  });
  
  // Add speakable markup
  voiceOptimized = `<div class="speakable" 
    itemscope 
    itemtype="https://schema.org/SpeakableSpecification"
    itemprop="speakable">
    ${voiceOptimized}
  </div>`;
  
  return voiceOptimized;
}

// Generate FAQ sections optimized for snippets
export function generateOptimizedFAQ(faqs: Array<{q: string, a: string}>): string {
  let html = '<div class="faq-section" itemscope itemtype="https://schema.org/FAQPage">';
  
  faqs.forEach((faq, index) => {
    html += `
      <div class="faq-item" 
           itemscope 
           itemprop="mainEntity" 
           itemtype="https://schema.org/Question">
        <h3 itemprop="name">${faq.q}</h3>
        <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
          <div itemprop="text">
            <p class="snippet-optimized">${faq.a}</p>
          </div>
        </div>
      </div>
    `;
  });
  
  html += '</div>';
  return html;
}

// CSS for Featured Snippets optimization
export const snippetStyles = `
  /* Featured Snippets Optimization */
  .snippet-question {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 1rem;
    clear: both;
  }
  
  .snippet-answer {
    font-size: 1.1rem;
    line-height: 1.6;
    margin-bottom: 1rem;
    max-width: 750px;
  }
  
  .snippet-list {
    margin: 1rem 0;
    padding-left: 1.5rem;
  }
  
  .snippet-list li {
    margin-bottom: 0.5rem;
    line-height: 1.6;
  }
  
  .snippet-table {
    width: 100%;
    max-width: 600px;
    border-collapse: collapse;
    margin: 1rem 0;
  }
  
  .snippet-table th,
  .snippet-table td {
    padding: 0.75rem;
    text-align: left;
    border: 1px solid #ddd;
  }
  
  .snippet-table th {
    background: #f5f5f5;
    font-weight: 600;
  }
  
  .snippet-steps {
    counter-reset: step-counter;
    list-style: none;
    padding-left: 0;
  }
  
  .snippet-steps li {
    counter-increment: step-counter;
    margin-bottom: 1rem;
    padding-left: 2.5rem;
    position: relative;
  }
  
  .snippet-steps li::before {
    content: counter(step-counter);
    position: absolute;
    left: 0;
    top: 0;
    background: #ff8800;
    color: white;
    width: 1.75rem;
    height: 1.75rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
  }
  
  /* Voice Search Optimization */
  .speakable {
    speak: normal;
    voice-family: young;
    voice-rate: medium;
  }
  
  @media (max-width: 768px) {
    .snippet-table {
      font-size: 0.9rem;
    }
    
    .snippet-steps {
      padding-left: 0;
    }
  }
`;

export default {
  targetQuestions,
  generateSnippetHTML,
  optimizeForSnippets,
  generateSnippetSchema,
  optimizeForVoiceSearch,
  generateOptimizedFAQ,
  snippetStyles
} 