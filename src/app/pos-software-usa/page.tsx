import { Metadata } from "next";
import { CountryTemplate } from "@/components/country/country-template";

export const metadata: Metadata = {
  title: "Best Point of Sale (POS) Software in USA | Hulm POS",
  description: "Discover Point of Sale (POS) Software designed to simplify businesses operations with Cloud Based POS software in USA. Get Free POS Demo Now!",
  alternates: { canonical: "/pos-software-usa" },
  openGraph: {
    title: "Best Point of Sale (POS) Software in USA | Hulm POS",
    description: "Discover Point of Sale (POS) Software designed to simplify businesses operations with Cloud Based POS software in USA. Get Free POS Demo Now!",
  }
};

export default function Page() {
  return <CountryTemplate countryKey="pos-software-usa" />;
}
