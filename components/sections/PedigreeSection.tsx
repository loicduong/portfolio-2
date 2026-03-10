import React from 'react';
import { Layers, History, Zap, Cpu, Brush, Wrench, MessageSquare } from 'lucide-react';

interface PedigreeSectionProps {
  t: any;
  lang: string;
}

export default function PedigreeSection({ t, lang }: PedigreeSectionProps) {
  return (
    <section className="relative py-32 bg-[#4a0404]/5 overflow-hidden">
      <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-primary/40 via-primary/10 to-transparent hoof-path hidden md:block"></div>
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-20 relative z-10">
        <div className="lg:col-span-6 space-y-16" id="experience">
          <h2 className="text-6xl md:text-8xl font-black uppercase">{t.pedigree.title}</h2>
          <div className="space-y-24 relative">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-primary/20 hidden md:block"></div>
            
            {[
              {
                year: 'Apr 2021 - Present',
                role: lang === 'VN' ? 'LẬP TRÌNH VIÊN FRONTEND WEB' : lang === 'JP' ? 'フロントエンドウェブ開発者' : 'FRONTEND WEB DEVELOPER',
                company: 'Teanis Technologies',
                desc: lang === 'VN' 
                  ? 'Quy mô nhóm: 10+. Kỹ năng: Vue.js, SQL, ESLint và hơn 40 kỹ năng khác.' 
                  : lang === 'JP' 
                  ? 'チームサイズ：10+。スキル：Vue.js、SQL、ESLint、その他40以上のスキル。' 
                  : 'Team size: 10+. Skills: Vue.js, SQL, ESLint and +40 skills.',
                icon: <Layers size={16} />
              },
              {
                year: 'Sep 2020 - Mar 2021',
                role: lang === 'VN' ? 'CHUYỂN ĐỔI NGHỀ NGHIỆP' : lang === 'JP' ? 'キャリアチェンジ' : 'CAREER TRANSITION',
                company: 'Career Break',
                desc: lang === 'VN' 
                  ? 'Tự học để trở thành Lập trình viên Frontend Web. Bao gồm: React, Bootstrap, Git, Github, Heroku, ...' 
                  : lang === 'JP' 
                  ? 'フロントエンドウェブ開発者になるための独学。React、Bootstrap、Git、Github、Herokuなどを含みます。' 
                  : 'Self-studying to become a Frontend Web Developer. Including: React, Bootstrap, Git, Github, Heroku, ...',
                icon: <History size={16} />
              },
              {
                year: 'Jun 2019 - Aug 2020',
                role: lang === 'VN' ? 'KỸ SƯ PHẦN MỀM' : lang === 'JP' ? 'ソフトウェアエンジニア' : 'SOFTWARE ENGINEER',
                company: 'DEC Engineering',
                desc: lang === 'VN' 
                  ? 'Quy mô nhóm: 9. Kỹ năng: Microsoft SQL Server, SQL, Visual Basic .NET (VB.NET) và hơn 9 kỹ năng khác.' 
                  : lang === 'JP' 
                  ? 'チームサイズ：9。スキル：Microsoft SQL Server、SQL、Visual Basic .NET (VB.NET)、その他9以上のスキル。' 
                  : 'Team size: 9. Skills: Microsoft SQL Server, SQL, Visual Basic .NET (VB.NET) and +9 skills.',
                icon: <Zap size={16} />
              }
            ].map((item, i) => (
              <div key={i} className="relative pl-12 md:pl-20 group">
                <div className="absolute left-0 top-0 w-10 h-10 rounded-full bg-primary flex items-center justify-center shadow-[0_0_20px_rgba(242,13,13,0.4)] group-hover:scale-125 transition-transform z-10">
                  <div className="text-white">{item.icon}</div>
                </div>
                <span className="text-accent-gold font-bold tracking-[0.3em] text-xs">{item.year}</span>
                <h5 className="text-3xl font-black mt-2 text-white uppercase">{item.role}</h5>
                <p className="text-primary font-bold mb-4">{item.company}</p>
                <p className="text-zinc-400 font-light max-w-md leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-6" id="skills">
          <div className="sticky top-32 space-y-12">
            <div>
              <h3 className="text-4xl font-black mb-8 flex items-center gap-4">
                <Cpu className="text-primary" size={32} />
                {t.pedigree.arsenal}
              </h3>
              <div className="flex flex-wrap gap-3">
                {['Vue.js / Nuxt.js', 'React / Next.js', 'TypeScript / JavaScript', 'Tailwind CSS / Bootstrap', 'HTML5 / CSS3'].map(s => (
                  <span key={s} className="px-5 py-3 bg-primary text-white font-bold rounded-xl text-sm shadow-lg shadow-primary/20 hover:scale-110 hover:bg-white hover:text-primary transition-all duration-300 cursor-default">{s}</span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-4xl font-black mb-8 flex items-center gap-4">
                <Brush className="text-accent-gold" size={32} />
                {t.pedigree.kinetic}
              </h3>
              <div className="flex flex-wrap gap-3">
                {['Node.js / Express.js', 'PHP / Laravel', 'SQL Server / MySQL', 'REST APIs', 'VB.NET'].map(s => (
                  <span key={s} className="px-5 py-3 bg-accent-gold/20 text-accent-gold border border-accent-gold/30 font-bold rounded-xl text-sm hover:scale-110 hover:bg-accent-gold hover:text-black transition-all duration-300 cursor-default">{s}</span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-4xl font-black mb-8 flex items-center gap-4">
                <Wrench className="text-zinc-400" size={32} />
                {t.pedigree.tools}
              </h3>
              <div className="flex flex-wrap gap-3">
                {['Git / GitFlow / GitLab', 'Agile / Scrum', 'ESLint', 'Chart.js', 'Responsive Design'].map(s => (
                  <span key={s} className="px-5 py-3 bg-zinc-800 text-zinc-300 font-bold rounded-xl text-sm hover:scale-110 hover:bg-zinc-700 transition-all duration-300 cursor-default">{s}</span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-4xl font-black mb-8 flex items-center gap-4">
                <Layers className="text-zinc-400" size={32} />
                {t.pedigree.softSkills}
              </h3>
              <div className="flex flex-wrap gap-3">
                {['Problem Solving', 'Attention to Detail', 'Mentoring', 'Code Review', 'Teamwork'].map(s => (
                  <span key={s} className="px-5 py-3 bg-zinc-800 text-zinc-300 font-bold rounded-xl text-sm hover:scale-110 hover:bg-zinc-700 transition-all duration-300 cursor-default">{s}</span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-4xl font-black mb-8 flex items-center gap-4">
                <MessageSquare className="text-zinc-400" size={32} />
                {t.pedigree.languages}
              </h3>
              <div className="flex flex-wrap gap-3">
                {['Vietnamese (Native)', 'English (Intermediate)'].map(s => (
                  <span key={s} className="px-5 py-3 bg-zinc-800 text-zinc-300 font-bold rounded-xl text-sm hover:scale-110 hover:bg-zinc-700 transition-all duration-300 cursor-default">{s}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
