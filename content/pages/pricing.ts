import { StandardPageContent } from '../types';

export const pricingContent: StandardPageContent = {
  seo: {
    title: "Pricing | Flexible Plans for Every Business - Hulm Solutions",
    description: "Discover transparent, flexible pricing plans tailored for small shops, growing retail businesses, and multi-branch enterprises.",
    keywords: ["Hulm Pricing", "POS Cost Pakistan", "SME Software Pricing"]
  },
  hero: {
    headline: "Simple Pricing for Every Business",
    description: "Run your sales, inventory, customers, and operations from one platform. No hidden fees. Start free for 14 days.",
    primaryCTA: {
      label: "Start for free",
      href: "/register"
    },
    secondaryCTA: {
      label: "Talk to sales",
      href: "/contact"
    }
  },
  additionalSections: [
    {
      type: "pricing-tabs",
      tabs: ["FMCG", "Healthcare", "Logistics", "POS Restaurant", "Live Stock"]
    },
    {
      type: "pricing-cards",
      plans: [
        {
          name: "Starter",
          price: "PKR 2,500 / month",
          description: "Best for small shops and startups",
          features: [
            "1 User / 1 Branch",
            "Native FBR Integration (Tier-1)",
            "POS Billing & Cash Management",
            "Basic Inventory Management",
            "Customer Records & Sales Reports",
            "Email Support"
          ],
          ctaLabel: "Start Free Trial",
          isPopular: false
        },
        {
          name: "Growth",
          price: "PKR 5,500 / month",
          description: "For growing businesses handling vendors and multiple staff.",
          features: [
            "5 Users / 2 Branches",
            "Everything in Starter, plus:",
            "Customer CRM & Loyalty",
            "Vendor & Purchase Management",
            "Order Management",
            "Advanced Reporting",
            "Priority WhatsApp Support"
          ],
          ctaLabel: "Start Free Trial",
          isPopular: true
        },
        {
          name: "Business",
          price: "PKR 11,000 / month",
          description: "The complete suite for multi-branch operations.",
          features: [
            "10 Users / 5 Branches",
            "Everything in Growth, plus:",
            "Accounting Dashboards",
            "Automation Workflows",
            "Logistics Tracking",
            "API Integrations"
          ],
          ctaLabel: "Start Free Trial",
          isPopular: false
        },
        {
          name: "Enterprise",
          price: "Contact us for pricing",
          description: "For franchises and massive retail chains.",
          features: [
            "Unlimited Users & Branches",
            "Custom Module Development",
            "Dedicated Account Manager",
            "SLA Guarantee"
          ],
          ctaLabel: "Contact Sales",
          isPopular: false
        }
      ]
    },
    {
      type: "feature-comparison",
      heading: "Quick Feature Comparison",
      subheading: "summarize which plan would be best for your business size or industry",
      categories: [
        {
          name: "CORE",
          features: [
            { name: "POS Billing", starter: true, growth: true, business: true, enterprise: true },
            { name: "Inventory", starter: true, growth: true, business: true, enterprise: true },
            { name: "Customer CRM", starter: true, growth: true, business: true, enterprise: true }
          ]
        },
        {
          name: "OPERATIONS",
          features: [
            { name: "Order Management", starter: false, growth: true, business: true, enterprise: true },
            { name: "Vendor Management", starter: false, growth: true, business: true, enterprise: true },
            { name: "Analytics", starter: false, growth: true, business: true, enterprise: true }
          ]
        },
        {
          name: "ADVANCED",
          features: [
            { name: "API Access", starter: false, growth: false, business: true, enterprise: true },
            { name: "Automation", starter: false, growth: false, business: true, enterprise: true }
          ]
        }
      ]
    },
    {
      type: "add-ons",
      heading: "Add-ons & Onboarding Charges",
      subheading: "Build your perfect suite. Only pay for what you need.",
      blocks: [
        {
          title: "Add-ons",
          items: [
            "Extra user: PKR 300/month",
            "Extra branch: PKR 700/month",
            "WhatsApp integration: PKR 1,500/month",
            "Automated SMS Alerts: PKR 1,000/month",
            "Advanced analytics: PKR 2,500/month",
            "API access: PKR 2,000/month"
          ]
        },
        {
          title: "Setup & Onboarding",
          items: [
            "Data Migration Service: PKR 10,000",
            "Dedicated Staff Training: PKR 5,000"
          ]
        }
      ]
    },
    {
      type: "why-choose",
      heading: "Why Choose Hulm Solutions?",
      reasons: [
        "Easy to use, no technical expertise required.",
        "Real-time inventory and sales tracking.",
        "Built-in CRM, reporting, and order management.",
        "Certified FBR compliance (POS).",
        "Multi-location and multi-device support."
      ]
    },
    {
      type: "faq",
      heading: "Frequently Asked Questions",
      subheading: "Get quick answers to common questions about our services and support in our FAQ section.",
      items: [
        {
          q: "Do you charge any setup fees?",
          a: "No, Hulm Solutions does not charge mandatory setup or installation fees for our standard plans. You can start your 14-day free trial without a credit card."
        },
        {
          q: "Is FBR integration included in the price?",
          a: "Yes, Tier-1 FBR integration is available within our POS system, saving you the hassle of third-party plugins. Hulm supports FBR compliance and helps businesses generate compliant invoices automatically."
        },
        {
          q: "Can I use Hulm on my own hardware?",
          a: "Absolutely! Hulm is a cloud-based web and Android app. You can use it on any existing PC, laptop, tablet, or smartphone."
        },
        {
          q: "Can I switch plans later?",
          a: "Yes, you can upgrade, downgrade, or add modules (like logistics and extra branches) at any time from your Hulm Dashboard."
        }
      ]
    }
  ]
};
