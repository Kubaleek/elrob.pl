"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { DotPattern } from "@/components/magicui/dot-pattern";

export default function ContactContent() {
  return (
    <motion.section       initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }} className="relative max-w-[85rem] mx-auto">
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
              Skontaktuj się z EL ROB Elektro Usługi
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="max-w-xl leading-7 text-gray-300"
            >
              Masz pytania? Potrzebujesz{" "}
              <span className="text-[#ff7757]">fachowej pomocy elektryka</span>? Skontaktuj się z{" "}
              <span className="text-[#ff7757]">EL ROB Elektro Usługi</span> – chętnie pomożemy.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-sm leading-6 text-pretty text-gray-700 dark:text-gray-300"
            >
              <span>EL ROB Elektro Usługi</span> <br />
              <span>ul. Pomorska 57/22, 90-204 Łódź</span> <br />
              <span>737 593 320 | robert.krol.el@gmail.com</span> <br />
              <span>NIP: 7251759341</span>
            </motion.p>
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
