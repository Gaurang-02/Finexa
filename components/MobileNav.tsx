"use client";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MobileNav = ({ user }: MobileNavProps) => {
  const pathname = usePathname();
  return (
    <section className="w-full max-w-[264px]">
      <Sheet>
        <SheetTrigger>
          <Image
            src="/icons/hamburger.svg"
            width={30}
            height={30}
            alt={"menu"}
          />
        </SheetTrigger>
        <SheetContent side="left" className="border-none bg-white">
          <Link href="/" className="curson-pointer m-4 flex items-center gap-1 p-4">
            <Image
              src="/icons/logo.svg"
              width={34}
              height={34}
              alt={"finexa Logo"}
            />
            <h1 className="text-2xl font-ibm-plex-serif font-bold text-black">
              Finexa
            </h1>
          </Link>
          <div className=" flex h-[calc(100vh-72px)] flex-col justify-between overflow-y-auto">
            <SheetClose asChild>
              <nav className="flex h-full flex-col gap-6 pt-16 text-white">
                {sidebarLinks.map((item) => {
                  const isActive =
                    pathname === item.route ||
                    pathname.startsWith(`${item.route}/`);
                  return (
                   <SheetClose asChild key={item.route}>
                     <Link
                      href={item.route}
                      key={item.label}
                      className={cn(
                        " flex gap-3 items-center p-4 mx-4 rounded-lg w-full max-w-60",
                        {
                          " bg-[linear-gradient(90deg,#0179FE_0%,#4893FF_100%)]":
                            isActive,
                        }
                      )}
                    >
                      
                        <Image
                          src={item.imgURL}
                          alt={item.label}
                          width={20}
                          height={20}
                          className={cn({
                            "brightness-[3] invert-0": isActive,
                          })}
                        />
                      

                      <p
                        className={cn(
                          "text-16 font-semibold text-black",
                          { "text-white": isActive }
                        )}
                      >
                        {item.label}
                      </p>
                    </Link>
                   </SheetClose>
                  );
                })}
                USER
              </nav>
            </SheetClose>
            FOOTER
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;
