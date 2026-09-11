import Link from 'next/link';

const ExternalLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    className="text-[13px] text-[#6e6e73] transition-colors hover:text-[#0071e3] dark:text-[#86868b] dark:hover:text-[#2997ff]"
    target="_blank"
    rel="noopener noreferrer"
    href={href}
  >
    {children}
  </a>
);

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="mx-auto mt-28 w-full max-w-[1020px] pb-16">
      <div className="border-t border-black/[0.08] pt-10 dark:border-white/[0.1]">
        {/* Navigation Directory Grid */}
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 mb-12">
          <div className="flex flex-col space-y-3">
            <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[#1d1d1f] dark:text-[#f5f5f7]">
              Explore
            </p>
            <Link
              href="/"
              className="text-[13px] text-[#6e6e73] transition-colors hover:text-[#0071e3] dark:text-[#86868b] dark:hover:text-[#2997ff]"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-[13px] text-[#6e6e73] transition-colors hover:text-[#0071e3] dark:text-[#86868b] dark:hover:text-[#2997ff]"
            >
              About
            </Link>
            <Link
              href="/blog"
              className="text-[13px] text-[#6e6e73] transition-colors hover:text-[#0071e3] dark:text-[#86868b] dark:hover:text-[#2997ff]"
            >
              Journal & Blog
            </Link>
          </div>

          <div className="flex flex-col space-y-3">
            <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[#1d1d1f] dark:text-[#f5f5f7]">
              Studio & Work
            </p>
            <Link
              href="/snippets"
              className="text-[13px] text-[#6e6e73] transition-colors hover:text-[#0071e3] dark:text-[#86868b] dark:hover:text-[#2997ff]"
            >
              Code Snippets
            </Link>
            <Link
              href="/uses"
              className="text-[13px] text-[#6e6e73] transition-colors hover:text-[#0071e3] dark:text-[#86868b] dark:hover:text-[#2997ff]"
            >
              Uses & Setup
            </Link>
            <Link
              href="/chat"
              className="text-[13px] text-[#6e6e73] transition-colors hover:text-[#0071e3] dark:text-[#86868b] dark:hover:text-[#2997ff]"
            >
              Interactive Chat
            </Link>
          </div>

          <div className="flex flex-col space-y-3">
            <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[#1d1d1f] dark:text-[#f5f5f7]">
              Connect
            </p>
            <ExternalLink href="https://github.com/harshitkumar31">
              GitHub
            </ExternalLink>
            <ExternalLink href="https://www.linkedin.com/in/harshitkumar31">
              LinkedIn
            </ExternalLink>
            <ExternalLink href="https://www.youtube.com/channel/UCBQISzmK1iI91Qv0kbZFBWg">
              YouTube
            </ExternalLink>
          </div>

          <div className="flex flex-col space-y-3">
            <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[#1d1d1f] dark:text-[#f5f5f7]">
              Dispatch
            </p>
            <Link
              href="/newsletter"
              className="text-[13px] text-[#6e6e73] transition-colors hover:text-[#0071e3] dark:text-[#86868b] dark:hover:text-[#2997ff]"
            >
              Newsletter Archive
            </Link>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-[13px] text-[#0071e3] hover:underline text-left"
            >
              <span>Back to top</span>
              <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </button>
          </div>
        </div>

        {/* Apple Fine Print & Legal Row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-black/[0.06] pt-6 dark:border-white/[0.08] text-[12px] text-[#86868b]">
          <div>
            <p>
              Copyright &copy; {new Date().getFullYear()} Harshit Kumar.
            </p>
            <p className="mt-0.5 text-[11px] text-[#86868b]">
              Crafted in Bengaluru & Bentonville. All rights reserved.
            </p>
          </div>
          <div className="flex items-center gap-4 text-[12px]">
            <Link href="/" className="hover:text-[#1d1d1f] dark:hover:text-white transition-colors">
              Privacy & Cookies
            </Link>
            <span>·</span>
            <Link href="/about" className="hover:text-[#1d1d1f] dark:hover:text-white transition-colors">
              Colophon
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
