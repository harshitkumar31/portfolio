import Image from 'next/image';
import Container from 'components/Container';
import PageHeader from 'components/PageHeader';
import Timeline from 'components/Timeline';

// ponytail: plain array maps directly into semantic markup without extra component wrappers
const principles = [
  {
    title: 'Paved Roads Over Mandates',
    desc: 'The safest path must be the easiest path. Tooling, scaffolding, and automated validation should guide engineers into the pit of success without cognitive friction.'
  },
  {
    title: 'APIs & Schemas Are Forever',
    desc: 'Public schemas outlive their implementations. Prioritize backward compatibility, contract-driven design, and evolutionary changes over disruptive breaking rewrites.'
  },
  {
    title: 'Leverage Is The Primary Metric',
    desc: 'A platform team exists to multiply the velocity of product teams. Success is measured not merely by service uptime, but by how quickly and safely other teams can ship.'
  },
  {
    title: 'Boring Foundations, Expressive Edges',
    desc: 'Rely on proven, predictable primitives for core routing and data pipelines. Invest creativity into developer ergonomics, typed client codegen, and instant feedback loops.'
  }
];

export default function About() {
  return (
    <Container
      title="About – Harshit Kumar"
      description="Principal Software Engineer at Walmart Global Tech. Architecting high-concurrency GraphQL platforms, resilient distributed systems, and developer tooling."
    >
      <div className="mx-auto mb-16 w-full max-w-[800px]">
        {/* Apple Page Header */}
        <PageHeader
          eyebrow="Leadership & Platform Architecture"
          title="Building leverage through resilient systems and developer platforms."
          description="Hey, I’m Harshit. I work at Walmart Global Tech as a Principal Software Engineer, focused on GraphQL orchestration, schema federation, and the developer tooling around it."
        />

        {/* Quick Stat Matrix Grid (Apple Spec Sheet Style) */}
        <div className="mb-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
          <div className="apple-card p-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[#86868b]">
              Current Role
            </p>
            <p className="mt-1 text-[15px] font-semibold text-[#1d1d1f] dark:text-[#f5f5f7]">
              Principal Engineer
            </p>
            <p className="text-[12px] text-[#6e6e73] dark:text-[#86868b]">Walmart Global Tech</p>
          </div>

          <div className="apple-card p-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[#86868b]">
              Focus Area
            </p>
            <p className="mt-1 text-[15px] font-semibold text-[#1d1d1f] dark:text-[#f5f5f7]">
              GraphQL & Platforms
            </p>
            <p className="text-[12px] text-[#6e6e73] dark:text-[#86868b]">Orchestration & DevEx</p>
          </div>

          <div className="apple-card p-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[#86868b]">
              Core Tech
            </p>
            <p className="mt-1 text-[15px] font-semibold text-[#1d1d1f] dark:text-[#f5f5f7]">
              Node, Rust, TS
            </p>
            <p className="text-[12px] text-[#6e6e73] dark:text-[#86868b]">GraphQL, React, Next.js</p>
          </div>

          <div className="apple-card p-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[#86868b]">
              Location
            </p>
            <p className="mt-1 text-[15px] font-semibold text-[#1d1d1f] dark:text-[#f5f5f7]">
              Bengaluru
            </p>
            <p className="text-[12px] text-[#6e6e73] dark:text-[#86868b]">India &middot; UTC+5:30</p>
          </div>
        </div>

        {/* Executive Bio & Portrait Section (Apple Leadership Style) */}
        <div className="my-12 grid items-start gap-10 md:grid-cols-[1fr_300px]">
          {/* Editorial Biography */}
          <div className="space-y-6 text-[17px] leading-[1.65] text-[#333336] dark:text-[#a1a1a6]">
            <p>
              Over the past decade, I have focused on engineering reliable developer platforms, API contracts, and distributed backend infrastructure. At <strong className="text-[#1d1d1f] dark:text-[#f5f5f7]">Walmart Global Tech</strong>, I orchestrate GraphQL platforms that streamline how services integrate and communicate across complex domain boundaries.
            </p>
            <p>
              Prior to Walmart, I led frontend performance initiatives at <strong className="text-[#1d1d1f] dark:text-[#f5f5f7]">Quikr</strong>, driving Progressive Web App architecture that reduced initial load times from 7 seconds to 2 seconds, cutting bounce rates by 25% for millions of users across India.
            </p>
            <p>
              Outside enterprise platform systems, I experiment with homelab infrastructure, self-hosted clusters on Raspberry Pi, open-source utilities in Rust and TypeScript, and writing technical explorations on system architecture.
            </p>
          </div>

          {/* Executive Portrait Card (Natural 3:4 Aspect Ratio) */}
          <div className="relative mx-auto w-full max-w-[320px] md:max-w-none">
            <div className="overflow-hidden rounded-apple-lg border border-black/[0.08] bg-white p-2 shadow-apple-lg dark:border-white/[0.1] dark:bg-apple-card-dark">
              <div className="overflow-hidden rounded-apple">
                <Image
                  alt="Harshit Kumar – Principal Software Engineer"
                  src="/avatar4.jpg"
                  width={896}
                  height={1152}
                  priority
                  className="h-auto w-full object-cover object-top"
                />
              </div>
              <div className="px-2 pt-3 pb-1 text-center">
                <p className="text-[14px] font-semibold text-[#1d1d1f] dark:text-[#f5f5f7]">
                  Harshit Kumar
                </p>
                <p className="text-[12px] text-[#6e6e73] dark:text-[#86868b]">
                  Principal Software Engineer
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Platform Engineering Philosophy */}
        <div className="my-14">
          <div className="mb-5">
            <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-[#0071e3] dark:text-[#2997ff]">
              Operating Principles
            </p>
            <h2 className="text-[26px] font-semibold tracking-[-0.025em] text-[#1d1d1f] dark:text-[#f5f5f7]">
              Platform Engineering Philosophy
            </h2>
          </div>

          <div className="apple-inset divide-y divide-black/[0.06] dark:divide-white/[0.08]">
            {principles.map((p, idx) => (
              <div
                key={p.title}
                className="flex flex-col gap-2 p-5 sm:flex-row sm:items-start sm:gap-6 sm:p-6"
              >
                <span className="font-mono text-[13px] font-semibold text-[#86868b] sm:w-8 shrink-0">
                  0{idx + 1}
                </span>
                <div className="flex-1">
                  <h3 className="text-[16px] font-semibold text-[#1d1d1f] dark:text-[#f5f5f7]">
                    {p.title}
                  </h3>
                  <p className="mt-1 text-[14px] leading-relaxed text-[#6e6e73] dark:text-[#a1a1a6]">
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Apple Milestone Roadmap */}
        <Timeline />
      </div>
    </Container>
  );
}
