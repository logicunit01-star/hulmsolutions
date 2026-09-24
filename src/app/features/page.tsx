import { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { CreditCard, Printer, ShoppingCart, BarChart3, WifiOff, Users } from "lucide-react";
import { GoogleReviewsSection } from "@/components/home/GoogleReviewsSection";
import { FinalCta } from "@/components/home/final-cta";

export const metadata: Metadata = {
  title: "POS & Billing Features - Hulm Solutions",
  description: "Explore the powerful POS and billing features designed to accelerate your checkout process and secure your revenue.",
  alternates: { canonical: "/features" },
};

const posFeatures = [
  {
    title: "Lightning Fast Checkout",
    description: "Process sales in seconds with our optimized barcode scanning and intuitive touchscreen interface.",
    icon: ShoppingCart,
  },
  {
    title: "Integrated Payments",
    description: "Accept credit cards, debit cards, mobile wallets, and split payments effortlessly directly through the POS.",
    icon: CreditCard,
  },
  {
    title: "Offline Mode",
    description: "Internet goes down? No problem. Continue making sales offline and sync automatically when you reconnect.",
    icon: WifiOff,
  },
  {
    title: "Hardware Agnostic",
    description: "Works flawlessly with your existing receipt printers, cash drawers, and barcode scanners.",
    icon: Printer,
  },
  {
    title: "Staff Permissions",
    description: "Secure your till. Assign granular roles (cashier, manager, admin) and track every void or discount.",
    icon: Users,
  },
  {
    title: "End of Day Reporting",
    description: "Generate instant Z-reports, perform blind till reconciliations, and close out shifts with absolute accuracy.",
    icon: BarChart3,
  },
];

export default function FeaturesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Section className="pt-20 lg:pt-28 pb-16 bg-[#F8FAF9] text-center border-b border-gray-100">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-white border border-gray-200 text-xs font-semibold text-[#209f8f] uppercase tracking-wider mb-6 shadow-xs">
              Core POS
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#152825] mb-5 tracking-tight leading-tight">
              Powerful POS & Billing
            </h1>
            <p className="text-base sm:text-lg text-zinc-600 mb-8 leading-relaxed">
              Everything you need to ring up sales, manage cash drawers, and serve customers faster than ever before.
            </p>
          </div>
        </Container>
      </Section>

      <Section className="bg-white py-20 lg:py-24">
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posFeatures.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div
                  key={idx}
                  className="bg-white p-8 rounded-2xl border border-gray-200/80 shadow-xs hover:border-[#209f8f]/40 hover:shadow-md transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-[#209f8f]/10 rounded-xl flex items-center justify-center text-[#209f8f] mb-6">
                    <Icon className="w-6 h-6" strokeWidth={2} />
                  </div>
                  <h3 className="text-lg font-semibold text-[#152825] mb-2">{feature.title}</h3>
                  <p className="text-sm text-zinc-600 leading-relaxed">{feature.description}</p>
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
