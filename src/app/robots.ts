import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/SRD-OGL_V5.1.pdf', '/SRD5.1-CCBY4.0_License_livelinks.pdf'],
    },
    sitemap: 'https://teothe.com/sitemap.xml',
  }
}
