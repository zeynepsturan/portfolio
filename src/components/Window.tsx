import { useState, useRef, useEffect } from 'react';
import { X, Minus, Square } from 'lucide-react';
import { CVContent } from './windows/CVContent';
import { ProjectsContent } from './windows/ProjectsContent';
import { AboutContent } from './windows/AboutContent';
import { ContactContent } from './windows/ContactContent';
import { FolderContent } from './windows/FolderContent';
import { ProjectDetailContent } from './windows/ProjectDetailContent';
import { ContactFolderContent } from './windows/ContactFolderContent';
import { ContactDetailContent } from './windows/ContactDetailContent';
import { SkillsFolderContent } from './windows/SkillsFolderContent';
import { SkillDetailContent } from './windows/SkillDetailContent';
import { ToolsFolderContent } from './windows/ToolsFolderContent';
import { ToolsDetailContent } from './windows/ToolsDetailContent';

interface WindowProps {
  id: string;
  title: string;
  onClose: () => void;
  type: 'cv' | 'projects' | 'about' | 'contact' | 'folder' | 'project-detail' | 'contact-folder' | 'contact-detail' | 'skills-folder' | 'skill-detail' | 'tools-folder' | 'tools-detail';
  index: number;
  onOpenProject?: (projectId: string, projectTitle: string) => void;
  projectData?: any;
  onOpenContact?: (contactId: string, contactTitle: string) => void;
  contactData?: any;
  onOpenSkill?: (skillId: string, skillTitle: string) => void;
  skillData?: any;
}

export function Window({ id, title, onClose, type, index, onOpenProject, projectData, onOpenContact, contactData, onOpenSkill, skillData }: WindowProps) {
  const [position, setPosition] = useState({ 
    x: 150 + (index * 40), 
    y: 100 + (index * 40) 
  });
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [isMaximized, setIsMaximized] = useState(false);
  const windowRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (isMaximized) return;
    setIsDragging(true);
    setDragOffset({
      x: e.clientX - position.x,
      y: e.clientY - position.y
    });
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging && !isMaximized) {
      setPosition({
        x: e.clientX - dragOffset.x,
        y: e.clientY - dragOffset.y
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging, dragOffset]);

  const renderContent = () => {
    switch (type) {
      case 'cv':
        return <CVContent />;
      case 'folder':
        return <FolderContent onOpenProject={onOpenProject} />;
      case 'project-detail':
        return <ProjectDetailContent project={projectData} />;
      case 'about':
        return <AboutContent />;
      case 'contact-folder':
        return <ContactFolderContent onOpenContact={onOpenContact} />;
      case 'contact-detail':
        return <ContactDetailContent contact={contactData} />;
      case 'skills-folder':
        return <SkillsFolderContent onOpenSkill={onOpenSkill} />;
      case 'tools-folder':
        return <ToolsFolderContent onOpenSkill={onOpenSkill} />;
      case 'skill-detail':
        return <SkillDetailContent skill={skillData} />;
      default:
        return null;
    }
  };

  return (
    <div
      ref={windowRef}
      className={`absolute bg-gray-100 rounded-lg shadow-2xl overflow-hidden border-2 border-gray-300 ${
        isMaximized ? 'inset-4 bottom-16' : ''
      }`}
      style={
        isMaximized
          ? {}
          : {
              left: `${position.x}px`,
              top: `${position.y}px`,
              width: '700px',
              maxWidth: '90vw',
              height: '500px',
              maxHeight: '80vh'
            }
      }
    >
      {/* Title Bar */}
      <div
        className="bg-gradient-to-r from-purple-500 to-purple-600 px-2 py-1 flex items-center justify-between cursor-move select-none"
        onMouseDown={handleMouseDown}
      >
        <span className="text-white ml-2">{title}</span>
        <div className="flex gap-1">
          <button
            className="w-6 h-6 bg-gray-300 hover:bg-gray-400 rounded flex items-center justify-center"
            onClick={() => {}}
          >
            <Minus className="w-4 h-4" />
          </button>
          <button
            className="w-6 h-6 bg-gray-300 hover:bg-gray-400 rounded flex items-center justify-center"
            onClick={() => setIsMaximized(!isMaximized)}
          >
            <Square className="w-3 h-3" />
          </button>
          <button
            className="w-6 h-6 bg-fuchsia-500 hover:bg-red-600 rounded flex items-center justify-center"
            onClick={onClose}
          >
            <X className="w-4 h-4 text-white" />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="h-full overflow-auto pb-12 bg-white">
        {renderContent()}
      </div>
    </div>
  );
}