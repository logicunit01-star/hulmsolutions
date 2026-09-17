import { Metadata } from "next";
import { CountryTemplate } from "@/components/country/country-template";

export const metadata: Metadata = {
  title: "Point of Sale in Qatar | POS Qatar | POS System Qatar",
  description: "Looking for best POS system in Qatar? Our cloud POS and mobile POS help businesses to manage sales easily. Try Point of sale in Qatar now!",
  openGraph: {
    title: "Point of Sale in Qatar | POS Qatar | POS System Qatar",
    description: "Looking for best POS system in Qatar? Our cloud POS and mobile POS help businesses to manage sales easily. Try Point of sale in Qatar now!",
  }
};

export default function Page() {
  return <CountryTemplate countryKey="pos-software-qatar" />;
}
