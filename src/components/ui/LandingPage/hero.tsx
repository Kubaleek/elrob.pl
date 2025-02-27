"use client";

import { motion } from "framer-motion";
import { DotPattern } from "@/components/magicui/dot-pattern";
import { Button } from "@/components/shadcn/button";
import { BadgeCheckIcon, ChevronRightIcon, Mail, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative items-center flex justify-start">
      <div className="grid grid-cols-12 lg:gap-7 xl:gap-12 h-full z-[1]">
        <div className="col-span-12 lg:col-span-6 md:pl-2 lg:pl-0 2xl:pl-24 pt-1 lg:pt-0 lg:h-[500px] justify-center flex flex-col gap-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4"
          >
            <div className="flex flex-col gap-2">
              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-2xl md:text-4xl xl:text-6xl font-bold leading-10 text-[#fafafa]"
              >
                EL ROB Elektro Usługi
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="lg:max-w-xl leading-7 text-gray-300"
              >
                Czy szukasz <span className="text-[#ff7757]">dobrego elektryka</span> w{" "}
                <span className="text-[#ff7757]">Łodzi</span> i województwie{" "}
                <span className="text-[#ff7757]">łódzkim</span>? Świadczymy{" "}
                <span className="text-[#ff7757]">usługi elektryczne</span> z wykorzystaniem naszej
                wiedzy i <span className="text-[#ff7757]">wieloletniego doświadczenia</span>. Dzięki
                temu jesteśmy w stanie sprostać nawet{" "}
                <span className="text-[#ff7757]">najbardziej wymagającym zleceniom</span>.
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col gap-5"
            >
              <div className="flex items-center gap-2">
                <BadgeCheckIcon className="text-[#ff7757]" />
                <p>Doświadczenie i Profesjonalizm</p>
              </div>
              <div className="flex items-center gap-2">
                <BadgeCheckIcon className="text-[#ff7757]" />
                <p>Gwarancja Satysfakcji Klienta</p>
              </div>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <Button asChild size={"lg"} className="px-3 group">
              <Link href={"/kontakt"}>
                <Mail className="group-hover:text-[#ff7757] transition-all duration-100 ease-in-out" />
                <span>Wyślij Wiadomość</span>
                <ChevronRightIcon className="group-hover:text-[#ff7757] group-hover:translate-x-0.5 transition-all duration-100 ease-in-out" />
              </Link>
            </Button>
            <Button size={"lg"} className="px-3 group" asChild>
              <Link href={"/kontakt"}>
                <Phone className="group-hover:text-[#ff7757] transition-all duration-100 ease-in-out" />
                <span>Zadzwoń już</span>
                <ChevronRightIcon className="group-hover:text-[#ff7757] group-hover:translate-x-0.5 transition-all duration-100 ease-in-out" />
              </Link>
            </Button>
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
    </section>
  );
}
