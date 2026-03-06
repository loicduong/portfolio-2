import { MetadataRoute } from 'next';

const PROJECTS = [
  'home-renovation-service-management',
  'vite-plugin-vue-layouts-next',
  'trading-user-management',
  'sugame',
  'vue-boilerplate-internal',
  'html-boilerplate-internal',
  'device-location-management',
  'patient-management',
  'telecommunications-business',
  'w3s-cli-internal',
  'walaclub',
  'vietnam-wine-business',
  'yeahfit',
  'camly',
  'tien-tien'
];

const ARCHIVES = [
  'arch1', 'arch2', 'arch3', 'arch4', 'arch5', 'arch6',
  'arch7', 'arch8', 'arch9', 'arch10', 'arch11', 'arch12'
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://loicduong.dev';
  const languages = ['en', 'vn', 'jp'];
  
  const routes = languages.flatMap((lang) => {
    const baseRoutes = [
      {
        url: `${baseUrl}/${lang}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 1,
      }
    ];

    const projectRoutes = PROJECTS.map(slug => ({
      url: `${baseUrl}/${lang}/projects/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    }));

    const archiveRoutes = ARCHIVES.map(id => ({
      url: `${baseUrl}/${lang}/archive/${id}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }));

    return [...baseRoutes, ...projectRoutes, ...archiveRoutes];
  });

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 1,
    },
    ...routes,
  ];
}
