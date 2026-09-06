export default function MetricCard({ header, link, metric, isCurrency }) {
  return (
    <div className="metric-card apple-card max-w-72 w-full p-5">
      <a
        aria-label={header}
        target="_blank"
        rel="noopener noreferrer"
        href={link}
      >
        <div className="flex items-center text-[13px] text-[#6e6e73] dark:text-[#86868b]">
          {header}
          <svg
            className="ml-1 h-3.5 w-3.5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.75}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </div>
      </a>
      <p className="mt-2 text-[32px] font-semibold tracking-[-0.03em] text-[#1d1d1f] dark:text-[#f5f5f7]">
        {metric > 0 && isCurrency && '$'}
        {metric > 0 ? metric.toLocaleString() : '-'}
      </p>
    </div>
  );
}
