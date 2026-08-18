export type Locale = "ro" | "en" | "fr" | "de" | "es" | "it";

export const locales: Locale[] = ["ro", "en", "fr", "de", "es", "it"];

export const localeNames: Record<Locale, string> = {
  ro: "Română",
  en: "English",
  fr: "Français",
  de: "Deutsch",
  es: "Español",
  it: "Italiano",
};

export interface Dictionary {
  nav: {
    items: { id: string; label: string }[];
    cta: string;
    ariaLabel: string;
  };
  hero: {
    available: string;
    titleLine1: string;
    titleEm: string;
    intro: string;
    ctaPrimary: string;
    ctaSecondary: string;
    checklist: string[];
    statusAvailable: string;
    scrollHint: string;
  };
  story: {
    eyebrow: string;
    titleLine1: string;
    titleEm: string;
    summary: string;
    paragraph2: string;
    paragraph3: string;
    quoteLead: string;
    quoteMiddle: string;
    quoteHighlight: string;
    linkedin: string;
    email: string;
    features: { title: string; description: string }[];
    skillsTitle: string;
    skillsSubtitle: string;
    skillsBadge: string;
    skills: { label: string; description: string; value: number }[];
    techTitle: string;
    techBadge: string;
    ctaText: string;
    ctaButton: string;
  };
  process: {
    eyebrow: string;
    titleLine1: string;
    titleEm: string;
    steps: { title: string; description: string }[];
  };
  contactSection: {
    eyebrow: string;
    titleLine1: string;
    titleEm: string;
    statusLabel: string;
    directContact: string;
    emailLabel: string;
    phoneLabel: string;
    missionInfo: string;
  };
  footer: {
    back: string;
  };
  contactForm: {
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    sentMessage: string;
    sendError: string;
    readyMessage: string;
    submitting: string;
    submit: string;
    errors: {
      name: string;
      email: string;
      message: string;
    };
  };
  projectSelector: {
    eyebrow: string;
    counter: string;
    ctaText: string;
    choices: { title: string; copy: string; label: string; tags: string[] }[];
  };
  heroVisual: {
    available: string;
    location: string;
    featuredLabel: string;
    craftingLine1: string;
    craftingLine2: string;
    craftingHighlight: string;
    viewProject: string;
    techStackTitle: string;
    mobileLine1: string;
    mobileLine2: string;
    mobileHighlight: string;
    downloadsLabel: string;
    ratingLabel: string;
    projectsCompletedLabel: string;
  };
  pricing: {
    eyebrow: string;
    titleLine1: string;
    titleEm: string;
    packages: { title: string; price: string; description: string; features: string[] }[];
  };
}

