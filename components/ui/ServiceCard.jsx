"use client";
import Image from "next/image";
import "@/app/globals.css";
import { useState } from "react";
import ItemLayout from "../layouts/ItemLayout";

function ServiceCard({ service }) {
  const [show, setShow] = useState(false);

  return (
    <ItemLayout
      className={"w-full sm:w-[22rem] h-fit mx-auto flex flex-col text-center place-items-center p-2 rounded-xl shadow-2xl dark:shadow-slate-700 dark:shadow-lg relative overflow-hidden"}
    >
      <div className="w-full h-52 absolute top-0 rounded-t-xl overflow-hidden">
        <Image
          width={300}
          height={300}
          src={service?.image}
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
    </ItemLayout>
  );
}

export default ServiceCard;
