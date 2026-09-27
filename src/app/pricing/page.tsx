import { ProductionParityPage } from "@/components/seo/production-parity-page";
import { productionMetadata } from "@/lib/production-parity";

const route = "/pricing/";

export const metadata = productionMetadata(route);

export default function Page() {
  return <ProductionParityPage path={route} />;
}
