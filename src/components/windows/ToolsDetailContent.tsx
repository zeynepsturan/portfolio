import { Award, Briefcase, Calendar, FolderOpen } from 'lucide-react';

interface ToolsDetailContentProps {
  tools?: {
    title: string;
    category: string;
    level: string;
    experience: string;
    description: string;
    projects: string[];
  };
}

export function ToolsDetailContent({ tools }: ToolsDetailContentProps) {
  if (!tools) {
    return <div className="p-8">Skill not found</div>;
  }

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Expert':
        return 'bg-green-100 text-green-800 border-green-300';
      case 'Advanced':
        return 'bg-blue-100 text-blue-800 border-blue-300';
      case 'Intermediate':
        return 'bg-yellow-100 text-yellow-800 border-yellow-300';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-300';
    }
  };

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <div className="space-y-6">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg border-2 border-blue-200">
          <h1 className="text-blue-600 mb-2">{tools.title}</h1>
          <p className="text-gray-600">{tools.category}</p>
        </div>

        {/* Level and Experience */}
        <div className="grid grid-cols-2 gap-4">
          <div className={`p-4 rounded-lg border-2 ${getLevelColor(tools.level)}`}>
            <div className="flex items-center gap-2 mb-2">
              <Award className="w-5 h-5" />
              <h3 className="text-gray-800">Proficiency Level</h3>
            </div>
            <p className="text-2xl">{tools.level}</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg border-2 border-gray-200">
            <div className="flex items-center gap-2 mb-2">
              <Calendar className="w-5 h-5 text-gray-600" />
              <h3 className="text-gray-800">Experience</h3>
            </div>
            <p className="text-2xl text-gray-800">{tools.experience}</p>
          </div>
        </div>

        {/* Description */}
        <div className="bg-white p-6 rounded-lg border-2 border-gray-200">
          <div className="flex items-center gap-2 mb-3">
            <Briefcase className="w-5 h-5 text-gray-600" />
            <h2 className="text-gray-800">About This Skill</h2>
          </div>
          <p className="text-gray-700 leading-relaxed">{tools.description}</p>
        </div>

        {/* Projects */}
        <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-200">
          <div className="flex items-center gap-2 mb-3">
            <FolderOpen className="w-5 h-5 text-blue-600" />
            <h2 className="text-gray-800">Used In Projects</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {tools.projects.map((project, index) => (
              <span
                key={index}
                className="bg-white border border-blue-300 text-blue-800 px-3 py-1 rounded"
              >
                {project}
              </span>
            ))}
          </div>
        </div>

        {/* Progress Bar */}
        <div className="bg-gray-50 p-4 rounded-lg border-2 border-gray-200">
          <h3 className="text-gray-800 mb-2 text-sm">Skill Progress</h3>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div
              className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full transition-all"
              style={{
                width: tools.level === 'Expert' ? '95%' : tools.level === 'Advanced' ? '80%' : '60%'
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
