import { Metadata } from "next";
import { AppTemplate } from "@/components/apps/app-template";
import { appsData } from "@/lib/apps/data";

const data = appsData["customer-management"];

export const metadata: Metadata = {
  title: data?.metaTitle || "customer-management - Hulm Solutions",
  description: data?.metaDescription || data?.hero?.subheadline,
};

export default function Page() {
  return <AppTemplate appSlug="customer-management" />;
}
