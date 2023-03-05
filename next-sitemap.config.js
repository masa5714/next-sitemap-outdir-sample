/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://hoge.jp/",
  generateRobotsTxt: true,
  outDir: "./public/output-sitemaps",
  additionalPaths: async () => {
    return await generateSearchPostalcodes();
  },
};

const generateSearchPostalcodes = async () => {
  const appRoot = require("app-root-path");
  const fs = require("fs/promises");

  const jsonBlob = await fs.readFile(`${appRoot}/public/json/address.json`, "utf8");
  const postalcodesJSON = await JSON.parse(jsonBlob);

  const result = [];

  for (let key in postalcodesJSON) {
    result.push({
      loc: `/search/${key}`,
      changefreq: "daily",
      priority: 0.8,
      lastmod: new Date().toISOString(),
    });
  }

  return result;
};
