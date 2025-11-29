import { FileText, Folder } from 'lucide-react';
import VisiIcon from '../icons/visicalc.png';
import WordleIcon from '../icons/wordle.png';
import PyedIcon from '../icons/pyed.png';
import HW1Icon from '../icons/hw1.png';
import HW2Icon from '../icons/hw2.png';
import WebIcon from '../icons/website.png';
import ArdIcon from '../icons/ardunio.png';
interface FolderContentProps {
  onOpenProject?: (projectId: string, projectTitle: string) => void;
}

export function FolderContent({ onOpenProject }: FolderContentProps) {
  const projects = [
    {
      id: 'visicalc',
      title: 'VisiCalc Clone',
      icon: VisiIcon
    },

    {
      id: 'wordle',
      title: 'WORDLE Clone',
      icon: WordleIcon
    },

    {
      id: 'python',
      title: '30 Days Of Python TR Translation',
      icon: PyedIcon
    },
    {
      id: 'portfolio',
      title: 'Portfolio Website',
      icon: WebIcon
    },
    {
      id: '101',
      title: 'CSE101 Term Project',
      icon: ArdIcon
    },
    {
      id: '241',
      title: 'GTU CSE241 Complete',
      icon: HW1Icon
    },

    {
      id: '102',
      title: 'GTU CSE102 Complete',
      icon: HW2Icon
    }
  ];

  return (
    <div className="p-4">
      <div className="grid grid-cols-4 gap-4">
        {projects.map((project) => (
          <button
            key={project.id}
            className="flex flex-col items-center gap-2 p-4 rounded hover:bg-blue-50 transition-colors"
            onDoubleClick={() => onOpenProject?.(project.id, project.title)}
          >
            <div>
              <img src={project.icon} className="w-16 h-16 object-contain"></img>
            </div>
            <span className="text-sm text-gray-800 text-center leading-tight">
              {project.title}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
