import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = navItems.map((n) => n.href.slice(1));
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 150) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMobileMenu = () => setMobileOpen(false);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "glass-card shadow-lg border-b" : "border-b border-transparent"
        }`}
        style={{
          background: scrolled ? "rgba(10, 15, 20, 0.8)" : "transparent",
          borderColor: scrolled ? "rgba(139, 92, 246, 0.1)" : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
        }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <motion.a 
            href="#home" 
            className="text-3xl font-bold flex-shrink-0 relative group" 
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            style={{ fontFamily: "'Great Vibes', cursive", color: "#8b5cf6" }}
          >
            Hemu
            <span 
              className="absolute inset-0 rounded-full group-hover:opacity-100 opacity-0" 
              style={{
                background: "rgba(139, 92, 246, 0.1)",
                filter: "blur(20px)",
                zIndex: -1,
                transition: "opacity 0.3s",
              }} 
            />
          </motion.a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = active === item.href.slice(1);
              return (
                <motion.a
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-medium transition-all relative py-2 ${
                    isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                  }`}
                  style={{
                    color: isActive ? "#8b5cf6" : "inherit",
                  }}
                  whileHover={{ y: -2 }}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full"
                      style={{ background: "#8b5cf6" }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </motion.a>
              );
            })}
          </div>

          {/* Mobile toggle */}
          <motion.button
            className="md:hidden text-foreground p-2 hover:bg-white/5 rounded-lg transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={closeMobileMenu}
              className="fixed inset-0 top-16 z-40 bg-black/50 backdrop-blur-sm"
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ opacity: 0, x: 300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 300 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="fixed right-0 top-16 h-[calc(100vh-4rem)] w-full max-w-xs z-40 glass-card border-l"
              style={{
                background: "rgba(10, 15, 20, 0.95)",
                backdropFilter: "blur(20px)",
                borderColor: "rgba(139, 92, 246, 0.1)",
              }}
            >
              <div className="p-8 flex flex-col h-full">
                <div className="flex flex-col gap-3 mt-4">
                  {navItems.map((item, idx) => {
                    const isActive = active === item.href.slice(1);
                    return (
                      <motion.a
                        key={item.href}
                        href={item.href}
                        onClick={closeMobileMenu}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.08 }}
                        className={`px-6 py-3 rounded-lg font-semibold text-center transition-all ${
                          isActive
                            ? "text-white"
                            : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                        }`}
                        style={{
                          background: isActive ? "linear-gradient(135deg, #8b5cf6, #7c3aed)" : "transparent",
                          color: isActive ? "white" : "inherit",
                        }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {item.label}
                      </motion.a>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
