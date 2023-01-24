import { IProject, getProjects } from "@/store/features/projectSlice";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { useEffect, useState } from "react";

import AddProject from "@/features/projects/AddProject";
import Header from "@/components/header/Header";
import ProjectList from "@/features/projects/ProjectList";
import data from "@/data/fake-data.json";

type Props = {};

const Projects = (props: Props) => {
  const [isAddProjectOpen, setIsAddProjectOpen] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getProjects());
  }, []);

  return (
    <div className="relative lg:px-4 xl:px-12">
      <Header
        title="Projects"
        description="Overview of all projects"
        // onClick={() => setIsAddProjectOpen(true)}
        onClick={() => setIsAddProjectOpen(true)}
        buttonText="Create Project"
      />
      {isAddProjectOpen && (
        <AddProject onClose={() => setIsAddProjectOpen(false)} />
      )}
      <ProjectList />
    </div>
  );
};

export default Projects;
