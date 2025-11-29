import { ExternalLink, Mail, Github, Linkedin, Copy } from 'lucide-react';
import { useState } from 'react';

interface ContactDetailContentProps {
  contact?: {
    title: string;
    type: 'linkedin' | 'github' | 'email';
    url?: string;
    username?: string;
    address?: string;
    description: string;
  };
}

export function ContactDetailContent({ contact }: ContactDetailContentProps) {

  const [copied, setCopied] = useState(false);

  if (!contact) {
    return <div className="p-8">Contact not found</div>;
  }

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getIcon = () => {
    switch (contact.type) {
      case 'linkedin':
        return <Linkedin className="w-16 h-16 text-blue-600" />;
      case 'github':
        return <Github className="w-16 h-16 text-gray-800" />;
      case 'email':
        return <Mail className="w-16 h-16 text-red-600" />;
    }
  };

  const getBackgroundColor = () => {
    switch (contact.type) {
      case 'linkedin':
        return 'bg-blue-50 border-blue-200';
      case 'github':
        return 'bg-gray-50 border-gray-200';
      case 'email':
        return 'bg-red-50 border-red-200';
    }
  };

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <div className="space-y-6">
        <div className={`flex items-center gap-6 p-6 rounded-lg border-2 ${getBackgroundColor()}`}>
          <div className="flex-shrink-0">
            {getIcon()}
          </div>
          <div className="flex-1">
            <h1 className="text-gray-800 mb-2">{contact.title}</h1>
            <p className="text-gray-600">{contact.description}</p>
          </div>
        </div>

        {contact.type === 'email' ? (
          <div className="bg-white p-6 rounded-lg border-2 border-gray-200">
            <h2 className="text-gray-800 mb-4">Email Address</h2>
            <div className="flex items-center gap-3 bg-gray-50 p-4 rounded">
              <code className="flex-1 text-gray-800">{contact.address}</code>
              <button
                onClick={() => handleCopy(contact.address!)}
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition-colors"
              >
                <Copy className="w-4 h-4" />
                <span>{copied ? 'Copied!' : 'Copy'}</span>
              </button>
            </div>
            <div className="mt-4">
              <a
                href={`mailto:${contact.address}`}
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>Send Email</span>
              </a>
            </div>
          </div>
        ) : (
          <div className="bg-white p-6 rounded-lg border-2 border-gray-200">
            <h2 className="text-gray-800 mb-4">Profile Information</h2>
            <div className="space-y-4">
              <div>
                <p className="text-gray-600 text-sm mb-1">Username</p>
                <div className="flex items-center gap-3 bg-gray-50 p-3 rounded">
                  <code className="flex-1 text-gray-800">{contact.username}</code>
                  <button
                    onClick={() => handleCopy(contact.username!)}
                    className="text-blue-600 hover:text-blue-700"
                  >
                    <Copy className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div>
                <p className="text-gray-600 text-sm mb-1">Profile URL</p>
                <div className="flex items-center gap-3 bg-gray-50 p-3 rounded">
                  <code className="flex-1 text-gray-800 text-sm break-all">{contact.url}</code>
                  <button
                    onClick={() => handleCopy(contact.url!)}
                    className="text-blue-600 hover:text-blue-700 flex-shrink-0"
                  >
                    <Copy className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="pt-2">
                <a
                  href={contact.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded transition-colors"
                >
                  <ExternalLink className="w-5 h-5" />
                  <span>Visit Profile</span>
                </a>
              </div>
            </div>
          </div>
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
