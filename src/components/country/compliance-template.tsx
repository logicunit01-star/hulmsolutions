import React from "react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { COMPLIANCE_DATA } from "@/lib/countries/data";
import { 
  ArrowRight, 
  ChevronRight, 
  ShieldCheck, 
  CheckCircle2, 
  QrCode
} from "lucide-react";
import { GoogleReviewsSection } from "@/components/home/GoogleReviewsSection";
import { FinalCta } from "@/components/home/final-cta";
import { SiteFaqAccordion } from "@/components/common/site-faq";

interface ComplianceTemplateProps {
  complianceKey: "zatca" | "fbr-integrated-pos-pakistan";
}

export function ComplianceTemplate({ complianceKey }: ComplianceTemplateProps) {
  const data = COMPLIANCE_DATA[complianceKey];

  if (!data) {
    redirect("/");
  }

  const {
    title,
    h1,
    subtitle,
    country,
    flag,
    badge,
    keyPoints,
    steps
  } = data;

  const faqs = complianceKey === "zatca" ? [
    {
      question: "What is the difference between ZATCA Phase 1 and Phase 2?",
      answer: "Phase 1 (Generation Phase) requires generating electronic invoices with QR codes in Arabic and English, stored in tamper-proof storage without manual modification. Phase 2 (Integration Phase) mandates connecting your POS directly to the ZATCA FATOORA platform via secure cryptographic API certificates for real-time clearance and reporting."
    },
    {
      question: "Is Hulm POS fully compliant with ZATCA Phase 2?",
      answer: "Yes. Hulm POS is fully qualified for ZATCA Phase 1 and Phase 2 requirements, supporting cryptographic stamps, SHA-256 hash chaining, sequential invoice counters, and automated XML transmission to FATOORA."
    },
    {
      question: "How do I integrate my Saudi business with ZATCA via Hulm?",
      answer: "Our engineering team guides you through generating the cryptographic CSID on the FATOORA portal, mapping your VAT and CR credentials, and running end-to-end sandbox clearance before switching live."
    },
    {
      question: "Does Hulm POS support bilingual receipts in Arabic and English?",
      answer: "Yes, all invoices, POS receipts, item descriptions, and tax totals are automatically printed in high-definition bilingual Arabic and English complying with Saudi regulations."
    }
  ] : [
    {
      question: "What is FBR Tier-1 POS integration?",
      answer: "Under Sales Tax Act 1990 and SRO 1006(I)/2021, all Tier-1 retailers in Pakistan are legally required to integrate their point of sale systems in real time with the Federal Board of Revenue (FBR) computerized system."
    },
    {
      question: "Does Hulm POS generate verifiable FBR QR code receipts?",
      answer: "Yes. Every bill generates a unique FBR Invoice Number and a scannable QR code that customers can verify instantly using the official FBR Tax Asaan mobile application."
    },
    {
      question: "What happens if the internet goes down?",
      answer: "Hulm POS includes an offline failover mechanism. Invoices are signed and queued securely on your local register and automatically pushed to FBR as soon as the internet connection is restored."
    },
    {
      question: "Does Hulm POS support provincial revenue authorities?",
      answer: "Yes. Hulm supports tax rules and reporting formats for SRB (Sindh), PRA (Punjab), BRA (Balochistan), and KPRA (Khyber Pakhtunkhwa)."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* 1. HERO BANNER */}
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
            <span className="text-white/60">Compliance</span>
            <ChevronRight className="w-3.5 h-3.5 text-white/50 shrink-0" />
            <span className="text-white font-medium flex items-center gap-1.5">
              <span>{flag}</span>
              <span>{country}</span>
            </span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            <div className="lg:col-span-7 flex flex-col space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-xs font-semibold text-white tracking-wide w-fit">
                <span className="text-base leading-none">{flag}</span>
                <span>{country.toUpperCase()}</span>
                <span className="w-1 h-1 rounded-full bg-[#7ae582]" />
                <span className="text-[#a7f3d0]">{badge}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.75rem] font-semibold text-white tracking-tight leading-[1.15]">
                {h1}
              </h1>

              <p className="text-base sm:text-lg text-white/85 max-w-2xl font-normal leading-relaxed">
                {subtitle}
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Button
                  asChild
                  size="lg"
                  className="bg-white hover:bg-slate-50 text-[#152825] font-semibold rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.15)] hover:scale-[1.02] active:scale-[0.98] transition-all px-7 h-12 text-sm"
                >
                  <Link href="https://app.hulmsolutions.com/Register" target="_blank" rel="noopener noreferrer">
                    <span>Get Compliant Now</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="bg-transparent hover:bg-white/10 text-white border-white/30 rounded-full h-12 px-6 text-sm font-semibold transition-all"
                >
                  <Link href="https://wa.me/923391119259" target="_blank" rel="noopener noreferrer">
                    Speak with Tax Specialist
                  </Link>
                </Button>
              </div>

              <div className="flex items-center gap-2 text-[11px] text-white/70">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#7ae582]" />
                <span>Zero audit anxiety</span>
                <span className="mx-1">•</span>
                <CheckCircle2 className="w-3.5 h-3.5 text-[#7ae582]" />
                <span>Instant API verification</span>
                <span className="mx-1">•</span>
                <CheckCircle2 className="w-3.5 h-3.5 text-[#7ae582]" />
                <span>Full onboarding support</span>
              </div>
            </div>

            {/* Right Column: Visual Verification Card */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="w-full max-w-md bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 shadow-2xl relative overflow-hidden">
                <div className="flex items-center justify-between border-b border-white/15 pb-4 mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-xl bg-[#7ae582]/20 border border-[#7ae582]/30 flex items-center justify-center text-white">
                      <QrCode className="w-5 h-5 text-[#7ae582]" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-white">Official Fiscal Verification</div>
                      <div className="text-[11px] text-white/70">{country} Digital Certificate</div>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded-full bg-[#7ae582]/20 text-[#a7f3d0] text-[10px] font-semibold border border-[#7ae582]/30">
                    ACTIVE
                  </span>
                </div>

                <div className="space-y-3 text-xs">
                  <div className="bg-black/20 rounded-xl p-3 border border-white/10 flex items-center justify-between">
                    <span className="text-white/70">Tax Authority API</span>
                    <span className="font-semibold text-white flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#7ae582] animate-pulse" />
                      Connected (200 OK)
                    </span>
                  </div>
                  <div className="bg-black/20 rounded-xl p-3 border border-white/10 flex items-center justify-between">
                    <span className="text-white/70">QR Code Signing</span>
                    <span className="font-semibold text-[#a7f3d0]">SHA-256 Validated</span>
                  </div>
                  <div className="bg-black/20 rounded-xl p-3 border border-white/10 flex items-center justify-between">
                    <span className="text-white/70">Sync Frequency</span>
                    <span className="font-semibold text-white">Real-Time Sub-Second</span>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-white/15 text-[11px] text-white/70 flex items-center justify-between">
                  <span>Automated Monthly Audit Trail</span>
                  <span className="text-[#a7f3d0] font-semibold">100% Ready</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. COMPLIANCE PILLARS */}
      <Section className="py-20 bg-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#1b7f70] bg-[#1b7f70]/10 px-3 py-1 rounded-full">
              Technical Specifications
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#152825] tracking-tight">
              Key Compliance Architecture
            </h2>
            <p className="text-base text-zinc-600 font-normal">
              Engineered from the ground up to satisfy all legal, cryptographic, and operational requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {keyPoints.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#f8fafc] rounded-2xl p-7 border border-emerald-100/80 hover:border-emerald-200 hover:shadow-md transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#1b7f70] flex items-center justify-center mb-4">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold text-[#152825] mb-2 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-sm text-zinc-600 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 3. 4-STEP ONBOARDING PROCESS */}
      <Section className="py-20 bg-slate-50/80 border-y border-zinc-200/60">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#1b7f70] bg-[#1b7f70]/10 px-3 py-1 rounded-full">
              Rapid Deployment
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#152825] tracking-tight">
              Seamless Integration in 4 Simple Steps
            </h2>
            <p className="text-base text-zinc-600 font-normal">
              Get your business certified and fully integrated without disrupting your daily sales operations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-zinc-200/80 hover:border-emerald-200 hover:shadow-md transition-all flex flex-col relative"
              >
                <div className="text-2xl font-bold text-[#1b7f70] mb-3">
                  {step.step}
                </div>
                <h3 className="text-base font-semibold text-[#152825] mb-2 tracking-tight">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 font-normal leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 4. REVIEWS */}
      <GoogleReviewsSection />

      {/* 5. FAQs */}
      <Section className="py-20 bg-white border-t border-zinc-200/60">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#1b7f70] bg-[#1b7f70]/10 px-3 py-1 rounded-full">
              Tax & Regulatory FAQ
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#152825] tracking-tight">
              Frequently Asked Compliance Questions
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <SiteFaqAccordion items={faqs} />
          </div>
        </Container>
      </Section>

      {/* 6. FINAL CTA */}
      <FinalCta />
    </div>
  );
}
