import data from "@/data/fake-data.json";
import ProjectList from "@/components/projects/ProjectList";
import { ProjectProps } from "@/types/project-types";
import Header from "@/components/header/Header";
import { Outlet } from "react-router-dom";
type Props = {};

const Projects = (props: Props) => {
  return (
    <div className="lg:px-4 xl:px-12">
      <Header
        title="Projects"
        description="Overview of all projects"
        onClick={() => console.log("Button Clicked")}
        buttonText="Create Project"
      />
      <ProjectList projects={data} />
    </div>
  );
};

export default Projects;
