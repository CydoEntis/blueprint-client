import { ProjectProps } from "@/types/project-types";
import React from "react";
import List from "../../components/shared/list/List";
import ProjectCard from "./ProjectCard";

type ProjectListProps = {
  projects: ProjectProps[];
};

const ProjectList = ({ projects }: ProjectListProps) => {
  return (
    <List>
      {projects.map((project) => (
        <ProjectCard key={project.id} {...project} />
      ))}
      {projects.map((project) => (
        <ProjectCard key={project.id} {...project} />
      ))}
    </List>
  );
};

export default ProjectList;
