import { ArrowUp, GitBranch, Link, Mail, Phone } from "lucide-react";
import { FaFacebook, FaWhatsapp } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";

const socialLinks = [
  {
    icon: <GitBranch size={20} />,
    href: "https://github.com/agbohouahomahou-cyber/gestion_stock_django", // ← Remplace par ton vrai profil
    label: "GitHub",
  },
  {
    icon: <Link size={20} />,
    href: "https://www.linkedin.com/in/nestor-ahomahou-11a8073a6/",
    label: "LinkedIn",
  },
  {
    icon: <Mail size={20} />,
    href: "mailto:nestorahomahou@gmail.com",
    label: "Email",
  },
  {
    icon: <Phone size={20} />,
    href: "tel:+22901413837 45",
    label: "Téléphone",
  },
  {
    icon: <FaWhatsapp size={20} />,
    href: "https://wa.me/2290169604995",
    label: "WhatsApp",
  },
  {
    icon: <FaFacebook size={20} />,
    href: "https://www.facebook.com/nestorsamuel.ahomahou/",
    label: "Facebook",
  },
];

function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-slate-800 bg-[#06141f]">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo / Nom */}
        <p className="text-lg font-bold">
          Samuel <span className="text-cyan-500">AHOMAHOU</span>
        </p>

        {/* Copyright */}
        <p className="text-gray-500 text-sm text-center">
          © {new Date().getFullYear()} Samuel AHOMAHOU · {t.footer.rights}
        </p>

        {/* Réseaux sociaux */}
        <div className="flex items-center gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="w-9 h-9 bg-slate-800 hover:bg-cyan-500 hover:text-black text-gray-400 rounded-lg flex items-center justify-center transition-all duration-300"
            >
              {link.icon}
            </a>
          ))}
        </div>

        <a
          href="#top"
          aria-label="Remonter en haut de page"
          className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300 transition-all duration-300 hover:bg-cyan-500 hover:text-black"
        >
          <ArrowUp size={16} />
          {t.footer.backToTop}
        </a>
      </div>
    </footer>
  );
}

export default Footer;