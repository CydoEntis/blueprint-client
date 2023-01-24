import { IProject, IProjectState } from "@/store/features/projectSlice";

import List from "../../components/list/List";
import ProjectCard from "./ProjectCard";
import { ProjectProps } from "@/types/project-types";
import React from "react";
import { useAppSelector } from "@/store/store";

const ProjectList = () => {
  const projects = useAppSelector((state) => state.project.projects);
  const isLoading = useAppSelector((state) => state.project.isLoading);
  console.log(projects);
  return (
    <List>
      {isLoading && <p>Is Loading...</p>}
      {!isLoading &&
        projects.map((project: IProject) => (
          <ProjectCard key={project._id} {...project} />
        ))}
    </List>
  );
};

export default ProjectList;
