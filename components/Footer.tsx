import Link from 'next/link';

import NowPlaying from 'components/NowPlaying';

const ExternalLink = ({ href, children }) => (
  <a
    className="text-gray-500 hover:text-gray-600 transition"
    target="_blank"
    rel="noopener noreferrer"
    href={href}
  >
    {children}
  </a>
);

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center items-start max-w-2xl mx-auto w-full mb-8">
      <hr className="w-full border-1 border-gray-200 dark:border-gray-800 mb-8" />
      {/* <NowPlaying /> */}
      <div className="w-full max-w-2xl grid grid-cols-1 gap-4 pb-16 sm:grid-cols-3">
        <div className="flex flex-col space-y-4">
          <Link legacyBehavior href="/">
            <a className="text-gray-500 hover:text-gray-600 transition">Home</a>
          </Link>
          <Link legacyBehavior href="/about">
            <a className="text-gray-500 hover:text-gray-600 transition">
              About
            </a>
          </Link>
        </div>
        <div className="flex flex-col space-y-4">
          <ExternalLink href="https://www.linkedin.com/in/harshitkumar31">
            LinkedIn
          </ExternalLink>
          <ExternalLink href="https://github.com/harshitkumar31">GitHub</ExternalLink>
          <ExternalLink href="https://www.youtube.com/channel/UCBQISzmK1iI91Qv0kbZFBWg">
            YouTube
          </ExternalLink>
        </div>
        <div className="flex flex-col space-y-4">
          <Link legacyBehavior href="/uses">
            <a className="text-gray-500 hover:text-gray-600 transition">Uses</a>
          </Link>
          <Link legacyBehavior href="/snippets">
            <a className="text-gray-500 hover:text-gray-600 transition">
              Snippets
            </a>
          </Link>
        </div>
      </div>
    </footer>
  );
}
