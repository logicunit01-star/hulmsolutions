import { notFound } from "next/navigation";

import { getProductionParityPage } from "@/lib/production-parity";

export function ProductionParityPage({ path }: { path: string }) {
  const page = getProductionParityPage(path);
  if (!page) notFound();

  return (
    <div className={`production-parity-page ${page.bodyClass || ""}`} data-production-source={page.path}>
      {page.stylesheets?.map((href) => <link key={href} rel="stylesheet" href={href} />)}
      {page.schemas.map((schema, index) => (
        <script
          key={`${page.path}-schema-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: schema.replace(/</g, "\\u003c") }}
        />
      ))}
      <div dangerouslySetInnerHTML={{ __html: page.mainHtml }} />
    </div>
  );
}
