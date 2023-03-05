I have generated a sitemap in `/public/output-sitemaps`.  
Browse here: [/public/output-sitemaps](https://github.com/masa5714/next-sitemap-outdir-sample/tree/main/public/output-sitemaps)

The problematic files are as follows:

- [robots.txt](https://github.com/masa5714/next-sitemap-outdir-sample/blob/main/public/output-sitemaps/robots.txt)
- [sitemap.xml](https://github.com/masa5714/next-sitemap-outdir-sample/blob/main/public/output-sitemaps/sitemap.xml)

## Expected behavior

◆ robots.txt

```txt
# *
User-agent: *
Allow: /

# Host
Host: https://hoge.jp

# Sitemaps
Sitemap: https://hoge.jp/output-sitemaps/sitemap.xml
```

◆ sitemap.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
<sitemap><loc>https://hoge.jp/output-sitemaps/sitemap-0.xml</loc></sitemap>
<sitemap><loc>https://hoge.jp/output-sitemaps/sitemap-1.xml</loc></sitemap>
...
<sitemap><loc>https://hoge.jp/output-sitemaps/sitemap-24.xml</loc></sitemap>
</sitemapindex>
```
