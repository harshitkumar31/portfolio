import Link from 'next/link';
import { parseISO, format } from 'date-fns';
import { motion } from 'framer-motion';
import type { Newsletter } from '.contentlayer/generated';

export default function NewsletterLink({
  slug,
  title,
  summary,
  publishedAt
}: Pick<Newsletter, 'publishedAt' | 'slug' | 'title' | 'summary'>) {
  const formattedDate = format(parseISO(publishedAt), 'MMMM dd, yyyy');
  const issueNumber = slug.replace(/\D/g, '') || '1';

  return (
    <motion.div
      className="group"
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2 }}
    >
      <Link href={`/newsletter/${slug}`}>
        <div className="relative">
          {/* Gradient Border Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 via-secondary-500/10 to-accent-500/10 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
          
          {/* Card Content */}
          <div className="relative bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-soft hover:shadow-medium transition-all duration-300 p-6">
            <div className="flex items-start justify-between">
              {/* Content */}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  {/* Issue Number Badge */}
                  <div className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    Issue #{issueNumber}
                  </div>
                  
                  {/* Date */}
                  <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>{formattedDate}</span>
                  </div>
                </div>
                
                {/* Title */}
                {title && (
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                    {title}
                  </h3>
                )}
                
                {/* Summary */}
                {summary && (
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-2">
                    {summary}
                  </p>
                )}
                
                {/* Read More Link */}
                <div className="mt-4 flex items-center gap-2 text-primary-600 dark:text-primary-400 font-medium group-hover:text-primary-700 dark:group-hover:text-primary-300 transition-colors">
                  <span>Read newsletter</span>
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
              
              {/* Newsletter Icon */}
              <div className="ml-4 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
