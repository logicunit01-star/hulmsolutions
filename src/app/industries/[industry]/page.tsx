import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  AlertCircle,
  ArrowRight,
  Check,
  CheckCircle2,
  ChevronRight,
  ExternalLink,
  Lightbulb,
  ShieldCheck,
} from "lucide-react";

import { SiteFaqAccordion } from "@/components/common/site-faq";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { industriesData } from "@/content/pages/industriesData";
import { priorityIndustriesData } from "@/content/pages/priorityIndustriesData";

type Props = { params: Promise<{ industry: string }> };

const allIndustriesData = { ...industriesData, ...priorityIndustriesData };
const priorityIndustrySlugs = [
  "retail-store",
  "restaurant-pos",
  "pharmacy-store",
  "bakery-pos-system",
  "salon-pos",
  "clothing-store",
];

export async function generateStaticParams() {
  return Object.keys(allIndustriesData).map((industry) => ({ industry }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { industry } = await params;
  const data = allIndustriesData[industry];

  if (!data) return { title: "Industry Not Found | Hulm Solutions" };

  return {
    title: data.metaTitle || `${data.name} POS System | Hulm Solutions`,
    description: data.metaDescription || data.hero.description,
    alternates: { canonical: `/industries/${data.slug}` },
    openGraph: {
      title: data.metaTitle || `${data.name} POS System | Hulm Solutions`,
      description: data.metaDescription || data.hero.description,
      url: `/industries/${data.slug}`,
      images: data.image ? [{ url: data.image }] : undefined,
    },
  };
}

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

export default async function IndustrySubpage({ params }: Props) {
  const { industry } = await params;
  const data = allIndustriesData[industry];

  if (!data) notFound();

  const uniqueIndustries = Object.values(allIndustriesData).filter(
    (item, index, items) => items.findIndex((candidate) => candidate.slug === item.slug) === index
  );
  const otherIndustries = [
    ...priorityIndustrySlugs
      .map((slug) => uniqueIndustries.find((item) => item.slug === slug))
      .filter((item): item is NonNullable<typeof item> => Boolean(item)),
    ...uniqueIndustries.filter((item) => !priorityIndustrySlugs.includes(item.slug)),
  ]
    .filter((item) => item.slug !== data.slug)
    .slice(0, 4);

  return (
    <div className="overflow-hidden bg-white">
      <section className="relative border-b border-[#dcebe8] bg-[linear-gradient(180deg,#f4fbf9_0%,#ffffff_92%)] py-14 sm:py-18 lg:py-22">
        <div className="pointer-events-none absolute -left-24 top-20 h-72 w-72 rounded-full bg-[#25a18e]/10 blur-3xl" />
        <Container className="relative">
          <nav aria-label="Breadcrumb" className="mb-8 flex flex-wrap items-center gap-2 text-sm text-zinc-500">
            <Link href="/" className="transition hover:text-[#167c70]">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/industries" className="transition hover:text-[#167c70]">Industries</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="font-semibold text-[#152825]">{data.name}</span>
          </nav>
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#25a18e]/25 bg-white px-4 py-2 text-sm font-semibold text-[#167c70] shadow-sm">
                <span className="h-2 w-2 rounded-full bg-[#25a18e]" />
                {data.hero.badge}
              </div>
              <h1 className="mt-6 max-w-4xl text-4xl font-bold leading-[1.08] tracking-[-0.035em] text-[#152825] sm:text-5xl lg:text-[3.7rem]">{data.hero.headline}</h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600">{data.hero.description}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg">
                  <Link href={data.hero.primaryCtaLink} target={data.hero.primaryCtaLink.startsWith("http") ? "_blank" : undefined} rel={data.hero.primaryCtaLink.startsWith("http") ? "noreferrer" : undefined}>
                    {data.hero.primaryCtaText}
                    {data.hero.primaryCtaLink.startsWith("http") ? <ExternalLink className="ml-2 h-4 w-4" /> : <ArrowRight className="ml-2 h-4 w-4" />}
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href={data.hero.secondaryCtaLink}>{data.hero.secondaryCtaText}<ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
              </div>
            </div>
            <div className="relative min-h-80 overflow-hidden rounded-[2rem] border border-white bg-white shadow-[0_28px_70px_-38px_rgba(21,63,57,0.6)] sm:min-h-[430px]">
              <Image src={data.image} alt={`${data.name} POS workflow`} fill priority sizes="(max-width: 1024px) 100vw, 42vw" className="object-cover" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#102e2a]/90 to-transparent p-7 pt-24 text-white">
                <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#9ce6dc]">Connected workflow</p>
                <p className="mt-2 max-w-md text-lg font-semibold">Sales, stock and daily activity in one operating view.</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {data.overview ? (
        <Section>
          <Container className="grid items-start gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            <SectionIntro eyebrow="Workflow overview" heading={data.overview.heading} description={data.overview.description} />
            <div className="grid gap-4 sm:grid-cols-2">
              {data.overview.points.map((point) => (
                <div key={point} className="flex items-start gap-3 rounded-2xl border border-[#dcebe8] bg-[#f8fbfa] p-5 text-sm font-semibold leading-6 text-[#152825]">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#209f8f]" />
                  {point}
                </div>
              ))}
            </div>
          </Container>
        </Section>
      ) : null}

      {data.problems?.items.length ? (
        <Section className="bg-[#f7faf9]">
          <Container>
            <SectionIntro eyebrow="Operational friction" heading={data.problems.heading} centered />
            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {data.problems.items.map((item) => (
                <article key={item.solutionTitle} className="rounded-3xl border border-zinc-200 bg-white p-7 shadow-sm">
                  <div className="flex items-start gap-3 text-sm leading-6 text-zinc-600">
                    <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-[#c96f4e]" />
                    <p>{item.problem}</p>
                  </div>
                  <div className="my-6 h-px bg-zinc-100" />
                  <div className="flex items-start gap-3">
                    <Lightbulb className="mt-0.5 h-5 w-5 shrink-0 text-[#209f8f]" />
                    <div>
                      <h3 className="font-bold text-[#152825]">{item.solutionTitle}</h3>
                      <p className="mt-2 text-sm leading-6 text-zinc-600">{item.solution}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </Container>
        </Section>
      ) : null}

      {data.features?.items.length ? (
        <Section>
          <Container>
            <SectionIntro eyebrow="Capabilities" heading={data.features.heading} description="The final configuration depends on your plan, processes, devices and rollout scope." centered />
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {data.features.items.map((feature, index) => (
                <article key={feature.title} className="rounded-3xl border border-[#dcebe8] bg-white p-7 shadow-sm">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-[#e8f7f4] text-sm font-bold text-[#167c70]">{String(index + 1).padStart(2, "0")}</div>
                  <h3 className="mt-6 text-xl font-bold text-[#152825]">{feature.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-zinc-600">{feature.description}</p>
                </article>
              ))}
            </div>
          </Container>
        </Section>
      ) : null}

      {data.useCases?.cases.length ? (
        <Section className="bg-[#153f39] text-white">
          <Container>
            <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#78d5c8]">Common setups</p>
                <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">{data.useCases.heading}</h2>
                <p className="mt-5 text-base leading-7 text-white/65">Start with the operating model closest to yours, then adjust the details during implementation.</p>
              </div>
              <div className="grid gap-5 sm:grid-cols-3">
                {data.useCases.cases.map((item) => (
                  <article key={item.title} className="rounded-3xl border border-white/10 bg-white/[0.06] p-6">
                    <h3 className="text-xl font-bold text-white">{item.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-white/65">{item.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </Container>
        </Section>
      ) : null}

      {data.fbr?.points.length ? (
        <Section>
          <Container>
            <div className="relative overflow-hidden rounded-[2rem] border border-[#bfe2dc] bg-[#eaf7f4] p-7 sm:p-10 lg:p-12">
              <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#25a18e]/15 blur-3xl" />
              <div className="relative grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
                <div>
                  <div className="grid h-14 w-14 place-items-center rounded-2xl bg-[#153f39] text-[#78d5c8]"><ShieldCheck className="h-6 w-6" /></div>
                  <p className="mt-6 text-sm font-bold uppercase tracking-[0.18em] text-[#167c70]">FBR integration support</p>
                  <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#152825]">{data.fbr.heading}</h2>
                  {data.fbr.description ? <p className="mt-4 text-sm leading-6 text-zinc-600 sm:text-base">{data.fbr.description}</p> : null}
                  <Link href="/fbr-integrated-pos-pakistan" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#167c70]">Review FBR integration <ArrowRight className="h-4 w-4" /></Link>
                </div>
                <div className="grid gap-4">
                  {data.fbr.points.map((point) => (
                    <article key={point.title} className="rounded-2xl border border-white/70 bg-white/75 p-5">
                      <h3 className="font-bold text-[#152825]">{point.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-zinc-600">{point.description}</p>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </Section>
      ) : null}

      {data.whoCanBenefit?.items.length || data.benefits?.items.length ? (
        <Section className="bg-[#f8faf9]">
          <Container className="grid gap-6 lg:grid-cols-2">
            {data.whoCanBenefit?.items.length ? (
              <article className="rounded-3xl border border-zinc-200 bg-white p-7 shadow-sm sm:p-9">
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#209f8f]">Who it can support</p>
                <h2 className="mt-3 text-2xl font-bold text-[#152825]">{data.whoCanBenefit.heading}</h2>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {data.whoCanBenefit.items.map((item) => <li key={item} className="flex items-start gap-2 text-sm leading-6 text-zinc-700"><Check className="mt-1 h-4 w-4 shrink-0 text-[#209f8f]" />{item}</li>)}
                </ul>
              </article>
            ) : null}
            {data.benefits?.items.length ? (
              <article className="rounded-3xl border border-zinc-200 bg-white p-7 shadow-sm sm:p-9">
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#209f8f]">Expected outcomes</p>
                <h2 className="mt-3 text-2xl font-bold text-[#152825]">{data.benefits.heading}</h2>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {data.benefits.items.map((item) => <li key={item} className="flex items-start gap-2 text-sm leading-6 text-zinc-700"><Check className="mt-1 h-4 w-4 shrink-0 text-[#209f8f]" />{item}</li>)}
                </ul>
              </article>
            ) : null}
          </Container>
        </Section>
      ) : null}

      {data.faqs.length ? (
        <Section>
          <Container className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
            <SectionIntro eyebrow="Setup questions" heading={`What to confirm for your ${data.name.toLowerCase()} rollout`} description="These answers set expectations before plan selection and implementation." />
            <SiteFaqAccordion items={data.faqs} />
          </Container>
        </Section>
      ) : null}

      <Section className="bg-[#f7faf9]">
        <Container>
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <SectionIntro eyebrow="Explore industries" heading="Compare another POS workflow" />
            <Link href="/industries" className="inline-flex items-center gap-2 text-sm font-bold text-[#167c70]">View all industries <ArrowRight className="h-4 w-4" /></Link>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {otherIndustries.map((item) => (
              <Link key={item.slug} href={`/industries/${item.slug}`} className="group overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm transition hover:-translate-y-1 hover:border-[#25a18e]/45 hover:shadow-lg">
                <div className="relative h-36"><Image src={item.image} alt={`${item.name} business`} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" className="object-cover" /></div>
                <div className="flex items-center justify-between gap-3 p-5"><h3 className="font-bold text-[#152825]">{item.name}</h3><ArrowRight className="h-4 w-4 text-[#209f8f] transition group-hover:translate-x-1" /></div>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="relative overflow-hidden rounded-[2rem] bg-[#153f39] px-7 py-12 text-center text-white sm:px-12 sm:py-16">
            <div className="absolute -left-20 -top-20 h-56 w-56 rounded-full bg-[#25a18e]/20 blur-3xl" />
            <div className="relative mx-auto max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#78d5c8]">Plan the right rollout</p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">{data.finalCta.heading}</h2>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">{data.finalCta.subheading || data.finalCta.description}</p>
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <Button asChild size="lg" className="bg-white text-[#153f39] hover:bg-[#e8f7f4]"><Link href={data.finalCta.primaryCtaLink} target={data.finalCta.primaryCtaLink.startsWith("http") ? "_blank" : undefined} rel={data.finalCta.primaryCtaLink.startsWith("http") ? "noreferrer" : undefined}>{data.finalCta.primaryCtaText}<ExternalLink className="ml-2 h-4 w-4" /></Link></Button>
                <Button asChild size="lg" variant="outline" className="border-white/35 bg-transparent text-white hover:bg-white/10 hover:text-white"><Link href={data.finalCta.secondaryCtaLink}>{data.finalCta.secondaryCtaText}<ArrowRight className="ml-2 h-4 w-4" /></Link></Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
