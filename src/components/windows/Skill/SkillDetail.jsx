import { Award, Briefcase, Calendar, FolderOpen } from "lucide-react";

const LEVEL_STYLES = {
  Expert: "bg-green-100 text-green-800 border-green-300",
  Advanced: "bg-blue-100 text-blue-800 border-blue-300",
  Intermediate: "bg-yellow-100 text-yellow-800 border-yellow-300",
};
const DEFAULT_LEVEL_STYLE = "bg-gray-100 text-gray-800 border-gray-300";

const PROGRESS_WIDTH = { Expert: "95%", Advanced: "80%" };
const DEFAULT_PROGRESS_WIDTH = "60%";

function CardHeader({ icon: Icon, iconClass = "text-gray-600", children }) {
  return (
    <div className="flex items-center gap-2 mb-3">
      <Icon className={`w-5 h-5 ${iconClass}`} />
      <h2 className="text-gray-800">{children}</h2>
    </div>
  );
}

export default function SkillDetail({ data: skill }) {
  if (!skill) return <div className="p-8">Skill not found</div>;

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg border-2 border-blue-200">
          <h1 className="text-blue-600 mb-2">{skill.title}</h1>
          <p className="text-gray-600">{skill.category}</p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div
            className={`p-4 rounded-lg border-2 ${LEVEL_STYLES[skill.level] ?? DEFAULT_LEVEL_STYLE}`}
          >
            <div className="flex items-center gap-2 mb-2">
              <Award className="w-5 h-5" />
              <h3 className="text-gray-800">Proficiency Level</h3>
            </div>
            <p className="text-2xl">{skill.level}</p>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg border-2 border-gray-200">
            <div className="flex items-center gap-2 mb-2">
              <Calendar className="w-5 h-5 text-gray-600" />
              <h3 className="text-gray-800">Experience</h3>
            </div>
            <p className="text-2xl text-gray-800">{skill.experience}</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg border-2 border-gray-200">
          <CardHeader icon={Briefcase}>About This Skill</CardHeader>
          <p className="text-gray-700 leading-relaxed">{skill.description}</p>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-200">
          <CardHeader icon={FolderOpen} iconClass="text-blue-600">
            Used In Projects
          </CardHeader>
          <div className="flex flex-wrap gap-2">
            {skill.projects.map((project) => (
              <span
                key={project}
                className="bg-white border border-blue-300 text-blue-800 px-3 py-1 rounded"
              >
                {project}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg border-2 border-gray-200">
          <h3 className="text-gray-800 mb-2 text-sm">Skill Progress</h3>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div
              className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full transition-all"
              style={{ width: PROGRESS_WIDTH[skill.level] ?? DEFAULT_PROGRESS_WIDTH }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
