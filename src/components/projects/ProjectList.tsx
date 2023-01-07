import { ProjectProps } from "@/types/project-types";
import React from "react";
import ProjectCard from "./ProjectCard";

type ProjectListProps = {
  projects: ProjectProps[];
};

const ProjectList = ({ projects }: ProjectListProps) => {
  return (
    <div className="flex flex-wrap gap-x-8 gap-y-16">
      {projects.map((project) => (
        <ProjectCard key={project.id} {...project} />
      ))}
    </div>
  );
};

export default ProjectList;
