import Image from "next/image";
import { CERTIFICATES } from "@/constants";
import { motion } from "framer-motion";

function Certificates() {
  return (
    <div id="certificates" className="pageMainDiv">
      <h3 className="subTitle mb-8">Certifications</h3>

      <div className="flex flex-col gap-8">
        {CERTIFICATES?.length &&
          CERTIFICATES.map((i, index) => (
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: false }}
              key={i.title}
              className={`w-full gap-4 shadow-[0px_2px_10px_5px_rgba(0,0,0,0.2)] dark:shadow-slate-700 p-4 rounded-lg ${
                index % 2 === 0 ? "md:flex" : "md:flex flex-row-reverse"
              }`}
            >
              <div className="md:w-[40%] flex flex-col items-center gap-4 md:m-4">
                <p className="font-mono font-semibold text-center text-lg md:text-xl underline underline-offset-4">
                  {i?.title}
                </p>

                <p className="text-justify dark:text-[#fdeed4] text-base">{i?.content}</p>

                <a
                  href={i?.demo_link}
                  target="_blank"
                  className="normalButton px-8"
                >
                  Virefy Here
                </a>
              </div>

              <div className="md:flex-1 mt-2">
                <Image
                  width={500}
                  height={500}
                  className="w-full h-auto"
                  src={i?.img_url}
                  alt="certificate image"
                />
              </div>
            </motion.div>
          ))}
      </div>
    </div>
  );
}

export default Certificates;
