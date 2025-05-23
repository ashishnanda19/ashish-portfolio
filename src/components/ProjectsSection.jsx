import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "University Management System",
    description: "This project is a University Management System with three user panels: Admin, Faculty, and Student. The system is built using PHP, HTML, CSS, JavaScript, and MySQL.",
    image: "/projects/Project4.jpg",
    tags: ["PHP", "MySQL", "JavaScript", "HTML", "CSS"],
    demoUrl: "",
    githubUrl: "https://github.com/ashishnanda19/ums-project",
  },
  {
    id: 2,
    title: "Personal Portfolio",
    description: "A responsive portfolio built with React, Tailwind, and Vite, featuring Home, About, Skills, Project mode and a contact section. Deployed on Vercel.",
    image: "/projects/Project3.jpg",
    tags: ["Vite", "React", "Tailwind CSS", "HTML", "CSS"],
    demoUrl: "https://ashish-nanda.vercel.app/",
    githubUrl: "https://github.com/ashishnanda19/ashish-portfolio",
  },
  {
    id: 3,
    title: "SpeedZ - Test Your Typing Speed",
    description: "A simple and modern typing speed test application built with HTML, CSS, and JavaScript. Test and improve your typing speed with different modes and time limits.",
    image: "/projects/Project1.png",
    tags: ["Javascript", "HTML", "CSS"],
    demoUrl: "https://speed-z.vercel.app/",
    githubUrl: "https://github.com/ashishnanda19/SpeedZ",
  },
  {
    id: 4,
    title: "YouTube Clone",
    description:
      "This is a simple frontend clone of YouTube built using only HTML and CSS. The project replicates the basic layout and design of YouTube's homepage, focusing on responsiveness and styling.",
    image: "/projects/Project2.png",
    tags: ["HTML", "CSS"],
    demoUrl: "https://ytclonefrontendweb.vercel.app/",
    githubUrl: "https://github.com/ashishnanda19/YouTube-Clone",
  },
  
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/ashishnanda19"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
