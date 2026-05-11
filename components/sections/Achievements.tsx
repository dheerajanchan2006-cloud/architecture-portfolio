'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, BookOpen, Image as ImageIcon } from 'lucide-react';

const Achievements = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const achievements = [
    {
      year: 2023,
      title: 'International Design Excellence Award',
      type: 'Award',
      icon: Award,
      description: 'Recognized for innovation in sustainable architecture',
    },
    {
      year: 2023,
      title: 'Featured in Architecture Digest',
      type: 'Publication',
      icon: BookOpen,
      description: 'Featured article on contemporary design trends',
    },
    {
      year: 2022,
      title: 'Best Commercial Project',
      type: 'Award',
      icon: Award,
      description: 'National Architecture Awards - Commercial Category',
    },
    {
      year: 2022,
      title: 'Design Exhibition at MoMA',
      type: 'Event',
      icon: ImageIcon,
      description: 'Selected works displayed at Museum of Modern Art',
    },
    {
      year: 2021,
      title: 'Sustainability Leadership Award',
      type: 'Award',
      icon: Award,
      description: 'Recognized for environmental impact and innovation',
    },
    {
      year: 2021,
      title: 'Published: Modern Architecture Guide',
      type: 'Publication',
      icon: BookOpen,
      description: 'Co-authored comprehensive design methodology book',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="achievements" className="py-24 md:py-32 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary-600 dark:text-primary-400 text-sm font-semibold uppercase tracking-widest">
            Recognition
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mt-3 mb-6">
            Awards & Achievements
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Honored to be recognized for design excellence and innovation in the architecture industry.
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="relative"
        >
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-600 to-primary-400"></div>

          {/* Timeline items */}
          <div className="space-y-8 md:space-y-12">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div key={achievement.title} variants={itemVariants}>
                  <div className={`flex items-start gap-8 md:gap-0 ${isEven ? 'md:flex-row-reverse' : ''}`}>
                    {/* Timeline point */}
                    <div className="relative z-10 mt-2">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-600 to-primary-400 shadow-lg flex items-center justify-center text-white">
                        <Icon className="w-8 h-8" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className={`flex-1 ml-8 md:ml-0 ${isEven ? 'md:mr-auto md:pr-12 md:text-right' : 'md:ml-auto md:pl-12'} md:w-1/2`}>
                      <motion.div
                        whileHover={{ y: -5 }}
                        className="p-6 rounded-xl bg-slate-50 dark:bg-slate-800 hover:shadow-lg transition-shadow"
                      >
                        <p className="text-sm font-semibold text-primary-600 dark:text-primary-400 mb-1">{achievement.year}</p>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                          {achievement.title}
                        </h3>
                        <p className="text-slate-600 dark:text-slate-400 mb-2">{achievement.description}</p>
                        <span className="inline-block px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-xs font-semibold rounded-full">
                          {achievement.type}
                        </span>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
