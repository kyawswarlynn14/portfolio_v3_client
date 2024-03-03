"use client";
import { Dialog } from "@headlessui/react";
import { useState } from "react";
import { RiCloseCircleFill, RiContactsFill } from "react-icons/ri";
import { AiFillHome } from "react-icons/ai";
import { FaLaptopCode, FaCertificate } from "react-icons/fa";
import { BsPersonWorkspace } from "react-icons/bs";
import { CgMenuBoxed } from "react-icons/cg";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { IMAGES } from "@/constants";

export default function NavMobile() {
  let [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <div>
        <div onClick={openModal} className="flex items-center md:hidden mr-2">
          <CgMenuBoxed className="text-3xl " />
        </div>
      </div>

      <Dialog
        open={isOpen}
        as="div"
        className="relative z-40 md:hidden"
        onClose={closeModal}
      >
        <div className="fixed inset-0 bg-black bg-opacity-40" />

        <div className="fixed inset-0 z-40 flex">
          <Dialog.Panel className="relative mr-auto flex h-full w-60 flex-col overflow-y-auto bg-slate-800 py-4 pb-6 shadow-xl rounded-r-3xl">
            <div
              className="flex items-center justify-end px-4 my-4"
              onClick={closeModal}
            >
              <RiCloseCircleFill className="text-3xl text-white duration-300" />
            </div>

            <nav className="flex flex-col mt-4 mx-6 gap-4">
              <a
                href="/#home"
                className={`mobileNavButton ${
                  pathname === "/#home" && " text-[#00FF00]"
                }`}
                onClick={closeModal}
              >
                <AiFillHome /> HOME
              </a>

              <a
                href="/#services"
                className={`mobileNavButton ${
                  pathname === "/#services" && " text-[#00FF00]"
                }`}
                onClick={closeModal}
              >
                <FaLaptopCode /> SERVICES
              </a>

              <a
                href="/#projects"
                className={`mobileNavButton ${
                  pathname === "/#projects" && " text-[#00FF00]"
                }`}
                onClick={closeModal}
              >
                <BsPersonWorkspace /> PORTFOLIO
              </a>

              <a
                href="/#certificates"
                className={`mobileNavButton ${
                  pathname === "/#certificates" && " text-[#00FF00]"
                }`}
                onClick={closeModal}
              >
                <FaCertificate /> CERTIFICATES
              </a>

              <a
                href="/#contact"
                className={`mobileNavButton ${
                  pathname === "/#contact" && " text-[#00FF00]"
                }`}
                onClick={closeModal}
              >
                <RiContactsFill /> CONTACT
              </a>
            </nav>

            <div className="mx-auto rounded-full w-40 h-40 relative overflow-hidden my-6">
              <Image
                width={500}
                height={500}
                property="priority"
                src={IMAGES?.ksl}
                alt="ksl"
              />
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
}
