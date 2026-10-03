import { toolFileIcons as file } from "./assets";
import {
  cIcon, cppIcon, pythonIcon, javascriptIcon, javaIcon, reactIcon, nodejsIcon,
  tailwindIcon, htmlIcon, dockerIcon, gitIcon, githubIcon, vscodeIcon,
} from "./toolSvgIcons";

export const TOOLS = [
  { id: "c", title: "C", category: "Language", icon: cIcon },
  { id: "cpp", title: "C++", category: "Language", icon: cppIcon },
  { id: "python", title: "Python", category: "Language", icon: pythonIcon },
  { id: "js", title: "JavaScript", category: "Frontend", icon: javascriptIcon },
  { id: "java", title: "Java", category: "Language", icon: javaIcon },
  { id: "react", title: "React.js", category: "Frontend", icon: reactIcon },
  { id: "reactnative", title: "React Native", category: "Frontend & Mobile", icon: reactIcon },
  { id: "typescript", title: "TypeScript", category: "Frontend & Mobile", icon: file.typescript },
  { id: "websockets", title: "WebSockets", category: "Backend & APIs", icon: nodejsIcon },
  { id: "mssql", title: "MS SQL", category: "Database", icon: file.mssql },
  { id: "postgresql", title: "PostgreSQL", category: "Database", icon: file.postgresql },
  { id: "prisma", title: "Prisma ORM", category: "Database", icon: file.prisma },
  { id: "nodejs", title: "Node.js", category: "Backend", icon: nodejsIcon },
  { id: "tailwind", title: "Tailwind CSS", category: "CSS", icon: tailwindIcon },
  { id: "html", title: "HTML", category: "Frontend", icon: htmlIcon },
  { id: "jira", title: "Jira", category: "DevOps", icon: file.jira },
  { id: "postman", title: "Postman", category: "DevOps", icon: file.postman },
  { id: "docker", title: "Docker", category: "DevOps", icon: dockerIcon },
  { id: "github-actions", title: "GitHub Actions", category: "Systems & DevOps", icon: githubIcon },
  { id: "git", title: "Git", category: "Tools", icon: gitIcon },
  { id: "github", title: "GitHub", category: "Tools", icon: githubIcon },
  { id: "slack", title: "Slack", category: "Collaboration", icon: file.jira },
  { id: "vscode", title: "VS Code", category: "Tools", icon: vscodeIcon },
];

// Orijinal kodda tanımlıydı ama hiçbir yerden kullanılmıyordu; veri kaybolmasın diye duruyor.
export const TOOL_DETAILS = {
  react: { title: "React", description: "A JavaScript library for building user interfaces.", level: "Advanced" },
  nodejs: { title: "Node.js", description: "A JavaScript runtime built on Chrome's V8 JavaScript engine.", level: "Intermediate" },
  typescript: { title: "TypeScript", description: "A statically typed programming language that builds on JavaScript.", level: "Advanced" },
  firebase: { title: "Firebase", description: "A platform developed by Google for creating mobile and web applications.", level: "Intermediate" },
  mongodb: { title: "MongoDB", description: "A NoSQL database program.", level: "Advanced" },
  aws: { title: "AWS", description: "Amazon Web Services is a subsidiary of Amazon providing cloud computing platforms.", level: "Intermediate" },
};
