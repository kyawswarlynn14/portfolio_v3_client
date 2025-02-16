"use client";

import React from "react";
import NavMobile from "./NavMobile";
import ThemeSwitcher from "@/utils/ThemeSwitcher";
import Link from "next/link";
import { scrollToSection } from "@/utils/services";
import { NAV_BUTTONS } from "@/constants";
import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
}

const item = {
  hidden: { opacity: 0, x: -100 },
  show: { opacity: 1, x: 0 },
}

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  
  const handleNavClick = (id) => {
    if(pathname !== '/') {
      router.push(`/#${id}`);
    } else {
      scrollToSection(id)
    }
  }

  return (
    <nav
      className={` md:text-lg bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-[0.2] sticky top-0 z-20 rounded-b-xl border-b-2 border-black dark:border-white py-3 md:py-1  px-2 md:px-0 flex-col`}
    >
      <div className="md:w-[95%] lg:w-[80%] mx-auto flex justify-between items-center">
        <Link href={"/#home"} className=" font-bold text-sm lg:text-base tracking-wider font-mono">
          DevelopedByKSL
        </Link>

        <div className="flex gap-2">
          <motion.nav 
            variants={container}
            initial="hidden"
            animate="show"
            className="md:flex mt-1 lg:gap-2 font-semibold hidden items-center"
          >
            {NAV_BUTTONS.map(i => (
              <motion.button
                variants={item}
                key={i.id}
                onClick={() => handleNavClick(i.id)}
                className={`webNavButton`}
              >
                {i.icon} {i.title}
              </motion.button>
            ))}
          </motion.nav>

          <ThemeSwitcher />

          <NavMobile />
        </div>
      </div>
    </nav>
  );
}
