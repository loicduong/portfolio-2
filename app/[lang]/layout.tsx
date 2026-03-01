import type {Metadata} from 'next';
import { Space_Grotesk, Cormorant_Garamond } from 'next/font/google';
import '../globals.css';
import { getDictionary } from '@/app/dictionaries';
import { getBaseUrl, getCanonicalUrl, SUPPORTED_LANGS } from '@/lib/site';

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

const SITE_NAME = 'Loc Duong';
const LOCALE_MAP: Record<string, string> = { en: 'en_US', vn: 'vi_VN', jp: 'ja_JP' };

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale = SUPPORTED_LANGS.includes(lang as 'en' | 'vn' | 'jp') ? (lang as 'en' | 'vn' | 'jp') : 'en';
  const dict = await getDictionary(locale);
  const baseUrl = getBaseUrl();
  const canonical = getCanonicalUrl(`/${locale}`);
  const title = `${dict.hero.title} | ${SITE_NAME}`;
  const description = dict.hero.subtitle;

  const languages: Record<string, string> = {};
  for (const l of SUPPORTED_LANGS) {
    languages[l] = getCanonicalUrl(`/${l}`);
  }

  const ogImageUrl = `${baseUrl}/og.png`;

  return {
    title,
    description,
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical,
      languages,
    },
    openGraph: {
      type: 'website',
      locale: LOCALE_MAP[locale],
      url: canonical,
      siteName: SITE_NAME,
      title,
      description,
      images: [{ url: ogImageUrl, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImageUrl],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

function JsonLdScript({ lang, dict }: { lang: string; dict: { hero: { title: string; subtitle: string } } }) {
  const baseUrl = getBaseUrl();
  const pageUrl = getCanonicalUrl(`/${lang}`);
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${baseUrl}/#website`,
        url: baseUrl,
        name: SITE_NAME,
        description: dict.hero.subtitle,
        inLanguage: [lang],
        potentialAction: {
          '@type': 'ReadAction',
          target: pageUrl,
        },
      },
      {
        '@type': 'Person',
        '@id': `${baseUrl}/#person`,
        name: SITE_NAME,
        description: dict.hero.subtitle,
        url: pageUrl,
      },
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = SUPPORTED_LANGS.includes(lang as 'en' | 'vn' | 'jp') ? (lang as 'en' | 'vn' | 'jp') : 'en';
  const dict = await getDictionary(locale);
  return (
    <html lang={locale} className={`${spaceGrotesk.variable} ${cormorant.variable} dark`}>
      <body className="bg-zinc-50 dark:bg-[#0a0404] text-zinc-900 dark:text-zinc-100 antialiased" suppressHydrationWarning>
        <JsonLdScript lang={locale} dict={dict} />
        {children}
      </body>
    </html>
  );
}
