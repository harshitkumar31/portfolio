import Link from 'next/link';
import { parseISO, format } from 'date-fns';
import type { Newsletter } from '.contentlayer/generated';

export default function NewsletterLink({
  slug,
  publishedAt
}: Pick<Newsletter, 'publishedAt' | 'slug'>) {
  return (
    <Link
      href={`/newsletter/${slug}`}
      className="group flex items-center justify-between px-6 py-4 text-[16px] font-medium text-[#1d1d1f] transition-all hover:bg-black/[0.025] dark:text-[#f5f5f7] dark:hover:bg-white/[0.035]"
    >
      <span className="group-hover:text-[#0071e3] dark:group-hover:text-[#2997ff] transition-colors">
        {format(parseISO(publishedAt), 'MMMM dd, yyyy')}
      </span>
      <svg
        className="h-4 w-4 text-[#c7c7cc] dark:text-[#636366] transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[#0071e3] dark:group-hover:text-[#2997ff]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="9 18 15 12 9 6" />
      </svg>
    </Link>
  );
}
