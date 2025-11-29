interface ToolssFolderContentProps {
  onOpenTools?: (toolsId: string, toolsTitle: string) => void;
}

type Tool = {
  id: string;
  title: string;
  category: string;
  icon?: string;
};

import CIcon from '../icons/C.svg'
import CPPIcon from '../icons/CPP.svg';
import PythonIcon from '../icons/Python-Light.svg';
import HTMLIcon from '../icons/html.svg';
import ReactIcon from '../icons/React-Light.svg';
import ReactNativeIcon from '../icons/React-Light.svg';
import JSIcon from '../icons/JavaScript.svg';
import GitIcon from '../icons/Git.svg';
import GithubIcon from '../icons/Github-Light.svg';
import MSSQLIcon from '../icons/MsSQL.jpg';
import VSCodeIcon from '../icons/VSCode-Light.svg';
import JavaIcon from '../icons/Java-Light.svg';
import NodeJSIcon from '../icons/NodeJS-Light.svg';
import TailwindIcon from '../icons/TailwindCSS-Light.svg';
import PostgreSQLIcon from '../icons/PostgreSQL-Light.svg';
import DockerIcon from '../icons/Docker.svg';
import JiraIcon from '../icons/jira.png';
import PostmanIcon from '../icons/Postman.svg';

export function ToolsFolderContent({ onOpenSkill }: ToolsFolderContentProps) {

const tools: Tool[] = [
  { id: 'c', title: 'C', category: 'Language', icon: CIcon },
  { id: 'cpp', title: 'C++', category: 'Language', icon: CPPIcon },
  { id: 'python', title: 'Python', category: 'Language', icon: PythonIcon },
  { id: 'js', title: 'JavaScript', category: 'Frontend', icon: JSIcon },
  { id: 'java', title: 'Java', category: 'Language', icon: JavaIcon },
  { id: 'react', title: 'React.js', category: 'Frontend', icon: ReactIcon },
  { id: 'reactnative', title: 'React Native', category: 'Mobile', icon: ReactNativeIcon },
  { id: 'mssql', title: 'MS SQL', category: 'Database', icon: MSSQLIcon },
  { id: 'postgresql', title: 'PostgreSQL', category: 'Database', icon: PostgreSQLIcon },
  { id: 'nodejs', title: 'Node.js', category: 'Backend', icon: NodeJSIcon },
  { id: 'tailwind', title: 'Tailwind CSS', category: 'CSS', icon: TailwindIcon },
  { id: 'html', title: 'HTML', category: 'Frontend', icon: HTMLIcon },
  { id: 'jira', title: 'Jira', category: 'DevOps', icon: JiraIcon },
  { id: 'postman', title: 'Postman', category: 'DevOps', icon: PostmanIcon },
  { id: 'docker', title: 'Docker', category: 'DevOps', icon: DockerIcon },
  { id: 'git', title: 'Git', category: 'Tools', icon: GitIcon },
  { id: 'github', title: 'GitHub', category: 'Tools', icon: GithubIcon },
  { id: 'vscode', title: 'VS Code', category: 'Tools', icon: VSCodeIcon },
];

  return (
    <div className="p-4">
      <div className="grid grid-cols-4 gap-4">
        {tools.map((tools) => (
          <button
            key={tools.id}
            className="flex flex-col items-center gap-2 p-4 rounded hover:bg-blue-50 transition-colors"
            onDoubleClick={() => onOpenSkill?.(tools.id, tools.title)}
          >
            <div className="flex items-center justify-center w-24 h-24">
              {tools.icon ? (
                <img src={tools.icon} alt={tools.title} className="w-16 h-16 object-contain" />
              ) : (
                <span className="text-green-600 font-bold text-2xl">?</span>
              )}
            </div>
            <div className="text-center">
              <span className="text-sm text-gray-800 leading-tight block">{tools.title}</span>
              <span className="text-xs text-gray-500">{tools.category}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
