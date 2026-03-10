import en from '../app/dictionaries/en.json';
import vn from '../app/dictionaries/vn.json';
import jp from '../app/dictionaries/jp.json';

export const PROJECTS = [
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

export const CATEGORIES = ['ALL', 'VUE.JS', 'NODE.JS', 'LARAVEL', 'OPEN SOURCE', 'DESKTOP APP'];

export type Language = 'VN' | 'EN' | 'JP';

export const TRANSLATIONS: Record<Language, any> = {
  EN: en,
  VN: vn,
  JP: jp
};

export const ARCHIVE_IMAGES = [
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
    description: { EN: 'A large artificial lake in Dong Nai, Vietnam.', VN: 'Một hồ nhân tạo lớn ở Đồng Nai, Việt Nam.', JP: 'ベトナムのドンナイにある大きな人工湖。' }, 
    year: 2025 
  }
];
