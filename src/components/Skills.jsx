import { motion } from "framer-motion";
import { Code2, Server, Database, Wrench, Globe } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const categoryIcons = [
  <Code2 size={22} />,
  <Server size={22} />,
  <Database size={22} />,
  <Wrench size={22} />,
  <Globe size={22} />,
];

function Skills() {
  const { t } = useLanguage();
  const s = t.skills;

  return (
    <section id="skills" className="max-w-7xl mx-auto px-6 py-18 scroll-mt-24 md:scroll-mt-28">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-16"
      >
        {s.title} <span className="text-cyan-500">{s.titleHighlight}</span>
      </motion.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {s.categories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -6 }}
            className="bg-slate-900 border border-slate-800 hover:border-cyan-500/40 rounded-2xl p-6 shadow-lg transition-colors duration-300"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="text-cyan-500">{categoryIcons[index]}</div>
              <h3 className="text-lg font-semibold text-white">{category.title}</h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 bg-slate-800 hover:bg-cyan-500 hover:text-black rounded-full text-sm text-gray-300 transition-all duration-300 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skills;