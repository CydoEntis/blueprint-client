import data from "@/data/fake-data.json";
import ProjectList from "@/components/projects/ProjectList";
import { ProjectProps } from "@/types/project-types";
import Header from "@/components/header/Header";
type Props = {};

const Projects = (props: Props) => {
  return (
    <div className="p-8">
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
