import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import useSWR from 'swr';

import Container from 'components/Container';
import Subscribe from 'components/Subscribe';
import fetcher from 'lib/fetcher';
import { Views as ViewsType } from 'lib/types';

const skills = [
  'GraphQL',
  'Node.js',
  'React',
  'Rust',
  'Python',
  'PHP',
  'C++',
  'TypeScript'
];

function Views({ slug }: { slug: string }) {
  const { data } = useSWR<ViewsType>(`/api/views/${slug}`, fetcher);
  const views = Number(data?.total || 0);
  return (
    <span className="text-[12px] font-mono tabular-nums text-[#86868b]">
      {views > 0 ? `${views.toLocaleString()} views` : '–––'}
    </span>
  );
}

function FeaturedArticleRow({
  slug,
  title,
  date,
  tag
}: {
  slug: string;
  title: string;
  date: string;
  tag: string;
}) {
  return (
    <Link
      href={`/blog/${slug}`}
      className="group flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-6 py-5 transition-all duration-200 hover:bg-black/[0.025] dark:hover:bg-white/[0.035]"
    >
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2 mb-1.5">
          <span className="rounded-full bg-[#0071e3]/10 dark:bg-[#2997ff]/20 px-2.5 py-0.5 text-[11px] font-medium text-[#0071e3] dark:text-[#2997ff]">
            {tag}
          </span>
          <span className="text-[12px] text-[#86868b]">{date}</span>
        </div>
        <p className="text-[17px] font-semibold tracking-[-0.02em] text-[#1d1d1f] dark:text-[#f5f5f7] group-hover:text-[#0071e3] dark:group-hover:text-[#2997ff] transition-colors">
          {title}
        </p>
      </div>

      <div className="flex items-center gap-4 shrink-0">
        <Views slug={slug} />
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
    </Link>
  );
}

// ponytail: static metadata avoids runtime computation or extra state
const platformPillars = [
  {
    title: 'API Orchestration & Schemas',
    desc: 'Unifying distributed services into clean GraphQL schemas with strong contract boundaries and zero-downtime evolution.',
    tag: 'Contracts'
  },
  {
    title: 'Developer Leverage & Tooling',
    desc: 'Paving the road for product teams with automated schema validation, typed codegen, and reduced cognitive load.',
    tag: 'DevEx'
  },
  {
    title: 'Resilience & Performance',
    desc: 'Engineering low-latency aggregation, caching strategies, and graceful degradation for enterprise scale.',
    tag: 'Reliability'
  }
];

