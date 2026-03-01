import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "PixifyLab",
    description: "This is PixifyLab, an AI-powered image generation platform that allows users to train custom AI models with their own photos and generate personalized images in seconds.",
    image: "/projects/project1.png",
    tags: ["Next.js", "TypeScript", "Prisma", "TailwindCSS", "Replicate API"],
    demoUrl: "https://www.pixifylab.com/",
  },
  {
    id: 2,
    title: "NextGenAI",
    description:
      "Next Gen AI! This cutting-edge SaaS web application is here to revolutionize the future of artificial intelligence. Built onNext.js with seamless integration of the Gemini API.",
    image: "/projects/project2.png",
    tags: ["Next.js", "Clerk", "TailwindCSS", "Gemini API","Neon PostgreSQL"],
    demoUrl: "https://next-gen-ai-29hf.vercel.app/",
  },
  {
    id: 3,
    title: "StackScope",
    description:
      " StackScope is a web application that allows users to search for curated ai tools , libraries , roadmaps and resources built using next.js and shadcn ui ",
    image: "/projects/project3.png",
    tags: ["Next.js", "Shadcn UI", "TailwindCSS", "Lucide Icons", "Radix UI"],
    demoUrl: "https://stackscope.vercel.app/",
  },
  {
    id: 4,
    title: "PixifyStory",
    description:
      "AI-powered story and video generation platform built with React.js. Integrates Replicate API for content generation and Nano Banana API for video creation with asynchronous data workflows.",
    image: "/projects/project4.png",
    tags: ["React.js", "Replicate API", "Nano Banana API"],
    demoUrl: "https://pixifystory.com/", // update if needed
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
            href="https://github.com/Sanjaykumar2210"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
