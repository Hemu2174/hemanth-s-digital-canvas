import { motion } from "framer-motion";
import { ArrowDown, FolderOpen, Mail } from "lucide-react";

const HeroSection = () => (
  <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
    {/* Background effects */}
    <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
    <div className="absolute top-20 right-20 w-72 h-72 rounded-full bg-primary/5 blur-3xl animate-float" />
    <div className="absolute bottom-20 left-20 w-96 h-96 rounded-full bg-accent/5 blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />

    <div className="section-container text-center relative z-10">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mono-text text-primary text-sm mb-4 tracking-widest uppercase"
      >
        Hello, I'm
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4"
      >
        <span className="gradient-text">Kattamuri</span>{" "}
        <span className="text-foreground">Hemanth</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="text-lg md:text-xl text-muted-foreground mb-2"
      >
        Java Full Stack Developer &nbsp;|&nbsp; AIML Student
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="text-muted-foreground max-w-lg mx-auto mb-10"
      >
        Building scalable web apps &amp; intelligent solutions
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
        className="flex gap-4 justify-center flex-wrap"
      >
        <a
          href="#projects"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
        >
          <FolderOpen size={18} /> View Projects
        </a>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-primary text-primary font-semibold hover:bg-primary/10 transition-colors"
        >
          <Mail size={18} /> Contact Me
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
          <ArrowDown size={24} className="animate-bounce" />
        </a>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
