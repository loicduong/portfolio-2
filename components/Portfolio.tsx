'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
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
  Dribbble,
  Twitter,
  ChevronDown,
  ArrowUp,
  X,
  ExternalLink,
  Loader2,
  Check,
  Search,
  MessageSquare
} from 'lucide-react';
import Image from 'next/image';
import en from '../app/dictionaries/en.json';
import vn from '../app/dictionaries/vn.json';
import jp from '../app/dictionaries/jp.json';

const SafeImage = ({ src, alt, fill, className, ...props }: any) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="relative w-full h-full overflow-hidden bg-zinc-900/50">
      <AnimatePresence>
        {!isLoaded && (
          <motion.div 
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-10 animate-shimmer"
          />
        )}
      </AnimatePresence>
      <Image
        src={src}
        alt={alt}
        fill={fill}
        className={`transition-all duration-700 ease-out ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'} ${className}`}
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
    title: 'GALLOPING CSS',
    date: '2024-01-15',
    description: {
      EN: 'Equine movement patterns in pure CSS.',
      VN: 'Các mẫu chuyển động của ngựa bằng CSS thuần túy.',
      JP: '純粋なCSSによる馬の動きのパターン。'
    },
    longDescription: {
      EN: 'A deep dive into procedural animation using only CSS keyframes and custom properties. This project explores the mathematical rhythm of a horse\'s gallop, translated into a series of fluid, performant web animations. Features zero-dependency rendering and adaptive frame rates.',
      VN: 'Đi sâu vào hoạt ảnh thủ tục chỉ sử dụng CSS keyframes và các thuộc tính tùy chỉnh. Dự án này khám phá nhịp điệu toán học của bước chạy đại của ngựa, được chuyển thành một loạt các hoạt ảnh web mượt mà, hiệu suất cao. Tính năng kết xuất không phụ thuộc và tốc độ khung hình thích ứng.',
      JP: 'CSSキーフレームとカスタムプロパティのみを使用したプロシージャルアニメーションの深掘り。このプロジェクトでは、馬のギャロップの数学的なリズムを探索し、一連の流動的でパフォーマンスの高いウェブアニメーションに変換しました。依存関係のないレンダリングと適応型フレームレートが特徴です。'
    },
    tags: ['REACT', 'GSAP'],
    category: 'REACT',
    image: 'https://picsum.photos/seed/gallop/1200/800',
    size: 'large',
    demoLink: '#',
    repoLink: '#'
  },
  {
    id: 2,
    title: 'KINETIC JS',
    date: '2023-11-20',
    description: {
      EN: 'Dynamic motion systems.',
      VN: 'Hệ thống chuyển động động.',
      JP: 'ダイナミックなモーションシステム。'
    },
    longDescription: {
      EN: 'A custom physics engine built on top of Three.js to simulate complex kinetic structures. This experiment focuses on the intersection of rigid body dynamics and user-driven interaction, creating a playground of reactive digital objects.',
      VN: 'Một công cụ vật lý tùy chỉnh được xây dựng trên Three.js để mô phỏng các cấu trúc động lực phức tạp. Thử nghiệm này tập trung vào sự giao thoa giữa động lực học vật thể rắn và tương tác do người dùng điều khiển, tạo ra một sân chơi của các đối tượng kỹ thuật số phản ứng.',
      JP: 'Three.jsの上に構築されたカスタム物理エンジンで、複雑な動的構造をシミュレートします。この実験は、剛体力学とユーザー主導のインタラクションの交差点に焦点を当て、反応的なデジタルオブジェクトのプレイグラウンドを作成します。'
    },
    tags: ['THREE.JS'],
    category: 'THREE.JS',
    image: 'https://picsum.photos/seed/kinetic/800/800',
    size: 'small',
    demoLink: '#',
    repoLink: '#'
  },
  {
    id: 3,
    title: 'RED LUCK UI',
    date: '2024-02-05',
    description: {
      EN: 'Minimalist design system.',
      VN: 'Hệ thống thiết kế tối giản.',
      JP: 'ミニマリストなデザインシステム。'
    },
    longDescription: {
      EN: 'A comprehensive design system built for high-stakes creative projects. Red Luck UI prioritizes bold typography, extreme contrast, and micro-interactions that feel heavy and intentional. Built with Tailwind CSS and Radix UI primitives.',
      VN: 'Một hệ thống thiết kế toàn diện được xây dựng cho các dự án sáng tạo quan trọng. Red Luck UI ưu tiên kiểu chữ đậm, độ tương phản cực cao và các tương tác vi mô mang lại cảm giác nặng nề và có chủ đích. Được xây dựng với Tailwind CSS và các nguyên mẫu Radix UI.',
      JP: '重要なクリエイティブプロジェクト向けに構築された包括的なデザインシステム。Red Luck UIは、大胆なタイポグラフィ、極端なコントラスト、そして重厚で意図的なマイクロインタラクションを優先しています。Tailwind CSSとRadix UIプリミティブを使用して構築されています。'
    },
    tags: ['NEXT.JS'],
    category: 'NEXT.JS',
    image: 'https://picsum.photos/seed/redluck/800/800',
    size: 'small',
    demoLink: '#',
    repoLink: '#'
  },
  {
    id: 4,
    title: 'GOLDEN HORSE ENGINE',
    date: '2023-09-12',
    description: {
      EN: 'High-performance rendering.',
      VN: 'Kết xuất hiệu suất cao.',
      JP: '高性能レンダリング。'
    },
    longDescription: {
      EN: 'An experimental WebGL rendering pipeline optimized for mobile devices. It utilizes custom GLSL shaders to achieve high-fidelity lighting and particle effects while maintaining a consistent 60fps on low-power hardware.',
      VN: 'Một quy trình kết xuất WebGL thử nghiệm được tối ưu hóa cho thiết bị di động. Nó sử dụng các shader GLSL tùy chỉnh để đạt được hiệu ứng ánh sáng và hạt có độ trung thực cao trong khi vẫn duy trì tốc độ 60 khung hình/giây ổn định trên phần cứng năng lượng thấp.',
      JP: 'モバイルデバイス向けに最適化された実験的なWebGLレンダリングパイプライン。カスタムGLSLシェーダーを利用して、低電力ハードウェアでも安定した60fpsを維持しながら、高忠実度のライティングとパーティクルエフェクトを実現します。'
    },
    tags: ['WEBGL'],
    category: 'WEBGL',
    image: 'https://picsum.photos/seed/golden/800/800',
    size: 'small',
    demoLink: '#',
    repoLink: '#'
  },
  {
    id: 5,
    title: 'SHADOW HOOF',
    date: '2024-02-20',
    description: {
      EN: 'Dark mode exploration.',
      VN: 'Khám phá chế độ tối.',
      JP: 'ダークモードの探索。'
    },
    longDescription: {
      EN: 'An immersive dark-mode-first experience that uses CSS backdrop filters and SVG masks to create a layered, atmospheric interface. This project challenges standard accessibility patterns to find a balance between high-concept aesthetics and usability.',
      VN: 'Một trải nghiệm ưu tiên chế độ tối đắm chìm sử dụng các bộ lọc nền CSS và mặt nạ SVG để tạo ra một giao diện phân lớp, đầy không khí. Dự án này thách thức các mẫu khả năng tiếp cận tiêu chuẩn để tìm ra sự cân bằng giữa tính thẩm mỹ ý tưởng cao và khả năng sử dụng.',
      JP: 'CSSバックドロップフィルターとSVGマスクを使用して、レイヤー化された雰囲気のあるインターフェースを作成する、没入型のダークモード優先体験。このプロジェクトは、標準的なアクセシビリティパターンに挑戦し、ハイコンセプトな美学とユーザビリティのバランスを見つけます。'
    },
    tags: ['GSAP'],
    category: 'GSAP',
    image: 'https://picsum.photos/seed/shadow/800/800',
    size: 'small',
    demoLink: '#',
    repoLink: '#'
  },
  {
    id: 6,
    title: 'NEON MANE',
    date: '2024-03-01',
    description: {
      EN: 'Cyberpunk aesthetic UI.',
      VN: 'Giao diện thẩm mỹ Cyberpunk.',
      JP: 'サイバーパンク風のUI。'
    },
    longDescription: {
      EN: 'A neon-drenched interface exploring futuristic typography and glow effects. Built with advanced CSS filters and custom SVG filters to achieve a true cyberpunk look without sacrificing performance.',
      VN: 'Một giao diện ngập tràn ánh đèn neon khám phá kiểu chữ tương lai và hiệu ứng phát sáng. Được xây dựng với các bộ lọc CSS nâng cao và bộ lọc SVG tùy chỉnh để đạt được vẻ ngoài cyberpunk thực sự mà không ảnh hưởng đến hiệu suất.',
      JP: 'フューチャリスティックなタイポグラフィとグロー効果を探索する、ネオンに満ちたインターフェース。パフォーマンスを犠牲にすることなく、高度なCSSフィルターとカスタムSVGフィルターを使用して、真のサイバーパンクな外観を実現しました。'
    },
    tags: ['REACT', 'TAILWIND'],
    category: 'REACT',
    image: 'https://picsum.photos/seed/neon/800/800',
    size: 'small',
    demoLink: '#',
    repoLink: '#'
  },
  {
    id: 7,
    title: 'STALLION CMS',
    date: '2023-12-10',
    description: {
      EN: 'Headless content management.',
      VN: 'Quản lý nội dung không đầu.',
      JP: 'ヘッドレスコンテンツ管理。'
    },
    longDescription: {
      EN: 'A lightweight headless CMS built for speed and developer experience. Features a real-time preview engine and a flexible schema builder that adapts to any content structure.',
      VN: 'Một CMS không đầu nhẹ được xây dựng cho tốc độ và trải nghiệm nhà phát triển. Tính năng công cụ xem trước thời gian thực và trình tạo lược đồ linh hoạt thích ứng với mọi cấu trúc nội dung.',
      JP: 'スピードとデベロッパーエクスペリエンスのために構築された軽量なヘッドレスCMS。リアルタイムプレビューエンジンと、あらゆるコンテンツ構造に適応する柔軟なスキーマビルダーを備えています。'
    },
    tags: ['NEXT.JS', 'PRISMA'],
    category: 'NEXT.JS',
    image: 'https://picsum.photos/seed/cms/1200/800',
    size: 'large',
    demoLink: '#',
    repoLink: '#'
  },
  {
    id: 8,
    title: 'IRON HOOF',
    date: '2023-08-25',
    description: {
      EN: 'Industrial design components.',
      VN: 'Các thành phần thiết kế công nghiệp.',
      JP: 'インダストリアルデザインコンポーネント。'
    },
    longDescription: {
      EN: 'A collection of UI components inspired by heavy machinery and industrial aesthetics. Focuses on tactile feedback and brutalist layout patterns.',
      VN: 'Một bộ sưu tập các thành phần UI lấy cảm hứng từ máy móc hạng nặng và thẩm mỹ công nghiệp. Tập trung vào phản hồi xúc giác và các mẫu bố cục brutalist.',
      JP: '重機やインダストリアルな美学にインスパイアされたUIコンポーネントのコレクション。触覚的なフィードバックとブルータリズムのレイアウトパターンに焦点を当てています。'
    },
    tags: ['VUE', 'SCSS'],
    category: 'VUE',
    image: 'https://picsum.photos/seed/iron/800/800',
    size: 'small',
    demoLink: '#',
    repoLink: '#'
  }
];

