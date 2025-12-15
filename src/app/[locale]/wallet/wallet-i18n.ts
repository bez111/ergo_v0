/**
 * Wallet page i18n adapter
 * Merges translations from messages/*.json with base data from _data.ts
 */

import {
WalletData,
wallets as baseWallets,
} from './_data';

// Translation types
export interface WalletTranslation {
  name?: string;
  description?: string;
  features?: string[];
}

export interface WalletsTranslations {
  wallets?: Record<string, WalletTranslation>;
}

// Localization functions
export function getLocalizedWallets(translations?: WalletsTranslations): WalletData[] {
  if (!translations?.wallets) return baseWallets;
  
  return baseWallets.map(wallet => {
    const tr = translations.wallets?.[wallet.id];
    if (!tr) return wallet;
    
    return {
      ...wallet,
      name: tr.name ?? wallet.name,
      description: tr.description ?? wallet.description,
      features: tr.features ?? wallet.features,
    };
  });
}

export function getLocalizedWalletById(
  id: string,
  translations?: WalletsTranslations
): WalletData | undefined {
  const wallet = baseWallets.find(w => w.id === id);
  if (!wallet) return undefined;
  
  if (!translations?.wallets?.[id]) return wallet;
  
  const tr = translations.wallets[id];
  return {
    ...wallet,
    name: tr.name ?? wallet.name,
    description: tr.description ?? wallet.description,
    features: tr.features ?? wallet.features,
  };
}

