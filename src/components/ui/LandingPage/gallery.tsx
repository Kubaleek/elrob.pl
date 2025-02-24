import CustomGalleryGrid from "../custom-galleryGrid";
import { GalleryImages } from "@/data/gallery";

export default function Gallery() {
  return (
    <section className=" relative max-w-[85rem] mx-auto  items-center flex justify-start lg:justify-center h-full  mt-8">
        <CustomGalleryGrid  images={GalleryImages} />
    </section>
  );
}