const ro: Dictionary = {
  nav: {
    items: [
      { id: "top", label: "Start" },
      { id: "story", label: "Poveste" },
      { id: "pricing", label: "Prețuri" },
      { id: "contact", label: "Contact" },
    ],
    cta: "Începe un proiect",
    ariaLabel: "Navigare principală",
  },
  hero: {
    available: "Disponibil pentru proiecte noi",
    titleLine1: "Hai să construim",
    titleEm: "ceva util.",
    intro:
      "Salut, sunt Florin. Transform idei în aplicații web și mobile pe care oamenii le pot folosi ușor, zi de zi.",
    ctaPrimary: "Începe proiectul",
    ctaSecondary: "Vezi cine sunt",
    checklist: [
      "Design responsive, adaptat pe mobil",
      "Cod curat, rapid și ușor de întreținut",
      "Comunicare clară, fără termeni complicați",
      "Livrare la timp, de fiecare dată",
    ],
    statusAvailable: "disponibil pentru colaborări",
    scrollHint: "scroll pentru a explora",
  },
  story: {
    eyebrow: "Nivel 1 · Profil dezvoltator",
    titleLine1: "Cine e în spatele",
    titleEm: "ecranului?",
    summary:
      "Full stack developer cu peste 4 ani de experiență în construirea de aplicații web și mobile moderne, scalabile și orientate spre utilizator.",
    paragraph2:
      "Am lucrat și ca IT Project Manager, iar asta m-a învățat să privesc proiectele dincolo de ecran: oameni, priorități, termene și rezultatul final.",
    paragraph3:
      "Lucrez atent, comunic des și păstrez lucrurile clare de la prima conversație până la lansare.",
    quoteLead: "Un singur partener.",
    quoteMiddle: "Tot ce ai nevoie. Fără scurtături. Fără compromisuri.",
    quoteHighlight: "Doar rezultate.",
    linkedin: "LinkedIn",
    email: "Email",
    features: [
      {
        title: "Lucrezi direct cu mine",
        description:
          "Fără intermediari, de la prima discuție până la lansare.",
      },
      {
        title: "Cod curat. Scalabil. Sigur.",
        description: "Calitate care crește și rezistă în timp.",
      },
      {
        title: "Livrare rapidă",
        description:
          "Proces eficient, planificare clară și livrare la timp.",
      },
      {
        title: "Comunicare clară",
        description:
          "Actualizări transparente și colaborare simplă la fiecare pas.",
      },
    ],
    skillsTitle: "Cu ce excelez",
    skillsSubtitle: "Zonele esențiale unde livrez rezultate excelente",
    skillsBadge: "EXPERT",
    skills: [
      {
        label: "Frontend & UI/UX",
        description: "Interfețe moderne, UX grozav, performanță ridicată",
        value: 100,
      },
      {
        label: "Backend & API-uri",
        description: "Sisteme robuste, REST/GraphQL, microservicii",
        value: 100,
      },
      {
        label: "Dezvoltare mobilă",
        description: "React Native, cross-platform, performanță nativă",
        value: 100,
      },
      {
        label: "Baze de date & arhitectură",
        description: "SQL/NoSQL, modelare date, interogări optimizate",
        value: 100,
      },
      {
        label: "DevOps & deployment",
        description: "CI/CD, Docker, scalare, monitorizare",
        value: 100,
      },
    ],
    techTitle: "Tehnologii & unelte",
    techBadge: "Mereu în dezvoltare",
    ctaText:
      "Îmi place să rezolv probleme complexe și să construiesc produse cu impact real.",
    ctaButton: "Hai să construim ceva grozav",
  },
  process: {
    eyebrow: "Cum lucrăm",
    titleLine1: "De la idee,",
    titleEm: "până la lansare.",
    steps: [
      {
        title: "Discovery",
        description:
          "Înțeleg obiectivele, utilizatorii și constrângerile înainte să scriu prima linie de cod.",
      },
      {
        title: "Planificare",
        description:
          "Definesc scopul, prioritățile și un termen realist de livrare.",
      },
      {
        title: "Design",
        description:
          "Wireframe-uri și interfețe care pun claritatea și ușurința în utilizare pe primul loc.",
      },
      {
        title: "Dezvoltare",
        description:
          "Cod curat, testat, construit cu uneltele potrivite pentru fiecare nevoie.",
      },
      {
        title: "Testare",
        description:
          "Testare E2E și manuală, ca să prind problemele înaintea utilizatorilor.",
      },
      {
        title: "Lansare",
        description:
          "Deploy fără emoții, cu monitorizare activă din prima zi.",
      },
      {
        title: "Suport",
        description:
          "Ajutor continuu, remedieri și îmbunătățiri după lansare.",
      },
    ],
  },
  contactSection: {
    eyebrow: "Ultimul pas",
    titleLine1: "Spune-mi unde",
    titleEm: "vrei să ajungi.",
    statusLabel: "disponibil pentru colaborări",
    directContact: "Contact direct",
    emailLabel: "Email",
    phoneLabel: "Telefon",
    missionInfo:
      "Scrie câteva rânduri despre idee sau despre produsul pe care vrei să-l îmbunătățești. Revin cu plăcere.",
  },
  footer: {
    back: "sus",
  },
  contactForm: {
    nameLabel: "Nume",
    namePlaceholder: "Numele tău",
    emailLabel: "Email",
    emailPlaceholder: "tu@companie.ro",
    messageLabel: "Spune-mi despre proiect",
    messagePlaceholder: "Ce vrei să construiești sau să îmbunătățești?",
    sentMessage: "Mulțumesc — mesajul este pregătit pentru trimitere.",
    sendError: "Mesajul nu a putut fi trimis. Încearcă din nou.",
    readyMessage: "Formular pregătit pentru conectare la email sau API.",
    submitting: "Se trimite…",
    submit: "Trimite mesajul",
    errors: {
      name: "Te rog să introduci numele.",
      email: "Te rog să introduci o adresă de email validă.",
      message: "Spune-mi puțin mai multe despre proiect.",
    },
  },
  projectSelector: {
    eyebrow: "De unde începem?",
    counter: "Ce construim împreună?",
    ctaText: "Alege o direcție și vezi cum poate prinde viață.",
    choices: [
      {
        title: "Un produs web",
        copy: "Un site sau o aplicație web modernă, clară și rapidă.",
        label: "Web app",
        tags: ["React", "Next.js", "Tailwind CSS"],
      },
      {
        title: "O aplicație mobilă",
        copy: "O experiență mobilă construită pentru iOS și Android.",
        label: "Mobile app",
        tags: ["React Native", "Expo", "iOS & Android"],
      },
      {
        title: "Un produs de îmbunătățit",
        copy: "Un produs existent care are nevoie de funcții, ordine sau o interfață mai bună.",
        label: "Improve",
        tags: ["Audit", "Refactor", "Testare"],
      },
    ],
  },
  heroVisual: {
    available: "Disponibil",
    location: "București, România",
    featuredLabel: "Proiect recomandat",
    craftingLine1: "Creez produse digitale",
    craftingLine2: "care au un",
    craftingHighlight: "impact real.",
    viewProject: "Vezi proiectul",
    techStackTitle: "Tehnologii",
    mobileLine1: "Aplicații mobile",
    mobileLine2: "pe care oamenii",
    mobileHighlight: "chiar le folosesc.",
    downloadsLabel: "Descărcări",
    ratingLabel: "Notă",
    projectsCompletedLabel: "Proiecte finalizate",
  },
  pricing: {
    eyebrow: "Pachete și prețuri",
    titleLine1: "Site-uri profesiionale",
    titleEm: "personalizate pentru tine, de la 2.000 de lei.",
    packages: [
      {
        title: "Website Profesional",
        price: "Preț personalizat",
        description: "Discutăm detaliile și nevoile tale pentru a stabili investiția potrivită.",
        features: [
          "Design modern și responsive",
          "4-6 pagini",
          "Optimizare SEO basic",
          "Contact form functional",
          "Deploy pe hosting",
          "3 luni suport gratuit",
        ],
      },
      {
        title: "Web App Interactiv",
        price: "Preț personalizat",
        description: "Discutăm detaliile și nevoile tale pentru a stabili investiția potrivită.",
        features: [
          "Design custom",
          "Pagini nelimitate",
          "Autentificare și conturi",
          "Bază de date",
          "Integrări cu API-uri",
          "6 luni suport inclus",
        ],
      },
      {
        title: "Aplicație Mobilă",
        price: "Preț personalizat",
        description: "Discutăm detaliile și nevoile tale pentru a stabili investiția potrivită.",
        features: [
          "Aplicație cross-platform",
          "Backend complet",
          "Push notifications",
          "Offline support",
          "Cloud storage",
          "1 an suport și update-uri",
        ],
      },
    ],
  },
};

