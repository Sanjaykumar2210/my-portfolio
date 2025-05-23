import { Building2, Calendar, CheckCircle2 } from "lucide-react";

export const WorkExperience = () => {
  return (
    <section id="experience" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Work <span className="text-primary">Experience</span>
        </h2>

        <div className="space-y-8">
          {/* Experience Card */}
          <div className="gradient-border p-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
            <div className="flex flex-col md:flex-row gap-6">
              {/* Company Info */}
              <div className="md:w-1/3">
                <div className="flex items-center gap-3 mb-3">
                  <Building2 className="h-5 w-5 text-primary" />
                  <h3 className="text-xl font-semibold">Data Lancet</h3>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>2024 - Present</span>
                </div>
              </div>

              {/* Role & Responsibilities */}
              <div className="md:w-2/3">
                <h4 className="text-lg font-semibold mb-4">Software Developer</h4>
                <div className="space-y-3">
                  <div className="flex gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-1" />
                    <p className="text-muted-foreground">
                      Led the development of responsive web applications using Next.js, React, and Tailwind CSS, resulting in a 40% improvement in user engagement metrics.
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-1" />
                    <p className="text-muted-foreground">
                      Implemented modern authentication systems and API integrations, enhancing application security and functionality while reducing API response times by 30%.
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-1" />
                    <p className="text-muted-foreground">
                      Collaborated with cross-functional teams to optimize database queries and implement efficient data visualization solutions, improving dashboard load times by 50%.
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-1" />
                    <p className="text-muted-foreground">
                      Mentored junior developers and contributed to code reviews, leading to a 25% reduction in bug reports and improved team code quality standards.
                    </p>
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="mt-6">
                  <div className="flex flex-wrap gap-2">
                    {['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL', 'Prisma'].map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 