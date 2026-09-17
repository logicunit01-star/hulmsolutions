"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"
import { Container } from "@/components/ui/container"
import { 
  ShieldCheck, 
  ArrowUpRight, 
  Mail, 
  CheckCircle2, 
  ArrowUp,
  Sparkles
} from "lucide-react"

// Social Icons SVGs with high-precision brand paths
const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" {...props}>
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
)

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" {...props}>
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
)

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" {...props}>
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
)

const YoutubeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" {...props}>
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
)

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" {...props}>
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
  </svg>
)

const socialChannels = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/hulm-solutions/",
    icon: LinkedinIcon,
    hoverBg: "hover:bg-[#0077b5]/20 hover:border-[#0077b5]/50 hover:text-[#0077b5]",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/hulmsolutions1101/",
    icon: InstagramIcon,
    hoverBg: "hover:bg-[#e1306c]/20 hover:border-[#e1306c]/50 hover:text-[#e1306c]",
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@Hulmsolutions",
    icon: YoutubeIcon,
    hoverBg: "hover:bg-[#ff0000]/20 hover:border-[#ff0000]/50 hover:text-[#ff0000]",
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/Hulmsolutions",
    icon: FacebookIcon,
    hoverBg: "hover:bg-[#1877f2]/20 hover:border-[#1877f2]/50 hover:text-[#1877f2]",
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/923391119259",
    icon: WhatsAppIcon,
    hoverBg: "hover:bg-[#25d366]/20 hover:border-[#25d366]/50 hover:text-[#25d366]",
  },
]

const industriesLinks = [
  { title: "Retail Store", href: "/industries/retail-store/" },
  { title: "Restaurant & Cafe", href: "/industries/restaurant-pos/" },
  { title: "Pharmacy Store", href: "/industries/pharmacy-store/" },
  { title: "Salon & Spa", href: "/industries/salon-pos/" },
  { title: "Clothing Store", href: "/industries/clothing-store/" },
  { title: "Bakery & Sweets", href: "/industries/bakery/" },
  { title: "Manufacturing Industry", href: "/industries/manufacturing-industries/" },
  { title: "Furniture Store", href: "/industries/furniture-store/" },
  { title: "Jewelry Shop", href: "/industries/jewellery-shop/" },
  { title: "Electric Store", href: "/industries/electric-store/" },
]

const appsLinks = [
  { title: "POS & Billing", href: "/features/", badge: null },
  { title: "Order Management", href: "/order-management/", badge: null },
  { title: "Inventory Management", href: "/inventory-management/", badge: null },
  { title: "Purchase Orders", href: "/purchase-orders/", badge: null },
  { title: "Vendor Management", href: "/vendors-management/", badge: null },
  { title: "Cattle Management", href: "/cattle-management-software/", badge: "Pro" },
  { title: "Customer CRM", href: "/customer-management/", badge: null },
  { title: "Reporting Module", href: "/reporting-module/", badge: null },
  { title: "Logistics Software", href: "/logistics-management-software/", badge: null },
  { title: "Mobile POS", href: "/mobile-pos/", badge: "iOS & Android" },
]

const integrationLinks = [
  { title: "FBR Invoicing Integration", href: "/fbr-integrated-pos-pakistan/", badge: "Pakistan" },
  { title: "ZATCA Invoicing (Phase 2)", href: "/zatca/", badge: "KSA" },
  { title: "POS Integrations", href: "/integration/", badge: null },
  { title: "Multi-Branch Cloud Sync", href: "/features/", badge: null },
  { title: "Hardware & Barcodes", href: "/features/", badge: null },
  { title: "Payment Terminals", href: "/integration/", badge: null },
]

const locationsLinks = [
  { country: "Pakistan", flag: "🇵🇰", role: "HQ & Engineering", href: "/fbr-integrated-pos-pakistan/" },
  { country: "Saudi Arabia", flag: "🇸🇦", role: "ZATCA Phase-2", href: "/pos-software-ksa/" },
  { country: "United Arab Emirates", flag: "🇦🇪", role: "Gulf Regional", href: "/pos-software-uae/" },
  { country: "United States", flag: "🇺🇸", role: "North America", href: "/pos-software-usa/" },
  { country: "Qatar", flag: "🇶🇦", role: "Middle East", href: "/pos-software-qatar/" },
]

