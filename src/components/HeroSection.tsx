import { motion } from "framer-motion";
import { Download, Mail, Linkedin, Github } from "lucide-react";

const HeroSection = () => (
  <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
    {/* Background gradient accent (subtle) */}
    <div className="absolute inset-0 z-0" style={{
      background: "linear-gradient(135deg, rgba(139, 92, 246, 0.05) 0%, rgba(0, 195, 255, 0.05) 100%)",
      pointerEvents: "none",
    }} />

    {/* Main content - 2 column grid */}
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center relative z-10 py-20">
      {/* Left Side - Profile Image & Social Icons */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="flex flex-col items-center justify-center order-2 md:order-1"
      >
        {/* Profile Image with gradient border and glow */}
        <div className="relative mb-8 group animate-float">
          {/* Image container with premium styling */}
          <div
            className="relative w-64 h-64 md:w-64 md:h-64 rounded-full overflow-hidden transition-all duration-300 group-hover:scale-105"
            style={{
              border: "3px solid transparent",
              background: "linear-gradient(#0b0f14, #0b0f14) padding-box, linear-gradient(135deg, #8b5cf6, #00c3ff) border-box",
              boxShadow: "0 0 40px rgba(139, 92, 246, 0.5)",
            }}
          >
            <img
              src="/images/post.jpeg"
              alt="Profile - Hemanth Kattamuri"
              className="w-full h-full object-cover"
              style={{
                objectFit: "cover",
                objectPosition: "center top",
              }}
            />
          </div>
        </div>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex gap-6 justify-center"
        >
          <motion.a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full transition-all duration-300 hover:shadow-lg"
            style={{
              background: "rgba(139, 92, 246, 0.1)",
              border: "1px solid rgba(139, 92, 246, 0.2)",
            }}
            whileHover={{
              scale: 1.15,
              background: "rgba(139, 92, 246, 0.2)",
              boxShadow: "0 0 20px rgba(139, 92, 246, 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Linkedin size={24} style={{ color: "#8b5cf6" }} />
          </motion.a>
          <motion.a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full transition-all duration-300 hover:shadow-lg"
            style={{
              background: "rgba(139, 92, 246, 0.1)",
              border: "1px solid rgba(139, 92, 246, 0.2)",
            }}
            whileHover={{
              scale: 1.15,
              background: "rgba(139, 92, 246, 0.2)",
              boxShadow: "0 0 20px rgba(139, 92, 246, 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Github size={24} style={{ color: "#8b5cf6" }} />
          </motion.a>
          <motion.a
            href="mailto:your@email.com"
            className="p-3 rounded-full transition-all duration-300 hover:shadow-lg"
            style={{
              background: "rgba(139, 92, 246, 0.1)",
              border: "1px solid rgba(139, 92, 246, 0.2)",
            }}
            whileHover={{
              scale: 1.15,
              background: "rgba(139, 92, 246, 0.2)",
              boxShadow: "0 0 20px rgba(139, 92, 246, 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Mail size={24} style={{ color: "#8b5cf6" }} />
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Right Side - Text & CTA */}
      <motion.div
        initial={{ opacity: 0, x: 40, y: 20 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex flex-col justify-center order-1 md:order-2"
      >
        {/* Subtitle */}
        <motion.p
          className="text-sm font-semibold mb-4 tracking-widest uppercase"
          style={{ color: "#8b5cf6" }}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Java Full Stack Developer
        </motion.p>

        {/* Name - Large and Bold */}
        <motion.h1
          className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
        >
          <span className="text-foreground">Kattamuri</span>
          <br />
          <span className="gradient-text">Hemanth</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-lg"
          style={{ lineHeight: "1.8" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          An AIML student and passionate Java Full Stack Developer dedicated to building scalable,
          user-centric web applications. With hands-on internship experience and a drive for innovation,
          I deliver robust solutions that matter.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex gap-4 flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          {/* Download CV Button - Outline with glow */}
          <motion.a
            href="#"
            className="flex items-center gap-2 px-8 py-3 rounded-lg font-semibold border-2 transition-all relative group overflow-hidden"
            style={{
              borderColor: "#8b5cf6",
              color: "#8b5cf6",
              background: "transparent",
            }}
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{ scale: 0.98 }}
          >
            {/* Hover background */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <Download size={18} className="relative z-10" /> 
            <span className="relative z-10">Download CV</span>
          </motion.a>

          {/* Contact Button - Gradient filled */}
          <motion.a
            href="#contact"
            className="flex items-center gap-2 px-8 py-3 rounded-lg font-semibold text-white transition-all shadow-lg group relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg, #8b5cf6, #7c3aed)",
            }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 30px rgba(139, 92, 246, 0.4)",
            }}
            whileTap={{ scale: 0.98 }}
          >
            {/* Extra glow on hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{
              background: "linear-gradient(135deg, #a78bfa, #8b5cf6)",
            }} />
            <Mail size={18} className="relative z-10" />
            <span className="relative z-10">Get in Touch</span>
          </motion.a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="mt-16 flex flex-col items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <p className="text-xs text-muted-foreground mb-3 uppercase tracking-widest">Scroll to explore</p>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <svg className="w-5 h-5 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
