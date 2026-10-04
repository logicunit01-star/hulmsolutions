"use client";

import { usePathname } from "next/navigation";
import { MessageCircle } from "lucide-react";

import { whatsappUrl } from "@/lib/contact-info";

/** Floating WhatsApp button; the pre-filled message names the page the visitor is on. */
export function WhatsAppFloat() {
  const pathname = usePathname() || "/";
  if (pathname.startsWith("/thank-you")) return null;
  const topic =
    pathname === "/"
      ? "Hulm POS"
      : pathname
          .replace(/^\/|\/$/g, "")
          .split("/")
          .pop()!
          .replace(/-/g, " ");
  return (
    <a
      href={whatsappUrl(`Hi Hulm, I'm interested in ${topic}. (Page: ${pathname})`)}
      target="_blank"
      rel="noopener noreferrer"
      data-track-location="whatsapp_float"
      aria-label="Chat with Hulm on WhatsApp"
      className="wa-float fixed bottom-4 right-4 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#1f9d55] text-white shadow-[0_10px_30px_rgba(0,0,0,0.25)] transition hover:bg-[#17803f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#1f9d55] sm:bottom-6 sm:right-6"
    >
      <MessageCircle className="h-7 w-7" aria-hidden="true" />
    </a>
  );
}
