export const profile = {
  name: "Florin Neagu",
  role: "Full stack developer (Frontend)",
  location: "Bucharest, Romania",
  email: "neaguf121@gmail.com",
  linkedin: "https://linkedin.com/in/florin-neaguf",
  summary:
    "Full stack developer with 4+ years of experience building modern, scalable, and user-focused web and mobile applications.",
  availability: "Available for thoughtful digital product work",
} as const;

export const services = [
  {
    number: "01",
    title: "Web applications",
    description:
      "Responsive React interfaces built with performance, accessibility, and a clear user experience in mind.",
  },
  {
    number: "02",
    title: "Mobile development",
    description:
      "Cross-platform mobile applications with React Native and Expo, implemented from Figma designs.",
  },
  {
    number: "03",
    title: "Full-stack delivery",
    description:
      "Feature work and ongoing application development across Vue.js, Laravel, MySQL, and REST APIs.",
  },
  {
    number: "04",
    title: "Product improvement",
    description:
      "Legacy maintenance, UI refactoring, bug fixing, and E2E testing that make existing products more dependable.",
  },
] as const;

export const deliveryAreas = [
  {
    eyebrow: "Web & mobile",
    title: "Modern, user-focused application delivery",
    description:
      "React and Tailwind CSS web applications alongside React Native (Expo) mobile applications, with REST API integration and complex frontend state management.",
    tags: ["React", "Tailwind CSS", "React Native", "REST APIs"],
  },
  {
    eyebrow: "Modernisation",
    title: "Improving a legacy product with care",
    description:
      "Maintenance of a Laravel, Vue.js, and MySQL project through bug fixing and UI refactoring, in a Docker-based environment with Cypress E2E testing.",
    tags: ["Laravel", "Vue.js", "MySQL", "Cypress"],
  },
  {
    eyebrow: "Full-stack collaboration",
    title: "Features, fixes, and reliable team delivery",
    description:
      "Web application development and maintenance with Vue.js, Laravel, and MySQL, supported by code reviews, sprint planning, task estimation, Git workflows, and API integration.",
    tags: ["Vue.js", "Laravel", "Git", "Agile / Scrum"],
  },
] as const;

export const technologies = [
  { category: "Frontend", items: ["JavaScript (ES6+)", "React", "React Hooks", "Tailwind CSS", "HTML5", "CSS3", "Vue.js"] },
  { category: "Backend", items: ["PHP", "Laravel", "REST APIs"] },
  { category: "Mobile", items: ["React Native", "Expo"] },
  { category: "Database", items: ["MySQL"] },
  { category: "DevOps / infrastructure", items: ["Docker", "Basic deployment processes"] },
  { category: "Tools & practice", items: ["GitHub / GitLab", "Cypress", "Figma", "Agile / Scrum", "Code reviews"] },
] as const;

export const experience = [
  {
    period: "Apr 2026 — Present",
    title: "Software Engineer",
  },
  {
    period: "Oct 2023 — Apr 2026",
    title: "Frontend Developer | Mobile & Web",
  },
  {
    period: "Aug 2022 — Sep 2023",
    title: "Software Engineer",
  },
  {
    period: "Jan 2016 — Jun 2022",
    title: "IT Project Manager",
  },
] as const;

export const process = ["Discovery", "Planning", "Design", "Development", "Testing", "Deployment", "Support"] as const;
