import data from "@/data/fake-data.json";
import ProjectList from "@/features/projects/ProjectList";
import Header from "@/components/header/Header";
import AddProject from "@/features/projects/AddProject";
import { useState } from "react";
type Props = {};

const Projects = (props: Props) => {
  const [isAddProjectOpen, setIsAddProjectOpen] = useState<boolean>(false);

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
      <ProjectList projects={data} />
    </div>
  );
};

export default Projects;
