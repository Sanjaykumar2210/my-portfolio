import { useState } from "react";
import { cn } from "@/lib/utils";
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaReact, 
  FaNodeJs, 
  FaGitAlt, 
  FaFigma,
  FaGithub
} from "react-icons/fa";
import { 
  SiTypescript, 
  SiTailwindcss, 
  SiNextdotjs, 
  SiExpress, 
  SiPostgresql,
  SiCloudflare,
} from "react-icons/si";
import { VscTerminalCmd, VscCode } from "react-icons/vsc";

const skills = [
  // Frontend
  { name: "HTML/CSS", level: 95, category: "frontend", icon: FaHtml5, color: "#E44D26" },
  { name: "JavaScript", level: 90, category: "frontend", icon: FaJs, color: "#F7DF1E" },
  { name: "Reactjs", level: 90, category: "frontend", icon: FaReact, color: "#61DAFB" },
  { name: "TypeScript", level: 85, category: "frontend", icon: SiTypescript, color: "#3178C6" },
  { name: "Tailwind CSS", level: 90, category: "frontend", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Next.js", level: 80, category: "frontend", icon: SiNextdotjs, color: "#000000" },

  // Backend
  { name: "Node.js", level: 80, category: "backend", icon: FaNodeJs, color: "#339933" },
  { name: "Express", level: 75, category: "backend", icon: SiExpress, color: "#000000" },
  { name: "PostgreSQL", level: 65, category: "backend", icon: SiPostgresql, color: "#4169E1" },

  // Tools
  { name: "Git/GitHub", level: 90, category: "tools", icon: FaGithub, color: "#181717" },
  { name: "Cloudflare", level: 70, category: "tools", icon: SiCloudflare, color: "#F38020" },
  { name: "Figma", level: 85, category: "tools", icon: FaFigma, color: "#F24E1E" },
  { name: "VS Code", level: 95, category: "tools", icon: VscCode, color: "#007ACC" },
  { name: "Cursor", level: 80, category: "tools", icon: VscTerminalCmd, color: "#000000" },
];

const categories = ["all", "frontend", "backend", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-forefround hover:bd-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => {
            const Icon = skill.icon;
            return (
              <div
                key={key}
                className="bg-card p-6 rounded-lg shadow-lg card-hover group relative overflow-hidden transition-all duration-300 hover:-translate-y-2"
              >
                <div className="text-left mb-4 flex items-center gap-3">
                  <div className="relative w-12 h-12 flex items-center justify-center transform transition-transform group-hover:scale-110 group-hover:rotate-12">
                    <Icon 
                      className="w-10 h-10 transition-all duration-300" 
                      style={{ color: skill.color }}
                    />
                  </div>
                  <h3 className="font-semibold text-lg">{skill.name}</h3>
                </div>
                <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                    style={{ 
                      width: skill.level + "%",
                      backgroundColor: skill.color 
                    }}
                  />
                </div>
                <div className="text-right mt-1">
                  <span className="text-sm text-muted-foreground">
                    {skill.level}%
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
