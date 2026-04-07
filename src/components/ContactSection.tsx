import { useState } from "react";
import AnimatedSection from "./AnimatedSection";
import { Mail, Phone, Github, Linkedin, Send } from "lucide-react";

const socials = [
  { icon: Github, label: "GitHub", href: "https://github.com/hemanthkattamuri" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/hemanthkattamuri" },
  { label: "LeetCode", href: "https://leetcode.com/hemanthkattamuri" },
  { label: "GeeksforGeeks", href: "https://geeksforgeeks.org/user/hemanthkattamuri" },
];

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Frontend only
    alert("Thanks for reaching out! (Frontend demo — no backend connected)");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="relative">
      <div className="section-container">
        <AnimatedSection>
          <p className="mono-text text-sm mb-2 tracking-widest uppercase" style={{ color: "#8b5cf6" }}>Get In Touch</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#8b5cf6" }}>Contact Me</h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12 mt-10">
          {/* Info */}
          <AnimatedSection delay={0.1}>
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                I'm actively looking for full-stack developer opportunities. Feel free to reach out
                — I'd love to connect!
              </p>

              <div className="space-y-4">
                <a
                  href="mailto:k.hemanth2174@gmail.com"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail size={18} /> k.hemanth2174@gmail.com
                </a>
                <a
                  href="tel:+919398368840"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Phone size={18} /> +91 9398368840
                </a>
              </div>

              <div className="flex gap-3 pt-2">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-lg glass-card text-sm text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Form */}
          <AnimatedSection delay={0.2}>
            <form onSubmit={handleSubmit} className="glass-card rounded-xl p-6 space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                style={{
                  background: "rgba(255, 255, 255, 0.05)",
                  border: "1px solid rgba(139, 92, 246, 0.3)",
                  backdropFilter: "blur(10px)",
                  color: "#ffffff",
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = "#8b5cf6";
                  e.currentTarget.style.boxShadow = "0 0 10px rgba(139, 92, 246, 0.5)";
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = "rgba(139, 92, 246, 0.3)";
                  e.currentTarget.style.boxShadow = "none";
                }}
                className="w-full px-[14px] py-[14px] rounded-[12px] text-foreground text-sm font-medium focus:outline-none transition-all duration-200"
              />
              <input
                type="email"
                placeholder="Your Email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                style={{
                  background: "rgba(255, 255, 255, 0.05)",
                  border: "1px solid rgba(139, 92, 246, 0.3)",
                  backdropFilter: "blur(10px)",
                  color: "#ffffff",
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = "#8b5cf6";
                  e.currentTarget.style.boxShadow = "0 0 10px rgba(139, 92, 246, 0.5)";
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = "rgba(139, 92, 246, 0.3)";
                  e.currentTarget.style.boxShadow = "none";
                }}
                className="w-full px-[14px] py-[14px] rounded-[12px] text-foreground text-sm font-medium focus:outline-none transition-all duration-200"
              />
              <textarea
                placeholder="Your Message"
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                style={{
                  background: "rgba(255, 255, 255, 0.05)",
                  border: "1px solid rgba(139, 92, 246, 0.3)",
                  backdropFilter: "blur(10px)",
                  color: "#ffffff",
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = "#8b5cf6";
                  e.currentTarget.style.boxShadow = "0 0 10px rgba(139, 92, 246, 0.5)";
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = "rgba(139, 92, 246, 0.3)";
                  e.currentTarget.style.boxShadow = "none";
                }}
                className="w-full px-[14px] py-[14px] rounded-[12px] text-foreground text-sm font-medium focus:outline-none transition-all duration-200 resize-none"
              />
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-white font-semibold w-full justify-center transition-all duration-300 hover:scale-105"
                style={{
                  background: "linear-gradient(135deg, #8b5cf6, #00c3ff)",
                  boxShadow: "0 0 20px rgba(139, 92, 246, 0.3)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = "0 0 30px rgba(139, 92, 246, 0.6)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "0 0 20px rgba(139, 92, 246, 0.3)";
                }}
              >
                <Send size={16} /> Send Message
              </button>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
