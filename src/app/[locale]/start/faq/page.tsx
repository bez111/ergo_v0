import { redirect } from "next/navigation"

/**
 * Redirect /start/faq to /faq?level=beginner
 * The unified FAQ page now handles both beginner and technical questions
 */
export default function StartFAQRedirect() {
  redirect("/faq?level=beginner")
}
