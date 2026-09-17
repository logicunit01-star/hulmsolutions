import { Metadata } from "next";
import { homeContent } from "@content/pages/home";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  CheckCircle2,
  ChevronDown,
  Check,
  X,
  Factory,
  Armchair,
  Coffee,
  ToyBrick,
  Gem,
  Zap,
  Croissant,
  Scissors,
  Shirt,
  Utensils,
  Pill,
  ShoppingBag,
  Store,
  Receipt,
  Boxes,
  ClipboardList,
  Building2,
  Users,
  BarChart3,
  Truck,
  Smartphone,
  Sparkles,
  ShieldCheck,
  Clock,
  Play,
  UserPlus,
  LayoutGrid,
} from "lucide-react";
import { SiteFaqAccordion } from "@/components/common/site-faq";
import { DashboardCarousel } from "@/components/home/DashboardCarousel";
import { FinalCtaForm } from "@/components/home/FinalCtaForm";
import { GoogleReviewsSection } from "@/components/home/GoogleReviewsSection";

const industryMeta: Record<
  string,
  { icon: React.ComponentType<{ className?: string }>; href: string }
> = {
  "Manufacturing Industry": { icon: Factory, href: "/industries/manufacturing-industries/" },
  "Furniture Store": { icon: Armchair, href: "/industries/furniture-store/" },
  "Cafe Shop": { icon: Coffee, href: "/industries/cafe/" },
  "Toys Store": { icon: ToyBrick, href: "/industries/toys-store/" },
  "Jewelry Shop": { icon: Gem, href: "/industries/jewellery-shop/" },
  "Electric Store": { icon: Zap, href: "/industries/electric-store/" },
  "Bakery": { icon: Croissant, href: "/industries/bakery-pos-system/" },
  "Salon / Spa": { icon: Scissors, href: "/industries/salon-pos/" },
  "Clothing Store": { icon: Shirt, href: "/industries/clothing-store/" },
  "Restaurant": { icon: Utensils, href: "/industries/restaurant-pos/" },
  "Pharmacy Store": { icon: Pill, href: "/industries/pharmacy-store/" },
  "Retail Store": { icon: ShoppingBag, href: "/industries/retail-store/" },
};

function CattleIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M4 5c1 1.8 2.2 2.8 4 3" />
      <path d="M20 5c-1 1.8-2.2 2.8-4 3" />
      <path d="M8 8h8c1.8 0 3 1.2 3 3 0 2.8-1.5 4.5-3 5.5v1.5c0 1.2-1.2 2-2.5 2h-3c-1.3 0-2.5-.8-2.5-2V16.5C6.5 15.5 5 13.8 5 11c0-1.8 1.2-3 3-3Z" />
      <path d="M5.5 10.5 2.5 9" />
      <path d="M18.5 10.5 21.5 9" />
      <circle cx="10" cy="18" r="0.8" fill="currentColor" />
      <circle cx="14" cy="18" r="0.8" fill="currentColor" />
      <circle cx="9.5" cy="12.5" r="0.8" fill="currentColor" />
      <circle cx="14.5" cy="12.5" r="0.8" fill="currentColor" />
    </svg>
  );
}

const featureIconsMap: Record<
  string,
  React.ComponentType<{ className?: string }>
> = {
  "POS & Billing": Receipt,
  "Inventory Management": Boxes,
  "Purchase Orders": ClipboardList,
  "Vendor Management": Building2,
  "Customer Management": Users,
  "Order Management": ShoppingBag,
  "Reporting & Analytics": BarChart3,
  "Logistics Management": Truck,
  "Mobile POS": Smartphone,
  "Cattle Management": CattleIcon,
};

function parseFeatureDescription(desc: string) {
  const whatMarker = "What it does in plain words:";
  const whyMarker = "Why it matters for Pakistani businesses:";

  if (desc.includes(whatMarker) && desc.includes(whyMarker)) {
    const afterWhat = desc.split(whyMarker);
    const whatText = afterWhat[0].replace(whatMarker, "").trim();
    const whyText = afterWhat[1]?.trim() || "";
    return {
      hasSplit: true,
      whatLabel: whatMarker,
      whatText,
      whyLabel: whyMarker,
      whyText,
    };
  }

  return {
    hasSplit: false,
    raw: desc,
  };
}

export const metadata: Metadata = {
  title: homeContent.seo.title,
  description: homeContent.seo.description,
  keywords: homeContent.seo.keywords,
};

