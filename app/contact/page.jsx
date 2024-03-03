"use client";
import Heading from "@/utils/Heading";
import Contact from "@/components/Contact";
import StarsCanvas from "@/components/canvas/Stars";

export default function Page() {
  return (
    <>
      <Heading title="Kyaw Swar Lynn - Contact Me" />

      <div className="relative z-0">
        <Contact />
        <StarsCanvas />
      </div>
    </>
  );
}
