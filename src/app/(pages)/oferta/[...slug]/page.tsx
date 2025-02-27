"use client";

import createOfferMap from "@/lib/offerMap";
import { notFound, useParams } from "next/navigation";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { DotPattern } from "@/components/magicui/dot-pattern";

export default function OfferPage() {
  const { slug } = useParams<{ slug: string[] }>();
  const offerSlug = slug?.join("/")?.replace(/\/$/, "");
  const offerItem = createOfferMap().get(offerSlug || "");

  if (!offerItem) return notFound();

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative max-w-[85rem] mx-auto"
    >
      <div className="grid grid-cols-12">
        <div className="col-span-12 lg:col-span-6 md:pl-0 lg:pl-0 pt-1 lg:pt-12 lg:pb-12 relative  lg:h-[500px] flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col gap-3"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-2xl md:text-4xl max-w-lg font-bold leading-10 text-[#fafafa]"
            >
              {offerItem.label}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="max-w-xl leading-7 text-gray-300"
            >
              {offerItem.customText}
            </motion.p>
            <motion.ul
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
              className="leading-7 text-gray-300 list-disc text-sm list-inside"
            >
              {offerItem.details?.map((e) => (
                <motion.li key={e}>{e}</motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="col-span-12 lg:col-span-6 justify-center relative items-center hidden lg:flex flex-col gap-6"
        >
          <DotPattern
            className={cn(
              "[mask-image:radial-gradient(200px_circle_at_center,white,transparent)] xl:[mask-image:radial-gradient(250px_circle_at_center,white,transparent)] text-[#ff7757] stroke-[#ff7757] fill-[#ff7757]",
            )}
          />
        </motion.div>
      </div>
    </motion.section>
  );
}
