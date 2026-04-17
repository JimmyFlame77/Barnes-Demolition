# Barnes Demolition — Wilmington, NC

Marketing site for **Barnes Demolition**, a demolition and site services contractor serving Wilmington and the Cape Fear region, NC. Built with [Jekyll](https://jekyllrb.com/) and hosted on GitHub Pages.

**Live site:** [https://barnesdemolition.com](https://barnesdemolition.com)
**Phone:** (910) 807-5640

---

## Architecture Overview

```
Barnes-Demolition/
├── _config.yml                    # Site config (url, baseurl, plugins)
├── _data/
│   ├── site.yml                   # Phone, email, company name, location
│   ├── navigation.yml             # Header/footer nav links
│   └── service_areas.yml          # Service area tags
├── _includes/
│   ├── head.html                  # <head> — meta, OG, Twitter, favicon, CSS, schema
│   ├── header.html                # Sticky nav, logo, hamburger, mobile menu
│   └── footer.html                # Footer with links, copyright
├── _posts/                        # Blog articles (Markdown)
├── _layouts/
│   ├── default.html               # Base layout (head, header, content, footer, JS)
│   └── post.html                  # Blog article layout
├── css/style.css                  # Global stylesheet (single file)
├── js/main.js                     # Shared JS (hamburger, scroll, fade-in, form)
├── img/                           # All images (logo, hero, service photos, favicon)
├── index.html                     # Homepage
├── services.html                  # Services detail page
├── blog.html                      # Blog index (renders post cards)
├── robots.txt                     # Crawl directives + sitemap reference
├── Gemfile                        # GitHub Pages gem dependencies
└── .gitignore                     # Build artifacts excluded
```

---

## How to Update Things Globally

### Update company info (phone, email, location)

Edit **`_data/site.yml`**. All pages, header, footer, and schema markup pull from this file.

```yaml
phone: "(910) 807-5640"
phone_link: "tel:9108075640"
email: "info@barnesdemolition.com"
location: "Wilmington, NC 28401"
```

### Update the header / navigation

- **Nav links:** Edit **`_data/navigation.yml`** to add, remove, or reorder links.
- **Header markup:** Edit **`_includes/header.html`**.

### Update the footer

Edit **`_includes/footer.html`**. Uses `_data/site.yml` for company info and `_data/navigation.yml` for links.

### Update service areas

Edit **`_data/service_areas.yml`** — the area tags on the homepage update automatically.

### Update shared CSS

Edit **`css/style.css`**. Single file for all pages — global styles, homepage sections, services page sections, responsive breakpoints, and animations.

### Update shared JS

Edit **`js/main.js`**. Contains hamburger menu, smooth scroll, fade-in animations, header shadow, and contact form validation.

### Update SEO / meta tags

- **Sitewide:** `_config.yml` (title, description) and `_includes/head.html` (OG, Twitter, schema structure)
- **Per-page:** Front matter of each `.html` file (`title`, `description`, `og_title`, `og_description`, `canonical`)
- **Schema:** LocalBusiness JSON-LD in `_includes/head.html` — pulls from `_data/site.yml`

---

## How to Write a Blog Post

### Create the file

Add a new Markdown file to `_posts/` using Jekyll's naming convention:

```
_posts/YYYY-MM-DD-your-post-slug.md
```

Example: `_posts/2026-05-01-when-to-hire-a-demolition-contractor.md`

### Front matter template

```yaml
---
layout: post
title: "Your Post Title Here"
date: 2026-05-01
category: "Guides"
author: "Barnes Demolition"
image: "/img/your-image.webp"
excerpt: "Short summary for the blog card (1-2 sentences)."
description: "SEO meta description (under 160 characters)."
---
```

| Field | Required | Notes |
|-------|----------|-------|
| `layout` | Yes | Always `post` |
| `title` | Yes | The article headline |
| `date` | Yes | Must match the filename date (YYYY-MM-DD) |
| `category` | No | Badge on the card (e.g., "Tips", "Guides", "Compliance") |
| `author` | No | Defaults to "Barnes Demolition" if omitted |
| `image` | No | Path to hero/card image. Defaults to barnes-01.webp if omitted |
| `excerpt` | No | Card summary. Auto-generated from first paragraph if omitted |
| `description` | No | SEO meta description |

### Write the content

After the closing `---`, write your article in Markdown. Use `##` for section headings.

The article layout renders: cinematic hero image, title with gold accent bar, meta info, content, prev/next navigation, CTA band, and back-to-blog link.

### Add a post image

1. Save your image to `img/` (e.g., `blog-new-topic.webp`)
2. Reference it in front matter: `image: "/img/blog-new-topic.webp"`
3. Images display as a cinematic banner (21:9 desktop, 16:9 mobile) via `object-fit: cover`

### Publish

```bash
git add _posts/2026-05-01-when-to-hire-a-demolition-contractor.md
git commit -m "New blog post: When to hire a demolition contractor"
git push origin main
```

The post appears on the blog index automatically with prev/next links to adjacent posts.

### Note on blog URLs

Blog post URLs include the category in the path — e.g., `/guides/preparing-your-property-for-residential-demolition.html`. If you rename a post's `category` in front matter, its URL will change. Keep categories consistent to avoid broken links.

---

## Local Development

```bash
bundle install
bundle exec jekyll serve
# Site at http://localhost:4000/Barnes-Demolition/
```

---

## Deployment

Auto-deploys via **GitHub Pages** on push to `main`.

When migrating to a custom domain:
1. Set custom domain in repo Settings → Pages
2. Change `baseurl` in `_config.yml` from `"/Barnes-Demolition"` to `""`
3. Update `url` in `_config.yml` to the production domain
4. Push changes

---

## Key Files Quick Reference

| I want to change...             | Edit this file                          |
|---------------------------------|-----------------------------------------|
| Company phone / email / address | `_data/site.yml`                        |
| Nav links                       | `_data/navigation.yml`                  |
| Service area tags               | `_data/service_areas.yml`               |
| Header markup                   | `_includes/header.html`                 |
| Footer markup                   | `_includes/footer.html`                 |
| Global CSS                      | `css/style.css`                         |
| Shared JS                       | `js/main.js`                            |
| Homepage content                | `index.html`                            |
| Services page content           | `services.html`                         |
| Blog index                      | `blog.html`                             |
| Blog posts                      | `_posts/YYYY-MM-DD-slug.md`             |
| Blog post layout                | `_layouts/post.html`                    |
| SEO meta (sitewide)             | `_includes/head.html`, `_config.yml`    |
| SEO meta (per page)             | Front matter of each `.html` file       |
| Schema / structured data        | `_includes/head.html`                   |
| Images                          | `img/` directory                        |

---

## Tech Stack

- **Jekyll 3.10** (GitHub Pages compatible)
- **Vanilla JS** — no frameworks or build tools
- **GitHub Pages** for hosting and CI/CD
- **Google Fonts** — Oswald + Roboto

---

## To Do

Items to complete as the project progresses. Delete each item once done.

### Client Setup
- [ ] Set up Google Search Console and submit `sitemap.xml`
- [ ] Add analytics integration (GA4 or Plausible) to `_includes/head.html`
- [ ] Get Google Business Profile access and add `sameAs` to schema

### Custom Domain Migration
- [ ] Configure custom domain in repo Settings → Pages
- [ ] Change `baseurl` in `_config.yml` from `"/Barnes-Demolition"` to `""`
- [ ] Update `url` in `_config.yml` to the production domain

### Contact Form
- [ ] Connect form to backend (Formspree, email endpoint, or custom)
- [ ] Currently shows "Message Sent" but doesn't actually send anywhere

### Blog
- [x] ~~Add `_posts/` directory and `_layouts/post.html`~~ — Done
- [x] ~~Create `blog.html` index page with card grid and search~~ — Done
- [x] ~~Add blog link to navigation~~ — Done
- [x] ~~Write 3 starter articles with real content~~ — Done

### Content & Media
- [x] ~~Convert images to WebP for performance~~ — Done
- [x] ~~Add OG share image~~ — Done (`img/og-image.webp`, 1200x630, 144KB)
- [ ] Build out service area location pages

### Optimization
- [x] ~~Convert images to WebP~~ — Done. 12.5MB → 1MB (92% reduction)
- [x] ~~Compress images for speed~~ — Done. Logo 194KB→8KB, hero resized, service photos recompressed. Total 1MB→815KB
- [ ] Run Core Web Vitals audit

---

### Blog Dashboard Integration
The `_blog-config.json` file in the repo root enables this site in the [Proxy Blog Dashboard](https://dashboard.proxymarketing.ai). The dashboard auto-discovers any repo containing this file and adds it to the site selector. If you build a new Jekyll site and want it to appear in the dashboard, add a `_blog-config.json` to the repo root:

```json
{
  "postsPath": "_posts",
  "imagesPath": "images",
  "defaultAuthor": "Your Site Name",
  "categories": ["Tips", "Guides", "News"]
}
```

Adjust `imagesPath` to match your site's image directory and `categories` to match your content categories.

---

### BlogPosting Schema
Every blog post automatically includes `BlogPosting` JSON-LD structured data (schema.org). This is generated in `_layouts/post.html` using front matter fields (title, date, author, description, image). No manual setup needed — any post published through the Proxy Blog Dashboard or added to `_posts/` gets rich result eligibility in Google automatically. When building new sites with this framework, include the BlogPosting schema block in `_layouts/post.html` to maintain this behavior.
