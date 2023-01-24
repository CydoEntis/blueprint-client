import { IProject, IProjectState } from "@/store/features/projectSlice";

import List from "../../components/list/List";
import ProjectCard from "./ProjectCard";
import { ProjectProps } from "@/types/project-types";
import React from "react";

const ProjectList = ({ projects }: IProjectState) => {
  return (
    <List>
      {projects.map((project) => (
        <ProjectCard key={project.projectId} {...project} />
      ))}
    </List>
  );
};

export default ProjectList;
