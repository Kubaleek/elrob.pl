import OfferContent from "@/components/ui/OfferPage/main";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Oferta",
  description:
    "Każdą usługę wykonujemy z pełnym zaangażowaniem, dbając o bezpieczeństwo i zadowolenie naszych klientów.",
};

export default function OfferPage() {
  return (
    <OfferContent />
  );
}
