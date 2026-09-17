import { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Plug, ShoppingCart, Calculator, ArrowRight, ShieldCheck } from "lucide-react";
import { FinalCta } from "@/components/home/final-cta";
import { GoogleReviewsSection } from "@/components/home/GoogleReviewsSection";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Integrations - Hulm Solutions",
  description: "Connect Hulm POS with FBR, WooCommerce, accounting software, and more.",
};

const integrations = [
  {
    title: "FBR Integration (Pakistan)",
    description: "Fully automated, real-time integration with the Federal Board of Revenue. Stay 100% compliant without manual data entry.",
    icon: ShieldCheck,
    color: "text-emerald-600",
    bg: "bg-emerald-50 border border-emerald-100"
  },
  {
    title: "WooCommerce & Shopify",
    description: "Sync your physical and online inventory seamlessly. Process ecommerce orders directly from your POS dashboard.",
    icon: ShoppingCart,
    color: "text-[#209f8f]",
    bg: "bg-[#209f8f]/10 border border-[#209f8f]/20"
  },
  {
    title: "Accounting Software",
    description: "Export data or directly integrate with leading accounting tools like Xero and QuickBooks for flawless bookkeeping.",
    icon: Calculator,
    color: "text-blue-600",
    bg: "bg-blue-50 border border-blue-100"
  },
  {
    title: "Payment Gateways",
    description: "Integrated card terminals (Credit/Debit) and digital wallets (JazzCash, EasyPaisa) for lightning-fast checkout.",
    icon: Plug,
    color: "text-amber-600",
    bg: "bg-amber-50 border border-amber-100"
  }
];

export default function IntegrationPage() {
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
            Ecosystem Integrations
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white mb-4 leading-tight">
            Connect Your World
          </h1>
          <p className="text-base sm:text-lg text-white/90 font-normal leading-relaxed max-w-2xl mx-auto">
            Hulm doesn't operate in a silo. Our software integrates seamlessly with the tools you already use, including mandatory tax authorities like FBR.
          </p>
        </div>
      </section>

      <Section className="bg-[#F8FAF9] py-20">
        <Container>
          <div className="grid md:grid-cols-2 gap-8">
            {integrations.map((integration, idx) => {
              const Icon = integration.icon;
              return (
                <div key={idx} className="bg-white p-8 lg:p-10 rounded-2xl border border-gray-200/80 shadow-xs flex flex-col md:flex-row gap-6 items-start hover:shadow-md transition-shadow duration-300">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center shrink-0 ${integration.bg} ${integration.color}`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-[#152825] mb-2">{integration.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-sm mb-5">
                      {integration.description}
                    </p>
                    <Link href="/contact" className="inline-flex items-center text-[#209f8f] font-semibold text-sm hover:text-[#1a8578] transition-colors">
                      Learn More <ArrowRight className="w-4 h-4 ml-1.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>

      <GoogleReviewsSection />
      <FinalCta />
    </div>
  );
}
