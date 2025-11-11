import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { 
  FileCode, 
  Terminal, 
  Database, 
  Server, 
  GitBranch, 
  Container, 
  Palette, 
  Code,
  Type,
  Layers,
  Boxes
} from "lucide-react";

const HTMLIcon = () => (
  <img 
    src="https://img.icons8.com/?size=100&id=20909&format=png&color=000000" 
    alt="HTML/CSS"
    className="w-14 h-14"
  />
);

const JavaScriptIcon = () => (
  <img 
    src="https://img.icons8.com/?size=100&id=108784&format=png&color=000000" 
    alt="JavaScript"
    className="w-14 h-14"
  />
);

const ReactIcon = () => (
  <img 
    src="https://img.icons8.com/?size=100&id=asWSSTBrDlTW&format=png&color=000000" 
    alt="React"
    className="w-14 h-14"
  />
);

// const TypeScriptIcon = () => (
//   <img 
//     src="https://img.icons8.com/?size=100&id=uJM6fQYqDaZK&format=png&color=000000" 
//     alt="TypeScript"
//     className="w-14 h-14"
//   />
// );

const TailwindIcon = () => (
  <img 
    src="https://img.icons8.com/?size=100&id=x7XMNGh2vdqA&format=png&color=000000" 
    alt="Tailwind CSS"
    className="w-14 h-14"
  />
);

// const NextIcon = () => (
//   <img 
//     src="https://www.vectorlogo.zone/logos/nextjs/nextjs-icon.svg" 
//     alt="Next.js"
//     className="w-14 h-14"
//   />
// );

const NodeIcon = () => (
  <img 
    src="https://img.icons8.com/?size=100&id=hsPbhkOH4FMe&format=png&color=000000" 
    alt="Node.js"
    className="w-14 h-14"
  />
);

const ExpressIcon = () => (
  <img 
    src="https://img.icons8.com/?size=100&id=kg46nzoJrmTR&format=png&color=FFFFFF" 
    alt="Express"
    className="w-14 h-14"
  />
);

const MongoDBIcon = () => (
  <img 
    src="https://img.icons8.com/?size=100&id=B403GJErHZpx&format=png&color=000000" 
    alt="MongoDB"
    className="w-14 h-14"
  />
);

// const RedisIcon = () => (
//   <img 
//     src="https://img.icons8.com/?size=100&id=38561&format=png&color=000000" 
//     alt="Redis"
//     className="w-14 h-14"
//   />
// );


const MySQLIcon = () => (
  <img 
    src="https://img.icons8.com/?size=100&id=rgPSE6nAB766&format=png&color=000000" 
    alt="MySQL"
    className="w-14 h-14"
  />
);

const GitHubIcon = () => (
  <img 
    src="https://img.icons8.com/?size=100&id=AZOZNnY73haj&format=png&color=000000" 
    alt="GitHub"
    className="w-14 h-14"
  />
);

const GitIcon = () => (
  <img 
    src="https://img.icons8.com/?size=100&id=20906&format=png&color=000000" 
    alt="Git"
    className="w-14 h-14"
  />
);

const DockerIcon = () => (
  <img 
    src="https://img.icons8.com/?size=100&id=cdYUlRaag9G9&format=png&color=000000" 
    alt="Docker"
    className="w-14 h-14"
  />
);

const VSCodeIcon = () => (
  <img 
    src="https://img.icons8.com/?size=100&id=0OQR1FYCuA9f&format=png&color=000000" 
    alt="VS Code"
    className="w-14 h-14"
  />
);

const ViteIcon = () => (
  <img 
    src="https://img.icons8.com/?size=100&id=YO3YqSaTOu5K&format=png&color=000000" 
    alt="Vite"
    className="w-14 h-14"
  />
);

const VercelIcon = () => (
  <svg 
    viewBox="0 0 16 16" 
    className="w-14 h-14 text-white"
  >
    <path 
      fillRule="evenodd" 
      clipRule="evenodd" 
      d="M8 1L16 15H0L8 1Z" 
      fill="currentColor"
    />
  </svg>
);

