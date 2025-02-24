import CustomGalleryGrid from "@/components/ui/custom-galleryGrid";
import { GalleryPageImages } from "@/data/gallery";

export default function GalleryPage() {
  return (
    <section className="relative max-w-[85rem] mx-auto">
      <CustomGalleryGrid images={GalleryPageImages} />
    </section>
  );
}
