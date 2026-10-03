import { PROJECTS } from "../../../data/projects";
import { FolderGrid, FolderTile } from "../../ui/FolderGrid";

export default function ProjectsFolder({ actions }) {
  return (
    <FolderGrid>
      {PROJECTS.map((project) => (
        <FolderTile
          key={project.id}
          icon={project.icon}
          title={project.label}
          onOpen={() => actions.openProject(project.id, project.label)}
        />
      ))}
    </FolderGrid>
  );
}
