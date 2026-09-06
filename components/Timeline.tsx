import { useState } from 'react';

interface MilestoneProps {
  year: string;
  role: string;
  company: string;
  period: string;
  description?: string;
  highlights?: string[];
  isCurrent?: boolean;
}

function MilestoneCard({
  year,
  role,
  company,
  period,
  description,
  highlights,
  isCurrent
}: MilestoneProps) {
  return (
    <div className="relative pl-8 pb-10 last:pb-0 group">
      {/* Vertical Spine Line */}
      <div className="absolute left-[11px] top-6 bottom-0 w-[2px] bg-black/[0.08] dark:bg-white/[0.1] group-last:hidden" />

      {/* Apple Beacon Indicator */}
      <div
        className={`absolute left-0 top-1 flex h-6 w-6 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-110 ${
          isCurrent
            ? 'bg-[#0071e3] text-white shadow-apple-glow'
            : 'bg-white border-2 border-black/[0.15] dark:bg-[#1c1c1e] dark:border-white/[0.2]'
        }`}
      >
        {isCurrent ? (
          <span className="h-2 w-2 rounded-full bg-white animate-pulse" />
        ) : (
          <span className="h-1.5 w-1.5 rounded-full bg-[#86868b]" />
        )}
      </div>

      {/* Content Container */}
      <div className="apple-card p-6 transition-all duration-300 hover:shadow-apple-lg">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="rounded-full bg-black/[0.05] px-2.5 py-0.5 text-[12px] font-semibold text-[#1d1d1f] dark:bg-white/[0.08] dark:text-[#f5f5f7]">
              {year}
            </span>
            <span className="text-[13px] font-medium text-[#0071e3] dark:text-[#2997ff]">
              {company}
            </span>
          </div>
          <span className="text-[12px] font-medium text-[#86868b]">{period}</span>
        </div>

        <h3 className="mt-3 text-[18px] font-semibold tracking-tight text-[#1d1d1f] dark:text-[#f5f5f7]">
          {role}
        </h3>

        {description && (
          <p className="mt-2 text-[14px] leading-relaxed text-[#6e6e73] dark:text-[#a1a1a6]">
            {description}
          </p>
        )}

        {highlights && highlights.length > 0 && (
          <ul className="mt-4 space-y-2 border-t border-black/[0.06] pt-4 dark:border-white/[0.08]">
            {highlights.map((item, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2.5 text-[13px] leading-relaxed text-[#6e6e73] dark:text-[#a1a1a6]"
              >
                <svg
                  className="h-4 w-4 shrink-0 text-[#30d158] mt-0.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default function Timeline() {
  const [showFull, setShowFull] = useState(false);

  return (
    <div className="mt-12">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-[#0071e3] dark:text-[#2997ff]">
            Career Journey
          </p>
          <h2 className="text-[28px] font-semibold tracking-[-0.025em] text-[#1d1d1f] dark:text-[#f5f5f7] md:text-[34px]">
            Experience & Milestones
          </h2>
        </div>
      </div>

      <div className="relative">
        <MilestoneCard
          year="2023 – Present"
          role="Staff Software Engineer"
          company="Walmart Global Tech"
          period="Bengaluru / Hybrid"
          isCurrent
          description="Leading platform teams architecting GraphQL orchestration layers, schema governance, and developer tooling to enable autonomous domain teams."
          highlights={[
            'Spearheading architecture for unified GraphQL platform layers and schema composition.',
            'Driving developer tooling and paved-road initiatives to eliminate cross-team cognitive overhead.',
            'Mentoring senior and mid-level engineers on distributed systems and API design.'
          ]}
        />

        <MilestoneCard
          year="2021 – 2023"
          role="Senior Software Engineer"
          company="Walmart Global Tech"
          period="2 Years"
          description="Engineered core GraphQL platform capabilities, focusing on service composition, low-latency aggregation, and developer ergonomics across engineering orgs."
        />

        <MilestoneCard
          year="2019 – 2021"
          role="Software Engineer"
          company="Walmart Global Tech"
          period="2 Years"
          description="Built multi-tenant orchestration services across Node.js and Java, adopting Apollo Federation for unified backend schema composition."
        />

        {showFull ? (
          <>
            <MilestoneCard
              year="2017 – 2019"
              role="Software Engineer"
              company="Quikr"
              period="2 Years"
              description="Full-stack engineer driving performance and architecture for India's leading classifieds platform."
              highlights={[
                'Developed Quikr’s flagship Progressive Web App (PWA) using Preact and Redux, dropping bounce rates by 25%.',
                'Reduced time-to-interactive from 7s to 2s via SSR and custom Service Worker caching.',
                'Designed composable micro-frontend shell architecture shared across all corporate verticals.'
              ]}
            />

            <MilestoneCard
              year="1995"
              role="Born"
              company="Beginning"
              period="Genesis"
              description="Where the journey started."
            />
          </>
        ) : (
          <div className="pt-2 text-center">
            <button
              type="button"
              onClick={() => setShowFull(true)}
              className="inline-flex h-10 items-center gap-2 rounded-full bg-black/[0.05] px-5 text-[14px] font-medium text-[#0071e3] transition-all hover:bg-black/[0.09] dark:bg-white/[0.08] dark:text-[#2997ff] dark:hover:bg-white/[0.12]"
            >
              <span>Show Earlier Journey</span>
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
