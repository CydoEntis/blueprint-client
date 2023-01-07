import { ProjectProps } from "@/types/project-types";
import React from "react";
import ProjectCard from "./ProjectCard";

type ProjectListProps = {
  projects: ProjectProps[];
};

const ProjectList = ({ projects }: ProjectListProps) => {
  return (
    <div className="bg-green-30 flex flex-wrap  gap-y-16 py-8  px-5 md:gap-x-1 lg:gap-x-8">
      {projects.map((project) => (
        <ProjectCard key={project.id} {...project} />
      ))}
      {projects.map((project) => (
        <ProjectCard key={project.id} {...project} />
      ))}
    </div>
  );
};

export default ProjectList;
