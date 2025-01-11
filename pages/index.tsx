import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';


import Container from '../components/Container';
import BlogPostCard from '../components/BlogPostCard';
import ViewCounter from 'components/ViewCounter';
import useSWR from 'swr';
import { Views as ViewsType } from 'lib/types';
import fetcher from 'lib/fetcher';

function Views({ slug }: { slug: string }) {
  const { data } = useSWR<ViewsType>(`/api/views/${slug}`, fetcher);
  const views = new Number(data?.total || 0);
  return (<p className="text-neutral-600 dark:text-neutral-400">
    {`${views.toLocaleString()} views`}
  </p>);
}

function BlogLink({ slug, name }) {
  return (
    <div className="group">
      <a
        href={`/blog/${slug}`}
        className="flex w-full items-center justify-between rounded border border-neutral-200 bg-neutral-50 px-3 py-4 dark:border-neutral-700 dark:bg-neutral-800"
      >
        <div className="flex flex-col">
          <p className="font-medium text-neutral-900 dark:text-neutral-100">
            {name}
          </p>
          <Suspense fallback={<p className="h-6" />}>
            <Views slug={slug} />
          </Suspense>
        </div>
        <div className="transform text-neutral-700 transition-transform duration-300 group-hover:-rotate-12 dark:text-neutral-300">
          {/* <ArrowIcon /> */}
        </div>
      </a>
    </div>
  );
}


export default function Home({ videos }) {
  return (
    <Container>
      <div className="flex flex-col justify-center items-start max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-16">
        <div className="flex flex-col-reverse sm:flex-row items-start">
          <div className="flex flex-col pr-8">
            <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-black dark:text-white">
              Harshit Kumar
            </h1>
            <h2 className="text-gray-700 dark:text-gray-200 mb-4">
              Staff Software Engineer at{' '}
              <span className="font-semibold">Walmart</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-16">
              Innovative and results-driven Staff Software Engineer at Walmart Global Tech with a strong background in orchestrating GraphQL services.
              <br></br>Proven success in leading cross-functional teams,implementing industry-leading software development practices, and optimising platform offerings.
              <br></br>Previous roles include Software Engineer at Quikr, where I spearheaded the development of Progressive Web Apps.
              <br></br>
              Adept at full-stack development and skilled in Node.js, React.js, GraphQL, Rust, Python, PHP, C++.
              <br></br>
            </p>
          </div>
          <div className="w-[80px] sm:w-[176px] relative mb-8 sm:mb-0 mr-auto">
            <Image
              alt="Harshit Kumar"
              height={176}
              width={176}
              src="/avatar4.jpg"
              className="rounded-full filter"
            />
          </div>
        </div>
        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-6 text-black dark:text-white">
          Featured Posts
        </h3>
        <div className="my-8 flex w-full flex-col space-y-4">
          <BlogLink
            name="Resources I wish I knew when I started my career"
            slug="beginner-resources"
          />
          <BlogLink
            name="Diagrams as Code"
            slug="diagrams-as-code"
          />
          <BlogLink
            name="Creating a Proxy for your GraphQL Server"
            slug="graphql-proxy"
          />

        </div>
        <Link legacyBehavior href="/blog">
          <a className="flex mt-8 text-gray-600 dark:text-gray-400 leading-7 rounded-lg hover:text-gray-800 dark:hover:text-gray-200 transition-all h-6">
            Read all posts
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="h-6 w-6 ml-1"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.5 12h-15m11.667-4l3.333 4-3.333-4zm3.333 4l-3.333 4 3.333-4z"
              />
            </svg>
          </a>
        </Link>

      </div>
    </Container>
  );
}