const en: Dictionary = {
  nav: {
    items: [
      { id: "top", label: "Start" },
      { id: "story", label: "Story" },
      { id: "pricing", label: "Pricing" },
      { id: "contact", label: "Contact" },
    ],
    cta: "Start a project",
    ariaLabel: "Main navigation",
  },
  hero: {
    available: "Available for new projects",
    titleLine1: "Let's build",
    titleEm: "something useful.",
    intro:
      "Hi, I'm Florin. I turn ideas into web and mobile applications people can easily use, every day.",
    ctaPrimary: "Start the project",
    ctaSecondary: "See who I am",
    checklist: [
      "Responsive design, adapted for mobile",
      "Clean, fast, and maintainable code",
      "Clear communication, no complicated jargon",
      "On-time delivery, every time",
    ],
    statusAvailable: "available for collaborations",
    scrollHint: "scroll to explore",
  },
  story: {
    eyebrow: "Level 1 · Developer profile",
    titleLine1: "Who's behind the",
    titleEm: "screen?",
    summary:
      "Full stack developer with 4+ years of experience building modern, scalable, and user-focused web and mobile applications.",
    paragraph2:
      "I've also worked as an IT Project Manager, which taught me to look at projects beyond the screen: people, priorities, deadlines, and the final result.",
    paragraph3:
      "I work carefully, communicate often, and keep things clear from the first conversation to launch.",
    quoteLead: "One partner.",
    quoteMiddle: "Everything you need. No shortcuts. No compromises.",
    quoteHighlight: "Just results.",
    linkedin: "LinkedIn",
    email: "Email",
    features: [
      {
        title: "You work directly with me",
        description: "No intermediaries, from the first chat to launch.",
      },
      {
        title: "Clean. Scalable. Secure.",
        description: "Quality code that's built to grow and last.",
      },
      {
        title: "Fast delivery",
        description: "Efficient process, clear planning, and on-time delivery.",
      },
      {
        title: "Clear communication",
        description: "Transparent updates and smooth collaboration at every step.",
      },
    ],
    skillsTitle: "What I excel at",
    skillsSubtitle: "Core areas where I deliver outstanding results",
    skillsBadge: "EXPERT",
    skills: [
      {
        label: "Frontend & UI/UX",
        description: "Modern interfaces, great UX, high performance",
        value: 100,
      },
      {
        label: "Backend & APIs",
        description: "Robust systems, REST/GraphQL, microservices",
        value: 100,
      },
      {
        label: "Mobile Development",
        description: "React Native, cross-platform, native performance",
        value: 100,
      },
      {
        label: "Databases & Architecture",
        description: "SQL/NoSQL, data modeling, optimized queries",
        value: 100,
      },
      {
        label: "DevOps & Deployment",
        description: "CI/CD, Docker, scaling, monitoring",
        value: 100,
      },
    ],
    techTitle: "Technologies & tools",
    techBadge: "Always learning",
    ctaText:
      "I love solving complex problems and building products that make a real impact.",
    ctaButton: "Let's build something great",
  },
  process: {
    eyebrow: "How we work",
    titleLine1: "From idea,",
    titleEm: "to launch.",
    steps: [
      {
        title: "Discovery",
        description:
          "Understanding goals, users, and constraints before writing a single line of code.",
      },
      {
        title: "Planning",
        description:
          "Mapping the scope, priorities, and a realistic delivery timeline.",
      },
      {
        title: "Design",
        description:
          "Wireframes and interfaces that put clarity and usability first.",
      },
      {
        title: "Development",
        description:
          "Clean, tested code, built with the right tools for the job.",
      },
      {
        title: "Testing",
        description:
          "E2E and manual checks to catch issues before your users do.",
      },
      {
        title: "Deployment",
        description:
          "A smooth release with monitoring in place from day one.",
      },
      {
        title: "Support",
        description: "Ongoing help, fixes, and improvements after launch.",
      },
    ],
  },
  contactSection: {
    eyebrow: "Last step",
    titleLine1: "Tell me where",
    titleEm: "you want to get to.",
    statusLabel: "available for collaborations",
    directContact: "Direct contact",
    emailLabel: "Email",
    phoneLabel: "Phone",
    missionInfo:
      "Write a few lines about the idea or the product you want to improve. I'll get back to you soon.",
  },
  footer: {
    back: "top",
  },
  contactForm: {
    nameLabel: "Name",
    namePlaceholder: "Your name",
    emailLabel: "Email",
    emailPlaceholder: "you@company.com",
    messageLabel: "Tell me about the project",
    messagePlaceholder: "What do you want to build or improve?",
    sentMessage: "Thanks — your message is ready to be sent.",
    sendError: "The message could not be sent. Please try again.",
    readyMessage: "Form ready to be connected to email or an API.",
    submitting: "Sending…",
    submit: "Send message",
    errors: {
      name: "Please enter your name.",
      email: "Please enter a valid email address.",
      message: "Tell me a bit more about the project.",
    },
  },
  projectSelector: {
    eyebrow: "Where do we start?",
    counter: "What should we build?",
    ctaText: "Pick a direction and see what it could become.",
    choices: [
      {
        title: "A web product",
        copy: "A modern, clear, and fast website or web application.",
        label: "Web app",
        tags: ["React", "Next.js", "Tailwind CSS"],
      },
      {
        title: "A mobile app",
        copy: "A mobile experience built for iOS and Android.",
        label: "Mobile app",
        tags: ["React Native", "Expo", "iOS & Android"],
      },
      {
        title: "A product to improve",
        copy: "An existing product that needs new features, cleanup, or a better interface.",
        label: "Improve",
        tags: ["Audit", "Refactor", "Testing"],
      },
    ],
  },
  heroVisual: {
    available: "Available",
    location: "Bucharest, Romania",
    featuredLabel: "Featured project",
    craftingLine1: "Crafting digital",
    craftingLine2: "products that",
    craftingHighlight: "make an impact.",
    viewProject: "View project",
    techStackTitle: "Tech stack",
    mobileLine1: "Mobile apps",
    mobileLine2: "that people",
    mobileHighlight: "love to use.",
    downloadsLabel: "Downloads",
    ratingLabel: "Rating",
    projectsCompletedLabel: "Projects completed",
  },
  pricing: {
    eyebrow: "Packages and pricing",
    titleLine1: "Professional solutions",
    titleEm: "tailored for you.",
    packages: [
      {
        title: "Professional Website",
        price: "Custom pricing",
        description: "Let's discuss your needs to find the right investment for you.",
        features: [
          "Modern responsive design",
          "4-6 pages",
          "Basic SEO optimization",
          "Functional contact form",
          "Hosting deployment",
          "3 months free support",
        ],
      },
      {
        title: "Interactive Web App",
        price: "Custom pricing",
        description: "Let's discuss your needs to find the right investment for you.",
        features: [
          "Custom design",
          "Unlimited pages",
          "User authentication",
          "Database included",
          "API integrations",
          "6 months support included",
        ],
      },
      {
        title: "Mobile Application",
        price: "Custom pricing",
        description: "Let's discuss your needs to find the right investment for you.",
        features: [
          "Cross-platform app",
          "Full backend",
          "Push notifications",
          "Offline support",
          "Cloud storage",
          "1 year support and updates",
        ],
      },
    ],
  },
};

