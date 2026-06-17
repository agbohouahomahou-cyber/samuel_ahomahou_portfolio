import { motion } from "framer-motion";
import {
  GraduationCap,
  Briefcase,
  MapPin,
  Code2,
  Layers,
  Sparkles,
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const timelineIcons = [
  <GraduationCap size={18} />,
  <Briefcase size={18} />,
  <Code2 size={18} />,
];

const focusIcons = [
  <Layers size={20} />,
  <Sparkles size={20} />,
  <MapPin size={20} />,
];

function About() {
  const { t } = useLanguage();
  const a = t.about;

  return (
    <section id="about" className="max-w-7xl mx-auto px-6 py-15 scroll-mt-24 md:scroll-mt-28">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        {/* En-tête */}
        <div className="text-center mb-16">
          <p className="text-cyan-500 text-sm font-semibold tracking-widest uppercase mb-3">
            {a.eyebrow}
          </p>
          <h2 className="text-4xl font-bold">
            {a.titlePrefix} <span className="text-cyan-500">{a.titleHighlight}</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Colonne gauche : texte + stats */}
          <div className="lg:col-span-3">
            <h3 className="text-2xl font-semibold mb-5 leading-snug">
              {a.heading} <span className="text-cyan-500">{a.headingHighlight}</span>.
            </h3>

            <p className="text-gray-400 leading-8 mb-5">{a.paragraph1}</p>

            <p className="text-gray-400 leading-8 mb-10">
              {a.paragraph2Part1} <strong className="text-gray-200">Python/Django</strong>{" "}
              {a.paragraph2Part2} <strong className="text-gray-200">React</strong>{" "}
              {a.paragraph2Part3}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-10 pb-10 border-b border-slate-800">
              {a.stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <p className="text-3xl font-bold text-cyan-500">{stat.value}</p>
                  <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Focus areas */}
            <div className="space-y-5">
              {a.focusAreas.map((area, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-500 flex items-center justify-center flex-shrink-0">
                    {focusIcons[i]}
                  </div>
                  <div>
                    <p className="font-medium text-gray-200">{area.title}</p>
                    <p className="text-sm text-gray-500 mt-0.5">{area.text}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA CV */}
            <a
              href="/CV_AHOMAHOU_NESTOR_SAMUEL.pdf"
              download
              className="inline-block mt-10 bg-cyan-500 hover:bg-cyan-600 text-black px-6 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg shadow-cyan-500/20 text-sm"
            >
              {a.cvButton}
            </a>
          </div>

          {/* Colonne droite : timeline */}
          <div className="lg:col-span-2">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 h-full">
              <p className="text-sm text-cyan-400 font-semibold tracking-wide uppercase mb-8">
                {a.timelineLabel}
              </p>

              <div className="relative">
                <div className="absolute left-[19px] top-2 bottom-2 w-px bg-slate-800" />

                <div className="space-y-8">
                  {a.timeline.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.15 }}
                      className="relative flex gap-5"
                    >
                      <div className="w-10 h-10 rounded-full bg-slate-800 border border-cyan-500/30 text-cyan-500 flex items-center justify-center flex-shrink-0 relative z-10">
                        {timelineIcons[i]}
                      </div>
                      <div className="pt-1">
                        <p className="text-xs text-cyan-400 font-medium mb-1">{item.period}</p>
                        <p className="font-medium text-gray-200 leading-snug">{item.title}</p>
                        <p className="text-sm text-gray-500 mt-0.5">{item.place}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default About;