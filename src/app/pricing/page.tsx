import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Check,
  CheckCircle2,
  ExternalLink,
  Layers3,
  ReceiptText,
  Users,
  Workflow,
  X,
} from "lucide-react";

import { SiteFaqAccordion } from "@/components/common/site-faq";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { pricingContent } from "@content/pages/pricing";

export const metadata: Metadata = {
  title: pricingContent.seo.title,
  description: pricingContent.seo.description,
  keywords: [...pricingContent.seo.keywords],
  alternates: { canonical: "/pricing" },
};

const guidanceIcons = [Users, Workflow, ReceiptText];

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

function ComparisonValue({ value }: { value: string | boolean }) {
  if (typeof value === "string") {
    return <span className="text-sm font-semibold text-[#152825]">{value}</span>;
  }

  return value ? (
    <Check className="mx-auto h-5 w-5 text-[#209f8f]" aria-label="Included" />
  ) : (
    <X className="mx-auto h-5 w-5 text-zinc-300" aria-label="Not included" />
  );
}

export default function PricingPage() {
  return (
    <main className="overflow-hidden bg-white">
      <section className="relative border-b border-[#dcebe8] bg-[linear-gradient(180deg,#f4fbf9_0%,#ffffff_92%)] py-16 sm:py-20 lg:py-24">
        <div className="pointer-events-none absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-[#25a18e]/10 blur-3xl" />
        <Container className="relative text-center">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-[#25a18e]/25 bg-white px-4 py-2 text-sm font-semibold text-[#167c70] shadow-sm">
            <span className="h-2 w-2 rounded-full bg-[#25a18e]" />
            {pricingContent.hero.eyebrow}
          </div>
          <h1 className="mx-auto mt-6 max-w-4xl text-4xl font-bold leading-[1.08] tracking-[-0.035em] text-[#152825] sm:text-5xl lg:text-[3.8rem]">
            {pricingContent.hero.headline}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-600">{pricingContent.hero.description}</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href={pricingContent.hero.primaryCta.href} target="_blank" rel="noreferrer">
                {pricingContent.hero.primaryCta.label}
                <ExternalLink className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href={pricingContent.hero.secondaryCta.href}>
                {pricingContent.hero.secondaryCta.label}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <ul className="mt-8 flex flex-col items-center justify-center gap-3 text-sm font-medium text-zinc-600 sm:flex-row sm:flex-wrap sm:gap-x-6">
            {pricingContent.hero.proof.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#209f8f]" />
                {item}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <Section className="pt-10 md:pt-14 lg:pt-16">
        <Container>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {pricingContent.plans.map((plan) => (
              <article
                key={plan.name}
                className={`relative flex h-full flex-col rounded-3xl border p-6 sm:p-7 ${
                  plan.highlighted
                    ? "border-[#25a18e] bg-[#f2fbf9] shadow-[0_22px_60px_-34px_rgba(32,159,143,0.65)] ring-1 ring-[#25a18e]/20"
                    : "border-zinc-200 bg-white shadow-sm"
                }`}
              >
                {plan.highlighted ? (
                  <span className="absolute -top-3 left-6 rounded-full bg-[#209f8f] px-3 py-1 text-xs font-bold text-white shadow-sm">
                    For growing teams
                  </span>
                ) : null}
                <div className={plan.highlighted ? "pt-3" : ""}>
                  <p className="text-sm font-semibold text-[#209f8f]">{plan.name}</p>
                  <h2 className="mt-2 min-h-14 text-xl font-bold leading-7 text-[#152825]">{plan.audience}</h2>
                  <p className="mt-3 min-h-18 text-sm leading-6 text-zinc-600">{plan.summary}</p>
                </div>

                <div className="mt-6 border-y border-zinc-200/80 py-6">
                  <p className="text-3xl font-bold tracking-tight text-[#152825]">
                    {plan.price}
                    <span className="ml-2 text-sm font-medium text-zinc-500">{plan.cadence}</span>
                  </p>
                  <p className="mt-3 flex items-center gap-2 text-sm font-semibold text-zinc-700">
                    <Building2 className="h-4 w-4 text-[#209f8f]" />
                    {plan.capacity}
                  </p>
                </div>

                <ul className="mt-6 flex-1 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm leading-6 text-zinc-700">
                      <Check className="mt-1 h-4 w-4 shrink-0 text-[#209f8f]" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button asChild size="lg" variant={plan.highlighted ? "default" : "outline"} className="mt-8 w-full">
                  <Link
                    href={plan.cta.href}
                    target={plan.cta.href.startsWith("http") ? "_blank" : undefined}
                    rel={plan.cta.href.startsWith("http") ? "noreferrer" : undefined}
                  >
                    {plan.cta.label}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </article>
            ))}
          </div>
          <p className="mx-auto mt-7 max-w-3xl text-center text-sm leading-6 text-zinc-500">
            Prices are shown in PKR. Confirm the billing schedule, applicable taxes, optional services and final payable amount with Hulm before purchase.
          </p>
        </Container>
      </Section>

      <Section className="bg-[#f4f9f8]">
        <Container>
          <SectionIntro {...pricingContent.comparison} centered />
          <div className="mt-12 overflow-x-auto rounded-3xl border border-[#dcebe8] bg-white shadow-sm">
            <table className="w-full min-w-[860px] border-collapse text-left">
              <caption className="sr-only">Comparison of Hulm POS plans</caption>
              <thead>
                <tr className="border-b border-zinc-200 bg-[#f8fbfa]">
                  <th className="px-6 py-5 text-sm font-bold text-[#152825]">Plan capability</th>
                  <th className="px-5 py-5 text-center text-sm font-bold text-[#152825]">Starter</th>
                  <th className="bg-[#eaf7f4] px-5 py-5 text-center text-sm font-bold text-[#167c70]">Growth</th>
                  <th className="px-5 py-5 text-center text-sm font-bold text-[#152825]">Business</th>
                  <th className="px-5 py-5 text-center text-sm font-bold text-[#152825]">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {pricingContent.comparison.rows.map((row) => (
                  <tr key={row.feature} className="border-b border-zinc-100 last:border-0">
                    <th scope="row" className="px-6 py-4 text-sm font-semibold text-zinc-700">{row.feature}</th>
                    <td className="px-5 py-4 text-center"><ComparisonValue value={row.starter} /></td>
                    <td className="bg-[#f5fbf9] px-5 py-4 text-center"><ComparisonValue value={row.growth} /></td>
                    <td className="px-5 py-4 text-center"><ComparisonValue value={row.business} /></td>
                    <td className="px-5 py-4 text-center"><ComparisonValue value={row.enterprise} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-center text-xs leading-5 text-zinc-500">Swipe horizontally on smaller screens to compare every plan.</p>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionIntro {...pricingContent.extras} centered />
          <div className="mt-12 grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
            <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm sm:p-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-[#e8f7f4] text-[#209f8f]">
                  <Layers3 className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#152825]">Capacity and capability add-ons</h3>
                  <p className="mt-1 text-sm text-zinc-500">Where not already included in your plan</p>
                </div>
              </div>
              <dl className="grid gap-x-8 sm:grid-cols-2">
                {pricingContent.extras.items.map((item) => (
                  <div key={item.name} className="flex items-center justify-between gap-4 border-t border-zinc-100 py-4 text-sm">
                    <dt className="font-medium text-zinc-700">{item.name}</dt>
                    <dd className="shrink-0 font-bold text-[#152825]">{item.price}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="rounded-3xl bg-[#153f39] p-6 text-white shadow-sm sm:p-8">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-[#78d5c8] text-[#153f39]">
                <ReceiptText className="h-5 w-5" />
              </div>
              <h3 className="mt-6 text-xl font-bold text-white">Optional onboarding services</h3>
              <p className="mt-2 text-sm leading-6 text-white/65">Standard account setup is separate from these hands-on services.</p>
              <dl className="mt-6">
                {pricingContent.extras.services.map((service) => (
                  <div key={service.name} className="flex items-center justify-between gap-4 border-t border-white/10 py-4 text-sm">
                    <dt className="font-medium text-white/75">{service.name}</dt>
                    <dd className="shrink-0 font-bold text-white">{service.price}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-[#f8faf9]">
        <Container>
          <SectionIntro {...pricingContent.guidance} centered />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {pricingContent.guidance.items.map((item, index) => {
              const Icon = guidanceIcons[index];
              return (
                <article key={item.title} className="rounded-3xl border border-[#dcebe8] bg-white p-7 shadow-sm">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#e8f7f4] text-[#209f8f]">
                    <Icon className="h-6 w-6" />
                  </div>
                  <p className="mt-6 text-xs font-bold uppercase tracking-[0.15em] text-zinc-400">Step {index + 1}</p>
                  <h3 className="mt-2 text-xl font-bold text-[#152825]">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-zinc-600">{item.description}</p>
                </article>
              );
            })}
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
          <SectionIntro eyebrow={pricingContent.faq.eyebrow} heading={pricingContent.faq.heading} />
          <SiteFaqAccordion items={[...pricingContent.faq.items]} />
        </Container>
      </Section>

      <Section className="pt-0">
        <Container>
          <div className="relative overflow-hidden rounded-[2rem] bg-[#153f39] px-7 py-12 text-center text-white sm:px-12 sm:py-16">
            <div className="absolute -left-20 -top-20 h-56 w-56 rounded-full bg-[#25a18e]/20 blur-3xl" />
            <div className="relative mx-auto max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#78d5c8]">{pricingContent.finalCta.eyebrow}</p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">{pricingContent.finalCta.heading}</h2>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">{pricingContent.finalCta.description}</p>
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <Button asChild size="lg" className="bg-white text-[#153f39] hover:bg-[#e8f7f4]">
                  <Link href={pricingContent.finalCta.primaryCta.href} target="_blank" rel="noreferrer">
                    {pricingContent.finalCta.primaryCta.label}
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white/35 bg-transparent text-white hover:bg-white/10 hover:text-white">
                  <Link href={pricingContent.finalCta.secondaryCta.href}>
                    {pricingContent.finalCta.secondaryCta.label}
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
