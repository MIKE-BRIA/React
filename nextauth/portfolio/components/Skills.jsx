export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-gradient-to-r from-blue-400 to-blue-600 max-w-7xl mx-auto py-10"
    >
      <div className="w-full md:w-3/4 mx-auto p-4 md:p-10 bg-slate-200 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-6">Skills</h1>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Front End</h2>
          <ul className="flex flex-wrap gap-4 mb-6">
            <li className="bg-blue-200 text-blue-700 p-2 rounded">HTML</li>
            <li className="bg-blue-200 text-blue-700 p-2 rounded">CSS</li>
            <li className="bg-blue-200 text-blue-700 p-2 rounded">
              Tailwind CSS
            </li>
            <li className="bg-blue-200 text-blue-700 p-2 rounded">
              JavaScript
            </li>
            <li className="bg-blue-200 text-blue-700 p-2 rounded">React</li>
          </ul>
          <h2 className="text-2xl font-semibold mb-4">Backend</h2>
          <ul className="flex flex-wrap gap-4 mb-6">
            <li className="bg-blue-200 text-blue-700 p-2 rounded">Node.js</li>
            <li className="bg-blue-200 text-blue-700 p-2 rounded">MongoDB</li>
            <li className="bg-blue-200 text-blue-700 p-2 rounded">
              Express.js
            </li>
            <li className="bg-blue-200 text-blue-700 p-2 rounded">Next.js</li>
          </ul>
          <h2 className="text-2xl font-semibold mb-4">Dev Tools</h2>
          <ul className="flex flex-wrap gap-4">
            <li className="bg-blue-200 text-blue-700 p-2 rounded">Postman</li>
            <li className="bg-blue-200 text-blue-700 p-2 rounded">Git</li>
            <li className="bg-blue-200 text-blue-700 p-2 rounded">GitHub</li>
            <li className="bg-blue-200 text-blue-700 p-2 rounded">VSCode</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
