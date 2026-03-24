import AnimatedSection from "./AnimatedSection";

const categories = [
  {
    title: "Languages",
    skills: ["Java", "Python", "C", "SQL"],
  },
  {
    title: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    title: "Backend",
    skills: ["Spring Boot", "Node.js", "Express"],
  },
  {
    title: "Database",
    skills: ["MySQL", "MongoDB", "PostgreSQL"],
  },
  {
    title: "Concepts",
    skills: ["DSA", "OOP", "DBMS", "Machine Learning"],
  },
];

const SkillsSection = () => (
  <section id="skills" className="relative">
    <div className="section-container">
      <AnimatedSection>
        <p className="mono-text text-sm mb-2 tracking-widest uppercase" style={{ color: "hsl(165 80% 48%)" }}>Expertise</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "hsl(165 80% 48%)" }}>Skills & Technologies</h2>
      </AnimatedSection>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {categories.map((cat, i) => (
          <AnimatedSection key={cat.title} delay={i * 0.1}>
            <div className="glass-card rounded-xl p-6 h-full hover:border-primary/30 transition-all group hover:shadow-[var(--shadow-glow)]">
              <h3 className="font-semibold text-foreground mb-4 text-lg">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm rounded-md bg-secondary text-secondary-foreground border border-border hover:border-primary/40 hover:text-primary transition-colors cursor-default"
                  >
                    {skill}
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

export default SkillsSection;
