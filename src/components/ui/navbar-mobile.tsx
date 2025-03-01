"use client";

import { Drawer, DrawerContent, DrawerHeader, DrawerTitle } from "@/components/shadcn/drawer";
import Link from "next/link";
import Image from "next/image";
import { NavbarInfo } from "@/data/navbar";
import { usePathname } from "next/navigation";

export default function NavbarMobile({
  isOpen,
  toggleMenu,
}: {
  isOpen: boolean;
  toggleMenu: () => void;
}) {
  const path = usePathname();

  return (
    <Drawer open={isOpen} onOpenChange={toggleMenu}>
      <DrawerContent className="bg-[#0C0C0C] p-4">
        <div>
          <DrawerHeader>
            <Link href={"/"} className="flex items-center gap-3">
              <Image src={"/logo.svg"} width={32} height={32} alt="EL ROB Elektro Usługi Logo" />
              <DrawerTitle className="font-medium text-lg">
                El Rob <span className="text-[#ff7757]">Elektro</span>
              </DrawerTitle>
            </Link>
          </DrawerHeader>
          <div className="w-fit">
            <ul className="space-y-1.5">
              {NavbarInfo.map((item) => (
                <li key={item.id}>
                  {item.offer ? (
                    <div className="flex flex-col gap-1.5">
                      <span className="flex px-2.5 py-2  text-base items-center justify-start leading-[110%] rounded-md transition duration-200">
                        {item.label}
                      </span>
                      {item.offer?.map((o) => (
                        <ul key={o.id} className="pl-4 space-y-4 text-sm">
                          <li key={o.id}>
                            <Link
                              href={`${o.url}`}
                              className={` ${
                                path == o.url
                                  ? "bg-[#ff7757]/5 text-[#ff7757]/80 "
                                  : "hover:bg-[#ff7757]/5 hover:text-[#ff7757]/80 text-white "
                              } flex px-2.5 py-2  items-center justify-start leading-[110%] rounded-md transition duration-200`}
                            >
                              {o.label}
                            </Link>
                          </li>
                        </ul>
                      ))}
                    </div>
                  ) : (
                    <Link
                      href={`${item.url}`}
                      className={` ${
                        path == item.url
                          ? "bg-[#ff7757]/5 text-[#ff7757]/80 "
                          : "hover:bg-[#ff7757]/5 hover:text-[#ff7757]/80 text-white "
                      } flex px-2.5 py-2 text-base  items-center justify-start leading-[110%] rounded-md transition duration-200`}
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
