'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue } from 'motion/react';
import { useParams, useRouter, usePathname } from 'next/navigation';
import { 
  ArrowRight, 
  Download, 
  Eye, 
  Zap, 
  Layers, 
  History, 
  Cpu, 
  Brush, 
  Wrench,
  Github,
  Linkedin,
  Mail,
  Phone,
  ChevronDown,
  ArrowUp,
  X,
  ExternalLink,
  Loader2,
  Check,
  Search,
  MessageSquare,
  Globe,
  Briefcase,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import Image from 'next/image';
import { SafeImage } from './SafeImage';
import { PROJECTS, CATEGORIES, Language, TRANSLATIONS, ARCHIVE_IMAGES } from '../lib/data';
import HeroSection from './sections/HeroSection';
import ProjectsSection from './sections/ProjectsSection';
import PedigreeSection from './sections/PedigreeSection';
import ArchiveSection from './sections/ArchiveSection';
import Footer from './sections/Footer';

export default function Portfolio() {
  const params = useParams();
  const router = useRouter();
  const pathname = usePathname();
  const currentLang = (params?.lang as string)?.toUpperCase() || 'EN';
  const lang = (['EN', 'VN', 'JP'].includes(currentLang) ? currentLang : 'EN') as Language;

  const [activeCategory, setActiveCategory] = useState('ALL');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [internalSlug, setInternalSlug] = useState<string | null>((params?.slug as string) || null);
  const [internalArchiveId, setInternalArchiveId] = useState<string | null>((params?.id as string) || null);
  
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      const projectMatch = path.match(/\/projects\/([^/]+)/);
      const archiveMatch = path.match(/\/archive\/([^/]+)/);
      setInternalSlug(projectMatch ? projectMatch[1] : null);
      setInternalArchiveId(archiveMatch ? archiveMatch[1] : null);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const selectedProject = internalSlug 
    ? PROJECTS.find(p => p.slug === internalSlug) 
    : null;
  const selectedArchiveImage = internalArchiveId
    ? ARCHIVE_IMAGES.find(img => img.id === internalArchiveId)
    : null;
  const [isHoveringExplore, setIsHoveringExplore] = useState(false);
  const [randomProject, setRandomProject] = useState(() => PROJECTS[Math.floor(Math.random() * PROJECTS.length)]);
  const [downloadState, setDownloadState] = useState<'idle' | 'loading' | 'success'>('idle');
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const langMenuRef = useRef<HTMLDivElement>(null);
  const [showAll, setShowAll] = useState(false);
  const [archiveCount, setArchiveCount] = useState(4);
  const [isHovering, setIsHovering] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const cursorXInner = useMotionValue(-100);
  const cursorYInner = useMotionValue(-100);
  
  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
      cursorXInner.set(e.clientX - 4);
      cursorYInner.set(e.clientY - 4);
      
      const target = e.target as HTMLElement;
      const isInteractive = target.closest('button, a, input, textarea, [role="button"], .cursor-pointer');
      setIsHovering(!!isInteractive);
    };
    window.addEventListener('mousemove', moveCursor);
    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, [cursorX, cursorY, cursorXInner, cursorYInner]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langMenuRef.current && !langMenuRef.current.contains(event.target as Node)) {
        setIsLangMenuOpen(false);
      }
    };

    if (isLangMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isLangMenuOpen]);
  const [searchQuery, setSearchQuery] = useState('');

  const openProject = (project: any) => {
    const newPath = `/${lang.toLowerCase()}/projects/${project.slug}`;
    window.history.pushState({ slug: project.slug }, '', newPath);
    setInternalSlug(project.slug);
  };

  const closeProject = () => {
    const newPath = `/${lang.toLowerCase()}`;
    window.history.pushState(null, '', newPath);
    setInternalSlug(null);
  };

  const handlePrevProject = (e: React.MouseEvent) => {
    e.stopPropagation();
    const currentIndex = PROJECTS.findIndex(p => p.slug === internalSlug);
    if (currentIndex > 0) {
      openProject(PROJECTS[currentIndex - 1]);
    } else {
      openProject(PROJECTS[PROJECTS.length - 1]);
    }
  };

  const handleNextProject = (e: React.MouseEvent) => {
    e.stopPropagation();
    const currentIndex = PROJECTS.findIndex(p => p.slug === internalSlug);
    if (currentIndex < PROJECTS.length - 1) {
      openProject(PROJECTS[currentIndex + 1]);
    } else {
      openProject(PROJECTS[0]);
    }
  };

  const openArchive = (image: any) => {
    const newPath = `/${lang.toLowerCase()}/archive/${image.id}`;
    window.history.pushState({ archiveId: image.id }, '', newPath);
    setInternalArchiveId(image.id);
  };

  const closeArchive = () => {
    const newPath = `/${lang.toLowerCase()}`;
    window.history.pushState(null, '', newPath);
    setInternalArchiveId(null);
  };

  const handlePrevArchive = (e: React.MouseEvent) => {
    e.stopPropagation();
    const currentIndex = ARCHIVE_IMAGES.findIndex(img => img.id === internalArchiveId);
    if (currentIndex > 0) {
      openArchive(ARCHIVE_IMAGES[currentIndex - 1]);
    } else {
      openArchive(ARCHIVE_IMAGES[ARCHIVE_IMAGES.length - 1]);
    }
  };

  const handleNextArchive = (e: React.MouseEvent) => {
    e.stopPropagation();
    const currentIndex = ARCHIVE_IMAGES.findIndex(img => img.id === internalArchiveId);
    if (currentIndex < ARCHIVE_IMAGES.length - 1) {
      openArchive(ARCHIVE_IMAGES[currentIndex + 1]);
    } else {
      openArchive(ARCHIVE_IMAGES[0]);
    }
  };

  const t = TRANSLATIONS[lang];

  const handleLangChange = (newLang: Language) => {
    setIsLangMenuOpen(false);
    if (newLang === lang) return;
    
    // Replace the current language segment in the pathname
    const segments = pathname.split('/');
    segments[1] = newLang.toLowerCase();
    const newPath = segments.join('/');
    
    router.push(newPath);
  };

  const shuffleProject = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    let next;
    do {
      next = PROJECTS[Math.floor(Math.random() * PROJECTS.length)];
    } while (next.id === randomProject.id && PROJECTS.length > 1);
    setRandomProject(next);
  };

  const handleDownload = () => {
    if (downloadState !== 'idle') return;
    
    setDownloadState('loading');
    
    // Simulate a high-tech "generating" process
    setTimeout(() => {
      setDownloadState('success');
      
      // In a real app, this would be: window.open('/path-to-cv.pdf', '_blank');
      // For now, we just simulate the completion
      
      setTimeout(() => {
        setDownloadState('idle');
      }, 3000);
    }, 2000);
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const filteredProjects = PROJECTS.filter(p => {
    const matchesCategory = activeCategory === 'ALL' || p.category === activeCategory;
    const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          (p.description as any)[lang].toLowerCase().includes(searchQuery.toLowerCase()) ||
                          (p.longDescription as any)[lang].toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  }).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 4);

  return (
    <div className="min-h-screen bg-[#0a0404] text-white md:cursor-none md:[&_*]:cursor-none">
      {/* Custom Cursor */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-primary pointer-events-none z-[9999] mix-blend-difference hidden md:block"
        style={{
          x: cursorX,
          y: cursorY,
        }}
        animate={{
          scale: isHovering ? 1.5 : 1,
          backgroundColor: isHovering ? 'rgba(242, 13, 13, 0.1)' : 'transparent',
        }}
        transition={{ duration: 0.2 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-primary rounded-full pointer-events-none z-[9999] mix-blend-difference hidden md:block"
        style={{
          x: cursorXInner,
          y: cursorYInner,
        }}
        animate={{
          scale: isHovering ? 0 : 1,
        }}
        transition={{ duration: 0.2 }}
      />

      {/* Navigation & Controls */}
      <header className="fixed top-6 right-6 z-50 flex items-center gap-4">
        <button 
          onClick={() => window.open('https://wa.me/84842575139', '_blank')}
          className="hidden md:flex items-center gap-2 bg-primary hover:bg-white hover:text-black text-white backdrop-blur-xl border border-primary/50 hover:border-white rounded-full px-6 py-2.5 text-xs font-black tracking-[0.2em] transition-all duration-300 uppercase cursor-pointer shadow-[0_0_20px_rgba(242,13,13,0.3)] hover:shadow-[0_0_25px_rgba(255,255,255,0.5)] hover:scale-105 active:scale-95"
          aria-label={t.footer.talk}
        >
          <MessageSquare size={16} />
          {t.footer.talk}
        </button>
        <div className="relative" ref={langMenuRef}>
          <button 
            onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
            className="bg-black/40 backdrop-blur-xl border border-primary/20 rounded-full px-4 py-2 flex items-center gap-2 text-xs font-bold tracking-widest hover:border-primary transition-colors cursor-pointer"
            aria-expanded={isLangMenuOpen}
            aria-haspopup="true"
            aria-label="Change language"
          >
            {lang} <ChevronDown size={14} className={`transition-transform ${isLangMenuOpen ? 'rotate-180' : ''}`} />
          </button>
          
          <AnimatePresence>
            {isLangMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                className="absolute top-full right-0 mt-2 bg-black/80 backdrop-blur-xl border border-primary/20 rounded-2xl overflow-hidden flex flex-col min-w-[100px] shadow-2xl z-50"
              >
                {(['EN', 'VN', 'JP'] as Language[]).map((l) => (
                  <button
                    key={l}
                    onClick={() => handleLangChange(l)}
                    className={`px-4 py-3 text-xs font-bold tracking-widest text-left transition-colors cursor-pointer ${lang === l ? 'bg-primary/20 text-primary' : 'hover:bg-white/10 text-white'}`}
                  >
                    {l === 'EN' ? 'ENGLISH' : l === 'VN' ? 'TIẾNG VIỆT' : '日本語'}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>

      {/* Floating Menu Labels */}
      <nav className="fixed inset-0 pointer-events-none z-40 hidden lg:block" aria-label="Main navigation">
        <div className="relative w-full h-full">
          <a href="#projects" className="pointer-events-auto absolute top-10 left-10 -rotate-12 hover:scale-110 transition-transform bg-primary px-6 py-2 rounded-full font-bold text-white shadow-xl shadow-primary/20">{t.nav.projects}</a>
          <a href="#experience" className="pointer-events-auto absolute top-40 right-10 rotate-12 hover:scale-110 transition-transform bg-[#4a0404] border border-primary/30 px-6 py-2 rounded-full font-bold text-white">{t.nav.experience}</a>
          <a href="#skills" className="pointer-events-auto absolute bottom-40 left-20 rotate-6 hover:scale-110 transition-transform border-2 border-primary px-6 py-2 rounded-full font-bold text-primary bg-black/80 backdrop-blur-md">{t.nav.skills}</a>
          <a href="#library" className="pointer-events-auto absolute bottom-10 right-20 -rotate-6 hover:scale-110 transition-transform bg-accent-gold/20 text-accent-gold border border-accent-gold/50 px-6 py-2 rounded-full font-bold">{t.nav.library}</a>
        </div>
      </nav>

      {/* Hero Section */}
      <HeroSection 
        t={t}
        isHoveringExplore={isHoveringExplore}
        setIsHoveringExplore={setIsHoveringExplore}
        randomProject={randomProject}
        openProject={openProject}
        shuffleProject={shuffleProject}
        handleDownload={handleDownload}
        downloadState={downloadState}
      />

      {/* Projects Section */}
      <ProjectsSection 
        t={t}
        lang={lang}
        CATEGORIES={CATEGORIES}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        displayedProjects={displayedProjects}
        openProject={openProject}
        showAll={showAll}
        setShowAll={setShowAll}
      />

      {/* Pedigree Section */}
      <PedigreeSection t={t} lang={lang} />

      {/* Archive Section */}
      <ArchiveSection 
        t={t}
        lang={lang}
        ARCHIVE_IMAGES={ARCHIVE_IMAGES}
        archiveCount={archiveCount}
        setArchiveCount={setArchiveCount}
        openArchive={openArchive}
      />

      {/* Footer */}
      <Footer t={t} />

      {/* Back to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-[60] w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(242,13,13,0.4)] hover:scale-110 active:scale-95 transition-transform cursor-pointer"
            aria-label="Back to top"
          >
            <ArrowUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Archive Image Modal */}
      <AnimatePresence>
        {selectedArchiveImage && (
          <div 
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
            role="dialog"
            aria-modal="true"
          >
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeArchive}
              className="absolute inset-0 bg-black/95 backdrop-blur-xl cursor-pointer"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-[95vw] h-[90vh] bg-[#0a0404] rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row pointer-events-none border border-primary/20"
            >
              <button 
                onClick={closeArchive}
                aria-label="Close modal"
                className="absolute top-6 right-6 z-10 w-10 h-10 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-primary transition-colors focus-visible:outline-2 focus-visible:outline-primary cursor-pointer pointer-events-auto"
              >
                <X size={20} />
              </button>

              <div className="relative w-full md:w-[70%] h-1/2 md:h-full pointer-events-auto bg-black/50">
                <SafeImage 
                  src={selectedArchiveImage.url} 
                  alt={(selectedArchiveImage.title as any)[lang]} 
                  fill 
                  className="object-contain p-4 md:p-8"
                />
              </div>
              
              <div className="w-full md:w-[30%] h-1/2 md:h-full p-8 md:p-12 overflow-y-auto no-scrollbar pointer-events-auto flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-6">
                  <span className="text-xs font-mono text-zinc-400 border border-zinc-700 px-3 py-1 rounded-full">
                    {selectedArchiveImage.year}
                  </span>
                </div>
                <h3 className="text-4xl md:text-5xl font-black mb-6 uppercase italic leading-none text-white">
                  {(selectedArchiveImage.title as any)[lang]}
                </h3>
                <p className="text-xl text-zinc-400 font-light leading-relaxed">
                  {(selectedArchiveImage.description as any)[lang]}
                </p>

                <div className="flex justify-between items-center mt-8 pt-6 border-t border-zinc-800/50">
                  <button 
                    onClick={handlePrevArchive} 
                    className="flex items-center gap-2 text-zinc-400 hover:text-primary transition-colors cursor-pointer group"
                  >
                    <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                    <span className="text-sm font-bold uppercase tracking-wider">Prev</span>
                  </button>
                  <button 
                    onClick={handleNextArchive} 
                    className="flex items-center gap-2 text-zinc-400 hover:text-primary transition-colors cursor-pointer group"
                  >
                    <span className="text-sm font-bold uppercase tracking-wider">Next</span>
                    <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div 
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeProject}
              className="absolute inset-0 bg-black/90 backdrop-blur-md"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-[95vw] h-[90vh] bg-[#0a0404] rounded-3xl overflow-hidden shadow-2xl border border-primary/20 flex flex-col md:flex-row"
            >
              <button 
                onClick={closeProject}
                aria-label="Close modal"
                className="absolute top-6 right-6 z-10 w-10 h-10 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-primary transition-colors focus-visible:outline-2 focus-visible:outline-primary cursor-pointer"
              >
                <X size={20} />
              </button>

              <div className="w-full md:w-[70%] h-1/2 md:h-full relative bg-black/50">
                <SafeImage 
                  src={selectedProject.image} 
                  alt={selectedProject.title} 
                  fill 
                  className="object-contain p-4 md:p-8"
                />
              </div>

              <div className="w-full md:w-[30%] h-1/2 md:h-full p-8 md:p-12 overflow-y-auto no-scrollbar">
                <div className="flex items-center gap-2 mb-6">
                  <span className="text-xs font-mono text-zinc-400 border border-zinc-700 px-3 py-1 rounded-full">
                    {new Date(selectedProject.date).getFullYear()}
                  </span>
                  {selectedProject.tags?.map((tag: string) => (
                    <span key={tag} className="text-[10px] px-3 py-1 border border-primary text-primary font-black tracking-widest uppercase rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 id="modal-title" className="text-4xl md:text-6xl font-black mb-6 uppercase italic leading-none">{selectedProject.title}</h3>
                <p className="text-xl text-zinc-400 font-light leading-relaxed mb-8">
                  {(selectedProject.longDescription as any)[lang]}
                </p>
                
                <div className="flex flex-wrap gap-4 mt-auto">
                  <a 
                    href={selectedProject.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-primary text-white font-black px-8 py-4 rounded-full flex items-center justify-center gap-2 hover:scale-105 transition-transform"
                  >
                    {t.projects.demo} <ExternalLink size={18} />
                  </a>
                  <a 
                    href={selectedProject.repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 border-2 border-primary text-primary font-black px-8 py-4 rounded-full flex items-center justify-center gap-2 hover:bg-primary hover:text-white transition-all"
                  >
                    {t.projects.source} <Github size={18} />
                  </a>
                </div>

                <div className="flex justify-between items-center mt-8 pt-6 border-t border-zinc-800/50">
                  <button 
                    onClick={handlePrevProject} 
                    className="flex items-center gap-2 text-zinc-400 hover:text-primary transition-colors cursor-pointer group"
                  >
                    <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                    <span className="text-sm font-bold uppercase tracking-wider">Prev</span>
                  </button>
                  <button 
                    onClick={handleNextProject} 
                    className="flex items-center gap-2 text-zinc-400 hover:text-primary transition-colors cursor-pointer group"
                  >
                    <span className="text-sm font-bold uppercase tracking-wider">Next</span>
                    <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
