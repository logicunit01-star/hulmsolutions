import { notFound } from "next/navigation";
import { Metadata } from "next";
import { appsData } from "@/lib/apps/data";
import { AppTemplate } from "@/components/apps/app-template";

type Props = {
  params: Promise<{ app: string }>;
};

export async function generateStaticParams() {
  return Object.keys(appsData).map((app) => ({
    app,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const p = await params;
  const data = appsData[p.app];

  if (!data) {
    return { title: "App Not Found - Hulm Solutions" };
  }

  return {
    title: data.metaTitle || `${data.title} - Hulm Solutions`,
    description: data.metaDescription || data.hero.subheadline,
    openGraph: {
      title: data.metaTitle || `${data.title} - Hulm Solutions`,
      description: data.metaDescription || data.hero.subheadline,
    },
  };
}

export default async function SubAppPage({ params }: Props) {
  const p = await params;
  const data = appsData[p.app];

  if (!data) {
    notFound();
  }

  return <AppTemplate appSlug={p.app} />;
}
