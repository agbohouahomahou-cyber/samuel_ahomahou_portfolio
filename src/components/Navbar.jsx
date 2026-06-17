import { useState, useEffect } from "react";
import { Menu, X, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { lang, toggleLang, t } = useLanguage();

  const navLinks = [
    { href: "#top", label: t.nav.home },
    { href: "#about", label: t.nav.about },
    { href: "#skills", label: t.nav.skills },
    { href: "#projects", label: t.nav.projects },
    { href: "#contact", label: t.nav.contact },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Empêche le scroll du fond quand le menu mobile est ouvert
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Ferme le menu mobile si on repasse en mode desktop (resize)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNavClick = (href) => {
    setIsOpen(false);
    // Laisse le menu se fermer avant le scroll, pour une transition fluide
    setTimeout(() => {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 50);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#06141f]/95 backdrop-blur-md shadow-lg shadow-black/20 border-b border-slate-800"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4 relative z-50">
        {/* Logo */}
        <motion.a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("#top");
          }}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xl md:text-2xl font-bold tracking-tight cursor-pointer"
        >
        Samuel <span className="text-cyan-500">AHOMAHOU</span>
        </motion.a>

        {/* Desktop Nav */}
        <motion.ul
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hidden md:flex gap-8 items-center"
        >
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm font-medium tracking-wide relative group cursor-pointer"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-500 group-hover:w-full transition-all duration-300" />
              </a>
            </li>
          ))}

          {/* Sélecteur de langue - Desktop */}
          <li>
            <button
              type="button"
              onClick={toggleLang}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-slate-700 hover:border-cyan-500 text-gray-300 hover:text-cyan-400 transition-all duration-300 text-sm font-medium"
              aria-label="Changer de langue"
            >
              <Globe size={15} />
              {lang === "fr" ? "FR" : "EN"}
            </button>
          </li>
        </motion.ul>

        {/* Mobile: Langue + Toggle */}
        <div className="md:hidden flex items-center gap-3">
          <button
            type="button"
            onClick={toggleLang}
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-full border border-slate-700 text-gray-300 hover:text-cyan-400 hover:border-cyan-500 transition-all duration-300 text-xs font-medium relative z-50"
            aria-label="Changer de langue"
          >
            <Globe size={14} />
            {lang === "fr" ? "FR" : "EN"}
          </button>

          <button
            type="button"
            className="relative z-50 p-2 -mr-2 text-gray-300 hover:text-cyan-400 transition-colors"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-expanded={isOpen}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X size={26} className="pointer-events-none" />
            ) : (
              <Menu size={26} className="pointer-events-none" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden relative z-40 bg-[#06141f]/98 backdrop-blur-xl border-t border-slate-800 overflow-hidden"
          >
            <ul className="flex flex-col items-center gap-2 py-6 text-base">
              {navLinks.map((link) => (
                <li key={link.href} className="w-full">
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="block w-full px-6 py-3 text-center text-gray-300 hover:text-cyan-400 active:text-cyan-400 transition-colors duration-300 font-medium cursor-pointer"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;