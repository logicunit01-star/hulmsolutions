import { Metadata } from "next";
import { AppTemplate } from "@/components/apps/app-template";
import { appsData } from "@/lib/apps/data";

const data = appsData["vendors-management"];

export const metadata: Metadata = {
  title: data?.metaTitle || "vendors-management - Hulm Solutions",
  description: data?.metaDescription || data?.hero?.subheadline,
  alternates: { canonical: "/vendors-management" },
};

export default function Page() {
  return <AppTemplate appSlug="vendors-management" />;
}
