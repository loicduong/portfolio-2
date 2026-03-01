import type {Metadata} from 'next';
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

export const metadata: Metadata = {
  title: 'Loc Duong | Frontend Web Developer',
  description: 'Frontend Developer with 5+ years of experience in web development. Expertise includes: VueJS, NuxtJS, Bootstrap, Tailwind, JavaScript, TypeScript.',
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  return (
    <html lang={lang} className={`${spaceGrotesk.variable} ${cormorant.variable} dark`}>
      <body className="bg-zinc-50 dark:bg-[#0a0404] text-zinc-900 dark:text-zinc-100 antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
