"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    label: "frontend",
    skills: ["JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "Framer Motion", "HTML5", "CSS3"],
  },
  {
    label: "tools",
    skills: ["Git", "Vite", "Figma", "VS Code", "Webpack", "npm"],
  },
  {
    label: "concepts",
    skills: ["Responsive Design", "REST APIs", "CI/CD", "Testing", "Accessibility", "Performance"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 md:py-32 px-6 md:px-12 lg:pl-28 border-t border-border">
      <div className="max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-14">My Stack</h2>
        </motion.div>

        <div className="space-y-12">
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: ci * 0.1 }}
            >
              <p className="font-display text-xs font-semibold tracking-widest uppercase text-primary mb-5">{cat.label}</p>
              <div className="flex flex-wrap gap-3">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-full bg-secondary text-foreground text-sm font-display border border-border hover:border-primary/40 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