const AWSIcon = () => (
  <img 
    src="https://img.icons8.com/?size=100&id=33039&format=png&color=000000" 
    alt="AWS"
    className="w-14 h-14"
  />
);

const PostmanIcon = () => (
  <img 
    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" 
    alt="Postman"
    className="w-14 h-14"
  />
);

// ML & AI Icons
const NumPyIcon = () => (
  <img 
    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" 
    alt="NumPy"
    className="w-14 h-14"
  />
);

const PandasIcon = () => (
  <img 
    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" 
    alt="Pandas"
    className="w-14 h-14"
  />
);

const MatplotlibIcon = () => (
  <img 
    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg" 
    alt="Matplotlib"
    className="w-14 h-14"
  />
);

const SeabornIcon = () => (
  <img 
    src="https://logo.svgcdn.com/logos/seaborn-icon.svg" 
    alt="Seaborn"
    className="w-14 h-14"
  />
);

const ScikitLearnIcon = () => (
  <img 
    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg"
    alt="Scikit-learn"
    className="w-14 h-14"
  />
);

const TensorFlowIcon = () => (
  <img 
    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" 
    alt="TensorFlow"
    className="w-14 h-14"
  />
);

const KerasIcon = () => (
  <img 
    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/keras/keras-original.svg" 
    alt="Keras"
    className="w-14 h-14"
  />
);

const AnacondaIcon = () => (
  <img 
    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/anaconda/anaconda-original.svg" 
    alt="Anaconda"
    className="w-14 h-14"
  />
);

const GoogleColabIcon = () => (
  <img 
    src="https://img.icons8.com/color/256/google-colab.png" 
    alt="Google Colab"
    className="w-14 h-14"
  />
);



const skills = {
  frontend: [
    { name: "HTML", icon: <HTMLIcon /> },
    { name: "JavaScript", icon: <JavaScriptIcon /> },
    { name: "React", icon: <ReactIcon /> },
    // { name: "TypeScript", icon: <TypeScriptIcon /> },
    { name: "Tailwind CSS", icon: <TailwindIcon /> },
    // { name: "Next.js", icon: <NextIcon /> },
    { name: "Vite", icon: <ViteIcon /> },
  ],
  backend: [
    { name: "Node.js", icon: <NodeIcon /> },
    { name: "Express", icon: <ExpressIcon /> },
    { name: "MongoDB", icon: <MongoDBIcon /> },
    // { name: "Redis", icon: <RedisIcon /> },
    { name: "MySQL", icon: <MySQLIcon /> },
  ],
  tools: [
    { name: "GitHub", icon: <GitHubIcon /> },
    { name: "Docker", icon: <DockerIcon /> },
    { name: "Git", icon: <GitIcon /> },
    { name: "VSCode", icon: <VSCodeIcon /> },
    { name: "Vercel", icon: <VercelIcon /> },
    { name: "AWS", icon: <AWSIcon /> },
    { name: "Postman", icon: <PostmanIcon /> },
  ],
  "ml-ai": [
    { name: "NumPy", icon: <NumPyIcon /> },
    { name: "Pandas", icon: <PandasIcon /> },
    { name: "Matplotlib", icon: <MatplotlibIcon /> },
    { name: "Seaborn", icon: <SeabornIcon /> },
    { name: "Scikit-learn", icon: <ScikitLearnIcon /> },
    { name: "TensorFlow", icon: <TensorFlowIcon /> },
    { name: "Keras", icon: <KerasIcon /> },
    { name: "Anaconda", icon: <AnacondaIcon /> },
    { name: "Google Colab", icon: <GoogleColabIcon /> },
  ],
};

