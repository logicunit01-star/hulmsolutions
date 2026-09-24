import { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { ArrowRight, Quote, CheckCircle2 } from "lucide-react";
import { caseStudiesData } from "@/content/pages/caseStudiesData";
import { FinalCta } from "@/components/home/final-cta";
import { GoogleReviewsSection } from "@/components/home/GoogleReviewsSection";

export const metadata: Metadata = {
  title: "Case Studies - Hulm Solutions",
  description: "See how top businesses are transforming their operations with Hulm POS and Logistics software.",
  alternates: { canonical: "/pos-case-studies" },
};

export default function CaseStudiesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="relative w-full py-20 sm:py-28 bg-gradient-to-br from-[#1b7f70] via-[#209f8f] to-[#16695d] text-white text-center overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.08] pointer-events-none bg-repeat bg-center"
          style={{
            backgroundImage: "url('/images/home/cta-bg-pattern.png')",
            backgroundSize: "600px",
          }}
        />
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-black/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md text-white text-xs font-semibold uppercase tracking-widest border border-white/20 shadow-xs mb-4">
            Customer Success
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white mb-4 leading-tight">
            Customer Success Stories
          </h1>
          <p className="text-base sm:text-lg text-white/90 font-normal leading-relaxed max-w-2xl mx-auto">
            Discover how businesses across retail, logistics, and hospitality are scaling effortlessly with Hulm&apos;s powerful operational ecosystem.
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <Section className="bg-[#F8FAF9] py-20">
        <Container>
          <div className="flex flex-col gap-12">
            {caseStudiesData.map((study, idx) => (
              <div key={study.id} className="bg-white rounded-2xl border border-gray-200/80 shadow-xs overflow-hidden hover:shadow-md transition-shadow duration-300">
                <div className="grid lg:grid-cols-12">
                  {/* Left Side: Problem & Solution */}
                  <div className={`lg:col-span-7 p-8 lg:p-12 flex flex-col justify-between ${idx % 2 === 1 ? 'lg:order-last' : ''}`}>
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-4">
                        <span className="px-3 py-1 bg-[#209f8f]/10 text-[#209f8f] text-xs font-semibold rounded-full uppercase tracking-wider">
                          {study.industry}
                        </span>
                        <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
                          {study.location}
                        </span>
                      </div>

                      <Link href={`/pos-case-studies/${study.slug}`} className="group inline-block">
                        <h2 className="text-2xl sm:text-3xl font-semibold text-[#152825] mb-2 tracking-tight group-hover:text-[#209f8f] transition-colors">
                          {study.client}
                        </h2>
                      </Link>
                      <h3 className="text-base sm:text-lg text-gray-500 mb-6 font-normal">
                        {study.title}
                      </h3>
                      
                      <div className="space-y-5 mb-8">
                        <div>
                          <h4 className="font-semibold text-[#152825] mb-1.5 flex items-center gap-2 text-sm sm:text-base">
                            <span className="w-2 h-2 rounded-full bg-red-500" /> The Challenge
                          </h4>
                          <p className="text-gray-600 leading-relaxed text-sm">
                            {study.challenge}
                          </p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-[#152825] mb-1.5 flex items-center gap-2 text-sm sm:text-base">
                            <span className="w-2 h-2 rounded-full bg-[#209f8f]" /> The Solution
                          </h4>
                          <p className="text-gray-600 leading-relaxed text-sm">
                            {study.solution}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                      <Link
                        href={`/pos-case-studies/${study.slug}`}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-[#209f8f] hover:text-[#1a8578] group transition-colors"
                      >
                        Read Full Case Study
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>

                  {/* Right Side: Metrics & Quote */}
                  <div className="lg:col-span-5 bg-[#209f8f]/5 p-8 lg:p-12 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-[#209f8f]/15">
                    {study.image && (
                      <div className="relative w-full h-44 rounded-xl overflow-hidden mb-6 border border-gray-200/60 shadow-xs bg-white">
                        <img
                          src={study.image}
                          alt={study.client}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}

                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {study.results.slice(0, 4).map((result, rIdx) => (
                        <div key={rIdx} className="bg-white p-4 rounded-xl border border-[#209f8f]/20 text-center shadow-xs">
                          <div className="text-xl sm:text-2xl font-semibold text-[#209f8f] mb-0.5">{result.metric}</div>
                          <div className="text-[11px] font-medium text-gray-500 line-clamp-2">{result.description}</div>
                        </div>
                      ))}
                    </div>

                    <div className="relative bg-white p-5 rounded-xl border border-gray-200/80 shadow-xs mt-auto">
                      <Quote className="absolute top-3 right-3 w-6 h-6 text-[#209f8f]/15" />
                      <p className="text-xs sm:text-sm font-medium text-[#152825] italic mb-3 relative z-10 leading-relaxed">
                        &ldquo;{study.quote.text}&rdquo;
                      </p>
                      <div>
                        <div className="font-semibold text-[#152825] text-xs">{study.quote.author}</div>
                        <div className="text-[11px] text-gray-500">{study.quote.role}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <GoogleReviewsSection />
      <FinalCta />
    </div>
  );
}
