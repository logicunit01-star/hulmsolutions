import { MetadataRoute } from 'next'
import { getBlogPosts } from '@/lib/blog'
import { EDITORIAL_AUTHOR } from '../../content/blog/posts'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://hulmsolutions.com'

  // Standard static public routes
  const routes = [
    '',
    '/about',
    '/contact',
    '/pricing',
    '/blog',
  ].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  // Author route (Single unified editorial author)
  const authorRoute = {
    url: `${siteUrl}/author/${EDITORIAL_AUTHOR.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }

  // Dynamic blog post routes
  const posts = await getBlogPosts()
  const postRoutes = posts.map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: post.publishedAt ? new Date(post.publishedAt) : new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...routes, authorRoute, ...postRoutes]
}
