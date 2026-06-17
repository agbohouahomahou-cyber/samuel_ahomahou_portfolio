import { motion } from "framer-motion";
import { GitBranch, ExternalLink } from "lucide-react";
import gestion_stock from "../assets/gestion_stock.png";
import portfolio from "../assets/portfolio.png";
import connexion from "../assets/connexion.png";
import { useLanguage } from "../context/LanguageContext";

// Données non-traduisibles (images, liens, technologies) séparées du texte traduit
const projectsMeta = [
  {
    technologies: ["React", "Django", "DRF", "PostgreSQL"],
    image: connexion,
    github: "https://github.com/agbohouahomahou-cyber/finances", // ← Remplace par le vrai lien
    demo: null,
  },
  {
    technologies: ["Django", "JavaScript", "Tailwind CSS", "PostgreSQL"],
    image: gestion_stock,
    github: "https://github.com/agbohouahomahou-cyber/gestion_stock_django",
    demo: null,
  },
  {
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    image: portfolio,
    github: "https://github.com/agbohouahomahou-cyber/portfolio",
    demo: null,
  },
];

function Projects() {
  const { t } = useLanguage();
  const p = t.projects;

  return (
    <section id="projects" className="max-w-7xl mx-auto px-6 py-18 scroll-mt-24 md:scroll-mt-28">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-16"
      >
        {p.title} <span className="text-cyan-500">{p.titleHighlight}</span>
      </motion.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {p.items.map((project, index) => {
          const meta = projectsMeta[index];
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.01 }}
              className="bg-slate-900 border border-slate-800 hover:border-cyan-500/30 rounded-2xl overflow-hidden shadow-lg transition-colors duration-300 flex flex-col"
            >
              {/* Image */}
              <div className="h-52 bg-slate-800 overflow-hidden">
                <img
                  src={meta.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Contenu */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>

                <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {meta.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-slate-800 rounded-full text-xs text-cyan-400 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Boutons */}
                <div className="flex gap-3">
                  {meta.github && (
                    <a
                      href={meta.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300"
                    >
                      <GitBranch size={16} />
                      {p.github}
                    </a>
                  )}
                  {meta.demo && (
                    <a
                      href={meta.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 border border-cyan-500 hover:bg-cyan-500/10 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300"
                    >
                      <ExternalLink size={16} />
                      {p.demo}
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

export default Projects;