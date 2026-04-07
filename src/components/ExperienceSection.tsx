import AnimatedSection from "./AnimatedSection";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Java Full Stack Intern",
    company: "ByteXL",
    period: "2025",
    points: [
      "Developed RESTful APIs with Spring Boot for enterprise-grade web applications",
      "Built dynamic frontends using React and integrated with backend microservices",
      "Collaborated with cross-functional teams following Agile methodology",
    ],
  },
  {
    role: "Web Development Intern",
    company: "ApexPlanet",
    period: "2024",
    points: [
      "Designed and implemented responsive web interfaces using HTML, CSS, and JavaScript",
      "Optimized website performance and improved page load times by 30%",
      "Gained experience with version control and collaborative development workflows",
    ],
  },
];

const ExperienceSection = () => (
  <section id="experience" className="relative">
    <div className="section-container">
      <AnimatedSection>
        <p className="mono-text text-sm mb-2 tracking-widest uppercase" style={{ color: "#8b5cf6" }}>Career</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#8b5cf6" }}>Experience</h2>
      </AnimatedSection>

      <div className="mt-10 relative">
        {/* Timeline line */}
        <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-border" />

        <div className="flex flex-col gap-10">
          {experiences.map((exp, i) => (
            <AnimatedSection key={exp.company} delay={i * 0.15}>
              <div className="relative pl-12 md:pl-16">
                {/* Dot */}
                <div className="absolute left-2.5 md:left-4.5 top-1 w-3 h-3 rounded-full bg-primary ring-4 ring-background" />

                <div className="glass-card rounded-xl p-6 hover:border-primary/30 transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                    <div>
                      <h3 className="font-bold text-foreground text-lg">{exp.role}</h3>
                      <p className="text-primary flex items-center gap-1.5 text-sm">
                        <Briefcase size={14} /> {exp.company}
                      </p>
                    </div>
                    <span className="mono-text text-xs text-muted-foreground mt-1 sm:mt-0">{exp.period}</span>
                  </div>
                  <ul className="space-y-2">
                    {exp.points.map((p, j) => (
                      <li key={j} className="text-sm text-secondary-foreground flex items-start gap-2">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/60 flex-shrink-0" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ExperienceSection;
