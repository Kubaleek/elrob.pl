"use client";

import CustomGalleryGrid from "@/components/ui/custom-galleryGrid";
import { GalleryPageImages } from "@/data/gallery";
import { motion } from "framer-motion";

export default function GalleryPage() {
  return (
    <motion.section       initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }} className="relative max-w-[85rem] mx-auto">
      <CustomGalleryGrid images={GalleryPageImages} />
    </motion.section>
  );
}
