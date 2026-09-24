import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ArrowUpRight, Mail, MessageCircle } from "lucide-react"
import { Container } from "@/components/ui/container"
import { REGIONAL_LOCATIONS } from "@/lib/countries/data"

const productLinks = [
  { title: "Product overview", href: "/apps" },
  { title: "POS & Billing", href: "/features" },
  { title: "Inventory Management", href: "/inventory-management" },
  { title: "Purchasing & Vendors", href: "/purchase-orders" },
  { title: "Customer Management", href: "/customer-management" },
  { title: "Reporting & Insights", href: "/reporting-module" },
]

const industryLinks = [
  { title: "Retail stores", href: "/industries/retail-store" },
  { title: "Restaurants & cafes", href: "/industries/restaurant-pos" },
  { title: "Pharmacies", href: "/industries/pharmacy-store" },
  { title: "Bakeries", href: "/industries/bakery-pos-system" },
  { title: "Salons & spas", href: "/industries/salon-pos" },
  { title: "All industries", href: "/industries" },
]

const resourceLinks = [
  { title: "FBR compliance", href: "/fbr-integrated-pos-pakistan" },
  { title: "Pricing", href: "/pricing" },
  { title: "Customer stories", href: "/pos-case-studies" },
  { title: "Insights", href: "/blogs" },
  { title: "Integrations", href: "/integration" },
]

const companyLinks = [
  { title: "About Hulm", href: "/about" },
  { title: "Contact", href: "/contact" },
  { title: "Sign in", href: "https://app.hulmsolutions.com/", external: true },
]

const socialLinks = [
  { title: "LinkedIn", href: "https://www.linkedin.com/company/hulm-solutions/" },
  { title: "Instagram", href: "https://www.instagram.com/hulmsolutions1101/" },
  { title: "YouTube", href: "https://www.youtube.com/@Hulmsolutions" },
  { title: "Facebook", href: "https://www.facebook.com/Hulmsolutions" },
]

function FooterLinkGroup({ title, links }: { title: string, links: Array<{ title: string, href: string, external?: boolean }> }) {
  return (
    <div>
      <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-white">{title}</h3>
      <ul className="space-y-2.5">
        {links.map((link) => (
          <li key={link.title}>
            <Link
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="inline-flex items-center gap-1 text-sm text-slate-400 transition-colors hover:text-[#7ae582] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25a18e]"
            >
              {link.title}
              {link.external && <ArrowUpRight className="h-3 w-3" aria-hidden="true" />}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden border-t border-emerald-950/60 bg-[#07110e] text-slate-300">
      <div className="pointer-events-none absolute -top-28 left-1/2 h-64 w-full max-w-5xl -translate-x-1/2 bg-radial from-[#25a18e]/12 via-[#25a18e]/[0.03] to-transparent blur-3xl" aria-hidden="true" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#25a18e]/40 to-transparent" aria-hidden="true" />

      <Container className="relative py-14 sm:py-16">
        <div className="mb-14 grid gap-8 rounded-3xl border border-white/10 bg-white/[0.035] p-6 shadow-2xl shadow-black/10 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#7ae582]">Hulm POS</p>
            <h2 className="max-w-2xl text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Bring sales, inventory and every branch into one connected workflow.
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-400 sm:text-base">
              Start with the tools your team needs today and expand as your business grows.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
            <Link
              href="/contact"
              className="inline-flex h-11 items-center justify-center rounded-full border border-white/15 px-5 text-sm font-semibold text-white transition-colors hover:border-[#25a18e]/60 hover:bg-white/[0.05] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25a18e]"
            >
              Book a demo
            </Link>
            <Link
              href="https://app.hulmsolutions.com/Register"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex h-11 items-center justify-center gap-2 rounded-full bg-[#25a18e] px-5 text-sm font-semibold text-white transition-all hover:bg-[#1f8f80] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7ae582]"
            >
              Start free trial
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div className="grid gap-10 border-b border-white/[0.08] pb-12 sm:grid-cols-2 lg:grid-cols-6">
          <div className="sm:col-span-2 lg:col-span-2">
            <Link href="/" className="inline-block rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25a18e]" aria-label="Hulm homepage">
              <Image
                src="/images/logo/logo-dark.svg"
                alt="Hulm Solutions"
                width={180}
                height={56}
                className="h-10 w-auto object-contain"
              />
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-6 text-slate-400">
              Cloud POS for growing businesses that need faster sales, accurate stock and clearer control across every location.
            </p>

            <div className="mt-5 flex flex-col gap-2 text-sm">
              <a href="https://wa.me/923391119259" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-slate-300 transition-colors hover:text-[#7ae582]">
                <MessageCircle className="h-4 w-4 text-[#25a18e]" aria-hidden="true" />
                +92 339 111 9259
              </a>
              <a href="mailto:info@hulmsolutions.com" className="inline-flex items-center gap-2 text-slate-300 transition-colors hover:text-[#7ae582]">
                <Mail className="h-4 w-4 text-[#25a18e]" aria-hidden="true" />
                info@hulmsolutions.com
              </a>
            </div>
          </div>

          <FooterLinkGroup title="Product" links={productLinks} />
          <FooterLinkGroup title="Industries" links={industryLinks} />
          <FooterLinkGroup title="Resources" links={resourceLinks} />
          <FooterLinkGroup title="Company" links={companyLinks} />
        </div>

        <div className="border-b border-white/[0.08] py-6">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500">Regional editions</span>
            <div className="flex flex-wrap gap-x-5 gap-y-2">
              {REGIONAL_LOCATIONS.map((location) => (
                <Link key={location.code} href={location.href} className="text-xs font-medium text-slate-400 transition-colors hover:text-[#7ae582]">
                  <span className="mr-1.5" aria-hidden="true">{location.flag}</span>
                  {location.country}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5 pt-7 text-xs text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>&copy; {currentYear} Hulm Solutions (Pvt) Ltd. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <Link href="/privacy-policy" className="transition-colors hover:text-[#7ae582]">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="transition-colors hover:text-[#7ae582]">
              Terms &amp; Conditions
            </Link>
            {socialLinks.map((link) => (
              <a key={link.title} href={link.href} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-[#7ae582]">
                {link.title}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  )
}
