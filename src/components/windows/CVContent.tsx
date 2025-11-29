export function CVContent() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <div className="flex justify-end mb-4 items-center">
        <h1 className="text-blue-600 mb-2">For more detail:</h1>
        <a
          href="src\components\documents\Zeynep_Sude_Turan_CV.pdf"
          download
          className="ml-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition-colors flex items-center gap-2"
        >
          Download CV
        </a>
      </div>

      <div className="space-y-6">
        <div className="text-center border-b pb-4">
          <h1 className="text-blue-600 mb-2">Zeynep Sude Turan</h1>
          <p className="text-gray-600">Junior Developer</p>
          <p className="text-gray-500">zeynepsudeturan69@gmail.com</p>
        </div>

        <section>
          <h2 className="text-blue-600 mb-3">Professional Summary</h2>
          <p className="text-gray-700">
            As a student currently pursuing a degree in Computer Engineering, I have developed a solid foundation in both the theoretical and practical aspects of the field. My education has equipped me with a strong understanding of core engineering principles, computer science fundamentals, and software development practices. I am motivated by a desire to apply my technical skills to real-world problems, continuously expand my knowledge, and contribute effectively in dynamic and innovative professional environments.
          </p>
        </section>

        <section>
          <h2 className="text-blue-600 mb-3">Work Experience</h2>
          <div className="space-y-6"> {/* burayı space-y-6 yapabilirsin */}
            <div>
              <h3 className="text-gray-800 text-lg font-semibold">Data & Software Intern</h3> {/* text-lg veya text-xl ekle */}
              <p className="text-gray-600">Deka Technology | Aug 2025 </p>
              <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                <li>Gained hands-on experience in SQL database management, data cleaning, indexing, and performance optimization.</li>
                <li>Built data pipelines and performed web scraping to prepare datasets for LLM training.</li>
                <li>Applied Agile & Scrum methodologies: participated in daily stand-ups, sprint planning/review/retrospectives, and managed issues with Jira (Epics, Stories, Tasks, Bugs).</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-blue-600 mb-3">Education</h2>
          <div>
            <h3 className="text-gray-800">Bachelor of Science in Computer Engineering</h3>
            <p className="text-gray-600">Gebze Technical University | 2022 - current</p>
          </div>
        </section>

        <section>
          <h2 className="text-blue-600 mb-3">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {['C', 'C++', 'Python', 'Java', 'React', 'React Native', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Node.js', 'MS SQL', 'HTML', 'CSS', 'Docker', 'Git', 'Github', 'Jira', 'Postman'].map(skill => (
              <span key={skill} className="bg-blue-100 text-blue-800 px-3 py-1 rounded">
                {skill}
              </span>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
