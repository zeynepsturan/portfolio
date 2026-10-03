import { Github } from "lucide-react";
import Tag from "../../ui/Tag";

function Block({ title, children }) {
  return (
    <div>
      <h2 className="text-gray-800 mb-2">{title}</h2>
      {children}
    </div>
  );
}

export default function ProjectDetail({ data: project }) {
  if (!project) return <div className="p-8">Project not found</div>;

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="text-blue-600 mb-4">{project.title}</h1>

      <div className="space-y-6">
        <Block title="Overview">
          <p className="text-gray-700">{project.description}</p>
        </Block>

        <Block title="Technologies Used">
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <Tag key={tech}>{tech}</Tag>
            ))}
          </div>
        </Block>

        <Block title="Project Details">
          <p className="text-gray-700" style={{ whiteSpace: "pre-line" }}>
            {project.details}
          </p>
        </Block>

        {(project.images || (project.image ? [project.image] : [])).length > 0 && (
          <div className="mb-6">
            <div
              className={`grid gap-4 justify-items-center ${project.imageLayout === "stack" ? "grid-cols-1" : ""}`}
              style={
                project.imageLayout === "stack"
                  ? undefined
                  : { gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 200px), 1fr))" }
              }
            >
              {(project.images || [project.image]).map((image, index) => (
                <img
                  key={image}
                  src={image}
                  alt={`${project.title} screenshot ${index + 1}`}
                  className="w-full max-w-56 h-auto rounded-lg shadow-md"
                />
              ))}
            </div>
          </div>
        )}

        <div className="flex gap-4 pt-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded transition-colors"
          >
            <Github className="w-5 h-5" />
            <span>View GitHub</span>
          </a>
        </div>
      </div>
    </div>
  );
}
