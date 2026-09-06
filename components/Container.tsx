import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import NextLink from 'next/link';
import cn from 'classnames';

import Footer from 'components/Footer';
import MobileMenu from 'components/MobileMenu';
import Spotlight from 'components/Spotlight';

function NavItem({ href, text }: { href: string; text: string }) {
  const router = useRouter();
  const isActive =
    href === '/'
      ? router.asPath === '/'
      : router.asPath === href || router.asPath.startsWith(`${href}/`);

  return (
    <NextLink
      href={href}
      className={cn(
        'relative rounded-full px-3 py-1.5 text-[13px] tracking-[-0.01em] transition-all duration-200',
        isActive
          ? 'bg-black/[0.07] font-semibold text-[#1d1d1f] dark:bg-white/[0.12] dark:text-white shadow-xs'
          : 'font-normal text-[#6e6e73] hover:text-[#1d1d1f] hover:bg-black/[0.03] dark:text-[#86868b] dark:hover:text-white dark:hover:bg-white/[0.04]'
      )}
    >
      {text}
    </NextLink>
  );
}

export default function Container(props) {
  const [mounted, setMounted] = useState(false);
  const [isSpotlightOpen, setIsSpotlightOpen] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  const { children, ...customMeta } = props;
  const router = useRouter();
  const meta = {
    title: 'Harshit Kumar – Staff Software Engineer',
    description: 'Staff Software Engineer at Walmart Global Tech, focused on GraphQL and distributed platforms.',
    image: '/static/images/banner1.jpg',
    type: 'website',
    ...customMeta
  };

  return (
    <div className="min-h-screen bg-[#f5f5f7] text-[#1d1d1f] dark:bg-black dark:text-[#f5f5f7] selection:bg-[#0071e3] selection:text-white">
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://harshitkumar.co.in${router.asPath}`}
        />
        <link
          rel="canonical"
          href={`https://harshitkumar.co.in${router.asPath}`}
        />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Harshit Kumar" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@harshitkumar31" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>

      {/* Floating Apple Capsule Header */}
      <header className="glass-nav sticky top-0 z-50 border-b border-black/[0.06] dark:border-white/[0.08]">
        <nav className="relative mx-auto flex h-12 w-full max-w-[1020px] items-center justify-between px-6">
          <a href="#skip" className="skip-nav">
            Skip to content
          </a>

          {/* Apple Monogram Brand */}
          <NextLink
            href="/"
            className="flex items-center gap-2 group"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#1d1d1f] text-white text-[12px] font-bold tracking-tight shadow-sm dark:bg-white dark:text-[#1d1d1f] group-hover:scale-105 transition-transform">
              HK
            </span>
            <span className="hidden sm:inline-block text-[14px] font-semibold tracking-tight text-[#1d1d1f] dark:text-white">
              Harshit Kumar
            </span>
          </NextLink>

          {/* Desktop Navigation Capsule */}
          <div className="hidden md:flex items-center gap-1 rounded-full bg-black/[0.03] dark:bg-white/[0.04] p-1 border border-black/[0.04] dark:border-white/[0.06]">
            <NavItem href="/" text="Home" />
            <NavItem href="/about" text="About" />
            <NavItem href="/blog" text="Blog" />
            <NavItem href="/snippets" text="Snippets" />
            <NavItem href="/uses" text="Uses" />
            <NavItem href="/chat" text="Chat" />
          </div>

          {/* Right Action Controls */}
          <div className="flex items-center gap-2">
            {/* Spotlight Command Palette Trigger */}
            <button
              type="button"
              onClick={() => setIsSpotlightOpen(true)}
              aria-label="Search or press Command K"
              className="flex items-center gap-2 rounded-full bg-black/[0.05] px-3 py-1.5 text-[12px] text-[#6e6e73] hover:text-[#1d1d1f] hover:bg-black/[0.08] dark:bg-white/[0.08] dark:text-[#86868b] dark:hover:text-white dark:hover:bg-white/[0.12] transition-colors"
            >
              <svg
                className="h-3.5 w-3.5 text-[#86868b]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <span className="hidden sm:inline font-medium">Search</span>
              <kbd className="hidden sm:inline-flex items-center rounded bg-black/[0.08] dark:bg-white/[0.12] px-1 py-0.5 text-[10px] font-mono">
                ⌘K
              </kbd>
            </button>

            {/* Dark / Light Mode Switcher */}
            <button
              aria-label="Toggle Dark Mode"
              type="button"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-black/[0.05] text-[#1d1d1f] transition-all hover:bg-black/[0.1] dark:bg-white/[0.08] dark:text-white dark:hover:bg-white/[0.14]"
              onClick={() =>
                setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
              }
            >
              {mounted && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  className="h-4 w-4 transition-transform duration-300"
                >
                  {resolvedTheme === 'dark' ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.75}
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.75}
                      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                    />
                  )}
                </svg>
              )}
            </button>

            {/* Mobile Navigation Drawer Trigger */}
            <MobileMenu />
          </div>
        </nav>
      </header>

      {/* Main Content Viewport */}
      <main id="skip" className="flex flex-1 flex-col px-6 pt-10 md:pt-16">
        {children}
        <Footer />
      </main>

      {/* Global Apple Spotlight Command Palette */}
      <Spotlight
        isOpen={isSpotlightOpen}
        onClose={() => setIsSpotlightOpen(false)}
      />
    </div>
  );
}
