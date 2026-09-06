import Link from 'next/link';
import useSWR from 'swr';

import fetcher from 'lib/fetcher';
import { Views } from 'lib/types';
import type { Blog } from '.contentlayer/generated';

export default function BlogPost({
  title,
  summary,
  slug
}: Pick<Blog, 'title' | 'summary' | 'slug'>) {
  const { data } = useSWR<Views>(`/api/views/${slug}`, fetcher);
  const views = data?.total;

  return (
    <Link
      href={`/blog/${slug}`}
      className="group block px-5 py-5 sm:px-6 transition-all duration-200 hover:bg-black/[0.025] dark:hover:bg-white/[0.035]"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0 flex-1">
          <h3 className="text-[17px] font-semibold tracking-[-0.02em] text-[#1d1d1f] dark:text-[#f5f5f7] group-hover:text-[#0071e3] dark:group-hover:text-[#2997ff] transition-colors">
            {title}
          </h3>
          <p className="mt-1 line-clamp-2 text-[14px] leading-relaxed text-[#6e6e73] dark:text-[#a1a1a6]">
            {summary}
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0 pt-0.5">
          <span className="text-[12px] font-mono tabular-nums text-[#86868b]">
            {views ? `${Number(views).toLocaleString()} views` : '–––'}
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
        </div>
      </div>
    </Link>
  );
}
