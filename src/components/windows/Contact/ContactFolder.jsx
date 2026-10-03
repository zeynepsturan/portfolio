import { CONTACTS } from "../../../data/contacts";
import { FolderGrid } from "../../ui/FolderGrid";

export default function ContactFolder({ actions }) {
  return (
    <FolderGrid>
      {CONTACTS.map(({ id, fileName, Icon, iconColor, tileStyle }) => (
        <button
          key={id}
          onDoubleClick={() => actions.openContact(id, fileName)}
          className="flex flex-col items-center gap-2 p-4 rounded transition-colors"
        >
          <div
            className={`p-3 rounded border-2 ${tileStyle.bg} ${tileStyle.border} ${tileStyle.hoverBg} transition-colors`}
          >
            <Icon className={`w-12 h-12 ${iconColor}`} />
          </div>
          <span className="text-sm text-gray-800 text-center leading-tight">{fileName}</span>
        </button>
      ))}
    </FolderGrid>
  );
}