const fr: Dictionary = {
  nav: {
    items: [
      { id: "top", label: "Accueil" },
      { id: "story", label: "Histoire" },
      { id: "pricing", label: "Tarifs" },
      { id: "contact", label: "Contact" },
    ],
    cta: "Démarrer un projet",
    ariaLabel: "Navigation principale",
  },
  hero: {
    available: "Disponible pour de nouveaux projets",
    titleLine1: "Construisons",
    titleEm: "quelque chose d'utile.",
    intro:
      "Salut, je suis Florin. Je transforme des idées en applications web et mobiles simples à utiliser, au quotidien.",
    ctaPrimary: "Démarrer le projet",
    ctaSecondary: "Découvrir qui je suis",
    checklist: [
      "Design responsive, adapté au mobile",
      "Code propre, rapide et facile à maintenir",
      "Communication claire, sans jargon compliqué",
      "Livraison dans les délais, à chaque fois",
    ],
    statusAvailable: "disponible pour des collaborations",
    scrollHint: "défiler pour explorer",
  },
  story: {
    eyebrow: "Niveau 1 · Profil développeur",
    titleLine1: "Qui se cache derrière",
    titleEm: "l'écran ?",
    summary:
      "Développeur full stack avec plus de 4 ans d'expérience dans la création d'applications web et mobiles modernes, évolutives et centrées sur l'utilisateur.",
    paragraph2:
      "J'ai aussi travaillé comme IT Project Manager, ce qui m'a appris à voir les projets au-delà de l'écran : les personnes, les priorités, les délais et le résultat final.",
    paragraph3:
      "Je travaille avec soin, je communique souvent et je garde les choses claires depuis la première conversation jusqu'au lancement.",
    quoteLead: "Un seul partenaire.",
    quoteMiddle: "Tout ce dont vous avez besoin. Sans raccourcis. Sans compromis.",
    quoteHighlight: "Juste des résultats.",
    linkedin: "LinkedIn",
    email: "Email",
    features: [
      {
        title: "Vous travaillez directement avec moi",
        description: "Sans intermédiaires, de la première discussion au lancement.",
      },
      {
        title: "Propre. Évolutif. Sécurisé.",
        description: "Un code de qualité, conçu pour durer et évoluer.",
      },
      {
        title: "Livraison rapide",
        description: "Processus efficace, planification claire et livraison dans les délais.",
      },
      {
        title: "Communication claire",
        description:
          "Des mises à jour transparentes et une collaboration fluide à chaque étape.",
      },
    ],
    skillsTitle: "Ce dans quoi j'excelle",
    skillsSubtitle: "Les domaines clés où j'obtiens des résultats exceptionnels",
    skillsBadge: "EXPERT",
    skills: [
      {
        label: "Frontend & UI/UX",
        description: "Interfaces modernes, excellente UX, hautes performances",
        value: 100,
      },
      {
        label: "Backend & API",
        description: "Systèmes robustes, REST/GraphQL, microservices",
        value: 100,
      },
      {
        label: "Développement mobile",
        description: "React Native, multiplateforme, performance native",
        value: 100,
      },
      {
        label: "Bases de données & architecture",
        description: "SQL/NoSQL, modélisation des données, requêtes optimisées",
        value: 100,
      },
      {
        label: "DevOps & déploiement",
        description: "CI/CD, Docker, mise à l'échelle, monitoring",
        value: 100,
      },
    ],
    techTitle: "Technologies & outils",
    techBadge: "Toujours en apprentissage",
    ctaText:
      "J'aime résoudre des problèmes complexes et créer des produits qui ont un réel impact.",
    ctaButton: "Construisons quelque chose de génial",
  },
  process: {
    eyebrow: "Comment nous travaillons",
    titleLine1: "De l'idée,",
    titleEm: "au lancement.",
    steps: [
      {
        title: "Découverte",
        description:
          "Comprendre les objectifs, les utilisateurs et les contraintes avant d'écrire la moindre ligne de code.",
      },
      {
        title: "Planification",
        description:
          "Définir le périmètre, les priorités et un calendrier de livraison réaliste.",
      },
      {
        title: "Design",
        description:
          "Wireframes et interfaces qui privilégient la clarté et la facilité d'utilisation.",
      },
      {
        title: "Développement",
        description:
          "Un code propre et testé, construit avec les bons outils pour chaque besoin.",
      },
      {
        title: "Tests",
        description:
          "Tests E2E et manuels pour détecter les problèmes avant vos utilisateurs.",
      },
      {
        title: "Déploiement",
        description:
          "Un lancement en douceur avec un suivi actif dès le premier jour.",
      },
      {
        title: "Support",
        description:
          "Une aide continue, des corrections et des améliorations après le lancement.",
      },
    ],
  },
  contactSection: {
    eyebrow: "Dernière étape",
    titleLine1: "Dites-moi où",
    titleEm: "vous voulez aller.",
    statusLabel: "disponible pour des collaborations",
    directContact: "Contact direct",
    emailLabel: "Email",
    phoneLabel: "Téléphone",
    missionInfo:
      "Écrivez quelques lignes sur l'idée ou le produit que vous souhaitez améliorer. Je vous répondrai rapidement.",
  },
  footer: {
    back: "haut",
  },
  contactForm: {
    nameLabel: "Nom",
    namePlaceholder: "Votre nom",
    emailLabel: "Email",
    emailPlaceholder: "toi@entreprise.com",
    messageLabel: "Parlez-moi du projet",
    messagePlaceholder: "Que voulez-vous construire ou améliorer ?",
    sentMessage: "Merci — votre message est prêt à être envoyé.",
    sendError: "Le message n'a pas pu être envoyé. Réessayez.",
    readyMessage: "Formulaire prêt à être connecté à un email ou une API.",
    submitting: "Envoi en cours…",
    submit: "Envoyer le message",
    errors: {
      name: "Veuillez saisir votre nom.",
      email: "Veuillez saisir une adresse email valide.",
      message: "Dites-m'en un peu plus sur le projet.",
    },
  },
  projectSelector: {
    eyebrow: "Par où commence-t-on ?",
    counter: "Que devrions-nous construire ?",
    ctaText: "Choisissez une direction et découvrez ce qu'elle peut devenir.",
    choices: [
      {
        title: "Un produit web",
        copy: "Un site ou une application web moderne, claire et rapide.",
        label: "Application web",
        tags: ["React", "Next.js", "Tailwind CSS"],
      },
      {
        title: "Une application mobile",
        copy: "Une expérience mobile conçue pour iOS et Android.",
        label: "Application mobile",
        tags: ["React Native", "Expo", "iOS & Android"],
      },
      {
        title: "Un produit à améliorer",
        copy: "Un produit existant qui a besoin de nouvelles fonctionnalités, d'un nettoyage ou d'une meilleure interface.",
        label: "Amélioration",
        tags: ["Audit", "Refactor", "Tests"],
      },
    ],
  },
  heroVisual: {
    available: "Disponible",
    location: "Bucarest, Roumanie",
    featuredLabel: "Projet phare",
    craftingLine1: "Je conçois des produits",
    craftingLine2: "numériques qui",
    craftingHighlight: "ont un impact.",
    viewProject: "Voir le projet",
    techStackTitle: "Stack technique",
    mobileLine1: "Des applications mobiles",
    mobileLine2: "que les gens",
    mobileHighlight: "adorent utiliser.",
    downloadsLabel: "Téléchargements",
    ratingLabel: "Note",
    projectsCompletedLabel: "Projets terminés",
  },
  pricing: {
    eyebrow: "Forfaits et tarification",
    titleLine1: "Solutions professionnelles",
    titleEm: "adaptées à tes besoins.",
    packages: [
      {
        title: "Site Web Professionnel",
        price: "Prix personnalisé",
        description: "Discutons tes besoins pour trouver l'investissement qui te convient.",
        features: [
          "Design moderne et responsive",
          "4-6 pages",
          "Optimisation SEO basique",
          "Formulaire de contact fonctionnel",
          "Déploiement sur hébergement",
          "3 mois de support gratuit",
        ],
      },
      {
        title: "Application Web Interactive",
        price: "Prix personnalisé",
        description: "Discutons tes besoins pour trouver l'investissement qui te convient.",
        features: [
          "Design personnalisé",
          "Pages illimitées",
          "Authentification utilisateur",
          "Base de données incluse",
          "Intégrations API",
          "6 mois de support inclus",
        ],
      },
      {
        title: "Application Mobile",
        price: "Prix personnalisé",
        description: "Discutons tes besoins pour trouver l'investissement qui te convient.",
        features: [
          "Application multi-plateforme",
          "Backend complet",
          "Notifications push",
          "Support hors ligne",
          "Stockage cloud",
          "1 an de support et mises à jour",
        ],
      },
    ],
  },
};

