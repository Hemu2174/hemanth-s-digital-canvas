import { useNavigate } from "react-router-dom";
import { ArrowLeft, ExternalLink, Github, Folder } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { projects } from "@/data/projects";
import AnimatedSection from "@/components/AnimatedSection";
import Navbar from "@/components/Navbar";

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
            ? "0 20px 60px -15px rgba(139, 92, 246, 0.3), 0 0 40px -10px rgba(139, 92, 246, 0.15)"
            : "0 4px 20px -5px rgba(0,0,0,0.3)",
        }}
        transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        {/* Top bar accent */}
        <div className="h-1 w-full" style={{ background: "linear-gradient(to right, #8b5cf6, #7c3aed, #8b5cf6)" }} />

        {/* Card content */}
        <div className="p-6 pb-4">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <Folder className="" size={28} strokeWidth={1.5} style={{ color: "#8b5cf6" }} />
            <div className="flex gap-3">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--muted-foreground)" }}
                className="hover:transition-colors duration-300"
                onMouseEnter={(e) => e.currentTarget.style.color = "#8b5cf6"}
                onMouseLeave={(e) => e.currentTarget.style.color = "var(--muted-foreground)"}
                onClick={(e) => e.stopPropagation()}
              >
                <Github size={20} />
              </a>
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--muted-foreground)" }}
                className="hover:transition-colors duration-300"
                onMouseEnter={(e) => e.currentTarget.style.color = "#8b5cf6"}
                onMouseLeave={(e) => e.currentTarget.style.color = "var(--muted-foreground)"}
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink size={20} />
              </a>
            </div>
          </div>

          {/* Illustration area */}
          <div className="relative h-32 mb-6 flex items-center justify-center rounded-xl overflow-hidden"
            style={{ background: "linear-gradient(135deg, rgba(139, 92, 246, 0.08) 0%, rgba(139, 92, 246, 0.02) 100%)" }}
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
                <div key={i} className="w-1 h-1 rounded-full" style={{ backgroundColor: "#8b5cf6" }} />
              ))}
            </div>
          </div>

          {/* Title */}
          <motion.h3
            className="font-bold text-lg text-foreground mb-2"
            animate={{ color: isHovered ? "#8b5cf6" : "" }}
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
                className="mono-text text-xs px-3 py-1 rounded-full"
                style={{ borderColor: "rgba(139, 92, 246, 0.3)", color: "#8b5cf6", background: "rgba(139, 92, 246, 0.08)" }}
                animate={{
                  borderColor: isHovered ? "rgba(139, 92, 246, 0.5)" : "rgba(139, 92, 246, 0.3)",
                  background: isHovered ? "rgba(139, 92, 246, 0.15)" : "rgba(139, 92, 246, 0.08)",
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
              ? "linear-gradient(180deg, transparent 40%, rgba(139, 92, 246, 0.06) 100%)"
              : "transparent",
          }}
          transition={{ duration: 0.4 }}
        />
      </motion.div>
    </AnimatedSection>
  );
};

const Projects = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Header with cyan background */}
      <div className="relative mt-16" style={{ background: "linear-gradient(135deg, rgba(139, 92, 246, 0.2) 0%, rgba(139, 92, 246, 0.05) 100%)" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-16">
          <motion.button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 mb-8 px-4 py-2 rounded-lg transition-all hover:bg-foreground/10"
            whileHover={{ x: -4 }}
          >
            <ArrowLeft size={20} style={{ color: "#8b5cf6" }} />
            <span className="text-foreground">Back to Portfolio</span>
          </motion.button>

          <AnimatedSection>
            <h1 className="text-5xl md:text-6xl font-bold mb-4" style={{ color: "#8b5cf6" }}>
              All Projects
            </h1>
            <p className="text-muted-foreground text-lg max-w-xl">
              A complete collection of projects I've built — explore details, view source code, and visit live demos.
            </p>
          </AnimatedSection>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
