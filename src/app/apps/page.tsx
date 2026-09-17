import { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  ShoppingCart, 
  Users, 
  Truck, 
  Building2, 
  LineChart, 
  Package, 
  Tractor, 
  ClipboardList, 
  Store, 
  Smartphone, 
  Check, 
  AlertCircle, 
  ShieldCheck, 
  Sparkles, 
  ChevronRight,
  Play,
  FileText,
  BarChart3,
  CheckCircle2,
  XCircle,
  HelpCircle,
  Layers,
  ArrowUpRight
} from "lucide-react";
import { SiteFaqAccordion } from "@/components/common/site-faq";
import { GoogleReviewsSection } from "@/components/home/GoogleReviewsSection";
import { FinalCta } from "@/components/home/final-cta";

export const metadata: Metadata = {
  title: "Best POS Software in Pakistan | All-in-One Business Suite - Hulm",
  description: "Start with POS and grow into a complete business suite. Connect inventory, purchase orders, vendors, customers, logistics, and FBR-compliant billing in one platform.",
};

const painPoints = [
  {
    title: "FBR Stress",
    description: "Every sale should generate a compliant invoice automatically. Manually filing invoices wastes hours and leaves you exposed to penalties."
  },
  {
    title: "Invisible Stock Losses",
    description: "If you do not know your exact stock in real time, you are losing money every day to theft, waste, and selling items you no longer have."
  },
  {
    title: "No Control Across Branches",
    description: "Managing two locations on different systems means you are always one step behind. You cannot see which branch is profitable without a full manual count."
  },
  {
    title: "Customer Data You Cannot Use",
    description: "Your regulars deserve to be recognised. Without a customer record, every sale is anonymous and every promotion is a guess."
  }
];

const ecosystemApps = [
  {
    title: "POS & Billing",
    slug: "mobile-pos",
    href: "/mobile-pos",
    icon: ShoppingCart,
    badge: "Core Platform",
    whatItDoes: "Process any sale in under 10 seconds on any device.",
    whyItMatters: "FBR-compliant invoice generated automatically with every transaction — zero manual filing"
  },
  {
    title: "Inventory Management",
    slug: "inventory-management",
    href: "/inventory-management",
    icon: Package,
    badge: "Real-Time Tracking",
    whatItDoes: "See exact stock levels across all locations in real time.",
    whyItMatters: "Stop selling items you don’t have. Stop buying items already in your store."
  },
  {
    title: "Purchase Orders",
    slug: "purchase-orders",
    href: "/purchase-orders",
    icon: ClipboardList,
    badge: "Procurement",
    whatItDoes: "Send supplier orders from inside Hulm, track every delivery.",
    whyItMatters: "Eliminate the WhatsApp back-and-forth with vendors. Every order tracked, every delivery confirmed."
  },
  {
    title: "Vendor Management",
    slug: "vendors-management",
    href: "/vendors-management",
    icon: Building2,
    badge: "Supplier Portal",
    whatItDoes: "Every supplier’s pricing history, orders, and contacts in one place.",
    whyItMatters: "Reorder in two minutes instead of twenty. Know which supplier is giving you the best rate."
  },
  {
    title: "Customer Management",
    slug: "customer-management",
    href: "/customer-management",
    icon: Users,
    badge: "CRM & Loyalty",
    whatItDoes: "Full purchase history and profile for every customer.",
    whyItMatters: "Know your regulars, what they buy, and when they last visited — without a separate CRM."
  },
  {
    title: "Order Management",
    slug: "order-management",
    href: "/order-management",
    icon: FileText,
    badge: "Fulfillment",
    whatItDoes: "Track every sale from placement to fulfilment.",
    whyItMatters: "See what is pending, what is late, and what needs your attention — before a customer complains."
  },
  {
    title: "Reporting & Analytics",
    slug: "reporting-module",
    href: "/reporting-module",
    icon: BarChart3,
    badge: "Intelligence",
    whatItDoes: "Sales, profit, branch performance, and trends on one screen.",
    whyItMatters: "Make decisions based on data, not gut feeling. See your best-selling item and busiest hour."
  },
  {
    title: "Logistics Management",
    slug: "logistics-management-software",
    href: "/logistics-management-software",
    icon: Truck,
    badge: "Fleet Dispatch",
    whatItDoes: "Manage drivers, vehicles, and deliveries on one map.",
    whyItMatters: "Know where every delivery is at any moment. Run your fleet without a second app."
  },
  {
    title: "Mobile POS",
    slug: "mobile-pos",
    href: "/mobile-pos",
    icon: Smartphone,
    badge: "Hardware-Free",
    whatItDoes: "Full POS from any smartphone or Android tablet.",
    whyItMatters: "No expensive POS terminal needed. Works everywhere in Pakistan, including areas with patchy internet."
  },
  {
    title: "Cattle Management",
    slug: "cattle-management-software",
    href: "/cattle-management-software",
    icon: Tractor,
    badge: "Specialized Suite",
    whatItDoes: "Livestock records, health tracking, and purchase/sale history.",
    whyItMatters: "Pakistan’s only business suite with a built-in cattle management module — purpose-built for livestock traders and farmers."
  },
  {
    title: "Website & Online Store",
    slug: "website",
    href: "/website",
    icon: Store,
    badge: "One-Click Ecommerce",
    whatItDoes: "Turn your entire inventory into an online store with one click.",
    whyItMatters: "Sell online without expensive developers. All orders flow directly into your POS."
  }
];

