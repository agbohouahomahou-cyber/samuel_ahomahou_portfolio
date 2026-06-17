import images4 from "../assets/images4.png";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { ArrowDown } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="top"
      className="max-w-7xl mx-auto min-h-screen flex flex-col justify-center px-6 md:px-8 pt-15 pb-8 scroll-mt-24 md:scroll-mt-28"
    >
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Partie gauche */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
        >
          <p className="text-cyan-500 text-sm font-semibold tracking-widest uppercase mb-4">
            {t.hero.greeting}
          </p>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            {t.hero.titlePrefix}{" "}
            <span className="text-cyan-500">{t.hero.name}</span>
          </h1>

          <h2 className="text-xl md:text-2xl mt-6 text-cyan-400 font-medium h-10">
            <TypeAnimation
              key={t.hero.roles.join("-")}
              sequence={t.hero.roles.flatMap((role) => [role, 2000])}
              wrapper="span"
              cursor={true}
              speed={50}
              repeat={Infinity}
            />
          </h2>

          <p className="mt-6 text-gray-400 text-base md:text-lg leading-relaxed">
            {t.hero.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <a
              href="#projects"
              className="bg-cyan-500 hover:bg-cyan-600 text-black px-8 py-3 rounded-full font-semibold transition-all duration-300 text-center shadow-lg shadow-cyan-500/20"
            >
              {t.hero.ctaProjects}
            </a>
            <a
              href="#contact"
              className="border border-cyan-500 hover:bg-cyan-500/10 text-white px-8 py-3 rounded-full transition-all duration-300 text-center"
            >
              {t.hero.ctaContact}
            </a>
          </div>
        </motion.div>

        {/* Partie droite — photo */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-cyan-500/10 blur-2xl" />
            <img
              src={images4}
              alt="Samuel AHOMAHOU"
              className="relative w-full max-w-md rounded-3xl object-cover shadow-2xl border border-slate-700"
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="flex justify-center mt-16"
      >
        <a href="#about" className="text-gray-500 hover:text-cyan-400 transition-colors animate-bounce">
          <ArrowDown size={24} />
        </a>
      </motion.div>
    </section>
  );
}

export default Hero;