const companyLinks = [
  { title: "About Hulm", href: "/about/" },
  { title: "POS Features", href: "/features/" },
  { title: "POS Pricing", href: "/pricing/" },
  { title: "Case Studies", href: "/case-studies/" },
  { title: "Insights & Blog", href: "/insights/" },
  { title: "Contact Us", href: "/contact/" },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  return (
    <footer className="relative bg-[#07110e] text-slate-300 border-t border-emerald-950/60 overflow-hidden selection:bg-[#25a18e]/30 selection:text-emerald-200">
      {/* Ambient Top Glow / Radial Lighting */}
      <div 
        className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-full max-w-5xl h-56 bg-radial from-[#25a18e]/12 via-[#25a18e]/[0.03] to-transparent blur-3xl" 
        aria-hidden="true"
      />

      {/* Decorative Grid Light Line */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#25a18e]/40 to-transparent" />

      <Container className="relative pt-16 pb-12">
        {/* ==================================================================== */}
        {/* TOP ARCHITECTURAL ROW: Brand Identity, Live Status & Official Badges */}
        {/* ==================================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-white/[0.08] items-start">
          
          {/* Brand & Mission */}
          <div className="lg:col-span-7 flex flex-col space-y-5">
            <div className="flex items-center gap-3">
              <Link 
                href="/" 
                className="inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25a18e] rounded-lg transition-transform hover:scale-[1.02]"
                aria-label="Hulm Homepage"
              >
                <Image
                  src="/images/logo/logo-dark.svg"
                  alt="Hulm - Making Every Sale Seamless"
                  width={180}
                  height={56}
                  className="h-10 sm:h-11 w-auto object-contain"
                  priority
                />
              </Link>
            </div>

            <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-xl">
              Next-generation cloud Point of Sale, multi-branch inventory, and automated tax invoicing platform built for high-growth retailers, restaurants, and enterprises across the globe.
            </p>

            {/* Status Strip & Fast Connect Chips */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              {/* Live Status Chip */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-950/60 border border-emerald-500/25 text-emerald-400 text-xs font-medium backdrop-blur-sm shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>All Systems Operational</span>
                <span className="text-emerald-500/40">•</span>
                <span className="text-slate-400 font-normal">99.99% Uptime</span>
              </div>

              {/* Direct WhatsApp Callout */}
              <a
                href="https://wa.me/923391119259"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] hover:border-[#25d366]/50 hover:bg-[#25d366]/10 text-slate-300 hover:text-white text-xs font-medium transition-all group"
              >
                <WhatsAppIcon className="w-3.5 h-3.5 text-[#25d366] group-hover:scale-110 transition-transform" />
                <span>+92 339 111 9259</span>
              </a>

              {/* Direct Mail Chip */}
              <a
                href="mailto:info@hulmsolutions.com"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] hover:border-[#25a18e]/50 hover:bg-[#25a18e]/10 text-slate-300 hover:text-white text-xs font-medium transition-all group"
              >
                <Mail className="w-3.5 h-3.5 text-[#7ae582] group-hover:scale-110 transition-transform" />
                <span>info@hulmsolutions.com</span>
              </a>
            </div>

            {/* Social Icons Strip */}
            <div className="flex items-center gap-2.5 pt-2">
              <span className="text-xs font-medium text-slate-500 mr-1 uppercase tracking-wider">Connect:</span>
              {socialChannels.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex h-9 w-9 items-center justify-center rounded-xl bg-white/[0.03] border border-white/[0.08] text-slate-400 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25a18e] ${social.hoverBg} hover:-translate-y-0.5`}
                    aria-label={`Follow Hulm Solutions on ${social.name}`}
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Official Compliance Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-gradient-to-br from-white/[0.05] to-white/[0.01] border border-white/[0.1] p-5 sm:p-6 backdrop-blur-md hover:border-[#25a18e]/40 transition-all duration-300 group shadow-lg">
              
              {/* Card Header */}
              <div className="flex items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-[#25a18e]/20 border border-[#25a18e]/30 flex items-center justify-center text-[#7ae582] group-hover:scale-105 transition-transform">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold text-white uppercase tracking-wider">
                      Compliance By
                    </h3>
                    <p className="text-[11px] text-slate-400">
                      Certified & Approved Invoicing Integration
                    </p>
                  </div>
                </div>

                <span className="inline-flex items-center gap-1 text-[10px] font-semibold px-2.5 py-1 rounded-full bg-emerald-500/15 text-[#7ae582] border border-emerald-500/30">
                  <CheckCircle2 className="w-3 h-3" />
                  Govt Approved
                </span>
              </div>

              {/* Badges Display Grid */}
              <div className="grid grid-cols-2 gap-3 items-center bg-[#050b09]/80 rounded-xl p-3.5 border border-white/[0.06]">
                {/* FBR Pakistan */}
                <Link
                  href="/fbr-integrated-pos-pakistan/"
                  className="flex flex-col items-center justify-center p-2.5 rounded-lg bg-white/[0.02] hover:bg-white/[0.06] border border-transparent hover:border-white/[0.08] transition-all group/fbr text-center"
                >
                  <div className="relative h-10 w-full flex items-center justify-center">
                    <Image
                      src="/images/home/compliance/fbr-pakistan.webp"
                      alt="FBR Pakistan Certified POS"
                      width={120}
                      height={46}
                      className="h-9 w-auto object-contain opacity-95 group-hover/fbr:opacity-100 transition-opacity"
                    />
                  </div>
                  <span className="text-[11px] text-slate-300 font-medium mt-1.5 flex items-center gap-1">
                    FBR Pakistan
                    <ArrowUpRight className="w-3 h-3 text-slate-500 group-hover/fbr:text-[#7ae582] transition-colors" />
                  </span>
                </Link>

                {/* ZATCA Saudi Arabia */}
                <Link
                  href="/zatca/"
                  className="flex flex-col items-center justify-center p-2.5 rounded-lg bg-white/[0.02] hover:bg-white/[0.06] border border-transparent hover:border-white/[0.08] transition-all group/zatca text-center"
                >
                  <div className="relative h-10 w-full flex items-center justify-center">
                    <Image
                      src="/images/home/compliance/zatca-saudi.webp"
                      alt="ZATCA Saudi Arabia Invoicing Phase 2"
                      width={140}
                      height={40}
                      className="h-8 w-auto object-contain opacity-95 group-hover/zatca:opacity-100 transition-opacity"
                    />
                  </div>
                  <span className="text-[11px] text-slate-300 font-medium mt-1.5 flex items-center gap-1">
                    ZATCA Phase 2
                    <ArrowUpRight className="w-3 h-3 text-slate-500 group-hover/zatca:text-[#7ae582] transition-colors" />
                  </span>
                </Link>
              </div>

              {/* Bottom Assurance Note */}
              <div className="mt-3 flex items-center justify-between text-[11px] text-slate-400 pt-2 border-t border-white/[0.06]">
                <span>100% Tax Compliant Real-Time Reporting</span>
                <span className="text-[#7ae582] font-medium">Zero Penalty Guarantee</span>
              </div>
            </div>
          </div>

        </div>

        {/* ==================================================================== */}
        {/* MAIN BIG TECH SITEMAP: 5 High-Density, Structured Columns */}
        {/* ==================================================================== */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-8 py-14">
          
          {/* Column 1: Industries */}
          <div className="flex flex-col space-y-4">
            <h4 className="font-semibold text-white text-xs uppercase tracking-wider flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#25a18e]" />
              Industries
            </h4>
            <ul className="flex flex-col space-y-2.5">
              {industriesLinks.map((link) => (
                <li key={link.title}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-[#7ae582] transition-all duration-150 text-sm font-normal hover:translate-x-1 inline-block"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Apps & Core Modules */}
          <div className="flex flex-col space-y-4">
            <h4 className="font-semibold text-white text-xs uppercase tracking-wider flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#7ae582]" />
              Apps & Modules
            </h4>
            <ul className="flex flex-col space-y-2.5">
              {appsLinks.map((link) => (
                <li key={link.title}>
                  <Link
                    href={link.href}
                    className="group/app flex items-center justify-between text-slate-400 hover:text-[#7ae582] transition-all duration-150 text-sm font-normal hover:translate-x-1"
                  >
                    <span>{link.title}</span>
                    {link.badge && (
                      <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded bg-[#25a18e]/15 text-[#7ae582] border border-[#25a18e]/30">
                        {link.badge}
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Platform & Invoicing */}
          <div className="flex flex-col space-y-4">
            <h4 className="font-semibold text-white text-xs uppercase tracking-wider flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#25a18e]" />
              Integrations & Tax
            </h4>
            <ul className="flex flex-col space-y-2.5">
              {integrationLinks.map((link) => (
                <li key={link.title}>
                  <Link
                    href={link.href}
                    className="group/int flex items-center justify-between text-slate-400 hover:text-[#7ae582] transition-all duration-150 text-sm font-normal hover:translate-x-1"
                  >
                    <span className="truncate pr-2">{link.title}</span>
                    {link.badge && (
                      <span className="text-[9px] font-semibold px-1.5 py-0.2 rounded bg-white/[0.06] text-slate-300 border border-white/[0.1] shrink-0">
                        {link.badge}
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Global Presence */}
          <div className="flex flex-col space-y-4">
            <h4 className="font-semibold text-white text-xs uppercase tracking-wider flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#7ae582]" />
              Global Presence
            </h4>
            <ul className="flex flex-col space-y-3">
              {locationsLinks.map((loc) => (
                <li key={loc.country}>
                  <Link
                    href={loc.href}
                    className="group/loc flex items-start gap-2.5 text-slate-400 hover:text-white transition-all duration-150"
                  >
                    <span className="text-base leading-none pt-0.5">{loc.flag}</span>
                    <div>
                      <div className="text-sm font-medium text-slate-300 group-hover/loc:text-[#7ae582] transition-colors flex items-center gap-1">
                        {loc.country}
                        <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover/loc:opacity-100 group-hover/loc:translate-x-0 transition-all text-[#7ae582]" />
                      </div>
                      <div className="text-[11px] text-slate-500 font-normal">
                        {loc.role}
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Company & Direct Contact */}
          <div className="col-span-2 md:col-span-1 flex flex-col space-y-4">
            <h4 className="font-semibold text-white text-xs uppercase tracking-wider flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#25a18e]" />
              Company & Contact
            </h4>
            <ul className="flex flex-col space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.title}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-[#7ae582] transition-all duration-150 text-sm font-normal hover:translate-x-1 inline-block"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Quick Demo CTA Card inside Footer */}
            <div className="pt-3">
              <Link
                href="/contact/"
                className="group flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-gradient-to-r from-[#25a18e]/20 to-[#7ae582]/10 border border-[#25a18e]/30 hover:border-[#25a18e]/60 text-white text-xs font-semibold transition-all hover:shadow-[0_0_20px_rgba(37,161,142,0.2)]"
              >
                <div className="flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-[#7ae582]" />
                  <span>Request Live Demo</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#7ae582] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </div>

        </div>

        {/* ==================================================================== */}
        {/* BOTTOM BAR: Security, Copyright, Legal Links & Back To Top */}
        {/* ==================================================================== */}
        <div className="pt-8 border-t border-white/[0.08] flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Copyright & Security Microcopy */}
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-xs text-slate-500 text-center sm:text-left">
            <span>&copy; {currentYear} Hulm Solutions (Pvt) Ltd. All rights reserved.</span>
            <span className="hidden sm:inline text-slate-700">•</span>
            <span className="flex items-center gap-1.5 text-slate-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              Enterprise-Grade 256-bit Cloud Security
            </span>
          </div>

          {/* Legal Links & Back To Top */}
          <div className="flex items-center gap-6 text-xs text-slate-400 font-medium">
            <Link 
              href="/privacy-policy/" 
              className="hover:text-[#7ae582] transition-colors focus-visible:outline-none focus-visible:underline"
            >
              Privacy Policy
            </Link>
            <Link 
              href="/terms-and-conditions/" 
              className="hover:text-[#7ae582] transition-colors focus-visible:outline-none focus-visible:underline"
            >
              Terms & Conditions
            </Link>
            
            {/* Smooth Scroll to Top Button */}
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.04] hover:bg-[#25a18e]/15 border border-white/[0.08] hover:border-[#25a18e]/40 text-slate-300 hover:text-[#7ae582] transition-all cursor-pointer group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25a18e]"
              aria-label="Scroll back to top of page"
            >
              <span>Top</span>
              <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

        </div>
      </Container>
    </footer>
  )
}

