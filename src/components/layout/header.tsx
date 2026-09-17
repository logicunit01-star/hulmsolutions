"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Logo } from "./logo"
import { mainNav } from "@/lib/navigation"
import { MobileNav } from "@/components/navigation/mobile-nav"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import { cn } from "@/lib/utils"
import { ArrowRight, Phone, Mail } from "lucide-react"
import { RegionSelector } from "@/components/navigation/region-selector"

const Linkedin = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
);
const Instagram = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
);
const Youtube = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M2.5 7.1C2.6 6 3.5 5.1 4.6 5 9.5 4.7 14.5 4.7 19.4 5c1.1.1 2 1 2.1 2.1.3 1.6.3 3.3.3 4.9 0 1.6 0 3.3-.3 4.9-.1 1.1-1 2-2.1 2.1-4.9.3-9.9.3-14.8 0-1.1-.1-2-1-2.1-2.1-.3-1.6-.3-3.3-.3-4.9 0-1.6 0-3.3.3-4.9z" /><path d="m10 15 5-3-5-3v6z" /></svg>
);

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Utility Bar - In page flow: naturally visible at top, hides when scrolling down, shows when scrolling to top */}
      <div className="bg-[#F9FAFB] border-b border-zinc-200/60 text-xs text-zinc-500 py-1.5 hidden md:block w-full relative z-[70]">
        <Container className="flex items-center justify-between">
          <div className="flex items-center gap-6 text-[11.5px]">
            <a
              href="tel:+923391119259"
              className="flex items-center gap-1 hover:text-[#152825] transition-colors"
            >
              <Phone className="w-3 h-3 text-[#25a18e]" />
              <span>+92 339 1119259</span>
            </a>
            <a
              href="mailto:info@hulmsolutions.com"
              className="flex items-center gap-1 hover:text-[#152825] transition-colors"
            >
              <Mail className="w-3 h-3 text-[#25a18e]" />
              <span>info@hulmsolutions.com</span>
            </a>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-[#25a18e] transition-colors" aria-label="Instagram">
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-[#25a18e] transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-3.5 h-3.5" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-[#25a18e] transition-colors" aria-label="YouTube">
                <Youtube className="w-3.5 h-3.5" />
              </a>
            </div>
            <div className="h-3 w-px bg-zinc-200" />
            <RegionSelector />
          </div>
        </Container>
      </div>

      {/* Main Navigation Bar - Sticky at top with fixed padding and zero layout shifts */}
      <header
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-200 bg-white",
          isScrolled
            ? "bg-white/95 backdrop-blur-xl shadow-[0_4px_25px_rgba(0,0,0,0.06)] border-b border-zinc-200/80"
            : "border-b border-zinc-100"
        )}
      >
        <Container className="flex items-center justify-between py-3.5 sm:py-4">
          {/* Logo & Navigation */}
          <div className="flex items-center gap-8 xl:gap-12">
            <Logo />

            <nav className="hidden md:flex items-center gap-1">
              {mainNav.map((item) => {
                const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "px-3.5 py-2 rounded-full text-[13.5px] font-medium transition-all duration-200",
                      isActive
                        ? "text-[#152825] font-semibold bg-zinc-100 shadow-xs"
                        : "text-[#475467] hover:text-[#152825] hover:bg-zinc-50"
                    )}
                  >
                    {item.title}
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Action CTAs & Mobile Nav */}
          <div className="flex items-center gap-3">
            <div className="hidden lg:flex items-center gap-3">
              <Button
                asChild
                variant="ghost"
                className="text-xs font-semibold text-[#475467] hover:text-[#152825] hover:bg-zinc-100/80 rounded-full h-9 px-4 transition-all duration-200"
              >
                <Link href="https://app.hulmsolutions.com/" target="_blank" rel="noopener noreferrer">
                  Go to apps
                </Link>
              </Button>

              <Button
                asChild
                className="bg-[#152825] hover:bg-[#25a18e] text-white text-xs font-semibold h-10 px-5 rounded-full shadow-[0_2px_12px_rgba(21,40,37,0.14)] hover:shadow-[0_4px_16px_rgba(37,161,142,0.25)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center gap-1.5 group"
              >
                <Link href="https://app.hulmsolutions.com/Register" target="_blank" rel="noopener noreferrer">
                  <span>Get Started</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </Button>
            </div>

            <MobileNav />
          </div>
        </Container>
      </header>
    </>
  )
}
