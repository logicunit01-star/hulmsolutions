import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import {
  Sparkles,
  ShieldCheck,
  Zap,
  Globe2,
  Cpu,
  CheckCircle2,
  ArrowRight,
  ChevronRight,
  Store,
  Factory,
  Armchair,
  Coffee,
  Gamepad2,
  Gem,
  Lightbulb,
  Cake,
  Scissors,
  Shirt,
  Utensils,
  Pill,
} from "lucide-react";
import { IndustriesGrid, IndustryCardItem } from "@/components/industries/industries-grid";
import { IndustriesFaq } from "@/components/industries/industries-faq";
import { GoogleReviewsSection } from "@/components/home/GoogleReviewsSection";
import { FinalCta } from "@/components/home/final-cta";

export const metadata: Metadata = {
  title: "POS Software for All Industries | Point of Sale Systems | Hulm",
  description:
    "Hulm Solutions provides POS systems for retail, restaurants, salons, pharmacies, cafes and all industries to streamline your operations.",
};

const industriesList: IndustryCardItem[] = [
  {
    slug: "manufacturing-industries",
    name: "Manufacturing Industry",
    title: "POS For Manufacturing Industry",
    category: "Specialty & Luxury",
    description:
      "Discover how POS systems can help the manufacturing industry streamline operations and optimize workflows.",
    image: "/images/industries/manufacturing.jpg",
    highlights: ["Raw Materials vs Finished Goods", "BOM & Unit Cost Automation", "Automated FBR Tax Reporting"],
  },
  {
    slug: "furniture-store",
    name: "Furniture Store",
    title: "POS For Furniture Store",
    category: "Specialty & Luxury",
    description:
      "Discover how POS systems can help the furniture store streamline operations and optimize workflows.",
    image: "/images/industries/furniture.jpg",
    highlights: ["Multi-Piece Set Tracking", "Custom Build Milestones", "Showroom vs Warehouse Sync"],
  },
  {
    slug: "cafe",
    name: "Cafe",
    title: "POS For Cafe",
    category: "Food & Beverage",
    description:
      "Discover how POS systems can help the cafe streamline operations and optimize workflows.",
    image: "/images/industries/cafe.jpg",
    highlights: ["1-Touch Fast Modifiers", "Sub-Second Ticket Routing", "Bean & Milk Recipe Depletion"],
  },
  {
    slug: "toys-store",
    name: "Toys Store",
    title: "POS For Toys Store",
    category: "Retail & Boutiques",
    description:
      "Discover how POS systems can help the toys store streamline operations and optimize workflows.",
    image: "/images/industries/toys.jpg",
    highlights: ["1-Click Barcode Generator", "Age & Brand Filtering", "Hassle-Free Gift Exchanges"],
  },
  {
    slug: "jewellery-shop",
    name: "Jewelry Shop",
    title: "POS For Jewelry Shop",
    category: "Specialty & Luxury",
    description:
      "Discover how POS systems can help the jewelry shop streamline operations and optimize workflows.",
    image: "/images/industries/jewelry.jpg",
    highlights: ["Dynamic Daily Gold Board", "Net Weight & Making Charges", "Appraisal Certificate Logging"],
  },
  {
    slug: "electric-store",
    name: "Electric Store",
    title: "POS For Electric Store",
    category: "Specialty & Luxury",
    description:
      "Discover how POS systems can help the electric store streamline operations and optimize workflows.",
    image: "/images/industries/electric.jpg",
    highlights: ["Fractional Units (Meter/Roll)", "Serialized Appliance Warranty", "Contractor Credit Ledgers"],
  },
  {
    slug: "bakery-pos-system",
    name: "Bakery",
    title: "POS For Bakery",
    category: "Food & Beverage",
    description:
      "Discover how POS systems can help the bakery streamline operations and optimize workflows.",
    image: "/images/industries/bakery.jpg",
    highlights: ["Custom Cake Booking Studio", "Integrated Weighing Scale", "Fresh Batch Expiry Markdown"],
  },
  {
    slug: "salon-pos",
    name: "Salon / Spa",
    title: "POS For Salon/Spa",
    category: "Healthcare & Services",
    description:
      "Discover how POS systems can help the salon/spa streamline operations and optimize workflows.",
    image: "/images/industries/salon.jpg",
    highlights: ["Visual Appointment Calendar", "Automatic Stylist Commissions", "Client Color Formula Cards"],
  },
  {
    slug: "clothing-store",
    name: "Clothing Store",
    title: "POS For Clothing Store",
    category: "Retail & Boutiques",
    description:
      "Explore top POS solutions for fashion retailers to optimize sales, track inventory, and improve customer service.",
    image: "/images/industries/clothing.jpg",
    highlights: ["Deep Size/Color Variant Matrix", "Apparel Hangtag Printing", "Instant In-Store Exchanges"],
  },
  {
    slug: "restaurant-pos",
    name: "Restaurant",
    title: "POS For Restaurants",
    category: "Food & Beverage",
    description:
      "Explore how the right POS system can improve restaurant operations, speed, and customer satisfaction.",
    image: "/images/industries/restaurant.jpg",
    highlights: ["Interactive Table Floor Plan", "Station-Specific KOT Routing", "1-Tap Split Bill Calculator"],
  },
  {
    slug: "pharmacy-store",
    name: "Pharmacy Store",
    title: "POS For Pharmacies",
    category: "Healthcare & Services",
    description:
      "Discover how POS systems can help pharmacies manage prescriptions, customer data, and billing more efficiently.",
    image: "/images/industries/pharmacy.jpg",
    highlights: ["Automated Expiry Alerts", "Generic Salt Composition Search", "Blister Pack & Box Conversion"],
  },
  {
    slug: "retail-store",
    name: "Retail Store",
    title: "POS For Retail Stores",
    category: "Retail & Boutiques",
    description:
      "Discover the best POS systems tailored for retail stores to streamline sales, inventory, and customer management.",
    image: "/images/industries/retail.jpg",
    highlights: ["Sub-Second Lane Scanning", "Multi-Store Chain Sync", "Smart Reorder Thresholds"],
  },
];

