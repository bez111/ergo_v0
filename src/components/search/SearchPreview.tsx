"use client";

/* eslint-disable @typescript-eslint/no-unused-vars, react-hooks/set-state-in-effect */

import React, { useState, useEffect } from 'react';
import { X, ExternalLink, Copy, Eye, EyeOff, ChevronLeft, ChevronRight, Check } from 'lucide-react';

interface SearchPreviewProps {
  data: {
    title: string;
    url: string;
    section: string;
    content: string;
    tags: string[];
  };
  onClose: () => void;
}

export function SearchPreview({ data, onClose }: SearchPreviewProps) {
  const [previewContent, setPreviewContent] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const [showFullContent, setShowFullContent] = useState(false);
  const [copied, setCopied] = useState(false);
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  // Fetch preview content when data changes
  useEffect(() => {
    if (!data) return;

    setIsLoading(true);
    
    // Simulate fetching content (in real implementation, this would fetch the actual page content)
    setTimeout(() => {
      const mockContent = `
# ${data.title}

This is a preview of the ${data.title} page. Here you can see what the page contains before deciding to visit it.

## Key Features

- **Feature 1**: Description of the first key feature
- **Feature 2**: Description of the second key feature  
- **Feature 3**: Description of the third key feature

## Code Example

\`\`\`typescript
// Example code snippet
function example() {
  return "This is an example";
}
\`\`\`

## ErgoScript Example

\`\`\`ergoscript
// ErgoScript contract example
val contract = {
  sigmaProp(true)
}
\`\`\`

## Related Topics

- Related topic 1
- Related topic 2
- Related topic 3

This preview shows you exactly what you'll find on this page, helping you decide if it's what you're looking for.
      `;
      
      setPreviewContent(mockContent);
      setIsLoading(false);
    }, 300);
  }, [data]);

  const copyToClipboard = async () => {
    if (!data) return;
    
    try {
      await navigator.clipboard.writeText(data.url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const copyCodeToClipboard = async (code: string) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedCode(code);
      setTimeout(() => setCopiedCode(null), 2000);
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  };

  const visitPage = () => {
    if (data) {
      window.open(data.url, '_blank');
      onClose();
    }
  };

  if (!data) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/80 backdrop-blur-sm">
      <div className="w-full max-w-4xl mx-4 bg-neutral-900 border border-neutral-700 rounded-xl shadow-2xl max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-neutral-700">
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="p-2 hover:bg-neutral-800 rounded-lg transition-colors"
            >
              <X className="w-5 h-5 text-gray-400" />
            </button>
            <div>
              <h2 className="text-lg font-semibold text-white">{data.title}</h2>
              <p className="text-sm text-gray-400">{data.section}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowFullContent(!showFullContent)}
              className="flex items-center gap-2 px-3 py-2 text-sm bg-neutral-800 text-gray-300 rounded-lg hover:bg-neutral-700 transition-colors"
            >
              {showFullContent ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              {showFullContent ? 'Compact' : 'Full'}
            </button>
            
            <button
              onClick={copyToClipboard}
              className={`flex items-center gap-2 px-3 py-2 text-sm rounded-lg transition-colors ${
                copied 
                  ? 'bg-green-600 text-white' 
                  : 'bg-neutral-800 text-gray-300 hover:bg-neutral-700'
              }`}
            >
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              {copied ? 'Copied!' : 'Copy Link'}
            </button>
            
            <button
              onClick={visitPage}
              className="flex items-center gap-2 px-4 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              Visit Page
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-hidden">
          {isLoading ? (
            <div className="flex items-center justify-center p-12">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-cyan-400"></div>
              <span className="ml-3 text-gray-400">Loading preview...</span>
            </div>
          ) : (
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {data.tags.slice(0, 5).map(tag => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs bg-neutral-800 text-gray-300 rounded"
                  >
                    {tag}
                  </span>
                ))}
                {data.tags.length > 5 && (
                  <span className="px-2 py-1 text-xs bg-neutral-800 text-gray-400 rounded">
                    +{data.tags.length - 5}
                  </span>
                )}
              </div>

              {/* Preview Content */}
              <div className="prose prose-invert prose-sm max-w-none">
                <div 
                  className="markdown-content"
                  dangerouslySetInnerHTML={{
                    __html: previewContent
                      .split('\n')
                      .map(line => {
                        if (line.startsWith('# ')) {
                          return `<h1 class="text-xl font-bold text-white mb-4">${line.substring(2)}</h1>`;
                        }
                        if (line.startsWith('## ')) {
                          return `<h2 class="text-lg font-semibold text-white mb-3 mt-6">${line.substring(3)}</h2>`;
                        }
                        if (line.startsWith('- **')) {
                          return `<li class="text-gray-300 mb-1"><strong>${line.substring(3, line.indexOf('**', 3))}</strong>${line.substring(line.indexOf('**', 3) + 2)}</li>`;
                        }
                        if (line.startsWith('- ')) {
                          return `<li class="text-gray-300 mb-1">${line.substring(2)}</li>`;
                        }
                        if (line.includes('```')) {
                          const codeContent = line.replace(/```\w*\n?/, '').replace(/```$/, '');
                          const isCopied = copiedCode === codeContent;
                          return `
                            <div class="relative bg-neutral-800 p-4 rounded-lg overflow-x-auto my-4">
                              <button 
                                onclick="copyCode('${codeContent.replace(/'/g, "\\'")}')"
                                class="absolute top-2 right-2 p-1 hover:bg-neutral-700 rounded transition-colors ${isCopied ? 'text-green-400' : 'text-gray-400'}"
                                title="Copy code"
                              >
                                ${isCopied ? '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>' : '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>'}
                              </button>
                              <code class="text-cyan-300">${codeContent}</code>
                            </div>
                          `;
                        }
                        if (line.trim() === '') {
                          return '<br>';
                        }
                        return `<p class="text-gray-300 mb-3">${line}</p>`;
                      })
                      .join('')
                  }}
                />
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between mt-8 pt-6 border-t border-neutral-700">
                <div className="flex items-center gap-4">
                  <button className="flex items-center gap-2 px-3 py-2 text-sm bg-neutral-800 text-gray-300 rounded-lg hover:bg-neutral-700 transition-colors">
                    <ChevronLeft className="w-4 h-4" />
                    Previous
                  </button>
                  <button className="flex items-center gap-2 px-3 py-2 text-sm bg-neutral-800 text-gray-300 rounded-lg hover:bg-neutral-700 transition-colors">
                    Next
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
                
                <div className="text-sm text-gray-400">
                  Press <kbd className="px-2 py-1 bg-neutral-800 rounded text-xs">Esc</kbd> to close
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Global script for code copying */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.copyCode = function(code) {
              navigator.clipboard.writeText(code).then(() => {
                // Trigger re-render to show copied state
                window.dispatchEvent(new CustomEvent('codeCopied', { detail: code }));
              });
            }
          `
        }}
      />
    </div>
  );
} 