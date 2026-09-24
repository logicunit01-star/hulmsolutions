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
  Globe2,
  Layers3,
  ReceiptText,
  ShieldCheck,
  ShoppingCart,
  Smartphone,
  Store,
  Users,
} from "lucide-react";

import { SiteFaqAccordion } from "@/components/common/site-faq";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { productContent } from "@content/pages/product";

export const metadata: Metadata = {
  title: productContent.seo.title,
  description: productContent.seo.description,
  keywords: [...productContent.seo.keywords],
  alternates: { canonical: "/apps" },
};

const workflowIcons = [ReceiptText, Boxes, Building2, BarChart3];
const capabilityIcons = [ShoppingCart, Boxes, ClipboardList, Users, Layers3, BarChart3];
const extensionIcons = [Smartphone, Store, Globe2];

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
      <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-[#209f8f]">{eyebrow}</p>
      <h2 className="text-3xl font-bold tracking-tight text-[#152825] sm:text-4xl lg:text-5xl">{heading}</h2>
      {description ? <p className="mt-5 text-base leading-7 text-zinc-600 sm:text-lg">{description}</p> : null}
    </div>
  );
}

export default function ProductPage() {
  return (
    <main className="overflow-hidden bg-white">
      <section className="relative border-b border-[#dcebe8] bg-[linear-gradient(180deg,#f4fbf9_0%,#ffffff_90%)] py-14 sm:py-18 lg:py-24">
        <div className="pointer-events-none absolute -right-28 top-0 h-96 w-96 rounded-full bg-[#25a18e]/10 blur-3xl" />
        <Container className="relative grid items-center gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:gap-16">
          <div className="max-w-2xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#25a18e]/25 bg-white px-4 py-2 text-sm font-semibold text-[#167c70] shadow-sm">
              <span className="h-2 w-2 rounded-full bg-[#25a18e]" />
              {productContent.hero.eyebrow}
            </div>
            <h1 className="text-4xl font-bold leading-[1.08] tracking-[-0.035em] text-[#152825] sm:text-5xl lg:text-[3.8rem]">
              {productContent.hero.headline}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-600">{productContent.hero.description}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link href={productContent.hero.primaryCta.href} target="_blank" rel="noreferrer">
                  {productContent.hero.primaryCta.label}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href={productContent.hero.secondaryCta.href}>
                  {productContent.hero.secondaryCta.label}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <ul className="mt-8 flex flex-col gap-3 text-sm font-medium text-zinc-600 sm:flex-row sm:flex-wrap sm:gap-x-6">
              {productContent.hero.proof.map((item) => (
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
                <span className="ml-3 text-xs font-medium text-zinc-400">Hulm POS workspace</span>
              </div>
              <Image
                src="/images/home/dashboard/hulm-solutions-products-sales-order.webp"
                alt="Hulm POS product catalogue screen"
                width={1197}
                height={688}
                priority
                sizes="(min-width: 1024px) 52vw, 100vw"
                className="h-auto w-full rounded-b-[1.1rem]"
              />
            </div>
            <div className="absolute -bottom-5 left-6 hidden items-center gap-3 rounded-2xl border border-[#dcebe8] bg-white px-4 py-3 shadow-lg sm:flex">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-[#e8f7f4] text-[#209f8f]">
                <Layers3 className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-medium text-zinc-500">Connected product</p>
                <p className="text-sm font-bold text-[#152825]">One workspace, shared data</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Section>
        <Container>
          <SectionIntro {...productContent.workflow} centered />
          <div className="relative mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            <div className="absolute left-[12.5%] right-[12.5%] top-10 hidden h-px bg-[#bcd9d4] xl:block" aria-hidden="true" />
            {productContent.workflow.steps.map((step, index) => {
              const Icon = workflowIcons[index];
              return (
                <article key={step.title} className="relative rounded-3xl border border-[#dcebe8] bg-white p-6 shadow-sm">
                  <div className="mb-6 flex items-center justify-between">
                    <div className="relative z-10 grid h-12 w-12 place-items-center rounded-2xl bg-[#e8f7f4] text-[#209f8f] ring-8 ring-white">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="text-xs font-bold tracking-[0.16em] text-zinc-400">{step.label}</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#152825]">{step.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-zinc-600">{step.description}</p>
                </article>
              );
            })}
          </div>
        </Container>
      </Section>

      <Section className="bg-[#f4f9f8]">
        <Container>
          <SectionIntro {...productContent.capabilities} centered />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {productContent.capabilities.items.map((capability, index) => {
              const Icon = capabilityIcons[index];
              return (
                <article key={capability.title} className="flex h-full flex-col rounded-3xl border border-[#dcebe8] bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#e8f7f4] text-[#209f8f]">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 text-xl font-bold text-[#152825]">{capability.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-zinc-600">{capability.description}</p>
                  <ul className="mt-5 space-y-2">
                    {capability.outcomes.map((outcome) => (
                      <li key={outcome} className="flex items-center gap-2 text-sm text-zinc-700">
                        <Check className="h-4 w-4 shrink-0 text-[#209f8f]" />
                        {outcome}
                      </li>
                    ))}
                  </ul>
                  <Link href={capability.href} className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#167c70] hover:text-[#125f57]">
                    {capability.linkLabel}
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
          <SectionIntro {...productContent.workspace} />
          <div className="mt-12 grid gap-7 lg:grid-cols-3">
            {productContent.workspace.screens.map((screen, index) => (
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

      <Section className="bg-[#153f39] text-white">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-[#78d5c8]">{productContent.extensions.eyebrow}</p>
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">{productContent.extensions.heading}</h2>
              <p className="mt-5 text-base leading-7 text-white/70 sm:text-lg">{productContent.extensions.description}</p>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {productContent.extensions.items.map((extension, index) => {
                const Icon = extensionIcons[index];
                return (
                  <article key={extension.title} className="flex min-h-64 flex-col rounded-3xl border border-white/15 bg-white/8 p-6">
                    <div className="grid h-11 w-11 place-items-center rounded-xl bg-[#78d5c8] text-[#153f39]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-6 text-xl font-bold text-white">{extension.title}</h3>
                    <p className="mt-3 flex-1 text-sm leading-6 text-white/65">{extension.description}</p>
                    <Link href={extension.href} className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#78d5c8] hover:text-white">
                      {extension.linkLabel}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </article>
                );
              })}
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid overflow-hidden rounded-[2rem] border border-[#cfe4e0] bg-[#f4f9f8] lg:grid-cols-[1.1fr_0.9fr]">
            <div className="p-8 sm:p-10 lg:p-14">
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-[#209f8f]">{productContent.compliance.eyebrow}</p>
              <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-[#152825] sm:text-4xl">{productContent.compliance.heading}</h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-600">{productContent.compliance.description}</p>
              <ul className="mt-7 space-y-3">
                {productContent.compliance.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-center gap-3 text-sm font-medium text-zinc-700 sm:text-base">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-[#209f8f]" />
                    {bullet}
                  </li>
                ))}
              </ul>
              <Button asChild size="lg" className="mt-8">
                <Link href={productContent.compliance.cta.href}>
                  {productContent.compliance.cta.label}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="grid min-h-72 place-items-center bg-[radial-gradient(circle_at_center,#2b7167_0%,#17463f_58%,#123731_100%)] p-8">
              <div className="w-full max-w-sm rounded-3xl border border-white/15 bg-white/10 p-7 text-white backdrop-blur-sm">
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-[#78d5c8] text-[#153f39]">
                  <ShieldCheck className="h-7 w-7" />
                </div>
                <p className="mt-8 text-sm font-semibold uppercase tracking-[0.16em] text-[#78d5c8]">Part of the POS workflow</p>
                <p className="mt-2 text-2xl font-bold text-white">Transaction data stays connected</p>
                <p className="mt-3 text-sm leading-6 text-white/65">Keep the relevant invoice record with the sale that created it.</p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-[#f8faf9]">
        <Container className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
          <SectionIntro eyebrow={productContent.faq.eyebrow} heading={productContent.faq.heading} />
          <SiteFaqAccordion items={[...productContent.faq.items]} />
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="relative overflow-hidden rounded-[2rem] bg-[#153f39] px-7 py-12 text-center text-white sm:px-12 sm:py-16">
            <div className="absolute -left-20 -top-20 h-56 w-56 rounded-full bg-[#25a18e]/20 blur-3xl" />
            <div className="relative mx-auto max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#78d5c8]">{productContent.finalCta.eyebrow}</p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">{productContent.finalCta.heading}</h2>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">{productContent.finalCta.description}</p>
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <Button asChild size="lg" className="bg-white text-[#153f39] hover:bg-[#e8f7f4]">
                  <Link href={productContent.finalCta.primaryCta.href} target="_blank" rel="noreferrer">
                    {productContent.finalCta.primaryCta.label}
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white/35 bg-transparent text-white hover:bg-white/10 hover:text-white">
                  <Link href={productContent.finalCta.secondaryCta.href}>
                    {productContent.finalCta.secondaryCta.label}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
