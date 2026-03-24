import { motion } from "framer-motion";
import { Download, Mail, Linkedin, Github } from "lucide-react";

const HeroSection = () => (
  <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-20">
    {/* Left Side - Name & Photo Area */}
    <div className="absolute left-0 top-0 w-full md:w-1/2 h-full md:relative" style={{ background: "linear-gradient(135deg, hsl(165 80% 48%) 0%, hsl(165 80% 45%) 100%)" }}>
      <div className="h-full flex flex-col items-center justify-center p-8 md:p-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center md:text-left"
        >
          {/* Name in script style */}
          <h1 className="text-5xl md:text-6xl font-bold mb-12 text-white" style={{ fontFamily: "'Great Vibes', cursive" }}>
            Hemanth
          </h1>

          {/* Photo placeholder - User adds their own */}
          <div className="relative w-64 h-64 md:w-72 md:h-72 mx-auto md:mx-0 rounded-full overflow-hidden border-4 border-white shadow-2xl"
            style={{ background: "rgba(255, 255, 255, 0.1)" }}
          >
            <img
              src="/path-to-your-photo.jpg"
              alt="Profile"
              className="w-full h-full object-cover"
              style={{ display: "none" }}
            />
            <div className="w-full h-full flex items-center justify-center text-white text-xl font-semibold">
              Add Your Photo
            </div>
          </div>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex gap-6 justify-center md:justify-start mt-12"
          >
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition">
              <Linkedin size={32} color="white" />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition">
              <Github size={32} color="white" />
            </a>
            <a href="mailto:your@email.com" className="hover:scale-110 transition">
              <Mail size={32} color="white" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>

    {/* Right Side - Info */}
    <div className="w-full md:w-1/2 p-8 md:p-12 mt-96 md:mt-0 md:bg-background relative z-10">
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <p className="text-muted-foreground mb-2" style={{ color: "hsl(165 80% 48%)" }}>
          Java Full Stack Developer
        </p>
        
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
          Kattamuri
          <br />
          <span style={{ color: "hsl(165 80% 48%)" }}>Hemanth</span>
        </h2>

        <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-md">
          An AIML student and passionate Java Full Stack Developer dedicated to building scalable, 
          user-centric web applications. With hands-on internship experience and a drive for innovation, 
          I deliver robust solutions.
        </p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex gap-4 flex-wrap"
        >
          <a
            href="#"
            className="flex items-center gap-2 px-8 py-3 rounded-full font-semibold border-2 transition-all hover:opacity-80"
            style={{
              borderColor: "hsl(165 80% 48%)",
              color: "hsl(165 80% 48%)",
              background: "transparent"
            }}
          >
            <Download size={18} /> Download CV
          </a>
          <a
            href="#contact"
            className="flex items-center gap-2 px-8 py-3 rounded-full font-semibold text-white transition-all hover:opacity-90"
            style={{ background: "linear-gradient(135deg, hsl(165 80% 48%), hsl(165 80% 55%))" }}
          >
            <Mail size={18} /> Contact
          </a>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
