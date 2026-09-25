import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const outfit = Outfit({
  variable: "--font-sans",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://hulmsolutions.com";
const gtmId = process.env.NEXT_PUBLIC_GTM_ID || "GTM-TMMQ565S";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Hulm Solutions - Making Every Sale Seamless",
    template: "%s | Hulm Solutions",
  },
  description: "Hulm Solutions delivers innovative POS software and management systems to revolutionize your business operations.",
  openGraph: {
    type: "website",
    siteName: "Hulm Solutions",
    title: {
      default: "Hulm Solutions",
      template: "%s | Hulm Solutions",
    },
    description: "Hulm Solutions delivers innovative POS software and management systems to revolutionize your business operations.",
    url: siteUrl,
  },
  twitter: {
    card: "summary_large_image",
  },
  verification: {
    google: "eja9u_sG9QlN7Hwff1OOVI1tP9koIfOzBF-XbvrzNEI",
  },
  icons: {
    icon: [
      { url: "/images/author/hulm-editorial-team.png" },
      { url: "/images/author/hulm-editorial-team.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/images/author/hulm-editorial-team.png",
    apple: "/images/author/hulm-editorial-team.png",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteUrl}/#organization`,
  name: "Hulm Solutions",
  url: siteUrl,
  logo: `${siteUrl}/images/logo/logo.png`,
  email: "info@hulmsolutions.com",
  telephone: "+92 339 111 9259",
  sameAs: [
    "https://www.linkedin.com/company/hulm-solutions/",
    "https://www.instagram.com/hulmsolutions1101/",
    "https://www.youtube.com/@Hulmsolutions",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  name: "Hulm Solutions",
  url: siteUrl,
  publisher: { "@id": `${siteUrl}/#organization` },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} antialiased flex min-h-screen flex-col`}>
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${gtmId}');`}
        </Script>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
            height="0"
            width="0"
            className="hidden"
            aria-hidden="true"
          />
        </noscript>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([organizationSchema, websiteSchema]).replace(/</g, "\\u003c"),
          }}
        />
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
