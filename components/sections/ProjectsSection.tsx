import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Zap } from 'lucide-react';
import { SafeImage } from '../SafeImage';

interface ProjectsSectionProps {
  t: any;
  lang: string;
  CATEGORIES: string[];
  activeCategory: string;
  setActiveCategory: (category: string) => void;
  displayedProjects: any[];
  openProject: (project: any) => void;
  showAll: boolean;
  setShowAll: (show: boolean) => void;
}

export default function ProjectsSection({
  t,
  lang,
  CATEGORIES,
  activeCategory,
  setActiveCategory,
  displayedProjects,
  openProject,
  showAll,
  setShowAll
}: ProjectsSectionProps) {
  return (
    <section id="projects" className="py-32 px-6 md:px-12 max-w-[1600px] mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
        <h2 className="text-6xl md:text-9xl font-black uppercase tracking-tighter leading-none">
          {t.projects.title.split(' ').map((word: string, i: number) => (
            <React.Fragment key={i}>
              {word}<br className="hidden md:block"/>
            </React.Fragment>
          ))}
        </h2>
        
        <div className="flex flex-wrap gap-4 md:max-w-md justify-end">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-3 rounded-full text-xs font-bold tracking-[0.2em] uppercase transition-all duration-500 cursor-pointer focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2 ${
                activeCategory === cat 
                  ? 'bg-primary text-white shadow-[0_0_20px_rgba(242,13,13,0.4)] scale-105' 
                  : 'bg-zinc-900 text-zinc-400 hover:bg-zinc-800 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
        <AnimatePresence mode="popLayout">
          {displayedProjects.map((project, idx) => (
            <motion.div 
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              key={project.id}
              role="button"
              tabIndex={0}
              aria-label={`View details for ${project.title}`}
              onClick={() => openProject(project)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  openProject(project);
                }
              }}
              className="group relative bg-zinc-900 rounded-2xl overflow-hidden border border-white/10 cursor-pointer focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-4 break-inside-avoid mb-6"
            >
              <SafeImage 
                src={project.image} 
                alt={project.title} 
                fill={false} 
                className="transition-transform duration-700 group-hover:scale-110 opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent p-10 flex flex-col justify-end">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-[10px] font-mono text-zinc-400 border border-zinc-700 px-2 py-1 rounded">
                    {new Date(project.date).getFullYear()}
                  </span>
                  {project.tags?.map((tag: string) => (
                    <span key={tag} className="text-[8px] px-2 py-1 border border-primary text-primary font-bold tracking-tighter uppercase rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-zinc-300 max-w-sm">{(project.description as any)[lang]}</p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div className="mt-20 flex justify-center">
        <button 
          onClick={() => setShowAll(!showAll)}
          className="group relative px-12 py-6 bg-transparent overflow-hidden rounded-full border border-primary/50 text-primary font-black uppercase tracking-widest hover:text-white transition-colors duration-500 cursor-pointer focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-4"
        >
          <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
          <span className="relative z-10 flex items-center gap-3">
            {showAll ? t.projects.showLess : t.projects.viewAll}
            <Zap className={`transition-transform duration-500 ${showAll ? 'rotate-180' : 'group-hover:rotate-45'}`} size={20} />
          </span>
        </button>
      </div>
    </section>
  );
}
