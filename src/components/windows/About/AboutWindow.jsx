import { ABOUT } from "../../../data/about";
import { profilePhoto } from "../../../data/assets";

function Feature({ icon: Icon, title, text }) {
  return (
    <div className="flex gap-3">
      <Icon className="w-6 h-6 text-blue-600 flex-shrink-0" />
      <div>
        <h3 className="text-gray-800">{title}</h3>
        <p className="text-gray-600 text-sm">{text}</p>
      </div>
    </div>
  );
}

export default function AboutWindow() {
  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="text-blue-600 mb-6">About Me</h1>

      <div className="space-y-6">
        <div className="flex gap-4 items-start">
          <div>
            <img src={profilePhoto} className="w-80 rounded-lg object-contain flex-none" />
          </div>
          <div>
            <h2 className="text-gray-800 mb-2">{ABOUT.heading}</h2>
            <p className="text-gray-700">{ABOUT.intro}</p>
          </div>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-gray-800 mb-4">What I Do</h2>
          <div className="grid grid-cols-2 gap-4">
            {ABOUT.features.map((feature) => (
              <Feature key={feature.title} {...feature} />
            ))}
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
          <p className="text-gray-700 italic">{ABOUT.quote}</p>
        </div>
      </div>
    </div>
  );
}
