import { Metadata } from "next";
import SingleInsightPage, { generateMetadata as insightMetadata, generateStaticParams as insightStaticParams } from "@/app/insights/[slug]/page";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return insightStaticParams();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return insightMetadata({ params });
}

export default async function BlogSlugPage({ params }: Props) {
  return SingleInsightPage({ params });
}
