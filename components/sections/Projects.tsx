'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ProjectCard from '@/components/ProjectCard';

const Projects = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['all', 'Residential', 'Commercial', 'Interior Design', 'Landscape'];

  const projects = [
    {
      id: 1,
      title: 'Skyline Residential Tower',
      category: 'Residential',
      location: 'Manhattan, New York',
      year: 2023,
      area: '45,000 sq ft',
      image: 'https://images.unsplash.com/photo-1486718457882-c6e44c2931d7?w=600&h=600&fit=crop',
      client: 'Urban Development Corp',
      description: 'A stunning residential tower featuring cutting-edge architecture and sustainable design principles.',
      images: [
        'https://images.unsplash.com/photo-1486718457882-c6e44c2931d7?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&h=800&fit=crop',
      ],
    },
    {
      id: 2,
      title: 'Corporate Innovation Hub',
      category: 'Commercial',
      location: 'San Francisco, CA',
      year: 2023,
      area: '75,000 sq ft',
      image: 'https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=600&h=600&fit=crop',
      client: 'Tech Enterprises Inc',
      description: 'Modern commercial space designed for collaboration and innovation.',
      images: [
        'https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=1200&h=800&fit=crop',
      ],
    },
    {
      id: 3,
      title: 'Luxury Penthouse Suite',
      category: 'Interior Design',
      location: 'Miami, Florida',
      year: 2022,
      area: '5,000 sq ft',
      image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&h=600&fit=crop',
      client: 'Private Client',
      description: 'Sophisticated interior design combining luxury and minimalism.',
      images: [
        'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&h=800&fit=crop',
      ],
    },
    {
      id: 4,
      title: 'Botanical Garden Complex',
      category: 'Landscape',
      location: 'Los Angeles, CA',
      year: 2022,
      area: '15,000 sq ft',
      image: 'https://images.unsplash.com/photo-1469022563149-aa64dbd37dae?w=600&h=600&fit=crop',
      client: 'City Parks Department',
      description: 'Sustainable landscape design with integrated water management systems.',
      images: [
        'https://images.unsplash.com/photo-1469022563149-aa64dbd37dae?w=1200&h=800&fit=crop',
      ],
    },
    {
      id: 5,
      title: 'Historic Restoration Project',
      category: 'Residential',
      location: 'Boston, Massachusetts',
      year: 2021,
      area: '12,000 sq ft',
      image: 'https://images.unsplash.com/photo-1494145904049-0dca7b0189ad?w=600&h=600&fit=crop',
      client: 'Heritage Foundation',
      description: 'Thoughtful restoration blending historic charm with modern amenities.',
      images: [
        'https://images.unsplash.com/photo-1494145904049-0dca7b0189ad?w=1200&h=800&fit=crop',
      ],
    },
    {
      id: 6,
      title: 'Retail Innovation Center',
      category: 'Commercial',
      location: 'Chicago, Illinois',
      year: 2021,
      area: '50,000 sq ft',
      image: 'https://images.unsplash.com/photo-1535228813916-69ab28ca2ff0?w=600&h=600&fit=crop',
      client: 'Retail Group LLC',
      description: 'Next-generation retail space with experiential design elements.',
      images: [
        'https://images.unsplash.com/photo-1535228813916-69ab28ca2ff0?w=1200&h=800&fit=crop',
      ],
    },
  ];

  const filteredProjects =
    selectedCategory === 'all'
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section id="projects" className="py-24 md:py-32 bg-slate-50 dark:bg-slate-800">
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
            Our Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mt-3 mb-6">
            Featured Projects
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Explore our curated collection of award-winning projects that showcase innovation, creativity, and excellence.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-full font-medium text-sm transition-all ${
                selectedCategory === category
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-600 hover:border-primary-600 dark:hover:border-primary-400'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
