import Image from 'next/image';
import Link from 'next/link';

import Container from 'components/Container';
import type { PropsWithChildren } from 'react';
import type { Snippet } from '.contentlayer/generated';

export default function SnippetLayout({
  children,
  snippet
}: PropsWithChildren<{ snippet: Snippet }>) {
  return (
    <Container
      title={`${snippet.title} – Code Snippet`}
      description={snippet.description}
    >
      <article className="mx-auto mb-20 w-full max-w-[740px]">
        {/* Navigation Breadcrumb */}
        <div className="mb-6">
          <Link
            href="/snippets"
            className="inline-flex items-center gap-1.5 text-[13px] font-medium text-[#0071e3] hover:underline dark:text-[#2997ff]"
          >
            <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="15 18 9 12 15 6" />
            </svg>
            <span>Back to Snippets</span>
          </Link>
        </div>

        <div className="mb-8 flex items-start justify-between gap-6 border-b border-black/[0.06] pb-8 dark:border-white/[0.08]">
          <div>
            <p className="mb-2 text-[12px] font-semibold uppercase tracking-[0.12em] text-[#0071e3] dark:text-[#2997ff]">
              Developer Snippet
            </p>
            <h1 className="text-[34px] font-semibold tracking-[-0.03em] text-[#1d1d1f] dark:text-[#f5f5f7] sm:text-[44px]">
              {snippet.title}
            </h1>
            <p className="mt-2 text-[16px] leading-relaxed text-[#6e6e73] dark:text-[#a1a1a6]">
              {snippet.description}
            </p>
          </div>
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-black/[0.04] p-2.5 dark:bg-white/[0.06] shadow-xs">
            <Image
              alt={snippet.title}
              height={36}
              width={36}
              src={`/logos/${snippet.logo}`}
              className="rounded-xl object-contain"
            />
          </div>
        </div>

        <div className="prose dark:prose-dark w-full max-w-none text-[16px] leading-[1.7]">
          {children}
        </div>
      </article>
    </Container>
  );
}
