import { Metadata } from "next";
import { AppTemplate } from "@/components/apps/app-template";
import { appsData } from "@/lib/apps/data";

const data = appsData["logistics-management-software"];

export const metadata: Metadata = {
  title: data?.metaTitle || "logistics-management-software - Hulm Solutions",
  description: data?.metaDescription || data?.hero?.subheadline,
  alternates: { canonical: "/logistics-management-software" },
};

export default function Page() {
  return <AppTemplate appSlug="logistics-management-software" />;
}
