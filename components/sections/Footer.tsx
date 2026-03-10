import React from 'react';
import { Github, Linkedin, Briefcase, Mail } from 'lucide-react';

interface FooterProps {
  t: any;
}

export default function Footer({ t }: FooterProps) {
  return (
    <footer className="py-32 px-6 md:px-12 border-t border-primary/20 relative overflow-hidden bg-[#0a0404]">
      <div className="flex flex-col items-center text-center gap-12 relative z-10">
        <h4 className="text-6xl md:text-[10rem] font-black text-stroke text-white/40 uppercase leading-none">{t.footer.title}</h4>
        <p className="text-zinc-400 max-w-xl text-xl md:text-2xl font-serif italic">
          {t.footer.subtitle}
        </p>
        <button 
          onClick={() => window.open('https://wa.me/84842575139', '_blank')}
          className="px-16 py-8 bg-primary text-white text-2xl md:text-4xl font-black rounded-full hover:scale-110 transition-transform shadow-[0_0_60px_rgba(242,13,13,0.4)] cursor-pointer"
        >
          {t.footer.talk}
        </button>
        
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 mt-12">
          {[
            { name: 'Github', icon: <Github size={20} />, href: 'https://github.com/loicduong' },
            { name: 'LinkedIn', icon: <Linkedin size={20} />, href: 'https://www.linkedin.com/in/loicduong' },
            { name: 'Upwork', icon: <Briefcase size={20} />, href: 'https://www.upwork.com/freelancers/~01b8c755abb9d27024?mp_source=share' },
            { name: 'Email', icon: <Mail size={20} />, href: 'mailto:hi@loicduong.dev' },
            { name: 'WhatsApp', icon: (
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            ), href: 'https://wa.me/84842575139' }
          ].map(social => (
            <a 
              key={social.name} 
              href={social.href} 
              target={social.name === 'Email' ? '_self' : '_blank'}
              rel="noopener noreferrer"
              aria-label={`Visit our ${social.name} profile`}
              className="flex items-center gap-2 text-zinc-400 hover:text-primary transition-colors font-bold uppercase tracking-widest text-sm group focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-4"
            >
              <span className="group-hover:scale-110 transition-transform">{social.icon}</span>
              {social.name}
            </a>
          ))}
        </div>
      </div>
      
      <div className="absolute -bottom-32 -right-32 opacity-10 pointer-events-none">
        <svg className="h-[600px] w-auto text-primary" viewBox="0 0 97 156" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M48.0423 -2.86102e-06H36.1596V24H48.0183C48.0263 24 48.0343 24 48.0423 24C61.2969 24 72.0423 34.7453 72.0423 48C72.0423 61.2547 61.2969 72 48.0423 72C48.0343 72 48.0263 72 48.0183 72H36.1596V96H48.0423C74.5516 96 96.0423 74.5093 96.0423 48C96.0423 21.4907 74.5516 -2.86102e-06 48.0423 -2.86102e-06Z" fill="currentColor"/>
          <path d="M0 155.334H24V107.941H0V155.334Z" fill="currentColor"/>
          <path d="M96.0426 155.334H35.5627V131.334H96.0426V155.334Z" fill="currentColor"/>
          <path d="M24.1595 72H24.0195V24H24.1595V-2.86102e-06H0.0421448V96H24.1595V72Z" fill="currentColor"/>
        </svg>
      </div>
    </footer>
  );
}