const benefitsList = [
  "Fast checkout and improved customer experience.",
  "Real-time inventory tracking to avoid stock issues.",
  "Monitors sales to optimize pricing and strategy.",
  "Simplified expense tracking for better budgeting.",
  "Efficient employee scheduling and performance monitoring.",
  "Strengthens vendor relationships with accurate records.",
  "Quick, error-free digital invoicing.",
  "Detailed reports for better decision-making.",
  "Manage multiple locations from one system.",
  "Fast service with a personalized touch for loyal customers."
];

const comparisonRows = [
  {
    feature: "FBR-compliant invoicing",
    hulm: "✓ Auto QR Invoicing",
    local: "✓",
    global: "✕ (No Pakistan support)",
    basic: "✓ (Basic)"
  },
  {
    feature: "Full business suite",
    hulm: "10+ integrated modules",
    local: "✕ (POS only)",
    global: "✕ (Multiple subscriptions)",
    basic: "Partial"
  },
  {
    feature: "Cattle management",
    hulm: "Only platform in PK",
    local: "✕",
    global: "✕",
    basic: "✕"
  },
  {
    feature: "Mobile POS",
    hulm: "✓ Any Android / iOS device",
    local: "✓ (Requires hardware)",
    global: "✓",
    basic: "Partial"
  },
  {
    feature: "Pricing (PKR/mo)",
    hulm: "2,500 / month",
    local: "Custom / High upfront",
    global: "USD-based ($50-$200+)",
    basic: "1,500+ (Limited)"
  },
  {
    feature: "Pakistan-based support",
    hulm: "WhatsApp + Call (7 days)",
    local: "✓",
    global: "✕ (Email only / Timezone lag)",
    basic: "✓"
  },
  {
    feature: "ZATCA (KSA) Support",
    hulm: "✓ Built-in",
    local: "✕",
    global: "✕",
    basic: "✕"
  }
];

const onboardingSteps = [
  {
    step: "01",
    title: "Create your free account",
    description: "Click ‘Start Free Trial’, enter your business name, industry, and contact details. Your account is created instantly."
  },
  {
    step: "02",
    title: "Select your apps, go live",
    description: "Verify your account through the email sent by Hulm support. Now log in, choose the apps you need — POS, inventory, vendors, or all of them. Everything is ready."
  },
  {
    step: "03",
    title: "First sale in under a minute",
    description: "Select the apps you want, then click ‘Continue’ for the system to set up your app."
  }
];

