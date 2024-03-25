import Image from "next/image";
import ComputersCanvas from "./canvas/Computers";
import { ABOUT_ME, IMAGES, MAIN_BUTTONS } from "@/constants";

export default function Main() {
  return (
    <div id="home" className=" text-center w-full my-4">
      <div className="flex flex-col">
        <div className="mx-auto rounded-full w-60 h-60 md:w-40 md:h-40 overflow-hidden my-2">
          <Image
            width={500}
            height={500}
            property="priority"
            src={IMAGES?.kslNew}
            alt="ksl"
            className="w-full h-full object-cover"
          />
        </div>

        <h2 className="tracking-wider font-serif text-2xl dark:text-[#00FF00] font-bold md:text-4xl">
          {ABOUT_ME?.name}
        </h2>

        <h3 className="text-lg md:text-2xl py-3 tracking-wider font-semibold">
          {ABOUT_ME?.role}
        </h3>

        <p className="tracking-wider leading-8 font-medium dark:text-[#fdeed4] md:text-xl">
          {`${ABOUT_ME?.description.split('.')[0]}.`}
          <br />
          {ABOUT_ME?.description.split('.')[1]}
        </p>

        <div className="w-64 md:w-80 mx-auto text-5xl flex justify-between mt-4 ">
          {MAIN_BUTTONS.map(i => (
            <a
              key={i.link}
              href={i.link}
              className="iconStyle"
              target="_blank"
              rel="noreferrer"
            >
              {i.icon}
            </a>
          ))}
        </div>
      </div>

      <div className="hidden lg:block h-[200px] xl:h-[250px] w-full mx-auto">
        <ComputersCanvas />
      </div>
    </div>
  );
}
