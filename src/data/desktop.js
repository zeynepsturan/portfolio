import { desktopIcons } from "./assets";

// windowType -> components/windows/index.js içindeki kayıt anahtarı
export const DESKTOP_ICONS = [
  { id: "cv", title: "resume.pdf", icon: desktopIcons.cv, windowType: "cv", position: { x: 20, y: 20 } },
  { id: "projects", title: "Projects", icon: desktopIcons.projects, windowType: "projects-folder", position: { x: 20, y: 120 } },
  { id: "skills", title: "Skills", icon: desktopIcons.skills, windowType: "skills-folder", position: { x: 20, y: 420 } },
  { id: "about", title: "About Me", icon: desktopIcons.about, windowType: "about", position: { x: 20, y: 220 } },
  { id: "contact", title: "Contact", icon: desktopIcons.contact, windowType: "contact-folder", position: { x: 20, y: 320 } },
  { id: "tools", title: "Tools", icon: desktopIcons.tools, windowType: "tools-folder", position: { x: 20, y: 520 } },
  { id: "certificates", title: "Certificates", icon: desktopIcons.certificates, windowType: "certificates-folder", position: { x: 20, y: 620 } },
];
