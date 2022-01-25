import { writeFileSync } from 'fs';
import RSS from 'rss';
import { allBlogs } from '.contentlayer/data';

async function generate() {
  const feed = new RSS({
    title: 'Harshit Kumar',
    site_url: 'https://harshitkumar31.github.io',
    feed_url: 'https://harshitkumar31.github.io/feed.xml'
  });

  allBlogs.map((post) => {
    feed.item({
      title: post.title,
      url: `https://harshitkumar31.github.io/blog/${post.slug}`,
      date: post.publishedAt,
      description: post.summary
    });
  });

  writeFileSync('./public/feed.xml', feed.xml({ indent: true }));
}

generate();
