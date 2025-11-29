import { Code, Coffee, Lightbulb, Rocket } from 'lucide-react';

export function AboutContent() {
  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="text-blue-600 mb-6">About Me</h1>
      
      <div className="space-y-6">
        <div className="flex gap-4 items-start">
          <div>
            <img src='src\components\icons\me.jpg' className="w-80 rounded-lg object-contain"></img>
          </div>
          <div>
            <h2 className="text-gray-800 mb-2">Hello! I'm a Developer</h2>
            <p className="text-gray-700">
              I love building things from scratch and bringing ideas to life.
              I enjoy solving problems through clean and thoughtful code, and 
              turning complex ideas into practical, reliable solutions is what drives me as a developer.
            </p>
          </div>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-gray-800 mb-4">What I Do</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex gap-3">
              <Code className="w-6 h-6 text-blue-600 flex-shrink-0" />
              <div>
                <h3 className="text-gray-800">Clean Code</h3>
                <p className="text-gray-600 text-sm">Writing maintainable and scalable code</p>
              </div>
            </div>
            <div className="flex gap-3">
              <Rocket className="w-6 h-6 text-blue-600 flex-shrink-0" />
              <div>
                <h3 className="text-gray-800">Fast Performance</h3>
                <p className="text-gray-600 text-sm">Optimizing for speed and efficiency</p>
              </div>
            </div>
            <div className="flex gap-3">
              <Lightbulb className="w-6 h-6 text-blue-600 flex-shrink-0" />
              <div>
                <h3 className="text-gray-800">Creative Solutions</h3>
                <p className="text-gray-600 text-sm">Innovative approaches to problems</p>
              </div>
            </div>
            <div className="flex gap-3">
              <Coffee className="w-6 h-6 text-blue-600 flex-shrink-0" />
              <div>
                <h3 className="text-gray-800">Always Learning</h3>
                <p className="text-gray-600 text-sm">Staying updated with latest tech</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
          <p className="text-gray-700 italic">
            "The only way to do great work is to love what you do." - Steve Jobs
          </p>
        </div>
      </div>
    </div>
  );
}
