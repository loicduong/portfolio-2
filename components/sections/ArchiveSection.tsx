import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { SafeImage } from '../SafeImage';

interface ArchiveSectionProps {
  t: any;
  lang: string;
  ARCHIVE_IMAGES: any[];
  archiveCount: number;
  setArchiveCount: React.Dispatch<React.SetStateAction<number>>;
  openArchive: (item: any) => void;
}

export default function ArchiveSection({
  t,
  lang,
  ARCHIVE_IMAGES,
  archiveCount,
  setArchiveCount,
  openArchive
}: ArchiveSectionProps) {
  return (
    <section id="library" className="py-32">
      <div className="px-6 md:px-12 mb-20 flex flex-col items-start gap-6 text-left">
        <h3 className="text-6xl md:text-9xl font-black italic uppercase">{t.archive.title}</h3>
        <p className="text-zinc-400 font-mono text-sm max-w-xs hidden md:block leading-relaxed">
          {t.archive.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 px-4 md:px-12">
        <AnimatePresence mode="popLayout">
          {ARCHIVE_IMAGES.slice(0, archiveCount).map((item, i) => (
            <motion.div 
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              key={item.id} 
              onClick={() => openArchive(item)}
              className="rounded-2xl overflow-hidden group relative cursor-pointer aspect-[4/5]"
            >
              <SafeImage 
                src={item.url} 
                alt={(item.title as any)[lang]} 
                fill={true} 
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {archiveCount < ARCHIVE_IMAGES.length && (
        <div className="mt-24 flex justify-center">
          <button 
            onClick={() => setArchiveCount(prev => prev + 4)}
            className="flex flex-col items-center gap-6 group cursor-pointer"
          >
            <p className="text-primary font-black uppercase tracking-[0.4em] text-xs group-hover:text-white transition-colors">{t.archive.keepCharging}</p>
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-14 h-14 flex items-center justify-center border border-primary/20 rounded-full group-hover:border-primary transition-colors"
            >
              <ChevronDown className="text-primary group-hover:text-white transition-colors" size={24} />
            </motion.div>
          </button>
        </div>
      )}
    </section>
  );
}
