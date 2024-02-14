import { MetadataRoute } from 'next'

const sitemapUrl = 'https://teothe.com/sitemap.xml'; //Not sure if ./ or / works on this url
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      //disallow: '/private/',
      crawlDelay: 5,
    },
    sitemap: sitemapUrl
  }
}