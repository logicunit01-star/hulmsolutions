import type { Metadata } from "next";

import { ProductionParityPage } from "@/components/seo/production-parity-page";
import { productionMetadata, productionParityPaths } from "@/lib/production-parity";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return productionParityPaths
    .filter((route) => route.startsWith("/blog/"))
    .map((route) => ({ slug: route.split("/")[2] }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  return productionMetadata(`/blog/${slug}/`);
}

export default async function BlogPage({ params }: Props) {
  const { slug } = await params;
  return <ProductionParityPage path={`/blog/${slug}/`} />;
}
