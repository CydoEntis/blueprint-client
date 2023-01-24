import AddProject from "@/features/projects/AddProject";
import Header from "@/components/header/Header";
import { IProject } from "@/store/features/projectSlice";
import ProjectList from "@/features/projects/ProjectList";
import data from "@/data/fake-data.json";
import { useAppSelector } from "@/store/store";
import { useState } from "react";

type Props = {};

const Projects = (props: Props) => {
  const [isAddProjectOpen, setIsAddProjectOpen] = useState<boolean>(false);
  const projects = useAppSelector((state) => state.project.projects);

  return (
    <div className="relative lg:px-4 xl:px-12">
      <Header
        title="Projects"
        description="Overview of all projects"
        onClick={() => setIsAddProjectOpen(true)}
        buttonText="Create Project"
      />
      {isAddProjectOpen && (
        <AddProject onClose={() => setIsAddProjectOpen(false)} />
      )}
      <ProjectList projects={projects} />
    </div>
  );
};

export default Projects;
