export default function ProjectCard({
  title,
  description,
  href,
  icon
}: {
  title: string;
  description: string;
  href: string;
  icon?: string;
}) {
  return (
    <a
      className="apple-card group block p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-apple-lg"
      href={href}
      aria-label={title}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="flex items-start gap-4">
        {icon && (
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-black/[0.04] p-2 dark:bg-white/[0.06]">
            <svg className="h-6 w-6 text-[#1d1d1f] dark:text-[#f5f5f7]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
          </div>
        )}
        <div className="min-w-0 flex-1">
          <div className="flex items-center justify-between gap-2">
            <h4 className="text-[17px] font-semibold tracking-tight text-[#1d1d1f] group-hover:text-[#0071e3] dark:text-[#f5f5f7] dark:group-hover:text-[#2997ff] transition-colors">
              {title}
            </h4>
            <svg
              className="h-4 w-4 text-[#c7c7cc] dark:text-[#636366] transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[#0071e3] dark:group-hover:text-[#2997ff]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </div>
          <p className="mt-1 text-[14px] leading-relaxed text-[#6e6e73] dark:text-[#a1a1a6]">
            {description}
          </p>
        </div>
      </div>
    </a>
  );
}
