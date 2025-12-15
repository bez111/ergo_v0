import { createNavigation } from 'next-intl/navigation';
import { routing } from './routing';

/**
 * Locale-aware navigation utilities.
 * 
 * Use these instead of next/link and next/navigation to automatically
 * preserve the current locale when navigating.
 * 
 * Usage:
 * ```tsx
 * import { Link, useRouter, usePathname, redirect } from '@/i18n/navigation';
 * 
 * // Link automatically adds locale prefix
 * <Link href="/questions">Questions</Link>
 * // On /zh-cn/* this renders as /zh-cn/questions
 * 
 * // Router also preserves locale
 * const router = useRouter();
 * router.push('/questions'); // Navigates to /zh-cn/questions if on Chinese locale
 * ```
 */
export const { Link, redirect, usePathname, useRouter, getPathname } = createNavigation(routing);

