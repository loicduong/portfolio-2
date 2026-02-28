import type {Metadata} from 'next';
import { Space_Grotesk, Cormorant_Garamond } from 'next/font/google';
import './globals.css';

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
  title: 'Year of the Horse | Creative Portfolio',
  description: 'A high-performance creative portfolio for a frontend developer specializing in kinetic web experiences.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${cormorant.variable} dark`}>
      <body className="bg-zinc-50 dark:bg-[#0a0404] text-zinc-900 dark:text-zinc-100 antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
