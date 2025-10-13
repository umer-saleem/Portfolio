// src/app/components/Projects.tsx

const projects = [
  {
    title: "Citizen Science App for Water Quality Monitoring",
    highlightedWord: "AquaLens",
    thumbnailUrl: "/logos/water_quality_monitoring.png",
    description:
      "Developed a Flutter-based citizen science mobile application that utilizes smartphone cameras and remote sensing techniques to estimate water quality parameters such as turbidity and suspended particulate matter in real time.",
    tools: [
      "Flutter", "Dart", "Firebase", "Python", "OpenCV", "Google Cloud Platform", "Android",
    ],
    skills: [
      "Remote Sensing", "Image Processing", "Citizen Science", "Environmental Data Analysis",
      "Cloud Integration", "Data Visualization",
    ],
    githubUrl: "https://github.com/umer-saleem/Aqua-Lens",
    demoUrl: "https://drive.google.com/file/d/1rDdgh_wSOelChDrzyxw3HYc7-7qrE1L9/view?usp=sharing",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Header */}
        <h2 className="text-5xl font-bold text-center mb-16 text-gray-800">
          What I've Been Building
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-gray-300 shadow-md overflow-hidden 
                         hover:shadow-2xl hover:scale-[1.03] transform transition-all duration-300 ease-in-out"
            >
              <div className="p-6">
                {/* Thumbnail */}
                {project.thumbnailUrl && (
                  <a
                    href={project.demoUrl || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={project.thumbnailUrl}
                      alt={`${project.title} Thumbnail`}
                      className="w-full h-auto rounded-lg mb-4 shadow-md hover:shadow-lg transition-shadow"
                    />
                  </a>
                )}

                {/* Title */}
                <h3 className="text-2xl font-bold mb-3 text-gray-800">
                  {project.highlightedWord ? (
                    <>
                      <span className="italic text-black-600">{project.highlightedWord}</span>{" "}
                      - {project.title}
                    </>
                  ) : (
                    project.title
                  )}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-4 text-justify">
                  {project.description}
                </p>

                {/* Tools */}
                {project.tools.length > 0 && (
                  <>
                    <h4 className="font-semibold text-gray-800 mb-2">Tools</h4>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tools.map((tool, i) => (
                        <span
                          key={i}
                          className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </>
                )}

                {/* Skills */}
                {project.skills.length > 0 && (
                  <>
                    <h4 className="font-semibold text-gray-800 mb-2">Skills</h4>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </>
                )}

                {/* Links */}
                <div className="flex justify-between items-center">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-blue-600 hover:text-blue-800 font-semibold transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        className="w-8 h-8"
                      >
                        <path d="M10 16.5v-9l6 4.5-6 4.5z" />
                      </svg>
                      Watch Demo
                    </a>
                  )}
                  <a
                    href={project.githubUrl || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-800 hover:text-black font-semibold transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5"
                    >
                      <path d="M12 0C5.37 0 0 5.37 0 12a12.01 12.01 0 008.21 11.39c.6.11.82-.26.82-.58v-2.05c-3.34.73-4.04-1.61-4.04-1.61-.54-1.37-1.33-1.73-1.33-1.73-1.09-.75.08-.74.08-.74 1.2.08 1.83 1.24 1.83 1.24 1.07 1.84 2.8 1.31 3.48 1.01.11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.96 0-1.32.47-2.4 1.24-3.24-.12-.31-.54-1.53.12-3.18 0 0 1.01-.32 3.3 1.23A11.52 11.52 0 0112 6.8a11.5 11.5 0 012.99.4c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.87.12 3.18.77.84 1.24 1.92 1.24 3.24 0 4.63-2.8 5.66-5.48 5.96.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.83.58A12.01 12.01 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
