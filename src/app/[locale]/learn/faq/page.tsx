import { redirect } from "next/navigation"

/**
 * Redirect /learn/faq to /faq?level=technical
 * The unified FAQ page now handles both beginner and technical questions
 */
export default function LearnFAQRedirect() {
  redirect("/faq?level=technical")
}
