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
          <p className="mono-text text-primary text-sm mb-2 tracking-widest uppercase">Get In Touch</p>
          <h2 className="section-title">Contact Me</h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12 mt-10">
          {/* Info */}
          <AnimatedSection delay={0.1}>
            <div className="space-y-6">
              <p className="text-secondary-foreground leading-relaxed">
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
                className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors text-sm"
              />
              <input
                type="email"
                placeholder="Your Email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors text-sm"
              />
              <textarea
                placeholder="Your Message"
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors text-sm resize-none"
              />
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity w-full justify-center"
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
