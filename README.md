# Barnes Demolition — Wilmington, NC

Marketing site for **Barnes Demolition**, a demolition and site services contractor serving Wilmington and the Cape Fear region, NC. Built with [Jekyll](https://jekyllrb.com/) and hosted on GitHub Pages.

**Live site:** [https://jimmyflame77.github.io/Barnes-Demolition/](https://jimmyflame77.github.io/Barnes-Demolition/)
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
├── _layouts/
│   └── default.html               # Base layout (head, header, content, footer, JS)
├── css/style.css                  # Global stylesheet (single file)
├── js/main.js                     # Shared JS (hamburger, scroll, fade-in, form)
├── img/                           # All images (logo, hero, service photos, favicon)
├── index.html                     # Homepage
├── services.html                  # Services detail page
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
- [ ] Add `_posts/` directory and `_layouts/post.html`
- [ ] Update `blog.html` index page (same pattern as Quick Haulers)
- [ ] Add blog link to navigation

### Content & Media
- [ ] Convert images to WebP for performance
- [ ] Add OG share image (`img/og-image.jpg`, 1200x630)
- [ ] Build out service area location pages

### Optimization
- [ ] Run Core Web Vitals audit
- [ ] Compress hero image (currently 1.5MB+ PNG)
