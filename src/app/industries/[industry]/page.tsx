import type { Metadata } from "next";

import { ProductionParityPage } from "@/components/seo/production-parity-page";
import { productionMetadata, productionParityPaths } from "@/lib/production-parity";

type Props = { params: Promise<{ industry: string }> };

export function generateStaticParams() {
  return productionParityPaths
    .filter((route) => route.startsWith("/industries/") && route !== "/industries/")
    .map((route) => ({ industry: route.split("/")[2] }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { industry } = await params;
  return productionMetadata(`/industries/${industry}/`);
}

export default async function IndustryPage({ params }: Props) {
  const { industry } = await params;
  return <ProductionParityPage path={`/industries/${industry}/`} />;
}