export default function Home() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('harshitkumar31@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <Container>
      <div className="relative mx-auto w-full max-w-[980px] pb-12">
        {/* Apple Keynote Pro Hero */}
        <section className="grid items-center gap-10 pb-16 pt-2 md:grid-cols-[1.3fr_auto] md:gap-16 md:pb-20">
          <div>
            {/* Live Role Badge */}
            <p className="mb-4 text-[12px] font-semibold uppercase tracking-[0.12em] text-[#86868b]">
              Staff Software Engineer &middot; Platform Architecture
            </p>

            {/* Apple Display Typography */}
            <h1 className="text-[46px] font-semibold leading-[1.02] tracking-[-0.035em] text-[#1d1d1f] dark:text-[#f5f5f7] sm:text-[64px] md:text-[72px]">
              Harshit
              <br />
              Kumar
            </h1>

            <p className="mt-5 text-[21px] font-normal leading-[1.38] tracking-[-0.022em] text-[#6e6e73] dark:text-[#86868b]">
              Building developer platforms &amp; API orchestration at{' '}
              <span className="font-medium text-[#1d1d1f] dark:text-[#f5f5f7]">
                Walmart Global Tech
              </span>
              .
            </p>

            <p className="mt-4 max-w-[36rem] text-[17px] leading-[1.47] tracking-[-0.022em] text-[#6e6e73] dark:text-[#a1a1a6]">
              Focused on engineering leverage — designing unified GraphQL architectures,
              resilient backend platforms, and developer tooling that enable cross-functional
              teams to ship safely at scale. Previously at Quikr, building Progressive Web Apps.
            </p>

            {/* Apple Skills Capsule Tags */}
            <div className="mt-7 flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-black/[0.04] px-3.5 py-1 text-[13px] font-medium text-[#1d1d1f] transition-colors dark:bg-white/[0.08] dark:text-[#f5f5f7]"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Apple Quick Action Pills */}
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link
                href="/blog"
                className="inline-flex h-11 items-center rounded-full bg-[#0071e3] px-6 text-[15px] font-medium text-white shadow-xs transition-all hover:bg-[#0077ed] active:scale-95"
              >
                Read Journal
              </Link>
              <Link
                href="/chat"
                className="inline-flex h-11 items-center rounded-full bg-black/[0.06] px-6 text-[15px] font-medium text-[#1d1d1f] transition-all hover:bg-black/[0.1] active:scale-95 dark:bg-white/[0.1] dark:text-[#f5f5f7] dark:hover:bg-white/[0.15]"
              >
                Ask Me Anything
              </Link>
              <button
                type="button"
                onClick={copyEmail}
                className="inline-flex h-11 items-center gap-1.5 rounded-full border border-black/[0.08] px-4 text-[14px] font-medium text-[#6e6e73] transition-all hover:border-black/[0.2] hover:text-[#1d1d1f] dark:border-white/[0.12] dark:text-[#86868b] dark:hover:border-white/[0.25] dark:hover:text-white"
              >
                {copiedEmail ? (
                  <>
                    <svg className="h-4 w-4 text-[#30d158]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <polyline points="20 6 9 17 4 12" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="text-[#30d158]">Copied Email</span>
                  </>
                ) : (
                  <>
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <rect width="18" height="18" x="3" y="3" rx="2" strokeWidth={1.75} />
                      <line x1="3" y1="9" x2="21" y2="9" strokeWidth={1.75} />
                    </svg>
                    <span>Copy Email</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Apple Continuous Squircle Avatar with Subtle Ambient Illumination */}
          <div className="relative mx-auto h-[220px] w-[220px] sm:h-[280px] sm:w-[280px]">
            <div className="absolute -inset-1 rounded-[44px] bg-gradient-to-tr from-[#0071e3]/20 via-purple-500/10 to-[#30d158]/10 blur-xl opacity-60 dark:opacity-30" />
            <div className="relative h-full w-full overflow-hidden rounded-[36px] bg-white p-2 shadow-apple-lg dark:bg-[#1c1c1e] border border-black/[0.06] dark:border-white/[0.1]">
              <Image
                alt="Harshit Kumar – Staff Software Engineer"
                src="/avatar4.jpg"
                height={280}
                width={280}
                priority
                className="h-full w-full rounded-[28px] object-cover"
              />
            </div>
          </div>
        </section>

        {/* Platform Engineering Pillars (Apple Inset Grid) */}
        <section className="mb-14">
          <div className="mb-5">
            <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-[#0071e3] dark:text-[#2997ff]">
              Platform Engineering
            </p>
            <h2 className="text-[28px] font-semibold tracking-[-0.025em] text-[#1d1d1f] dark:text-[#f5f5f7] md:text-[32px]">
              How I Build Leverage
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {platformPillars.map((pillar) => (
              <div
                key={pillar.title}
                className="apple-card flex flex-col justify-between p-6 transition-all duration-200 hover:-translate-y-1"
              >
                <div>
                  <span className="inline-block rounded-full bg-[#0071e3]/10 dark:bg-[#2997ff]/15 px-2.5 py-0.5 text-[11px] font-medium text-[#0071e3] dark:text-[#2997ff]">
                    {pillar.tag}
                  </span>
                  <h3 className="mt-3 text-[17px] font-semibold tracking-[-0.015em] text-[#1d1d1f] dark:text-[#f5f5f7]">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-[#6e6e73] dark:text-[#a1a1a6]">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>



        {/* Featured Writing Section (Apple Newsroom Style) */}
        <section className="mb-16">
          <div className="mb-5 flex items-end justify-between">
            <div>
              <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-[#0071e3] dark:text-[#2997ff]">
                From The Journal
              </p>
              <h2 className="text-[28px] font-semibold tracking-[-0.025em] text-[#1d1d1f] dark:text-[#f5f5f7] md:text-[32px]">
                Featured Writing
              </h2>
            </div>
            <Link
              href="/blog"
              className="inline-flex items-center gap-1 text-[14px] font-medium text-[#0071e3] hover:underline dark:text-[#2997ff]"
            >
              <span>View all articles</span>
              <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </Link>
          </div>

          <div className="apple-inset divide-y divide-black/[0.06] dark:divide-white/[0.08]">
            <FeaturedArticleRow
              slug="setup-a-nas"
              title="Setup a NAS + Homelab using Raspberry Pi"
              date="Self-Hosting & Storage"
              tag="Homelab"
            />
            <FeaturedArticleRow
              slug="graphql-proxy"
              title="Creating a Proxy for your GraphQL Server"
              date="Platform Engineering"
              tag="GraphQL"
            />
            <FeaturedArticleRow
              slug="diagrams-as-code"
              title="Diagrams as Code: Architecture Visualization"
              date="Systems Documentation"
              tag="DevTools"
            />
            <FeaturedArticleRow
              slug="beginner-resources"
              title="Resources I wish I knew when I started my career"
              date="Career & Growth"
              tag="Engineering"
            />
          </div>
        </section>

        {/* Apple VIP Dispatch */}
        <Subscribe />
      </div>
    </Container>
  );
}
