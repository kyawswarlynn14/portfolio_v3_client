import { PROJECTINFO, PROJECTS } from "@/constants";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <div id="projects" className="pageMainDiv">
      <h3 className="subTitle">{PROJECTINFO?.title}</h3>

      <p className="text-md py-2 leading-8 text-justify">
        {PROJECTINFO?.description}
      </p>

      <div className="w-full sm:w-[80%] sm:mx-auto md:w-full my-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        {PROJECTS?.length &&
          PROJECTS.map((project, index) => (
            <ProjectCard
              key={`project-${index}`}
              name={project.title}
              description={project.content}
              image={project.img_url}
              source_code_link={project.code_link}
              demo_link={project.demo_link}
            />
          ))}
      </div>
    </div>
  );
}

export default Projects;
