import AnimatedSection from "./AnimatedSection";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Foodie Hub",
    description:
      "A responsive food ordering UI with an interactive menu, cart functionality, and smooth animations for a delightful user experience.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/hemanthkattamuri",
  },
  {
    title: "Bus Pass Management System",
    description:
      "Full-stack application to digitize bus pass applications, approvals, and renewals with role-based access for students and admins.",
    tech: ["React", "Spring Boot", "PostgreSQL"],
    github: "https://github.com/hemanthkattamuri",
  },
  {
    title: "SkillPath AI Learning Platform",
    description:
      "AI-powered adaptive learning platform that personalizes course recommendations based on user progress and goals.",
    tech: ["React", "Tailwind CSS", "Supabase"],
    github: "https://github.com/hemanthkattamuri",
  },
];

const ProjectsSection = () => (
  <section id="projects" className="relative">
    <div className="section-container">
      <AnimatedSection>
        <p className="mono-text text-primary text-sm mb-2 tracking-widest uppercase">Portfolio</p>
        <h2 className="section-title">Featured Projects</h2>
      </AnimatedSection>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {projects.map((project, i) => (
          <AnimatedSection key={project.title} delay={i * 0.1}>
            <div className="glass-card rounded-xl p-6 h-full flex flex-col group hover:border-primary/30 transition-all hover:shadow-[var(--shadow-glow)] hover:-translate-y-1 duration-300">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github size={18} />
                </a>
              </div>
              <p className="text-sm text-muted-foreground mb-6 flex-1">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="mono-text text-xs px-2 py-1 rounded bg-primary/10 text-primary">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
