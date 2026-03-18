/**
 * HTML sanitization utilities
 * Server-safe implementation without external dependencies
 */

const ALLOWED_TAGS = new Set([
  'b', 'i', 'em', 'strong', 'a', 'p', 'br', 'ul', 'ol', 'li',
  'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'span', 'div', 'code', 'pre',
  'blockquote', 'img', 'table', 'thead', 'tbody', 'tr', 'th', 'td',
  'sup', 'sub', 'small', 'mark', 'del', 'ins', 'hr', 'figure', 'figcaption',
]);

const ALLOWED_ATTRS = new Set([
  'href', 'src', 'alt', 'title', 'class', 'id', 'target', 'rel',
  'width', 'height', 'loading', 'decoding',
]);

const DANGEROUS_PROTOCOLS = /^\s*(javascript|vbscript|data):/i;

/**
 * Strip all HTML tags except allowed ones and sanitize attributes
 */
function basicSanitize(html: string): string {
  // Remove script/style tags and their content entirely
  let cleaned = html.replace(/<script[\s\S]*?<\/script>/gi, '');
  cleaned = cleaned.replace(/<style[\s\S]*?<\/style>/gi, '');

  // Remove event handler attributes (onclick, onerror, etc.)
  cleaned = cleaned.replace(/\s+on\w+\s*=\s*(?:"[^"]*"|'[^']*'|[^\s>]*)/gi, '');

  // Remove dangerous protocol URLs from href/src
  cleaned = cleaned.replace(/(href|src)\s*=\s*(?:"([^"]*)"|'([^']*)')/gi, (match, attr, dq, sq) => {
    const url = dq ?? sq ?? '';
    if (DANGEROUS_PROTOCOLS.test(url)) {
      return '';
    }
    return match;
  });

  // Strip disallowed tags but keep their content
  cleaned = cleaned.replace(/<\/?([a-z][a-z0-9]*)\b[^>]*>/gi, (match, tag) => {
    if (ALLOWED_TAGS.has(tag.toLowerCase())) {
      // Remove disallowed attributes from allowed tags
      return match.replace(/\s+([a-z\-]+)\s*=\s*(?:"[^"]*"|'[^']*'|[^\s>]*)/gi, (attrMatch, attrName) => {
        if (ALLOWED_ATTRS.has(attrName.toLowerCase())) {
          return attrMatch;
        }
        return '';
      });
    }
    return '';
  });

  return cleaned;
}

/**
 * Validate and sanitize JSON-LD content
 */
function validateJsonLd(jsonString: string): string {
  try {
    const parsed = JSON.parse(jsonString);
    // Re-serialize to strip any non-JSON content
    return JSON.stringify(parsed);
  } catch {
    return '{}';
  }
}

/**
 * Safely sanitize HTML content
 */
export function sanitizeHtml(html: string): string {
  return basicSanitize(html);
}

/**
 * Safely sanitize JSON-LD content for script tags
 */
export function sanitizeJsonLd(jsonString: string): string {
  return validateJsonLd(jsonString);
}

/**
 * Create safe HTML object for dangerouslySetInnerHTML
 */
export function createSafeHtml(html: string): { __html: string } {
  return { __html: sanitizeHtml(html) };
}

/**
 * Create safe JSON-LD object for dangerouslySetInnerHTML
 */
export function createSafeJsonLd(jsonString: string): { __html: string } {
  return { __html: sanitizeJsonLd(jsonString) };
}
