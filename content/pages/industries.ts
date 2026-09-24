export const industriesContent = {
  seo: {
    title: "POS Software by Industry | Retail, Restaurant & More | Hulm",
    description:
      "Explore Hulm POS workflows for retail stores, restaurants, pharmacies, bakeries, salons, clothing stores and other growing businesses.",
    keywords: [
      "POS software by industry",
      "retail POS Pakistan",
      "restaurant POS Pakistan",
      "pharmacy POS system",
      "bakery POS system",
      "salon POS software",
    ],
  },
  hero: {
    eyebrow: "POS workflows by industry",
    headline: "A POS setup shaped around the way your business sells",
    description:
      "Start with one connected sales and inventory platform, then choose the workflow that best matches your counters, products, orders and customer experience.",
    primaryCta: { label: "Start 14-Day Free Trial", href: "https://app.hulmsolutions.com/Register" },
    secondaryCta: { label: "Talk to the Hulm Team", href: "/contact" },
    proof: ["Sales and stock connected", "Multi-branch options", "FBR integration available"],
  },
  priority: {
    eyebrow: "Most common setups",
    heading: "Choose the workflow closest to yours",
    description:
      "Each setup starts with the same Hulm POS foundation and brings the most relevant daily workflows forward for your team.",
    items: [
      {
        name: "Retail stores", slug: "retail-store", image: "/images/industries/retail.jpg",
        description: "Keep checkout, product stock and customer records connected across one or more locations.",
        highlights: ["Barcode-ready selling", "Branch-level stock visibility", "Customer purchase history"],
      },
      {
        name: "Restaurants", slug: "restaurant-pos", image: "/images/industries/restaurant.jpg",
        description: "Coordinate counter and table orders with a clearer flow from order entry to fulfilment.",
        highlights: ["Order and table workflows", "Menu item management", "Sales and stock reporting"],
      },
      {
        name: "Pharmacies", slug: "pharmacy-store", image: "/images/industries/pharmacy.jpg",
        description: "Sell quickly while keeping closer visibility over product stock, batches and expiry dates.",
        highlights: ["Product and batch records", "Expiry visibility", "Fast counter billing"],
      },
      {
        name: "Bakeries", slug: "bakery-pos-system", image: "/images/industries/bakery.jpg",
        description: "Bring counter sales, product availability and made-to-order work into one practical view.",
        highlights: ["Counter sales", "Batch and expiry visibility", "Advance order tracking"],
      },
      {
        name: "Salons & spas", slug: "salon-pos", image: "/images/industries/salon.jpg",
        description: "Connect appointments, service billing, retail products and customer history for the front desk.",
        highlights: ["Appointment workflows", "Service and product billing", "Customer records"],
      },
      {
        name: "Clothing stores", slug: "clothing-store", image: "/images/industries/clothing.jpg",
        description: "Manage size and colour variants while making sales, exchanges and stock checks easier.",
        highlights: ["Size and colour variants", "Exchanges and returns", "Stock by location"],
      },
    ],
  },
  foundation: {
    eyebrow: "One connected foundation",
    heading: "The core stays simple as the workflow changes",
    description:
      "Hulm keeps the essentials together, so an industry-specific setup does not become another disconnected system to manage.",
    items: [
      { title: "Sell with less friction", description: "Give the counter team a focused route through billing, payments and customer records." },
      { title: "Keep stock in view", description: "Connect sales activity with product availability, purchasing and branch-level stock movement." },
      { title: "See what needs attention", description: "Use shared sales and inventory reporting to follow performance and spot operational gaps." },
    ],
  },
  additional: {
    eyebrow: "More business types",
    heading: "Explore other supported workflows",
    description: "These pages remain available for businesses with more specialised selling, stock or production needs.",
    items: [
      { name: "Cafes", slug: "cafe", image: "/images/industries/cafe.jpg", description: "Quick-service ordering, menu control and ingredient visibility." },
      { name: "Furniture stores", slug: "furniture-store", image: "/images/industries/furniture.jpg", description: "Showroom sales, item details and warehouse stock coordination." },
      { name: "Toy stores", slug: "toys-store", image: "/images/industries/toys.jpg", description: "Barcode selling, product discovery and seasonal stock control." },
      { name: "Jewellery shops", slug: "jewellery-shop", image: "/images/industries/jewelry.jpg", description: "Detailed item records, pricing inputs and customer purchase history." },
      { name: "Electrical stores", slug: "electric-store", image: "/images/industries/electric.jpg", description: "Product variants, serial records and contractor sales workflows." },
      { name: "Manufacturing", slug: "manufacturing-industries", image: "/images/industries/manufacturing.jpg", description: "Sales, material visibility and finished-goods coordination." },
    ],
  },
  compliance: {
    eyebrow: "Pakistan-ready operations",
    heading: "Add FBR integration to the workflow that fits your business",
    description:
      "Hulm can support FBR-connected invoicing alongside the POS and inventory workflows your team uses every day. The Hulm team can confirm the right setup for your location and plan.",
    primaryCta: { label: "Explore FBR Integration", href: "/fbr-integrated-pos-pakistan" },
    secondaryCta: { label: "Discuss Your Setup", href: "/contact" },
  },
  faq: {
    eyebrow: "Industry questions",
    heading: "Choose a starting point without boxing the business in",
    items: [
      { question: "How is each industry setup different?", answer: "The core POS and inventory platform stays consistent. The recommended workflow, terminology and operational tools change to match how that type of business sells and manages stock or services." },
      { question: "Can Hulm support more than one business type?", answer: "Yes. If your operation combines formats, such as a bakery with a cafe or a salon that also sells products, the Hulm team can help map the right mix of workflows." },
      { question: "Can I add branches later?", answer: "Hulm offers multi-branch options. The suitable plan and rollout approach depend on the number of users, counters, branches and workflows you need." },
      { question: "Does every setup include FBR integration?", answer: "FBR integration is available, but its inclusion and implementation scope can vary by plan and business requirements. Confirm the final setup with the Hulm team before purchase." },
      { question: "What if my industry is not listed?", answer: "Choose the page with the closest sales and stock workflow, then discuss the differences with Hulm. The team can confirm whether the platform fits your operating model." },
    ],
  },
  finalCta: {
    eyebrow: "Not sure where to start?",
    heading: "Show us how your team sells today",
    description: "We’ll help you identify the closest workflow, the right plan and the setup questions to resolve before rollout.",
    primaryCta: { label: "Start 14-Day Free Trial", href: "https://app.hulmsolutions.com/Register" },
    secondaryCta: { label: "Talk to the Hulm Team", href: "/contact" },
  },
} as const;
