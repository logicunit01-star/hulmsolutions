import { Metadata } from "next";
import { AppTemplate } from "@/components/apps/app-template";
import { appsData } from "@/lib/apps/data";

const data = appsData["cattle-management-software"];

export const metadata: Metadata = {
  title: data?.metaTitle || "cattle-management-software - Hulm Solutions",
  description: data?.metaDescription || data?.hero?.subheadline,
};

export default function Page() {
  return <AppTemplate appSlug="cattle-management-software" />;
}
