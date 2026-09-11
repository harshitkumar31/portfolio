import Image from 'next/image';
import { parseISO, format } from 'date-fns';

import Container from 'components/Container';
import Subscribe from 'components/Subscribe';
import type { Newsletter } from '.contentlayer/generated';
import type { PropsWithChildren } from 'react';

export default function NewsletterLayout({
  children,
  newsletter
}: PropsWithChildren<{ newsletter: Newsletter }>) {
  return (
    <Container
      title={`${newsletter.title} – Harshit Kumar`}
      description={newsletter.summary}
      date={new Date(newsletter.publishedAt).toISOString()}
      type="article"
    >
      <article className="mx-auto mb-16 w-full max-w-[720px]">
        <p className="mb-4 text-[12px] font-semibold uppercase tracking-[0.08em] text-[#86868b]">
          Newsletter
        </p>
        <h1 className="mb-6 text-[36px] font-semibold tracking-[-0.025em] text-[#1d1d1f] dark:text-[#f5f5f7] md:text-[48px]">
          {newsletter.title}
        </h1>
        <div className="mb-10 flex flex-col justify-between gap-3 border-b border-black/[0.06] pb-6 text-[13px] text-[#6e6e73] dark:border-white/[0.1] md:flex-row md:items-center">
          <div className="flex items-center">
            <Image
              alt="Harshit Kumar"
              height={28}
              width={28}
              src="/avatar4.jpg"
              className="rounded-full"
            />
            <p className="ml-2.5">
              Harshit Kumar
              <span className="mx-1.5 text-[#c7c7cc]">·</span>
              {format(parseISO(newsletter.publishedAt), 'MMMM d, yyyy')}
            </p>
          </div>
          <p>{newsletter.readingTime.text}</p>
        </div>
        <div className="prose dark:prose-dark w-full">{children}</div>
        <div className="mt-10">
          <Subscribe />
        </div>
      </article>
    </Container>
  );
}
