/**
 * Type-safe translations
 * 
 * This file provides type definitions for translations.
 * Types are inferred from the English translation files.
 */

// Import all English translation files for type inference
import blog from '../../messages/en/blog.json';
import common from '../../messages/en/common.json';
import community from '../../messages/en/community.json';
import compare from '../../messages/en/compare.json';
import contentHubs from '../../messages/en/content-hubs.json';
import developers from '../../messages/en/developers.json';
import ecosystem from '../../messages/en/ecosystem.json';
import events from '../../messages/en/events.json';
import faq from '../../messages/en/faq.json';
import hodlers from '../../messages/en/hodlers.json';
import home from '../../messages/en/home.json';
import infographics from '../../messages/en/infographics.json';
import learn from '../../messages/en/learn.json';
import manifesto from '../../messages/en/manifesto.json';
import miners from '../../messages/en/miners.json';
import newsletter from '../../messages/en/newsletter.json';
import seo from '../../messages/en/seo.json';
import start from '../../messages/en/start.json';
import technology from '../../messages/en/technology.json';
import use from '../../messages/en/use.json';
import wallet from '../../messages/en/wallet.json';

// Merge all translations into a single type for type inference
type AllMessages = typeof common 
  & typeof home 
  & typeof miners 
  & typeof hodlers 
  & typeof wallet 
  & typeof ecosystem 
  & typeof faq 
  & typeof learn 
  & typeof technology 
  & typeof start 
  & typeof developers 
  & typeof use 
  & typeof blog 
  & typeof seo 
  & typeof community 
  & typeof contentHubs 
  & typeof infographics 
  & typeof manifesto 
  & typeof compare 
  & typeof newsletter 
  & typeof events;

// Export the messages type
export type Messages = AllMessages;

// Type for translation keys
export type TranslationKey = keyof Messages;

// Namespace types for specific sections
export type CommonMessages = typeof common;
export type HomeMessages = typeof home;
export type MinersMessages = typeof miners;
export type HodlersMessages = typeof hodlers;
export type WalletMessages = typeof wallet;
export type EcosystemMessages = typeof ecosystem;
export type FaqMessages = typeof faq;
export type LearnMessages = typeof learn;
export type TechnologyMessages = typeof technology;
export type StartMessages = typeof start;
export type DevelopersMessages = typeof developers;
export type UseMessages = typeof use;
export type BlogMessages = typeof blog;
export type SeoMessages = typeof seo;
export type CommunityMessages = typeof community;
export type ContentHubsMessages = typeof contentHubs;
export type InfographicsMessages = typeof infographics;
export type ManifestoMessages = typeof manifesto;
export type CompareMessages = typeof compare;
export type NewsletterMessages = typeof newsletter;
export type EventsMessages = typeof events;

// For next-intl type safety
declare module 'next-intl' {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  interface IntlMessages extends Messages {}
}

