import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BarChart3, Boxes, Check, CheckCircle2, ExternalLink, ReceiptText, ShieldCheck } from "lucide-react";

import { SiteFaqAccordion } from "@/components/common/site-faq";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { industriesContent } from "@content/pages/industries";

export const metadata: Metadata = {
  title: industriesContent.seo.title,
  description: industriesContent.seo.description,
  keywords: [...industriesContent.seo.keywords],
  alternates: { canonical: "/industries" },
};

const foundationIcons = [ReceiptText, Boxes, BarChart3];

function SectionIntro({ eyebrow, heading, description, centered = false }: {
  eyebrow: string;
  heading: string;
  description?: string;
  centered?: boolean;
}) {
  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-[#209f8f]">{eyebrow}</p>
      <h2 className="text-3xl font-bold tracking-tight text-[#152825] sm:text-4xl lg:text-5xl">{heading}</h2>
      {description ? <p className="mt-5 text-base leading-7 text-zinc-600 sm:text-lg">{description}</p> : null}
    </div>
  );
}

export default function IndustriesPage() {
  return (
    <div className="overflow-hidden bg-white">
      <section className="relative border-b border-[#dcebe8] bg-[linear-gradient(180deg,#f4fbf9_0%,#ffffff_92%)] py-16 sm:py-20 lg:py-24">
        <div className="pointer-events-none absolute -left-24 top-16 h-72 w-72 rounded-full bg-[#25a18e]/10 blur-3xl" />
        <Container className="relative">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#25a18e]/25 bg-white px-4 py-2 text-sm font-semibold text-[#167c70] shadow-sm">
                <span className="h-2 w-2 rounded-full bg-[#25a18e]" />
                {industriesContent.hero.eyebrow}
              </div>
              <h1 className="mt-6 max-w-3xl text-4xl font-bold leading-[1.08] tracking-[-0.035em] text-[#152825] sm:text-5xl lg:text-[3.8rem]">
                {industriesContent.hero.headline}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600">{industriesContent.hero.description}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg">
                  <Link href={industriesContent.hero.primaryCta.href} target="_blank" rel="noreferrer">
                    {industriesContent.hero.primaryCta.label}<ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href={industriesContent.hero.secondaryCta.href}>
                    {industriesContent.hero.secondaryCta.label}<ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <ul className="mt-8 flex flex-col gap-3 text-sm font-medium text-zinc-600 sm:flex-row sm:flex-wrap sm:gap-x-6">
                {industriesContent.hero.proof.map((item) => (
                  <li key={item} className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-[#209f8f]" />{item}</li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {industriesContent.priority.items.slice(0, 4).map((industry, index) => (
                <Link key={industry.slug} href={`/industries/${industry.slug}`} className={`group relative min-h-44 overflow-hidden rounded-3xl shadow-sm sm:min-h-52 ${index % 2 ? "translate-y-5" : ""}`}>
                  <Image src={industry.image} alt={`${industry.name} POS workflow`} fill priority={index < 2} sizes="(max-width: 1024px) 50vw, 22vw" className="object-cover transition duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#102e2a]/90 via-[#102e2a]/10 to-transparent" />
                  <span className="absolute inset-x-0 bottom-0 p-5 text-base font-bold text-white sm:text-lg">{industry.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <Section>
        <Container>
          <SectionIntro {...industriesContent.priority} centered />
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {industriesContent.priority.items.map((industry) => (
              <article key={industry.slug} className="group overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm transition hover:border-[#25a18e]/45 hover:shadow-lg">
                <div className="grid h-full sm:grid-cols-[0.8fr_1.2fr]">
                  <div className="relative min-h-56 sm:min-h-full">
                    <Image src={industry.image} alt={`${industry.name} business`} fill sizes="(max-width: 640px) 100vw, (max-width: 1280px) 40vw, 28vw" className="object-cover transition duration-500 group-hover:scale-105" />
                  </div>
                  <div className="flex flex-col p-6 sm:p-7">
                    <h3 className="text-2xl font-bold text-[#152825]">{industry.name}</h3>
                    <p className="mt-3 text-sm leading-6 text-zinc-600">{industry.description}</p>
                    <ul className="mt-5 space-y-2.5">
                      {industry.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-start gap-2 text-sm font-medium text-zinc-700"><Check className="mt-0.5 h-4 w-4 shrink-0 text-[#209f8f]" />{highlight}</li>
                      ))}
                    </ul>
                    <Link href={`/industries/${industry.slug}`} className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#167c70] hover:text-[#105f56]">
                      Explore {industry.name.toLowerCase()}<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-[#153f39] text-white">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#78d5c8]">{industriesContent.foundation.eyebrow}</p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">{industriesContent.foundation.heading}</h2>
              <p className="mt-5 text-base leading-7 text-white/70 sm:text-lg">{industriesContent.foundation.description}</p>
            </div>
            <div className="grid gap-5 sm:grid-cols-3">
              {industriesContent.foundation.items.map((item, index) => {
                const Icon = foundationIcons[index];
                return (
                  <article key={item.title} className="rounded-3xl border border-white/10 bg-white/[0.06] p-6">
                    <div className="grid h-11 w-11 place-items-center rounded-xl bg-[#78d5c8] text-[#153f39]"><Icon className="h-5 w-5" /></div>
                    <h3 className="mt-6 text-xl font-bold text-white">{item.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-white/65">{item.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-[#f7faf9]">
        <Container>
          <SectionIntro {...industriesContent.additional} />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {industriesContent.additional.items.map((industry) => (
              <Link key={industry.slug} href={`/industries/${industry.slug}`} className="group overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm transition hover:-translate-y-1 hover:border-[#25a18e]/45 hover:shadow-lg">
                <div className="relative h-44 overflow-hidden">
                  <Image src={industry.image} alt={`${industry.name} business`} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover transition duration-500 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between gap-4"><h3 className="text-xl font-bold text-[#152825]">{industry.name}</h3><ArrowRight className="h-5 w-5 shrink-0 text-[#209f8f] transition-transform group-hover:translate-x-1" /></div>
                  <p className="mt-3 text-sm leading-6 text-zinc-600">{industry.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="relative overflow-hidden rounded-[2rem] border border-[#bfe2dc] bg-[#eaf7f4] p-7 sm:p-10 lg:p-12">
            <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#25a18e]/15 blur-3xl" />
            <div className="relative grid items-center gap-8 lg:grid-cols-[auto_1fr_auto]">
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-[#153f39] text-[#78d5c8]"><ShieldCheck className="h-7 w-7" /></div>
              <div className="max-w-3xl">
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#167c70]">{industriesContent.compliance.eyebrow}</p>
                <h2 className="mt-3 text-2xl font-bold tracking-tight text-[#152825] sm:text-3xl">{industriesContent.compliance.heading}</h2>
                <p className="mt-4 text-sm leading-6 text-zinc-600 sm:text-base">{industriesContent.compliance.description}</p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <Button asChild><Link href={industriesContent.compliance.primaryCta.href}>{industriesContent.compliance.primaryCta.label}<ArrowRight className="ml-2 h-4 w-4" /></Link></Button>
                <Button asChild variant="outline" className="border-[#25a18e]/35 bg-white"><Link href={industriesContent.compliance.secondaryCta.href}>{industriesContent.compliance.secondaryCta.label}</Link></Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-[#f8faf9]">
        <Container className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
          <SectionIntro eyebrow={industriesContent.faq.eyebrow} heading={industriesContent.faq.heading} />
          <SiteFaqAccordion items={[...industriesContent.faq.items]} />
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="relative overflow-hidden rounded-[2rem] bg-[#153f39] px-7 py-12 text-center text-white sm:px-12 sm:py-16">
            <div className="absolute -left-20 -top-20 h-56 w-56 rounded-full bg-[#25a18e]/20 blur-3xl" />
            <div className="relative mx-auto max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#78d5c8]">{industriesContent.finalCta.eyebrow}</p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">{industriesContent.finalCta.heading}</h2>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">{industriesContent.finalCta.description}</p>
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <Button asChild size="lg" className="bg-white text-[#153f39] hover:bg-[#e8f7f4]"><Link href={industriesContent.finalCta.primaryCta.href} target="_blank" rel="noreferrer">{industriesContent.finalCta.primaryCta.label}<ExternalLink className="ml-2 h-4 w-4" /></Link></Button>
                <Button asChild size="lg" variant="outline" className="border-white/35 bg-transparent text-white hover:bg-white/10 hover:text-white"><Link href={industriesContent.finalCta.secondaryCta.href}>{industriesContent.finalCta.secondaryCta.label}<ArrowRight className="ml-2 h-4 w-4" /></Link></Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
