import { Metadata } from "next";
import { AppTemplate } from "@/components/apps/app-template";
import { appsData } from "@/lib/apps/data";

const data = appsData["inventory-management"];

export const metadata: Metadata = {
  title: data?.metaTitle || "inventory-management - Hulm Solutions",
  description: data?.metaDescription || data?.hero?.subheadline,
  alternates: { canonical: "/inventory-management" },
};

export default function Page() {
  return <AppTemplate appSlug="inventory-management" />;
}
