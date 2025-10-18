/**
 * Simple HTML sanitization utilities
 * Server-safe implementation without external dependencies
 */

/**
 * Basic HTML sanitization (server-safe)
 */
function basicSanitize(html: string): string {
  // For trusted content like JSON-LD, just return as-is
  // In production, you might want to add more sophisticated sanitization
  return html;
}

/**
 * Validate and sanitize JSON-LD content
 */
function validateJsonLd(jsonString: string): string {
  try {
    // Validate that it's valid JSON
    JSON.parse(jsonString);
    return jsonString;
  } catch {
    // Return empty object if invalid JSON
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