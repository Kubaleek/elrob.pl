import ContactContent from "@/components/ui/ContactPage/main";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Masz pytania? Potrzebujesz fachowej pomocy elektryka? Skontaktuj się z EL ROB Elektro Usługi – chętnie pomożemy.",
};

export default function ContactPage() {
  return (
    <ContactContent />
  );
}
