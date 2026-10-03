import { CERTIFICATES } from "../../../data/certificates";
import { FolderGrid } from "../../ui/FolderGrid";
import CertificateIcon from "./CertificateIcon";

export default function CertificateFolder({ actions }) {
  return (
    <FolderGrid>
      {CERTIFICATES.map(({ id, title, issuer, icon: Icon }) => (
        <button
          key={id}
          onDoubleClick={() => actions.openCertificate(id, title)}
          className="flex flex-col items-center gap-2 p-4 rounded transition-colors hover:bg-blue-50"
        >
          <CertificateIcon icon={Icon} className="h-16 w-16 object-contain text-blue-600" />
          <div className="text-center">
            <p className="text-sm font-medium text-gray-800 leading-tight">{title}</p>
            <p className="mt-1 text-xs text-gray-500">{issuer}</p>
          </div>
        </button>
      ))}
    </FolderGrid>
  );
}
