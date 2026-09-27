import { AppTemplate } from "@/components/apps/app-template";
import { productionMetadata } from "@/lib/production-parity";

export const metadata = productionMetadata("/cattle-management-software/");

export default function Page() {
  return <AppTemplate appSlug="cattle-management-software" />;
}
