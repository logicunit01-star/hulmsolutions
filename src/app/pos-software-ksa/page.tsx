import { Metadata } from "next";
import { CountryTemplate } from "@/components/country/country-template";

export const metadata: Metadata = {
  title: "POS | Point of Sale Software in Saudi Arabia | POS in KSA",
  description: "Discover Point of Sale POS Software designed to simplify businesses operations with a POS system in Saudi Arabia. Get Free POS Demo Now!",
  openGraph: {
    title: "POS | Point of Sale Software in Saudi Arabia | POS in KSA",
    description: "Discover Point of Sale POS Software designed to simplify businesses operations with a POS system in Saudi Arabia. Get Free POS Demo Now!",
  }
};

export default function Page() {
  return <CountryTemplate countryKey="pos-software-ksa" />;
}
