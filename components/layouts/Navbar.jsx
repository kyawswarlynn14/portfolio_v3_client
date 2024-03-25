import React from "react";
import NavMobile from "./NavMobile";
import ThemeSwitcher from "@/utils/ThemeSwitcher";
import Link from "next/link";
import { scrollToSection } from "@/utils/services";
import { NAV_BUTTONS } from "@/constants";

export default function Navbar() {
  return (
    <nav
      className={` md:text-lg bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-[0.2] sticky top-0 z-20 rounded-b-xl border-b-2 border-black dark:border-white py-3 md:py-1  px-2 md:px-0 flex-col`}
    >
      <div className="md:w-[95%] lg:w-[80%] mx-auto flex justify-between items-center">
        <Link href={"/#home"} className=" font-bold tracking-wider font-mono">
          DevelopedByKSL
        </Link>

        <div className="flex gap-2">
          <nav className="md:flex gap-2 mt-1 font-semibold hidden items-center">
            {NAV_BUTTONS.map(i => (
              <button
                key={i.id}
                onClick={() => scrollToSection(i.id)}
                className={`webNavButton`}
              >
                {i.icon} {i.title}
              </button>
            ))}
          </nav>

          <ThemeSwitcher />

          <NavMobile />
        </div>
      </div>
    </nav>
  );
}
