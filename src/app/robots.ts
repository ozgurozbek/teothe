import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      //disallow: '/private/',
      crawlDelay: 5,
    },
    //sitemap: 'add sitemap.xml if converted from SPA-like to next router pages.',
  }
}