import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: 'https://ais-dev-vzqyjllpvmmkkyfg6q2hft-284222860959.asia-east1.run.app/sitemap.xml',
  };
}
