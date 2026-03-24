import AnimatedSection from "./AnimatedSection";
import { Award, BookOpen, Trophy, GraduationCap } from "lucide-react";

const achievements = [
  { icon: Trophy, title: "ByteXL Codeathon Winner", desc: "Secured 1st place in competitive coding challenge" },
  { icon: BookOpen, title: "Research Paper Published", desc: "Published research in a peer-reviewed journal" },
];

const certifications = [
  "HackerRank Java Certification",
  "L&T Web Development",
  "Cisco Python Essentials",
  "Coursera Prompt Engineering",
];

const hackathons = [
  { name: "AIgnite", desc: "AI-focused hackathon — built intelligent solutions" },
  { name: "Hacksagon", desc: "Multi-domain hack — full-stack challenge" },
  { name: "Karukrit", desc: "Creative tech hackathon — innovative prototyping" },
];

const AchievementsSection = () => (
  <section id="achievements" className="relative">
    <div className="section-container">
      <AnimatedSection>
        <p className="mono-text text-primary text-sm mb-2 tracking-widest uppercase">Recognition</p>
        <h2 className="section-title">Achievements & Certifications</h2>
      </AnimatedSection>

      {/* Achievements */}
      <div className="grid sm:grid-cols-2 gap-6 mt-10">
        {achievements.map((a, i) => (
          <AnimatedSection key={a.title} delay={i * 0.1}>
            <div className="glass-card rounded-xl p-6 flex items-start gap-4 hover:border-primary/30 transition-all group hover:shadow-[var(--shadow-glow)]">
              <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                <a.icon size={24} />
              </div>
              <div>
                <h3 className="font-bold text-foreground">{a.title}</h3>
                <p className="text-sm text-muted-foreground">{a.desc}</p>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>

      {/* Certifications */}
      <AnimatedSection delay={0.2}>
        <div className="mt-12">
          <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
            <GraduationCap size={20} className="text-primary" /> Certifications
          </h3>
          <div className="flex flex-wrap gap-3">
            {certifications.map((c) => (
              <span
                key={c}
                className="px-4 py-2 rounded-lg glass-card text-sm text-secondary-foreground hover:border-primary/30 transition-colors"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Hackathons */}
      <AnimatedSection delay={0.3}>
        <div className="mt-12">
          <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
            <Award size={20} className="text-primary" /> Hackathons
          </h3>
          <div className="grid sm:grid-cols-3 gap-4">
            {hackathons.map((h) => (
              <div
                key={h.name}
                className="glass-card rounded-xl p-5 hover:border-primary/30 transition-all hover:-translate-y-1 duration-300"
              >
                <h4 className="font-semibold text-foreground mb-1">{h.name}</h4>
                <p className="text-xs text-muted-foreground">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default AchievementsSection;
