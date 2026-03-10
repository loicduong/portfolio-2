import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Eye, Zap, Loader2, Check, Download } from 'lucide-react';
import { SafeImage } from '../SafeImage';
import { PROJECTS, ARCHIVE_IMAGES } from '../../lib/data';

interface HeroSectionProps {
  t: any;
  isHoveringExplore: boolean;
  setIsHoveringExplore: (hovering: boolean) => void;
  randomProject: any;
  openProject: (project: any) => void;
  shuffleProject: (e: React.MouseEvent) => void;
  handleDownload: () => void;
  downloadState: 'idle' | 'loading' | 'success';
}

export default function HeroSection({
  t,
  isHoveringExplore,
  setIsHoveringExplore,
  randomProject,
  openProject,
  shuffleProject,
  handleDownload,
  downloadState
}: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex flex-col lg:grid lg:grid-cols-12 p-4 md:p-8 gap-4 overflow-hidden">
      <div className="lg:col-span-4 z-10 pt-12">
        <div className="flex items-center gap-4 text-primary">
          <svg className="h-12 w-auto" viewBox="0 0 97 156" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M48.0423 -2.86102e-06H36.1596V24H48.0183C48.0263 24 48.0343 24 48.0423 24C61.2969 24 72.0423 34.7453 72.0423 48C72.0423 61.2547 61.2969 72 48.0423 72C48.0343 72 48.0263 72 48.0183 72H36.1596V96H48.0423C74.5516 96 96.0423 74.5093 96.0423 48C96.0423 21.4907 74.5516 -2.86102e-06 48.0423 -2.86102e-06Z" fill="currentColor"/>
            <path d="M0 155.334H24V107.941H0V155.334Z" fill="currentColor"/>
            <path d="M96.0426 155.334H35.5627V131.334H96.0426V155.334Z" fill="currentColor"/>
            <path d="M24.1595 72H24.0195V24H24.1595V-2.86102e-06H0.0421448V96H24.1595V72Z" fill="currentColor"/>
          </svg>
          <h1 className="text-4xl font-black tracking-tighter uppercase">LOC DUONG</h1>
        </div>
      </div>

      <div className="lg:col-start-4 lg:col-span-9 lg:row-start-1 lg:row-span-4 relative group min-h-[50vh] lg:min-h-0">
        <div className="w-full h-full bg-zinc-900 rounded-2xl overflow-hidden relative border border-primary/20">
          <SafeImage 
            src={ARCHIVE_IMAGES[0].url} 
            alt="Hero background" 
            fill 
            priority={true}
            className="object-cover grayscale group-hover:grayscale-0 opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0404] via-transparent to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none">
            <span className="text-[15vw] font-black uppercase text-primary/5 select-none leading-none -mb-4 block">FRONTEND</span>
          </div>
        </div>
      </div>

      <div className="lg:col-start-2 lg:col-span-5 lg:row-start-3 z-20 self-center mt-8 lg:mt-0">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-black/40 backdrop-blur-xl p-8 md:p-12 border-l-4 border-primary rounded-r-2xl shadow-2xl"
        >
          <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight italic uppercase">
            {t.hero.title}
          </h2>
          <p className="text-lg md:text-xl text-zinc-400 font-light max-w-md">
            {t.hero.subtitle}
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 relative">
            <div 
              onMouseLeave={() => setIsHoveringExplore(false)}
              className="relative group/explore"
            >
              <a 
                href="#projects"
                onMouseEnter={() => setIsHoveringExplore(true)}
                className="bg-primary hover:bg-primary/80 text-white font-bold px-8 py-4 rounded-full flex items-center justify-center gap-2 group transition-all relative z-10 focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-4"
              >
                {t.hero.explore}
                <span className="bg-white/20 px-2 py-0.5 rounded text-[10px]">{PROJECTS.length}</span>
                <ArrowRight className="group-hover:translate-x-2 transition-transform" size={20} />
              </a>

              {/* Quick Peek Tooltip */}
              <AnimatePresence>
                {isHoveringExplore && randomProject && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.8 }}
                    animate={{ opacity: 1, y: -10, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.8 }}
                    className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-56 bg-zinc-900 p-3 rounded-2xl shadow-2xl border border-primary/20 pointer-events-auto hidden md:block z-20 after:content-[''] after:absolute after:top-full after:left-0 after:w-full after:h-8"
                  >
                    <div 
                      role="button"
                      tabIndex={0}
                      aria-label={`View details for ${randomProject.title}`}
                      className="relative rounded-xl overflow-hidden mb-3 cursor-pointer group/peek focus-visible:outline-2 focus-visible:outline-primary"
                      onClick={() => openProject(randomProject)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          openProject(randomProject);
                        }
                      }}
                    >
                      <SafeImage src={randomProject.image} alt={randomProject.title} fill={false} className="transition-transform group-hover/peek:scale-110" />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/peek:opacity-100 transition-opacity flex items-center justify-center">
                        <Eye className="text-white" size={24} />
                      </div>
                    </div>
                    <div className="flex items-center justify-between gap-2">
                      <p className="text-[10px] font-black uppercase text-primary tracking-tighter truncate">Featured: {randomProject.title}</p>
                      <button 
                        onClick={shuffleProject}
                        aria-label="Shuffle featured project"
                        className="p-1.5 rounded-full bg-white/10 hover:bg-primary hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-primary cursor-pointer"
                        title="Shuffle Stallion"
                      >
                        <Zap size={12} />
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            <button 
              onClick={handleDownload}
              disabled={downloadState !== 'idle'}
              className="border-2 border-accent-gold hover:bg-accent-gold hover:text-black text-accent-gold font-bold px-8 py-4 rounded-full flex items-center justify-center gap-2 transition-all disabled:opacity-50 min-w-[220px] cursor-pointer disabled:cursor-not-allowed focus-visible:outline-2 focus-visible:outline-accent-gold focus-visible:outline-offset-4"
            >
              {downloadState === 'loading' ? (
                <>
                  <Loader2 size={20} className="animate-spin" />
                  {t.hero.generating}
                </>
              ) : downloadState === 'success' ? (
                <>
                  <Check size={20} />
                  {t.hero.downloaded}
                </>
              ) : (
                <>
                  <Download size={20} />
                  {t.hero.download}
                </>
              )}
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
