import Container from 'components/Container';
import Subscribe from 'components/Subscribe';
import NewsletterLink from 'components/NewsletterLink';
import { allNewsletters } from '.contentlayer/generated';
import { pick } from 'lib/utils';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function Newsletter({ newsletters }) {
  const stats = {
    totalIssues: newsletters.length,
    frequency: 'Monthly',
    topics: ['Tech', 'Programming', 'Industry Insights']
  };

  return (
    <Container
      title="Newsletter – Harshit Kumar"
      description="Thoughts on the software industry, programming, tech, videography, music, and my personal life."
    >
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary-400/10 to-secondary-400/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-accent-400/10 to-primary-400/10 rounded-full blur-3xl animate-pulse-slow"></div>
        </div>

        <motion.div 
          className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Header */}
          <motion.div className="mb-12" variants={itemVariants}>
            <motion.h1 
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight"
              variants={itemVariants}
            >
              <span className="bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600 bg-clip-text text-transparent">
                Newsletter
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl sm:text-2xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl mx-auto mb-8"
              variants={itemVariants}
            >
              Get behind-the-scenes insights into what I'm building, learning, and discovering in the world of technology.
            </motion.p>
            
            {/* Stats */}
            <motion.div 
              className="flex flex-wrap justify-center gap-6 sm:gap-8 mb-12"
              variants={itemVariants}
            >
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-primary-600 dark:text-primary-400">
                  {stats.totalIssues}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                  Issues Published
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-secondary-600 dark:text-secondary-400">
                  {stats.frequency}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                  Publishing Schedule
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-accent-600 dark:text-accent-400">
                  3+
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                  Core Topics
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Enhanced Subscribe Section */}
          {/* <motion.div className="mb-16" variants={itemVariants}>
            <Subscribe />
          </motion.div> */}

          {/* What You'll Get */}
          <motion.div className="mb-16" variants={itemVariants}>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
              What you'll get
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Tech Insights
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Deep dives into emerging technologies, frameworks, and industry trends.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-secondary-500 to-secondary-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Code & Projects
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Behind-the-scenes look at my projects, code snippets, and development process.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-accent-500 to-accent-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Learning Resources
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Curated articles, tools, and resources that I find valuable and worth sharing.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Archive Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Newsletter Archive
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Browse through all {stats.totalIssues} published issues
              </p>
            </div>
            
            {newsletters.length > 0 ? (
              <div className="grid gap-4">
                {newsletters
                  .sort(
                    (a, b) =>
                      Number(new Date(b.publishedAt)) -
                      Number(new Date(a.publishedAt))
                  )
                  .map((newsletter, index) => (
                    <motion.div
                      key={newsletter.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <NewsletterLink {...newsletter} />
                    </motion.div>
                  ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="w-24 h-24 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  No newsletters yet
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Subscribe to be notified when the first issue is published!
                </p>
              </div>
            )}
          </motion.div>
        </div>
      </section>
    </Container>
  );
}

export async function getStaticProps() {
  const newsletters = allNewsletters.map((newsletter) =>
    pick(newsletter, ['slug', 'title', 'summary', 'publishedAt'])
  );

  return { props: { newsletters } };
}
