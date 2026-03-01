import type { MetadataRoute } from 'next';
import { getCanonicalUrl, SUPPORTED_LANGS } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const languages = Object.fromEntries(
    SUPPORTED_LANGS.map((locale) => [locale, getCanonicalUrl(`/${locale}`)])
  );
  return SUPPORTED_LANGS.map((locale) => ({
    url: getCanonicalUrl(`/${locale}`),
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 1,
    alternates: { languages },
  }));
}
