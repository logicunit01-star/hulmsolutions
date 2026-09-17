import { Metadata } from "next";
import { AppTemplate } from "@/components/apps/app-template";
import { appsData } from "@/lib/apps/data";

const data = appsData["reporting-module"];

export const metadata: Metadata = {
  title: data?.metaTitle || "reporting-module - Hulm Solutions",
  description: data?.metaDescription || data?.hero?.subheadline,
};

export default function Page() {
  return <AppTemplate appSlug="reporting-module" />;
}
