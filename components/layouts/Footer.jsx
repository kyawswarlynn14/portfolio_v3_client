"use client";

import React from "react";
import {
  AiFillPhone,
  AiFillMail,
  AiOutlineCopyrightCircle,
} from "react-icons/ai";
import { FaTelegram } from "react-icons/fa";
import { FOOTER_CONTACT, FOOTER_NAVIGATIONS } from "@/constants";
import { scrollToSection } from "@/utils/services";
import { usePathname, useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import localData from "@/public/data.json";

function Footer() {
  const { aboutMe } = useSelector(state => state.layout);
  const year = new Date().getFullYear();
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
    <div
      className={` w-full border-t-2 border-black dark:border-white py-4 rounded-tl-3xl`}
    >
      <div className="w-full md:w-[80%] md:mx-auto px-2 flex flex-col items-center lg:flex-row lg:justify-between gap-6">
        <div className="text-center">
          <img
            src={aboutMe?.image || localData.aboutMe.image}
            alt="ksl img"
            className="w-12 h-12 rounded-full mx-auto object-cover"
          />
          <h3 className="text-lg font-semibold">Kyaw Swar Lynn</h3>
          <p className="font-bold font-mono text-sm">
            <AiOutlineCopyrightCircle className="inline-flex" /> {year} ksl
          </p>
        </div>

        <div className="lg:ml-16 text-start">
          <h3 className="text-lg mb-2 font-semibold text-center tracking-wider">
            Contact Me
          </h3>

          <p className="text-sm md:text-base">
            <AiFillPhone className="inline-flex mr-2" />{" "}
            <span>{FOOTER_CONTACT?.phone}</span>
          </p>

          <p className="text-sm md:text-base">
            <AiFillMail
              href={`mailto:${FOOTER_CONTACT?.email}`}
              className="inline-flex mr-2"
            />{" "}
            <span>{FOOTER_CONTACT?.email}</span>
          </p>

          <p className="text-sm md:text-base">
            <FaTelegram
              href={`https://t.me/${FOOTER_CONTACT?.telegram}`}
              className="inline-flex mr-2"
            />{" "}
            {FOOTER_CONTACT?.telegram}
          </p>
        </div>

        <div className="text-start">
          <h4 className="text-lg mb-2 font-semibold text-center tracking-wider">
            Navigations
          </h4>
          <div className="flex gap-2 ">
            {FOOTER_NAVIGATIONS.map((i, index) => (
              <div key={i.id}>
                <a
                  onClick={() => handleNavClick(i.id)}
                  className=" dark:text-gray-100 font-medium text-sm md:text-base hover:underline underline-offset-2 mr-2"
                >
                  {i.title}
                </a>
                {!(FOOTER_NAVIGATIONS.length === index + 1) && <span>|</span>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
