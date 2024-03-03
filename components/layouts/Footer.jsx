import React from "react";
import Image from "next/image";
import {
  AiFillPhone,
  AiFillMail,
  AiOutlineCopyrightCircle,
} from "react-icons/ai";
import { FaTelegram } from "react-icons/fa";
import { FOOTERCONTACT, IMAGES } from "@/constants";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <div
      className={` w-full border-t-2 border-black dark:border-white py-4 rounded-tl-3xl`}
    >
      <div className="w-full md:w-[80%] md:mx-auto px-2 flex flex-col items-center lg:flex-row lg:justify-between gap-6">
        <div className="text-center">
          <Image
            width={100}
            height={100}
            src={IMAGES?.ksl}
            alt="ksl img"
            className="w-12 h-12 rounded-full mb-3 mx-auto"
          />
          <h3 className="text-lg font-semibold">Kyaw Swar Lynn</h3>
          <p>
            <AiOutlineCopyrightCircle className="inline-flex" /> {year} ksl
          </p>
        </div>

        <div className="lg:ml-16 text-start">
          <h3 className="text-lg mb-2 font-semibold text-center tracking-wider">
            Contact Me
          </h3>

          <p className="text-sm md:text-base">
            <AiFillPhone className="inline-flex mr-2" />{" "}
            <span>{FOOTERCONTACT?.phone}</span>
          </p>

          <p className="text-sm md:text-base">
            <AiFillMail
              href={`mailto:${FOOTERCONTACT?.email}`}
              className="inline-flex mr-2"
            />{" "}
            <span>{FOOTERCONTACT?.email}</span>
          </p>

          <p className="text-sm md:text-base">
            <FaTelegram
              href={`https://t.me/${FOOTERCONTACT?.telegram}`}
              className="inline-flex mr-2"
            />{" "}
            {FOOTERCONTACT?.telegram}
          </p>
        </div>

        <div className="text-start">
          <h4 className="text-lg mb-2 font-semibold text-center tracking-wider">
            Navigations
          </h4>
          <div className="flex gap-2 ">
            <a
              href="/#home"
              className=" dark:text-gray-100 hover:underline underline-offset-2"
            >
              Home
            </a>

            <span>|</span>

            <a
              href="/#services"
              className=" dark:text-gray-100 hover:underline underline-offset-2"
            >
              Service
            </a>

            <span>|</span>

            <a
              href="/#projects"
              className=" dark:text-gray-100 hover:underline underline-offset-2"
            >
              Projects
            </a>

            <span>|</span>

            <a
              href="/#contact"
              className=" dark:text-gray-100 hover:underline underline-offset-2"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
