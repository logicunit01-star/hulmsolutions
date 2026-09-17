import { StandardPageContent } from '../types';

export const homeContent: StandardPageContent = {
  seo: {
    title: "Best POS Software in Pakistan | Cloud POS System - Hulm Solutions",
    description: "Hulm Solutions offers the best POS software in Pakistan. Manage sales, inventory, accounting, and customers seamlessly from a single cloud POS system.",
    keywords: ["POS Software Pakistan", "Cloud POS System", "Inventory Management", "FBR Compliant POS"]
  },
  hero: {
    headline: "Start with POS Grow into a Complete business suite",
    description: "Most Pakistani retail and restaurant owners run their business across five disconnected tools. A cash register, a WhatsApp group for suppliers, an Excel file for stock, a paper ledger for expenses, and a monthly panic before every FBR notice. Every gap between those tools is costing you money you cannot see.",
    primaryCTA: {
      label: "Start 14 Days Free Trial",
      href: "/register"
    },
    secondaryCTA: {
      label: "Watch Demo Video",
      href: "#demo"
    }
  },
  additionalSections: [
    {
      type: "trusted-by",
      heading: "Trusted By",
      logos: [
        { name: "Product Hunt", image: "/images/home/trusted/product-hunt.png" },
        { name: "Highly Recommended", image: "/images/home/trusted/highly-recommended.webp" },
        { name: "GoodFirms", image: "/images/home/trusted/goodfirms-partner.png" },
        { name: "Top Trending", image: "/images/home/trusted/top-trending.webp" },
        { name: "Trustpilot", image: "/images/home/trusted/trustpilot.png" }
      ]
    },
    {
      type: "pain-points",
      heading: "Still Managing Your Business on Excel, WhatsApp and Paper?",
      items: [
        { title: "FBR Stress", description: "Every sale should generate a compliant invoice automatically. Manually filing invoices wastes hours and leaves you exposed to penalties." },
        { title: "Invisible Stock Losses", description: "If you do not know your exact stock in real time, you are losing money every day to theft, waste, and selling items you no longer have." },
        { title: "No Control Across Branches", description: "Managing two locations on different systems means you are always one step behind. You cannot see which branch is profitable without a full manual count." },
        { title: "Customer Data You Cannot Use", description: "Your regulars deserve to be recognized. Without a customer record, every sale is anonymous and every promotion is a guess." }
      ],
      image: "/images/home/pain-points.webp"
    },
    {
      type: "features-grid",
      heading: "One Login. Everything Your Business Runs On.",
      subheading: "Hulm is not just a billing machine. It is Pakistan's most complete business operations platform for SMEs, starting with POS and expanding across every function your business needs to grow. From the first sale of the day to your end-of-month FBR report, every part of your operation runs through a single screen. Unlike standalone POS apps that stop at billing, Hulm connects your point of sale with inventory, purchasing, vendor management, customer data, logistics, and analytics all in real time, all in one dashboard. No integrations required. No extra subscriptions. No data living in five different places.",
      items: [
        { title: "POS & Billing", description: "What it does in plain words: Process any sale in under 10 seconds on any device. Why it matters for Pakistani businesses: FBR-compliant invoice generated automatically with every transaction — zero manual filing.", icon: "POSIcon" },
        { title: "Inventory Management", description: "What it does in plain words: See exact stock levels across all locations in real time. Why it matters for Pakistani businesses: Stop selling items you don't have. Stop buying items already in your store.", icon: "InventoryIcon" },
        { title: "Purchase Orders", description: "What it does in plain words: Send supplier orders from inside Hulm, track every delivery. Why it matters for Pakistani businesses: Eliminate the WhatsApp back-and-forth with vendors. Every order tracked, every delivery confirmed.", icon: "PurchaseIcon" },
        { title: "Vendor Management", description: "What it does in plain words: Every supplier's pricing history, orders, and contacts in one place. Why it matters for Pakistani businesses: Reorder in two minutes instead of twenty. Know which supplier is giving you the best rate.", icon: "VendorIcon" },
        { title: "Customer Management", description: "What it does in plain words: Full purchase history and profile for every customer. Why it matters for Pakistani businesses: Know your regulars, what they buy, and when they last visited — without a separate CRM.", icon: "CustomerIcon" },
        { title: "Order Management", description: "What it does in plain words: Track every sale from placement to fulfillment. Why it matters for Pakistani businesses: See what is pending, what is late, and what needs your attention — before a customer complains.", icon: "OrderIcon" },
        { title: "Reporting & Analytics", description: "What it does in plain words: Sales, profit, branch performance, and trends on one screen. Why it matters for Pakistani businesses: Make decisions based on data, not gut feeling. See your best-selling item and busiest hour.", icon: "ReportingIcon" },
        { title: "Logistics Management", description: "What it does in plain words: Manage drivers, vehicles, and deliveries on one map. Why it matters for Pakistani businesses: Know where every delivery is at any moment. Run your fleet without a second app.", icon: "LogisticsIcon" },
        { title: "Mobile POS", description: "What it does in plain words: Full POS from any smartphone or Android tablet. Why it matters for Pakistani businesses: No expensive POS terminal needed. Works everywhere in Pakistan, including areas with patchy internet.", icon: "MobilePOSIcon" },
        { title: "Cattle Management", description: "What it does in plain words: Livestock records, health tracking, and purchase/sale history. Why it matters for Pakistani businesses: Pakistan's only business suite with a built-in cattle management module — purpose-built for livestock traders and farmers.", icon: "CattleIcon" }
      ]
    },
    {
      type: "dashboard-preview",
      heading: "Powerful POS Dashboard with Easy to Use Interface",
      subheading: "Run everything from one simple dashboard in Hulm Point of Sale Software. This cloud based POS software gives you a clear view to manage daily operations with speed and confidence across the Pakistan.",
      slides: [
        {
          title: "Customers Directory",
          image: "/images/home/dashboard/hulm-solutions-customers-sales-order.webp"
        },
        {
          title: "Create Sales Order",
          image: "/images/home/dashboard/hulm-solutions-create-sales-order.webp"
        },
        {
          title: "Product Catalog",
          image: "/images/home/dashboard/hulm-solutions-products-sales-order.webp"
        }
      ]
    },
    {
      type: "benefits",
      heading: "Benefits of Hulm POS System",
      subheading: "At Hulm Solutions, we empower businesses to thrive by simplifying the way they operate and engage with customers. Here are the key benefits of choosing Hulm Solutions for your business.",
      list: [
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
      ],
      image: "/images/home/hulm-section-4.png"
    },
    {
      type: "fbr-compliance",
      heading: "FBR Compliance We Handle It For You",
      subheading: "Every registered retail and restaurant business in Pakistan is required to generate FBR-compliant invoices. For many business owners, navigating the registration process and making sure every sale produces the right invoice is confusing and time-consuming. Hulm makes it straightforward.\n\nHulm helps your business become FBR-compliant and stay that way without the paperwork or confusion. We guide you through the FBR registration process step by step, and once you are registered, every sale you process through Hulm automatically generates a compliant invoice. You do not file anything manually for day-to-day transactions.",
      boxes: [
        {
          title: "What we do",
          content: "We guide your business through the FBR registration process step by step. Once registered, every sale you process through Hulm automatically generates a compliant invoice. No manual filing required for day-to-day transactions."
        },
        {
          title: "What you get",
          content: "• Automatic invoice generation per sale\n• FBR-compliant QR codes on every receipt\n• Complete transaction records that hold up to any audit\n• Free setup support we help register you at no extra cost"
        },
        {
          title: "What you avoid",
          content: "• FBR penalties for non-compliance\n• Manual invoice filing\n• Accountant fees for routine invoice generation\n• Audit anxiety"
        }
      ],
      cta: {
        label: "Get FBR Compliant POS — Free Setup Included",
        href: "/register"
      }
    },
    {
      type: "comparison-table",
      heading: "Why Pakistani Businesses Choose Hulm Over Every Other Option",
      subheading: "There are dozens of POS options in Pakistan — some local, some international. Here is a direct comparison of what matters to an SME owner in Karachi, Lahore, or anywhere in Pakistan.",
      headers: ["Feature", "Hulm", "Typical Local POS", "Global Providers", "Basic Software"],
      rows: [
        { feature: "FBR-compliant invoicing", hulm: "yes", local: "yes", global: "no", basic: "yes" },
        { feature: "Full business suite", hulm: "10+ modules", local: "no", global: "no", basic: "Partial" },
        { feature: "Cattle management", hulm: "Only platform in PK", local: "no", global: "no", basic: "no" },
        { feature: "Mobile POS", hulm: "yes", local: "yes", global: "yes", basic: "Partial" },
        { feature: "Pricing (PKR/mo)", hulm: "2,500", local: "Custom / High", global: "USD-based", basic: "1,500+" },
        { feature: "Pakistan-based support", hulm: "WhatsApp + Call", local: "yes", global: "no", basic: "yes" },
        { feature: "ZATCA (KSA) Support", hulm: "yes", local: "no", global: "no", basic: "no" }
      ]
    },
    {
      type: "why-choose-points",
      heading: "Why Choose Hulm POS System?",
      content: "HULM Solutions Pos is the indomitable magic wand that makes your business operations easy, and efficient and helps them grow, all at very competitive prices. It has simple yet advanced features and reliable security to make it fit for use by all businesses regardless of size and type. HULM POS would adjust to every unique need for retail shops, restaurants, or even schools, adding fluidity and scalability in all aspects.",
      pointsHeading: "Key Points For Choosing Hulm POS:",
      points: [
        "User-Friendly Design.", "24/7 Support.", "Customizable Solutions.", "Advanced Security.",
        "Comprehensive Features.", "Cloud Accessibility.", "FBR-Compliant Invoicing.", "Real-Time Insights.",
        "Barcode Scanners.", "Compatible with all Devices.", "Use it Multiple Locations.", "Record of clients.",
        "Cost-Effective.", "Scalable for Growth.", "Easy to understand interface."
      ]
    },
    {
      type: "industries",
      heading: "Industries We Serve",
      subheading: "We provide customized POS System designed for unique needs of businesses for any industry. Our focus is enhancing efficiency, improving customer experiences, and driving success with tailored strategies and advanced technologies.",
      items: [
        "Manufacturing Industry", "Furniture Store", "Cafe Shop", "Toys Store", "Jewelry Shop", "Electric Store",
        "Bakery", "Salon / Spa", "Clothing Store", "Restaurant", "Pharmacy Store", "Retail Store"
      ]
    },
    {
      type: "timeline",
      heading: "Live on Hulm in Under 5 Minutes",
      subheading: "No IT team. No installation. No credit card. Just your business details and you are running.",
      cta: { label: "Free trial demo video", href: "#demo" },
      steps: [
        { step: "Step 1: Create your free account", desc: "Click 'Start Free Trial', enter your business name, industry, and contact details. Your account is created instantly." },
        { step: "Step 2: Select your apps, go live", desc: "Verify your account through the email sent by Hulm support. Now login to your account." },
        { step: "Step 3: First sale in under a minute", desc: "Select the apps you want, then click 'Continue' for the system to set up your app." }
      ]
    },
    {
      type: "testimonials-header",
      heading: "Pakistani Businesses Run on Hulm Here is What They Say",
      subheading: "From a single-branch bakery in Lahore to a multi-location retail chain in Karachi, businesses across Pakistan trust Hulm to run their daily operations. These are real reviews from real owners."
    },
    {
      type: "trusted-logos",
      heading: "Trusted solutions by businesses across the world",
      subheading: "Join successful businesses using Hulm POS to help growing companies streamline daily operations & improve efficiency with a system designed for real business needs.",
      logos: [
        { name: "back365", image: "/images/home/trusted-clients/back365.png" },
        { name: "EmBeba", image: "/images/home/trusted-clients/embeba.png" },
        { name: "TMPL", image: "/images/home/trusted-clients/tmpl.png" },
        { name: "Melicks House Linens", image: "/images/home/trusted-clients/melicks.png" },
        { name: "Joyful Butterfly", image: "/images/home/trusted-clients/joyful-butterfly.png" },
        { name: "BullHug", image: "/images/home/trusted-clients/bullhug.png" },
        { name: "Diamond Beauty Bar", image: "/images/home/trusted-clients/diamond-beauty.png" },
        { name: "Beyond B-School", image: "/images/home/trusted-clients/beyond-bschool.png" },
        { name: "Drill Dental", image: "/images/home/trusted-clients/drill-dental.png" },
        { name: "Positive Real Estate", image: "/images/home/trusted-clients/positive-realestate.png" },
        { name: "McGraw Realtors", image: "/images/home/trusted-clients/mcgraw.png" },
        { name: "Live Well Real Estate", image: "/images/home/trusted-clients/live-well.png" }
      ]
    },
    {
      type: "faq",
      heading: "Frequently Asked Questions",
      subheading: "Get quick answers to common questions about our services and support in our FAQ section.",
      items: [
        { q: "What is the best POS software in Pakistan?", a: "For Pakistani SMEs, Hulm POS is consistently rated the top choice because it combines FBR-compliant invoicing, real-time inventory management, multi-location support, and an affordable price of PKR 2,500 per month — all in one platform. It serves 14 industries including restaurants, retail, pharmacies, bakeries, and salons." },
        { q: "How much does POS software cost in Pakistan?", a: "Prices vary, but Hulm POS starts at PKR 2,500 per month." },
        { q: "Is Hulm POS FBR compliant?", a: "Yes, fully FBR compliant." },
        { q: "Can Hulm POS work on a mobile phone or tablet?", a: "Yes, it is entirely cloud-based and mobile responsive." },
        { q: "Does Hulm support multiple branches or locations?", a: "Yes, you can manage multiple branches from one dashboard." },
        { q: "What industries does Hulm POS serve?", a: "14+ industries including retail, restaurants, pharmacies, etc." },
        { q: "Is there a free trial for Hulm POS?", a: "Yes, 14-day free trial." },
        { q: "Can Hulm POS work offline?", a: "Hulm POS requires an internet connection for real-time syncing." }
      ]
    },
    {
      type: "final-cta-split",
      heading: "Your Competitors Already Have a System. You Can Too For Free.",
      subheading: "Start your 14-day free trial today. No credit card. No setup fee. No commitment. Your business will be live on Hulm within the same day you sign up.",
      formHeading: "Create your free account",
      formSubheading: "Takes less than 2 minutes. No credit card required."
    }
  ]
};
