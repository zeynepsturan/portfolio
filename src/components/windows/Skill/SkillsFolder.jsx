import { SKILLS } from "../../../data/skills";
import { FolderGrid, FolderTile } from "../../ui/FolderGrid";

export default function SkillsFolder({ actions }) {
  return (
    <FolderGrid>
      {SKILLS.map((skill) => (
        <FolderTile
          key={skill.id}
          boxed
          icon={skill.icon}
          title={skill.title}
          subtitle={skill.level}
          onOpen={() => actions.openSkill(skill.id, skill.title)}
        />
      ))}
    </FolderGrid>
  );
}
