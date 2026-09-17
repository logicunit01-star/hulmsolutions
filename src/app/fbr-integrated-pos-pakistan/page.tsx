import { Metadata } from "next";
import { ComplianceTemplate } from "@/components/country/compliance-template";

export const metadata: Metadata = {
  title: "FBR Integrated POS Software in Pakistan | Hulm POS",
  description: "Get FBR-compliant POS with automated tax invoicing, QR codes, and real-time reporting. Free FBR integration setup for retailers across Pakistan.",
  openGraph: {
    title: "FBR Integrated POS Software in Pakistan | Hulm POS",
    description: "Get FBR-compliant POS with automated tax invoicing, QR codes, and real-time reporting. Free FBR integration setup for retailers across Pakistan.",
  }
};

export default function Page() {
  return <ComplianceTemplate complianceKey="fbr-integrated-pos-pakistan" />;
}
