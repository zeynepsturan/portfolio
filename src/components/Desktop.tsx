import { useState, useEffect } from 'react';
import { DesktopIcon } from './DesktopIcon';
import { Window } from './Window';
import { Taskbar } from './Taskbar';

import CVIcon from '../components/icons/cv.png';
import ToolsIcon from '../components/icons/tools.png';
import AboutIcon from '../components/icons/about.png';
import ProjectsIcon from '../components/icons/projects.png';
import ContactIcon from '../components/icons/contact.png';
import SkillsIcon from '../components/icons/skills.png';
import bgImage from '../components/images/bg.png';

interface OpenWindow {
  id: string;
  title: string;
  content: string;
  type:
    | 'cv'
    | 'projects'
    | 'about'
    | 'contact'
    | 'folder'
    | 'project-detail'
    | 'contact-folder'
    | 'contact-detail'
    | 'skills-folder'
    | 'tools-folder';
  projectData?: any;
  contactData?: any;
  skillData?: any;
  toolsData?: any;
}

export function Desktop() {
  const [openWindows, setOpenWindows] = useState<OpenWindow[]>([]);
  const [time, setTime] = useState(new Date());
  const [iconPositions, setIconPositions] = useState({
    cv: { x: 20, y: 20 },
    projects: { x: 20, y: 120 },
    about: { x: 20, y: 220 },
    contact: { x: 20, y: 320 },
    skills: { x: 20, y: 420 },
    tools: { x: 20, y: 520 },
  });

  // FIX: useEffect instead of useState
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  const handleIconClick = (
    id: string,
    title: string,
    type: 'cv' | 'projects' | 'about' | 'contact' | 'skills' | 'tools'
  ) => {
    if (openWindows.find((w) => w.id === id)) return;

    let windowType: OpenWindow['type'] = type;
    if (type === 'projects') windowType = 'folder';
    else if (type === 'contact') windowType = 'contact-folder';
    else if (type === 'skills') windowType = 'skills-folder';
    else if (type === 'tools') windowType = 'tools-folder';

    const newWindow: OpenWindow = {
      id,
      title,
      content: '',
      type: windowType,
    };

    setOpenWindows((prev) => [...prev, newWindow]);
  };

  const handleOpenProject = (projectId: string, projectTitle: string) => {
    if (openWindows.find((w) => w.id === projectId)) return;

    const projectsData: any = {
      visicalc: {
        title: 'Visicalc Terminal Clone',
        description:
          'A retro-inspired, terminal-based clone of the legendary VisiCalc spreadsheet, rebuilt in C++ with modern OOP design',
        tech: ['C++'],
        github: 'https://github.com/zeynepsturan/VisiCalc-Terminal-Clone',
        demo: '#',
        details:
          'Developed a terminal-based VisiCalc clone in modern C++ using object-oriented programming principles. Implemented core spreadsheet functionalities including cell editing, formula calculations, row and column operations, and file saving/loading. Optimized for performance on command-line interfaces, providing users with a classic spreadsheet experience while maintaining efficient memory usage and responsive interactions.',
      },
      wordle: {
        title: 'WORDLE Terminal Clone',
        description:
          'a WORDLE clone runs on terminal with both English and Turkish gameplay options',
        tech: ['C'],
        github: 'https://github.com/zeynepsturan/WORDLE-clone',
        demo: '#',
        details:
          'Developed a terminal-based WORDLE clone in C, supporting both English and Turkish languages with full Turkish character support (ç, ğ, ş, ü, ö, ı). Implemented core game mechanics including word selection, guess validation, and color-coded feedback for correct and misplaced letters. Designed the game for an interactive command-line experience with intuitive input handling and efficient memory usage, providing players with a seamless and engaging puzzle challenge.',
      },
      python: {
        title: 'Python Course Translation',
        description:
          'Translated the GitHub project “30 Days of Python” into Turkish aiming to create open-source educational content for the Turkish community.',
        tech: ['Python', 'Github'],
        github: 'https://github.com/zeynepsturan/30-Days-Of-Python-TR',
        demo: '#',
        details:
          'Maintained a GitHub project translating the “30 Days of Python” series into Turkish, expanding learning resources and making Python education accessible to Turkishspeaking learners worldwide. Added context-relevant examples and explanations to enhance understanding and usability. Demonstrated skills in Python programming, technical writing, localization, and creating open-source educational content for the community.',
      },
      portfolio: {
        title: 'Portfolio Website',
        description:
          'This is literally the website',
        tech: ['React', 'TypeScript', 'Tailwind CSS'],
        github: 'https://github.com/zeynepsturan/30-Days-Of-Python-TR',
        demo: '#',
        details:
          'Developed this website to show my portfolio in a fun and interactive way :)',
      },
      101: {
        title: 'CSE101 Term Project',
        description:
          'Content management system for portfolio websites with drag-and-drop builder and customizable themes.',
        tech: ['C', 'Ardunio'],
        github: 'https://github.com/zeynepsturan/CSE101-TERM-PROJECT',
        demo: '#',
        details:
          'Developed and integrated a memory game, "Recall The Matrix," for our group project using three Arduino Uno microcontrollers and an 8x8 Matrix display. Implemented core game mechanics: generating a temporary random number matrix for memorization and taking player input via a remote controller. Contributed to the full project lifecycle, including research, software development, hardware setup, report documentation , debugging, and final testing for various situations.',
      },
      241: {
        title: 'GTU CSE241 Complete',
        description:
          'Content management system for portfolio websites with drag-and-drop builder and customizable themes.',
        tech: ['C++'],
        github: 'https://github.com/zeynepsturan/GTU-CSE-241-COMPLETE',
        demo: '#',
        details:
          'Built a flexible CMS platform allowing users to create portfolio websites without coding. Includes drag-and-drop page builder, theme customization, media management with AWS S3, and SEO optimization tools.',
      },
      102: {
        title: 'GTU CSE102 Complete',
        description:
          'Content management system for portfolio websites with drag-and-drop builder and customizable themes.',
        tech: ['C'],
        github: 'https://github.com/zeynepsturan/GTU-CSE102-ASSIGNMENTS',
        demo: '#',
        details:
          'Built a flexible CMS platform allowing users to create portfolio websites without coding. Includes drag-and-drop page builder, theme customization, media management with AWS S3, and SEO optimization tools.',
      },
    };

    const newWindow: OpenWindow = {
      id: projectId,
      title: projectTitle,
      content: '',
      type: 'project-detail',
      projectData: projectsData[projectId],
    };

    setOpenWindows((prev) => [...prev, newWindow]);
  };

  const handleOpenContact = (contactId: string, contactTitle: string) => {
    if (openWindows.find((w) => w.id === contactId)) return;

    const contactsData: any = {
      linkedin: {
        title: 'LinkedIn',
        type: 'linkedin',
        url: 'https://linkedin.com/in/zeynepsudeturan',
        username: '@zeynepsturan',
        description: 'Connect with me on LinkedIn for professional networking',
      },
      github: {
        title: 'GitHub',
        type: 'github',
        url: 'https://github.com/zeynepsturan',
        username: '@zeynepsturan',
        description: 'Check out my open source projects and contributions',
      },
      email: {
        title: 'Email',
        type: 'email',
        address: 'zeynepsudeturan69@gmail.com',
        description: 'Send me an email for inquiries and collaborations',
      },
    };

    const newWindow: OpenWindow = {
      id: contactId,
      title: contactTitle,
      content: '',
      type: 'contact-detail',
      contactData: contactsData[contactId],
    };

    setOpenWindows((prev) => [...prev, newWindow]);
  };

  const handleOpenTools = (toolsId: string, toolsTitle: string) => {
    if (openWindows.find((w) => w.id === toolsId)) return;

    const toolsData: any = {
      react: {
        title: 'React',
        description: 'A JavaScript library for building user interfaces.',
        level: 'Advanced',
      },
      nodejs: {
        title: 'Node.js',
        description: "A JavaScript runtime built on Chrome's V8 JavaScript engine.",
        level: 'Intermediate',
      },
      typescript: {
        title: 'TypeScript',
        description: 'A statically typed programming language that builds on JavaScript.',
        level: 'Advanced',
      },
      firebase: {
        title: 'Firebase',
        description:
          'A platform developed by Google for creating mobile and web applications.',
        level: 'Intermediate',
      },
      mongodb: {
        title: 'MongoDB',
        description: 'A NoSQL database program.',
        level: 'Advanced',
      },
      aws: {
        title: 'AWS',
        description:
          'Amazon Web Services is a subsidiary of Amazon providing cloud computing platforms.',
        level: 'Intermediate',
      },
    };

    const newWindow: OpenWindow = {
      id: toolsId,
      title: toolsTitle,
      content: '',
      type: 'tools-folder',
      toolsData: toolsData[toolsId],
    };

    setOpenWindows((prev) => [...prev, newWindow]);
  };

  const handleCloseWindow = (id: string) => {
    setOpenWindows((prev) => prev.filter((w) => w.id !== id));
  };

  const desktopIcons = [
    { id: 'cv', title: 'resume.pdf', icon: CVIcon, type: 'cv' as const },
    { id: 'projects', title: 'Projects', icon: ProjectsIcon, type: 'projects' as const },
    { id: 'skills', title: 'Skills', icon: SkillsIcon, type: 'skills' as const },
    { id: 'about', title: 'About Me', icon: AboutIcon, type: 'about' as const },
    { id: 'contact', title: 'Contact', icon: ContactIcon, type: 'contact' as const },
    { id: 'tools', title: 'Tools', icon: ToolsIcon, type: 'tools' as const },
  ];
  

  const handleIconPositionChange = (id: string, position: { x: number; y: number }) => {
    setIconPositions((prev) => ({ ...prev, [id]: position }));
  };

  return (
    <div
      className="h-screen w-screen overflow-hidden bg-cover bg-center relative"
      style={{ backgroundImage: `url(${bgImage})` }}
    >

      {/* Ortadaki mesaj */}
      <div className="absolute inset-0 bg-black/30 pointer-events-none">
        <div className="relative flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-white text-5xl md:text-6xl font-bold animate-bounce">
            This is my Portfolio
          </h1>
          <p className="text-white/80 mt-4 text-lg md:text-2xl max-w-xl">
            Explore my Windows desktop inspired website where you can open projects, check my coding experiments, 
            and find out more about my programming journey. Enjoy the easter eggs!
          </p>
        </div>
      </div>
      {desktopIcons.map((icon) => (
        <DesktopIcon
          key={icon.id}
          icon={icon.icon}
          title={icon.title}
          onClick={() => handleIconClick(icon.id, icon.title, icon.type)}
          position={iconPositions[icon.id as keyof typeof iconPositions]}
          onPositionChange={(pos) => handleIconPositionChange(icon.id, pos)}
        />
      ))}


      {openWindows.map((window, index) => (
        <Window
          key={window.id}
          id={window.id}
          title={window.title}
          onClose={() => handleCloseWindow(window.id)}
          type={window.type}
          index={index}
          onOpenProject={handleOpenProject}
          projectData={window.projectData}
          onOpenContact={handleOpenContact}
          contactData={window.contactData}
          onOpenTools={handleOpenTools}
          skillData={window.skillData}
          toolsData={window.toolsData}
        />
      ))}

      <Taskbar openWindows={openWindows} time={time} />
    </div>
  );
}
