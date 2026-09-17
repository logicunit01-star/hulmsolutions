export interface NavItem {
  title: string;
  href: string;
  children?: NavItem[];
}

export const mainNav: NavItem[] = [
  {
    title: "Apps",
    href: "/apps/",
  },
  {
    title: "Industries",
    href: "/industries/",
  },
  {
    title: "Case Studies",
    href: "/case-studies/",
  },
  {
    title: "Insights",
    href: "/insights/",
  },
  {
    title: "Pricing",
    href: "/pricing/",
  },

  {
    title: "Contact",
    href: "/contact/",
  },
];

export const footerNav = [
  {
    title: "INDUSTRIES",
    links: [
      { title: "Retail Store", href: "/industries/retail-store/" },
      { title: "Restaurant", href: "/industries/restaurant-pos/" },
      { title: "Pharmacy Store", href: "/industries/pharmacy-store/" },
      { title: "Salon / Spa", href: "/industries/salon-pos/" },
      { title: "Manufacturing Industry", href: "/industries/manufacturing-industries/" },
      { title: "Furniture Store", href: "/industries/furniture-store/" },
    ],
  },
  {
    title: "Apps",
    links: [
      { title: "POS & Billing", href: "/features/" },
      { title: "Inventory Management", href: "/inventory-management/" },
      { title: "Purchase Orders", href: "/purchase-orders/" },
      { title: "Vendor Management", href: "/vendors-management/" },
      { title: "Mobile POS", href: "/mobile-pos/" },
    ],
  },
  {
    title: "Company",
    links: [
      { title: "About Hulm", href: "/about/" },
      { title: "Integration", href: "/integration/" },
      { title: "Locations", href: "/contact/" },
      { title: "Contact", href: "/contact/" },
    ],
  },
];

export const socialLinks = [
  { title: "Facebook", href: "https://www.facebook.com/Hulmsolutions" },
  { title: "LinkedIn", href: "https://www.linkedin.com/company/hulmsolutions/" },
  { title: "Instagram", href: "https://www.instagram.com/hulmsolutions/" },
];
