
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://basa-khojo.vercel.app';

  // For now, we will manually add the static pages.
  // In the future, you can fetch dynamic routes (e.g., from a database)
  // and add them to the sitemap.
  const staticRoutes = [
    '/',
    '/asbabpotro',
    '/landlord',
    '/landlord/houses',
  ];

  const sitemap = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));

  return sitemap;
}
