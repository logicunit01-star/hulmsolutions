import type { Metadata } from "next";

import { ProductionParityPage } from "@/components/seo/production-parity-page";
import { productionMetadata, productionParityPaths } from "@/lib/production-parity";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return productionParityPaths
    .filter((route) => route.startsWith("/pos-case-studies/") && route !== "/pos-case-studies/")
    .map((route) => ({ slug: route.split("/")[2] }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  return productionMetadata(`/pos-case-studies/${slug}/`);
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  return <ProductionParityPage path={`/pos-case-studies/${slug}/`} />;
}
