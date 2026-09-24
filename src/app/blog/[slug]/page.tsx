import { Metadata } from "next";
import SingleInsightPage, { generateMetadata as insightMetadata, generateStaticParams as insightStaticParams } from "@/app/insights/[slug]/page";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return insightStaticParams();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const metadata = await insightMetadata({ params });
  const { slug } = await params;
  return {
    ...metadata,
    alternates: { canonical: `/blog/${slug}` },
  };
}

export default async function BlogSlugPage({ params }: Props) {
  return SingleInsightPage({ params });
}
