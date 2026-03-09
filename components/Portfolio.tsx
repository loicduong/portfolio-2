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
import en from '../app/dictionaries/en.json';
import vn from '../app/dictionaries/vn.json';
import jp from '../app/dictionaries/jp.json';

const SafeImage = ({ src, alt, fill, className, priority, ...props }: any) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden bg-zinc-900/50 ${fill ? 'w-full h-full' : 'w-full'}`}>
      {!isLoaded && !priority && (
        <div className="absolute inset-0 z-10 animate-shimmer bg-zinc-800/20" />
      )}
      <Image
        src={src}
        alt={alt}
        fill={fill}
        width={fill ? undefined : 1000}
        height={fill ? undefined : 1000}
        sizes={fill ? undefined : "100vw"}
        style={fill ? undefined : { width: '100%', height: 'auto' }}
        priority={priority}
        className={`transition-all duration-700 ease-out ${isLoaded || priority ? 'opacity-100 scale-100' : 'opacity-0 scale-105'} ${className}`}
        onLoad={() => setIsLoaded(true)}
        referrerPolicy="no-referrer"
        {...props}
      />
    </div>
  );
};

const PROJECTS = [
  {
    id: 1,
    slug: 'home-renovation-service-management',
    title: 'Home Renovation Service Management',
    date: '2025-03-01',
    description: {
      EN: 'Associated with Teanis Technologies. Team size: 4.',
      VN: 'Liên kết với Teanis Technologies. Quy mô nhóm: 4.',
      JP: 'Teanis Technologies関連。チームサイズ：4。'
    },
    longDescription: {
      EN: 'Skills: Attention to Detail, Problem Solving, Vue.js',
      VN: 'Kỹ năng: Chú ý đến chi tiết, Giải quyết vấn đề, Vue.js',
      JP: 'スキル：細部へのこだわり、問題解決、Vue.js'
    },
    image: 'https://raw.githubusercontent.com/loicduong/portfolio-2/refs/heads/develop/public/IMG20260308142425.webp',
    size: 'large',
    demoLink: '#',
    repoLink: '#'
  },
  {
    id: 2,
    slug: 'vite-plugin-vue-layouts-next',
    title: 'Vite Plugin Vue Layouts Next',
    date: '2025-02-01',
    description: {
      EN: 'Open source Vite plugin.',
      VN: 'Plugin Vite mã nguồn mở.',
      JP: 'オープンソースのViteプラグイン。'
    },
    longDescription: {
      EN: 'Skills: Attention to Detail, Problem Solving. Links: GitHub, NPM.',
      VN: 'Kỹ năng: Chú ý đến chi tiết, Giải quyết vấn đề. Liên kết: GitHub, NPM.',
      JP: 'スキル：細部へのこだわり、問題解決。リンク：GitHub、NPM。'
    },
    tags: ['VITE', 'VUE.JS', 'NPM'],
    category: 'OPEN SOURCE',
    image: 'https://raw.githubusercontent.com/loicduong/portfolio-2/refs/heads/develop/public/IMG20260308142425.webp',
    size: 'small',
    demoLink: '#',
    repoLink: '#'
  },
  {
    id: 3,
    slug: 'trading-user-management',
    title: 'Trading User Management',
    date: '2025-01-01',
    description: {
      EN: 'Associated with Teanis Technologies. Team size: 5.',
      VN: 'Liên kết với Teanis Technologies. Quy mô nhóm: 5.',
      JP: 'Teanis Technologies関連。チームサイズ：5。'
    },
    longDescription: {
      EN: 'Skills: Git, GitFlow, Express.js, Agile Methodologies, TypeScript, Attention to Detail, Problem Solving, Node.js, JavaScript, SQL, Gitlab, Vanilla JavaScript',
      VN: 'Kỹ năng: Git, GitFlow, Express.js, Phương pháp Agile, TypeScript, Chú ý đến chi tiết, Giải quyết vấn đề, Node.js, JavaScript, SQL, Gitlab, Vanilla JavaScript',
      JP: 'スキル：Git、GitFlow、Express.js、アジャイル手法、TypeScript、細部へのこだわり、問題解決、Node.js、JavaScript、SQL、Gitlab、Vanilla JavaScript'
    },
    tags: ['EXPRESS.JS', 'TYPESCRIPT', 'NODE.JS'],
    category: 'NODE.JS',
    image: 'https://raw.githubusercontent.com/loicduong/portfolio-2/refs/heads/develop/public/IMG20260308142425.webp',
    size: 'small',
    demoLink: '#',
    repoLink: '#'
  },
  {
    id: 4,
    slug: 'sugame',
    title: 'SugaMe',
    date: '2022-05-01',
    description: {
      EN: 'A human resource management system for the HR department and 100+ employees.',
      VN: 'Hệ thống quản lý nhân sự cho bộ phận nhân sự và hơn 100 nhân viên.',
      JP: '人事部と100人以上の従業員のための人事管理システム。'
    },
    longDescription: {
      EN: 'A human resource management system for the HR department and 100+ employees of the company, including an admin dashboard and a management website for employees. Team size: 6. Skills: HTML, HTML5, Git, ESLint, Chart.js, GitFlow, Agile Methodologies, TypeScript, Vuex, Front-End Development, Attention to Detail, Problem Solving, REST APIs, Web Applications, Web Development, CSS, Responsive Web Design, Code Review, Agile Development, Node.js, Vue.js, JavaScript, Web Technologies, Version Control, Gitlab, State Management, Vanilla JavaScript, Mentoring.',
      VN: 'Hệ thống quản lý nhân sự cho bộ phận nhân sự và hơn 100 nhân viên của công ty, bao gồm bảng điều khiển quản trị và trang web quản lý cho nhân viên. Quy mô nhóm: 6. Kỹ năng: Vue.js, TypeScript, Node.js, v.v.',
      JP: '人事部と100人以上の従業員のための人事管理システム。管理ダッシュボードと従業員向け管理ウェブサイトが含まれます。チームサイズ：6。'
    },
    tags: ['VUE.JS', 'TYPESCRIPT', 'NODE.JS'],
    category: 'VUE.JS',
    image: 'https://raw.githubusercontent.com/loicduong/portfolio-2/refs/heads/develop/public/IMG20260308142425.webp',
    size: 'small',
    demoLink: '#',
    repoLink: '#'
  },
  {
    id: 7,
    slug: 'device-location-management',
    title: 'Device Location Management',
    date: '2024-08-01',
    description: {
      EN: 'An admin dashboard for managing the location of user devices within buildings.',
      VN: 'Bảng điều khiển quản trị để quản lý vị trí thiết bị của người dùng trong các tòa nhà.',
      JP: '建物内のユーザーデバイスの位置を管理するための管理ダッシュボード。'
    },
    longDescription: {
      EN: 'An admin dashboard for managing the location of user devices within buildings. Team size: 4. Skills: HTML, HTML5, Git, Tailwind CSS, ESLint, Chart.js, GitFlow, Agile Methodologies, TypeScript, Front-End Development, Attention to Detail, Problem Solving, REST APIs, Web Applications, Web Development, CSS, Responsive Web Design, Agile Development, Node.js, Vue.js, JavaScript, Web Technologies, Version Control, Gitlab, State Management, Vanilla JavaScript.',
      VN: 'Bảng điều khiển quản trị để quản lý vị trí thiết bị của người dùng trong các tòa nhà. Quy mô nhóm: 4.',
      JP: '建物内のユーザーデバイスの位置を管理するための管理ダッシュボード。チームサイズ：4。'
    },
    tags: ['VUE.JS', 'TAILWIND CSS', 'TYPESCRIPT'],
    category: 'VUE.JS',
    image: 'https://raw.githubusercontent.com/loicduong/portfolio-2/refs/heads/develop/public/IMG20260308142425.webp',
    size: 'large',
    demoLink: '#',
    repoLink: '#'
  },
  {
    id: 8,
    slug: 'patient-management',
    title: 'Patient Management',
    date: '2024-05-01',
    description: {
      EN: 'Associated with Teanis Technologies. Team size: 9.',
      VN: 'Liên kết với Teanis Technologies. Quy mô nhóm: 9.',
      JP: 'Teanis Technologies関連。チームサイズ：9。'
    },
    longDescription: {
      EN: 'Skills: HTML, HTML5, Git, Tailwind CSS, ESLint, GitFlow, Agile Methodologies, TypeScript, Front-End Development, Attention to Detail, Problem Solving, REST APIs, Web Applications, Web Development, CSS, Responsive Web Design, Code Review, Agile Development, Node.js, Vue.js, JavaScript, Web Technologies, Version Control, Gitlab, State Management, Vanilla JavaScript, Mentoring.',
      VN: 'Quy mô nhóm: 9. Kỹ năng: Vue.js, TypeScript, Tailwind CSS, Node.js.',
      JP: 'チームサイズ：9。スキル：Vue.js、TypeScript、Tailwind CSS、Node.js。'
    },
    tags: ['VUE.JS', 'TYPESCRIPT', 'TAILWIND CSS'],
    category: 'VUE.JS',
    image: 'https://raw.githubusercontent.com/loicduong/portfolio-2/refs/heads/develop/public/IMG20260308142425.webp',
    size: 'small',
    demoLink: '#',
    repoLink: '#'
  },
  {
    id: 9,
    slug: 'telecommunications-business',
    title: 'Telecommunications Business',
    date: '2024-08-01',
    description: {
      EN: 'Associated with Teanis Technologies.',
      VN: 'Liên kết với Teanis Technologies.',
      JP: 'Teanis Technologies関連。'
    },
    longDescription: {
      EN: 'Skills: HTML, HTML5, Git, Tailwind CSS, ESLint, GitFlow, Agile Methodologies, TypeScript, Front-End Development, Attention to Detail, Problem Solving, REST APIs, Web Applications, Web Development, CSS, Responsive Web Design, Code Review, Agile Development, Node.js, Vue.js, JavaScript, Web Technologies, Version Control, Gitlab, State Management, Vanilla JavaScript.',
      VN: 'Kỹ năng: Vue.js, TypeScript, Tailwind CSS, Node.js.',
      JP: 'スキル：Vue.js、TypeScript、Tailwind CSS、Node.js。'
    },
    tags: ['VUE.JS', 'TYPESCRIPT', 'TAILWIND CSS'],
    category: 'VUE.JS',
    image: 'https://raw.githubusercontent.com/loicduong/portfolio-2/refs/heads/develop/public/IMG20260308142425.webp',
    size: 'small',
    demoLink: '#',
    repoLink: '#'
  },
  {
    id: 11,
    slug: 'walaclub',
    title: 'WalaClub',
    date: '2024-02-01',
    description: {
      EN: 'A website & a dashboard. Team size: 5.',
      VN: 'Một trang web & bảng điều khiển. Quy mô nhóm: 5.',
      JP: 'ウェブサイトとダッシュボード。チームサイズ：5。'
    },
    longDescription: {
      EN: 'Skills: HTML, HTML5, Git, jQuery, ESLint, PHP, GitFlow, Agile Methodologies, Front-End Development, Attention to Detail, Problem Solving, E-Commerce, REST APIs, Web Applications, Laravel, Web Development, CSS, Responsive Web Design, Agile Development, Server Side, Node.js, Vue.js, JavaScript, Web Technologies, AJAX, Version Control, Gitlab, State Management, Vanilla JavaScript. Links: Information Website.',
      VN: 'Kỹ năng: Vue.js, Laravel, PHP, E-Commerce.',
      JP: 'スキル：Vue.js、Laravel、PHP、Eコマース。'
    },
    tags: ['VUE.JS', 'LARAVEL', 'PHP'],
    category: 'LARAVEL',
    image: 'https://raw.githubusercontent.com/loicduong/portfolio-2/refs/heads/develop/public/IMG20260308142425.webp',
    size: 'small',
    demoLink: '#',
    repoLink: '#'
  },
  {
    id: 12,
    slug: 'vietnam-wine-business',
    title: 'Vietnam Wine Business',
    date: '2024-05-01',
    description: {
      EN: 'Includes an e-commerce website for customers and a management dashboard website for the admin.',
      VN: 'Bao gồm một trang web thương mại điện tử cho khách hàng và một trang web bảng điều khiển quản lý cho quản trị viên.',
      JP: '顧客向けのEコマースウェブサイトと管理者向けの管理ダッシュボードウェブサイトが含まれます。'
    },
    longDescription: {
      EN: 'Includes an e-commerce website for customers and a management dashboard website for the admin. Team size: 4. Skills: HTML, HTML5, Git, jQuery, ESLint, PHP, GitFlow, Agile Methodologies, Front-End Development, Attention to Detail, Problem Solving, E-Commerce, REST APIs, Web Applications, Laravel, Web Development, CSS, Responsive Web Design, Agile Development, Server Side, Node.js, Vue.js, JavaScript, Web Technologies, AJAX, Version Control, Gitlab, State Management, Vanilla JavaScript.',
      VN: 'Quy mô nhóm: 4. Kỹ năng: Vue.js, Laravel, E-Commerce.',
      JP: 'チームサイズ：4。スキル：Vue.js、Laravel、Eコマース。'
    },
    tags: ['VUE.JS', 'LARAVEL', 'E-COMMERCE'],
    category: 'LARAVEL',
    image: 'https://raw.githubusercontent.com/loicduong/portfolio-2/refs/heads/develop/public/IMG20260308142425.webp',
    size: 'large',
    demoLink: '#',
    repoLink: '#'
  },
  {
    id: 13,
    slug: 'yeahfit',
    title: 'Yeahfit',
    date: '2023-03-01',
    description: {
      EN: 'A training booking management system for gym systems.',
      VN: 'Hệ thống quản lý đặt lịch tập luyện cho các hệ thống phòng tập thể dục.',
      JP: 'ジムシステム向けのトレーニング予約管理システム。'
    },
    longDescription: {
      EN: 'A training booking management system for gym systems, including an admin dashboard and a web app for customer booking. Team size: 5. Responsibilities: Led code merges and reviews. Managed CI/CD pipelines. Mentored new team members. Skills: HTML, HTML5, Git, ESLint, Chart.js, GitFlow, Agile Methodologies, TypeScript, Front-End Development, Attention to Detail, Problem Solving, REST APIs, Web Applications, Web Development, CSS, Responsive Web Design, Code Review, Agile Development, Node.js, Vue.js, JavaScript, Web Technologies, Version Control, Gitlab, State Management, Vanilla JavaScript, Mentoring.',
      VN: 'Quy mô nhóm: 5. Trách nhiệm: Dẫn dắt việc hợp nhất mã và đánh giá. Quản lý đường ống CI/CD. Cố vấn cho các thành viên mới trong nhóm.',
      JP: 'チームサイズ：5。責任：コードのマージとレビューを主導。CI/CDパイプラインを管理。新しいチームメンバーを指導。'
    },
    tags: ['VUE.JS', 'TYPESCRIPT', 'NODE.JS'],
    category: 'VUE.JS',
    image: 'https://raw.githubusercontent.com/loicduong/portfolio-2/refs/heads/develop/public/IMG20260308142425.webp',
    size: 'small',
    demoLink: '#',
    repoLink: '#'
  },
  {
    id: 14,
    slug: 'camly',
    title: 'Camly',
    date: '2021-06-01',
    description: {
      EN: 'A management system for real estate projects.',
      VN: 'Hệ thống quản lý cho các dự án bất động sản.',
      JP: '不動産プロジェクトの管理システム。'
    },
    longDescription: {
      EN: 'A management system for real estate projects, including an admin dashboard and a management website for customers. Team size: 6. Skills: HTML, HTML5, Git, Nuxt.js, ESLint, GitFlow, Agile Methodologies, Vuex, Front-End Development, Attention to Detail, Problem Solving, REST APIs, Web Applications, Web Development, CSS, Responsive Web Design, Agile Development, Node.js, Vue.js, JavaScript, Web Technologies, Version Control, Gitlab, State Management, Vanilla JavaScript.',
      VN: 'Quy mô nhóm: 6. Kỹ năng: Nuxt.js, Vue.js, Node.js.',
      JP: 'チームサイズ：6。スキル：Nuxt.js、Vue.js、Node.js。'
    },
    tags: ['NUXT.JS', 'VUE.JS', 'NODE.JS'],
    category: 'VUE.JS',
    image: 'https://raw.githubusercontent.com/loicduong/portfolio-2/refs/heads/develop/public/IMG20260308142425.webp',
    size: 'small',
    demoLink: '#',
    repoLink: '#'
  },
  {
    id: 15,
    slug: 'tien-tien',
    title: 'Tien Tien',
    date: '2019-07-01',
    description: {
      EN: 'A specialized ERP management system for the textile industry.',
      VN: 'Hệ thống quản lý ERP chuyên dụng cho ngành dệt may.',
      JP: '繊維産業向けの専門的なERP管理システム。'
    },
    longDescription: {
      EN: 'A specialized ERP management system for the textile industry. Platforms: Desktop App. Team size: 8. Skills: Tortoise SVN, Visual Basic .NET (VB.NET), SQL, Microsoft SQL Server. Links: Demo Video.',
      VN: 'Nền tảng: Ứng dụng Desktop. Quy mô nhóm: 8. Kỹ năng: VB.NET, SQL Server.',
      JP: 'プラットフォーム：デスクトップアプリ。チームサイズ：8。スキル：VB.NET、SQL Server。'
    },
    tags: ['VB.NET', 'SQL SERVER', 'ERP'],
    category: 'DESKTOP APP',
    image: 'https://raw.githubusercontent.com/loicduong/portfolio-2/refs/heads/develop/public/IMG20260308142425.webp',
    size: 'small',
    demoLink: '#',
    repoLink: '#'
  }
];

const CATEGORIES = ['ALL', 'VUE.JS', 'NODE.JS', 'LARAVEL', 'OPEN SOURCE', 'DESKTOP APP'];

type Language = 'VN' | 'EN' | 'JP';

const TRANSLATIONS: Record<Language, any> = {
  EN: en,
  VN: vn,
  JP: jp
};

const ARCHIVE_IMAGES = [
  { 
    id: 'arch1', 
    url: 'https://raw.githubusercontent.com/loicduong/portfolio-2/refs/heads/develop/public/IMG20260308142425.webp', 
    title: { EN: 'Vung Tau', VN: 'Vũng Tàu', JP: 'ブンタウ' }, 
    description: { EN: 'A beautiful coastal city in Vietnam.', VN: 'Một thành phố biển xinh đẹp tại Việt Nam.', JP: 'ベトナムの美しい海辺の街。' }, 
    year: 2026 
  },
  { 
    id: 'arch2', 
    url: 'https://raw.githubusercontent.com/loicduong/portfolio-2/refs/heads/develop/public/IMG20251005092821.webp', 
    title: { EN: 'Suoi Giai', VN: 'Suối Giai', JP: 'スオイザイ' }, 
    description: { EN: 'A scenic spot in Vietnam.', VN: 'Một địa điểm đẹp tại Việt Nam.', JP: 'ベトナムの美しい場所。' }, 
    year: 2025 
  },
  { 
    id: 'arch3', 
    url: 'https://raw.githubusercontent.com/loicduong/portfolio-2/refs/heads/develop/public/IMG20250427174854.webp', 
    title: { EN: 'Landmark 81', VN: 'Landmark 81', JP: 'ランドマーク81' }, 
    description: { EN: 'The tallest building in Vietnam.', VN: 'Tòa nhà cao nhất Việt Nam.', JP: 'ベトナムで一番高いビル。' }, 
    year: 2025 
  },
  { 
    id: 'arch4', 
    url: 'https://raw.githubusercontent.com/loicduong/portfolio-2/refs/heads/develop/public/IMG20250405112204.webp', 
    title: { EN: 'Ba Den Mountain', VN: 'Núi Bà Đen', JP: 'バーデン山' }, 
    description: { EN: 'A famous mountain in Tay Ninh, Vietnam.', VN: 'Một ngọn núi nổi tiếng ở Tây Ninh, Việt Nam.', JP: 'ベトナムのタイニンにある有名な山。' }, 
    year: 2025 
  },
  { 
    id: 'arch5', 
    url: 'https://raw.githubusercontent.com/loicduong/portfolio-2/refs/heads/develop/public/IMG20250111130943.webp', 
    title: { EN: 'Tri An Lake', VN: 'Hồ Trị An', JP: 'チアン湖' }, 
    description: { EN: 'A beautiful lake in Dong Nai, Vietnam.', VN: 'Một hồ nước đẹp ở Đồng Nai, Việt Nam.', JP: 'ベトナムのドンナイにある美しい湖。' }, 
    year: 2025 
  }
];

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
              alt="Hero" 
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
                  className="bg-primary hover:bg-primary/80 text-white font-bold px-8 py-4 rounded-full flex items-center justify-center gap-2 group transition-all relative z-10"
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
                        <SafeImage src={randomProject.image} alt="" fill={false} className="transition-transform group-hover/peek:scale-110" />
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
                className="border-2 border-accent-gold hover:bg-accent-gold hover:text-black text-accent-gold font-bold px-8 py-4 rounded-full flex items-center justify-center gap-2 transition-all disabled:opacity-50 min-w-[220px] cursor-pointer disabled:cursor-not-allowed"
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

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 border-b border-primary/20 pb-12 gap-8">
          <div className="max-w-3xl">
            <h3 className="text-6xl md:text-9xl font-black text-stroke text-white/40 uppercase mb-6">{t.projects.title}</h3>
            <p className="text-zinc-400 text-xl md:text-2xl font-serif italic">
              {t.projects.subtitle}
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-16">
          <div className="flex flex-wrap items-center gap-3 overflow-x-auto no-scrollbar pb-4 pt-2 px-2 max-w-full md:max-w-[50%]">
            {CATEGORIES.map(cat => (
              <button 
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`group flex items-center gap-2 px-6 py-3 rounded-full text-[10px] font-black tracking-[0.2em] uppercase border transition-all hover:scale-105 cursor-pointer ${
                  activeCategory === cat 
                  ? 'bg-primary text-white border-primary shadow-lg shadow-primary/30' 
                  : 'bg-transparent text-zinc-400 border-primary/20 hover:border-primary hover:text-primary'
                }`}
              >
                {cat === 'ALL' ? (lang === 'VN' ? 'TẤT CẢ' : lang === 'JP' ? 'すべて' : 'ALL') : cat}
                <span className={`px-2 py-0.5 rounded-full text-[8px] font-bold ${
                  activeCategory === cat ? 'bg-white/20 text-white' : 'bg-white/5 text-zinc-400'
                }`}>
                  {cat === 'ALL' ? PROJECTS.length : PROJECTS.filter(p => p.category === cat).length}
                </span>
              </button>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
            <div className="relative w-full sm:w-64">
              <input 
                type="text" 
                placeholder={t.projects.search}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-full py-3 pl-12 pr-4 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" size={16} />
            </div>
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
                    {project.tags?.map(tag => (
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
            className="group relative px-12 py-6 bg-transparent overflow-hidden rounded-full border border-primary/50 text-primary font-black uppercase tracking-widest hover:text-white transition-colors duration-500 cursor-pointer"
          >
            <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
            <span className="relative z-10 flex items-center gap-3">
              {showAll ? t.projects.showLess : t.projects.viewAll}
              <Zap className={`transition-transform duration-500 ${showAll ? 'rotate-180' : 'group-hover:rotate-45'}`} size={20} />
            </span>
          </button>
        </div>
      </section>

      {/* Pedigree Section */}
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

      {/* Archive Section */}
      <section id="library" className="py-32">
        <div className="px-6 md:px-12 mb-20 flex flex-col items-start gap-6 text-left">
          <h3 className="text-6xl md:text-9xl font-black italic uppercase">{t.archive.title}</h3>
          <p className="text-zinc-400 font-mono text-sm max-w-xs hidden md:block leading-relaxed">
            {t.archive.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 px-4 md:px-12 items-start">
          <AnimatePresence mode="popLayout">
            {ARCHIVE_IMAGES.slice(0, archiveCount).map((item, i) => (
              <motion.div 
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                key={item.id} 
                onClick={() => openArchive(item)}
                className="rounded-2xl overflow-hidden group relative cursor-pointer"
              >
                <SafeImage 
                  src={item.url} 
                  alt={(item.title as any)[lang]} 
                  fill={false} 
                  className="grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
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

      {/* Footer */}
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
