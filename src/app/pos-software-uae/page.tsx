import { Metadata } from "next";
import { CountryTemplate } from "@/components/country/country-template";

export const metadata: Metadata = {
  title: "Point of Sale Software in UAE | Best POS Software Dubai",
  description: "Discover Point of Sale Software in UAE designed for Restaurant, Retail, Grocery & Salon POS Software. Get Free POS System UAE Now!",
  openGraph: {
    title: "Point of Sale Software in UAE | Best POS Software Dubai",
    description: "Discover Point of Sale Software in UAE designed for Restaurant, Retail, Grocery & Salon POS Software. Get Free POS System UAE Now!",
  }
};

export default function Page() {
  return <CountryTemplate countryKey="pos-software-uae" />;
}
