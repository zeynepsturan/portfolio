import { Github, Linkedin, Mail } from "lucide-react";

// kind: "profile" (url + username) | "email" (address)
export const CONTACTS = [
  {
    id: "linkedin",
    fileName: "LinkedIn.url",
    kind: "profile",
    Icon: Linkedin,
    iconColor: "text-blue-600",
    tileStyle: { bg: "bg-blue-50", border: "border-blue-300", hoverBg: "hover:bg-blue-100" },
    headerStyle: "bg-blue-50 border-blue-200",
    title: "LinkedIn",
    url: "https://linkedin.com/in/zeynepsudeturan",
    username: "@zeynepsturan",
    description: "Connect with me on LinkedIn for professional networking",
  },
  {
    id: "github",
    fileName: "GitHub.url",
    kind: "profile",
    Icon: Github,
    iconColor: "text-gray-800",
    tileStyle: { bg: "bg-gray-100", border: "border-gray-300", hoverBg: "hover:bg-gray-200" },
    headerStyle: "bg-gray-50 border-gray-200",
    title: "GitHub",
    url: "https://github.com/zeynepsturan",
    username: "@zeynepsturan",
    description: "Check out my open source projects and contributions",
  },
  {
    id: "email",
    fileName: "Email.txt",
    kind: "email",
    Icon: Mail,
    iconColor: "text-red-600",
    tileStyle: { bg: "bg-red-50", border: "border-red-300", hoverBg: "hover:bg-red-100" },
    headerStyle: "bg-red-50 border-red-200",
    title: "Email",
    address: "zeynepsudeturan69@gmail.com",
    description: "Send me an email for inquiries and collaborations",
  },
];

export const getContact = (id) => CONTACTS.find((c) => c.id === id);
