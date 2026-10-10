import { PAGES } from './content/pages';

export default function sitemap() {
  const baseUrl = 'https://zen.balmacefa.com';
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    // Páginas del registro content/pages.js; lastModified = fecha real de publicación.
    ...PAGES.map((p) => ({
      url: `${baseUrl}${p.href}`,
      lastModified: new Date(p.added),
      changeFrequency: p.href === '/luna' ? 'daily' : 'monthly',
      priority: p.href === '/luna' ? 0.7 : 0.8,
    })),
    {
      url: `${baseUrl}/reflexiones`,
      lastModified: new Date('2026-04-12'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];
}
