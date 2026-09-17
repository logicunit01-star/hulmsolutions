import { Metadata } from "next";
import { AppTemplate } from "@/components/apps/app-template";
import { appsData } from "@/lib/apps/data";

const data = appsData["purchase-orders"];

export const metadata: Metadata = {
  title: data?.metaTitle || "purchase-orders - Hulm Solutions",
  description: data?.metaDescription || data?.hero?.subheadline,
};

export default function Page() {
  return <AppTemplate appSlug="purchase-orders" />;
}
