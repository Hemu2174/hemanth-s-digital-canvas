import { useState } from "react";
import AnimatedSection from "./AnimatedSection";
import { ExternalLink, Github, Folder } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Foodie Hub",
    description:
      "A responsive food ordering UI with an interactive menu, cart functionality, and smooth animations for a delightful user experience.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/hemanthkattamuri",
    live: "#",
    emoji: "🍔",
  },
  {
    title: "Bus Pass Management",
    description:
      "Full-stack application to digitize bus pass applications, approvals, and renewals with role-based access for students and admins.",
    tech: ["React", "Spring Boot", "PostgreSQL"],
    github: "https://github.com/hemanthkattamuri",
    live: "#",
    emoji: "🚌",
  },
  {
    title: "SkillPath AI",
    description:
      "AI-powered adaptive learning platform that personalizes course recommendations based on user progress and goals.",
    tech: ["React", "Tailwind CSS", "Supabase"],
    github: "https://github.com/hemanthkattamuri",
    live: "#",
    emoji: "🧠",
  },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <AnimatedSection delay={index * 0.15}>
      <motion.div
        className="relative rounded-2xl overflow-hidden cursor-pointer group"
        style={{
          background: "linear-gradient(145deg, hsl(var(--card)) 0%, hsl(var(--background)) 100%)",
          border: "1px solid hsl(var(--border))",
        }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        onTapStart={() => setIsHovered(true)}
        animate={{
          scale: isHovered ? 1.03 : 1,
          boxShadow: isHovered
            ? "0 20px 60px -15px rgba(255, 122, 77, 0.3), 0 0 40px -10px rgba(255, 122, 77, 0.15)"
            : "0 4px 20px -5px rgba(0,0,0,0.3)",
        }}
        transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        {/* Top bar accent */}
        <div className="h-1 w-full bg-gradient-to-r from-[#ff7a4d] via-[#ff9a6c] to-[#ff7a4d]" />

        {/* Card content */}
        <div className="p-6 pb-4">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <Folder className="text-[#ff7a4d]" size={28} strokeWidth={1.5} />
            <div className="flex gap-3">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-[#ff7a4d] transition-colors duration-300"
                onClick={(e) => e.stopPropagation()}
              >
                <Github size={20} />
              </a>
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-[#ff7a4d] transition-colors duration-300"
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink size={20} />
              </a>
            </div>
          </div>

          {/* Illustration area */}
          <div className="relative h-32 mb-6 flex items-center justify-center rounded-xl overflow-hidden"
            style={{ background: "linear-gradient(135deg, rgba(255,122,77,0.08) 0%, rgba(255,122,77,0.02) 100%)" }}
          >
            <motion.span
              className="text-6xl select-none"
              animate={{ scale: isHovered ? 1.2 : 1, rotate: isHovered ? 5 : 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              {project.emoji}
            </motion.span>

            {/* Decorative dots */}
            <div className="absolute top-3 right-3 grid grid-cols-3 gap-1 opacity-30">
              {Array.from({ length: 9 }).map((_, i) => (
                <div key={i} className="w-1 h-1 rounded-full bg-[#ff7a4d]" />
              ))}
            </div>
          </div>

          {/* Title */}
          <motion.h3
            className="font-bold text-lg text-foreground mb-2"
            animate={{ color: isHovered ? "#ff7a4d" : "" }}
            transition={{ duration: 0.3 }}
          >
            {project.title}
          </motion.h3>

          {/* Description – revealed on hover */}
          <motion.div
            className="overflow-hidden"
            animate={{ height: isHovered ? "auto" : 0, opacity: isHovered ? 1 : 0 }}
            initial={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <motion.p
              className="text-sm text-muted-foreground leading-relaxed mb-4"
              animate={{ y: isHovered ? 0 : 12 }}
              transition={{ duration: 0.35, delay: 0.05 }}
            >
              {project.description}
            </motion.p>
          </motion.div>

          {/* Tech stack */}
          <motion.div
            className="flex flex-wrap gap-2 mt-2"
            animate={{ opacity: isHovered ? 1 : 0.6 }}
            transition={{ duration: 0.3 }}
          >
            {project.tech.map((t) => (
              <motion.span
                key={t}
                className="mono-text text-xs px-3 py-1 rounded-full border border-[#ff7a4d]/20 text-[#ff7a4d]"
                style={{ background: "rgba(255,122,77,0.08)" }}
                animate={{
                  borderColor: isHovered ? "rgba(255,122,77,0.5)" : "rgba(255,122,77,0.2)",
                  background: isHovered ? "rgba(255,122,77,0.15)" : "rgba(255,122,77,0.08)",
                }}
                transition={{ duration: 0.3 }}
              >
                {t}
              </motion.span>
            ))}
          </motion.div>
        </div>

        {/* Hover overlay glow */}
        <motion.div
          className="absolute inset-0 pointer-events-none rounded-2xl"
          animate={{
            background: isHovered
              ? "linear-gradient(180deg, transparent 40%, rgba(255,122,77,0.06) 100%)"
              : "transparent",
          }}
          transition={{ duration: 0.4 }}
        />
      </motion.div>
    </AnimatedSection>
  );
};

const ProjectsSection = () => (
  <section id="projects" className="relative py-20">
    <div className="section-container">
      <AnimatedSection>
        <p className="mono-text text-[#ff7a4d] text-sm mb-2 tracking-widest uppercase text-center">
          Portfolio
        </p>
        <h2 className="section-title text-center">Featured Projects</h2>
        <p className="text-muted-foreground text-center max-w-lg mx-auto mt-3 text-sm">
          A selection of projects I've built — hover to explore details.
        </p>
      </AnimatedSection>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
