import Link from 'next/link';
import useSWR from 'swr';

import fetcher from 'lib/fetcher';
import { Views } from 'lib/types';

export default function BlogPostCard({ title, slug }) {
  const { data } = useSWR<Views>(`/api/views/${slug}`, fetcher);
  const views = data?.total;

  return (
    <Link
      href={`/blog/${slug}`}
      className="apple-card group flex w-full flex-col justify-between p-5 transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-apple-lg md:w-1/3"
    >
      <h4 className="mb-8 text-[17px] font-semibold tracking-[-0.022em] text-[#1d1d1f] dark:text-[#f5f5f7]">
        {title}
      </h4>
      <span className="text-[13px] text-[#86868b]">
        {views ? new Number(views).toLocaleString() : '–––'} views
      </span>
    </Link>
  );
}
