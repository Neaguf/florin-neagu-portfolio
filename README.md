# Florin Neagu | Portfolio & Digital Product Developer

A modern portfolio website built with Next.js to showcase experience, services, projects, and contact information for a full-stack and frontend-focused developer.

## Overview

This project is a personal portfolio and landing page for Florin Neagu, highlighting:

- Software engineering and product development experience
- Web and mobile application expertise
- Delivery process and service offerings
- Responsive, modern UI/UX design
- Multilingual presentation with a contact form

## Features

- Responsive portfolio layout for desktop and mobile
- Modern hero section and interactive presentation
- Services and capability showcase
- Project and experience sections
- Contact form with validation and email delivery
- Multilingual interface support
- Fast frontend performance using Next.js

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion
- React Hook Form + Zod
- Lucide Icons
- Resend email API

## Project Structure

```bash
src/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   ├── robots.ts
│   └── sitemap.ts
├── components/
│   ├── contact-form.tsx
│   ├── device-cutout.tsx
│   ├── hero-visual.tsx
│   ├── hp-bar.tsx
│   ├── language-provider.tsx
│   ├── language-toggle.tsx
│   ├── project-selector.tsx
│   ├── reveal.tsx
│   └── stats-panel.tsx
├── data/
│   ├── profile.ts
│   └── translations.ts
public/
└── images/
```

## Prerequisites

Before running this project, ensure you have the following installed:

- Node.js 20+
- npm or pnpm

## Getting Started

1. Clone the repository

```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo
```

2. Install dependencies

```bash
npm install
```

3. Configure environment variables

Create a `.env.local` file in the root of the project and add the following:

```env
RESEND_API_KEY=your_resend_api_key
RESEND_FROM_EMAIL=onboarding@resend.dev
CONTACT_EMAIL=your_email@example.com
```

4. Run the development server

```bash
npm run dev
```

Open http://localhost:3000 to view the site.

## Available Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
npm run format
```

## Production Build

```bash
npm run build
npm run start
```

## Contact

- Email: neuguf121@gmail.com
- LinkedIn: https://linkedin.com/in/florin-neaguf
- Location: Bucharest, Romania

## About the Author

Florin Neagu is a software developer focused on modern web and mobile product development, with experience spanning frontend engineering, product iteration, and technical collaboration across business and engineering teams.

## License

This project is currently for personal portfolio use and is not distributed under a public license unless explicitly stated otherwise.

---

Built with care for modern digital experiences and product-focused frontend engineering.