const checklistColumns = [
  [
    { name: "Manufacturing Industry", slug: "manufacturing-industries" },
    { name: "Furniture Store", slug: "furniture-store" },
    { name: "Food / Cafe", slug: "cafe" },
    { name: "Toys Store", slug: "toys-store" },
  ],
  [
    { name: "Jewelry Shop", slug: "jewellery-shop" },
    { name: "Electric Store", slug: "electric-store" },
    { name: "Bakery", slug: "bakery-pos-system" },
    { name: "Salon / Spa", slug: "salon-pos" },
  ],
  [
    { name: "Fashion Boutique", slug: "clothing-store" },
    { name: "Restaurant", slug: "restaurant-pos" },
    { name: "Pharmacy", slug: "pharmacy-store" },
    { name: "Retail Store", slug: "retail-store" },
  ],
];

export default function IndustriesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* SECTION 1: HERO BANNER (Verbatim Live Content) */}
      <section className="relative w-full py-16 sm:py-24 bg-gradient-to-br from-[#1b7f70] via-[#209f8f] to-[#16695d] text-white text-center overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.08] pointer-events-none bg-repeat bg-center"
          style={{
            backgroundImage: "url('/images/home/cta-bg-pattern.png')",
            backgroundSize: "600px",
          }}
        />
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-black/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md text-white text-xs font-semibold uppercase tracking-widest border border-white/20 shadow-xs mb-5">
            <Sparkles className="w-3.5 h-3.5 text-[#55dfcc]" />
            <span>Vertical-Specific Solutions</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white mb-6 leading-tight">
            HulmPOS Software for All POS Industries
          </h1>

          <p className="text-base sm:text-xl text-white/90 font-normal leading-relaxed max-w-3xl mx-auto mb-8">
            Hulm Solutions provides POS systems for retail, restaurants, salons, pharmacies, cafes and all industries to streamline your operations.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto h-12 px-8 rounded-xl font-semibold text-base bg-white text-[#152825] hover:bg-white/90 shadow-md transition-all active:scale-[0.98]"
            >
              <Link href="https://app.hulmsolutions.com/Register">
                Start for free
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="w-full sm:w-auto h-12 px-8 rounded-xl font-semibold text-base bg-transparent border-white/30 text-white hover:bg-white/10 transition-colors"
            >
              <Link href="https://wa.me/923391119259" target="_blank" rel="noopener noreferrer">
                Connect with sales team
              </Link>
            </Button>
          </div>
        </div>

        {/* Floating Value Badges */}
        <div className="relative z-10 mt-12 pt-8 border-t border-white/15 max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="bg-white/10 backdrop-blur-xs p-3.5 rounded-xl border border-white/10">
              <div className="text-lg sm:text-xl font-bold text-[#55dfcc]">12+ Verticals</div>
              <div className="text-xs text-white/80">Tailored Feature Sets</div>
            </div>
            <div className="bg-white/10 backdrop-blur-xs p-3.5 rounded-xl border border-white/10">
              <div className="text-lg sm:text-xl font-bold text-[#55dfcc]">100% Compliant</div>
              <div className="text-xs text-white/80">FBR & ZATCA Certified</div>
            </div>
            <div className="bg-white/10 backdrop-blur-xs p-3.5 rounded-xl border border-white/10">
              <div className="text-lg sm:text-xl font-bold text-[#55dfcc]">&lt; 3 Seconds</div>
              <div className="text-xs text-white/80">Sub-Second Checkout</div>
            </div>
            <div className="bg-white/10 backdrop-blur-xs p-3.5 rounded-xl border border-white/10">
              <div className="text-lg sm:text-xl font-bold text-[#55dfcc]">Multi-Store</div>
              <div className="text-xs text-white/80">Unified Cloud Sync</div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: HULM POS INDUSTRIES (Verbatim Live Content & 3-Column Checklist) */}
      <Section className="py-20 sm:py-28 bg-white border-b border-gray-100">
        <Container>
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-[#209f8f]/10 border border-[#209f8f]/20 text-xs font-semibold text-[#209f8f] uppercase tracking-wider shadow-xs">
                Comprehensive Coverage
              </div>
              <h2 className="text-2xl sm:text-4xl font-semibold text-[#152825] tracking-tight leading-tight">
                Hulm POS Industries
              </h2>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed font-normal">
                Hulm Solutions brings the most advanced POS systems solutions across industries like retail, restaurants, hospitality, and health care, which increases the volume of sales, supplies, and excellent customer satisfaction scores efficiently.
              </p>

              {/* 3-Column Checklist from Live Site */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                {checklistColumns.map((col, colIdx) => (
                  <div key={colIdx} className="space-y-3">
                    {col.map((item, itemIdx) => (
                      <Link
                        key={itemIdx}
                        href={`/industries/${item.slug}`}
                        className="flex items-center gap-2 text-sm text-gray-700 hover:text-[#209f8f] font-medium transition-colors group"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#209f8f] shrink-0 group-hover:scale-110 transition-transform" />
                        <span>{item.name}</span>
                      </Link>
                    ))}
                  </div>
                ))}
              </div>

              <div className="pt-6">
                <Button
                  asChild
                  className="bg-[#209f8f] hover:bg-[#1a8578] text-white font-semibold text-sm h-11 px-6 rounded-xl shadow-xs transition-colors"
                >
                  <Link href="https://app.hulmsolutions.com/Register">
                    Get Started with HulmPOS
                  </Link>
                </Button>
              </div>
            </div>

            {/* Visual Industry Showcase Grid */}
            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden border border-gray-200/80 shadow-lg bg-gradient-to-br from-[#F8FAF9] to-[#EBF5F3] p-8 sm:p-10">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  <div className="bg-white p-4 rounded-2xl border border-gray-200/60 shadow-xs flex flex-col items-center text-center">
                    <div className="w-10 h-10 rounded-xl bg-[#209f8f]/10 text-[#209f8f] flex items-center justify-center mb-2.5">
                      <Store className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-semibold text-[#152825]">Retail</span>
                  </div>
                  <div className="bg-white p-4 rounded-2xl border border-gray-200/60 shadow-xs flex flex-col items-center text-center">
                    <div className="w-10 h-10 rounded-xl bg-[#209f8f]/10 text-[#209f8f] flex items-center justify-center mb-2.5">
                      <Utensils className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-semibold text-[#152825]">Restaurant</span>
                  </div>
                  <div className="bg-white p-4 rounded-2xl border border-gray-200/60 shadow-xs flex flex-col items-center text-center">
                    <div className="w-10 h-10 rounded-xl bg-[#209f8f]/10 text-[#209f8f] flex items-center justify-center mb-2.5">
                      <Coffee className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-semibold text-[#152825]">Cafe</span>
                  </div>
                  <div className="bg-white p-4 rounded-2xl border border-gray-200/60 shadow-xs flex flex-col items-center text-center">
                    <div className="w-10 h-10 rounded-xl bg-[#209f8f]/10 text-[#209f8f] flex items-center justify-center mb-2.5">
                      <Pill className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-semibold text-[#152825]">Pharmacy</span>
                  </div>
                  <div className="bg-white p-4 rounded-2xl border border-gray-200/60 shadow-xs flex flex-col items-center text-center">
                    <div className="w-10 h-10 rounded-xl bg-[#209f8f]/10 text-[#209f8f] flex items-center justify-center mb-2.5">
                      <Scissors className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-semibold text-[#152825]">Salon / Spa</span>
                  </div>
                  <div className="bg-white p-4 rounded-2xl border border-gray-200/60 shadow-xs flex flex-col items-center text-center">
                    <div className="w-10 h-10 rounded-xl bg-[#209f8f]/10 text-[#209f8f] flex items-center justify-center mb-2.5">
                      <Shirt className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-semibold text-[#152825]">Clothing</span>
                  </div>
                  <div className="bg-white p-4 rounded-2xl border border-gray-200/60 shadow-xs flex flex-col items-center text-center">
                    <div className="w-10 h-10 rounded-xl bg-[#209f8f]/10 text-[#209f8f] flex items-center justify-center mb-2.5">
                      <Cake className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-semibold text-[#152825]">Bakery</span>
                  </div>
                  <div className="bg-white p-4 rounded-2xl border border-gray-200/60 shadow-xs flex flex-col items-center text-center">
                    <div className="w-10 h-10 rounded-xl bg-[#209f8f]/10 text-[#209f8f] flex items-center justify-center mb-2.5">
                      <Gem className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-semibold text-[#152825]">Jewelry</span>
                  </div>
                  <div className="bg-white p-4 rounded-2xl border border-gray-200/60 shadow-xs flex flex-col items-center text-center">
                    <div className="w-10 h-10 rounded-xl bg-[#209f8f]/10 text-[#209f8f] flex items-center justify-center mb-2.5">
                      <Factory className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-semibold text-[#152825]">Manufacturing</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 3: INDUSTRIES WE SERVE (12 Verbatim Live Cards) */}
      <Section className="py-20 sm:py-28 bg-[#F8FAF9]">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-white border border-gray-200 text-xs font-semibold text-[#209f8f] uppercase tracking-wider mb-4 shadow-xs">
              Tailored Solutions
            </div>
            <h2 className="text-2xl sm:text-4xl font-semibold text-[#152825] mb-4 tracking-tight">
              Industries We Serve
            </h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed font-normal">
              We provide customized POS System designed for unique needs of businesses for any industry. Our focus is enhancing efficiency, improving customer experiences, and driving success with tailored strategies and advanced technologies.
            </p>
          </div>

          {/* Interactive Client-side Filter Grid with exact cards */}
          <IndustriesGrid items={industriesList} />
        </Container>
      </Section>

      {/* SECTION 4: INNOVATIVE SOLUTIONS FOR EVERY INDUSTRY */}
      <Section className="py-20 sm:py-28 bg-white border-t border-gray-100">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#209f8f]/10 border border-[#209f8f]/20 text-xs font-semibold text-[#209f8f] uppercase tracking-wider mb-4 shadow-xs">
              <Zap className="w-3.5 h-3.5" />
              <span>Advanced Infrastructure</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-semibold text-[#152825] mb-4 tracking-tight">
              Innovative Solutions for Every Industry
            </h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed font-normal">
              Unlock the power of tailored solutions designed to meet the unique needs of your business. Whether you’re in retail, hospitality, or any other sector, our POS system is engineered to streamline operations and boost efficiency.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
            <div className="bg-[#F8FAF9] p-7 rounded-2xl border border-gray-200/80 shadow-xs hover:border-[#209f8f]/40 hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#209f8f]/10 text-[#209f8f] flex items-center justify-center mb-5">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-base font-semibold text-[#152825] mb-2">
                100% Tax Compliant
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Pre-configured for FBR (Pakistan) and ZATCA (Saudi Arabia) electronic tax invoicing with verifiable digital QR codes.
              </p>
            </div>

            <div className="bg-[#F8FAF9] p-7 rounded-2xl border border-gray-200/80 shadow-xs hover:border-[#209f8f]/40 hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#209f8f]/10 text-[#209f8f] flex items-center justify-center mb-5">
                <Globe2 className="w-6 h-6" />
              </div>
              <h3 className="text-base font-semibold text-[#152825] mb-2">
                Multi-Store Cloud Sync
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Connect multiple branches and warehouses. View live inventory, balance sheets, and counter sales on any device.
              </p>
            </div>

            <div className="bg-[#F8FAF9] p-7 rounded-2xl border border-gray-200/80 shadow-xs hover:border-[#209f8f]/40 hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#209f8f]/10 text-[#209f8f] flex items-center justify-center mb-5">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-base font-semibold text-[#152825] mb-2">
                Offline Mode Shield
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Keep ringing up customer sales and printing kitchen tickets even if your internet connection drops unexpectedly.
              </p>
            </div>

            <div className="bg-[#F8FAF9] p-7 rounded-2xl border border-gray-200/80 shadow-xs hover:border-[#209f8f]/40 hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#209f8f]/10 text-[#209f8f] flex items-center justify-center mb-5">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-base font-semibold text-[#152825] mb-2">
                Hardware Compatibility
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Compatible with all thermal receipt printers, electronic weighing scales, barcode scanners, and cash drawers.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 5: CUSTOMER SUCCESS STORIES */}
      <section className="py-20 sm:py-28 bg-[#F8FAF9] border-t border-gray-100">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-white border border-gray-200 text-xs font-semibold text-[#209f8f] uppercase tracking-wider mb-4 shadow-xs">
              Client Feedback
            </div>
            <h2 className="text-2xl sm:text-4xl font-semibold text-[#152825] mb-4 tracking-tight">
              Customer Success Stories
            </h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed font-normal">
              Discover how our solutions have empowered businesses to reach their goals through real-life customer success stories. See the impact and growth achieved with us by their side.
            </p>
          </div>

          <GoogleReviewsSection />
        </Container>
      </section>

      {/* SECTION 6: FREQUENTLY ASKED QUESTIONS (Verbatim Live Content) */}
      <section className="py-20 sm:py-28 bg-white border-t border-gray-100">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-[#209f8f]/10 border border-[#209f8f]/20 text-xs font-semibold text-[#209f8f] uppercase tracking-wider mb-4 shadow-xs">
              Got Questions?
            </div>
            <h2 className="text-2xl sm:text-4xl font-semibold text-[#152825] mb-4 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              Get quick answers to common questions about our services and support in our FAQ section.
            </p>
          </div>

          <IndustriesFaq />
        </Container>
      </section>

      {/* SECTION 7: FINAL CTA (Verbatim Live Heading & Subtitle) */}
      <FinalCta
        heading="Ready to build your team’s dream ERP?"
        subheading="Start ringing up sales in minutes. No credit card required, instant setup, and 100% compliant invoicing."
      />
    </div>
  );
}