const categories = ["all", "frontend", "backend", "tools", "ml-ai"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("skills");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const getCategoryColor = (category) => {
    switch (category) {
      case "frontend":
        return "bg-[hsla(222,47%,8%,0.3)]";
      case "backend":
        return "bg-[hsla(222,47%,8%,0.3)]";
      case "tools":
        return "bg-[hsla(222,47%,8%,0.3)]";
      case "ml-ai":
        return "bg-[hsla(222,47%,8%,0.3)]";
      default:
        return "bg-[hsla(222,47%,8%,0.3)]";
    }
  };

  const allSkills = [
    ...skills.frontend,
    ...skills.backend,
    ...skills.tools,
    ...skills["ml-ai"]
  ];

  return (
    <section id="skills" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl relative">
        <h2 className={cn(
          "text-[2.25rem] font-bold mb-16 text-center relative text-white transition-all duration-700 transform",
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        )}>
          My <span className="text-primary relative inline-block">
            Skills
          </span>
        </h2>

        <div className={cn(
          "flex flex-wrap justify-center gap-4 mb-16 px-4 transition-all duration-700 transform",
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        )}>
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-8 md:px-10 py-3 md:py-4 text-base md:text-lg rounded-full transition-all duration-300 capitalize relative overflow-hidden group backdrop-blur-sm text-white",
                activeCategory === category
                  ? "bg-primary/80 text-primary-foreground shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 hover:scale-105 hover:bg-primary/90"
                  : "bg-secondary/30 text-foreground hover:bg-secondary/40 hover:shadow-md hover:scale-105 hover:bg-secondary/50"
              )}
            >
              <span className="relative z-10">{category === "ml-ai" ? "ML & AI" : category}</span>
              <span className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          ))}
        </div>

        <div className={cn(
          "gap-8 md:gap-12 max-w-6xl mx-auto px-4 transition-all duration-700 transform",
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        )}>
          {activeCategory === "all" ? (
            <div className={cn(
              "backdrop-blur-sm",
              getCategoryColor("all"),
              "p-6 md:p-10 rounded-2xl shadow-xl card-hover relative overflow-hidden group border border-white/10 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 hover:scale-[1.02] hover:border-primary/30"
            )}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                {allSkills.map((skill, index) => (
                  <div
                    key={index}
                    className={cn(
                      "p-4 md:p-6 rounded-xl bg-[hsla(222,47%,8%,0.2)] hover:bg-[hsla(222,47%,8%,0.3)] transition-all duration-300 text-center transform hover:scale-105 hover:shadow-lg hover:shadow-primary/20 border border-white/10 backdrop-blur-sm group/skill hover:border-primary/30",
                      "animate-fadeIn",
                      `delay-${index * 50}`
                    )}
                  >
                    <div className="flex flex-col items-center gap-2 md:gap-3">
                      <span className="text-primary group-hover/skill:scale-110 transition-transform duration-300 group-hover/skill:rotate-12 group-hover/skill:text-white">{skill.icon}</span>
                      <span className="text-lg md:text-xl font-semibold text-white group-hover/skill:text-primary transition-colors duration-300">
                        {skill.name}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            Object.entries(skills).map(([category, categorySkills], categoryIndex) => {
              if (activeCategory !== category) return null;
              
              return (
                <div
                  key={category}
                  className={cn(
                    "backdrop-blur-sm",
                    getCategoryColor(category),
                    "p-6 md:p-10 rounded-2xl shadow-xl card-hover relative overflow-hidden group border border-white/10 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 hover:scale-[1.02] hover:border-primary/30",
                    "animate-fadeIn",
                    `delay-${categoryIndex * 100}`
                  )}
                >
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                    {categorySkills.map((skill, index) => (
                      <div
                        key={index}
                        className={cn(
                          "p-4 md:p-6 rounded-xl bg-[hsla(222,47%,8%,0.2)] hover:bg-[hsla(222,47%,8%,0.3)] transition-all duration-300 text-center transform hover:scale-105 hover:shadow-lg hover:shadow-primary/20 border border-white/10 backdrop-blur-sm group/skill hover:border-primary/30",
                          "animate-fadeIn",
                          `delay-${(categoryIndex * 100) + (index * 50)}`
                        )}
                      >
                        <div className="flex flex-col items-center gap-2 md:gap-3">
                          <span className="text-primary group-hover/skill:scale-110 transition-transform duration-300 group-hover/skill:rotate-12 group-hover/skill:text-white">{skill.icon}</span>
                          <span className="text-lg md:text-xl font-semibold text-white group-hover/skill:text-primary transition-colors duration-300">
                            {skill.name}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
};
