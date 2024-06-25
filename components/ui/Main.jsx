import Image from "next/image";
import ComputersCanvas from "../canvas/Computers";
import { IMAGES, MOTION_DATA } from "@/constants";
import { motion } from "framer-motion";
import { AiFillFacebook, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { FaTelegram } from "react-icons/fa";

export default function Main({ aboutMe }) {
  const MAIN_BUTTONS = [
    {
      id: '001',
      link: aboutMe?.github,
      icon: <AiFillGithub cursor="pointer" />,
    },
    {
      id: '002',
      link: aboutMe?.facebook,
      icon: <AiFillFacebook cursor="pointer" />,
    },
    {
      id: '003',
      link: aboutMe?.linkedIn,
      icon: <AiFillLinkedin cursor="pointer" />,
    },
    {
      id: '004',
      link: aboutMe?.telegram,
      icon: <FaTelegram cursor="pointer" />,
    },
  ]

  return (
    <div id="home" className=" text-center w-full my-4">
      <motion.div 
        variants={MOTION_DATA.container}
        initial="hidden"
        animate="show"
        className="flex flex-col"
      >
        <motion.div 
          variants={MOTION_DATA.item}
          className="mx-auto rounded-full w-60 h-60 md:w-40 md:h-40 overflow-hidden my-2"
        >
          <Image
            width={500}
            height={500}
            property="priority"
            src={IMAGES?.kslNew}
            alt="ksl"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <motion.h2 
        variants={MOTION_DATA.item}
        className="tracking-wider font-serif text-2xl dark:text-[#00FF00] font-bold md:text-4xl">
          {aboutMe?.name}
        </motion.h2>

        <motion.h3 
        variants={MOTION_DATA.item}
        className="text-lg md:text-2xl py-3 tracking-wider font-semibold">
          {aboutMe?.role}
        </motion.h3>

        <motion.p 
        variants={MOTION_DATA.item}
        className="md:w-[80%] md:mx-auto tracking-wider leading-8 font-medium dark:text-[#fdeed4] md:text-lg">
          {aboutMe?.description}
        </motion.p>

        <motion.div 
        variants={MOTION_DATA.item}
        className="w-64 md:w-80 mx-auto text-5xl flex justify-between mt-4 ">
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
        </motion.div>
      </motion.div>

      <div className="hidden lg:block h-[200px] xl:h-[250px] w-full mx-auto cursor-grab">
        <ComputersCanvas />
      </div>
    </div>
  );
}
