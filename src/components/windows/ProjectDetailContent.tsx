import { ExternalLink, Github } from 'lucide-react';

interface ProjectDetailContentProps {
  project?: {
    title: string;
    description: string;
    tech: string[];
    github: string;
    demo: string;
    details: string;
  };
}

export function ProjectDetailContent({ project }: ProjectDetailContentProps) {
  if (!project) {
    return <div className="p-8">Project not found</div>;
  }

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="text-blue-600 mb-4">{project.title}</h1>
      
      <div className="space-y-6">
        <div>
          <h2 className="text-gray-800 mb-2">Overview</h2>
          <p className="text-gray-700">{project.description}</p>
        </div>

        <div>
          <h2 className="text-gray-800 mb-2">Technologies Used</h2>
          <div className="flex flex-wrap gap-2">
            {project.tech.map(tech => (
              <span key={tech} className="bg-blue-100 text-blue-800 px-3 py-1 rounded">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-gray-800 mb-2">Project Details</h2>
          <p className="text-gray-700">{project.details}</p>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-gray-800 mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Responsive design optimized for all devices</li>
            <li>Modern and intuitive user interface</li>
            <li>High performance and optimized code</li>
            <li>Comprehensive testing and documentation</li>
          </ul>
        </div>

        <div className="flex gap-4 pt-4">
          <a 
            href={project.github}
            className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded transition-colors"
          >
            <Github className="w-5 h-5" />
            <span>View Code</span>
          </a>
          <a 
            href={project.demo}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded transition-colors"
          >
            <ExternalLink className="w-5 h-5" />
            <span>Live Demo</span>
          </a>
        </div>
      </div>
    </div>
  );
}
