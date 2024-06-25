import ProjectCard from "./ProjectCard";
import ItemLayout from "../layouts/ItemLayout";

function Projects({ projectInfo, projects }) {
  return (
    <div id="projects" className="pageMainDiv">
      <ItemLayout>
        <h3 className="subTitle">{projectInfo?.title}</h3>

        <p className="text-md py-2 leading-8 text-justify">
          {projectInfo?.description}
        </p>
      </ItemLayout>

      <div className="w-full sm:w-[80%] sm:mx-auto md:w-full my-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects?.length &&
          projects.map((project) => (
            <ProjectCard
              key={project?._id}
              project={project}
            />
          ))}
      </div>
    </div>
  );
}

export default Projects;
