import { ShootingStars } from "@/components/acernityui/shooting-stars";
import { StarsBackground } from "@/components/acernityui/stars-background";
import { Button } from "@/components/shadcn/button";
import { BadgeCheckIcon, ChevronRightIcon, CloudLightning, Globe, LightbulbIcon, Mail, Phone, PinIcon } from "lucide-react";

export default function About() {
  return (
    <section className=" relative bgAbout items-center flex justify-start overflow-hidden">
      <StarsBackground />
      <ShootingStars />
      <div className="grid grid-cols-12 lg:gap-7 xl:gap-12 h-full z-[1]">
        <div className="col-span-12 lg:col-span-6 md:pl-8 xl:pl-12 h-[710px] justify-center flex flex-col gap-6">
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
        <div className="col-span-12 lg:col-span-6 justify-center relative items-center hidden overflow-hidden  lg:flex flex-col gap-6 drop-shadow-[0_0_10px_#ef9c00]">
          <div className="z-[-1] absolute top-12 min-h-60 -rotate-6 items-center justify-center  max-w-sm flex flex-col gap-3 p-4">
            <LightbulbIcon className="lg:w-32 lg:h-32 xl:w-36 xl:h-36" />
          </div>
          <div className="z-[-1] absolute top-[240px] lg:left-[50px] xl:left-[90px] min-h-60 left-24 rotate-6 items-center justify-center  max-w-sm flex flex-col gap-3 p-4">
            <PinIcon className="lg:w-32 lg:h-32 xl:w-36 xl:h-36" />
          </div>
          <div className="z-[-1] absolute top-[430px] min-h-60 -rotate-6 items-center justify-center  max-w-sm flex flex-col gap-3 p-4">
            <Globe className="lg:w-32 lg:h-32 xl:w-36 xl:h-36" />
          </div>
          <div className="z-[-1] absolute top-[240px] lg:left-[260px] xl:left-[390px]  min-h-60 -rotate-6 items-center justify-center  max-w-sm flex flex-col gap-3 p-4">
            <CloudLightning className="lg:w-32 lg:h-32 xl:w-36 xl:h-36" />
          </div>
        </div>
      </div>
    </section>
  );
}
