import { ExternalLink, Github } from 'lucide-react';

export function ProjectsContent() {
  const projects = [
  ];

  return (
    <div className="p-8">
      <h1 className="text-blue-600 mb-6">My Projects</h1>
      <div className="grid gap-6">
        {projects.map((project, index) => (
          <div key={index} className="border rounded-lg p-6 hover:shadow-lg transition-shadow bg-gray-50">
            <h2 className="text-gray-800 mb-2">{project.title}</h2>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map(tech => (
                <span key={tech} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-3">
              <a href={project.github} className="flex items-center gap-1 text-gray-700 hover:text-blue-600">
                <Github className="w-4 h-4" />
                <span className="text-sm">View Code</span>
              </a>
              <a href={project.demo} className="flex items-center gap-1 text-gray-700 hover:text-blue-600">
                <ExternalLink className="w-4 h-4" />
                <span className="text-sm">Live Demo</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
