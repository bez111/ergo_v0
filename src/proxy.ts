import createMiddleware from 'next-intl/middleware';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { routing } from './i18n/routing';

const intlProxy = createMiddleware(routing);
const localeHeaderName = 'X-NEXT-INTL-LOCALE';
const internalLocaleRewriteHeader = 'X-ERGO-INTERNAL-LOCALE-REWRITE';
const agentHubHosts = new Set([
  'agents.ergoblockchain.org',
]);
const localePrefixes = new Set([
  'en', 'ru', 'zh-cn', 'zh-tw',
  'tr', 'ko-kr', 'es', 'pt-br',
  'ja', 'de', 'fr', 'it',
]);
const legacyRouteRedirects = new Map<string, string>([
  ['/blog/agent-economy-live-proof-site-update', '/blog/ergo-live-proof-surface-agent-economy'],
  ['/blog/assurance-contracts', '/patterns/ergo-crowdfunding-assurance-contract'],
  ['/blog/cross-chain-swaps', '/patterns/ergo-cross-chain-atomic-swap'],
  ['/blog/deflationary-tokens', '/patterns/ergo-token-burning-supply-control'],
  ['/blog/stealth-addresses', '/patterns/ergo-privacy-one-time-address'],
  ['/blog/vesting-contracts', '/patterns/ergo-block-height-time-lock'],
  ['/compare/ergo-vs-ethereum-classic', '/compare/ergo-vs-ethereum'],
  ['/compare/ergo-vs-vc-chain', '/compare/ergo-vs-vc-chains'],
  ['/ecosystem/financial', '/docs/ecosystem/financial'],
  ['/ecosystem/market', '/ergo-watch'],
  ['/ecosystem/partnerships', '/ecosystem'],
  ['/ecosystem/spectrum', '/ecosystem/spectrum-finance'],
  ['/infographics/storage-rent-vs-state-bloat-ergo', '/infographics/ergo-storage-rent-preventing-blockchain-bloat-rewarding-miners'],
  ['/learn/glossary/registers', '/learn/glossary/boxes'],
  ['/learn/glossary/utxo', '/learn/glossary/eutxo'],
  ['/miners-calculator', '/miners'],
  ['/miners-pools', '/miners'],
  ['/patterns/amm-contracts', '/patterns/ergo-amm-liquidity-pool'],
  ['/patterns/liquidity-pool', '/patterns/ergo-amm-liquidity-pool'],
  ['/patterns/multi-signature', '/patterns/ergo-multisig-wallet-m-of-n'],
  ['/patterns/ring-signatures', '/patterns/ergo-privacy-one-time-address'],
  ['/patterns/stealth-addresses', '/patterns/ergo-privacy-one-time-address'],
  ['/patterns/time-locked-contracts', '/patterns/ergo-block-height-time-lock'],
  ['/playbooks/defi-developer', '/playbooks/build-defi-on-ergo'],
  ['/playbooks/privacy-developer', '/playbooks/private-transaction-ergomixer'],
  ['/playbooks/smart-contract-developer', '/patterns'],
  ['/start/mining', '/miners'],
  ['/technology/ergomixer', '/use/privacy'],
  ['/technology/sigma-protocols', '/technology/privacy-features'],
  ['/topics/ergo-tokenomics', '/topics/ergo-sustainability'],
  ['/topics/ergoscript', '/topics/ergo-technology'],
  ['/topics/eutxo', '/topics/ergo-technology'],
  ['/topics/privacy', '/topics/ergo-privacy'],
  ['/topics/technology', '/topics/ergo-technology'],
  ['/use/guides', '/use'],
  ['/use/storage-rent', '/technology/storage-rent'],
  ['/экосистема', '/ecosystem'],
]);

