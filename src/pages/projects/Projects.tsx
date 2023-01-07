import data from "@/data/fake-data.json";
import ProjectList from "@/components/projects/ProjectList";
import { ProjectProps } from "@/types/project-types";
type Props = {};

const Projects = (props: Props) => {
  return (
    <div>
      <ProjectList projects={data} />
    </div>
  );
};

export default Projects;