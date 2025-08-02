import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { allSnippets } from '.contentlayer/generated';
import Container from 'components/Container';
import FunctionCard from 'components/FunctionCard';
import { pick } from 'lib/utils';
import type { InferGetStaticPropsType } from 'next';

export default function Snippets({
  snippets
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [searchValue, setSearchValue] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Extract unique categories from snippets
  const categories = useMemo(() => {
    const cats = new Set(['all']);
    snippets.forEach(snippet => {
      // Infer category from title or description
      const title = snippet.title.toLowerCase();
      const desc = snippet.description.toLowerCase();
      
      if (title.includes('react') || desc.includes('react')) cats.add('react');
      if (title.includes('node') || desc.includes('node') || title.includes('server')) cats.add('backend');
      if (title.includes('css') || desc.includes('css') || title.includes('style')) cats.add('css');
      if (title.includes('js') || title.includes('javascript') || desc.includes('javascript')) cats.add('javascript');
      if (title.includes('api') || desc.includes('api')) cats.add('api');
      if (title.includes('util') || desc.includes('util') || title.includes('helper')) cats.add('utilities');
    });
    return Array.from(cats);
  }, [snippets]);

  const filteredSnippets = useMemo(() => {
    return snippets.filter(snippet => {
      const matchesSearch = snippet.title.toLowerCase().includes(searchValue.toLowerCase()) ||
                           snippet.description.toLowerCase().includes(searchValue.toLowerCase());
      
      if (selectedCategory === 'all') return matchesSearch;
      
      const title = snippet.title.toLowerCase();
      const desc = snippet.description.toLowerCase();
      
      const matchesCategory = (
        (selectedCategory === 'react' && (title.includes('react') || desc.includes('react'))) ||
        (selectedCategory === 'backend' && (title.includes('node') || desc.includes('node') || title.includes('server'))) ||
        (selectedCategory === 'css' && (title.includes('css') || desc.includes('css') || title.includes('style'))) ||
        (selectedCategory === 'javascript' && (title.includes('js') || title.includes('javascript') || desc.includes('javascript'))) ||
        (selectedCategory === 'api' && (title.includes('api') || desc.includes('api'))) ||
        (selectedCategory === 'utilities' && (title.includes('util') || desc.includes('util') || title.includes('helper')))
      );
      
      return matchesSearch && matchesCategory;
    });
  }, [snippets, searchValue, selectedCategory]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  return (
    <Container
      title="Code Snippets – Harshit Kumar"
      description="A collection of code snippets – including serverless functions, Node.js scripts, and CSS tricks."
    >
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary-400/10 to-secondary-400/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-accent-400/10 to-primary-400/10 rounded-full blur-3xl animate-pulse-slow"></div>
        </div>

        <motion.div 
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <motion.h1 
              className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Code <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">Snippets</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              A curated collection of useful code snippets, functions, and utilities I've built and used in various projects. 
              From React components to Node.js utilities and CSS tricks.
            </motion.p>

            {/* Stats */}
            <motion.div 
              className="flex flex-wrap justify-center gap-8 mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">{snippets.length}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">Code Snippets</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary-600 dark:text-secondary-400">{categories.length - 1}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">Categories</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-600 dark:text-accent-400">⚡</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">Ready to Use</div>
              </div>
            </motion.div>

            {/* Enhanced Search */}
            <motion.div 
              className="max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-2xl blur-xl"></div>
                <div className="relative bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-soft hover:shadow-medium transition-all duration-300">
                  <input
                    aria-label="Search code snippets"
                    type="text"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    placeholder="Search snippets by title or description..."
                    className="w-full px-6 py-4 text-lg bg-transparent border-none rounded-2xl text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-0"
                  />
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                    <svg className="w-6 h-6 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Categories & Results */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <motion.div 
            className="flex flex-wrap justify-center gap-3 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-primary-600 to-secondary-600 text-white shadow-glow-lg'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </motion.button>
            ))}
          </motion.div>

          {/* Results Header */}
          <motion.div 
            className="flex items-center justify-between mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                {searchValue ? 'Search Results' : selectedCategory === 'all' ? 'All Snippets' : `${selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)} Snippets`}
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                {searchValue 
                  ? `Found ${filteredSnippets.length} snippet${filteredSnippets.length !== 1 ? 's' : ''} matching "${searchValue}"`
                  : `Showing ${filteredSnippets.length} snippet${filteredSnippets.length !== 1 ? 's' : ''}`
                }
              </p>
            </div>
            
            {(searchValue || selectedCategory !== 'all') && (
              <motion.button
                onClick={() => {
                  setSearchValue('');
                  setSelectedCategory('all');
                }}
                className="px-4 py-2 text-sm font-medium text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20 rounded-xl hover:bg-primary-100 dark:hover:bg-primary-900/30 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Clear filters
              </motion.button>
            )}
          </motion.div>

          {/* No Results */}
          {!filteredSnippets.length && (
            <motion.div 
              className="text-center py-20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                No snippets found
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Try adjusting your search terms or browse all snippets.
              </p>
              <button
                onClick={() => {
                  setSearchValue('');
                  setSelectedCategory('all');
                }}
                className="px-6 py-3 bg-gradient-to-r from-primary-600 to-secondary-600 text-white font-semibold rounded-xl hover:shadow-glow-lg transition-all duration-300"
              >
                View All Snippets
              </button>
            </motion.div>
          )}

          {/* Snippets Grid */}
          {filteredSnippets.length > 0 && (
            <motion.div 
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {filteredSnippets.map((snippet, index) => (
                <motion.div
                  key={snippet.slug}
                  variants={itemVariants}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <FunctionCard
                    title={snippet.title}
                    slug={snippet.slug}
                    logo={snippet.logo}
                    description={snippet.description}
                  />
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </section>
    </Container>
  );
}

export function getStaticProps() {
  const snippets = allSnippets.map((snippet) =>
    pick(snippet, ['slug', 'title', 'logo', 'description'])
  );

  return { props: { snippets } };
}
