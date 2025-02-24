import { cn } from "@/lib/utils";
import { DotPattern } from "@/components/magicui/dot-pattern";

export default function Offer() {
  return (
    <section className=" relative  items-center flex justify-start lg:justify-center mt-8 lg:mt-20 overflow-hidden">
      <div className="grid grid-cols-12 lg:gap-7 xl:gap-12 h-full z-[1]">
        <div className="col-span-12 lg:col-span-6 justify-center relative items-center hidden overflow-hidden   lg:flex flex-col gap-6">
          <DotPattern
            className={cn(
              "[mask-image:radial-gradient(200px_circle_at_center,white,transparent)] xl:[mask-image:radial-gradient(200px_circle_at_center,white,transparent)] text-[#ff7757] stroke-[#ff7757] fill-[#ff7757] py-8",
            )}
          />
        </div>
        <div className="col-span-12 lg:col-span-6 md:pl-2 lg:pl-0 pt-1 lg:pt-0 lg:h-[500px] justify-center flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <h1 className="text-2xl md:text-4xl xl:text-6xl font-bold leading-10 text-[#fafafa]">
                EL ROB Elektro Oferta
              </h1>
              <p className="lg:max-w-xl leading-7 text-gray-300">
                Każdą usługę wykonujemy z pełnym{" "}
                <span className="text-[#ff7757]">zaangażowaniem</span>, dbając o{" "}
                <span className="text-[#ff7757]">bezpieczeństwo</span> i{" "}
                <span className="text-[#ff7757]">zadowolenie naszych klientów</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
