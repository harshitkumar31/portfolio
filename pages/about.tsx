import Image from 'next/image';
import { motion } from 'framer-motion';
import Timeline from '../components/Timeline';
import Container from 'components/Container';

export default function About() {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  const skills = {
    "Languages": ["JavaScript", "TypeScript", "Python", "Rust", "Java", "PHP", "C++"],
    "Frontend": ["React.js", "Next.js", "Vue.js", "Tailwind CSS", "HTML5", "CSS3"],
    "Backend": ["Node.js", "GraphQL", "REST APIs", "Express.js", "Apollo Federation"],
    "Databases": ["PostgreSQL", "MongoDB", "Redis", "MySQL"],
    "Tools & Platforms": ["Docker", "Kubernetes", "AWS", "Git", "CI/CD", "Microservices"]
  };

  const achievements = [
    {
      icon: "",
      title: "Staff Software Engineer",
      description: "Leading GraphQL platform development at Walmart Global Tech",
      highlight: "Current Role"
    },
    {
      icon: "",
      title: "Platform Architecture",
      description: "Architected and implemented industry-leading software development practices",
      highlight: "Technical Leadership"
    },
    {
      icon: "",
      title: "Cross-functional Teams",
      description: "Successfully led and mentored development teams across multiple projects",
      highlight: "Team Leadership"
    },
    {
      icon: "",
      title: "Performance Optimization",
      description: "Optimized platform offerings and orchestration services at scale",
      highlight: "Impact"
    }
  ];

  return (
    <Container title="About – Harshit Kumar">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary-400/10 to-secondary-400/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-accent-400/10 to-primary-400/10 rounded-full blur-3xl animate-pulse-slow"></div>
        </div>

        <motion.div 
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Content */}
            <motion.div className="text-center lg:text-left space-y-8" variants={itemVariants}>
              <motion.h1 
                className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight"
                variants={itemVariants}
              >
                About <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">Me</span>
              </motion.h1>
              
              <motion.div className="space-y-6" variants={itemVariants}>
                <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-400 leading-relaxed">
                  Hey, I'm <span className="font-semibold text-primary-600 dark:text-primary-400">Harshit Kumar</span> – a passionate Staff Software Engineer at Walmart Global Tech.
                </p>
                
                <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
                  I specialize in building scalable GraphQL services, leading cross-functional teams, and implementing cutting-edge software development practices that drive innovation at enterprise scale.
                </p>
                
                <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
                  My journey spans from developing Progressive Web Apps at Quikr to orchestrating complex microservices architectures at Walmart, always with a focus on creating impactful solutions.
                </p>
              </motion.div>

              {/* Quick Stats */}
              <motion.div 
                className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8"
                variants={itemVariants}
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">8+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary-600 dark:text-secondary-400">20+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">Technologies</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent-600 dark:text-accent-400">∞</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">Learning</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">🎯</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">Impact Driven</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Profile Image */}
            <motion.div className="relative flex justify-center lg:justify-end" variants={itemVariants}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-2xl blur-2xl opacity-20 animate-pulse-slow"></div>
                <motion.div
                  className="relative"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    alt="Harshit Kumar"
                    height={500}
                    width={500}
                    src="/avatar4.jpg"
                    className="relative z-10 rounded-2xl border-4 border-white dark:border-gray-800 shadow-2xl w-80 h-80 lg:w-96 lg:h-96 object-cover"
                    priority
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Achievements Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Key <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">Achievements</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Highlights from my journey in software engineering and technical leadership.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                className="relative group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 via-secondary-500/10 to-accent-500/10 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <div className="relative h-full bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-soft hover:shadow-medium transition-all duration-300 p-6">
                  <div className="text-4xl mb-4">{achievement.icon}</div>
                  <div className="mb-2">
                    <span className="text-xs font-semibold text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20 px-2 py-1 rounded-full">
                      {achievement.highlight}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Technical <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">Skills</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Technologies and tools I use to build scalable, modern applications.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, skillList], index) => (
              <motion.div
                key={category}
                className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-soft hover:shadow-medium transition-all duration-300 p-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      className="px-3 py-1 text-sm font-medium bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 text-primary-700 dark:text-primary-300 rounded-full border border-primary-200 dark:border-primary-700/50"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: (index * 0.1) + (skillIndex * 0.05) }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Timeline />
          </motion.div>
        </div>
      </section>
    </Container>
  );
}
