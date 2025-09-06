/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://washcam.uz",
  generateRobotsTxt: true,
  sitemapSize: 5000,
  exclude: ["/server-sitemap.xml"],
  robotsTxtOptions: {
    additionalSitemaps: ["https://washcam.uz/server-sitemap.xml"],
  },
};
