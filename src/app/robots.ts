import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://hulmsolutions.com'

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // Prevent crawling of internal Next.js paths just in case, though they aren't usually linked
      disallow: ['/api/', '/_next/'], 
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  }
}
