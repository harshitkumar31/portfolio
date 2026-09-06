import { useState } from 'react';
import { InferGetStaticPropsType } from 'next';

import Container from 'components/Container';
import BlogPost from 'components/BlogPost';
import PageHeader from 'components/PageHeader';
import { pick } from 'lib/utils';
import { allBlogs } from '.contentlayer/generated';

const CATEGORIES = ['All', 'Platform & GraphQL', 'Homelab & Hardware', 'Career & Growth'];

export default function Blog({
  posts
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [searchValue, setSearchValue] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredBlogPosts = posts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchValue.toLowerCase()) ||
      post.summary.toLowerCase().includes(searchValue.toLowerCase());

    if (!matchesSearch) return false;

    if (activeCategory === 'All') return true;
    if (activeCategory === 'Platform & GraphQL') {
      return post.slug.includes('graphql') || post.slug.includes('diagrams');
    }
    if (activeCategory === 'Homelab & Hardware') {
      return post.slug.includes('nas');
    }
    if (activeCategory === 'Career & Growth') {
      return post.slug.includes('resources') || post.slug.includes('beginner');
    }
    return true;
  });

  return (
    <Container
      title="Journal & Blog – Harshit Kumar"
      description="In-depth explorations on distributed systems, GraphQL, homelab hardware, and engineering leadership."
    >
      <div className="mx-auto mb-16 w-full max-w-[800px]">
        {/* Apple Page Header */}
        <PageHeader
          eyebrow="Writing & Dispatches"
          title="The Engineering Journal"
          description="Exploring the architecture of distributed systems, self-hosting hardware, and the lessons learned shipping software."
        />

        {/* Apple Search & Filter Bar */}
        <div className="mb-6 flex flex-col gap-4">
          {/* Search Capsule Input */}
          <div className="relative">
            <input
              aria-label="Search articles"
              type="text"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Search by topic, keyword, or title..."
              className="h-12 w-full rounded-full border border-black/[0.08] bg-black/[0.03] pl-12 pr-10 text-[15px] text-[#1d1d1f] outline-none placeholder:text-[#86868b] focus:border-[#0071e3] focus:bg-white focus:shadow-apple-glow dark:border-white/[0.1] dark:bg-white/[0.06] dark:text-[#f5f5f7] dark:focus:bg-[#161617] transition-all"
            />
            <svg
              className="absolute left-4 top-3.5 h-5 w-5 text-[#86868b]"
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
            {searchValue && (
              <button
                type="button"
                onClick={() => setSearchValue('')}
                className="absolute right-3.5 top-3.5 h-5 w-5 rounded-full bg-black/10 dark:bg-white/10 flex items-center justify-center text-[12px] text-[#86868b] hover:text-[#1d1d1f] dark:hover:text-white"
              >
                ✕
              </button>
            )}
          </div>

          {/* Segmented Control Category Filter */}
          <div className="flex flex-wrap gap-1.5 p-1 rounded-2xl bg-black/[0.03] dark:bg-white/[0.04] border border-black/[0.04] dark:border-white/[0.06]">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`rounded-xl px-3.5 py-1.5 text-[13px] font-medium transition-all ${
                  activeCategory === cat
                    ? 'bg-white text-[#1d1d1f] shadow-xs dark:bg-white/[0.14] dark:text-white'
                    : 'text-[#6e6e73] hover:text-[#1d1d1f] dark:text-[#86868b] dark:hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Apple Inset Article List */}
        <div className="apple-inset divide-y divide-black/[0.06] dark:divide-white/[0.08]">
          {filteredBlogPosts.length === 0 ? (
            <div className="py-16 text-center">
              <p className="text-[17px] font-medium text-[#1d1d1f] dark:text-[#f5f5f7]">
                No articles found
              </p>
              <p className="mt-1 text-[14px] text-[#86868b]">
                Try adjusting your search query or switching categories.
              </p>
            </div>
          ) : (
            filteredBlogPosts.map((post) => (
              <BlogPost key={post.title} {...post} />
            ))
          )}
        </div>
      </div>
    </Container>
  );
}

export function getStaticProps() {
  const posts = allBlogs
    .map((post) => pick(post, ['slug', 'title', 'summary', 'publishedAt']))
    .sort(
      (a, b) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
    );

  return { props: { posts } };
}
