"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { DotPattern } from "@/components/magicui/dot-pattern";

export default function WorkPermsPage() {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative max-w-[85rem] mx-auto"
    >
      <div className="grid grid-cols-12">
        <div className="col-span-12 lg:col-span-6 md:pl-0 lg:pl-0 pt-1 lg:pt-12 lg:pb-12 relative flex items-center">
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
              Uprawnienia EL ROB Elektro Usługi
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="max-w-xl leading-7 text-gray-300"
            >
              <span className="text-[#ff7757]">EL ROB Elektro Usługi</span> posiada{" "}
              <span className="text-[#ff7757]">uprawnienia D i E</span> w zakresie{" "}
              <span className="text-[#ff7757]">obsługi, konserwacji, remontów, montażu</span> oraz{" "}
              <span className="text-[#ff7757]">kontrolno-pomiarowym</span>.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="max-w-xl leading-7 text-gray-300"
            >
              Dla Następujących urządzeń, Instalacji i sieci:
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="max-w-xl leading-7 text-gray-300"
            >
              <span className="text-[#ff7757]">
                Urządzenia, instalacje i sieci elektroenergetyczne
              </span>{" "}
              wytwarzające, przetwarzające, przesyłające i zużywające{" "}
              <span className="text-[#ff7757]">energię elektryczną</span>.
            </motion.p>
            <motion.ul 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
              className="leading-7 text-gray-300 list-disc text-sm list-inside"
            >
              <li>
                (1) <span className="text-[#ff7757]">Urządzenia prądotwórcze</span> przyłączone do
                krajowej sieci elektroenergetycznej, w tym
                <span className="text-[#ff7757]"> fotowoltaiki</span>.
              </li>
              <li>
                (2){" "}
                <span className="text-[#ff7757]">
                  Urządzenia, instalacje i sieci elektroenergetyczne
                </span>{" "}
                o napięciu nie wyższym niż 1kV.
              </li>
              <li>
                (5) <span className="text-[#ff7757]">Urządzenia elektrotermiczne</span>
              </li>
              <li>
                (7){" "}
                <span className="text-[#ff7757]">Sieci elektrycznego oświetlenia ulicznego</span>
              </li>
              <li>
                (9){" "}
                <span className="text-[#ff7757]">
                  Elektryczne urządzenia w wykonaniu przeciwwybuchowym
                </span>
              </li>
              <li>
                (10) <span className="text-[#ff7757]">Aparatura kontrolno-pomiarowa</span> oraz{" "}
                <span className="text-[#ff7757]">
                  urządzenia i instalacje automatycznej regulacji, sterowania i zabezpieczeń
                </span>{" "}
                urządzeń i instalacji wymienionych w pkt: 1,2,5,7,9.
              </li>
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
