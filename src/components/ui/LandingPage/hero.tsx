import { DotPattern } from "@/components/magicui/dot-pattern";
import { Button } from "@/components/shadcn/button";
import { BadgeCheckIcon, ChevronRightIcon, Mail, Phone} from "lucide-react";
import { cn } from "@/lib/utils";
export default function Hero() {
  return (
    <section className=" relative  items-center flex justify-start overflow-hidden">
      <div className="grid grid-cols-12 lg:gap-7 xl:gap-12 h-full z-[1]">
        <div className="col-span-12 lg:col-span-6 md:pl-12 lg:pl-11 xl:pl-24 pt-1 lg:pt-0 lg:h-[500px] justify-center flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-4">
              <h1 className="text-4xl xl:text-6xl font-bold leading-10 text-[#fafafa]">
                EL ROB Elektro Usługi
              </h1>
              <p className="max-w-xl leading-7 text-gray-300">
                Czy szukasz <span className="text-[#ff7757]">dobrego elektryka</span> w{" "}
                <span className="text-[#ff7757]">Łodzi</span> i województwie{" "}
                <span className="text-[#ff7757]">łódzkim</span>? Świadczymy{" "}
                <span className="text-[#ff7757]">usługi elektryczne</span> z wykorzystaniem naszej
                wiedzy i <span className="text-[#ff7757]">wieloletniego doświadczenia</span>. Dzięki
                temu jesteśmy w stanie sprostać nawet{" "}
                <span className="text-[#ff7757]">najbardziej wymagającym zleceniom</span>.
              </p>
            </div>
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-2">
                <BadgeCheckIcon className="text-[#ff7757]" />
                <p>Doświadczenie i Profesjonalizm</p>
              </div>
              <div className="flex items-center gap-2">
                <BadgeCheckIcon className="text-[#ff7757]" />
                <p>Gwarancja Satysfakcji Klienta</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button size={"lg"} className="px-3 group">
              <Mail className="group-hover:text-[#ff7757] transition-all duration-100 ease-in-out" />
              <span>Wyślij Wiadomość</span>
              <ChevronRightIcon className="group-hover:text-[#ff7757] group-hover:translate-x-0.5 transition-all duration-100 ease-in-out" />
            </Button>
            <Button size={"lg"} className="px-3 group">
              <Phone className="group-hover:text-[#ff7757] transition-all duration-100 ease-in-out" />
              <span>Zadzwoń już</span>
              <ChevronRightIcon className="group-hover:text-[#ff7757] group-hover:translate-x-0.5 transition-all duration-100 ease-in-out" />
            </Button>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-6 justify-center relative items-center hidden overflow-hidden   lg:flex flex-col gap-6">
        <DotPattern
        className={cn(
          "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)] py-8",
        )}
      />

        </div>
      </div>
    </section>
  );
}
