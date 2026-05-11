'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section id="about" className="py-24 md:py-32 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center"
        >
          {/* Image */}
          <motion.div variants={itemVariants} className="relative h-96 md:h-full min-h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1494145904049-0dca7b0189ad?w=600&h=700&fit=crop"
              alt="Architect Portrait"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
          </motion.div>

          {/* Content */}
          <motion.div variants={containerVariants} className="space-y-8">
            <motion.div variants={itemVariants}>
              <span className="text-primary-600 dark:text-primary-400 text-sm font-semibold uppercase tracking-widest">
                About Me
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mt-3 leading-tight">
                Creating Architecture That Inspires
              </h2>
            </motion.div>

            <motion.p variants={itemVariants} className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              With over 15 years of experience in the architecture and design industry, I've had the privilege of working on diverse projects that challenge the boundaries of contemporary design. My philosophy centers on creating spaces that seamlessly blend aesthetics, functionality, and sustainability.
            </motion.p>

            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Design Philosophy</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                I believe that great architecture is a dialogue between form and function. Every project tells a story, and my mission is to create spaces that enhance lives, foster community, and stand the test of time. Sustainability and innovation are at the core of every design decision.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-6">
              {[
                { number: '15+', label: 'Years Experience' },
                { number: '200+', label: 'Projects Completed' },
                { number: '50+', label: 'Awards Won' },
                { number: '100%', label: 'Client Satisfaction' },
              ].map((stat) => (
                <div key={stat.label} className="p-6 bg-slate-50 dark:bg-slate-800 rounded-xl">
                  <p className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">{stat.number}</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400 font-medium">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
