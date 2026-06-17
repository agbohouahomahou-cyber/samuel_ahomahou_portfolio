const translations = {
  fr: {
    nav: {
      home: "Accueil",
      about: "À propos",
      skills: "Compétences",
      projects: "Projets",
      contact: "Contact",
    },
    hero: {
      greeting: "Salut",
      titlePrefix: "Je suis",
      name: "Samuel AHOMAHOU",
      roles: [
        "Développeur Full Stack",
        "Développeur Backend Django",
        "Technicien Informatique",
        "Consultant SEO",
      ],
      description:
        "Passionné par le numérique, je crée des applications web modernes, performantes et adaptées aux besoins des utilisateurs. Spécialisé en Python/Django pour le backend et React pour le frontend, j'accompagne également les projets dans leur visibilité avec l'optimisation SEO.",
      ctaProjects: "Voir mes projets",
      ctaContact: "Me contacter",
    },
    about: {
      eyebrow: "Qui suis-je",
      titlePrefix: "À propos de",
      titleHighlight: "moi",
      heading: "Développeur Full Stack, je transforme des idées en",
      headingHighlight: "produits concrets",
      paragraph1:
        "Je m'appelle Samuel AHOMAHOU, développeur Full Stack basé à Parakou, au Bénin. Mon parcours en Informatique de Gestion m'a donné une base solide pour concevoir des applications web complètes — de la base de données jusqu'à l'interface utilisateur.",
      paragraph2Part1: "Mon stack de prédilection associe",
      paragraph2Part2: "pour des backends fiables et",
      paragraph2Part3:
        "pour des interfaces modernes et fluides. J'accorde une attention particulière à la qualité du code, à l'expérience utilisateur et à la performance de chaque projet que je conçois.",
      stats: [
        { value: "3+", label: "Années de pratique" },
        { value: "5+", label: "Projets réalisés" },
        { value: "10+", label: "Technologies maîtrisées" },
      ],
      timeline: [
        {
          period: "2021 — 2023",
          title: "Licence Pro Informatique de Gestion",
          place: "IUT, Université de Parakou",
        },
        {
          period: "2023",
          title: "Stage en développement web",
          place:
            "Système et Orbite — Conception d'une application web de prise de rendez-vous médicale",
        },
        {
          period: "2026",
          title: "Application de gestion de stock",
          place: "Projet personnel — Django & React",
        },
      ],
      focusAreas: [
        {
          title: "Architecture Full Stack",
          text: "Conception d'APIs REST robustes avec Django et d'interfaces réactives avec React.",
        },
        {
          title: "Code propre & maintenable",
          text: "Un soin particulier pour la lisibilité, les bonnes pratiques et la documentation.",
        },
        {
          title: "Basé à Parakou, Bénin",
          text: "Disponible pour des collaborations à distance, partout dans le monde.",
        },
      ],
      timelineLabel: "Parcours",
      cvButton: "Télécharger mon CV",
    },
    skills: {
      title: "Mes",
      titleHighlight: "Compétences",
      categories: [
        {
          title: "Frontend",
          skills: ["React", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
        },
        {
          title: "Backend",
          skills: ["Python", "Django", "Django REST Framework"],
        },
        {
          title: "Bases de données",
          skills: ["MySQL", "PostgreSQL", "SQLite"],
        },
        {
          title: "Outils & DevOps",
          skills: ["Git", "GitHub", "Linux", "VS Code"],
        },
        {
          title: "Réseaux & SEO",
          skills: ["Administration Réseau", "SEO", "Maintenance Informatique"],
        },
      ],
    },
    projects: {
      title: "Mes",
      titleHighlight: "Projets",
      github: "GitHub",
      demo: "Démo",
      items: [
        {
          title: "Gestion Financière",
          description:
            "Application de gestion des revenus, dépenses et budgets personnels avec tableaux de bord analytiques.",
        },
        {
          title: "Gestion de Stock",
          description:
            "Gestion complète des produits, fournisseurs et mouvements de stock avec historique et alertes de seuil.",
        },
        {
          title: "Portfolio Personnel",
          description:
            "Portfolio moderne et responsive conçu avec React, Tailwind CSS et des animations Framer Motion.",
        },
      ],
    },
    contact: {
      title: "Me",
      titleHighlight: "Contacter",
      heading: "Discutons de votre projet",
      description:
        "Vous avez un projet web, une collaboration ou une opportunité professionnelle ? N'hésitez pas à me contacter, je vous répondrai dans les meilleurs délais.",
      labels: {
        email: "Email",
        phone: "Téléphone",
        whatsapp: "whatsapp",
        facebook: "facebook",
        location: "Localisation",
      },
      locationValue: "Parakou, Bénin",
      form: {
        namePlaceholder: "Votre nom",
        emailPlaceholder: "Votre email",
        messagePlaceholder: "Votre message",
        sendButton: "Envoyer le message",
        sendingButton: "Envoi en cours...",
        successTitle: "Message envoyé !",
        successText: "Je vous répondrai très bientôt.",
        errorText:
          "Une erreur est survenue. Réessaie ou contacte-moi directement par email.",
      },
    },
    footer: {
      rights: "Tous droits réservés",
      backToTop: "Haut de page",
    },
  },

  en: {
    nav: {
      home: "Home",
      about: "About",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      greeting: "Hi there",
      titlePrefix: "I'm",
      name: "Samuel AHOMAHOU",
      roles: [
        "Full Stack Developer",
        "Django Backend Developer",
        "IT Technician",
        "SEO Consultant",
      ],
      description:
        "Passionate about technology, I build modern, high-performing web applications tailored to users' needs. Specialized in Python/Django for the backend and React for the frontend, I also help projects grow their visibility through SEO optimization.",
      ctaProjects: "See my projects",
      ctaContact: "Contact me",
    },
    about: {
      eyebrow: "Who I am",
      titlePrefix: "About",
      titleHighlight: "me",
      heading: "Full Stack Developer, I turn ideas into",
      headingHighlight: "real products",
      paragraph1:
        "My name is Samuel AHOMAHOU, a Full Stack Developer based in Parakou, Benin. My background in Management Information Systems gave me a solid foundation to design complete web applications — from the database to the user interface.",
      paragraph2Part1: "My go-to stack combines",
      paragraph2Part2: "for reliable backends and",
      paragraph2Part3:
        "for modern, smooth interfaces. I pay close attention to code quality, user experience, and the performance of every project I build.",
      stats: [
        { value: "3+", label: "Years of practice" },
        { value: "5+", label: "Projects completed" },
        { value: "10+", label: "Technologies mastered" },
      ],
      timeline: [
        {
          period: "2021 — 2023",
          title: "Professional Bachelor's in Management Information Systems",
          place: "IUT, University of Parakou",
        },
        {
          period: "2023",
          title: "Web Development Internship",
          place:
            "Système et Orbite — Design of a medical appointment booking web app",
        },
        {
          period: "2026",
          title: "Inventory Management Application",
          place: "Personal project — Django & React",
        },
      ],
      focusAreas: [
        {
          title: "Full Stack Architecture",
          text: "Designing robust REST APIs with Django and responsive interfaces with React.",
        },
        {
          title: "Clean & maintainable code",
          text: "Particular care for readability, best practices, and documentation.",
        },
        {
          title: "Based in Parakou, Benin",
          text: "Available for remote collaborations, anywhere in the world.",
        },
      ],
      timelineLabel: "Journey",
      cvButton: "Download my CV",
    },
    skills: {
      title: "My",
      titleHighlight: "Skills",
      categories: [
        {
          title: "Frontend",
          skills: ["React", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
        },
        {
          title: "Backend",
          skills: ["Python", "Django", "Django REST Framework"],
        },
        {
          title: "Databases",
          skills: ["MySQL", "PostgreSQL", "SQLite"],
        },
        {
          title: "Tools & DevOps",
          skills: ["Git", "GitHub", "Linux", "VS Code"],
        },
        {
          title: "Networking & SEO",
          skills: ["Network Administration", "SEO", "IT Maintenance"],
        },
      ],
    },
    projects: {
      title: "My",
      titleHighlight: "Projects",
      github: "GitHub",
      demo: "Demo",
      items: [
        {
          title: "Financial Management",
          description:
            "Application to manage personal income, expenses, and budgets with analytical dashboards.",
        },
        {
          title: "Inventory Management",
          description:
            "Complete management of products, suppliers, and stock movements with history and threshold alerts.",
        },
        {
          title: "Personal Portfolio",
          description:
            "Modern, responsive portfolio built with React, Tailwind CSS, and Framer Motion animations.",
        },
      ],
    },
    contact: {
      title: "Contact",
      titleHighlight: "Me",
      heading: "Let's talk about your project",
      description:
        "Got a web project, a collaboration idea, or a job opportunity? Feel free to reach out — I'll get back to you as soon as possible.",
      labels: {
        email: "Email",
        phone: "Phone",
        whatsapp: "whatsapp",
        facebook: "facebook",
        location: "Location",
      },
      locationValue: "Parakou, Benin",
      form: {
        namePlaceholder: "Your name",
        emailPlaceholder: "Your email",
        messagePlaceholder: "Your message",
        sendButton: "Send message",
        sendingButton: "Sending...",
        successTitle: "Message sent!",
        successText: "I'll get back to you very soon.",
        errorText:
          "Something went wrong. Please try again or email me directly.",
      },
    },
    footer: {
      rights: "All rights reserved",
      backToTop: "Back to top",
    },
  },
};

export default translations;