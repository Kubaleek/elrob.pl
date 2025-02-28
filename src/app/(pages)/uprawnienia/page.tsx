import { Metadata } from "next";
import WorkPermsContent from "@/components/ui/WorkPermsPage/main";
export const metadata: Metadata = {
  title: "Uprawnienia",
  description:
    "EL ROB Elektro Usługi posiada uprawnienia D i E w zakresie obsługi, konserwacji, remontów, montażu i pomiarów instalacji elektroenergetycznych. Sprawdź pełen zakres naszych kwalifikacji!",
};

export default function WorkPermsPage() {
  return (
    <WorkPermsContent />
  );
}
