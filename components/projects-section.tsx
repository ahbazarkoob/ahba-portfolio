import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    num: "01",
    title: "Elkhat Store",
    description: "A modern e-commerce storefront with product browsing, cart management, and a seamless checkout experience.",
    tech: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    live: "https://elkhattstore.vercel.app/",
    github: "https://github.com/ahbazarkoob/elkhattstore",
  },
  {
    num: "02",
    title: "Kanban Board",
    description: "A full-featured Kanban task management application with drag-and-drop interactions, real-time updates, and persistent data storage using Supabase. Supports task creation, editing, prioritization, search, sorting, and seamless column transitions with dnd-kit.",
    tech: ["React", "Next.js", "TypeScript", "Dnd-Kit", "Shadcn/UI"],
    live: "https://kanban-board-theta-nine.vercel.app/",
    github: "https://github.com/ahbazarkoob/kanban-board",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 md:py-32 px-6 md:px-12 lg:px-20 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-14">Selected Projects</h2>
        </motion.div>

        <div className="space-y-0">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group py-8 border-b border-border hover:border-primary/30 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <span className="font-display text-xs text-muted-foreground font-mono shrink-0 mt-1">
                  {project.num}.
                </span>
                <div className="flex-1">
                  <h3 className="font-display text-xl font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                    {project.title}
                  </h3>
                  <p className="text-secondary-foreground text-sm leading-relaxed mb-4 max-w-lg">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span key={t} className="text-xs text-muted-foreground font-display">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-3 shrink-0 md:mt-1">
                  <a href={project.github} className="text-muted-foreground hover:text-primary transition-colors" aria-label="GitHub">
                    <Github size={16} />
                  </a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Live demo">
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
