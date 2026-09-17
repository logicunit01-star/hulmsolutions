import { Metadata } from "next";
import { ComplianceTemplate } from "@/components/country/compliance-template";

export const metadata: Metadata = {
  title: "ZATCA-Compliant POS Software | E-Invoicing for KSA",
  description: "Meet ZATCA Phase 1 & 2 requirements with Hulm's e-invoicing POS. QR codes, real-time reporting, and FATOORA integration for Saudi businesses.",
  openGraph: {
    title: "ZATCA-Compliant POS Software | E-Invoicing for KSA",
    description: "Meet ZATCA Phase 1 & 2 requirements with Hulm's e-invoicing POS. QR codes, real-time reporting, and FATOORA integration for Saudi businesses.",
  }
};

export default function Page() {
  return <ComplianceTemplate complianceKey="zatca" />;
}
