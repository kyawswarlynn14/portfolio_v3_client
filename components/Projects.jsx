import { PROJECTINFO, PROJECTS } from "@/constants";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";

function Projects() {
  return (
    <div id="projects" className="pageMainDiv">
      <motion.div 
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false }}
      >
        <h3 className="subTitle">{PROJECTINFO?.title}</h3>

        <p className="text-md py-2 leading-8 text-justify">
          {PROJECTINFO?.description}
        </p>
      </motion.div>

      <div className="w-full sm:w-[80%] sm:mx-auto md:w-full my-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        {PROJECTS?.length &&
          PROJECTS.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
            />
          ))}
      </div>
    </div>
  );
}

export default Projects;
