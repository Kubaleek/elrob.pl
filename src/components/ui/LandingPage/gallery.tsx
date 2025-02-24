import CustomGalleryGrid from "../custom-galleryGrid";
import { GalleryImages } from "@/data/gallery";

export default function Gallery() {
  return (
    <section className=" relative  items-center flex justify-start lg:justify-center h-full  mt-8 lg:mt-24">
        <CustomGalleryGrid  images={GalleryImages} />
    </section>
  );
}
