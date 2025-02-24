"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="flex flex-col mt-12 mx-auto max-w-[85rem] gap-3 w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-6">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col gap-3"
        >
          <Link href={"/"} className="flex w-fit items-center gap-3">
            <Image src={"/logo.svg"} width={32} height={32} alt="EL ROB Elektro Usługi Logo" />
            <span className="font-medium text-lg">
              El Rob <span className="text-[#ff7757]">Elektro</span>
            </span>
          </Link>
          <p className="lg:max-w-lg xl:max-w-xl leading-7 text-gray-300">
            Czy szukasz <span className="text-[#ff7757]">dobrego elektryka</span> w{" "}
            <span className="text-[#ff7757]">Łodzi i województwie łódzkim</span>? Świadczymy{" "}
            <span className="text-[#ff7757]">usługi elektryczne</span> z wykorzystaniem naszej
            wiedzy i <span className="text-[#ff7757]">wieloletniego doświadczenia</span>. Dzięki
            temu jesteśmy w stanie sprostać nawet{" "}
            <span className="text-[#ff7757]">najbardziej wymagającym zleceniom</span>. Sprawdź
            szczegóły na naszej <span className="text-[#ff7757]">podstronie Usługi</span>.
          </p>

          <p className="leading-7 text-sm text-gray-300">
            Strona internetowa stworzona przez KubalekDev
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="hidden lg:grid justify-self-end grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8"
        >
          <div className="space-y-3">
            <h2 className="font-semibold text-lg">Strony</h2>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-foreground">
                  Strona Główna
                </Link>
              </li>
              <li>
                <Link href="/galeria" className="text-muted-foreground hover:text-foreground">
                  Galeria
                </Link>
              </li>
              <li>
                <Link href="/kontakt" className="text-muted-foreground hover:text-foreground">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h2 className="font-semibold text-lg">O Firmie</h2>
            <ul className="space-y-3">
              <li>
                <Link href="/uprawnienia" className="text-muted-foreground hover:text-foreground">
                  Uprawnienia
                </Link>
              </li>
              <li>
                <Link href="/realizacje" className="text-muted-foreground hover:text-foreground">
                  Realizacje
                </Link>
              </li>
              <li>
                <Link href="/opinie" className="text-muted-foreground hover:text-foreground">
                  Opinie
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3 lg:col-span-2">
            <h2 className="font-semibold text-lg">Oferta</h2>
            <ul className="space-y-3">
              <li>
                <Link
                  href={"/montaz-i-modernizacja-instalacji-elektrycznych"}
                  className="text-muted-foreground hover:text-foreground"
                >
                  Montaż i modernizacja instalacji elektrycznych
                </Link>
              </li>
              <li>
                <Link
                  href={"/fotowoltaika-Instalacje-solarne"}
                  className="text-muted-foreground hover:text-foreground"
                >
                  Fotowoltaika Instalacje solarne
                </Link>
              </li>
              <li>
                <Link
                  href={"/aparatura-kontrolno-pomiarowa-i-automatyka"}
                  className="text-muted-foreground hover:text-foreground"
                >
                  Aparatura kontrolno-pomiarowa i automatyka
                </Link>
              </li>
              <li>
                <Link
                  href={"/urzadzenia-w-wykonaniu-przeciwwybuchowym"}
                  className="text-muted-foreground hover:text-foreground"
                >
                  Urządzenia w wykonaniu przeciwwybuchowym
                </Link>
              </li>
              <li>
                <Link
                  href={"/serwis-i-konserwacja-urzadzen-elektrotermicznych"}
                  className="text-muted-foreground hover:text-foreground"
                >
                  Serwis i konserwacja urządzeń elektrotermicznych
                </Link>
              </li>
              <li>
                <Link
                  href={"/instalacja-i-konserwacja-oswietlenia-ulicznego"}
                  className="text-muted-foreground hover:text-foreground"
                >
                  Instalacja i konserwacja oświetlenia ulicznego
                </Link>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="leading-7 text-sm text-gray-300"
      >
        © {new Date().getFullYear()} EL ROB Elektro Usługi Robert Król. Wszelkie prawa zastrzeżone.
      </motion.p>
    </footer>
  );
}
