import type { NextApiRequest, NextApiResponse } from 'next';
import { allBlogs, allSnippets } from '.contentlayer/generated';
import type { SpotlightItem } from 'lib/types';

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<SpotlightItem[]>
) {
  const blogItems: SpotlightItem[] = allBlogs
    .sort(
      (a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
    )
    .map((blog) => ({
      id: `art-${blog.slug}`,
      title: blog.title,
      category: 'Articles' as const,
      href: `/blog/${blog.slug}`,
      hint: blog.summary
    }));

  const snippetItems: SpotlightItem[] = allSnippets.map((snippet) => ({
    id: `snip-${snippet.slug}`,
    title: snippet.title,
    category: 'Snippets' as const,
    href: `/snippets/${snippet.slug}`,
    hint: snippet.description
  }));

  const items = [...blogItems, ...snippetItems];

  res.setHeader(
    'Cache-Control',
    'public, s-maxage=3600, stale-while-revalidate=86400'
  );

  return res.status(200).json(items);
}

