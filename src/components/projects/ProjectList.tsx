import { Project } from "@/types/project-types";
import React from "react";
import ProjectCard from "./ProjectCard";

type ProjectListProps = {
  projects: Project[];
};

const ProjectList = ({ projects }: ProjectListProps) => {
  return (
    <div className="flex flex-wrap gap-5">
      {projects.map((project) => (
        <ProjectCard {...project} />
      ))}
    </div>
  );
};

export default ProjectList;