const de: Dictionary = {
  nav: {
    items: [
      { id: "top", label: "Start" },
      { id: "story", label: "Geschichte" },
      { id: "pricing", label: "Preise" },
      { id: "contact", label: "Kontakt" },
    ],
    cta: "Projekt starten",
    ariaLabel: "Hauptnavigation",
  },
  hero: {
    available: "Verfügbar für neue Projekte",
    titleLine1: "Lass uns",
    titleEm: "etwas Nützliches bauen.",
    intro:
      "Hallo, ich bin Florin. Ich verwandle Ideen in Web- und Mobile-Anwendungen, die Menschen jeden Tag einfach nutzen können.",
    ctaPrimary: "Projekt starten",
    ctaSecondary: "Wer ich bin",
    checklist: [
      "Responsives Design, für Mobilgeräte optimiert",
      "Sauberer, schneller und wartbarer Code",
      "Klare Kommunikation, ohne kompliziertes Fachchinesisch",
      "Pünktliche Lieferung, jedes Mal",
    ],
    statusAvailable: "verfügbar für Zusammenarbeit",
    scrollHint: "scrollen zum Entdecken",
  },
  story: {
    eyebrow: "Level 1 · Entwicklerprofil",
    titleLine1: "Wer steckt hinter",
    titleEm: "dem Bildschirm?",
    summary:
      "Full-Stack-Entwickler mit über 4 Jahren Erfahrung im Aufbau moderner, skalierbarer und nutzerorientierter Web- und Mobile-Anwendungen.",
    paragraph2:
      "Ich habe außerdem als IT-Projektmanager gearbeitet, was mich gelehrt hat, Projekte über den Bildschirm hinaus zu betrachten: Menschen, Prioritäten, Fristen und das Endergebnis.",
    paragraph3:
      "Ich arbeite sorgfältig, kommuniziere häufig und halte alles klar und verständlich – vom ersten Gespräch bis zum Launch.",
    quoteLead: "Ein Partner.",
    quoteMiddle: "Alles, was du brauchst. Keine Abkürzungen. Keine Kompromisse.",
    quoteHighlight: "Nur Ergebnisse.",
    linkedin: "LinkedIn",
    email: "Email",
    features: [
      {
        title: "Du arbeitest direkt mit mir",
        description: "Keine Zwischenhändler, vom ersten Gespräch bis zum Launch.",
      },
      {
        title: "Sauber. Skalierbar. Sicher.",
        description: "Qualitativ hochwertiger Code, gebaut zum Wachsen und Bestehen.",
      },
      {
        title: "Schnelle Lieferung",
        description: "Effizienter Prozess, klare Planung und pünktliche Lieferung.",
      },
      {
        title: "Klare Kommunikation",
        description:
          "Transparente Updates und reibungslose Zusammenarbeit bei jedem Schritt.",
      },
    ],
    skillsTitle: "Worin ich mich auszeichne",
    skillsSubtitle: "Kernbereiche, in denen ich herausragende Ergebnisse liefere",
    skillsBadge: "EXPERT",
    skills: [
      {
        label: "Frontend & UI/UX",
        description: "Moderne Oberflächen, großartige UX, hohe Performance",
        value: 100,
      },
      {
        label: "Backend & APIs",
        description: "Robuste Systeme, REST/GraphQL, Microservices",
        value: 100,
      },
      {
        label: "Mobile Entwicklung",
        description: "React Native, plattformübergreifend, native Performance",
        value: 100,
      },
      {
        label: "Datenbanken & Architektur",
        description: "SQL/NoSQL, Datenmodellierung, optimierte Abfragen",
        value: 100,
      },
      {
        label: "DevOps & Deployment",
        description: "CI/CD, Docker, Skalierung, Monitoring",
        value: 100,
      },
    ],
    techTitle: "Technologien & Werkzeuge",
    techBadge: "Immer am Lernen",
    ctaText:
      "Ich löse gerne komplexe Probleme und baue Produkte mit echter Wirkung.",
    ctaButton: "Lass uns etwas Großartiges bauen",
  },
  process: {
    eyebrow: "Wie wir arbeiten",
    titleLine1: "Von der Idee,",
    titleEm: "bis zum Launch.",
    steps: [
      {
        title: "Discovery",
        description:
          "Ziele, Nutzer und Rahmenbedingungen verstehen, bevor auch nur eine Zeile Code geschrieben wird.",
      },
      {
        title: "Planung",
        description: "Umfang, Prioritäten und einen realistischen Zeitplan festlegen.",
      },
      {
        title: "Design",
        description:
          "Wireframes und Oberflächen, bei denen Klarheit und Benutzerfreundlichkeit an erster Stelle stehen.",
      },
      {
        title: "Entwicklung",
        description:
          "Sauberer, getesteter Code, gebaut mit den richtigen Werkzeugen für jede Aufgabe.",
      },
      {
        title: "Testing",
        description:
          "E2E- und manuelle Tests, um Probleme zu finden, bevor es Ihre Nutzer tun.",
      },
      {
        title: "Deployment",
        description:
          "Ein reibungsloser Launch mit aktivem Monitoring vom ersten Tag an.",
      },
      {
        title: "Support",
        description: "Fortlaufende Hilfe, Fehlerbehebungen und Verbesserungen nach dem Launch.",
      },
    ],
  },
  contactSection: {
    eyebrow: "Letzter Schritt",
    titleLine1: "Sag mir, wohin",
    titleEm: "du willst.",
    statusLabel: "verfügbar für Zusammenarbeit",
    directContact: "Direkter Kontakt",
    emailLabel: "Email",
    phoneLabel: "Telefon",
    missionInfo:
      "Schreib ein paar Zeilen zu deiner Idee oder dem Produkt, das du verbessern möchtest. Ich melde mich schnell zurück.",
  },
  footer: {
    back: "oben",
  },
  contactForm: {
    nameLabel: "Name",
    namePlaceholder: "Dein Name",
    emailLabel: "Email",
    emailPlaceholder: "du@firma.de",
    messageLabel: "Erzähl mir von deinem Projekt",
    messagePlaceholder: "Was möchtest du bauen oder verbessern?",
    sentMessage: "Danke — deine Nachricht ist bereit zum Versenden.",
    sendError: "Die Nachricht konnte nicht gesendet werden. Bitte versuche es erneut.",
    readyMessage: "Formular bereit zur Anbindung an E-Mail oder eine API.",
    submitting: "Wird gesendet…",
    submit: "Nachricht senden",
    errors: {
      name: "Bitte gib deinen Namen ein.",
      email: "Bitte gib eine gültige E-Mail-Adresse ein.",
      message: "Erzähl mir etwas mehr über das Projekt.",
    },
  },
  projectSelector: {
    eyebrow: "Wo fangen wir an?",
    counter: "Was sollen wir bauen?",
    ctaText: "Wähle eine Richtung und sieh, was daraus werden kann.",
    choices: [
      {
        title: "Ein Webprodukt",
        copy: "Eine moderne, klare und schnelle Website oder Web-App.",
        label: "Web-App",
        tags: ["React", "Next.js", "Tailwind CSS"],
      },
      {
        title: "Eine mobile App",
        copy: "Ein mobiles Erlebnis, entwickelt für iOS und Android.",
        label: "Mobile App",
        tags: ["React Native", "Expo", "iOS & Android"],
      },
      {
        title: "Ein Produkt zum Verbessern",
        copy: "Ein bestehendes Produkt, das neue Funktionen, Aufräumarbeiten oder eine bessere Oberfläche braucht.",
        label: "Verbessern",
        tags: ["Audit", "Refactor", "Tests"],
      },
    ],
  },
  heroVisual: {
    available: "Verfügbar",
    location: "Bukarest, Rumänien",
    featuredLabel: "Vorgestelltes Projekt",
    craftingLine1: "Ich gestalte digitale",
    craftingLine2: "Produkte, die",
    craftingHighlight: "wirklich etwas bewirken.",
    viewProject: "Projekt ansehen",
    techStackTitle: "Tech-Stack",
    mobileLine1: "Mobile Apps,",
    mobileLine2: "die Menschen",
    mobileHighlight: "gerne nutzen.",
    downloadsLabel: "Downloads",
    ratingLabel: "Bewertung",
    projectsCompletedLabel: "Abgeschlossene Projekte",
  },
  pricing: {
    eyebrow: "Pakete und Preise",
    titleLine1: "Professionelle Lösungen",
    titleEm: "maßgeschneidert für deine Bedürfnisse.",
    packages: [
      {
        title: "Professionelle Website",
        price: "Individueller Preis",
        description: "Lass uns deine Bedürfnisse besprechen, um die richtige Investition zu finden.",
        features: [
          "Modernes responsives Design",
          "4-6 Seiten",
          "Basis-SEO-Optimierung",
          "Funktionales Kontaktformular",
          "Hosting-Deployment",
          "3 Monate kostenlos Support",
        ],
      },
      {
        title: "Interaktive Web-App",
        price: "Individueller Preis",
        description: "Lass uns deine Bedürfnisse besprechen, um die richtige Investition zu finden.",
        features: [
          "Custom Design",
          "Unbegrenzte Seiten",
          "Benutzerauthentifizierung",
          "Datenbank enthalten",
          "API-Integrationen",
          "6 Monate Support inklusive",
        ],
      },
      {
        title: "Mobile App",
        price: "Individueller Preis",
        description: "Lass uns deine Bedürfnisse besprechen, um die richtige Investition zu finden.",
        features: [
          "Cross-Platform App",
          "Vollständiges Backend",
          "Push-Benachrichtigungen",
          "Offline-Unterstützung",
          "Cloud-Speicher",
          "1 Jahr Support und Updates",
        ],
      },
    ],
  },
};