const CATEGORIES = ['ALL', 'REACT', 'VUE', 'THREE.JS', 'NEXT.JS', 'GSAP', 'WEBGL'];

type Language = 'VN' | 'EN' | 'JP';

const TRANSLATIONS: Record<Language, any> = {
  EN: en,
  VN: vn,
  JP: jp
};

const ARCHIVE_IMAGES = [
  { id: 'arch1', url: 'https://picsum.photos/seed/arch1/600/800', title: { EN: 'Urban Geometry', VN: 'Hình học đô thị', JP: '都市の幾何学' }, description: { EN: 'Exploring the intersecting lines of modern architecture.', VN: 'Khám phá những đường nét giao nhau của kiến trúc hiện đại.', JP: '現代建築の交差する線を探索する。' }, year: 2023 },
  { id: 'arch2', url: 'https://picsum.photos/seed/arch2/600/600', title: { EN: 'Neon Nights', VN: 'Đêm Neon', JP: 'ネオンの夜' }, description: { EN: 'The vibrant glow of city streets after dark.', VN: 'Ánh sáng rực rỡ của đường phố sau khi trời tối.', JP: '暗くなった後の街の通りの鮮やかな輝き。' }, year: 2022 },
  { id: 'arch3', url: 'https://picsum.photos/seed/arch3/600/700', title: { EN: 'Minimalist Workspace', VN: 'Không gian làm việc tối giản', JP: 'ミニマリストなワークスペース' }, description: { EN: 'A clean setup for focused creative work.', VN: 'Một góc làm việc gọn gàng để tập trung sáng tạo.', JP: '集中してクリエイティブな作業を行うためのクリーンなセットアップ。' }, year: 2024 },
  { id: 'arch4', url: 'https://picsum.photos/seed/arch4/600/600', title: { EN: 'Abstract Textures', VN: 'Kết cấu trừu tượng', JP: '抽象的なテクスチャ' }, description: { EN: 'Macro photography of everyday materials.', VN: 'Nhiếp ảnh macro của các vật liệu hàng ngày.', JP: '日常の素材のマクロ撮影。' }, year: 2021 },
  { id: 'arch5', url: 'https://picsum.photos/seed/arch5/600/800', title: { EN: 'Light & Shadow', VN: 'Ánh sáng & Bóng tối', JP: '光と影' }, description: { EN: 'High contrast study in natural lighting.', VN: 'Nghiên cứu độ tương phản cao trong ánh sáng tự nhiên.', JP: '自然光での高コントラストの研究。' }, year: 2023 },
  { id: 'arch6', url: 'https://picsum.photos/seed/arch6/600/700', title: { EN: 'Digital Nomads', VN: 'Dân du mục kỹ thuật số', JP: 'デジタルノマド' }, description: { EN: 'Working from anywhere in the world.', VN: 'Làm việc từ bất cứ đâu trên thế giới.', JP: '世界中のどこからでも働く。' }, year: 2022 },
  { id: 'arch7', url: 'https://picsum.photos/seed/arch7/600/600', title: { EN: 'Code Poetry', VN: 'Thơ ca mã nguồn', JP: 'コードの詩' }, description: { EN: 'The beauty of well-structured algorithms.', VN: 'Vẻ đẹp của các thuật toán được cấu trúc tốt.', JP: 'よく構造化されたアルゴリズムの美しさ。' }, year: 2024 },
  { id: 'arch8', url: 'https://picsum.photos/seed/arch8/600/800', title: { EN: 'Analog Nostalgia', VN: 'Hoài niệm Analog', JP: 'アナログの郷愁' }, description: { EN: 'Vintage tech meeting modern workflows.', VN: 'Công nghệ cổ điển kết hợp quy trình làm việc hiện đại.', JP: 'ヴィンテージ技術と現代のワークフローの出会い。' }, year: 2021 },
  { id: 'arch9', url: 'https://picsum.photos/seed/arch9/600/700', title: { EN: 'Future Interfaces', VN: 'Giao diện tương lai', JP: '未来のインターフェース' }, description: { EN: 'Conceptual UI designs for spatial computing.', VN: 'Thiết kế UI khái niệm cho điện toán không gian.', JP: '空間コンピューティングのための概念的なUIデザイン。' }, year: 2024 },
  { id: 'arch10', url: 'https://picsum.photos/seed/arch10/600/600', title: { EN: 'Coffee Fuel', VN: 'Nhiên liệu cà phê', JP: 'コーヒーの燃料' }, description: { EN: 'The essential ingredient for late-night coding.', VN: 'Thành phần thiết yếu cho những đêm code muộn.', JP: '深夜のコーディングに不可欠な要素。' }, year: 2023 },
  { id: 'arch11', url: 'https://picsum.photos/seed/arch11/600/800', title: { EN: 'Server Racks', VN: 'Tủ máy chủ', JP: 'サーバーラック' }, description: { EN: 'The physical backbone of the internet.', VN: 'Xương sống vật lý của internet.', JP: 'インターネットの物理的なバックボーン。' }, year: 2022 },
  { id: 'arch12', url: 'https://picsum.photos/seed/arch12/600/700', title: { EN: 'Creative Chaos', VN: 'Sự hỗn loạn sáng tạo', JP: '創造的な混沌' }, description: { EN: 'The messy process before the polished result.', VN: 'Quá trình lộn xộn trước khi có kết quả hoàn hảo.', JP: '洗練された結果の前の乱雑なプロセス。' }, year: 2021 },
];

