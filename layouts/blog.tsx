import Image from 'next/image';
import Link from 'next/link';
import { parseISO, format } from 'date-fns';

import Container from 'components/Container';
import ViewCounter from 'components/ViewCounter';
import type { PropsWithChildren } from 'react';
import type { Blog } from '.contentlayer/generated';

const editUrl = (slug: string) =>
  `https://github.com/harshitkumar31/harshitkumar31.github.io/edit/main/data/blog/${slug}.mdx`;
const discussUrl = (slug: string) =>
  `https://twitter.com/search?q=${encodeURIComponent(
    `https://harshitkumar.co.in/blog/${slug}`
  )}`;

export default function BlogLayout({
  children,
  post
}: PropsWithChildren<{ post: Blog }>) {
  return (
    <Container
      title={`${post.title} – Harshit Kumar`}
      description={post.summary}
      image={`https://harshitkumar.co.in${post.image || '/static/images/banner1.jpg'}`}
      date={new Date(post.publishedAt).toISOString()}
      type="article"
    >
      <article className="mx-auto mb-20 w-full max-w-[740px]">
        {/* Navigation Breadcrumb */}
        <div className="mb-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-[13px] font-medium text-[#0071e3] hover:underline dark:text-[#2997ff]"
          >
            <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="15 18 9 12 15 6" />
            </svg>
            <span>Back to Journal</span>
          </Link>
        </div>

        {/* Apple Editorial Header */}
        <header className="mb-8">
          <p className="mb-3 text-[12px] font-semibold uppercase tracking-[0.12em] text-[#0071e3] dark:text-[#2997ff]">
            Technical Dispatch
          </p>
          <h1 className="text-[36px] font-semibold leading-[1.08] tracking-[-0.03em] text-[#1d1d1f] dark:text-[#f5f5f7] sm:text-[46px]">
            {post.title}
          </h1>

          {/* Author & Telemetry Pill Row */}
          <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-y border-black/[0.06] py-3.5 dark:border-white/[0.08] text-[13px] text-[#6e6e73] dark:text-[#86868b]">
            <div className="flex items-center gap-3">
              <Image
                alt="Harshit Kumar"
                height={32}
                width={32}
                src="/avatar4.jpg"
                className="rounded-full ring-2 ring-black/[0.05] dark:ring-white/[0.1]"
              />
              <div>
                <p className="font-semibold text-[#1d1d1f] dark:text-[#f5f5f7]">
                  Harshit Kumar
                </p>
                <p className="text-[11px] text-[#86868b]">
                  {format(parseISO(post.publishedAt), 'MMMM d, yyyy')}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 font-mono text-[12px]">
              <span className="rounded-full bg-black/[0.04] px-2.5 py-1 dark:bg-white/[0.06]">
                {post.readingTime.text}
              </span>
              <span className="rounded-full bg-black/[0.04] px-2.5 py-1 dark:bg-white/[0.06]">
                <ViewCounter slug={post.slug} />
              </span>
            </div>
          </div>
        </header>

        {/* Article Body */}
        <div className="prose dark:prose-dark mt-6 w-full max-w-none text-[17px] leading-[1.7]">
          {children}
        </div>

        {/* Apple Style Post-Article Action Panel */}
        <div className="mt-14 rounded-2xl bg-black/[0.03] p-6 dark:bg-white/[0.04] border border-black/[0.06] dark:border-white/[0.08]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <p className="text-[15px] font-semibold text-[#1d1d1f] dark:text-[#f5f5f7]">
                Enjoyed this dispatch?
              </p>
              <p className="text-[13px] text-[#6e6e73] dark:text-[#86868b]">
                Join the conversation or suggest improvements to the source.
              </p>
            </div>
            <div className="flex items-center gap-3 text-[13px]">
              <a
                href={discussUrl(post.slug)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-9 items-center gap-1.5 rounded-full bg-[#0071e3] px-4 font-medium text-white shadow-xs hover:bg-[#0077ed] transition-colors"
              >
                Discuss
              </a>
              <a
                href={editUrl(post.slug)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-9 items-center gap-1.5 rounded-full border border-black/[0.1] px-4 font-medium text-[#1d1d1f] hover:bg-black/[0.05] dark:border-white/[0.15] dark:text-[#f5f5f7] dark:hover:bg-white/[0.08] transition-colors"
              >
                Edit on GitHub
              </a>
            </div>
          </div>
        </div>
      </article>
    </Container>
  );
}
