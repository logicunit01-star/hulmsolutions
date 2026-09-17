import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import {
  ChevronRight,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  ShieldCheck,
  Zap,
  ArrowRight,
  Building2,
  Check,
} from "lucide-react";
import { industriesData } from "@/content/pages/industriesData";
import { SiteFaqAccordion } from "@/components/common/site-faq";
import { GoogleReviewsSection } from "@/components/home/GoogleReviewsSection";
import { FinalCta } from "@/components/home/final-cta";

type Props = {
  params: Promise<{ industry: string }>;
};

export async function generateStaticParams() {
  return Object.keys(industriesData).map((industry) => ({
    industry,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const p = await params;
  const data = industriesData[p.industry];

  if (!data) {
    return { title: "Industry Not Found - Hulm Solutions" };
  }

  return {
    title: data.metaTitle || `${data.name} POS System - Hulm Solutions`,
    description: data.metaDescription || data.hero.description,
    openGraph: {
      title: data.metaTitle || `${data.name} POS System - Hulm Solutions`,
      description: data.metaDescription || data.hero.description,
      images: data.image ? [{ url: data.image }] : undefined,
    },
  };
}

export default async function IndustrySubpage({ params }: Props) {
  const p = await params;
  const data = industriesData[p.industry];

  if (!data) {
    notFound();
  }

  // Get other industries for quick switching
  const otherIndustries = Object.values(industriesData)
    .filter(
      (ind, idx, arr) =>
        ind.slug !== data.slug &&
        arr.findIndex((x) => x.slug === ind.slug) === idx
    )
    .slice(0, 4);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* 1. HERO BANNER (Flush with sticky navbar, zero top gap, emerald gradient) */}
      <section className="relative w-full py-16 sm:py-24 bg-gradient-to-br from-[#1b7f70] via-[#209f8f] to-[#16695d] text-white overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.08] pointer-events-none bg-repeat bg-center"
          style={{
            backgroundImage: "url('/images/home/cta-bg-pattern.png')",
            backgroundSize: "600px",
          }}
        />
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-black/15 rounded-full blur-3xl pointer-events-none" />

        <Container className="relative z-10">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs sm:text-sm text-white/70 mb-6 font-normal">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-white/50 shrink-0" />
            <Link href="/industries" className="hover:text-white transition-colors">
              Industries
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-white/50 shrink-0" />
            <span className="text-white font-medium truncate max-w-[220px] sm:max-w-md">
              {data.name}
            </span>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md text-white text-xs font-semibold uppercase tracking-wider border border-white/20 shadow-xs mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#55dfcc] animate-pulse" />
              <span>{data.hero.badge}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white mb-5 leading-tight">
              {data.hero.headline}
            </h1>

            <p className="text-base sm:text-xl text-white/90 font-normal leading-relaxed mb-8 max-w-2xl">
              {data.hero.description}
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-3.5">
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto h-12 px-8 rounded-xl font-semibold text-base bg-white text-[#152825] hover:bg-white/90 shadow-md transition-all active:scale-[0.98]"
              >
                <Link href={data.hero.primaryCtaLink}>
                  {data.hero.primaryCtaText}
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="w-full sm:w-auto h-12 px-8 rounded-xl font-semibold text-base bg-transparent border-white/30 text-white hover:bg-white/10 transition-colors"
              >
                <Link href={data.hero.secondaryCtaLink}>
                  {data.hero.secondaryCtaText}
                </Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. OPERATIONAL PROBLEMS & THE HULM FIX (Where applicable) */}
      {data.problems && data.problems.items.length > 0 && (
        <Section className="py-16 sm:py-24 bg-[#F8FAF9] border-b border-gray-100">
          <Container>
            <div className="text-center max-w-3xl mx-auto mb-14">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-200 text-xs font-semibold text-red-600 uppercase tracking-wider mb-4 shadow-xs">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>Pain Points Solved</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#152825] tracking-tight leading-tight">
                {data.problems.heading}
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
              {data.problems.items.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white p-7 sm:p-8 rounded-2xl border border-gray-200/80 shadow-xs hover:border-[#209f8f]/40 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-red-600 mb-3">
                      <span className="w-2 h-2 rounded-full bg-red-500" />
                      <span>The Challenge</span>
                    </div>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                      {item.problem}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-gray-100 bg-[#209f8f]/5 -mx-7 sm:-mx-8 -mb-7 sm:-mb-8 p-6 rounded-b-2xl">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#209f8f] mb-1.5">
                      <CheckCircle2 className="w-4 h-4 text-[#209f8f]" />
                      <span>{item.solutionTitle}</span>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-medium">
                      {item.solution}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* 3. OVERVIEW & INDUSTRY VISUAL (2-Column) */}
      {data.overview && (
        <Section className="py-16 sm:py-24 bg-white border-b border-gray-100">
          <Container>
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Left: Content */}
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#209f8f]">
                  <Building2 className="w-4 h-4" />
                  <span>Industry Overview</span>
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#152825] tracking-tight leading-tight">
                  {data.overview.heading}
                </h2>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  {data.overview.description}
                </p>

                {data.overview.points && data.overview.points.length > 0 && (
                  <div className="space-y-3 pt-2">
                    {data.overview.points.map((pt, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#209f8f] shrink-0 mt-0.5" />
                        <span className="text-sm sm:text-base text-gray-700 font-medium">
                          {pt}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                <div className="pt-4 flex items-center gap-4">
                  <Button
                    asChild
                    className="bg-[#209f8f] hover:bg-[#1a8578] text-white font-semibold text-sm h-11 px-6 rounded-xl shadow-xs transition-colors"
                  >
                    <Link href="https://app.hulmsolutions.com/Register">
                      Get Started Today
                    </Link>
                  </Button>
                  <Link
                    href="/pricing"
                    className="text-sm font-semibold text-[#209f8f] hover:text-[#1a8578] flex items-center gap-1.5 transition-colors"
                  >
                    <span>View Pricing</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Right: High-Res Industry Photography */}
              <div className="lg:col-span-6">
                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-gray-200 shadow-md bg-white aspect-[4/3]">
                  <Image
                    src={data.image}
                    alt={data.name}
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-semibold uppercase tracking-wider border border-white/20">
                      {data.category}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-semibold text-white mt-2 drop-shadow-sm">
                      {data.name} POS Solution
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </Section>
      )}

      {/* 4. CORE FEATURES TAILORED FOR THIS INDUSTRY */}
      {data.features && data.features.items.length > 0 && (
        <Section className="py-16 sm:py-24 bg-[#F8FAF9] border-b border-gray-100">
          <Container>
            <div className="text-center max-w-3xl mx-auto mb-14">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#209f8f]/10 border border-[#209f8f]/20 text-xs font-semibold text-[#209f8f] uppercase tracking-wider mb-4 shadow-xs">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Tailored Capabilities</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#152825] tracking-tight leading-tight">
                {data.features.heading}
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
              {data.features.items.map((feat, idx) => (
                <div
                  key={idx}
                  className="p-7 rounded-2xl border border-gray-200/80 bg-white hover:border-[#209f8f]/40 hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-[#209f8f]/10 text-[#209f8f] flex items-center justify-center font-bold text-sm">
                        0{idx + 1}
                      </div>
                      {feat.badge && (
                        <span className="text-[11px] font-semibold text-[#209f8f] bg-gray-50 px-2.5 py-1 rounded-full border border-gray-200">
                          {feat.badge}
                        </span>
                      )}
                    </div>
                    <h3 className="text-base sm:text-lg font-semibold text-[#152825] mb-2 group-hover:text-[#209f8f] transition-colors">
                      {feat.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                      {feat.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* 5. FBR INTEGRATION SECTION (Where applicable) */}
      {data.fbr && data.fbr.points.length > 0 && (
        <Section className="py-16 sm:py-24 bg-white border-b border-gray-100">
          <Container>
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#209f8f]/10 border border-[#209f8f]/20 text-xs font-semibold text-[#209f8f] uppercase tracking-wider mb-4 shadow-xs">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Fiscal Compliance</span>
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#152825] tracking-tight leading-tight mb-4">
                  {data.fbr.heading}
                </h2>
                {data.fbr.description && (
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
                    {data.fbr.description}
                  </p>
                )}
              </div>

              <div className="grid sm:grid-cols-3 gap-6">
                {data.fbr.points.map((pt, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl border border-gray-200/80 bg-[#F8FAF9] hover:bg-white hover:border-[#209f8f]/40 hover:shadow-md transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-10 h-10 rounded-xl bg-[#209f8f]/10 text-[#209f8f] flex items-center justify-center mb-4 font-bold">
                        <Check className="w-5 h-5" />
                      </div>
                      <h3 className="text-base font-semibold text-[#152825] mb-2">
                        {pt.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                        {pt.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </Section>
      )}

      {/* 6. USE CASES (Where applicable) */}
      {data.useCases && data.useCases.cases.length > 0 && (
        <Section className="py-16 sm:py-24 bg-[#F8FAF9] border-b border-gray-100">
          <Container>
            <div className="text-center max-w-3xl mx-auto mb-14">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#209f8f]/10 border border-[#209f8f]/20 text-xs font-semibold text-[#209f8f] uppercase tracking-wider mb-4 shadow-xs">
                <span>Specialized Workflows</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#152825] tracking-tight leading-tight">
                {data.useCases.heading}
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.useCases.cases.map((c, idx) => (
                <div
                  key={idx}
                  className="bg-white p-7 rounded-2xl border border-gray-200/80 shadow-xs hover:border-[#209f8f]/40 hover:shadow-md transition-all"
                >
                  <h3 className="text-base sm:text-lg font-semibold text-[#152825] mb-2">
                    {c.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {c.description}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* 7. WHO CAN BENEFIT & CHECKLIST */}
      {data.whoCanBenefit && data.whoCanBenefit.items.length > 0 && (
        <Section className="py-16 sm:py-24 bg-white border-b border-gray-100">
          <Container>
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#152825] mb-4 tracking-tight">
                  {data.whoCanBenefit.heading}
                </h2>
                {data.whoCanBenefit.description && (
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    {data.whoCanBenefit.description}
                  </p>
                )}
              </div>

              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                {data.whoCanBenefit.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-[#F8FAF9] p-5 rounded-xl border border-gray-200/80 shadow-xs flex items-center gap-3 hover:border-[#209f8f]/30 transition-colors"
                  >
                    <div className="w-6 h-6 rounded-full bg-[#209f8f]/10 text-[#209f8f] flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-[#152825]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </Section>
      )}

      {/* 8. KEY BENEFITS (Where applicable) */}
      {data.benefits && data.benefits.items.length > 0 && (
        <Section className="py-16 sm:py-24 bg-[#F8FAF9] border-b border-gray-100">
          <Container>
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#152825] mb-4 tracking-tight">
                  {data.benefits.heading}
                </h2>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {data.benefits.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white p-5 rounded-xl border border-gray-200/80 shadow-xs flex items-center gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#209f8f] shrink-0" />
                    <span className="text-sm font-medium text-gray-800">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </Section>
      )}

      {/* 9. IMPACT STATS */}
      {data.stats && (
        <section className="py-16 sm:py-20 bg-gradient-to-r from-[#152825] via-[#1c3833] to-[#152825] text-white">
          <Container>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">
                {data.stats.heading}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {data.stats.items.map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/15 text-center"
                >
                  <div className="text-3xl sm:text-4xl font-semibold text-[#55dfcc] mb-1">
                    {stat.value}
                  </div>
                  <p className="text-xs sm:text-sm text-white/80 font-normal">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* 10. SOCIAL PROOF & GLOBAL REVIEWS */}
      <GoogleReviewsSection />

      {/* 11. FREQUENTLY ASKED QUESTIONS */}
      {data.faqs && data.faqs.length > 0 && (
        <Section className="py-16 sm:py-24 bg-white border-t border-gray-100">
          <Container>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-[#209f8f]/10 border border-[#209f8f]/20 text-xs font-semibold text-[#209f8f] uppercase tracking-wider mb-4 shadow-xs">
                Got Questions?
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#152825] mb-4 tracking-tight">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                Clear answers regarding setup, features, and tax compliance for {data.name}.
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <SiteFaqAccordion items={data.faqs} defaultOpenIndex={0} />
            </div>
          </Container>
        </Section>
      )}

      {/* 12. EXPLORE OTHER INDUSTRIES */}
      <section className="py-16 bg-[#F8FAF9] border-t border-gray-100">
        <Container>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#209f8f]">
                Explore Verticals
              </span>
              <h3 className="text-xl sm:text-2xl font-semibold text-[#152825] mt-1">
                Other Industries Powered by Hulm
              </h3>
            </div>
            <Link
              href="/industries"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#209f8f] hover:text-[#1a8578] transition-colors"
            >
              <span>View all 12 industries</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {otherIndustries.map((other) => (
              <Link
                key={other.slug}
                href={`/industries/${other.slug}`}
                className="group bg-white p-5 rounded-2xl border border-gray-200/80 shadow-xs hover:shadow-md hover:border-[#209f8f]/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-[#209f8f] mb-1">
                    {other.category}
                  </div>
                  <h4 className="text-base font-semibold text-[#152825] group-hover:text-[#209f8f] transition-colors mb-2">
                    {other.name}
                  </h4>
                  <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed">
                    {other.hero.description}
                  </p>
                </div>
                <div className="flex items-center gap-1 text-xs font-semibold text-[#209f8f] pt-4 mt-2 border-t border-gray-100">
                  <span>Explore POS</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* 13. FINAL CONVERSION CTA (Using authentic page-specific CTA) */}
      <FinalCta
        heading={data.finalCta.heading || `Ready to modernize your ${data.name} operations?`}
        subheading={data.finalCta.subheading || data.finalCta.description}
      />
    </div>
  );
}
