import { ShootingStars } from "@/components/acernityui/shooting-stars";
import { StarsBackground } from "@/components/acernityui/stars-background";
import Android from "@/components/magicui/android";
import { DotPattern } from "@/components/magicui/dot-pattern";
import { AudioWaveformIcon, FolderClock, WorkflowIcon } from "lucide-react";

export default function About() {
  return (
    <section className=" relative  items-center flex justify-start lg:justify-center mt-8 lg:mt-20 overflow-hidden">
      <StarsBackground />
      <ShootingStars />
      <div className="grid grid-cols-12 lg:gap-7 xl:gap-12 z-[1]">
        <div className="col-span-12 hidden md:flex md:col-span-6 md:pl-2 lg:pl-0 xl:pl-24 h-full justify-center  flex-col gap-6">
          <div className="relative">
            <Android className="size-full bg-center bg-cover md:p-0 z-[0]" src="./1.jpg" />
            <DotPattern className="[mask-image:radial-gradient(200px_circle_at_top_right,white,transparent)] xl:[mask-image:radial-gradient(400px_circle_at_top_right,white,transparent)] lg:[mask-image:radial-gradient(400px_circle_at_top_right,white,transparent)] absolute top-0 -left-3 lg:left-2 z-[-1] stroke-[#ff7757] fill-[#ff7757]" />
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 justify-start md:pl-0 lg:pt-16 flex flex-col gap-8  items-start">
          <div className="flex flex-col gap-3">
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-10 text-[#fafafa]">
              o EL ROB Elektro Usługi
            </h2>
            <p className="max-w-xl leading-7 text-gray-300">
              Jesteśmy firmą elektryczną działającą na terenie{" "}
              <span className="text-[#ff7757]">Łodzi oraz województwa łódzkiego</span>. Świadczymy{" "}
              <span className="text-[#ff7757]">kompleksowe usługi elektryczne</span>, bazując na <span className="text-[#ff7757]">wieloletnim doświadczeniu</span> i{" "}
              <span className="text-[#ff7757]">specjalistycznej wiedzy</span>. Zapewniamy{" "}
              <span className="text-[#ff7757]">profesjonalne rozwiązania</span> w zakresie  <span className="text-[#ff7757]">
                instalacji, napraw, konserwacji oraz pomiarów elektrycznych
              </span>
              , dbając o <span className="text-[#ff7757]">najwyższą jakość usług</span> i <span className="text-[#ff7757]">bezpieczeństwo naszych klientów</span>.
            </p>
          </div>
          <div className="flex flex-col gap-9">
            <div className="flex items-start gap-3">
                <div className="bg-[#ff7757]/25 rounded-full items-start flex p-3">
                    <WorkflowIcon className="w-6 h-6 text-[#ff7757]" />
                </div>
                <div className="flex flex-col">
                    <h3 className="font-bold">Bezpieczeństwo i jakość</h3>
                    <p className="max-w-md leading-7 text-gray-300">
                        Profesjonalne podejście do instalacji i konserwacji zapewnia bezpieczne i trwałe rozwiązania elektryczne.
                    </p>
                </div>
            </div>
            <div className="flex items-start gap-3">
                <div className="bg-[#ff7757]/25 rounded-full items-start flex p-3">
                    <AudioWaveformIcon className="w-6 h-6 text-[#ff7757]" />
                </div>
                <div className="flex flex-col">
                    <h3 className="font-bold">Doświadczenie i specjalistyczna wiedza</h3>
                    <p className="max-w-md leading-7 text-gray-300">
                        Dzięki wieloletniemu doświadczeniu firma oferuje sprawdzone i skuteczne rozwiązania dostosowane do indywidualnych potrzeb klientów
                    </p>
                </div>
            </div>
            <div className="flex items-start gap-3">
                <div className="bg-[#ff7757]/25 rounded-full items-start flex p-3">
                    <FolderClock className="w-6 h-6 text-[#ff7757]" />
                </div>
                <div className="flex flex-col">
                    <h3 className="font-bold">Szeroki zakres usług</h3>
                    <p className="max-w-md leading-7 text-gray-300">
                        Kompleksowa obsługa obejmuje instalacje, naprawy, konserwację oraz pomiary.
                    </p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
