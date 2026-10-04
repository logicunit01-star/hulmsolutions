import { REGIONAL_ALTERNATES, SITE_FEEDS } from "@/lib/seo/page-seo";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Boxes,
  Building2,
  Check,
  CheckCircle2,
  ClipboardList,
  ExternalLink,
  PackageCheck,
  Quote,
  ReceiptText,
  ShieldCheck,
  ShoppingCart,
  Smartphone,
  Star,
} from "lucide-react";

import { FaqDetails, faqPageSchema } from "@/components/seo/faq-details";
import { LiteYouTube } from "@/components/seo/lite-youtube";
import { ClientLogos } from "@/components/home/client-logos";
import { HULM_DEMO_VIDEO } from "@content/data/videos";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { homeContent } from "@content/pages/home";

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://hulmsolutions.com").replace(/\/$/, "");

// Title and description are the live WordPress values (do not change without an SEO review).
export const metadata: Metadata = {
  title: { absolute: homeContent.seo.title },
  description: homeContent.seo.description,
  alternates: { canonical: "/", languages: REGIONAL_ALTERNATES, types: SITE_FEEDS },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  openGraph: {
    type: "website",
    siteName: "Hulm Solutions",
    locale: "en_PK",
    title: homeContent.seo.title,
    description: homeContent.seo.description,
    url: "/",
    images: [{ url: homeContent.seo.ogImage, width: 1540, height: 963, alt: "Hulm POS software dashboard" }],
  },
  twitter: {
    card: "summary_large_image",
    title: homeContent.seo.title,
    description: homeContent.seo.description,
    images: [homeContent.seo.ogImage],
  },
};

const outcomeIcons = [ShoppingCart, Boxes, ClipboardList, BarChart3];
const problemIcons = [ReceiptText, PackageCheck, Building2];

const pageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${siteUrl}/#webpage`,
      url: `${siteUrl}/`,
      name: homeContent.seo.title,
      description: homeContent.seo.description,
      inLanguage: "en",
      isPartOf: { "@id": `${siteUrl}/#website` },
      about: { "@id": `${siteUrl}/#organization` },
      primaryImageOfPage: { "@type": "ImageObject", url: homeContent.seo.ogImage, width: 1540, height: 963 },
      breadcrumb: { "@id": `${siteUrl}/#breadcrumb` },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${siteUrl}/#breadcrumb`,
      itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/` }],
    },
    {
      "@type": "SoftwareApplication",
      "@id": `${siteUrl}/#software`,
      name: "Hulm POS",
      description: homeContent.hero.description,
      applicationCategory: "BusinessApplication",
      applicationSubCategory: "Point of sale software",
      operatingSystem: "Web",
      publisher: { "@id": `${siteUrl}/#organization` },
      offers: { "@type": "Offer", url: `${siteUrl}/pricing/`, priceCurrency: "PKR", price: "2500", availability: "https://schema.org/InStock" },
    },
    faqPageSchema(homeContent.faq.items, `${siteUrl}/#faq`),
  ],
};