const industriesList = [
  { name: "Manufacturing Industry", href: "/industries/manufacturing-industries/" },
  { name: "Furniture Store", href: "/industries/furniture-store/" },
  { name: "Cafe Shop", href: "/industries/cafe/" },
  { name: "Toys Store", href: "/industries/toys-store/" },
  { name: "Jewellery Shop", href: "/industries/jewellery-shop/" },
  { name: "Electric Store", href: "/industries/electric-store/" },
  { name: "Bakery", href: "/industries/bakery/" },
  { name: "Salon / Spa", href: "/industries/salon-spa/" },
  { name: "Clothing Store", href: "/industries/clothing-store/" },
  { name: "Restaurant", href: "/industries/restaurant-pos/" },
  { name: "Pharmacy Store", href: "/industries/pharmacy-store/" },
  { name: "Retail Store", href: "/industries/retail-store/" }
];

const appsFaqs = [
  {
    question: "What is the best POS software in Pakistan?",
    answer: "For Pakistani SMEs, Hulm POS is consistently rated the top choice because it combines FBR-compliant invoicing, real-time inventory management, multi-location support, and an affordable price of PKR 2,500 per month — all in one platform. It serves 14 industries including restaurants, retail, pharmacies, bakeries, and salons."
  },
  {
    question: "How much does POS software cost in Pakistan?",
    answer: "POS software in Pakistan ranges from free (basic billing only) to PKR 25,000+ per year for enterprise systems. Hulm POS costs PKR 2,500 per month with a 14-day free trial, no setup fees, and no hidden charges. This makes it the most affordable full-featured POS system available for Pakistani businesses."
  },
  {
    question: "Is Hulm POS FBR compliant?",
    answer: "Yes. Hulm supports FBR compliance and helps businesses generate compliant invoices automatically. Once your business is registered with FBR — a process Hulm guides you through for free — every sale you process generates an FBR-compliant invoice with QR code and records the transaction. You do not need to file invoices manually for day-to-day transactions."
  },
  {
    question: "Can Hulm POS work on a mobile phone or tablet?",
    answer: "Yes. Hulm’s Mobile POS module runs on any Android smartphone or tablet — no dedicated POS hardware required. This is particularly useful for businesses in Pakistan where investing in a dedicated POS terminal may not be practical for every branch or counter."
  },
  {
    question: "Does Hulm support multiple branches or locations?",
    answer: "Yes. Hulm supports unlimited branch management from a single dashboard. You can see sales, stock levels, staff performance, and profitability for each location in real time — without calling managers or waiting for end-of-day reports."
  },
  {
    question: "What industries does Hulm POS serve?",
    answer: "Hulm serves 14 industries: restaurants, retail stores, bakeries, cafes, pharmacies, clothing stores, jewellery shops, electric stores, toy stores, salons and spas, manufacturing units, and livestock traders. Each industry module includes purpose-built features — not a generic screen with a different label."
  },
  {
    question: "Is there a free trial for Hulm POS?",
    answer: "Yes. Hulm offers a 14-day free trial with full access to all features — no credit card required. After the trial period, you continue for PKR 2,500 per month with no additional charges."
  },
  {
    question: "Can Hulm POS work offline?",
    answer: "Hulm is a cloud-based POS system designed for reliable internet connections available across Pakistan’s major cities. For areas with intermittent connectivity, the Mobile POS module is designed to handle low-bandwidth conditions."
  }
];

