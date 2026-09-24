export const pricingContent = {
  seo: {
    title: "Hulm POS Pricing | Plans from PKR 2,500",
    description:
      "Compare Hulm POS plans for single-location, growing and multi-branch businesses. Start with a 14-day trial or book a pricing walkthrough.",
    keywords: ["Hulm POS pricing", "POS price Pakistan", "cloud POS plans", "multi branch POS pricing"],
  },
  hero: {
    eyebrow: "Straightforward POS pricing",
    headline: "Choose the level of control your business needs",
    description:
      "Start with sales and inventory, then add users, branches and operational capabilities as your business grows.",
    primaryCta: { label: "Start 14-Day Free Trial", href: "https://app.hulmsolutions.com/Register" },
    secondaryCta: { label: "Talk Through the Plans", href: "/contact/" },
    proof: ["Plans from PKR 2,500/month", "14-day trial", "No credit card required for trial"],
  },
  plans: [
    {
      name: "Starter",
      audience: "For a small shop or new business",
      price: "PKR 2,500",
      cadence: "/ month",
      capacity: "1 user · 1 branch",
      summary: "Start selling with the core POS, stock and customer workflows in one place.",
      features: [
        "POS billing and cash management",
        "Basic inventory management",
        "Customer records and sales reports",
        "FBR integration available",
        "Email support",
      ],
      cta: { label: "Start Free Trial", href: "https://app.hulmsolutions.com/Register" },
      highlighted: false,
    },
    {
      name: "Growth",
      audience: "For a growing team with purchasing needs",
      price: "PKR 5,500",
      cadence: "/ month",
      capacity: "5 users · 2 branches",
      summary: "Add supplier, purchase and order workflows as more people join the operation.",
      features: [
        "Everything in Starter",
        "Customer CRM and loyalty",
        "Vendor and purchase management",
        "Order management",
        "Advanced reporting",
        "Priority WhatsApp support",
      ],
      cta: { label: "Start Free Trial", href: "https://app.hulmsolutions.com/Register" },
      highlighted: true,
    },
    {
      name: "Business",
      audience: "For established multi-branch operations",
      price: "PKR 11,000",
      cadence: "/ month",
      capacity: "10 users · 5 branches",
      summary: "Give a larger operation more automation, integration and management visibility.",
      features: [
        "Everything in Growth",
        "Accounting dashboards",
        "Automation workflows",
        "API integrations",
        "Multi-branch operational view",
      ],
      cta: { label: "Start Free Trial", href: "https://app.hulmsolutions.com/Register" },
      highlighted: false,
    },
    {
      name: "Enterprise",
      audience: "For larger or specialised deployments",
      price: "Custom",
      cadence: "pricing",
      capacity: "Tailored users and branches",
      summary: "Plan a rollout around complex locations, support requirements and custom workflows.",
      features: [
        "Custom deployment scope",
        "Custom module development",
        "Dedicated account manager",
        "Service-level agreement options",
        "Rollout planning with the Hulm team",
      ],
      cta: { label: "Contact Sales", href: "/contact/" },
      highlighted: false,
    },
  ],
  comparison: {
    eyebrow: "Compare at a glance",
    heading: "See what changes as the operation grows",
    description:
      "The biggest differences are team capacity, branch capacity and the operational workflows included with each plan.",
    rows: [
      { feature: "Users included", starter: "1", growth: "5", business: "10", enterprise: "Tailored" },
      { feature: "Branches included", starter: "1", growth: "2", business: "5", enterprise: "Tailored" },
      { feature: "POS and inventory", starter: true, growth: true, business: true, enterprise: true },
      { feature: "Customer records", starter: true, growth: true, business: true, enterprise: true },
      { feature: "Purchasing and vendors", starter: false, growth: true, business: true, enterprise: true },
      { feature: "Order management", starter: false, growth: true, business: true, enterprise: true },
      { feature: "Advanced reporting", starter: false, growth: true, business: true, enterprise: true },
      { feature: "Automation workflows", starter: false, growth: false, business: true, enterprise: true },
      { feature: "API integrations", starter: false, growth: false, business: true, enterprise: true },
      { feature: "Custom deployment scope", starter: false, growth: false, business: false, enterprise: true },
    ],
  },
  extras: {
    eyebrow: "Optional extras",
    heading: "Know what may be priced separately",
    description:
      "These options apply when they are not already included in your chosen plan. Confirm the exact scope and billing schedule with Hulm before purchase.",
    items: [
      { name: "Additional user", price: "PKR 300/month" },
      { name: "Additional branch", price: "PKR 700/month" },
      { name: "WhatsApp integration", price: "PKR 1,500/month" },
      { name: "Automated SMS alerts", price: "PKR 1,000/month" },
      { name: "Advanced analytics", price: "PKR 2,500/month" },
      { name: "API access", price: "PKR 2,000/month" },
    ],
    services: [
      { name: "Data migration service", price: "PKR 10,000" },
      { name: "Dedicated staff training", price: "PKR 5,000" },
    ],
  },
  guidance: {
    eyebrow: "Before you choose",
    heading: "Match the plan to today’s workflow—not a distant wish list",
    description:
      "Count the people and locations that need access, then identify whether purchasing, order management or advanced controls are required now.",
    items: [
      {
        title: "Start with capacity",
        description: "Confirm the users, counters and branches that need access from day one.",
      },
      {
        title: "Choose the workflows",
        description: "Decide whether your team needs only selling and stock, or also purchasing, orders and automation.",
      },
      {
        title: "Confirm the final quote",
        description: "Review billing schedule, applicable taxes, optional services and rollout scope before committing.",
      },
    ],
  },
  faq: {
    eyebrow: "Pricing questions",
    heading: "The details to confirm before starting",
    items: [
      {
        q: "Is there a free trial?",
        a: "Yes. Hulm currently offers a 14-day trial without requiring a credit card at signup.",
      },
      {
        q: "Are standard setup fees mandatory?",
        a: "Standard account setup does not require a mandatory installation fee. Optional services such as data migration and dedicated staff training are priced separately.",
      },
      {
        q: "Is FBR integration included?",
        a: "FBR integration is available with the POS product. Because requirements vary by business, confirm the applicable setup and any related scope with the Hulm team.",
      },
      {
        q: "Can I add users or branches later?",
        a: "Yes. Additional users and branches can be added, subject to the current add-on pricing or a move to a plan with more capacity.",
      },
      {
        q: "Can I change plans as the business grows?",
        a: "Plan changes are available. Speak with the Hulm team to confirm how the change affects users, branches, billing and included capabilities.",
      },
      {
        q: "Are taxes included in the listed prices?",
        a: "The page shows the current listed plan prices. Confirm applicable taxes, billing schedule and the final payable amount with Hulm before purchase.",
      },
    ],
  },
  finalCta: {
    eyebrow: "Need help choosing?",
    heading: "Bring your branches and workflow—we’ll narrow the options",
    description:
      "Start a 14-day trial or book a pricing walkthrough focused on your team size, locations and operational requirements.",
    primaryCta: { label: "Start 14-Day Free Trial", href: "https://app.hulmsolutions.com/Register" },
    secondaryCta: { label: "Talk Through the Plans", href: "/contact/" },
  },
} as const;
