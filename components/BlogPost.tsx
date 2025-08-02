import Link from 'next/link';
import { motion } from 'framer-motion';
import useSWR from 'swr';

import fetcher from 'lib/fetcher';
import { Views } from 'lib/types';
import type { Blog } from '.contentlayer/generated';

export default function BlogPost({
  title,
  summary,
  slug,
  publishedAt
}: Pick<Blog, 'title' | 'summary' | 'slug' | 'publishedAt'>) {
  const { data } = useSWR<Views>(`/api/views/${slug}`, fetcher);
  const views = data?.total;

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <motion.div
      className="group h-full"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <Link href={`/blog/${slug}`}>
        <div className="relative h-full">
          {/* Gradient Border Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 via-secondary-500/20 to-accent-500/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
          
          {/* Card Content */}
          <div className="relative h-full bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-soft hover:shadow-medium transition-all duration-300 p-6 flex flex-col">
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                  {title}
                </h3>
                
                {/* Meta Info */}
                <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                  {publishedAt && (
                    <div className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span>{formatDate(publishedAt)}</span>
                    </div>
                  )}
                  
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    <span>{views ? new Number(views).toLocaleString() : '–––'} views</span>
                  </div>
                </div>
              </div>
              
              {/* Arrow Icon */}
              <div className="ml-4 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                <svg className="w-5 h-5 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
            
            {/* Summary */}
            <div className="flex-1">
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-3">
                {summary}
              </p>
            </div>
            
            {/* Footer */}
            <div className="mt-6 pt-4 border-t border-gray-100 dark:border-gray-800">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-primary-600 dark:text-primary-400 group-hover:text-primary-700 dark:group-hover:text-primary-300 transition-colors">
                  Read article
                </span>
                
                {/* Reading Time Estimate */}
                {/* <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>~{Math.max(1, Math.ceil(summary.split(' ').length / 200))} min read</span>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
