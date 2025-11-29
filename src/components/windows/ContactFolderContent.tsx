import {
  Github,
  Linkedin,
  Mail,
} from 'lucide-react';

interface ContactFolderContentProps {
  onOpenContact?: (contactId: string, contactTitle: string) => void;
}

type ContactItem = {
  id: string;
  title: string;
  icon: React.ElementType;
  iconColor: string;
  bg: string;
  border: string;
  hoverBg: string;
};

export function ContactFolderContent({ onOpenContact }: ContactFolderContentProps) {
  const contacts: ContactItem[] = [
    {
      id: 'linkedin',
      title: 'LinkedIn.url',
      icon: Linkedin,
      iconColor: 'text-blue-600',
      bg: 'bg-blue-50',
      border: 'border-blue-300',
      hoverBg: 'hover:bg-blue-100',
    },
    {
      id: 'github',
      title: 'GitHub.url',
      icon: Github,
      iconColor: 'text-gray-800',
      bg: 'bg-gray-100',
      border: 'border-gray-300',
      hoverBg: 'hover:bg-gray-200',
    },
    {
      id: 'email',
      title: 'Email.txt',
      icon: Mail,
      iconColor: 'text-red-600',
      bg: 'bg-red-50',
      border: 'border-red-300',
      hoverBg: 'hover:bg-red-100',
    },
  ];

  return (
    <div className="p-4">
      <div className="grid grid-cols-4 gap-4">
        {contacts.map(({ id, title, icon: Icon, iconColor, bg, border, hoverBg }) => (
          <button
            key={id}
            onDoubleClick={() => onOpenContact?.(id, title)}
            className="flex flex-col items-center gap-2 p-4 rounded transition-colors"
          >
            <div
              className={`p-3 rounded border-2 ${bg} ${border} ${hoverBg} transition-colors`}
            >
              <Icon className={`w-12 h-12 ${iconColor}`} />
            </div>

            <span className="text-sm text-gray-800 text-center leading-tight">
              {title}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
