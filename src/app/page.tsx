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

import { SiteFaqAccordion } from "@/components/common/site-faq";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { homeContent } from "@content/pages/home";

export const metadata: Metadata = {
  title: homeContent.seo.title,
  description: homeContent.seo.description,
  keywords: [...homeContent.seo.keywords],
  alternates: { canonical: "/" },
};

const outcomeIcons = [ShoppingCart, Boxes, ClipboardList, BarChart3];
const problemIcons = [ReceiptText, PackageCheck, Building2];

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
      <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-[#209f8f]">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-bold tracking-tight text-[#152825] sm:text-4xl lg:text-5xl">
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
    <div className="overflow-hidden bg-white">
      <section className="relative border-b border-[#dcebe8] bg-[linear-gradient(180deg,#f4fbf9_0%,#ffffff_88%)] py-14 sm:py-18 lg:py-24">
        <div className="pointer-events-none absolute -right-32 top-4 h-96 w-96 rounded-full bg-[#25a18e]/10 blur-3xl" />
        <Container className="relative grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div className="max-w-2xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#25a18e]/25 bg-white px-4 py-2 text-sm font-semibold text-[#167c70] shadow-sm">
              <span className="h-2 w-2 rounded-full bg-[#25a18e]" />
              {homeContent.hero.eyebrow}
            </div>
            <h1 className="text-4xl font-bold leading-[1.08] tracking-[-0.035em] text-[#152825] sm:text-5xl lg:text-[3.8rem]">
              {homeContent.hero.headline}
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
                <Link href={homeContent.hero.secondaryCta.href} target="_blank" rel="noreferrer">
                  {homeContent.hero.secondaryCta.label}
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <ul className="mt-8 flex flex-col gap-3 text-sm font-medium text-zinc-600 sm:flex-row sm:flex-wrap sm:gap-x-6">
              {homeContent.hero.proof.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#209f8f]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative lg:pl-4">
            <div className="rounded-[1.6rem] border border-[#bcd9d4] bg-white p-2 shadow-[0_28px_80px_-32px_rgba(21,40,37,0.35)] sm:p-3">
              <div className="flex items-center gap-1.5 border-b border-zinc-100 px-3 py-2.5">
                <span className="h-2.5 w-2.5 rounded-full bg-[#f49c9c]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#f2cd72]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#73c69c]" />
                <span className="ml-3 text-xs font-medium text-zinc-400">Hulm POS</span>
              </div>
              <Image
                src="/images/home/dashboard/hulm-solutions-create-sales-order.webp"
                alt="Hulm POS create sales order screen"
                width={1197}
                height={688}
                priority
                sizes="(min-width: 1024px) 52vw, 100vw"
                className="h-auto w-full rounded-b-[1.1rem]"
              />
            </div>
            <div className="absolute -bottom-5 left-6 hidden items-center gap-3 rounded-2xl border border-[#dcebe8] bg-white px-4 py-3 shadow-lg sm:flex">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-[#e8f7f4] text-[#209f8f]">
                <Smartphone className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-medium text-zinc-500">Cloud access</p>
                <p className="text-sm font-bold text-[#152825]">Work from your devices</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <SectionIntro {...homeContent.problems} />
            <div className="grid gap-4 sm:grid-cols-3">
              {homeContent.problems.items.map((item, index) => {
                const Icon = problemIcons[index];
                return (
                  <article key={item.title} className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
                    <div className="mb-4 grid h-11 w-11 place-items-center rounded-xl bg-[#e8f7f4] text-[#209f8f]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-bold text-[#152825]">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-zinc-600">{item.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-[#f4f9f8]">
        <Container>
          <SectionIntro {...homeContent.outcomes} centered />
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {homeContent.outcomes.items.map((item, index) => {
              const Icon = outcomeIcons[index];
              return (
                <article key={item.title} className="flex h-full flex-col rounded-3xl border border-[#dcebe8] bg-white p-6 shadow-sm">
                  <div className="mb-6 flex items-center justify-between">
                    <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#e8f7f4] text-[#209f8f]">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#209f8f]">{item.label}</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#152825]">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-zinc-600">{item.description}</p>
                  <ul className="mt-5 space-y-2">
                    {item.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-center gap-2 text-sm text-zinc-700">
                        <Check className="h-4 w-4 text-[#209f8f]" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                  <Link href={item.href} className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#167c70] hover:text-[#125f57]">
                    Explore {item.label.toLowerCase()}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </article>
              );
            })}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid overflow-hidden rounded-[2rem] bg-[#153f39] text-white lg:grid-cols-[1.1fr_0.9fr]">
            <div className="p-8 sm:p-10 lg:p-14">
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-[#78d5c8]">{homeContent.compliance.eyebrow}</p>
              <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">{homeContent.compliance.heading}</h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-white/75">{homeContent.compliance.description}</p>
              <ul className="mt-7 space-y-3">
                {homeContent.compliance.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-center gap-3 text-sm font-medium text-white/90 sm:text-base">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-[#78d5c8]" />
                    {bullet}
                  </li>
                ))}
              </ul>
              <Button asChild size="lg" className="mt-8 bg-white text-[#153f39] hover:bg-[#e8f7f4]">
                <Link href={homeContent.compliance.cta.href}>
                  {homeContent.compliance.cta.label}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="grid min-h-72 place-items-center bg-[radial-gradient(circle_at_center,#2b7167_0%,#17463f_58%,#123731_100%)] p-8">
              <div className="w-full max-w-sm rounded-3xl border border-white/15 bg-white/10 p-7 backdrop-blur-sm">
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-[#78d5c8] text-[#153f39]">
                  <ShieldCheck className="h-7 w-7" />
                </div>
                <p className="mt-8 text-sm font-semibold uppercase tracking-[0.16em] text-[#78d5c8]">Connected workflow</p>
                <p className="mt-2 text-2xl font-bold">Sale → invoice → business record</p>
                <p className="mt-3 text-sm leading-6 text-white/65">Keep the compliance workflow close to the transaction that created it.</p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-[#f8faf9]">
        <Container>
          <SectionIntro {...homeContent.industries} centered />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {homeContent.industries.items.map((industry) => (
              <Link key={industry.title} href={industry.href} className="group relative min-h-64 overflow-hidden rounded-3xl bg-[#153f39]">
                <Image
                  src={industry.image}
                  alt={`${industry.title} POS setup`}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#102f2b]/95 via-[#102f2b]/25 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 flex items-center justify-between p-6 text-white">
                  <h3 className="text-xl font-bold text-white">{industry.title}</h3>
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-white/15 transition group-hover:bg-[#25a18e]">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionIntro {...homeContent.product} centered />
          <div className="mt-12 grid gap-7 lg:grid-cols-3">
            {homeContent.product.screens.map((screen, index) => (
              <article key={screen.title} className={index === 0 ? "lg:col-span-2 lg:row-span-2" : ""}>
                <div className="overflow-hidden rounded-3xl border border-[#dcebe8] bg-[#edf7f5] p-2 shadow-sm">
                  <Image
                    src={screen.image}
                    alt={`Hulm POS screen: ${screen.title}`}
                    width={1197}
                    height={688}
                    sizes={index === 0 ? "(min-width: 1024px) 66vw, 100vw" : "(min-width: 1024px) 33vw, 100vw"}
                    className="h-auto w-full rounded-2xl"
                  />
                </div>
                <h3 className="mt-5 text-xl font-bold text-[#152825]">{screen.title}</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-600">{screen.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-[#f4f9f8]">
        <Container>
          <SectionIntro eyebrow={homeContent.customerProof.eyebrow} heading={homeContent.customerProof.heading} centered />
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {homeContent.customerProof.items.map((review) => (
              <figure key={review.name} className="flex h-full flex-col rounded-3xl border border-[#dcebe8] bg-white p-7 shadow-sm">
                <div className="flex items-center justify-between">
                  <Quote className="h-8 w-8 text-[#25a18e]" />
                  <div className="flex" aria-label="5 out of 5 stars">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star key={index} className="h-4 w-4 fill-[#f2b84b] text-[#f2b84b]" />
                    ))}
                  </div>
                </div>
                <blockquote className="mt-6 flex-1 text-base leading-7 text-zinc-700">“{review.quote}”</blockquote>
                <figcaption className="mt-7 border-t border-zinc-100 pt-5">
                  <p className="font-bold text-[#152825]">{review.name}</p>
                  <p className="mt-1 text-sm text-zinc-500">{review.business}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-10 rounded-[2rem] border border-[#cfe4e0] bg-white p-8 shadow-[0_24px_70px_-42px_rgba(21,40,37,0.38)] sm:p-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:p-14">
            <SectionIntro eyebrow={homeContent.pricing.eyebrow} heading={homeContent.pricing.heading} description={homeContent.pricing.description} />
            <div className="rounded-3xl bg-[#f0f8f6] p-7 sm:p-8">
              <p className="text-sm font-semibold text-zinc-500">{homeContent.pricing.note}</p>
              <p className="mt-2 text-4xl font-bold tracking-tight text-[#152825]">
                {homeContent.pricing.price}
                <span className="ml-2 text-base font-medium text-zinc-500">{homeContent.pricing.cadence}</span>
              </p>
              <ul className="mt-6 space-y-3">
                {homeContent.pricing.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-center gap-3 text-sm font-medium text-zinc-700">
                    <Check className="h-4 w-4 text-[#209f8f]" />
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

      <Section className="bg-[#f8faf9]">
        <Container className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
          <SectionIntro eyebrow={homeContent.faq.eyebrow} heading={homeContent.faq.heading} />
          <SiteFaqAccordion items={[...homeContent.faq.items]} />
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="relative overflow-hidden rounded-[2rem] bg-[#153f39] px-7 py-12 text-center text-white sm:px-12 sm:py-16">
            <div className="absolute -left-20 -top-20 h-56 w-56 rounded-full bg-[#25a18e]/20 blur-3xl" />
            <div className="relative mx-auto max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#78d5c8]">{homeContent.finalCta.eyebrow}</p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">{homeContent.finalCta.heading}</h2>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">{homeContent.finalCta.description}</p>
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <Button asChild size="lg" className="bg-white text-[#153f39] hover:bg-[#e8f7f4]">
                  <Link href={homeContent.finalCta.primaryCta.href} target="_blank" rel="noreferrer">
                    {homeContent.finalCta.primaryCta.label}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white/35 bg-transparent text-white hover:bg-white/10 hover:text-white">
                  <Link href={homeContent.finalCta.secondaryCta.href} target="_blank" rel="noreferrer">
                    {homeContent.finalCta.secondaryCta.label}
                    <ExternalLink className="ml-2 h-4 w-4" />
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
