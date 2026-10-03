import { Copy, ExternalLink, Mail } from "lucide-react";
import { useCopyToClipboard } from "../../../hooks/useCopyToClipboard";

const PRIMARY_BUTTON =
  "bg-blue-600 hover:bg-blue-700 text-white rounded transition-colors";

function CopyRow({ value, onCopy, small = false, breakAll = false }) {
  return (
    <div className={`flex items-center gap-3 bg-gray-50 rounded ${small ? "p-3" : "p-4"}`}>
      <code className={`flex-1 text-gray-800 ${breakAll ? "text-sm break-all" : ""}`}>{value}</code>
      <button
        onClick={() => onCopy(value)}
        className={`text-blue-600 hover:text-blue-700 ${breakAll ? "flex-shrink-0" : ""}`}
      >
        <Copy className="w-4 h-4" />
      </button>
    </div>
  );
}

function EmailCard({ contact, copied, copy }) {
  return (
    <div className="bg-white p-6 rounded-lg border-2 border-gray-200">
      <h2 className="text-gray-800 mb-4">Email Address</h2>
      <div className="flex items-center gap-3 bg-gray-50 p-4 rounded">
        <code className="flex-1 text-gray-800">{contact.address}</code>
        <button
          onClick={() => copy(contact.address)}
          className={`flex items-center gap-2 px-4 py-2 ${PRIMARY_BUTTON}`}
        >
          <Copy className="w-4 h-4" />
          <span>{copied ? "Copied!" : "Copy"}</span>
        </button>
      </div>
      <div className="mt-4">
        <a
          href={`mailto:${contact.address}`}
          className={`inline-flex items-center gap-2 px-6 py-3 ${PRIMARY_BUTTON}`}
        >
          <Mail className="w-5 h-5" />
          <span>Send Email</span>
        </a>
      </div>
    </div>
  );
}

function ProfileCard({ contact, copy }) {
  return (
    <div className="bg-white p-6 rounded-lg border-2 border-gray-200">
      <h2 className="text-gray-800 mb-4">Profile Information</h2>
      <div className="space-y-4">
        <div>
          <p className="text-gray-600 text-sm mb-1">Username</p>
          <CopyRow value={contact.username} onCopy={copy} small />
        </div>
        <div>
          <p className="text-gray-600 text-sm mb-1">Profile URL</p>
          <CopyRow value={contact.url} onCopy={copy} small breakAll />
        </div>
        <div className="pt-2">
          <a
            href={contact.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 px-6 py-3 ${PRIMARY_BUTTON}`}
          >
            <ExternalLink className="w-5 h-5" />
            <span>Visit Profile</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default function ContactDetail({ data: contact }) {
  const { copied, copy } = useCopyToClipboard();

  if (!contact) return <div className="p-8">Contact not found</div>;

  const { Icon, iconColor, headerStyle } = contact;

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <div className="space-y-6">
        <div className={`flex items-center gap-6 p-6 rounded-lg border-2 ${headerStyle}`}>
          <div className="flex-shrink-0">
            <Icon className={`w-16 h-16 ${iconColor}`} />
          </div>
          <div className="flex-1">
            <h1 className="text-gray-800 mb-2">{contact.title}</h1>
            <p className="text-gray-600">{contact.description}</p>
          </div>
        </div>

        {contact.kind === "email" ? (
          <EmailCard contact={contact} copied={copied} copy={copy} />
        ) : (
          <ProfileCard contact={contact} copy={copy} />
        )}

        {copied && (
          <div className="bg-green-100 border border-green-400 text-green-800 px-4 py-3 rounded text-center">
            Copied to clipboard!
          </div>
        )}
      </div>
    </div>
  );
}
