import Link from 'next/link';
import Image from 'next/image';

export default function FunctionCard({
  title,
  description,
  slug,
  logo,
  ...rest
}: {
  title: string;
  description: string;
  slug: string;
  logo: string;
  [key: string]: any;
}) {
  return (
    <Link
      href={`/snippets/${slug}`}
      className="apple-card group p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-apple-lg hover:border-black/[0.12] dark:hover:border-white/[0.16] flex flex-col justify-between"
      {...rest}
    >
      <div>
        <div className="flex items-center justify-between">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-black/[0.04] p-2 dark:bg-white/[0.06] shadow-xs">
            <Image
              alt={title}
              height={28}
              width={28}
              src={`/logos/${logo}`}
              className="rounded-lg object-contain"
            />
          </div>
          <span className="rounded-full bg-black/[0.04] px-2.5 py-0.5 text-[11px] font-medium text-[#86868b] dark:bg-white/[0.06]">
            Utility
          </span>
        </div>

        <h3 className="mt-4 text-left text-[17px] font-semibold tracking-[-0.02em] text-[#1d1d1f] dark:text-[#f5f5f7] group-hover:text-[#0071e3] dark:group-hover:text-[#2997ff] transition-colors">
          {title}
        </h3>
        <p className="mt-1.5 text-[14px] leading-relaxed text-[#6e6e73] dark:text-[#a1a1a6]">
          {description}
        </p>
      </div>

      <div className="mt-5 flex items-center gap-1 text-[13px] font-medium text-[#0071e3] dark:text-[#2997ff]">
        <span>View snippet</span>
        <svg
          className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </div>
    </Link>
  );
}
