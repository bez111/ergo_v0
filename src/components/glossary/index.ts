// Manual glossary linking
export { GlossaryLink, GlossaryTooltip } from './GlossaryLink';

// Automatic glossary linking (text-only)
export { 
  AutoGlossaryText, 
  AutoGlossaryParagraph,
  withAutoGlossary,
  useAutoGlossary,
  parseTextForGlossaryTerms,
  findGlossaryTermsInText,
  isGlossaryTerm,
  getGlossaryTermByText,
} from './AutoGlossary';

// Rich text / React children auto-linking
export {
  GlossaryRichText,
  GlossaryArticle,
  NoGlossary,
} from './GlossaryRichText';
