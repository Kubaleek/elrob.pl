import GalleryContent from "@/components/ui/GalleryPage/main";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Galeria",
  description:
    "Galeria realizacji EL-ROB Elektro Usługi. Zobacz nasze wykonane instalacje, modernizacje i projekty elektryczne dla domów i firm. Profesjonalizm i jakość w każdym detalu!",
};


export default function GalleryPage() {
  return (
    <GalleryContent />
  );
}
