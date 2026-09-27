import { AppTemplate } from "@/components/apps/app-template";
import { productionMetadata } from "@/lib/production-parity";

export const metadata = productionMetadata("/logistics-management-software/");

export default function Page() {
  return <AppTemplate appSlug="logistics-management-software" />;
}
