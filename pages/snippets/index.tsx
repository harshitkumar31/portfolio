import { useState } from 'react';
import { allSnippets } from '.contentlayer/generated';
import Container from 'components/Container';
import FunctionCard from 'components/FunctionCard';
import PageHeader from 'components/PageHeader';
import { pick } from 'lib/utils';
import type { InferGetStaticPropsType } from 'next';

export default function Snippets({
  snippets
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [search, setSearch] = useState('');

  const filteredSnippets = snippets.filter((s) =>
    s.title.toLowerCase().includes(search.toLowerCase()) ||
    s.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Container
      title="Code Snippets – Harshit Kumar"
      description="A curated library of developer utilities, shell shortcuts, and reusable architecture snippets."
    >
      <div className="mx-auto mb-16 w-full max-w-[1020px]">
        {/* Apple Page Header */}
        <PageHeader
          eyebrow="Developer Library"
          title="Code Snippets"
          description="Curated utilities, automation scripts, and patterns I frequently reach for across Node.js, Git, Shell, and frontend architecture."
        />

        {/* Search Bar */}
        <div className="relative mb-8 max-w-md">
          <input
            aria-label="Search snippets"
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search snippets..."
            className="h-11 w-full rounded-full border border-black/[0.08] bg-black/[0.03] pl-11 pr-4 text-[15px] text-[#1d1d1f] outline-none placeholder:text-[#86868b] focus:border-[#0071e3] focus:bg-white focus:shadow-apple-glow dark:border-white/[0.1] dark:bg-white/[0.06] dark:text-[#f5f5f7] dark:focus:bg-[#161617] transition-all"
          />
          <svg
            className="absolute left-3.5 top-3 h-4 w-4 text-[#86868b]"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>

        {/* Snippets Grid */}
        <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filteredSnippets.length === 0 ? (
            <div className="col-span-full py-12 text-center text-[#86868b]">
              No snippets matched your search.
            </div>
          ) : (
            filteredSnippets.map((snippet) => (
              <FunctionCard
                key={snippet.slug}
                title={snippet.title}
                slug={snippet.slug}
                logo={snippet.logo}
                description={snippet.description}
              />
            ))
          )}
        </div>
      </div>
    </Container>
  );
}

export function getStaticProps() {
  const snippets = allSnippets.map((snippet) =>
    pick(snippet, ['slug', 'title', 'logo', 'description'])
  );

  return { props: { snippets } };
}
