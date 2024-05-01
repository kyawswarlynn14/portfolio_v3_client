"use client";
import Image from "next/image";
import "../app/globals.css";
import { useState } from "react";
import { motion } from "framer-motion";

function ServiceCard({ service }) {
  const [show, setShow] = useState(false);

  return (
    <motion.div
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: false }}
      className="w-full sm:w-[22rem] h-fit mx-auto flex flex-col text-center place-items-center p-2 rounded-xl shadow-2xl dark:shadow-slate-700 dark:shadow-lg relative overflow-hidden"
    >
      <div className="w-full h-52 absolute top-0 rounded-t-xl overflow-hidden">
        <Image
          width={500}
          height={500}
          src={service?.img_url}
          alt={service?.title}
          className="w-full h-full object-cover hover:scale-110 duration-500"
        />
      </div>

      <h3 className="text-lg font-medium pb-4 mt-52 underline underline-offset-4">
        {service?.title}
      </h3>

      <p
        onClick={() => setShow((prev) => !prev)}
        className={`dark:text-[#fdeed4] overflow-hidden text-base p-2 text-justify cursor-pointer ${
          show ? "h-fit" : "h-48"
        }`}
      >
        {service?.content}
      </p>

      <button
        className="normalButton my-2"
        onClick={() => setShow((prev) => !prev)}
      >
        {show ? "Read Less" : "Read More"}
      </button>
    </motion.div>
  );
}

export default ServiceCard;
