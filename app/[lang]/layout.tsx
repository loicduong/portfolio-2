import type { Metadata, ResolvingMetadata } from 'next';
import { Space_Grotesk, Cormorant_Garamond } from 'next/font/google';
import '../globals.css';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['italic'],
  variable: '--font-serif',
});

type Props = {
  params: Promise<{ lang: string }>;
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { lang } = await params;
  const isVN = lang === 'vn';
  const isJP = lang === 'jp';

  const title = isVN 
    ? 'Lộc Dương | Lập trình viên Frontend' 
    : isJP 
      ? 'Loc Duong | フロントエンドエンジニア' 
      : 'Loc Duong | Frontend Web Developer';
  
  const description = isVN
    ? 'Lập trình viên Frontend với hơn 5 năm kinh nghiệm. Chuyên gia về VueJS, NuxtJS, JavaScript, TypeScript và tối ưu hóa hiệu suất web.'
    : isJP
      ? '5年以上の経験を持つフロントエンドエンジニア。VueJS、NuxtJS、JavaScript、TypeScript、ウェブパフォーマンス最適化の専門知識を持っています。'
      : 'Frontend Developer with 5+ years of experience. Expertise in VueJS, NuxtJS, JavaScript, TypeScript, and web performance optimization.';

  return {
    title,
    description,
    keywords: ['Loc Duong', 'Lộc Dương', 'Frontend Developer', 'VueJS Developer', 'NuxtJS', 'TypeScript', 'Web Developer Portfolio', 'Lập trình viên Frontend'],
    authors: [{ name: 'Loc Duong' }],
    creator: 'Loc Duong',
    openGraph: {
      title,
      description,
      url: `https://loicduong.dev/${lang}`,
      siteName: 'Loc Duong Portfolio',
      locale: lang === 'vn' ? 'vi_VN' : lang === 'jp' ? 'ja_JP' : 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      creator: '@loicduong',
    },
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: `https://loicduong.dev/${lang}`,
      languages: {
        'en-US': 'https://loicduong.dev/en',
        'vi-VN': 'https://loicduong.dev/vn',
        'ja-JP': 'https://loicduong.dev/jp',
      },
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Loc Duong',
    url: 'https://loicduong.dev',
    jobTitle: 'Frontend Web Developer',
    sameAs: [
      'https://github.com/loicduong',
      'https://www.linkedin.com/in/loicduong',
    ],
    knowsAbout: ['VueJS', 'NuxtJS', 'JavaScript', 'TypeScript', 'Web Development', 'Frontend Development'],
  };

  return (
    <html lang={lang} className={`${spaceGrotesk.variable} ${cormorant.variable} dark`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-zinc-50 dark:bg-[#0a0404] text-zinc-900 dark:text-zinc-100 antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
