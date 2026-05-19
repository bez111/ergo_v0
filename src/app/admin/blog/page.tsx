import type { Metadata } from "next"
import { BlogAdminClient } from "./BlogAdminClient"

export const metadata: Metadata = {
  title: "Blog CMS Admin",
  robots: { index: false, follow: false },
}

export default function BlogAdminPage() {
  return <BlogAdminClient />
}

