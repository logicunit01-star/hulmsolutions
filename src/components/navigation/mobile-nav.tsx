"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronDown } from "lucide-react"
import { mainNav, type NavItem } from "@/lib/navigation"
import { REGIONAL_LOCATIONS } from "@/lib/countries/data"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

function MobileNavItem({ item, pathname, onClick }: { item: NavItem, pathname: string, onClick: () => void }) {
  const [isOpen, setIsOpen] = useState(false);
  const hasChildren = item.children && item.children.length > 0;
  const isActive = pathname === item.href || (item.children?.some(c => c.href === pathname) ?? false);

  if (hasChildren) {
    return (
      <div className="flex flex-col space-y-1">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={cn(
            "flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-all",
            isActive ? "bg-[#25a18e]/10 text-[#25a18e]" : "text-zinc-700 hover:bg-zinc-50 hover:text-zinc-900"
          )}
        >
          <span>{item.title}</span>
          <ChevronDown className={cn("h-4 w-4 transition-transform text-zinc-400", isOpen && "rotate-180")} />
        </button>
        {isOpen && (
          <div className="flex flex-col space-y-1 pl-4 border-l-2 border-[#25a18e]/20 ml-4 py-1">
            {item.children!.map((child) => (
              <Link
                key={child.href}
                href={child.href}
                onClick={onClick}
                className={cn(
                  "px-3 py-2 rounded-lg text-xs font-medium transition-colors",
                  pathname === child.href ? "text-[#25a18e] font-semibold" : "text-zinc-500 hover:text-zinc-900"
                )}
              >
                {child.title}
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <Link
      href={item.href}
      onClick={onClick}
      className={cn(
        "flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-all",
        isActive ? "bg-[#25a18e]/10 text-[#25a18e]" : "text-zinc-700 hover:bg-zinc-50 hover:text-zinc-900"
      )}
    >
      <span>{item.title}</span>
      {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#25a18e]" />}
    </Link>
  );
}

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setIsOpen(true)}
        className="flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-200/80 bg-white text-zinc-700 hover:text-[#152825] hover:bg-zinc-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25a18e]"
        aria-label="Open menu"
        aria-expanded={isOpen}
      >
        <Menu className="h-5 w-5" />
      </button>

      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm transition-opacity"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Menu Panel */}
      <div
        className={cn(
          "fixed inset-y-0 right-0 z-50 w-full max-w-xs sm:max-w-sm border-l border-zinc-200 bg-white shadow-2xl transition-transform duration-300 ease-in-out flex flex-col",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between border-b border-zinc-100 px-5 py-4">
          <Link href="/" onClick={() => setIsOpen(false)}>
            <img 
              src="/images/logo/logo.png" 
              alt="Hulm Solutions" 
              className="h-8 w-auto object-contain" 
            />
          </Link>
          <button
            onClick={() => setIsOpen(false)}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100 transition-colors"
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        
        {/* Nav Links */}
        <div className="flex-1 overflow-y-auto p-5 flex flex-col space-y-2">
          <nav className="flex flex-col space-y-1">
            {mainNav.map((item) => (
              <MobileNavItem 
                key={item.title} 
                item={item} 
                pathname={pathname} 
                onClick={() => setIsOpen(false)} 
              />
            ))}
          </nav>

          {/* Regional Editions */}
          <div className="pt-4 border-t border-zinc-100">
            <div className="text-[11px] font-semibold text-zinc-400 uppercase tracking-wider px-1 mb-2">
              Global Editions
            </div>
            <div className="grid grid-cols-1 gap-1.5">
              {REGIONAL_LOCATIONS.map((loc) => (
                <Link
                  key={loc.code}
                  href={loc.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "flex items-center justify-between p-2.5 rounded-xl text-xs font-medium border transition-all",
                    pathname === loc.href
                      ? "bg-[#152825] text-white border-[#152825]"
                      : "bg-zinc-50 hover:bg-zinc-100 text-zinc-700 border-zinc-200/60"
                  )}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-base leading-none">{loc.flag}</span>
                    <span className="font-semibold">{loc.country}</span>
                  </div>
                  <span className={cn(
                    "text-[10px] px-2 py-0.5 rounded-full font-medium",
                    pathname === loc.href ? "bg-[#7ae582]/20 text-[#a7f3d0]" : "bg-zinc-200/60 text-zinc-600"
                  )}>
                    {loc.role}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Actions */}
        <div className="border-t border-zinc-100 p-5 space-y-3 bg-zinc-50/50">
          <Button 
            variant="outline" 
            className="w-full text-xs font-semibold h-10 rounded-xl border-zinc-200 text-zinc-700 hover:bg-zinc-100" 
            asChild
          >
            <Link href="https://app.hulmsolutions.com/" target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)}>
              Go to apps
            </Link>
          </Button>

          <Button 
            className="w-full bg-[#152825] hover:bg-[#25a18e] text-white text-xs font-semibold h-10 rounded-xl shadow-md transition-colors" 
            asChild
          >
            <Link href="https://app.hulmsolutions.com/Register" target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)}>
              Get Started
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