export default function HomePage() {
  const trustedBy = homeContent.additionalSections?.find(s => s.type === "trusted-by");
  const painPoints = homeContent.additionalSections?.find(s => s.type === "pain-points");
  const featuresGrid = homeContent.additionalSections?.find(s => s.type === "features-grid");
  const dashboardPreview = homeContent.additionalSections?.find(s => s.type === "dashboard-preview");
  const benefits = homeContent.additionalSections?.find(s => s.type === "benefits");
  const fbrCompliance = homeContent.additionalSections?.find(s => s.type === "fbr-compliance");
  const compTable = homeContent.additionalSections?.find(s => s.type === "comparison-table");
  const whyPoints = homeContent.additionalSections?.find(s => s.type === "why-choose-points");
  const industries = homeContent.additionalSections?.find(s => s.type === "industries");
  const timeline = homeContent.additionalSections?.find(s => s.type === "timeline");
  const testimonialsHeader = homeContent.additionalSections?.find(s => s.type === "testimonials-header");
  const trustedLogos = homeContent.additionalSections?.find(s => s.type === "trusted-logos");
  const faq = homeContent.additionalSections?.find(s => s.type === "faq");
  const finalCta = homeContent.additionalSections?.find(s => s.type === "final-cta-split");

  return (
    <>
      {/* 1. Hero */}
      <Section className="py-20 lg:py-28 bg-white">
        <Container>
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <div className="flex-1 space-y-7">
              <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-[#eefaf7] text-[#209f8f] text-xs sm:text-sm font-semibold border border-[#209f8f]/20">
                Best POS Software in Pakistan
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-[52px] font-semibold text-gray-900 leading-[1.15] tracking-tight">
                {homeContent.hero.headline}
              </h1>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-xl">
                {homeContent.hero.description}
              </p>
              
              <div className="bg-[#FFF9F5] border border-[#FFE8DC] p-5 rounded-2xl inline-block w-full max-w-md shadow-sm">
                <p className="text-[#f15a24] font-bold text-base mb-1">Start 14 Days Free Trail</p>
                <p className="text-xs sm:text-sm text-gray-600">No credit card required · PKR 2,500/month · No hidden fees</p>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-1">
                <Button asChild className="bg-[#209f8f] hover:bg-[#1a8578] text-white px-8 h-12 rounded-xl text-sm sm:text-base font-semibold shadow-sm transition-all">
                  <Link href="https://app.hulmsolutions.com/Register">
                    {homeContent.hero.primaryCTA?.label || "Start 14 Days Free Trail"}
                  </Link>
                </Button>
                <Button asChild variant="outline" className="border-gray-200 text-gray-700 hover:bg-gray-50 h-12 px-6 rounded-xl flex items-center gap-2 text-sm sm:text-base font-medium transition-all">
                  <Link href="https://www.youtube.com/watch?v=Fd6X_TPX9EA" target="_blank" rel="noopener noreferrer">
                    <span className="w-0 h-0 border-t-[5px] border-t-transparent border-l-[8px] border-l-gray-700 border-b-[5px] border-b-transparent mr-1"></span>
                    {homeContent.hero.secondaryCTA?.label || "Watch Demo Video"}
                  </Link>
                </Button>
              </div>
            </div>
            <div className="flex-1 flex justify-center items-center w-full">
              <img
                src="/images/home/hero-image-hulm.webp"
                alt="Hulm POS Software Ecosystem"
                className="w-full max-w-xl lg:max-w-2xl h-auto object-contain drop-shadow-sm"
              />
            </div>
          </div>
        </Container>
      </Section>

      {/* 2. Trusted By Banner */}
      {trustedBy && (
        <div className="bg-gradient-to-b from-[#f4faf8] via-[#f7fbf9] to-[#f4faf8] py-12 md:py-16 border-y border-[#25a18e]/15 overflow-hidden">
          <Container>
            <div className="text-center max-w-2xl mx-auto mb-8 md:mb-10">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#25a18e]/10 text-[#209f8f] text-xs font-bold uppercase tracking-wider mb-2.5 border border-[#25a18e]/20">
                <ShieldCheck className="w-3.5 h-3.5 text-[#25a18e]" />
                <span>Verified Accreditations & Awards</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-semibold text-[#152825] tracking-tight">
                {trustedBy.heading}
              </h2>
            </div>

            {/* Desktop Layout (5 Elegant Normalized Cards) */}
            <div className="hidden md:grid grid-cols-5 gap-4 lg:gap-6 max-w-5xl mx-auto">
              {trustedBy.logos?.map((logo: any, i: number) => {
                const isHorizontal =
                  logo.name.toLowerCase().includes("product") ||
                  logo.name.toLowerCase().includes("trust");
                return (
                  <div
                    key={i}
                    className="group bg-white rounded-2xl px-5 py-4 h-24 lg:h-28 border border-[#EBECEF] hover:border-[#25a18e]/40 shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_20px_rgba(37,161,142,0.08)] hover:-translate-y-1 transition-all duration-300 flex items-center justify-center"
                  >
                    <img
                      src={logo.image}
                      alt={logo.name}
                      className={`${
                        isHorizontal
                          ? "h-7 lg:h-8 max-w-[150px]"
                          : "h-14 lg:h-16 max-w-[85px]"
                      } w-auto object-contain transition-transform duration-300 group-hover:scale-105`}
                    />
                  </div>
                );
              })}
            </div>
          </Container>

          {/* Mobile Sliding Ticker / Marquee (Visible only on Mobile screens) */}
          <div className="md:hidden relative w-full overflow-hidden py-1 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div className="animate-marquee items-center gap-4 px-2">
              {/* First Set of Logos */}
              {trustedBy.logos?.map((logo: any, i: number) => {
                const isHorizontal =
                  logo.name.toLowerCase().includes("product") ||
                  logo.name.toLowerCase().includes("trust");
                return (
                  <div
                    key={`m1-${i}`}
                    className="shrink-0 bg-white rounded-xl px-4 py-2.5 h-20 border border-[#EBECEF] shadow-xs flex items-center justify-center w-[150px]"
                  >
                    <img
                      src={logo.image}
                      alt={logo.name}
                      className={`${
                        isHorizontal
                          ? "h-6 max-w-[125px]"
                          : "h-12 max-w-[65px]"
                      } w-auto object-contain`}
                    />
                  </div>
                );
              })}
              {/* Second Duplicate Set for Seamless Infinite Loop */}
              {trustedBy.logos?.map((logo: any, i: number) => {
                const isHorizontal =
                  logo.name.toLowerCase().includes("product") ||
                  logo.name.toLowerCase().includes("trust");
                return (
                  <div
                    key={`m2-${i}`}
                    className="shrink-0 bg-white rounded-xl px-4 py-2.5 h-20 border border-[#EBECEF] shadow-xs flex items-center justify-center w-[150px]"
                  >
                    <img
                      src={logo.image}
                      alt={logo.name}
                      className={`${
                        isHorizontal
                          ? "h-6 max-w-[125px]"
                          : "h-12 max-w-[65px]"
                      } w-auto object-contain`}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* 3. Pain Points */}
      {painPoints && (
        <Section className="py-20 lg:py-28 bg-white">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="space-y-8">
                <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-semibold text-[#152825] tracking-tight leading-[1.2]">
                  {painPoints.heading}
                </h2>
                <div className="space-y-4 sm:space-y-5">
                  {painPoints.items?.map((item: any, i: number) => (
                    <div
                      key={i}
                      className="bg-[#FAFAFA] p-6 rounded-2xl border border-[#EBECEF] hover:border-[#25a18e]/40 hover:shadow-xs transition-all duration-200"
                    >
                      <h3 className="text-[#209f8f] font-bold text-lg mb-2">{item.title}</h3>
                      <p className="text-sm text-zinc-600 leading-relaxed font-normal">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex justify-center items-center">
                <img
                  src={painPoints.image}
                  alt="Still Managing Your Business on Excel, WhatsApp and Paper?"
                  className="w-full max-w-md lg:max-w-lg h-auto object-contain"
                />
              </div>
            </div>
          </Container>
        </Section>
      )}

      {/* 4. One Login Grid */}
      {featuresGrid && (
        <Section className="py-20 lg:py-28 bg-[#F8FAF9] border-y border-[#EBECEF]">
          <Container>
            <div className="text-center max-w-4xl mx-auto mb-14 sm:mb-16">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#25a18e]/10 text-[#209f8f] text-xs sm:text-sm font-semibold mb-4 border border-[#25a18e]/20">
                <Sparkles className="w-3.5 h-3.5 text-[#25a18e]" />
                <span>Complete Operations Suite</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-semibold text-[#152825] tracking-tight leading-[1.2] mb-5">
                {featuresGrid.heading}
              </h2>
              <p className="text-base sm:text-lg text-zinc-600 leading-relaxed max-w-3xl mx-auto font-normal">
                {featuresGrid.subheading}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
              {featuresGrid.items?.map((item: any, i: number) => {
                const IconComponent = featureIconsMap[item.title] || Sparkles;
                const parsed = parseFeatureDescription(item.description);
                const isSpotlight = i === 9; // Cattle Management (10th item)

                if (isSpotlight) {
                  return (
                    <div
                      key={i}
                      className="md:col-span-2 lg:col-span-3 bg-gradient-to-br from-white via-[#fcfefd] to-[#f0f9f6] rounded-[22px] p-6 sm:p-8 border-2 border-[#25a18e]/30 shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_36px_rgba(37,161,142,0.12)] hover:border-[#25a18e]/60 transition-all duration-300 group"
                    >
                      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 sm:gap-8">
                        <div className="flex-1 space-y-4">
                          <div className="flex flex-wrap items-center gap-3">
                            <div className="w-12 h-12 rounded-xl bg-[#25a18e]/15 text-[#25a18e] group-hover:bg-[#25a18e] group-hover:text-white transition-all duration-300 flex items-center justify-center shrink-0">
                              <IconComponent className="w-6 h-6 stroke-[1.8]" />
                            </div>
                            <div>
                              <div className="flex flex-wrap items-center gap-2">
                                <h3 className="text-xl sm:text-2xl font-bold text-[#152825] group-hover:text-[#209f8f] transition-colors">
                                  {item.title}
                                </h3>
                                <span className="text-[11px] font-bold text-[#209f8f] bg-[#25a18e]/10 border border-[#25a18e]/25 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                                  Unique in Pakistan
                                </span>
                              </div>
                              <span className="text-xs text-zinc-400 font-mono">
                                Module 10 of 10
                              </span>
                            </div>
                          </div>

                          {parsed.hasSplit ? (
                            <div>
                              <div className="text-[11px] font-bold uppercase tracking-wider text-zinc-600 mb-1 flex items-center gap-1.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#25a18e]" />
                                <span>{parsed.whatLabel}</span>
                              </div>
                              <p className="text-sm sm:text-base text-zinc-700 leading-relaxed font-normal">
                                {parsed.whatText}
                              </p>
                            </div>
                          ) : (
                            <p
                              className="text-sm text-zinc-600 leading-relaxed"
                              dangerouslySetInnerHTML={{ __html: item.description }}
                            />
                          )}
                        </div>

                        {parsed.hasSplit && (
                          <div className="lg:max-w-md w-full bg-[#f4faf8] border border-[#25a18e]/30 rounded-xl p-4 sm:p-5 shrink-0">
                            <div className="text-[12px] sm:text-xs font-bold text-[#209f8f] mb-1.5 flex items-center gap-1.5">
                              <CheckCircle2 className="w-4 h-4 shrink-0 text-[#25a18e]" />
                              <span>{parsed.whyLabel}</span>
                            </div>
                            <p className="text-xs sm:text-[13px] text-zinc-700 leading-relaxed font-medium">
                              {parsed.whyText}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                }

                return (
                  <div
                    key={i}
                    className="flex flex-col h-full bg-white rounded-[22px] p-6 sm:p-7 border border-[#EBECEF] hover:border-[#25a18e]/50 hover:shadow-[0_12px_30px_rgba(37,161,142,0.08)] hover:-translate-y-1 transition-all duration-300 group"
                  >
                    {/* Top Row: Icon + Number badge */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-xl bg-[#25a18e]/10 text-[#25a18e] group-hover:bg-[#25a18e] group-hover:text-white transition-all duration-300 flex items-center justify-center shrink-0">
                        <IconComponent className="w-6 h-6 stroke-[1.8]" />
                      </div>
                      <span className="text-xs font-semibold text-zinc-400 bg-zinc-100/90 group-hover:bg-[#25a18e]/10 group-hover:text-[#25a18e] px-2.5 py-1 rounded-full transition-colors font-mono">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>

                    {/* Card Title */}
                    <h3 className="text-xl font-bold text-[#152825] group-hover:text-[#209f8f] transition-colors mb-3.5">
                      {item.title}
                    </h3>

                    {/* What it does section */}
                    {parsed.hasSplit ? (
                      <div className="mb-5 flex-1">
                        <div className="text-[11px] font-bold uppercase tracking-wider text-zinc-600 mb-1.5 flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#25a18e]" />
                          <span>{parsed.whatLabel}</span>
                        </div>
                        <p className="text-sm text-zinc-700 leading-relaxed font-normal">
                          {parsed.whatText}
                        </p>
                      </div>
                    ) : (
                      <div
                        className="text-sm text-zinc-600 leading-relaxed mb-4 flex-1"
                        dangerouslySetInnerHTML={{ __html: item.description }}
                      />
                    )}

                    {/* Why it matters for Pakistani businesses */}
                    {parsed.hasSplit && (
                      <div className="mt-auto bg-[#f4faf8] border border-[#25a18e]/25 rounded-xl p-3.5 sm:p-4">
                        <div className="text-[12px] font-bold text-[#209f8f] mb-1 flex items-center gap-1.5">
                          <CheckCircle2 className="w-4 h-4 shrink-0 text-[#25a18e]" />
                          <span>{parsed.whyLabel}</span>
                        </div>
                        <p className="text-xs sm:text-[13px] text-zinc-700 leading-relaxed font-medium">
                          {parsed.whyText}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </Container>
        </Section>
      )}

      {/* 5. Dashboard Preview */}
      {dashboardPreview && (
        <Section className="py-20 lg:py-28 bg-white text-center">
          <Container>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-semibold text-gray-900 tracking-tight leading-tight mb-4">
              {dashboardPreview.heading}
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto mb-12 lg:mb-16 leading-relaxed font-normal">
              {dashboardPreview.subheading}
            </p>
            <DashboardCarousel slides={dashboardPreview.slides || []} />
          </Container>
        </Section>
      )}

      {/* 6. Benefits */}
      {benefits && (
        <Section className="py-20 lg:py-28 bg-[#f8faf9] border-y border-[#EBECEF]">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div className="flex justify-center items-center">
                <img
                  src={benefits.image || "/images/home/hulm-section-4.png"}
                  alt={benefits.heading}
                  className="w-full max-w-md lg:max-w-xl h-auto object-contain drop-shadow-sm hover:scale-[1.02] transition-transform duration-300"
                />
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-semibold text-[#152825] tracking-tight leading-[1.2]">
                  {benefits.heading}
                </h2>
                <p className="text-base sm:text-lg text-zinc-600 leading-relaxed font-normal">
                  {benefits.subheading}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3.5 pt-2">
                  {benefits.list?.map((li: string, i: number) => (
                    <div key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#209f8f] shrink-0 mt-0.5" />
                      <span className="text-sm sm:text-[14.5px] text-zinc-700 leading-relaxed font-normal">
                        {li}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </Section>
      )}

      {/* 7. FBR Compliance */}
      {fbrCompliance && (
        <Section className="py-24 bg-white">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div className="space-y-6">
                {fbrCompliance.boxes?.map((box: any, i: number) => (
                  <div key={i} className="border-l-4 border-[#25a18e] bg-gray-50 p-6">
                    <h3 className="text-[#25a18e] font-semibold text-lg mb-2">{box.title}</h3>
                    <p className="text-gray-600 text-sm whitespace-pre-line">{box.content}</p>
                  </div>
                ))}
              </div>
              <div className="space-y-8 flex flex-col justify-center">
                <h2 className="text-3xl lg:text-4xl font-semibold text-gray-900">{fbrCompliance.heading}</h2>
                <p className="text-gray-600 whitespace-pre-line leading-relaxed">{fbrCompliance.subheading}</p>
                <Button className="bg-[#25a18e] hover:bg-[#1b7a6c] text-white w-fit px-8 h-12 shadow-lg shadow-[#25a18e]/30">
                  {fbrCompliance.cta?.label}
                </Button>
              </div>
            </div>
          </Container>
        </Section>
      )}

      {/* 8. Comparison Table */}
      {compTable && (
        <Section className="py-24 bg-gray-50">
          <Container>
            <div className="text-center max-w-4xl mx-auto mb-16">
              <h2 className="text-3xl lg:text-4xl font-semibold text-gray-900 mb-6">{compTable.heading}</h2>
              <p className="text-gray-600">{compTable.subheading}</p>
            </div>
            
            <div className="overflow-x-auto bg-white rounded-xl border border-gray-100 shadow-sm">
              <table className="w-full text-left border-collapse min-w-[800px]">
                <thead>
                  <tr>
                    <th className="py-6 px-6 font-semibold text-gray-900 w-1/4 border-b border-gray-100">{compTable.headers[0]}</th>
                    <th className="py-6 px-6 font-bold text-white bg-[#25a18e] text-center border-b border-[#25a18e]">{compTable.headers[1]}</th>
                    <th className="py-6 px-6 font-semibold text-gray-900 text-center border-b border-gray-100 bg-gray-50">{compTable.headers[2]}</th>
                    <th className="py-6 px-6 font-semibold text-gray-900 text-center border-b border-gray-100">{compTable.headers[3]}</th>
                    <th className="py-6 px-6 font-semibold text-gray-900 text-center border-b border-gray-100 bg-gray-50">{compTable.headers[4]}</th>
                  </tr>
                </thead>
                <tbody>
                  {compTable.rows?.map((row: any, i: number) => (
                    <tr key={i} className="border-b border-gray-100 last:border-0 hover:bg-gray-50/50">
                      <td className="py-5 px-6 text-sm font-medium text-gray-900">{row.feature}</td>
                      <td className="py-5 px-6 text-center text-sm font-bold text-[#25a18e]">
                        {row.hulm === "yes" ? <Check className="w-5 h-5 mx-auto" /> : row.hulm}
                      </td>
                      <td className="py-5 px-6 text-center text-sm text-gray-600 bg-gray-50/50">
                        {row.local === "yes" ? <Check className="w-5 h-5 mx-auto text-gray-400" /> : row.local === "no" ? <X className="w-5 h-5 mx-auto text-gray-300" /> : row.local}
                      </td>
                      <td className="py-5 px-6 text-center text-sm text-gray-600">
                        {row.global === "yes" ? <Check className="w-5 h-5 mx-auto text-gray-400" /> : row.global === "no" ? <X className="w-5 h-5 mx-auto text-gray-300" /> : row.global}
                      </td>
                      <td className="py-5 px-6 text-center text-sm text-gray-600 bg-gray-50/50">
                        {row.basic === "yes" ? <Check className="w-5 h-5 mx-auto text-gray-400" /> : row.basic === "no" ? <X className="w-5 h-5 mx-auto text-gray-300" /> : row.basic}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Container>
        </Section>
      )}

      {/* 9. Why Choose Hulm Points */}
      {whyPoints && (
        <Section className="py-20 lg:py-28 bg-[#f8faf9] border-y border-[#EBECEF]">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
              {/* Left Column */}
              <div className="lg:col-span-5 space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#25a18e]/10 text-[#209f8f] text-xs sm:text-sm font-semibold border border-[#25a18e]/20">
                  <Sparkles className="w-3.5 h-3.5 text-[#25a18e]" />
                  <span>The Hulm Advantage</span>
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-semibold text-[#152825] tracking-tight leading-[1.2]">
                  {whyPoints.heading}
                </h2>
                <p className="text-base sm:text-lg text-zinc-600 leading-relaxed font-normal">
                  {whyPoints.content}
                </p>

                {/* Trust Highlights */}
                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div className="bg-white p-4 rounded-2xl border border-[#EBECEF] shadow-xs">
                    <p className="text-2xl font-bold text-[#209f8f]">100%</p>
                    <p className="text-xs text-zinc-500 mt-0.5 font-medium">Cloud Accessibility & Sync</p>
                  </div>
                  <div className="bg-white p-4 rounded-2xl border border-[#EBECEF] shadow-xs">
                    <p className="text-2xl font-bold text-[#209f8f]">24/7</p>
                    <p className="text-xs text-zinc-500 mt-0.5 font-medium">Local WhatsApp Support</p>
                  </div>
                </div>
              </div>

              {/* Right Column - 15 Points */}
              <div className="lg:col-span-7">
                <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#EBECEF] shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_32px_rgba(37,161,142,0.06)] transition-shadow">
                  <div className="flex items-center gap-3 mb-6 pb-5 border-b border-zinc-100">
                    <div className="w-10 h-10 rounded-xl bg-[#25a18e]/10 text-[#25a18e] flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold text-[#152825]">
                        {whyPoints.pointsHeading}
                      </h3>
                      <p className="text-xs text-zinc-400 font-normal">Everything included in your single subscription</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {whyPoints.points?.map((pt: string, i: number) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl bg-[#f8faf9] hover:bg-[#f0f9f6] border border-[#25a18e]/10 hover:border-[#25a18e]/30 transition-all duration-200 group"
                      >
                        <div className="w-5 h-5 rounded-full bg-[#25a18e]/15 text-[#25a18e] flex items-center justify-center shrink-0 group-hover:bg-[#25a18e] group-hover:text-white transition-colors">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                        <span className="text-xs sm:text-[13.5px] text-zinc-700 font-medium group-hover:text-[#152825] transition-colors leading-tight">
                          {pt}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </Section>
      )}

      {/* 10. Industries */}
      {industries && (
        <Section className="py-20 lg:py-28 bg-white border-t border-zinc-100">
          <Container>
            <div className="text-center max-w-4xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-semibold text-[#152825] mb-5 tracking-tight">
                {industries.heading}
              </h2>
              <p className="text-zinc-600 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto font-normal">
                {industries.subheading}
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5 sm:gap-6">
              {industries.items?.map((ind: string, i: number) => {
                const meta = industryMeta[ind] || { icon: Store, href: "/industries/" };
                const IconComponent = meta.icon;
                return (
                  <Link
                    key={i}
                    href={meta.href}
                    className="group bg-white border border-[#EBECEF] rounded-[22px] p-6 text-center flex flex-col items-center justify-center gap-4 hover:-translate-y-1.5 hover:shadow-[0_10px_30px_rgba(37,161,142,0.12)] hover:border-[#25a18e]/50 transition-all duration-300 cursor-pointer shadow-[0_2px_12px_rgba(0,0,0,0.02)]"
                  >
                    <div className="w-14 h-14 rounded-full bg-[#25a18e]/10 text-[#25a18e] flex items-center justify-center group-hover:bg-[#25a18e] group-hover:text-white transition-all duration-300">
                      <IconComponent className="w-6 h-6 stroke-[1.8]" />
                    </div>
                    <span className="text-[13px] sm:text-sm font-bold text-[#152825] group-hover:text-[#25a18e] transition-colors leading-snug">
                      {ind}
                    </span>
                  </Link>
                );
              })}
            </div>
          </Container>
        </Section>
      )}

      {/* 11. Timeline */}
      {timeline && (
        <Section className="py-20 lg:py-28 bg-[#f8faf9] border-t border-zinc-100">
          <Container>
            <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#25a18e]/10 text-[#209f8f] text-xs sm:text-sm font-semibold mb-4 border border-[#25a18e]/20">
                <Clock className="w-3.5 h-3.5 text-[#25a18e]" />
                <span>Zero Downtime Onboarding</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-semibold text-[#152825] tracking-tight leading-[1.2] mb-4">
                {timeline.heading}
              </h2>
              <p className="text-base sm:text-lg text-zinc-600 leading-relaxed font-normal mb-6 max-w-2xl mx-auto">
                {timeline.subheading}
              </p>
              {timeline.cta && (
                <Button
                  asChild
                  className="bg-[#209f8f] hover:bg-[#1a8578] text-white px-7 h-11 rounded-xl text-sm sm:text-base font-semibold shadow-sm transition-all inline-flex items-center gap-2"
                >
                  <Link href={timeline.cta.href || "#demo"}>
                    <Play className="w-4 h-4 fill-white" />
                    <span>{timeline.cta.label}</span>
                  </Link>
                </Button>
              )}
            </div>

            {/* 3 Step Process Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 relative">
              {timeline.steps?.map((step: any, i: number) => {
                const stepIcons = [UserPlus, LayoutGrid, Zap];
                const IconComponent = stepIcons[i] || Zap;
                return (
                  <div
                    key={i}
                    className="relative bg-white rounded-2xl p-7 sm:p-8 border border-[#EBECEF] hover:border-[#25a18e]/40 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_32px_rgba(37,161,142,0.08)] hover:-translate-y-1.5 transition-all duration-300 group flex flex-col justify-between"
                  >
                    <div>
                      {/* Top Row: Icon + Number Badge */}
                      <div className="flex items-center justify-between mb-6">
                        <div className="w-12 h-12 rounded-2xl bg-[#25a18e]/10 text-[#25a18e] group-hover:bg-[#25a18e] group-hover:text-white transition-all duration-300 flex items-center justify-center shrink-0">
                          <IconComponent className="w-6 h-6 stroke-[1.8]" />
                        </div>
                        <span className="text-xs font-mono font-bold text-[#209f8f] bg-[#25a18e]/10 px-3 py-1 rounded-full">
                          Step 0{i + 1}
                        </span>
                      </div>

                      {/* Step Title */}
                      <h3 className="text-lg sm:text-xl font-semibold text-[#152825] group-hover:text-[#209f8f] transition-colors mb-3">
                        {step.step}
                      </h3>

                      {/* Step Description */}
                      <p className="text-sm text-zinc-600 leading-relaxed font-normal">
                        {step.desc}
                      </p>
                    </div>

                    {/* Bottom visual accent line */}
                    <div className="mt-6 pt-5 border-t border-zinc-100 flex items-center justify-between text-xs text-zinc-400 font-medium">
                      <span>{i === 0 ? "Takes 30 seconds" : i === 1 ? "Instant access" : "Ready to bill"}</span>
                      <span className="w-2 h-2 rounded-full bg-[#25a18e]" />
                    </div>
                  </div>
                );
              })}
            </div>
          </Container>
        </Section>
      )}

      {/* 12. Google Reviews & Testimonials */}
      <GoogleReviewsSection
        heading={testimonialsHeader?.heading}
        subheading={testimonialsHeader?.subheading}
      />

      {/* 13. Trusted Logos Slider */}
      {trustedLogos && (() => {
        const allLogos = trustedLogos.logos || [];
        const midPoint = Math.ceil(allLogos.length / 2);
        const row1 = allLogos.slice(0, midPoint);
        const row2 = allLogos.slice(midPoint);
        const row1Items = [...row1, ...row1, ...row1, ...row1];
        const row2Items = [...row2, ...row2, ...row2, ...row2];

        return (
          <Section className="py-16 sm:py-20 lg:py-24 bg-white text-center border-t border-gray-100 overflow-hidden">
            <Container className="max-w-6xl">
              <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-semibold text-gray-900 tracking-tight leading-tight">
                {trustedLogos.heading}
              </h2>
              <p className="text-sm sm:text-base text-gray-600 max-w-2xl sm:max-w-3xl mx-auto mt-3 sm:mt-4 leading-relaxed font-normal">
                {trustedLogos.subheading}
              </p>
            </Container>

            {/* Continuous Dual-Direction Infinite Slider */}
            <div className="w-full mt-10 sm:mt-14 space-y-4 sm:space-y-6 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
              {/* Row 1: Sliding Left */}
              <div className="animate-marquee-left flex items-center gap-5 sm:gap-8">
                {row1Items.map((logo: any, i: number) => {
                  const src = typeof logo === "string" ? logo : logo.image;
                  const alt = typeof logo === "string" ? `Client Logo ${i + 1}` : logo.name;
                  return (
                    <div
                      key={`r1-${i}`}
                      className="shrink-0 min-w-[160px] sm:min-w-[200px] h-16 sm:h-20 px-5 py-2.5 rounded-2xl bg-white border border-gray-100 hover:border-[#25a18e]/40 shadow-[0_2px_8px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_20px_rgba(37,161,142,0.08)] hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center group cursor-pointer"
                    >
                      <img
                        src={src}
                        alt={alt}
                        loading="lazy"
                        className="max-h-10 sm:max-h-12 w-auto max-w-[130px] sm:max-w-[160px] object-contain opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                      />
                    </div>
                  );
                })}
              </div>

              {/* Row 2: Sliding Right */}
              <div className="animate-marquee-right flex items-center gap-5 sm:gap-8">
                {row2Items.map((logo: any, i: number) => {
                  const src = typeof logo === "string" ? logo : logo.image;
                  const alt = typeof logo === "string" ? `Client Logo ${i + 1}` : logo.name;
                  return (
                    <div
                      key={`r2-${i}`}
                      className="shrink-0 min-w-[160px] sm:min-w-[200px] h-16 sm:h-20 px-5 py-2.5 rounded-2xl bg-white border border-gray-100 hover:border-[#25a18e]/40 shadow-[0_2px_8px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_20px_rgba(37,161,142,0.08)] hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center group cursor-pointer"
                    >
                      <img
                        src={src}
                        alt={alt}
                        loading="lazy"
                        className="max-h-10 sm:max-h-12 w-auto max-w-[130px] sm:max-w-[160px] object-contain opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </Section>
        );
      })()}

      {/* 14. FAQ */}
      {faq && (
        <Section className="py-24 bg-gray-50">
          <Container>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-semibold text-gray-900 mb-4">{faq.heading}</h2>
              <p className="text-gray-600 mb-10">{faq.subheading}</p>
              <SiteFaqAccordion items={faq.items} defaultOpenIndex={0} />
            </div>
          </Container>
        </Section>
      )}

      {/* 15. Final CTA Split */}
      {finalCta && (
        <Section className="py-20 lg:py-28 relative overflow-hidden bg-gradient-to-br from-[#1b7f70] via-[#209f8f] to-[#16695d]">
          {/* Subtle Background POS Equipment Pattern */}
          <div
            className="absolute inset-0 opacity-[0.08] pointer-events-none bg-repeat bg-center"
            style={{
              backgroundImage: "url('/images/home/cta-bg-pattern.png')",
              backgroundSize: "600px",
            }}
          />

          {/* Ambient Radial Lighting Glows */}
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-black/15 rounded-full blur-3xl pointer-events-none" />

          <Container className="relative z-10 max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Left Column: Value Prop & Trust */}
              <div className="lg:col-span-6 text-white space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md text-white text-xs sm:text-sm font-semibold border border-white/20 shadow-xs">
                  <Sparkles className="w-4 h-4 text-emerald-200" />
                  <span>Start Growing Today — Zero Risk</span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-semibold text-white tracking-tight leading-[1.15]">
                  {finalCta.heading}
                </h2>

                <p className="text-base sm:text-lg text-white/90 leading-relaxed font-normal max-w-xl">
                  {finalCta.subheading}
                </p>

                {/* Key Benefits Checklist */}
                <div className="pt-2 space-y-3">
                  <div className="flex items-center gap-3 text-sm sm:text-base text-white/95 font-medium">
                    <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 text-white stroke-[2.5]" />
                    </div>
                    <span>Full access to all 10+ business modules</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm sm:text-base text-white/95 font-medium">
                    <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 text-white stroke-[2.5]" />
                    </div>
                    <span>Automatic FBR-compliant digital invoicing</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm sm:text-base text-white/95 font-medium">
                    <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 text-white stroke-[2.5]" />
                    </div>
                    <span>Free onboarding support via WhatsApp & Call</span>
                  </div>
                </div>

                {/* Social Proof Stat */}
                <div className="pt-4 border-t border-white/15 flex items-center gap-3">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-emerald-700 border-2 border-white flex items-center justify-center text-[10px] font-bold text-white">AK</div>
                    <div className="w-8 h-8 rounded-full bg-teal-800 border-2 border-white flex items-center justify-center text-[10px] font-bold text-white">MR</div>
                    <div className="w-8 h-8 rounded-full bg-emerald-600 border-2 border-white flex items-center justify-center text-[10px] font-bold text-white">FN</div>
                  </div>
                  <div className="text-xs sm:text-sm text-white/90">
                    <span className="font-semibold text-white">Join 500+ businesses</span> across Pakistan running on Hulm
                  </div>
                </div>
              </div>

              {/* Right Column: Modern High-Converting Form Card */}
              <div className="lg:col-span-6">
                <FinalCtaForm
                  formHeading={finalCta.formHeading}
                  formSubheading={finalCta.formSubheading}
                />
              </div>
            </div>
          </Container>
        </Section>
      )}
    </>
  );
}
