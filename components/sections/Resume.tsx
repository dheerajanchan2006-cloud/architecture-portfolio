'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Download, Briefcase, Code } from 'lucide-react';

const Resume = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = [
    { category: 'Design Software', items: ['AutoCAD', 'Revit', 'SketchUp', 'Lumion'] },
    { category: '3D Visualization', items: ['Rhino', 'V-Ray', 'Unreal Engine', 'Corona Render'] },
    { category: 'Technical Skills', items: ['BIM', 'Parametric Design', 'GIS Analysis', 'Energy Modeling'] },
    { category: 'Specializations', items: ['Sustainable Design', 'Urban Planning', 'Heritage Conservation', 'Interior Architecture'] },
  ];

  const experience = [
    {
      title: 'Principal Architect & Design Director',
      company: 'Architecture Studio X',
      year: '2020 - Present',
      description: 'Leading design team on high-profile international projects with focus on innovation and sustainability.',
    },
    {
      title: 'Senior Architect',
      company: 'Premium Design Collective',
      year: '2017 - 2020',
      description: 'Managed portfolio of residential and commercial projects worth $50M+',
    },
    {
      title: 'Architect',
      company: 'Urban Design Associates',
      year: '2015 - 2017',
      description: 'Developed architectural concepts and detailed design documentation for diverse projects.',
    },
    {
      title: 'Junior Architect',
      company: 'Contemporary Architecture Ltd',
      year: '2010 - 2015',
      description: 'Assisted on design development and documentation for commercial projects.',
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
    <section id="resume" className="py-24 md:py-32 bg-slate-50 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 flex flex-col items-center"
        >
          <span className="text-primary-600 dark:text-primary-400 text-sm font-semibold uppercase tracking-widest">
            Professional Background
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mt-3 mb-6">
            Resume & Experience
          </h2>
          <motion.a
            href="#"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 text-white rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl"
          >
            <Download className="w-5 h-5" />
            Download CV
          </motion.a>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Experience */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <motion.h3 variants={itemVariants} className="text-2xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-3">
              <Briefcase className="w-6 h-6 text-primary-600 dark:text-primary-400" />
              Experience
            </motion.h3>
            <div className="space-y-6">
              {experience.map((job) => (
                <motion.div
                  key={job.title}
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                  className="p-6 bg-white dark:bg-slate-700 rounded-xl border border-slate-200 dark:border-slate-600 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="text-lg font-semibold text-slate-900 dark:text-white">{job.title}</h4>
                    <span className="text-sm font-medium text-primary-600 dark:text-primary-400">{job.year}</span>
                  </div>
                  <p className="text-primary-600 dark:text-primary-400 font-medium mb-2">{job.company}</p>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">{job.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <motion.h3 variants={itemVariants} className="text-2xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-3">
              <Code className="w-6 h-6 text-primary-600 dark:text-primary-400" />
              Skills & Software
            </motion.h3>
            <div className="space-y-6">
              {skills.map((skillGroup) => (
                <motion.div key={skillGroup.category} variants={itemVariants}>
                  <h4 className="text-sm font-semibold text-slate-900 dark:text-white uppercase tracking-widest mb-3">
                    {skillGroup.category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill) => (
                      <motion.span
                        key={skill}
                        whileHover={{ scale: 1.05, y: -2 }}
                        className="px-4 py-2 bg-gradient-to-r from-primary-600 to-primary-400 text-white text-sm font-medium rounded-full shadow-md hover:shadow-lg transition-shadow"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