const es: Dictionary = {
  nav: {
    items: [
      { id: "top", label: "Inicio" },
      { id: "story", label: "Historia" },
      { id: "pricing", label: "Precios" },
      { id: "contact", label: "Contacto" },
    ],
    cta: "Iniciar un proyecto",
    ariaLabel: "Navegación principal",
  },
  hero: {
    available: "Disponible para nuevos proyectos",
    titleLine1: "Construyamos",
    titleEm: "algo útil.",
    intro:
      "Hola, soy Florin. Transformo ideas en aplicaciones web y móviles que la gente puede usar fácilmente, cada día.",
    ctaPrimary: "Iniciar el proyecto",
    ctaSecondary: "Ver quién soy",
    checklist: [
      "Diseño responsive, adaptado a móviles",
      "Código limpio, rápido y fácil de mantener",
      "Comunicación clara, sin jerga complicada",
      "Entrega puntual, siempre",
    ],
    statusAvailable: "disponible para colaboraciones",
    scrollHint: "desplázate para explorar",
  },
  story: {
    eyebrow: "Nivel 1 · Perfil de desarrollador",
    titleLine1: "Quién está detrás",
    titleEm: "de la pantalla?",
    summary:
      "Desarrollador full stack con más de 4 años de experiencia creando aplicaciones web y móviles modernas, escalables y centradas en el usuario.",
    paragraph2:
      "También he trabajado como IT Project Manager, lo que me enseñó a ver los proyectos más allá de la pantalla: personas, prioridades, plazos y el resultado final.",
    paragraph3:
      "Trabajo con cuidado, me comunico a menudo y mantengo las cosas claras desde la primera conversación hasta el lanzamiento.",
    quoteLead: "Un solo socio.",
    quoteMiddle: "Todo lo que necesitas. Sin atajos. Sin compromisos.",
    quoteHighlight: "Solo resultados.",
    linkedin: "LinkedIn",
    email: "Email",
    features: [
      {
        title: "Trabajas directamente conmigo",
        description: "Sin intermediarios, desde la primera charla hasta el lanzamiento.",
      },
      {
        title: "Limpio. Escalable. Seguro.",
        description: "Código de calidad, construido para crecer y perdurar.",
      },
      {
        title: "Entrega rápida",
        description: "Proceso eficiente, planificación clara y entrega puntual.",
      },
      {
        title: "Comunicación clara",
        description: "Actualizaciones transparentes y una colaboración fluida en cada paso.",
      },
    ],
    skillsTitle: "En qué destaco",
    skillsSubtitle: "Áreas clave donde ofrezco resultados excepcionales",
    skillsBadge: "EXPERT",
    skills: [
      {
        label: "Frontend y UI/UX",
        description: "Interfaces modernas, gran UX, alto rendimiento",
        value: 100,
      },
      {
        label: "Backend y APIs",
        description: "Sistemas robustos, REST/GraphQL, microservicios",
        value: 100,
      },
      {
        label: "Desarrollo móvil",
        description: "React Native, multiplataforma, rendimiento nativo",
        value: 100,
      },
      {
        label: "Bases de datos y arquitectura",
        description: "SQL/NoSQL, modelado de datos, consultas optimizadas",
        value: 100,
      },
      {
        label: "DevOps y despliegue",
        description: "CI/CD, Docker, escalado, monitorización",
        value: 100,
      },
    ],
    techTitle: "Tecnologías y herramientas",
    techBadge: "Siempre aprendiendo",
    ctaText:
      "Me encanta resolver problemas complejos y crear productos con un impacto real.",
    ctaButton: "Construyamos algo increíble",
  },
  process: {
    eyebrow: "Cómo trabajamos",
    titleLine1: "De la idea,",
    titleEm: "al lanzamiento.",
    steps: [
      {
        title: "Descubrimiento",
        description:
          "Entender los objetivos, usuarios y limitaciones antes de escribir una sola línea de código.",
      },
      {
        title: "Planificación",
        description: "Definir el alcance, las prioridades y un cronograma de entrega realista.",
      },
      {
        title: "Diseño",
        description: "Wireframes e interfaces que priorizan la claridad y la usabilidad.",
      },
      {
        title: "Desarrollo",
        description:
          "Código limpio y probado, construido con las herramientas adecuadas para cada necesidad.",
      },
      {
        title: "Pruebas",
        description: "Pruebas E2E y manuales para detectar problemas antes que tus usuarios.",
      },
      {
        title: "Despliegue",
        description:
          "Un lanzamiento sin sobresaltos con monitorización activa desde el primer día.",
      },
      {
        title: "Soporte",
        description: "Ayuda continua, correcciones y mejoras después del lanzamiento.",
      },
    ],
  },
  contactSection: {
    eyebrow: "Último paso",
    titleLine1: "Dime a dónde",
    titleEm: "quieres llegar.",
    statusLabel: "disponible para colaboraciones",
    directContact: "Contacto directo",
    emailLabel: "Email",
    phoneLabel: "Teléfono",
    missionInfo:
      "Escribe algunas líneas sobre la idea o el producto que quieres mejorar. Te responderé pronto.",
  },
  footer: {
    back: "arriba",
  },
  contactForm: {
    nameLabel: "Nombre",
    namePlaceholder: "Tu nombre",
    emailLabel: "Email",
    emailPlaceholder: "tu@empresa.com",
    messageLabel: "Cuéntame sobre el proyecto",
    messagePlaceholder: "¿Qué quieres construir o mejorar?",
    sentMessage: "Gracias — tu mensaje está listo para enviarse.",
    sendError: "No se pudo enviar el mensaje. Inténtalo de nuevo.",
    readyMessage: "Formulario listo para conectarse a un email o una API.",
    submitting: "Enviando…",
    submit: "Enviar mensaje",
    errors: {
      name: "Por favor, introduce tu nombre.",
      email: "Por favor, introduce una dirección de correo válida.",
      message: "Cuéntame un poco más sobre el proyecto.",
    },
  },
  projectSelector: {
    eyebrow: "¿Por dónde empezamos?",
    counter: "¿Qué deberíamos construir?",
    ctaText: "Elige una dirección y descubre en qué puede convertirse.",
    choices: [
      {
        title: "Un producto web",
        copy: "Un sitio o aplicación web moderna, clara y rápida.",
        label: "Aplicación web",
        tags: ["React", "Next.js", "Tailwind CSS"],
      },
      {
        title: "Una aplicación móvil",
        copy: "Una experiencia móvil creada para iOS y Android.",
        label: "Aplicación móvil",
        tags: ["React Native", "Expo", "iOS & Android"],
      },
      {
        title: "Un producto a mejorar",
        copy: "Un producto existente que necesita nuevas funciones, limpieza o una mejor interfaz.",
        label: "Mejorar",
        tags: ["Auditoría", "Refactor", "Pruebas"],
      },
    ],
  },
  heroVisual: {
    available: "Disponible",
    location: "Bucarest, Rumanía",
    featuredLabel: "Proyecto destacado",
    craftingLine1: "Creando productos",
    craftingLine2: "digitales que",
    craftingHighlight: "generan impacto.",
    viewProject: "Ver proyecto",
    techStackTitle: "Stack tecnológico",
    mobileLine1: "Aplicaciones móviles",
    mobileLine2: "que la gente",
    mobileHighlight: "adora usar.",
    downloadsLabel: "Descargas",
    ratingLabel: "Valoración",
    projectsCompletedLabel: "Proyectos completados",
  },
  pricing: {
    eyebrow: "Paquetes y precios",
    titleLine1: "Soluciones profesionales",
    titleEm: "personalizadas para ti.",
    packages: [
      {
        title: "Sitio Web Profesional",
        price: "Precio personalizado",
        description: "Hablemos de tus necesidades para encontrar la inversión adecuada.",
        features: [
          "Diseño moderno y responsive",
          "4-6 páginas",
          "Optimización SEO básica",
          "Formulario de contacto funcional",
          "Despliegue en hosting",
          "3 meses de soporte gratuito",
        ],
      },
      {
        title: "Aplicación Web Interactiva",
        price: "Precio personalizado",
        description: "Hablemos de tus necesidades para encontrar la inversión adecuada.",
        features: [
          "Diseño personalizado",
          "Páginas ilimitadas",
          "Autenticación de usuarios",
          "Base de datos incluida",
          "Integraciones de API",
          "6 meses de soporte incluido",
        ],
      },
      {
        title: "Aplicación Móvil",
        price: "Precio personalizado",
        description: "Hablemos de tus necesidades para encontrar la inversión adecuada.",
        features: [
          "App multiplataforma",
          "Backend completo",
          "Notificaciones push",
          "Soporte sin conexión",
          "Almacenamiento en la nube",
          "1 año de soporte y actualizaciones",
        ],
      },
    ],
  },
};

