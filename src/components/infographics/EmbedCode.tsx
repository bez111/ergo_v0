'use client';

import { useState } from 'react';
import { Copy, Code, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { InfographicMeta } from '@/types/infographic';

interface EmbedCodeProps {
  infographic: InfographicMeta;
}

export function EmbedCode({ infographic }: EmbedCodeProps) {
  const [activeTab, setActiveTab] = useState<'html' | 'markdown'>('html');
  const [copied, setCopied] = useState(false);

  const baseUrl = 'https://ergoblockchain.org';
  const infographicUrl = `${baseUrl}/infographics/${infographic.slug}?utm_source=embed&utm_medium=referral`;
  const imageUrl = `${baseUrl}${infographic.fullImageUrl}`;

  const htmlCode = `<a href="${infographicUrl}" target="_blank" rel="noopener noreferrer">
  <img
    src="${imageUrl}"
    alt="${infographic.imageAlt}"
    style="max-width:100%; height:auto; border:0;"
    loading="lazy"
  />
</a>
<p style="font-size:12px; color:#888;">
  Source: <a href="${infographicUrl}" target="_blank" rel="noopener noreferrer">ergoblockchain.org</a>
</p>`;

  const markdownCode = `[![${infographic.imageAlt}](${imageUrl})](${infographicUrl})

_Source: [ergoblockchain.org](${infographicUrl})_`;

  const currentCode = activeTab === 'html' ? htmlCode : markdownCode;

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(currentCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy code:', err);
      const textArea = document.createElement('textarea');
      textArea.value = currentCode;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="space-y-4">
      {/* Usage Guidelines block above the embed card */}
      <div className="bg-orange-400/10 border border-orange-400/20 rounded-lg p-4">
        <h4 className="text-orange-400 font-medium text-sm mb-2">Usage Guidelines</h4>
        <ul className="text-neutral-300 text-sm space-y-1">
          <li>• You can use this infographic in presentations, blog posts, or educational materials</li>
          <li>• Please keep the attribution link to ergoblockchain.org</li>
          <li>• For custom branding or editable files, contact the Ergo community</li>
        </ul>
      </div>

      <Card className="bg-black/60 border-white/10">
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-orange-400/20 rounded-xl flex items-center justify-center">
              <Code className="h-5 w-5 text-orange-400" />
            </div>
            <div>
              <CardTitle className="text-white text-xl">Embed this infographic</CardTitle>
              <p className="text-neutral-400 text-sm mt-1">
                Copy the code below to use this infographic in your blog or website.
                <br />
                Please keep the link to ergoblockchain.org.
              </p>
            </div>
          </div>
        </CardHeader>

        <CardContent className="space-y-4">
          {/* Tab buttons */}
          <div className="flex gap-2">
            <Button
              variant={activeTab === 'html' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setActiveTab('html')}
              className={activeTab === 'html' ? 'bg-orange-400 text-black hover:bg-orange-500' : 'border-white/20 text-white hover:bg-white/10'}
            >
              HTML
            </Button>
            <Button
              variant={activeTab === 'markdown' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setActiveTab('markdown')}
              className={activeTab === 'markdown' ? 'bg-orange-400 text-black hover:bg-orange-500' : 'border-white/20 text-white hover:bg-white/10'}
            >
              Markdown
            </Button>
          </div>

          {/* Code block (full width) */}
          <div className="relative">
            <pre className="bg-black/80 border border-white/20 rounded-lg p-4 text-sm text-neutral-300 overflow-x-auto">
              <code>{currentCode}</code>
            </pre>

            {/* Copy button */}
            <Button
              variant="ghost"
              size="sm"
              onClick={copyToClipboard}
              className="absolute top-2 right-2 text-neutral-400 hover:text-white"
            >
              {copied ? (
                <>
                  <Check className="h-4 w-4 mr-1" />
                  Copied!
                </>
              ) : (
                <>
                  <Copy className="h-4 w-4 mr-1" />
                  Copy
                </>
              )}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

