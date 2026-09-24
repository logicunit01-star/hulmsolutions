import React from "react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { appsData } from "@/lib/apps/data";
import { 
  Check, 
  ArrowRight, 
  ChevronRight, 
  Sparkles, 
  ShieldCheck, 
  AlertCircle, 
  CheckCircle2, 
  Box,
  Layers
} from "lucide-react";
import { GoogleReviewsSection } from "@/components/home/GoogleReviewsSection";
import { FinalCta } from "@/components/home/final-cta";
import { SiteFaqAccordion } from "@/components/common/site-faq";

interface AppTemplateProps {
  appSlug: string;
}

export function AppTemplate({ appSlug }: AppTemplateProps) {
  const data = appsData[appSlug as keyof typeof appsData];
  
  if (!data) {
    redirect("/apps");
  }

  const { hero, features, icon: MainIcon, whatIs, problems, benefits, whyChoose, whoCanUse, faq } = data;

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
            <Link href="/apps" className="hover:text-white transition-colors">
              Product
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-white/50 shrink-0" />
            <span className="text-white font-medium truncate max-w-[220px] sm:max-w-md">
              {data.name}
            </span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col items-start">
              {hero.badge && (
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md text-white text-xs font-semibold uppercase tracking-wider border border-white/20 shadow-xs mb-5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#55dfcc] animate-pulse" />
                  <span>{hero.badge}</span>
                </div>
              )}

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white mb-5 leading-tight">
                {hero.headline}
              </h1>

              <p className="text-base sm:text-lg lg:text-xl text-white/90 font-normal leading-relaxed mb-8 max-w-2xl">
                {hero.subheadline}
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto">
                <Button
                  asChild
                  size="lg"
                  className="w-full sm:w-auto h-12 px-8 rounded-xl font-semibold text-base bg-white text-[#152825] hover:bg-white/90 shadow-md transition-all active:scale-[0.98]"
                >
                  <Link href={hero.primaryCtaLink || "https://app.hulmsolutions.com/Register"}>
                    {hero.primaryCtaText || "Start 14-Day Free Trial"}
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto h-12 px-8 rounded-xl font-semibold text-base bg-transparent border-white/30 text-white hover:bg-white/10 transition-colors"
                >
                  <Link href={hero.secondaryCtaLink || "/contact/"}>
                    {hero.secondaryCtaText || "Talk to Sales"}
                  </Link>
                </Button>
              </div>
            </div>

            {/* Right Visual Graphic */}
            <div className="lg:col-span-5 flex items-center justify-center">
              <div className="w-full max-w-md bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 transform translate-x-4 -translate-y-4 w-32 h-32 bg-[#55dfcc]/20 rounded-full blur-2xl" />
                
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center text-white border border-white/30 shadow-inner">
                    <MainIcon className="w-7 h-7" strokeWidth={2} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white tracking-tight">
                      {data.name}
                    </h3>
                    <p className="text-xs text-white/70">
                      Hulm POS · Connected capability
                    </p>
                  </div>
                </div>

                <div className="space-y-3 pt-2">
                  <div className="flex items-center justify-between p-3 rounded-xl bg-white/10 border border-white/10 text-xs text-white font-medium">
                    <span className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#55dfcc]" />
                      Connected to your Hulm workspace
                    </span>
                    <span className="text-[#55dfcc] font-semibold">Available</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-xl bg-white/10 border border-white/10 text-xs text-white font-medium">
                    <span className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-[#55dfcc]" />
                      FBR integration where required
                    </span>
                    <span className="text-[#55dfcc] font-semibold">Supported</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-xl bg-white/10 border border-white/10 text-xs text-white font-medium">
                    <span className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-[#55dfcc]" />
                      Setup guidance
                    </span>
                    <span className="text-white/90 font-semibold">Included</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. WHAT IS / OVERVIEW SECTION */}
      {whatIs && (
        <Section className="bg-white py-16 md:py-24 border-b border-gray-100">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7">
                <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-[#F0FDF4] border border-[#209f8f]/20 text-xs font-semibold text-[#209f8f] uppercase tracking-wider mb-4 shadow-xs">
                  Overview
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#152825] mb-6 tracking-tight leading-snug">
                  {whatIs.headline}
                </h2>
                <p className="text-base text-zinc-600 mb-8 leading-relaxed">
                  {whatIs.description}
                </p>
                {whatIs.points && whatIs.points.length > 0 && (
                  <ul className="space-y-3.5">
                    {whatIs.points.map((point: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#209f8f]/10 flex items-center justify-center mt-0.5">
                          <Check className="w-3.5 h-3.5 text-[#209f8f]" strokeWidth={2.5} />
                        </div>
                        <span className="text-sm sm:text-base text-zinc-700 leading-relaxed font-normal">
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="lg:col-span-5">
                <div className="bg-[#F8FAF9] p-8 sm:p-10 rounded-3xl border border-gray-200/80 flex flex-col justify-center shadow-xs">
                  <div className="w-14 h-14 rounded-2xl bg-[#209f8f]/10 flex items-center justify-center text-[#209f8f] mb-6">
                    <Layers className="w-7 h-7" strokeWidth={2} />
                  </div>
                  <h3 className="text-xl font-semibold text-[#152825] mb-3">
                    Connected to Your Hulm POS Workspace
                  </h3>
                  <p className="text-sm text-zinc-600 leading-relaxed mb-6">
                    Unlike disconnected tools that require complex APIs, this module works natively with your point of sale, inventory counts, and financial ledgers without delays.
                  </p>
                  <div className="pt-4 border-t border-gray-200/60 flex items-center justify-between text-xs font-semibold text-[#209f8f]">
                    <span>Part of the connected Hulm product</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </Section>
      )}

      {/* 3. PROBLEMS / PAIN POINTS SECTION (Optional per module) */}
      {problems && problems.items.length > 0 && (
        <Section className="bg-[#F8FAF9] py-16 md:py-24 border-b border-gray-100">
          <Container>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-rose-50 border border-rose-200 text-xs font-semibold text-rose-600 uppercase tracking-wider mb-4 shadow-xs">
                Challenges Solved
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#152825] mb-4 tracking-tight">
                {problems.headline}
              </h2>
              {problems.description && (
                <p className="text-base text-zinc-600 leading-relaxed">
                  {problems.description}
                </p>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {problems.items.map((item, idx) => (
                <div 
                  key={idx} 
                  className="bg-white p-8 rounded-2xl border border-gray-200/80 shadow-xs flex flex-col justify-between hover:border-[#209f8f]/30 transition-all duration-200"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-rose-50 flex items-center justify-center text-rose-500 mb-5">
                      <AlertCircle className="w-5 h-5" strokeWidth={2} />
                    </div>
                    <h3 className="text-lg font-semibold text-[#152825] mb-3">
                      {item.title}
                    </h3>
                    <p className="text-sm text-zinc-600 leading-relaxed mb-6">
                      {item.problem}
                    </p>
                  </div>

                  <div className="pt-5 border-t border-gray-100 bg-[#F0FDF4]/60 -mx-8 -mb-8 p-6 rounded-b-2xl">
                    <div className="text-xs font-semibold text-[#209f8f] uppercase tracking-wider mb-1 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      {item.solutionTitle || "The Hulm Solution"}
                    </div>
                    <p className="text-xs text-zinc-700 leading-relaxed font-normal">
                      {item.solution}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* 4. KEY FEATURES GRID */}
      {features && (
        <Section className="bg-white py-16 md:py-24">
          <Container>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-[#F0FDF4] border border-[#209f8f]/20 text-xs font-semibold text-[#209f8f] uppercase tracking-wider mb-4 shadow-xs">
                Feature Capabilities
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#152825] mb-4 tracking-tight">
                {features.headline}
              </h2>
              {features.description && (
                <p className="text-base text-zinc-600 leading-relaxed">
                  {features.description}
                </p>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.items.map((item, index) => {
                const Icon = item.icon || MainIcon || Box;
                return (
                  <div 
                    key={index} 
                    className="bg-white rounded-2xl p-8 border border-gray-200/80 shadow-xs hover:shadow-md hover:border-[#209f8f]/40 transition-all duration-300 flex flex-col h-full"
                  >
                    <div className="h-12 w-12 rounded-xl bg-[#209f8f]/10 flex items-center justify-center text-[#209f8f] mb-6">
                      <Icon className="h-6 w-6" strokeWidth={2} />
                    </div>
                    <h3 className="text-lg font-semibold text-[#152825] mb-3 tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-sm text-zinc-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </Container>
        </Section>
      )}

      {/* 5. BENEFITS SECTION */}
      {benefits && (
        <Section className="bg-[#F8FAF9] py-16 md:py-24 border-y border-gray-100">
          <Container>
            <div className="max-w-3xl mx-auto text-center mb-14">
              <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-white border border-gray-200 text-xs font-semibold text-[#209f8f] uppercase tracking-wider mb-4 shadow-xs">
                Key Advantages
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#152825] mb-4 tracking-tight">
                {benefits.headline}
              </h2>
              {benefits.description && (
                <p className="text-base text-zinc-600 leading-relaxed">
                  {benefits.description}
                </p>
              )}
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.points?.map((point: string, idx: number) => (
                  <div 
                    key={idx} 
                    className="flex items-start gap-3.5 bg-white p-5 rounded-2xl border border-gray-200/80 shadow-xs hover:border-[#209f8f]/30 transition-colors"
                  >
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#209f8f]/10 flex items-center justify-center mt-0.5">
                      <Check className="w-3.5 h-3.5 text-[#209f8f]" strokeWidth={2.5} />
                    </div>
                    <span className="text-sm font-medium text-[#152825] leading-relaxed">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </Section>
      )}

      {/* 6. WHY CHOOSE SECTION */}
      {whyChoose && (
        <Section className="bg-white py-16 md:py-24">
          <Container>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-[#F0FDF4] border border-[#209f8f]/20 text-xs font-semibold text-[#209f8f] uppercase tracking-wider mb-4 shadow-xs">
                The Hulm Advantage
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#152825] mb-4 tracking-tight">
                {whyChoose.headline}
              </h2>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyChoose.items?.map((item, index) => (
                <div 
                  key={index} 
                  className="bg-[#F8FAF9] rounded-2xl p-7 border border-gray-200/80 shadow-xs flex flex-col hover:border-[#209f8f]/30 transition-all duration-200"
                >
                  <h3 className="text-base font-semibold text-[#152825] mb-2 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* 7. WHO CAN USE SECTION */}
      {whoCanUse && (
        <Section className="bg-[#F8FAF9] py-16 md:py-24 border-t border-gray-100">
          <Container>
            <div className="max-w-3xl mx-auto text-center mb-14">
              <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-white border border-gray-200 text-xs font-semibold text-[#209f8f] uppercase tracking-wider mb-4 shadow-xs">
                Audience & Fit
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#152825] mb-4 tracking-tight">
                {whoCanUse.headline}
              </h2>
              {whoCanUse.description && (
                <p className="text-base text-zinc-600">
                  {whoCanUse.description}
                </p>
              )}
            </div>

            <div className="max-w-4xl mx-auto bg-white p-8 sm:p-10 rounded-3xl border border-gray-200/80 shadow-xs">
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4">
                {whoCanUse.points?.map((point: string, idx: number) => {
                  const parts = point.split(' - ');
                  return (
                    <li key={idx} className="flex items-start gap-3 py-2 border-b border-gray-100 last:border-0 md:last:border-b-0">
                      <div className="w-2 h-2 rounded-full bg-[#209f8f] mt-2 shrink-0"></div>
                      <span className="text-sm leading-relaxed text-zinc-700 font-normal">
                        <strong className="text-[#152825] font-semibold">{parts[0]}</strong>
                        {parts[1] ? ` - ${parts[1]}` : ''}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </Container>
        </Section>
      )}

      {/* 8. FAQ SECTION */}
      {faq && faq.items && faq.items.length > 0 && (
        <Section className="bg-white py-16 md:py-24 border-t border-gray-100">
          <Container>
            <div className="text-center max-w-3xl mx-auto mb-14 flex flex-col items-center">
              <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-[#F0FDF4] border border-[#209f8f]/20 text-xs font-semibold text-[#209f8f] uppercase tracking-wider mb-4 shadow-xs">
                Frequently Asked Questions
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#152825] mb-4 tracking-tight">
                {faq.headline}
              </h2>
              <p className="text-sm sm:text-base text-zinc-600">
                {faq.description}
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <SiteFaqAccordion items={faq.items} defaultOpenIndex={0} />
            </div>
          </Container>
        </Section>
      )}

      {/* 9. GLOBAL SOCIAL PROOF & FINAL CTA */}
      <GoogleReviewsSection />
      <FinalCta />
    </div>
  );
}
