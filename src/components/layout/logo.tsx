import React from "react"
import Image from "next/image"
import Link from "next/link"

export function Logo({ className }: { className?: string }) {
  return (
    <Link 
      href="/" 
      className="flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25a18e] rounded-lg shrink-0 transition-opacity hover:opacity-95"
    >
      <Image
        src="/images/logo/logo.png"
        alt="Hulm - Making Every Sale Seamless"
        width={160}
        height={51}
        className={className || "h-9 sm:h-10 w-auto object-contain"}
        priority
      />
    </Link>
  )
}
