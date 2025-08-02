
import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://basa-khojo.vercel.app';

  const staticRoutes = [
    '/',
    '/asbabpotro',
    '/landlord',
    '/landlord/houses',
  ];

  const staticSitemap = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));

  const res = await fetch(`${baseUrl}/api/posts`);
  const posts: Post[] = await res.json();

  const dynamicSitemap = posts.map((post) => ({
    url: `${baseUrl}/basa/${post._id}`,
    lastModified: new Date(post.lastUpdate),
  }));

  return [...staticSitemap, ...dynamicSitemap];
}
