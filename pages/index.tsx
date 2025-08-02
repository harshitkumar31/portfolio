import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';
import { motion } from 'framer-motion';

import Container from 'components/Container';
import BlogPostCard from 'components/BlogPostCard';
import VideoCard from 'components/VideoCard';
import ViewCounter from 'components/ViewCounter';
import useSWR from 'swr';
import { Views as ViewsType } from 'lib/types';
import fetcher from 'lib/fetcher';
import { InferGetStaticPropsType } from 'next';
import { pick } from 'lib/utils';
import { allBlogs } from 'contentlayer/generated';

function Views({ slug }: { slug: string }) {
  const { data } = useSWR<ViewsType>(`/api/views/${slug}`, fetcher);
  const views = new Number(data?.total || 0);
  return (<p className="text-neutral-600 dark:text-neutral-400">
    {`${views.toLocaleString()} views`}
  </p>);
}

function BlogLink({ name, slug }) {
  return (
    <motion.div 
      className="group cursor-pointer"
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
    >
      <Link href={`/blog/${slug}`}>
        <div className="relative p-1">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition-all duration-500"></div>
          <div className="relative bg-white dark:bg-gray-900 ring-1 ring-gray-200 dark:ring-gray-700 rounded-2xl leading-none flex items-top justify-start space-x-6 p-6 shadow-soft hover:shadow-medium transition-all duration-300">
            <div className="space-y-2">
              <p className="text-gray-900 dark:text-gray-100 font-semibold text-lg">{name}</p>
              <div className="flex items-center space-x-2 text-sm text-primary-600 dark:text-primary-400 font-medium">
                <span>Read more</span>
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default function Home({ videos }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  return (
    <>
      <Container>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary-400/20 to-secondary-400/20 rounded-full blur-3xl animate-float"></div>
            <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-accent-400/20 to-primary-400/20 rounded-full blur-3xl animate-pulse-slow"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary-500/5 to-secondary-500/5 rounded-full blur-3xl"></div>
          </div>

          <motion.div 
            className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Content */}
              <motion.div className="text-center lg:text-left space-y-8" variants={itemVariants}>
                {/* Status Badge */}
                <motion.div 
                  className="inline-flex items-center gap-2 px-4 py-2 bg-accent-50 dark:bg-accent-900/20 border border-accent-200 dark:border-accent-700/50 rounded-full text-accent-700 dark:text-accent-300 text-sm font-medium"
                  whileHover={{ scale: 1.05 }}
                  variants={itemVariants}
                >
                  <div className="w-2 h-2 bg-accent-500 rounded-full animate-pulse"></div>
                  Available for new opportunities
                </motion.div>

                {/* Main Heading */}
                <motion.div variants={itemVariants}>
                  <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight">
                    <span className="block bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 dark:from-white dark:via-gray-100 dark:to-white bg-clip-text text-transparent">
                      Harshit
                    </span>
                    <span className="block bg-gradient-to-r from-primary-600 via-secondary-500 to-primary-600 bg-clip-text text-transparent">
                      Kumar
                    </span>
                  </h1>
                </motion.div>

                {/* Role & Company */}
                <motion.div className="space-y-4" variants={itemVariants}>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-700 dark:text-gray-300">
                    Staff Software Engineer
                  </h2>
                  <div className="flex items-center justify-center lg:justify-start gap-3">
                    <span className="text-xl text-gray-600 dark:text-gray-400">at</span>
                    <motion.span 
                      className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent"
                      whileHover={{ scale: 1.05 }}
                    >
                      Walmart Global Tech
                    </motion.span>
                  </div>
                </motion.div>

                {/* Description */}
                <motion.div className="space-y-6" variants={itemVariants}>
                  <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
                    🚀 Innovative and results-driven Staff Software Engineer with expertise in orchestrating GraphQL services and leading cross-functional teams.
                  </p>
                  <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
                    ⚡ Proven success in implementing industry-leading software development practices and optimizing platform offerings at scale.
                  </p>
                  <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
                    💡 Skilled in full-stack development with expertise in Node.js, React.js, GraphQL, Rust, Python, and modern web technologies.
                  </p>
                </motion.div>

                {/* Tech Stack Pills */}
                <motion.div 
                  className="flex flex-wrap justify-center lg:justify-start gap-3"
                  variants={itemVariants}
                >
                  {['Node.js', 'React.js', 'GraphQL', 'TypeScript', 'Rust', 'Python'].map((tech, index) => (
                    <motion.span
                      key={tech}
                      className="px-4 py-2 text-sm font-semibold bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 text-primary-700 dark:text-primary-300 rounded-full border border-primary-200 dark:border-primary-700/50 shadow-soft hover:shadow-medium transition-all duration-300"
                      whileHover={{ scale: 1.05, y: -2 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 + 0.8 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>

              {/* Profile Image */}
              <motion.div className="relative flex justify-center lg:justify-end" variants={itemVariants}>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-full blur-2xl opacity-20 animate-pulse-slow"></div>
                  <motion.div
                    className="relative"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image
                      alt="Harshit Kumar"
                      height={400}
                      width={400}
                      src="/avatar4.jpg"
                      className="relative z-10 rounded-full border-4 border-white dark:border-gray-800 shadow-2xl w-64 h-64 lg:w-80 lg:h-80 object-cover"
                      priority
                    />
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Featured Posts Section */}
        <section className="py-20">
          <motion.div 
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-16">
              <h3 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                Featured <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">Posts</span>
              </h3>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Explore my latest thoughts on software engineering, technology, and career development.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <BlogLink name="Setup a NAS + Homelab using Raspberry Pi" slug="setup-a-nas" />
              <BlogLink name="Resources I wish I knew when I started my career" slug="beginner-resources" />
              <BlogLink name="Diagrams as Code" slug="diagrams-as-code" />
              <BlogLink name="Creating a Proxy for your GraphQL Server" slug="graphql-proxy" />
            </div>

            {/* Read all posts CTA */}
            <div className="text-center">
              <Link href="/blog">
                <motion.div 
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-600 to-secondary-600 text-white font-semibold rounded-2xl shadow-large hover:shadow-glow-lg transition-all duration-300 group"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Read all posts</span>
                  <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </motion.div>
              </Link>
            </div>
          </motion.div>
        </section>
      </Container>
    </>
  );
}
