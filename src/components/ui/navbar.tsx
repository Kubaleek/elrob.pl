"use client";

import Image from "next/image";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/shadcn/navigation-menu";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { NavbarInfo } from "@/data/navbar";

export default function Navbar() {
  const path = usePathname();

  return (
    <header className="sticky left-0 top-0 z-40 w-full bg-[#0C0C0C]/90 backdrop-blur-lg py-1">
      <nav className="mx-auto flex max-w-[83rem] w-full items-center justify-between gap-3 py-3">
        <Link href={"/"} className="flex items-center gap-3">
          <Image src={"/logo.svg"} width={32} height={32} alt="EL ROB Elektro Usługi Logo" />
          <span className="font-medium text-lg">
            El Rob <span className="text-[#ff7757]">Elektro</span>
          </span>
        </Link>
        <div className="hidden lg:flex">
          <NavigationMenu className="">
            <NavigationMenuList className="flex items-center justify-center gap-2">
              {NavbarInfo.map((item) => (
                <NavigationMenuItem key={item.id}>
                  {item.offer ? (
                    <NavigationMenuTrigger className="px-2.5 text-sm font-normal flex items-center justify-center leading-[110%] rounded-md transition duration-200 hover:bg-[#ff7757]/5 hover:text-[#ff7757]/80 text-white">
                      {item.label}
                    </NavigationMenuTrigger>
                  ) : (
                    <Link href={`${item.url}`} passHref>
                      <span
                        className={` ${
                          path == item.url
                            ? "bg-[#ff7757]/5 text-[#ff7757]/80 "
                            : 'hover:bg-[#ff7757]/5 hover:text-[#ff7757]/80 text-white '
                        } flex px-2.5 py-2  items-center justify-center text-sm leading-[110%] rounded-md transition duration-200`}
                      >
                        {item.label}
                      </span>
                    </Link>
                  )}
                  {item.offer && (
                    <NavigationMenuContent>
                      {item.id == 2 ? (
                        <ul className="grid gap-3 p-4 h-full lg:w-[500px] xl:w-[600px]  lg:grid-cols-[.75fr_1fr] text-[#fafafa]">
                          <li className="row-span-3 h-full max-h-full">
                            <NavigationMenuLink asChild className="group bg-[#ff7757]/5">
                              <div
                                className={cn(
                                  "w-full h-full relative flex select-none flex-col justify-end  border border-[#ff7757]/5 bg-[#ff7757]/5 space-y-4 rounded-md p-3 leading-none no-underline outline-none",
                                )}
                              >
                                <Image src={"/logo.svg"} width={32} height={32} alt="logo" />
                                <div className="flex flex-col gap-1.5">
                                  <h2 className="text-sm font-medium">EL ROB Elektro Usługi</h2>
                                  <p className="text-xs text-[#c8cbce] leading-relaxed text-balance">
                                    Sprawdź informacje o firmie, aby dowiedzieć się więcej.
                                  </p>
                                </div>
                              </div>
                            </NavigationMenuLink>
                          </li>
                          {item.offer.map((item) => (
                            <li key={item.id}>
                              <NavigationMenuLink asChild>
                                <Link
                                  className={` ${
                                    path == item.url
                                      ? "bg-[#ff7757]/5 text-[#ff7757]/80"
                                      : "hover:bg-[#ff7757]/5 hover:text-[#ff7757]/80 text-white"
                                  } group flex flex-col gap-2 text-sm leading-[110%] px-4 py-4 rounded-md transition duration-200`}
                                  href={`${item.url}`}
                                  passHref
                                >
                                     <div className="text-base font-medium leading-none">
                                      {item.label}
                                    </div>
                                    <p className={`text-xs text-[#c8cbce] leading-relaxed text-balanc`}>
                                      {item.customText}
                                    </p>
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      ) : item.id === 3 ? (
                        <ul className="grid gap-3 p-4 lg:w-[500px] xl:w-[600px] grid-cols-2  text-[#fafafa]">
                          {item.offer.map((item) => (
                            <li key={item.id}>
                              <NavigationMenuLink asChild>
                                <Link
                                  className={` ${
                                    path == item.url
                                      ? "bg-[#ff7757]/5 text-[#ff7757]/80"
                                      : "hover:bg-[#ff7757]/5 hover:text-[#ff7757]/80 text-white"
                                  } h-full group flex flex-col gap-2 text-sm leading-[110%] px-4 py-4 rounded-md transition duration-200`}
                                  href={item.url}
                                  passHref
                                >
                                     <div className="text-base font-medium leading-none">
                                      {item.label}
                                    </div>
                                    <p className={`text-xs text-[#c8cbce] leading-relaxed text-balance`}>
                                      {item.customText}
                                    </p>
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      ) : null}
                    </NavigationMenuContent>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </nav>
    </header>
  );
}
