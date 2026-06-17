import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react";
import { FaFacebook, FaWhatsapp } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";

// ⚠️ Remplace ces 3 valeurs par celles de ton compte EmailJS (emailjs.com)
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const contactIcons = {
  email: <Mail size={20} className="text-cyan-500" />,
  phone: <Phone size={20} className="text-cyan-500" />,
  whatsapp: <FaWhatsapp size={20} className="text-cyan-500" />,
  facebook: <FaFacebook size={20} className="text-cyan-500" />,
  location: <MapPin size={20} className="text-cyan-500" />,
};

function Contact() {
  const { t } = useLanguage();
  const c = t.contact;

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const contactInfo = [
    {
      key: "email",
      label: c.labels.email,
      value: "nestorahomahou@gmail.com",
      href: "mailto:nestorahomahou@gmail.com",
    },
    {
      key: "phone",
      label: c.labels.phone,
      value: "+229 01 41 38 37 45",
      href: "tel:+22901413837 45",
    },
    {
      key: "whatsapp",
      label: c.labels.whatsapp,
      value: "+229 01 69 60 49 95",
      href: "https://wa.me/2290169604995",
    },
    {
      key: "facebook",
      label: c.labels.facebook,
      value: "Nestor Samuel Ahomahou",
      href: "https://www.facebook.com/nestorsamuel.ahomahou/",
    },
    {
      key: "location",
      label: c.labels.location,
      value: c.locationValue,
      href: null,
    },
  ];

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: form.name,
          email: form.email,
          message: form.message,
        },
        EMAILJS_PUBLIC_KEY
      );

      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 4000);
    } catch (error) {
      console.error("Erreur EmailJS :", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <section id="contact" className="max-w-7xl mx-auto px-6 py-15 scroll-mt-24 md:scroll-mt-28">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold text-center mb-16">
          {c.title} <span className="text-cyan-500">{c.titleHighlight}</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Informations de contact */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">{c.heading}</h3>
            <p className="text-gray-400 mb-10 leading-relaxed">{c.description}</p>

            <div className="space-y-6">
              {contactInfo.map((item) => (
                <div key={item.key} className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center flex-shrink-0">
                    {contactIcons[item.key]}
                  </div>
                  <div>
                    <p className="text-sm text-cyan-400 font-medium">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-gray-300">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Formulaire */}
          <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800">
            {status === "sent" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center py-12"
              >
                <div className="text-4xl mb-4">✅</div>
                <h4 className="text-xl font-semibold text-cyan-400 mb-2">
                  {c.form.successTitle}
                </h4>
                <p className="text-gray-400">{c.form.successText}</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder={c.form.namePlaceholder}
                    required
                    disabled={status === "sending"}
                    className="w-full p-4 rounded-xl bg-slate-800 border border-transparent focus:border-cyan-500 outline-none transition-colors duration-300 text-white placeholder-gray-500 disabled:opacity-60"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder={c.form.emailPlaceholder}
                    required
                    disabled={status === "sending"}
                    className="w-full p-4 rounded-xl bg-slate-800 border border-transparent focus:border-cyan-500 outline-none transition-colors duration-300 text-white placeholder-gray-500 disabled:opacity-60"
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows="5"
                    placeholder={c.form.messagePlaceholder}
                    required
                    disabled={status === "sending"}
                    className="w-full p-4 rounded-xl bg-slate-800 border border-transparent focus:border-cyan-500 outline-none transition-colors duration-300 text-white placeholder-gray-500 resize-none disabled:opacity-60"
                  />
                </div>

                {status === "error" && (
                  <p className="text-red-400 text-sm text-center">{c.form.errorText}</p>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full flex items-center justify-center gap-2 bg-cyan-500 hover:bg-cyan-600 disabled:bg-cyan-500/60 disabled:cursor-not-allowed text-black py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg shadow-cyan-500/20"
                >
                  {status === "sending" ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      {c.form.sendingButton}
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      {c.form.sendButton}
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Contact;