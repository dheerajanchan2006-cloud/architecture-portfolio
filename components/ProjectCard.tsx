'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { MapPin, Calendar, Maximize2 } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  location: string;
  year: number;
  area: string;
  image: string;
  client: string;
  description: string;
  images: string[];
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5 }}
      className="group cursor-pointer"
    >
      <div className="relative h-96 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
        {/* Image */}
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
          <div className="space-y-3">
            <h3 className="text-2xl font-bold text-white">{project.title}</h3>
            <p className="text-sm text-slate-200">{project.description}</p>
            <div className="flex items-center gap-4 text-xs text-slate-300 pt-2">
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                {project.location}
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {project.year}
              </div>
            </div>
          </div>
        </div>

        {/* Category Badge */}
        <div className="absolute top-4 right-4 px-3 py-1 bg-primary-600/90 backdrop-blur-sm text-white text-xs font-semibold rounded-full">
          {project.category}
        </div>

        {/* Expand Icon */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileHover={{ scale: 1, opacity: 1 }}
          className="absolute top-4 left-4"
        >
          <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
            <Maximize2 className="w-5 h-5 text-white" />
          </div>
        </motion.div>
      </div>

      {/* Project Info */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mt-4 space-y-2"
      >
        <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{project.title}</h3>
        <div className="flex items-center justify-between text-sm text-slate-600 dark:text-slate-400">
          <span>{project.area}</span>
          <span>{project.year}</span>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;
