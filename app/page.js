"use client";
import { useEffect, useState } from "react";
import { IoArrowUp } from "react-icons/io5";
import Service from "@/components/Service";
import Tools from "@/components/Tools";
import Contact from "@/components/Contact";
import StarsCanvas from "@/components/canvas/Stars";
import Blog from "@/components/Blog";
import Main from "@/components/Main";
import Heading from "@/utils/Heading";
import Link from "next/link";
import Projects from "@/components/Projects";
import Certificates from "@/components/Certificates";

export default function Home() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
  }, []);

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Heading title="Kyaw Swar Lynn - Developer" />

      <Main />

      <Service />

      <Tools />

      <Projects />

      <div className="relative z-0">
        <Certificates />
        <Contact />
        <div className="hidden md:block">
          <StarsCanvas />
        </div>
        <Blog />
      </div>

      {show && (
        <button
          className="fixed bottom-10 right-2 md:right-10  p-3 rounded  bg-[#1f3150] dark:bg-cyan-300 bg-opacity-90 shadow"
          onClick={handleScrollTop}
        >
          <IoArrowUp className="text-xl text-white dark:text-black" />
        </button>
      )}
    </>
  );
}
