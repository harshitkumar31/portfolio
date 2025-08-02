import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

import Container from 'components/Container';

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

export default function Chat() {
    const [isLoading, setIsLoading] = useState(true);
    const [isOnline, setIsOnline] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    const features = [
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
            ),
            title: "Real-time Conversations",
            description: "Chat with an AI trained on my career, experiences, and knowledge"
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
            ),
            title: "Tech Insights",
            description: "Get answers about my projects, tech stack, and development approach"
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6.5" />
                </svg>
            ),
            title: "Career Advice",
            description: "Learn about my journey, decisions, and lessons learned in tech"
        }
    ];

    return (
        <Container title="Chat with Harshit Kumar">
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
                                Chat with Me
                            </span>
                        </motion.h1>
                        
                        <motion.p 
                            className="text-xl sm:text-2xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl mx-auto mb-8"
                            variants={itemVariants}
                        >
                            Have a conversation with an AI trained on my career, experiences, and knowledge. Ask me anything about tech, my projects, or career advice.
                        </motion.p>
                        
                        {/* Status Indicator */}
                        <motion.div 
                            className="flex items-center justify-center gap-3 mb-8"
                            variants={itemVariants}
                        >
                            <div className={`w-3 h-3 rounded-full ${
                                isOnline ? 'bg-green-500 animate-pulse' : 'bg-gray-400'
                            }`}></div>
                            <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                                {isOnline ? 'AI Assistant Online' : 'AI Assistant Offline'}
                            </span>
                        </motion.div>
                    </motion.div>

                    {/* Features */}
                    <motion.div className="grid md:grid-cols-3 gap-8 mb-16" variants={itemVariants}>
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                className="text-center"
                                variants={itemVariants}
                            >
                                <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400">
                                    {feature.description}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </section>

            {/* Chat Interface Section */}
            <section className="py-16">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="relative"
                    >
                        {/* Chat Container */}
                        <div className="relative">
                            {/* Gradient Border Effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 via-secondary-500/20 to-accent-500/20 rounded-3xl blur-lg opacity-75"></div>
                            
                            {/* Chat Card */}
                            <div className="relative bg-white dark:bg-gray-900 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-soft overflow-hidden">
                                {/* Chat Header */}
                                <div className="bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-gray-800 dark:to-gray-800 border-b border-gray-200 dark:border-gray-700 p-6">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center">
                                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                                </svg>
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                                    Harshit Kumar AI
                                                </h3>
                                                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                                                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                                    <span>Online and ready to chat</span>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="text-sm text-gray-500 dark:text-gray-400">
                                            Powered by AI
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Loading State */}
                                {isLoading && (
                                    <div className="flex items-center justify-center h-96 bg-gray-50 dark:bg-gray-800">
                                        <div className="text-center">
                                            <div className="w-12 h-12 border-4 border-primary-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                                            <p className="text-gray-600 dark:text-gray-400 font-medium">
                                                Loading chat interface...
                                            </p>
                                        </div>
                                    </div>
                                )}
                                
                                {/* Chat Iframe */}
                                <div className={`transition-opacity duration-500 ${
                                    isLoading ? 'opacity-0 absolute inset-0' : 'opacity-100'
                                }`}>
                                    <div className="relative w-full" style={{ height: '700px' }}>
                                        <iframe
                                            src="https://harshitkumar31-career-conversations.hf.space"
                                            className="w-full h-full border-0"
                                            title="Chat with Harshit Kumar AI"
                                            allow="microphone; camera"
                                            onLoad={() => setIsLoading(false)}
                                            onError={() => {
                                                setIsLoading(false);
                                                setIsOnline(false);
                                            }}
                                        />
                                    </div>
                                </div>
                                
                                {/* Chat Footer */}
                                <div className="bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 p-4">
                                    <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
                                        <div className="flex items-center gap-4">
                                            <div className="flex items-center gap-2">
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                                </svg>
                                                <span>Secure & Private</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                                </svg>
                                                <span>Instant Responses</span>
                                            </div>
                                        </div>
                                        <div className="text-xs">
                                            Conversations are not stored
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Tips Section */}
                        <div className="mt-12 grid md:grid-cols-2 gap-6">
                            <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 p-6">
                                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                                    💡 What to ask
                                </h4>
                                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                                    <li>• "Tell me about your experience with React/Next.js"</li>
                                    <li>• "What's your approach to building scalable applications?"</li>
                                    <li>• "How did you transition into tech?"</li>
                                    <li>• "What advice do you have for junior developers?"</li>
                                </ul>
                            </div>
                            
                            <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 p-6">
                                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                                    🚀 Pro Tips
                                </h4>
                                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                                    <li>• Be specific in your questions for better answers</li>
                                    <li>• Ask follow-up questions to dive deeper</li>
                                    <li>• Feel free to ask about both technical and career topics</li>
                                    <li>• The AI has context about my projects and experiences</li>
                                </ul>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </Container>
    );
}