export default function Portfolio() {
  const params = useParams();
  const router = useRouter();
  const pathname = usePathname();
  const currentLang = (params?.lang as string)?.toUpperCase() || 'EN';
  const lang = (['EN', 'VN', 'JP'].includes(currentLang) ? currentLang : 'EN') as Language;

  const [activeCategory, setActiveCategory] = useState('ALL');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [selectedArchiveImage, setSelectedArchiveImage] = useState<any>(null);
  const [isHoveringExplore, setIsHoveringExplore] = useState(false);
  const [randomProject, setRandomProject] = useState(() => PROJECTS[Math.floor(Math.random() * PROJECTS.length)]);
  const [downloadState, setDownloadState] = useState<'idle' | 'loading' | 'success'>('idle');
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const [explorePos, setExplorePos] = useState({ x: 0, y: 0 });
  const [showAll, setShowAll] = useState(false);
  const [archiveCount, setArchiveCount] = useState(4);
  const [searchQuery, setSearchQuery] = useState('');
  const exploreRef = useRef<HTMLDivElement>(null);

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

  const handleExploreMouseMove = (e: React.MouseEvent) => {
    if (!exploreRef.current) return;
    const { left, top, width, height } = exploreRef.current.getBoundingClientRect();
    const x = e.clientX - (left + width / 2);
    const y = e.clientY - (top + height / 2);
    setExplorePos({ x: x * 0.3, y: y * 0.3 });
  };

  const resetExplorePos = () => setExplorePos({ x: 0, y: 0 });

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
    <div className="min-h-screen bg-[#0a0404] text-white">
      {/* Navigation & Controls */}
      <div className="fixed top-6 right-6 z-50 flex items-center gap-4">
        <button 
          onClick={() => window.location.href = 'mailto:hello@example.com'}
          className="hidden md:flex items-center gap-2 bg-primary hover:bg-white hover:text-black text-white backdrop-blur-xl border border-primary/50 hover:border-white rounded-full px-6 py-2.5 text-xs font-black tracking-[0.2em] transition-all duration-300 uppercase cursor-pointer shadow-[0_0_20px_rgba(242,13,13,0.3)] hover:shadow-[0_0_25px_rgba(255,255,255,0.5)] hover:scale-105 active:scale-95"
        >
          <MessageSquare size={16} />
          {t.footer.talk}
        </button>
        <div className="relative">
          <button 
            onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
            className="bg-black/40 backdrop-blur-xl border border-primary/20 rounded-full px-4 py-2 flex items-center gap-2 text-xs font-bold tracking-widest hover:border-primary transition-colors cursor-pointer"
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
      </div>

      {/* Floating Menu Labels */}
      <nav className="fixed inset-0 pointer-events-none z-40 hidden lg:block">
        <div className="relative w-full h-full">
          <a href="#projects" className="pointer-events-auto absolute top-10 left-10 -rotate-12 hover:scale-110 transition-transform bg-primary px-6 py-2 rounded-full font-bold text-white shadow-xl shadow-primary/20">{t.nav.projects}</a>
          <a href="#experience" className="pointer-events-auto absolute top-40 right-40 rotate-12 hover:scale-110 transition-transform bg-[#4a0404] border border-primary/30 px-6 py-2 rounded-full font-bold text-white">{t.nav.experience}</a>
          <a href="#skills" className="pointer-events-auto absolute bottom-20 left-20 rotate-6 hover:scale-110 transition-transform border-2 border-primary px-6 py-2 rounded-full font-bold text-primary bg-black/80 backdrop-blur-md">{t.nav.skills}</a>
          <a href="#library" className="pointer-events-auto absolute bottom-10 right-20 -rotate-6 hover:scale-110 transition-transform bg-accent-gold/20 text-accent-gold border border-accent-gold/50 px-6 py-2 rounded-full font-bold">{t.nav.library}</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col lg:grid lg:grid-cols-12 p-4 md:p-8 gap-4 overflow-hidden">
        <div className="lg:col-span-4 z-10 pt-12">
          <div className="flex items-center gap-4 text-primary">
            <Zap size={48} strokeWidth={3} />
            <h1 className="text-4xl font-black tracking-tighter uppercase">HORSE/FE</h1>
          </div>
        </div>

        <div className="lg:col-start-4 lg:col-span-9 lg:row-start-1 lg:row-span-4 relative group min-h-[50vh] lg:min-h-0">
          <div className="w-full h-full bg-zinc-900 rounded-2xl overflow-hidden relative border border-primary/20">
            <SafeImage 
              src="https://picsum.photos/seed/horse-hero/1920/1080" 
              alt="Hero" 
              fill 
              className="object-cover grayscale group-hover:grayscale-0 opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0404] via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none">
              <span className="text-[15vw] font-black uppercase text-primary/5 select-none leading-none -mb-4 block">GALLOP</span>
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
                ref={exploreRef}
                onMouseMove={handleExploreMouseMove}
                onMouseLeave={() => {
                  setIsHoveringExplore(false);
                  resetExplorePos();
                }}
                className="relative group/explore"
              >
                <motion.a 
                  href="#projects"
                  animate={{ x: explorePos.x, y: explorePos.y }}
                  transition={{ type: 'spring', stiffness: 150, damping: 15 }}
                  onMouseEnter={() => setIsHoveringExplore(true)}
                  className="bg-primary hover:bg-primary/80 text-white font-bold px-8 py-4 rounded-full flex items-center justify-center gap-2 group transition-all relative z-10"
                >
                  {t.hero.explore}
                  <span className="bg-white/20 px-2 py-0.5 rounded text-[10px]">{PROJECTS.length}</span>
                  <ArrowRight className="group-hover:translate-x-2 transition-transform" size={20} />
                </motion.a>

                {/* Quick Peek Tooltip */}
                <AnimatePresence>
                  {isHoveringExplore && randomProject && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.8 }}
                      animate={{ opacity: 1, y: -10, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.8 }}
                      className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-56 bg-zinc-900 p-3 rounded-2xl shadow-2xl border border-primary/20 pointer-events-auto hidden md:block z-20"
                    >
                      <div 
                        role="button"
                        tabIndex={0}
                        aria-label={`View details for ${randomProject.title}`}
                        className="relative aspect-video rounded-xl overflow-hidden mb-3 cursor-pointer group/peek focus-visible:outline-2 focus-visible:outline-primary"
                        onClick={() => setSelectedProject(randomProject)}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            setSelectedProject(randomProject);
                          }
                        }}
                      >
                        <SafeImage src={randomProject.image} alt="" fill className="object-cover transition-transform group-hover/peek:scale-110" />
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
            <h3 className="text-6xl md:text-9xl font-black text-stroke uppercase mb-6 opacity-20">{t.projects.title}</h3>
            <p className="text-zinc-400 text-xl md:text-2xl font-serif italic">
              {t.projects.subtitle}
            </p>
          </div>
          <p className="text-accent-gold text-left md:text-right uppercase tracking-[0.3em] font-bold text-sm leading-relaxed">
            {t.projects.selected} <br/> (Vol. 01 — 24)
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-16">
          <div className="flex flex-wrap items-center gap-3 overflow-x-auto no-scrollbar pb-4 max-w-full md:max-w-[50%]">
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

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
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
                onClick={() => setSelectedProject(project)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelectedProject(project);
                  }
                }}
                className={`${project.size === 'large' ? 'md:col-span-8' : 'md:col-span-4'} group relative h-[500px] bg-zinc-900 rounded-2xl overflow-hidden border border-white/10 cursor-pointer focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-4`}
              >
                <SafeImage 
                  src={project.image} 
                  alt={project.title} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent p-10 flex flex-col justify-end">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-[10px] font-mono text-zinc-400 border border-zinc-700 px-2 py-1 rounded">
                      {new Date(project.date).getFullYear()}
                    </span>
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[8px] px-2 py-1 border border-primary text-primary font-bold tracking-tighter uppercase rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h4 className="text-3xl font-bold text-white mb-2">{project.title}</h4>
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
                  year: '2023 - PRESENT',
                  role: lang === 'VN' ? 'KIẾN TRÚC SƯ CẤP CAO' : lang === 'JP' ? 'シニアアーキテクト' : 'SENIOR ARCHITECT',
                  company: 'Digital Gallop Studio',
                  desc: lang === 'VN' 
                    ? 'Dẫn đầu trong việc xây dựng các giao diện WebGL hiệu suất cao và kể chuyện tương tác điện ảnh cho các thương hiệu xa xỉ toàn cầu.' 
                    : lang === 'JP' 
                    ? 'グローバルラグジュアリーブランド向けの高性能WebGLインターフェースとシネマティックなインタラクティブストーリーテリングをリードしています。' 
                    : 'Leading the charge in high-performance WebGL interfaces and cinematic interactive storytelling for global luxury brands.',
                  icon: <Layers size={16} />
                },
                {
                  year: '2021 - 2023',
                  role: lang === 'VN' ? 'NGƯỜI THỬ NGHIỆM UI' : lang === 'JP' ? 'UI実験者' : 'UI EXPERIMENTER',
                  company: 'Avant-Garde Web Lab',
                  desc: lang === 'VN' 
                    ? 'Phát triển các hệ thống hoạt ảnh độc quyền bằng GSAP và Matter.js cho các chuyển đổi bố cục dựa trên vật lý.' 
                    : lang === 'JP' 
                    ? '物理ベースのレイアウト変換のために、GSAPとMatter.jsを使用した独自の記述アニメーションシステムを開発しました。' 
                    : 'Developed proprietary animation systems using GSAP and Matter.js for physics-based layout transformations.',
                  icon: <Zap size={16} />
                },
                {
                  year: '2019 - 2021',
                  role: lang === 'VN' ? 'LẬP TRÌNH VIÊN FRONTEND' : lang === 'JP' ? 'フロントエンドジョッキー' : 'FRONTEND JOCKEY',
                  company: 'Kinetic Creative',
                  desc: lang === 'VN' 
                    ? 'Tạo ra các bước chuyển mượt mà và bố cục đáp ứng hoàn hảo trong những ngày đầu của CSS Grid hiện đại.' 
                    : lang === 'JP' 
                    ? 'モダンなCSS Gridの初期段階において、スムーズな遷移とピクセルパーフェクトなレスポンシブレイアウトを構築しました。' 
                    : 'Crafting smooth transitions and pixel-perfect responsive layouts in the early days of modern CSS Grid.',
                  icon: <History size={16} />
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
                  {['React / Next.js', 'TypeScript', 'Tailwind CSS', 'Web Performance', 'A11y Architecture'].map(s => (
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
                  {['Three.js', 'GSAP Animation', 'GLSL Shaders', 'Canvas API', 'Motion Design'].map(s => (
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
                  {['Figma', 'Vite / Webpack', 'Docker', 'Git / CI/CD', 'Storybook'].map(s => (
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
        <div className="px-6 md:px-12 mb-20 flex flex-col md:flex-row justify-between items-end gap-12">
          <div>
            <h3 className="text-6xl md:text-9xl font-black italic mb-8 uppercase">{t.archive.title}</h3>
            <div className="flex flex-nowrap overflow-x-auto no-scrollbar gap-4 pb-2">
              {['ALL', 'NATURE', 'TECH', 'STREET'].map(f => (
                <button key={f} className={`whitespace-nowrap px-8 py-3 font-bold rounded-full text-xs tracking-widest uppercase transition-all cursor-pointer ${f === 'ALL' ? 'bg-primary text-white' : 'bg-white/5 hover:bg-white/10 text-zinc-400'}`}>
                  {f}
                </button>
              ))}
            </div>
          </div>
          <p className="text-zinc-400 font-mono text-sm max-w-xs text-right hidden md:block leading-relaxed">
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
                onClick={() => setSelectedArchiveImage(item)}
                className={`rounded-2xl overflow-hidden group relative cursor-pointer ${i % 3 === 0 ? 'aspect-[3/4]' : 'aspect-square'}`}
              >
                <SafeImage 
                  src={item.url} 
                  alt={(item.title as any)[lang]} 
                  fill 
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

      {/* Footer */}
      <footer className="py-32 px-6 md:px-12 border-t border-primary/20 relative overflow-hidden bg-[#0a0404]">
        <div className="flex flex-col items-center text-center gap-12 relative z-10">
          <h4 className="text-6xl md:text-[10rem] font-black text-stroke uppercase leading-none opacity-10">{t.footer.title}</h4>
          <p className="text-zinc-400 max-w-xl text-xl md:text-2xl font-serif italic">
            {t.footer.subtitle}
          </p>
          <button className="px-16 py-8 bg-primary text-white text-2xl md:text-4xl font-black rounded-full hover:scale-110 transition-transform shadow-[0_0_60px_rgba(242,13,13,0.4)] cursor-pointer">
            {t.footer.talk}
          </button>
          
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 mt-12">
            {[
              { name: 'Github', icon: <Github size={20} /> },
              { name: 'LinkedIn', icon: <Linkedin size={20} /> },
              { name: 'Dribbble', icon: <Dribbble size={20} /> },
              { name: 'Twitter', icon: <Twitter size={20} /> }
            ].map(social => (
              <a 
                key={social.name} 
                href="#" 
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
          <Zap size={600} className="text-primary" />
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
              onClick={() => setSelectedArchiveImage(null)}
              className="absolute inset-0 bg-black/95 backdrop-blur-xl cursor-pointer"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-5xl max-h-[90vh] bg-[#0a0404] rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row pointer-events-none border border-primary/20"
            >
              <button 
                onClick={() => setSelectedArchiveImage(null)}
                aria-label="Close modal"
                className="absolute top-6 right-6 z-10 w-10 h-10 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-primary transition-colors focus-visible:outline-2 focus-visible:outline-primary cursor-pointer pointer-events-auto"
              >
                <X size={20} />
              </button>

              <div className="relative w-full md:w-1/2 h-64 md:h-auto pointer-events-auto">
                <SafeImage 
                  src={selectedArchiveImage.url} 
                  alt={(selectedArchiveImage.title as any)[lang]} 
                  fill 
                  className="object-cover"
                />
              </div>
              
              <div className="w-full md:w-1/2 p-8 md:p-12 overflow-y-auto no-scrollbar pointer-events-auto flex flex-col justify-center">
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
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-md"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-5xl max-h-[90vh] bg-[#0a0404] rounded-3xl overflow-hidden shadow-2xl border border-primary/20 flex flex-col md:flex-row"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                aria-label="Close modal"
                className="absolute top-6 right-6 z-10 w-10 h-10 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-primary transition-colors focus-visible:outline-2 focus-visible:outline-primary cursor-pointer"
              >
                <X size={20} />
              </button>

              <div className="w-full md:w-1/2 h-64 md:h-auto relative">
                <SafeImage 
                  src={selectedProject.image} 
                  alt={selectedProject.title} 
                  fill 
                  className="object-cover"
                />
              </div>

              <div className="w-full md:w-1/2 p-8 md:p-12 overflow-y-auto no-scrollbar">
                <div className="flex items-center gap-2 mb-6">
                  <span className="text-xs font-mono text-zinc-400 border border-zinc-700 px-3 py-1 rounded-full">
                    {new Date(selectedProject.date).getFullYear()}
                  </span>
                  {selectedProject.tags.map((tag: string) => (
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
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