export default function AppsIndexPage() {
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
            <span className="text-white font-medium">
              Apps
            </span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column */}
            <div className="lg:col-span-7 flex flex-col items-start">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md text-white text-xs font-semibold uppercase tracking-wider border border-white/20 shadow-xs mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#55dfcc] animate-pulse" />
                <span>Start with POS · Grow into Complete Business Suite</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white mb-5 leading-tight">
                Best POS Software in Pakistan
              </h1>

              <p className="text-base sm:text-lg lg:text-xl text-white/90 font-normal leading-relaxed mb-8 max-w-2xl">
                Inventory, logistics, vendors, customers and more. One login. One platform. Built specifically for Pakistani businesses.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto">
                <Button
                  asChild
                  size="lg"
                  className="w-full sm:w-auto h-12 px-8 rounded-xl font-semibold text-base bg-white text-[#152825] hover:bg-white/90 shadow-md transition-all active:scale-[0.98]"
                >
                  <Link href="https://app.hulmsolutions.com/Register">
                    Start 14 Days Free Trial
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto h-12 px-8 rounded-xl font-semibold text-base bg-transparent border-white/30 text-white hover:bg-white/10 transition-colors"
                >
                  <Link href="https://www.youtube.com/watch?v=Fd6X_TPX9EA" target="_blank" rel="noopener noreferrer">
                    <Play className="w-4 h-4 mr-2 fill-white" />
                    Watch Demo Video
                  </Link>
                </Button>
              </div>

              {/* Trust badges */}
              <div className="mt-8 pt-6 border-t border-white/15 flex flex-wrap items-center gap-6 text-xs text-white/80">
                <div className="flex items-center gap-1.5">
                  <span className="font-semibold text-white">4.9/5</span> Google Rating
                </div>
                <div className="w-1 h-1 rounded-full bg-white/40" />
                <div className="flex items-center gap-1.5">
                  <span className="font-semibold text-white">4.0/5</span> Trustpilot
                </div>
                <div className="w-1 h-1 rounded-full bg-white/40" />
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#55dfcc]" />
                  <span>FBR Compliant Invoicing</span>
                </div>
              </div>
            </div>

            {/* Right Column Visual Graphic */}
            <div className="lg:col-span-5 flex items-center justify-center">
              <div className="w-full max-w-md bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-2xl relative overflow-hidden">
                <div className="flex items-center justify-between pb-6 border-b border-white/15">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center text-white font-bold">
                      H
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white">Hulm Business OS</div>
                      <div className="text-xs text-white/70">Unified SME Dashboard</div>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-[#55dfcc]/20 text-[#55dfcc] text-xs font-semibold border border-[#55dfcc]/30">
                    Live System
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 py-6">
                  <div className="p-3.5 rounded-2xl bg-white/10 border border-white/10">
                    <div className="text-xs text-white/70 mb-1">Active Modules</div>
                    <div className="text-2xl font-semibold text-white">10+ Apps</div>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-white/10 border border-white/10">
                    <div className="text-xs text-white/70 mb-1">Monthly Pricing</div>
                    <div className="text-2xl font-semibold text-white">PKR 2,500</div>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-white/10 border border-white/10">
                    <div className="text-xs text-white/70 mb-1">FBR Status</div>
                    <div className="text-sm font-semibold text-[#55dfcc] flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4" /> Auto Invoicing
                    </div>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-white/10 border border-white/10">
                    <div className="text-xs text-white/70 mb-1">Setup Speed</div>
                    <div className="text-sm font-semibold text-white flex items-center gap-1.5">
                      <Sparkles className="w-4 h-4 text-[#55dfcc]" /> Under 5 Mins
                    </div>
                  </div>
                </div>

                <div className="pt-2 text-center">
                  <Link 
                    href="https://app.hulmsolutions.com/Register"
                    className="inline-flex items-center text-xs font-semibold text-[#55dfcc] hover:text-white transition-colors"
                  >
                    Start your 14-day free trial now
                    <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. INEFFICIENCIES / PAIN POINTS SECTION */}
      <Section className="bg-white py-16 md:py-24 border-b border-gray-100">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-rose-50 border border-rose-200 text-xs font-semibold text-rose-600 uppercase tracking-wider mb-4 shadow-xs">
              Stop The Inefficiencies
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#152825] mb-4 tracking-tight">
              Still Managing Your Business on Excel, WhatsApp and Paper?
            </h2>
            <p className="text-base text-zinc-600 leading-relaxed">
              Disconnected tools cause daily financial leakages and waste hundreds of managerial hours.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {painPoints.map((item, idx) => (
              <div 
                key={idx}
                className="bg-[#F8FAF9] p-7 rounded-2xl border border-gray-200/80 shadow-xs hover:border-rose-200 hover:shadow-sm transition-all duration-200 flex flex-col"
              >
                <div className="w-10 h-10 rounded-xl bg-rose-100/70 text-rose-600 flex items-center justify-center mb-5">
                  <AlertCircle className="w-5 h-5" strokeWidth={2} />
                </div>
                <h3 className="text-lg font-semibold text-[#152825] mb-2.5">
                  {item.title}
                </h3>
                <p className="text-sm text-zinc-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 3. MODULAR ECOSYSTEM ("One Login. Everything Your Business Runs On.") */}
      <Section className="bg-[#F8FAF9] py-16 md:py-24 border-b border-gray-100">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-white border border-gray-200 text-xs font-semibold text-[#209f8f] uppercase tracking-wider mb-4 shadow-xs">
              Platform Architecture
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#152825] mb-5 tracking-tight">
              One Login. Everything Your Business Runs On.
            </h2>
            <p className="text-base sm:text-lg text-zinc-600 leading-relaxed">
              Hulm is not just a billing machine. It is Pakistan’s most complete business operations platform for SMEs, starting with POS and expanding across every function your business needs to grow. From the first sale of the day to your end-of-month FBR report, every part of your operation runs through a single screen. Unlike standalone POS apps that stop at billing, Hulm connects your point of sale with inventory, purchasing, vendor management, customer data, logistics, and analytics all in real time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ecosystemApps.map((app, idx) => {
              const Icon = app.icon;
              return (
                <div 
                  key={idx}
                  className="group bg-white p-7 rounded-2xl border border-gray-200/80 shadow-xs hover:border-[#209f8f]/40 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-xl bg-[#209f8f]/10 text-[#209f8f] flex items-center justify-center group-hover:bg-[#209f8f] group-hover:text-white transition-colors duration-200">
                        <Icon className="w-6 h-6" strokeWidth={2} />
                      </div>
                      <span className="text-[11px] font-semibold text-[#209f8f] px-2.5 py-1 rounded-full bg-[#209f8f]/10">
                        {app.badge}
                      </span>
                    </div>

                    <h3 className="text-xl font-semibold text-[#152825] mb-4 group-hover:text-[#209f8f] transition-colors">
                      {app.title}
                    </h3>

                    <div className="space-y-3 mb-6 text-xs sm:text-sm">
                      <div className="p-3 rounded-xl bg-gray-50 border border-gray-100">
                        <span className="font-semibold text-[#152825] block mb-1">What it does in plain words:</span>
                        <span className="text-zinc-600 leading-relaxed">{app.whatItDoes}</span>
                      </div>
                      <div className="p-3 rounded-xl bg-[#F0FDF4]/70 border border-[#209f8f]/15">
                        <span className="font-semibold text-[#152825] block mb-1">Why it matters for Pakistani businesses:</span>
                        <span className="text-zinc-700 leading-relaxed">{app.whyItMatters}</span>
                      </div>
                    </div>
                  </div>

                  <Link 
                    href={app.href}
                    className="inline-flex items-center text-sm font-semibold text-[#209f8f] hover:text-[#1a8578] transition-colors pt-3 border-t border-gray-100 mt-auto"
                  >
                    Explore {app.title}
                    <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* 4. DASHBOARD SECTION */}
      <Section className="bg-white py-16 md:py-24 border-b border-gray-100">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-[#F0FDF4] border border-[#209f8f]/20 text-xs font-semibold text-[#209f8f] uppercase tracking-wider mb-4 shadow-xs">
                Intuitive Control
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#152825] mb-5 tracking-tight">
                Powerful POS Dashboard with Easy to Use Interface
              </h2>
              <p className="text-base text-zinc-600 leading-relaxed mb-8">
                Run everything from one simple dashboard in Hulm Point of Sale Software. This cloud based POS software gives you a clear view to manage daily operations with speed and confidence across Pakistan.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3.5">
                  <div className="w-6 h-6 rounded-full bg-[#209f8f]/10 text-[#209f8f] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" strokeWidth={2.5} />
                  </div>
                  <span className="text-sm sm:text-base text-zinc-700">
                    Real-time sales totals, profit calculations, and cash drawer reconciliations.
                  </span>
                </div>
                <div className="flex items-start gap-3.5">
                  <div className="w-6 h-6 rounded-full bg-[#209f8f]/10 text-[#209f8f] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" strokeWidth={2.5} />
                  </div>
                  <span className="text-sm sm:text-base text-zinc-700">
                    Multi-location switching without logging in and out of different accounts.
                  </span>
                </div>
                <div className="flex items-start gap-3.5">
                  <div className="w-6 h-6 rounded-full bg-[#209f8f]/10 text-[#209f8f] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" strokeWidth={2.5} />
                  </div>
                  <span className="text-sm sm:text-base text-zinc-700">
                    Works smoothly on any laptop, desktop PC, Android tablet, or smartphone.
                  </span>
                </div>
              </div>

              <div className="mt-8 pt-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-[#209f8f] text-white hover:bg-[#1a8578] font-semibold rounded-xl shadow-sm"
                >
                  <Link href="https://app.hulmsolutions.com/Register">
                    Start Your Free Trial
                  </Link>
                </Button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="bg-[#F8FAF9] p-8 sm:p-10 rounded-3xl border border-gray-200/80 shadow-xs relative overflow-hidden">
                <div className="flex items-center justify-between pb-6 border-b border-gray-200">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-400" />
                    <div className="w-3 h-3 rounded-full bg-amber-400" />
                    <div className="w-3 h-3 rounded-full bg-emerald-400" />
                  </div>
                  <span className="text-xs font-semibold text-zinc-500">Live POS Operations View</span>
                </div>

                <div className="py-6 space-y-4">
                  <div className="p-4 rounded-2xl bg-white border border-gray-200/70 shadow-xs flex items-center justify-between">
                    <div>
                      <div className="text-xs text-zinc-500 font-medium">Today's Gross Sales</div>
                      <div className="text-xl font-semibold text-[#152825]">PKR 184,500</div>
                    </div>
                    <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full">
                      +18.4% vs Yesterday
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-4 rounded-2xl bg-white border border-gray-200/70 shadow-xs">
                      <div className="text-xs text-zinc-500 font-medium">Orders Completed</div>
                      <div className="text-lg font-semibold text-[#152825]">142 Invoices</div>
                    </div>
                    <div className="p-4 rounded-2xl bg-white border border-gray-200/70 shadow-xs">
                      <div className="text-xs text-zinc-500 font-medium">FBR Sync Status</div>
                      <div className="text-xs font-semibold text-[#209f8f] flex items-center gap-1 mt-1">
                        <CheckCircle2 className="w-3.5 h-3.5" /> 100% Invoiced
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-[#F0FDF4] border border-[#209f8f]/20 text-xs text-zinc-700 leading-relaxed flex items-center gap-3">
                  <ShieldCheck className="w-5 h-5 text-[#209f8f] shrink-0" />
                  <span>Cloud backups stored safely with bank-level encryption. Zero local data loss risk.</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 5. BENEFITS OF HULM POS SYSTEM */}
      <Section className="bg-[#F8FAF9] py-16 md:py-24 border-b border-gray-100">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-14">
            <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-white border border-gray-200 text-xs font-semibold text-[#209f8f] uppercase tracking-wider mb-4 shadow-xs">
              Measurable Advantages
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#152825] mb-4 tracking-tight">
              Benefits of Hulm POS System
            </h2>
            <p className="text-base text-zinc-600 leading-relaxed">
              At Hulm Solutions, we empower businesses to thrive by simplifying the way they operate and engage with customers. Here are the key benefits of choosing Hulm Solutions for your business:
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
            {benefitsList.map((benefit, idx) => (
              <div 
                key={idx}
                className="flex items-start gap-3.5 bg-white p-5 rounded-2xl border border-gray-200/80 shadow-xs hover:border-[#209f8f]/30 transition-colors"
              >
                <div className="w-6 h-6 rounded-full bg-[#209f8f]/10 text-[#209f8f] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" strokeWidth={2.5} />
                </div>
                <span className="text-sm font-medium text-[#152825] leading-relaxed">
                  {benefit}
                </span>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 6. FBR COMPLIANCE SECTION */}
      <Section className="bg-white py-16 md:py-24 border-b border-gray-100">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-semibold text-emerald-700 uppercase tracking-wider mb-4 shadow-xs">
              Tax & Invoicing
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#152825] mb-5 tracking-tight">
              FBR Compliance We Handle It For You
            </h2>
            <p className="text-base text-zinc-600 leading-relaxed mb-4">
              Every registered retail and restaurant business in Pakistan is required to generate FBR-compliant invoices. For many business owners, navigating the registration process and making sure every sale produces the right invoice is confusing and time-consuming. Hulm makes it straightforward.
            </p>
            <p className="text-base text-zinc-600 leading-relaxed">
              Hulm helps your business become FBR-compliant and stay that way without the paperwork or confusion. We guide you through the FBR registration process step by step, and once you are registered, every sale you process through Hulm automatically generates a compliant invoice. You do not file anything manually for day-to-day transactions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* What We Do */}
            <div className="bg-[#F8FAF9] p-8 rounded-2xl border border-gray-200/80 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#209f8f]/10 text-[#209f8f] flex items-center justify-center mb-5">
                  <ShieldCheck className="w-5 h-5" strokeWidth={2} />
                </div>
                <h3 className="text-lg font-semibold text-[#152825] mb-3">
                  What We Do
                </h3>
                <p className="text-sm text-zinc-600 leading-relaxed">
                  We guide your business through the FBR registration process step by step. Once registered, every sale you process through Hulm automatically generates a compliant invoice. No manual filing required for day-to-day transactions.
                </p>
              </div>
            </div>

            {/* What You Get */}
            <div className="bg-white p-8 rounded-2xl border border-emerald-200/80 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-5">
                  <CheckCircle2 className="w-5 h-5" strokeWidth={2} />
                </div>
                <h3 className="text-lg font-semibold text-[#152825] mb-3">
                  What You Get
                </h3>
                <ul className="space-y-2.5 text-sm text-zinc-700">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    Automatic invoice generation per sale
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    FBR-compliant QR codes on every receipt
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    Complete transaction records that hold up to any audit
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    Free setup support — we help register you at no extra cost
                  </li>
                </ul>
              </div>
            </div>

            {/* What You Avoid */}
            <div className="bg-white p-8 rounded-2xl border border-rose-200/80 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center mb-5">
                  <XCircle className="w-5 h-5" strokeWidth={2} />
                </div>
                <h3 className="text-lg font-semibold text-[#152825] mb-3">
                  What You Avoid
                </h3>
                <ul className="space-y-2.5 text-sm text-zinc-700">
                  <li className="flex items-center gap-2">
                    <XCircle className="w-4 h-4 text-rose-500 shrink-0" />
                    FBR penalties for non-compliance
                  </li>
                  <li className="flex items-center gap-2">
                    <XCircle className="w-4 h-4 text-rose-500 shrink-0" />
                    Manual invoice filing & paperwork
                  </li>
                  <li className="flex items-center gap-2">
                    <XCircle className="w-4 h-4 text-rose-500 shrink-0" />
                    Accountant fees for routine invoice generation
                  </li>
                  <li className="flex items-center gap-2">
                    <XCircle className="w-4 h-4 text-rose-500 shrink-0" />
                    Audit anxiety
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 7. COMPARISON TABLE */}
      <Section className="bg-[#F8FAF9] py-16 md:py-24 border-b border-gray-100">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-14">
            <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-white border border-gray-200 text-xs font-semibold text-[#209f8f] uppercase tracking-wider mb-4 shadow-xs">
              Clear Comparison
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#152825] mb-4 tracking-tight">
              Why Pakistani Businesses Choose Hulm Over Every Other Option
            </h2>
            <p className="text-base text-zinc-600 leading-relaxed">
              There are dozens of POS options in Pakistan — some local, some international. Here is a direct comparison of what matters to an SME owner in Karachi, Lahore, or anywhere in Pakistan.
            </p>
          </div>

          <div className="overflow-x-auto bg-white rounded-3xl border border-gray-200/80 shadow-xs">
            <table className="w-full text-left border-collapse min-w-[720px]">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50/50">
                  <th className="p-5 font-semibold text-[#152825] text-sm">Feature</th>
                  <th className="p-5 font-semibold text-[#209f8f] text-sm bg-[#F0FDF4]/80">Hulm POS</th>
                  <th className="p-5 font-semibold text-zinc-600 text-sm">Typical Local POS</th>
                  <th className="p-5 font-semibold text-zinc-600 text-sm">Global Providers</th>
                  <th className="p-5 font-semibold text-zinc-600 text-sm">Basic Software</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-sm">
                {comparisonRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-gray-50/60 transition-colors">
                    <td className="p-5 font-medium text-[#152825]">{row.feature}</td>
                    <td className="p-5 font-semibold text-[#209f8f] bg-[#F0FDF4]/40">{row.hulm}</td>
                    <td className="p-5 text-zinc-600">{row.local}</td>
                    <td className="p-5 text-zinc-600">{row.global}</td>
                    <td className="p-5 text-zinc-600">{row.basic}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </Section>

      {/* 8. FAST ONBOARDING (Live in under 5 minutes) */}
      <Section className="bg-white py-16 md:py-24 border-b border-gray-100">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-[#F0FDF4] border border-[#209f8f]/20 text-xs font-semibold text-[#209f8f] uppercase tracking-wider mb-4 shadow-xs">
              Fast Implementation
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#152825] mb-4 tracking-tight">
              Live on Hulm in Under 5 Minutes
            </h2>
            <p className="text-base text-zinc-600 leading-relaxed">
              No IT team. No installation. No credit card. Just your business details and you are running.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {onboardingSteps.map((step, idx) => (
              <div 
                key={idx}
                className="bg-[#F8FAF9] p-8 rounded-3xl border border-gray-200/80 shadow-xs relative flex flex-col justify-between hover:border-[#209f8f]/40 transition-colors"
              >
                <div>
                  <div className="text-3xl font-bold text-[#209f8f] mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-semibold text-[#152825] mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              asChild
              size="lg"
              className="bg-[#209f8f] text-white hover:bg-[#1a8578] font-semibold rounded-xl shadow-sm px-8"
            >
              <Link href="https://app.hulmsolutions.com/Register">
                Start Your 14-Day Free Trial
              </Link>
            </Button>
          </div>
        </Container>
      </Section>

      {/* 9. INDUSTRIES WE SERVE */}
      <Section className="bg-[#F8FAF9] py-16 md:py-24 border-b border-gray-100">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-14">
            <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-white border border-gray-200 text-xs font-semibold text-[#209f8f] uppercase tracking-wider mb-4 shadow-xs">
              Tailored Solutions
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#152825] mb-4 tracking-tight">
              Industries We Serve
            </h2>
            <p className="text-base text-zinc-600 leading-relaxed">
              We provide customized POS System designed for unique needs of businesses for any industry. Our focus is enhancing efficiency, improving customer experiences, and driving success with tailored strategies and advanced technologies.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {industriesList.map((ind, idx) => (
              <Link 
                key={idx}
                href={ind.href}
                className="group bg-white p-4 sm:p-5 rounded-2xl border border-gray-200/80 shadow-xs hover:border-[#209f8f]/40 hover:shadow-sm transition-all flex items-center justify-between"
              >
                <span className="text-xs sm:text-sm font-semibold text-[#152825] group-hover:text-[#209f8f] transition-colors">
                  {ind.name}
                </span>
                <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-[#209f8f] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 ml-2" />
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      {/* 10. GOOGLE REVIEWS SECTION */}
      <GoogleReviewsSection />

      {/* 11. FAQS SECTION */}
      <Section className="bg-[#F8FAF9] py-16 md:py-24 border-t border-gray-100">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-14 flex flex-col items-center">
            <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-white border border-gray-200 text-xs font-semibold text-[#209f8f] uppercase tracking-wider mb-4 shadow-xs">
              Got Questions?
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#152825] mb-4 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-sm sm:text-base text-zinc-600">
              Get quick answers to common questions about our services and support in our FAQ section.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <SiteFaqAccordion items={appsFaqs} defaultOpenIndex={0} />
          </div>
        </Container>
      </Section>

      {/* 12. FINAL CTA */}
      <FinalCta />
    </div>
  );
}