const it: Dictionary = {
  nav: {
    items: [
      { id: "top", label: "Inizio" },
      { id: "story", label: "Storia" },
      { id: "pricing", label: "Prezzi" },
      { id: "contact", label: "Contatti" },
    ],
    cta: "Inizia un progetto",
    ariaLabel: "Navigazione principale",
  },
  hero: {
    available: "Disponibile per nuovi progetti",
    titleLine1: "Costruiamo",
    titleEm: "qualcosa di utile.",
    intro:
      "Ciao, sono Florin. Trasformo le idee in applicazioni web e mobili che le persone possono usare facilmente, ogni giorno.",
    ctaPrimary: "Inizia il progetto",
    ctaSecondary: "Scopri chi sono",
    checklist: [
      "Design responsive, adattato ai dispositivi mobili",
      "Codice pulito, veloce e facile da mantenere",
      "Comunicazione chiara, senza gergo complicato",
      "Consegna puntuale, ogni volta",
    ],
    statusAvailable: "disponibile per collaborazioni",
    scrollHint: "scorri per esplorare",
  },
  story: {
    eyebrow: "Livello 1 · Profilo sviluppatore",
    titleLine1: "Chi c'è dietro",
    titleEm: "lo schermo?",
    summary:
      "Sviluppatore full stack con oltre 4 anni di esperienza nella creazione di applicazioni web e mobili moderne, scalabili e incentrate sull'utente.",
    paragraph2:
      "Ho anche lavorato come IT Project Manager, il che mi ha insegnato a guardare i progetti oltre lo schermo: persone, priorità, scadenze e il risultato finale.",
    paragraph3:
      "Lavoro con attenzione, comunico spesso e mantengo tutto chiaro dalla prima conversazione fino al lancio.",
    quoteLead: "Un solo partner.",
    quoteMiddle: "Tutto ciò di cui hai bisogno. Senza scorciatoie. Senza compromessi.",
    quoteHighlight: "Solo risultati.",
    linkedin: "LinkedIn",
    email: "Email",
    features: [
      {
        title: "Lavori direttamente con me",
        description: "Nessun intermediario, dalla prima chiacchierata al lancio.",
      },
      {
        title: "Pulito. Scalabile. Sicuro.",
        description: "Codice di qualità, costruito per crescere e durare.",
      },
      {
        title: "Consegna rapida",
        description: "Processo efficiente, pianificazione chiara e consegna puntuale.",
      },
      {
        title: "Comunicazione chiara",
        description: "Aggiornamenti trasparenti e collaborazione fluida in ogni fase.",
      },
    ],
    skillsTitle: "In cosa eccello",
    skillsSubtitle: "Aree chiave in cui offro risultati eccellenti",
    skillsBadge: "EXPERT",
    skills: [
      {
        label: "Frontend e UI/UX",
        description: "Interfacce moderne, ottima UX, alte prestazioni",
        value: 100,
      },
      {
        label: "Backend e API",
        description: "Sistemi robusti, REST/GraphQL, microservizi",
        value: 100,
      },
      {
        label: "Sviluppo mobile",
        description: "React Native, multipiattaforma, prestazioni native",
        value: 100,
      },
      {
        label: "Database e architettura",
        description: "SQL/NoSQL, modellazione dei dati, query ottimizzate",
        value: 100,
      },
      {
        label: "DevOps e deployment",
        description: "CI/CD, Docker, scalabilità, monitoraggio",
        value: 100,
      },
    ],
    techTitle: "Tecnologie e strumenti",
    techBadge: "Sempre in apprendimento",
    ctaText:
      "Amo risolvere problemi complessi e creare prodotti che abbiano un impatto reale.",
    ctaButton: "Costruiamo qualcosa di straordinario",
  },
  process: {
    eyebrow: "Come lavoriamo",
    titleLine1: "Dall'idea,",
    titleEm: "al lancio.",
    steps: [
      {
        title: "Discovery",
        description:
          "Comprendere obiettivi, utenti e vincoli prima di scrivere anche solo una riga di codice.",
      },
      {
        title: "Pianificazione",
        description: "Definire l'ambito, le priorità e una tempistica di consegna realistica.",
      },
      {
        title: "Design",
        description: "Wireframe e interfacce che mettono al primo posto chiarezza e usabilità.",
      },
      {
        title: "Sviluppo",
        description:
          "Codice pulito e testato, costruito con gli strumenti giusti per ogni esigenza.",
      },
      {
        title: "Test",
        description: "Test E2E e manuali per individuare i problemi prima degli utenti.",
      },
      {
        title: "Deployment",
        description: "Un rilascio senza intoppi con monitoraggio attivo fin dal primo giorno.",
      },
      {
        title: "Supporto",
        description: "Assistenza continua, correzioni e miglioramenti dopo il lancio.",
      },
    ],
  },
  contactSection: {
    eyebrow: "Ultimo passo",
    titleLine1: "Dimmi dove",
    titleEm: "vuoi arrivare.",
    statusLabel: "disponibile per collaborazioni",
    directContact: "Contatto diretto",
    emailLabel: "Email",
    phoneLabel: "Telefono",
    missionInfo:
      "Scrivi qualche riga sull'idea o sul prodotto che vuoi migliorare. Ti risponderò presto.",
  },
  footer: {
    back: "su",
  },
  contactForm: {
    nameLabel: "Nome",
    namePlaceholder: "Il tuo nome",
    emailLabel: "Email",
    emailPlaceholder: "tu@azienda.it",
    messageLabel: "Raccontami del progetto",
    messagePlaceholder: "Cosa vuoi costruire o migliorare?",
    sentMessage: "Grazie — il tuo messaggio è pronto per essere inviato.",
    sendError: "Il messaggio non è stato inviato. Riprova.",
    readyMessage: "Modulo pronto per essere collegato a un'email o a un'API.",
    submitting: "Invio in corso…",
    submit: "Invia messaggio",
    errors: {
      name: "Inserisci il tuo nome.",
      email: "Inserisci un indirizzo email valido.",
      message: "Dimmi qualcosa in più sul progetto.",
    },
  },
  projectSelector: {
    eyebrow: "Da dove iniziamo?",
    counter: "Cosa dovremmo costruire?",
    ctaText: "Scegli una direzione e scopri cosa può diventare.",
    choices: [
      {
        title: "Un prodotto web",
        copy: "Un sito o un'applicazione web moderna, chiara e veloce.",
        label: "Applicazione web",
        tags: ["React", "Next.js", "Tailwind CSS"],
      },
      {
        title: "Un'app mobile",
        copy: "Un'esperienza mobile creata per iOS e Android.",
        label: "App mobile",
        tags: ["React Native", "Expo", "iOS & Android"],
      },
      {
        title: "Un prodotto da migliorare",
        copy: "Un prodotto esistente che ha bisogno di nuove funzionalità, pulizia o un'interfaccia migliore.",
        label: "Migliorare",
        tags: ["Audit", "Refactor", "Test"],
      },
    ],
  },
  heroVisual: {
    available: "Disponibile",
    location: "Bucarest, Romania",
    featuredLabel: "Progetto in evidenza",
    craftingLine1: "Creo prodotti",
    craftingLine2: "digitali che",
    craftingHighlight: "hanno un impatto reale.",
    viewProject: "Vedi il progetto",
    techStackTitle: "Stack tecnologico",
    mobileLine1: "App mobili",
    mobileLine2: "che le persone",
    mobileHighlight: "amano usare.",
    downloadsLabel: "Download",
    ratingLabel: "Valutazione",
    projectsCompletedLabel: "Progetti completati",
  },
  pricing: {
    eyebrow: "Pacchetti e prezzi",
    titleLine1: "Soluzioni professionali",
    titleEm: "personalizzate per te.",
    packages: [
      {
        title: "Sito Web Professionale",
        price: "Prezzo personalizzato",
        description: "Parliamo delle tue esigenze per trovare l'investimento giusto per te.",
        features: [
          "Design moderno e responsive",
          "4-6 pagine",
          "Ottimizzazione SEO di base",
          "Modulo di contatto funzionante",
          "Deploy su hosting",
          "3 mesi di supporto gratuito",
        ],
      },
      {
        title: "Applicazione Web Interattiva",
        price: "Prezzo personalizzato",
        description: "Parliamo delle tue esigenze per trovare l'investimento giusto per te.",
        features: [
          "Design personalizzato",
          "Pagine illimitate",
          "Autenticazione utente",
          "Database incluso",
          "Integrazioni API",
          "6 mesi di supporto incluso",
        ],
      },
      {
        title: "Applicazione Mobile",
        price: "Prezzo personalizzato",
        description: "Parliamo delle tue esigenze per trovare l'investimento giusto per te.",
        features: [
          "App multipiattaforma",
          "Backend completo",
          "Notifiche push",
          "Supporto offline",
          "Archiviazione cloud",
          "1 anno di supporto e aggiornamenti",
        ],
      },
    ],
  },
};

export const dictionary = { ro, en, fr, de, es, it } satisfies Record<Locale, Dictionary>;

