import { Metadata } from "next";
import { AppTemplate } from "@/components/apps/app-template";
import { appsData } from "@/lib/apps/data";

const data = appsData["mobile-pos"];

export const metadata: Metadata = {
  title: data?.metaTitle || "mobile-pos - Hulm Solutions",
  description: data?.metaDescription || data?.hero?.subheadline,
  alternates: { canonical: "/mobile-pos" },
};

export default function Page() {
  return <AppTemplate appSlug="mobile-pos" />;
}
