import { motion } from "framer-motion";

const experiences = [
  {
    company: "Kraftbase",
    role: "Software Developer, Frontend",
    period: "06/2025 – Present",
    highlights: [
      "Developed a real-time messaging system and dynamic custom form builder for a psychologist healthcare platform using React, Next.js, TypeScript, React Hook Form, and Zod.",
      "Developed seizure monitoring dashboards with grid/list views, activity charts, and real-time status components.",
      "Built scalable, reusable UI components with TailwindCSS and Shadcn/UI.",
      "Integrated multiple AI agents into a React/TypeScript frontend with end-to-end chat interfaces and real-time API orchestration.",
    ],
  },
  {
    company: "Novo Cabs",
    role: "Software Developer, Frontend",
    period: "02/2024 – 06/2025",
    highlights: [
      "Created over 50 dynamic forms with Zod schema validation, reducing invalid data submissions.",
      "Implemented Redux Persist for seamless state management across sessions.",
      "Utilised WebSockets for real-time messaging between patients and admins.",
      "Developed 15 reusable Shadcn/UI components establishing a scalable design system.",
      "Connected over 200 RESTful APIs for seamless data flow.",
      "Integrated NextAuth for secure authentication and Stripe for payment processing.",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 md:py-32 px-6 md:px-12 lg:px-20 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-14">My Experience</h2>
        </motion.div>

        <div className="space-y-0">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="py-8 border-b border-border group hover:border-primary/30 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-3">
                <div>
                  <h3 className="font-display text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                    {exp.company}
                  </h3>
                  <p className="text-secondary-foreground text-sm mt-1">{exp.role}</p>
                </div>
                <p className="text-muted-foreground text-sm font-display mt-2 md:mt-0">{exp.period}</p>
              </div>
              <ul className="space-y-2 mt-3">
                {exp.highlights.map((h, j) => (
                  <li key={j} className="text-muted-foreground text-sm leading-relaxed flex gap-2">
                    <span className="text-primary mt-1 shrink-0">▹</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