export function proxy(request: NextRequest) {
  const host = normalizeHost(request.headers.get('host'));
  const path = request.nextUrl.pathname;

  if (request.headers.get(internalLocaleRewriteHeader) === '1') {
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set(localeHeaderName, routing.defaultLocale);
    return NextResponse.next({ request: { headers: requestHeaders } });
  }

  const agentHubPath = getAgentHubPath(path);
  if (agentHubHosts.has(host) && agentHubPath) {
    const url = request.nextUrl.clone();
    url.pathname = agentHubPath;
    return NextResponse.rewrite(url);
  }

  const legacyRedirectPath = getLegacyRedirectPath(path);
  if (legacyRedirectPath) {
    const url = request.nextUrl.clone();
    url.pathname = legacyRedirectPath;
    return NextResponse.redirect(url, 308);
  }

  const currentPath = normalizePathname(request.nextUrl.pathname);
  const firstSegment = currentPath.split('/').filter(Boolean)[0];
  if (firstSegment && localePrefixes.has(firstSegment)) {
    return intlProxy(request);
  }

  const url = request.nextUrl.clone();
  url.pathname = currentPath === '/' ? '/en' : `/en${currentPath}`;
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set(localeHeaderName, routing.defaultLocale);
  requestHeaders.set(internalLocaleRewriteHeader, '1');
  return NextResponse.rewrite(url, { request: { headers: requestHeaders } });
}

function getAgentHubPath(pathname: string): string | null {
  const normalized = normalizePathname(pathname);
  if (normalized === '/') return '/en/agent-economy/live';

  const parts = normalized.split('/').filter(Boolean);
  const maybeLocale = parts[0];
  if (maybeLocale && localePrefixes.has(maybeLocale) && parts.length === 1) {
    return `/${maybeLocale}/agent-economy/live`;
  }

  const locale = maybeLocale && localePrefixes.has(maybeLocale) ? maybeLocale : 'en';
  const routeParts = maybeLocale && localePrefixes.has(maybeLocale) ? parts.slice(1) : parts;
  const route = `/${routeParts.join('/')}`;
  const aliases = new Map<string, string>([
    ['/start', '/agent-economy/start'],
    ['/live', '/agent-economy/live'],
    ['/launch-kit', '/agent-economy/launch-kit'],
    ['/proofs', '/agent-economy/proofs'],
    ['/roadmap', '/agent-economy/roadmap'],
    ['/registry', '/agents/registry'],
    ['/publish', '/agents/publish'],
    ['/jobs', '/jobs'],
    ['/accept', '/jobs/accept'],
    ['/ergo-connect', '/build/ergo-connect'],
    ['/sage-widget', '/agent-economy/sage-widget'],
    ['/wallet-agent', '/agent-economy/wallet-agent'],
    ['/wallet-agent-runner', '/build/agent-payments/wallet-agent-runner'],
    ['/policy-playground', '/build/agent-payments/policy-playground'],
    ['/runner', '/build/agent-payments/wallet-agent-runner'],
    ['/trust', '/agent-economy/trust'],
    ['/review-pack', '/agent-economy/review-pack'],
    ['/quickstart', '/build/agent-payments/quickstart'],
    ['/playground', '/build/playground'],
    ['/services', '/build/services'],
  ]);
  const target = aliases.get(route);
  if (target) return `/${locale}${target}`;

  return null;
}

function normalizeHost(value: string | null): string {
  if (!value) return '';
  if (value.startsWith('[')) {
    const end = value.indexOf(']');
    return end >= 0 ? value.slice(1, end).toLowerCase() : value.toLowerCase();
  }
  return value.split(':')[0]?.toLowerCase() ?? '';
}

function getLegacyRedirectPath(pathname: string): string | null {
  const normalized = normalizePathname(pathname);
  const parts = normalized.split('/').filter(Boolean);
  const maybeLocale = parts[0];
  const locale = maybeLocale && localePrefixes.has(maybeLocale) ? maybeLocale : null;
  const route = locale ? `/${parts.slice(1).join('/')}` : normalized;
  const target = legacyRouteRedirects.get(route);

  if (!target) return null;
  return locale ? `/${locale}${target}` : target;
}

function normalizePathname(pathname: string): string {
  if (pathname !== '/' && pathname.endsWith('/')) {
    return pathname.slice(0, -1);
  }
  return pathname;
}

export const config = {
  // Match app routes while excluding APIs, Next internals, Vercel internals,
  // admin routes, and static assets with file extensions.
  matcher: [
    '/((?!api|admin|_next|_vercel|.*\\..*).*)'
  ]
};
