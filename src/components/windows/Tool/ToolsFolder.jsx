import { TOOLS } from "../../../data/tools";
import { FolderGrid, FolderTile } from "../../ui/FolderGrid";

export default function ToolsFolder({ actions }) {
  return (
    <FolderGrid>
      {TOOLS.map((tool) => (
        <FolderTile
          key={tool.id}
          boxed
          icon={tool.icon}
          title={tool.title}
          subtitle={tool.category}
          onOpen={() => actions.openSkill(tool.id, tool.title)}
        />
      ))}
    </FolderGrid>
  );
}