function SectionIntro({
  eyebrow,
  heading,
  description,
  centered = false,
}: {
  eyebrow: string;
  heading: string;
  description?: string;
  centered?: boolean;
}) {
  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <h2 data-eyebrow={eyebrow} className="text-3xl font-bold tracking-tight text-[#0F2A26] sm:text-4xl lg:text-5xl">
        {heading}
      </h2>
      {description ? (
        <p className="mt-5 text-base leading-7 text-zinc-600 sm:text-lg">{description}</p>
      ) : null}
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="relative overflow-hidden bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(pageSchema).replace(/</g, "\\u003c"),
        }}
      />
      <section className="relative overflow-hidden border-b border-zinc-200/70 bg-white pt-12 pb-16 sm:pt-16 lg:pt-20 lg:pb-24">
        <div aria-hidden="true" className="bg-grid-fade pointer-events-none absolute inset-0" />
        <Container className="relative grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
          <div className="max-w-2xl">
            <p className="mb-5 text-sm font-semibold text-[#167c70]">{homeContent.hero.eyebrow}</p>
            <h1 className="text-[2.5rem] font-bold leading-[1.03] tracking-[-0.035em] text-[#0F2A26] sm:text-[3.4rem] lg:text-[3.6rem]">
              {homeContent.hero.headline.replace(/every branch$/, "")}
              <span className="mark-lime">every branch</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-600">
              {homeContent.hero.description}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link href={homeContent.hero.primaryCta.href} target="_blank" rel="noreferrer">
                  {homeContent.hero.primaryCta.label}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href={homeContent.hero.secondaryCta.href}>
                  {homeContent.hero.secondaryCta.label}
                </Link>
              </Button>
            </div>
            <p className="mt-4 text-sm text-zinc-500">{homeContent.hero.offer}</p>
            <ul className="mt-6 flex flex-col gap-3 text-sm font-medium text-zinc-600 sm:flex-row sm:flex-wrap sm:gap-x-6">
              {homeContent.hero.proof.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#167c70]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative lg:-mr-24 xl:-mr-40">
            <Image
              src="/images/home/dashboard/hulm-solutions-create-sales-order.webp"
              alt="Hulm POS software create sales order screen"
              width={1197}
              height={688}
              priority
              sizes="(min-width: 1024px) 60vw, 100vw"
              className="h-auto w-full rounded-xl border border-zinc-200 shadow-[0_40px_80px_-40px_rgba(21,40,37,0.45)]"
            />
          </div>
        </Container>
      </section>

      <section aria-labelledby="homepage-trust-heading" className="border-b border-[#e6efed] bg-white py-8">
        <Container>
          <h2 id="homepage-trust-heading" className="text-center text-sm font-bold text-zinc-500">
            {homeContent.trust.heading}
          </h2>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-x-9 gap-y-6 sm:gap-x-12">
            {homeContent.trust.badges.map((signal) => (
              <div key={signal.src} className="relative h-14 w-24 sm:h-16 sm:w-28">
                <Image src={signal.src} alt={signal.alt} fill sizes="112px" className="object-contain" />
              </div>
            ))}
          </div>
        </Container>
      </section>

      <ClientLogos className="border-t-0" />

      <Section data-reveal>
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <SectionIntro {...homeContent.problems} />
            <div className="grid gap-4 sm:grid-cols-3">
              {homeContent.problems.items.map((item, index) => {
                const Icon = problemIcons[index];
                return (
                  <article key={item.title} className="lift rounded-2xl border border-zinc-200 bg-white p-5">
                    <div className="mb-4 grid h-11 w-11 place-items-center rounded-xl bg-[#F7F6F2] text-[#167c70]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-bold text-[#0F2A26]">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-zinc-600">{item.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </Container>
      </Section>

      <Section data-reveal className="bg-[#F7F6F2]">
        <Container>
          <SectionIntro {...homeContent.outcomes} centered />
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {homeContent.outcomes.items.map((item, index) => {
              const Icon = outcomeIcons[index];
              return (
                <article key={item.title} className="lift flex h-full flex-col rounded-2xl border border-[#E4E2DA] bg-white p-6">
                  <div className="mb-6 flex items-center justify-between">
                    <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#F7F6F2] text-[#167c70]">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="text-xs font-semibold text-[#167c70]">{item.label}</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#0F2A26]">{item.title}</h3>
                  <ul className="mt-5 space-y-2">
                    {item.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-center gap-2 text-sm text-zinc-700">
                        <Check className="h-4 w-4 text-[#167c70]" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                  <Link href={item.href} className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#167c70] hover:text-[#125f57]">
                    {item.linkLabel}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </article>
              );
            })}
          </div>
          <div className="mt-10 text-center">
            <p className="text-sm font-bold text-[#0F2A26]">{homeContent.outcomes.moreHeading}</p>
            <ul className="mt-4 flex flex-wrap justify-center gap-2.5">
              {homeContent.outcomes.more.map((chip) => (
                <li key={chip.href}>
                  <Link href={chip.href} className="inline-flex items-center gap-1.5 rounded-lg border border-[#E4E2DA] bg-white px-3.5 py-2 text-sm font-semibold text-[#167c70] hover:border-[#25a18e]">
                    {chip.label}
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      <Section data-reveal>
        <Container>
          <div className="grid overflow-hidden rounded-2xl bg-[#0F2A26] text-white lg:grid-cols-[1.1fr_0.9fr]">
            <div className="p-8 sm:p-10 lg:p-14">
              
              <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">{homeContent.compliance.heading}</h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-white/75">{homeContent.compliance.description}</p>
              <ul className="mt-7 space-y-3">
                {homeContent.compliance.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-center gap-3 text-sm font-medium text-white/90 sm:text-base">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-[#7AE582]" />
                    {bullet}
                  </li>
                ))}
              </ul>
              <Button asChild size="lg" className="mt-8 bg-white text-[#0F2A26] hover:bg-[#F7F6F2]">
                <Link href={homeContent.compliance.cta.href}>
                  {homeContent.compliance.cta.label}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="grid min-h-72 place-items-center bg-[#16352F] p-8">
              <div className="w-full max-w-sm rounded-2xl border border-white/15 bg-white/10 p-7 backdrop-blur-sm">
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-[#7AE582] text-[#0F2A26]">
                  <ShieldCheck className="h-7 w-7" />
                </div>
                <p className="mt-8 text-sm font-semibold text-[#7AE582]">Connected workflow</p>
                <p className="mt-2 text-2xl font-bold">Sale → invoice → business record</p>
                <p className="mt-3 text-sm leading-6 text-white/65">Keep the compliance workflow close to the transaction that created it.</p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section data-reveal className="bg-[#F7F6F2]">
        <Container>
          <SectionIntro {...homeContent.industries} centered />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {homeContent.industries.items.map((industry) => (
              <Link key={industry.title} href={industry.href} className="group relative min-h-64 overflow-hidden rounded-2xl bg-[#0F2A26]">
                <Image
                  src={industry.image}
                  alt={`${industry.title} POS setup`}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F2A26]/95 via-[#0F2A26]/25 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 flex items-center justify-between p-6 text-white">
                  <h3 className="text-xl font-bold text-white">{industry.title}</h3>
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-white/15 transition group-hover:bg-[#7AE582] group-hover:text-[#0F2A26]">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-10 text-center">
            <p className="text-sm font-bold text-[#0F2A26]">{homeContent.industries.moreHeading}</p>
            <ul className="mt-4 flex flex-wrap justify-center gap-2.5">
              {homeContent.industries.more.map((chip) => (
                <li key={chip.href}>
                  <Link href={chip.href} className="inline-flex items-center gap-1.5 rounded-lg border border-[#E4E2DA] bg-white px-3.5 py-2 text-sm font-semibold text-[#167c70] hover:border-[#25a18e]">
                    {chip.label}
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-9 text-center">
            <Button asChild variant="outline" size="lg">
              <Link href={homeContent.industries.cta.href}>
                {homeContent.industries.cta.label}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </Container>
      </Section>

      <Section data-reveal>
        <Container>
          <SectionIntro {...homeContent.product} centered />
          <div className="mt-12 grid gap-7 lg:grid-cols-3">
            {homeContent.product.screens.map((screen, index) => (
              <article key={screen.title} className={index === 0 ? "lg:col-span-2 lg:row-span-2" : ""}>
                <div className="overflow-hidden rounded-2xl border border-[#E4E2DA] bg-[#edf7f5] p-2 shadow-sm">
                  <Image
                    src={screen.image}
                    alt={`Hulm POS screen: ${screen.title}`}
                    width={1197}
                    height={688}
                    sizes={index === 0 ? "(min-width: 1024px) 66vw, 100vw" : "(min-width: 1024px) 33vw, 100vw"}
                    className="h-auto w-full rounded-2xl"
                  />
                </div>
                <h3 className="mt-5 text-xl font-bold text-[#0F2A26]">{screen.title}</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-600">{screen.description}</p>
              </article>
            ))}
          </div>
          <div className="mx-auto mt-14 max-w-4xl">
            <h3 className="mb-5 text-center text-xl font-bold text-[#0F2A26]">Watch: how to use the all-in-one Hulm POS software</h3>
            <LiteYouTube id={HULM_DEMO_VIDEO.id} title={HULM_DEMO_VIDEO.title} />
          </div>
        </Container>
      </Section>

      <Section data-reveal className="bg-[#F7F6F2]">
        <Container>
          <SectionIntro eyebrow={homeContent.customerProof.eyebrow} heading={homeContent.customerProof.heading} centered />
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {homeContent.customerProof.items.map((review) => (
              <figure key={review.name} className="lift flex h-full flex-col rounded-2xl border border-[#E4E2DA] bg-white p-7">
                <div className="flex items-center justify-between">
                  <Quote className="h-8 w-8 text-[#25a18e]" />
                  <div className="flex" role="img" aria-label="5 out of 5 stars">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star key={index} className="h-4 w-4 fill-[#f2b84b] text-[#f2b84b]" />
                    ))}
                  </div>
                </div>
                <blockquote className="mt-6 flex-1 text-base leading-7 text-zinc-700">“{review.quote}”</blockquote>
                <figcaption className="mt-7 border-t border-zinc-100 pt-5">
                  <p className="font-bold text-[#0F2A26]">{review.name}</p>
                  <p className="mt-1 text-sm text-zinc-500">{review.business}</p>
                </figcaption>
              </figure>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button asChild variant="outline" size="lg">
              <Link href={homeContent.customerProof.cta.href}>
                {homeContent.customerProof.cta.label}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </Container>
      </Section>

      <Section data-reveal>
        <Container>
          <div className="grid gap-10 rounded-2xl border border-[#E4E2DA] bg-white p-8 shadow-[0_24px_70px_-42px_rgba(21,40,37,0.38)] sm:p-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start lg:p-14">
            <div>
              <SectionIntro eyebrow={homeContent.pricing.eyebrow} heading={homeContent.pricing.heading} description={homeContent.pricing.description} />
            </div>
            <div className="rounded-2xl bg-[#F7F6F2] p-7 sm:p-8">
              <p className="text-sm font-semibold text-zinc-600">{homeContent.pricing.note}</p>
              <p className="mt-2 text-4xl font-bold tracking-tight text-[#0F2A26]">
                {homeContent.pricing.price}
                <span className="ml-2 text-base font-medium text-zinc-600">{homeContent.pricing.cadence}</span>
              </p>
              <ul className="mt-6 space-y-3">
                {homeContent.pricing.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-center gap-3 text-sm font-medium text-zinc-700">
                    <Check className="h-4 w-4 text-[#167c70]" />
                    {bullet}
                  </li>
                ))}
              </ul>
              <Button asChild size="lg" className="mt-7 w-full sm:w-auto">
                <Link href={homeContent.pricing.cta.href}>
                  {homeContent.pricing.cta.label}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      <Section data-reveal className="bg-[#F7F6F2]">
        <Container className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
          <SectionIntro eyebrow={homeContent.faq.eyebrow} heading={homeContent.faq.heading} />
          <FaqDetails items={homeContent.faq.items} />
        </Container>
      </Section>

      <Section data-reveal>
        <Container>
          <div className="relative overflow-hidden rounded-2xl bg-[#0F2A26] px-7 py-12 text-center text-white sm:px-12 sm:py-16">
            <div className="relative mx-auto max-w-3xl">
              
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                {homeContent.finalCta.heading.replace(/better operation$/, "")}
                <span className="mark-lime-dark">better operation</span>
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">{homeContent.finalCta.description}</p>
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <Button asChild size="lg" className="bg-[#7AE582] text-[#0F2A26] hover:bg-white">
                  <Link href={homeContent.finalCta.primaryCta.href} target="_blank" rel="noreferrer">
                    {homeContent.finalCta.primaryCta.label}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white/35 bg-transparent text-white hover:bg-white/10 hover:text-white">
                  <Link href={homeContent.finalCta.secondaryCta.href}>
                    {homeContent.finalCta.secondaryCta.label}
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
