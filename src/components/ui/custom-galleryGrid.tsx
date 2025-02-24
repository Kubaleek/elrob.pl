"use client"

import Image from "next/image";
import { motion } from "framer-motion";

export default function CustomGalleryGrid({ images }: { images: string[][] }) {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-5 border p-5">
      {images.map((column, colIndex) => (
        <div key={colIndex} className={`grid gap-4`}>
          {column.map((src, imgIndex) => (
            <motion.div
              key={imgIndex}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 * (colIndex + imgIndex) }}
              viewport={{ once: true }}
            >
              <Image
                className="h-auto max-w-full rounded-lg object-cover object-center"
                src={src}
                alt={`gallery-photo-${colIndex}-${imgIndex}`}
                width={250}
                height={250}
              />
            </motion.div>
          ))}
        </div>
      ))}
    </div>
  );
}
