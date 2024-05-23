export default function Projects() {
  const projects = [
    {
      title: "Project One",
      description:
        "A brief description of Project One. This project involves developing a full-stack application using React and Node.js.",
      link: "https://github.com/username/project-one",
    },
    {
      title: "Project Two",
      description:
        "A brief description of Project Two. This project is a mobile app developed using React Native.",
      link: "https://github.com/username/project-two",
    },
    {
      title: "Project Three",
      description:
        "A brief description of Project Three. This project is a machine learning model built with Python and TensorFlow.",
      link: "https://github.com/username/project-three",
    },
  ];

  return (
    // <section id="projects">
    //   {/* Projects content */}
    // </section>
    <section id="projects" className="bg-gray-100  max-w-7xl mx-auto py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-center mb-10">Projects</h1>
        <div className="grid gap-8 lg:grid-cols-3 sm:grid-cols-1">
          {projects.map((project, index) => (
            <div key={index} className="bg-white  p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-4">{project.title}</h2>
              <div className="">
                <img src="/images/developer.jpg" alt="" className="" />
                <p className="text-gray-700 mb-4">{project.description}</p>
              </div>
              <a
                href={project.link}
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
