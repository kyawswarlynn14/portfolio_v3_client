import Image from "next/image";
import { Tilt } from "react-tilt";
import { CgWebsite } from "react-icons/cg";

const ProjectCard = ({
  name,
  description,
  image,
  source_code_link,
  demo_link,
}) => {
  const Card = () => {
    return (
      <>
        <div className="relative w-full h-[250px]">
          <Image
            width={300}
            height={300}
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex gap-4 justify-end m-3">
            <div
              onClick={() => window.open(demo_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-xl flex justify-center items-center cursor-pointer bg-slate-700 text-white"
            >
              <CgWebsite />
            </div>

            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-xl flex justify-center items-center cursor-pointer bg-slate-700"
            >
              <Image
                width={100}
                height={100}
                src="/images/github.png"
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <div
          onClick={() => window.open(demo_link, "_blank")}
          className="mt-3 cursor-pointer"
        >
          <h3 className=" font-bold text-[18px]">{name}</h3>
          <p className=" dark:text-[#00FF00] text-[14px]"># {description}</p>
        </div>
      </>
    );
  };
  return (
    <>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="p-5 rounded-2xl w-full shadow-[0px_2px_10px_5px_rgba(0,0,0,0.2)] dark:shadow-slate-700 hidden md:block"
      >
        <Card />
      </Tilt>

      <div className="p-5 rounded-2xl w-full shadow-[0px_2px_10px_5px_rgba(0,0,0,0.2)] dark:shadow-slate-700 md:hidden">
        <Card />
      </div>
    </>
  );
};

export default ProjectCard;
