import Link from 'next/link';
import Container from 'components/Container';

export default function NotFound() {
  return (
    <Container title="404 – Page Not Found · Harshit Kumar">
      <div className="mx-auto mb-24 flex min-h-[50vh] w-full max-w-[720px] flex-col items-center justify-center text-center">
        <p className="text-[96px] font-semibold leading-none tracking-[-0.05em] text-[#1d1d1f] dark:text-[#f5f5f7] sm:text-[140px]">
          404
        </p>
        <h1 className="mt-4 text-[26px] font-semibold tracking-[-0.025em] text-[#1d1d1f] dark:text-[#f5f5f7] sm:text-[32px]">
          The page you’re looking for can’t be found.
        </h1>
        <p className="mt-3 max-w-md text-[16px] leading-relaxed text-[#6e6e73] dark:text-[#86868b]">
          The link may be outdated, or the resource might have been archived. Double-check the URL, or head back to the homepage.
        </p>
        <div className="mt-8 flex items-center gap-3">
          <Link
            href="/"
            className="inline-flex h-11 items-center rounded-full bg-[#0071e3] px-6 text-[15px] font-medium text-white shadow-xs transition-all hover:bg-[#0077ed] active:scale-95"
          >
            Return to Safety
          </Link>
          <Link
            href="/blog"
            className="inline-flex h-11 items-center rounded-full bg-black/[0.05] px-6 text-[15px] font-medium text-[#1d1d1f] transition-all hover:bg-black/[0.1] dark:bg-white/[0.1] dark:text-[#f5f5f7]"
          >
            Explore Journal
          </Link>
        </div>
      </div>
    </Container>
  );
}
