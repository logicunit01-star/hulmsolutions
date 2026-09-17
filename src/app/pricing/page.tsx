import React from "react";
import { Metadata } from "next";
import { pricingContent } from "@content/pages/pricing";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Check, X, CheckCircle2 } from "lucide-react";
import { SiteFaqAccordion } from "@/components/common/site-faq";
import { GoogleReviewsSection } from "@/components/home/GoogleReviewsSection";
import { FinalCta } from "@/components/home/final-cta";
import Link from "next/link";

export const metadata: Metadata = {
  title: pricingContent.seo.title,
  description: pricingContent.seo.description,
  keywords: pricingContent.seo.keywords,
};

export default function PricingPage() {
  const tabsSection = pricingContent.additionalSections?.find(s => s.type === "pricing-tabs");
  const plansSection = pricingContent.additionalSections?.find(s => s.type === "pricing-cards");
  const compareSection = pricingContent.additionalSections?.find(s => s.type === "feature-comparison");
  const addonsSection = pricingContent.additionalSections?.find(s => s.type === "add-ons");
  const whySection = pricingContent.additionalSections?.find(s => s.type === "why-choose");
  const faqSection = pricingContent.additionalSections?.find(s => s.type === "faq");

  return (
    <div>
      <Section className="py-20 lg:py-28 bg-white">
        <Container>
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center px-3.5 py-1.5 rounded-full border border-[#209f8f]/30 text-xs font-semibold text-[#209f8f] uppercase tracking-widest bg-[#209f8f]/10 shadow-xs mb-4">
              Simple, Transparent Pricing
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#152825] mb-5 tracking-tight">
              {pricingContent.hero.headline}
            </h1>
            <p
              className="text-base sm:text-lg text-zinc-600 leading-relaxed"
              dangerouslySetInnerHTML={{
                __html: (pricingContent.hero?.description || '')
                  .replace('No hidden fees.', '<strong class="text-[#152825]">No hidden fees.</strong>')
                  .replace('Start free for 14 days.', '<strong class="text-[#152825]">Start free for 14 days.</strong>'),
              }}
            />
          </div>

          {/* Industry Tabs */}
          {tabsSection && (
            <div className="flex flex-wrap justify-center gap-2 mb-16">
              {tabsSection.tabs?.map((tab: string, i: number) => (
                <div
                  key={i}
                  className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
                    i === 0
                      ? 'bg-[#209f8f] text-white shadow-sm'
                      : 'bg-gray-100 text-zinc-700 hover:bg-[#209f8f]/10 hover:text-[#209f8f]'
                  }`}
                >
                  {tab}
                </div>
              ))}
            </div>
          )}

          {/* Pricing Cards */}
          {plansSection && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch mb-24">
              {plansSection.plans?.map((plan: any, i: number) => (
                <div
                  key={i}
                  className={`relative flex flex-col p-7 rounded-2xl h-full border transition-all duration-300 ${
                    plan.isPopular
                      ? 'border-[#209f8f] shadow-lg shadow-[#209f8f]/10 bg-white ring-2 ring-[#209f8f]/20 lg:-translate-y-2'
                      : 'border-gray-200/80 bg-white hover:border-[#209f8f]/40 hover:shadow-md'
                  }`}
                >
                  {plan.isPopular && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#209f8f] text-white text-center px-4 py-1 text-xs font-semibold rounded-full shadow-sm">
                      Most Popular
                    </div>
                  )}
                  <div className="mb-6 pt-1">
                    <h3 className="text-xl font-semibold text-[#152825] mb-2">{plan.name}</h3>
                    <p className="text-xs sm:text-sm text-zinc-500 min-h-[36px]">{plan.description}</p>
                  </div>

                  <div className="mb-6 pb-6 border-b border-gray-100">
                    <div className="text-2xl sm:text-3xl font-semibold text-[#152825]">
                      {plan.price.includes('Contact') ? plan.price : plan.price}
                    </div>
                    {!plan.price.includes('Contact') && (
                      <span className="text-xs text-zinc-500">per month / billed annually</span>
                    )}
                  </div>
                  
                  <ul className="space-y-3 mb-8 flex-grow">
                    {plan.features.map((feature: string, idx: number) => (
                      <li key={idx} className="flex items-start text-xs sm:text-sm text-zinc-700">
                        <Check className="mr-2.5 mt-0.5 w-4 h-4 text-[#209f8f] flex-shrink-0" strokeWidth={2.5} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-4">
                    <Button
                      asChild
                      className={`w-full rounded-xl font-semibold h-11 transition-all ${
                        plan.isPopular
                          ? 'bg-[#209f8f] hover:bg-[#1a8578] text-white shadow-sm'
                          : 'bg-[#209f8f]/10 text-[#209f8f] hover:bg-[#209f8f] hover:text-white'
                      }`}
                    >
                      <Link href="https://app.hulmsolutions.com/Register">
                        {plan.ctaLabel}
                      </Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Feature Comparison */}
          {compareSection && (
            <div className="mb-24">
              <div className="mb-10 text-center max-w-2xl mx-auto">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#152825] mb-3 tracking-tight">
                  {compareSection.heading}
                </h2>
                <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">{compareSection.subheading}</p>
              </div>
              <div className="overflow-x-auto rounded-2xl border border-gray-200/80 bg-white shadow-xs">
                <table className="w-full text-left border-collapse min-w-[800px]">
                  <thead>
                    <tr className="border-b border-gray-200 bg-gray-50/70">
                      <th className="py-4 px-6 font-semibold text-[#152825] w-1/3 text-sm">Feature</th>
                      <th className="py-4 px-6 font-semibold text-[#152825] text-center text-sm">Starter</th>
                      <th className="py-4 px-6 font-semibold text-[#152825] text-center text-sm">Growth</th>
                      <th className="py-4 px-6 font-semibold text-[#209f8f] text-center text-sm bg-[#209f8f]/5">Business</th>
                      <th className="py-4 px-6 font-semibold text-[#152825] text-center text-sm">Enterprise</th>
                    </tr>
                  </thead>
                  <tbody>
                    {compareSection.categories?.map((category: any, cIdx: number) => (
                      <React.Fragment key={cIdx}>
                        <tr>
                          <td colSpan={5} className="py-3 px-6 text-xs font-semibold text-zinc-500 uppercase tracking-wider bg-gray-50/50">
                            {category.name}
                          </td>
                        </tr>
                        {category.features.map((feature: any, fIdx: number) => (
                          <tr key={fIdx} className="border-b border-gray-100 last:border-0 hover:bg-gray-50/50 transition-colors">
                            <td className="py-3.5 px-6 text-sm text-[#152825] font-medium flex items-center gap-2.5">
                              <CheckCircle2 className="w-4 h-4 text-[#209f8f] shrink-0" />
                              {feature.name}
                            </td>
                            <td className="py-3.5 px-6 text-center text-[#209f8f]">
                              {feature.starter ? <Check className="w-4 h-4 mx-auto stroke-[2.5]" /> : <X className="w-4 h-4 mx-auto text-gray-300" />}
                            </td>
                            <td className="py-3.5 px-6 text-center text-[#209f8f]">
                              {feature.growth ? <Check className="w-4 h-4 mx-auto stroke-[2.5]" /> : <X className="w-4 h-4 mx-auto text-gray-300" />}
                            </td>
                            <td className="py-3.5 px-6 text-center text-[#209f8f] bg-[#209f8f]/5 font-semibold">
                              {feature.business ? <Check className="w-4 h-4 mx-auto stroke-[2.5]" /> : <X className="w-4 h-4 mx-auto text-gray-300" />}
                            </td>
                            <td className="py-3.5 px-6 text-center text-[#209f8f]">
                              {feature.enterprise ? <Check className="w-4 h-4 mx-auto stroke-[2.5]" /> : <X className="w-4 h-4 mx-auto text-gray-300" />}
                            </td>
                          </tr>
                        ))}
                      </React.Fragment>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Add-ons and Onboarding */}
          {addonsSection && (
            <div className="mb-24">
              <div className="mb-10 text-center max-w-2xl mx-auto">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#152825] mb-3 tracking-tight">
                  {addonsSection.heading}
                </h2>
                <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">{addonsSection.subheading}</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {addonsSection.blocks?.map((block: any, i: number) => (
                  <div key={i} className="bg-gradient-to-br from-[#1b7f70] via-[#209f8f] to-[#16695d] rounded-2xl p-8 text-white shadow-md">
                    <h3 className="text-xl font-semibold mb-6">{block.title}</h3>
                    <ul className="space-y-3.5">
                      {block.items.map((item: string, idx: number) => (
                        <li key={idx} className="flex items-start text-sm text-white/95">
                          <Check className="mr-3 mt-0.5 w-4 h-4 text-emerald-200 shrink-0 stroke-[2.5]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Why Choose Hulm */}
          {whySection && (
            <div className="mb-24">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#152825] mb-8 text-center tracking-tight">
                {whySection.heading}
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {whySection.reasons?.map((reason: string, i: number) => (
                  <div key={i} className="bg-white border border-gray-200/80 rounded-2xl p-6 text-center text-sm font-semibold text-[#152825] shadow-xs flex items-center justify-center min-h-[110px] hover:border-[#209f8f]/40 transition-colors">
                    {reason}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* FAQ */}
          {faqSection && (
            <div className="mb-12 max-w-4xl mx-auto">
              <div className="mb-10 text-center">
                <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-white border border-gray-200 text-xs font-semibold text-[#209f8f] uppercase tracking-wider mb-4 shadow-xs">
                  Got Questions?
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#152825] mb-3 tracking-tight">
                  {faqSection.heading}
                </h2>
                <p className="text-sm sm:text-base text-zinc-600">{faqSection.subheading}</p>
              </div>
              <SiteFaqAccordion items={faqSection.items} defaultOpenIndex={0} />
            </div>
          )}
        </Container>
      </Section>

      {/* Google Reviews & Final CTA */}
      <GoogleReviewsSection />
      <FinalCta />
    </div>
  );
}
