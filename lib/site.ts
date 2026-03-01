export const SUPPORTED_LANGS = ['en', 'vn', 'jp'] as const;
export type Locale = (typeof SUPPORTED_LANGS)[number];

export function getBaseUrl(): string {
  if (typeof process.env.APP_URL === 'string' && process.env.APP_URL) {
    return process.env.APP_URL.replace(/\/$/, '');
  }
  if (typeof process.env.NEXT_PUBLIC_VERCEL_URL === 'string' && process.env.NEXT_PUBLIC_VERCEL_URL) {
    return `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`;
  }
  return 'https://example.com';
}

export function getCanonicalUrl(path: string = ''): string {
  const base = getBaseUrl();
  const pathNorm = path.startsWith('/') ? path : `/${path}`;
  return `${base}${pathNorm}`;
}
