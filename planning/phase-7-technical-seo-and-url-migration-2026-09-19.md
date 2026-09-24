# Phase 7 — Technical SEO and URL migration

Date: 19 September 2026  
Status: Implemented locally; production deployment not started

## Scope

This phase compared URLs exposed by the current `hulmsolutions.com` site with the rebuilt Next.js route set, then implemented the technical SEO foundation needed before launch.

## Production URL evidence

The live homepage currently links to these important route families:

- Core: `/`, `/about/`, `/contact/`, `/pricing/`, `/features/`, `/integration/`
- Product capabilities: `/order-management/`, `/purchase-orders/`, `/inventory-management/`, `/vendors-management/`, `/customer-management/`, `/reporting-module/`, `/logistics-management-software/`, `/mobile-pos/`, `/cattle-management-software/`, `/website/`
- Industries: `/industries/` plus twelve industry detail pages
- Compliance and regions: `/fbr-integrated-pos-pakistan/`, `/zatca/`, `/pos-software-ksa`, `/pos-software-qatar/`, `/pos-software-uae/`, `/pos-software-usa/`
- Editorial: `/blogs/`, `/blog/{slug}` and `/pos-case-studies/`
- Legal: `/privacy-policy/` and `/terms-and-conditions/`

The live site also exposes duplicate or outdated routes for the same intent:

- `/industries/bakery/` and `/industries/bakery-pos-system/`
- `/industries/salon-spa/` and `/industries/salon-pos/`
- `/blogs/` and `/blog/{slug}` versus the rebuild's `/insights` family
- `/pos-case-studies/` versus the rebuild's `/case-studies` family
- `/point-of-sale-2/` as a duplicate homepage-like URL

## Canonical route decisions

| Content family | Canonical destination |
| --- | --- |
| Product overview | `/apps` |
| Industry index | `/industries` |
| Bakery | `/industries/bakery-pos-system` |
| Salon / spa | `/industries/salon-pos` |
| Restaurant | `/industries/restaurant-pos` |
| Editorial index | `/insights` |
| Editorial article | `/insights/{slug}` |
| Case studies | `/case-studies` and `/case-studies/{slug}` |
| Editorial author | `/author/hulm-solutions-editorial-team` |

## Implemented

### Redirect preservation

Permanent redirects were added for:

- `/blogs` → `/insights`
- `/blog` → `/insights`
- `/blog/:slug*` → `/insights/:slug*`
- `/pos-case-studies` → `/case-studies`
- `/pos-case-studies/:slug*` → `/case-studies/:slug*`
- `/industries/bakery` → `/industries/bakery-pos-system`
- `/industries/salon-spa` → `/industries/salon-pos`
- `/industries/restaurant` → `/industries/restaurant-pos`
- `/point-of-sale-2` → `/`
- legacy author aliases → `/author/hulm-solutions-editorial-team`

The existing `/apps/{module}` permanent redirects remain in place for older nested capability URLs.

### Canonicals

Self-referencing canonical metadata was added to:

- Homepage, product overview, pricing and industry index
- Every industry detail page
- Every capability page
- Compliance and regional pages
- Insights index and all insight articles
- Case-study index and every case study
- About, contact, features, integrations and the canonical author page

### Sitemap and robots

- Sitemap expanded to 56 unique canonical URLs.
- Redirecting and duplicate URLs are excluded.
- Included route families: core pages, capabilities, industries, compliance, regions, case studies, insights and canonical author.
- `robots.txt` allows the public site, disallows API and Next.js internals, and declares the production host and sitemap.
- Removed build-time `lastModified: now` values that would falsely tell crawlers every page changed on every deployment.

### Structured data

Site-wide JSON-LD now describes:

- `Organization` for Hulm Solutions
- `WebSite` linked to the organization as publisher

The JSON is serialized safely and was parsed successfully from the rendered homepage.

### Internal linking

- Editorial UI links now point directly to `/insights` and `/insights/{slug}`.
- Imported article HTML rewrites old absolute `/blog/` and `/blogs/` internal links at render time so users and crawlers avoid unnecessary redirect hops.

## Verification results

- `npm run build`: passed with 89 statically generated pages.
- Redirect checks: all tested legacy routes return `308 Permanent Redirect` to the intended canonical URL.
- Sitemap: 56 URLs, 56 unique, zero known legacy URLs.
- Canonical checks: passed for home, apps, pricing, industries, a priority industry, an insight article and a case study.
- Structured data: valid JSON parsing; types found were `Organization` and `WebSite`.
- Targeted ESLint for the SEO core and priority pages: zero errors; ten existing warnings on insight pages.
- Full-repository ESLint still reports 34 pre-existing errors and 32 warnings in legacy capture/scrape scripts and older page/components. The production build is not blocked by them, but they should be handled as a separate cleanup task.

## Pre-launch content blockers

Do not invent redirects for URLs whose replacement is not semantically equivalent. These production URLs still return 404 in the rebuild and need source content or an explicit business decision before launch:

1. `/privacy-policy/`
2. `/terms-and-conditions/`
3. `/blog/what-is-pos/` (currently indexed; no matching rebuilt article)

The legal pages should be supplied or approved by the business/legal owner. The missing article should either be migrated to `/insights/what-is-pos` with its old URL redirected, or intentionally retired using a documented 410/redirect decision based on search and backlink value.

## Launch sequence

1. Resolve the three missing production URLs above.
2. Run the complete pre-launch crawl against the final deployment URL.
3. Verify response codes, canonical targets, sitemap URLs, metadata and structured data in the deployed environment.
4. Point the production domain only after the crawl has no unintended 404s or redirect chains.
5. Submit the new sitemap in Google Search Console and monitor indexing, redirects and 404s after launch.

