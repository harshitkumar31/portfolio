import { useState } from 'react';
import { motion } from 'framer-motion';
import { GetStaticProps } from 'next';

import Container from 'components/Container';
import Guestbook from 'components/Guestbook';
import { getGuestbookEntries } from 'lib/guestbook';

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

export default function GuestbookPage({ fallbackData }) {
  const stats = {
    totalEntries: fallbackData?.length || 0,
    recentActivity: 'Active community',
    purpose: 'Share thoughts & connect'
  };

  return (
    <Container
      title="Guestbook – Harshit Kumar"
      description="Sign my digital guestbook and leave a message for future visitors."
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
                Guestbook
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl sm:text-2xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl mx-auto mb-8"
              variants={itemVariants}
            >
              Leave a message, share your thoughts, or just say hello. Your words will be part of this site's story.
            </motion.p>
            
            {/* Stats */}
            <motion.div 
              className="flex flex-wrap justify-center gap-6 sm:gap-8 mb-12"
              variants={itemVariants}
            >
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-primary-600 dark:text-primary-400">
                  {stats.totalEntries}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                  Messages Shared
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-secondary-600 dark:text-secondary-400">
                  ∞
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                  Welcome Visitors
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-accent-600 dark:text-accent-400">
                  24/7
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                  Always Open
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Community Features */}
          <motion.div className="grid md:grid-cols-3 gap-8 mb-16" variants={itemVariants}>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Share Your Thoughts
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Leave a message, feedback, or just say hello to future visitors.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-secondary-500 to-secondary-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Connect with Community
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Join a growing community of developers, creators, and curious minds.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-accent-500 to-accent-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Spread Positivity
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Share encouragement, inspiration, or interesting insights with others.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Guestbook Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Guestbook fallbackData={fallbackData} />
          </motion.div>
        </div>
      </section>
    </Container>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const entries = await getGuestbookEntries();

  return {
    props: {
      fallbackData: entries
    },
    revalidate: 60
  };
};
