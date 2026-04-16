// ============================================================
// SITE DATA — edit everything here to personalise your portfolio
// ============================================================

export const SITE = {
  name: "buildwithnafisa",
  email: "nafisafaruna@gmail.com",
  url: "https://buildwithnafisa.com",
};

export const HERO = {
  eyebrow: "Available for projects",
  headline: ["I build the web", "that ", "works", " for you."], // index 2 is italic+accent
  description:
       "I’m a frontend developer working with Next.js and React, and I build clean, fast websites that don’t just look good, they actually do what they’re supposed to do. I also set up automations with Make.com to help businesses save time and stop doing things manually.",

  stats: [
    { num: "100%", label: "On-time delivery" },
    { num: "5★", label: "Client feedback" },
  ],
  gridCells: [
    {
      icon: "⚡",
      label: "Next.js & React",
      sub: "Fast, clean, scalable builds",
      dark: true,
      hot: false,
    },
    {
      icon: "🤖",
      label: "Automation",
      sub: "I remove repetitive work completely",
      dark: false,
      hot: true,
    },
    {
      icon: "🎨",
      label: "Website builders",
      sub: "Whatever gets the job done, I’ll use it",
      dark: false,
      hot: false,
    },
    {
      icon: "🔗",
      label: "API Integration",
      sub: "Everything connected, no stress",
      dark: true,
      hot: false,
    },
  ],

};

export const STACK_MARQUEE = [
  "Next.js 14",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "Make.com",
  // "Zapier", // Currently focused on Make.com only
  "REST APIs",
  "PostgreSQL",
  "Vercel",
  "Figma",
  "Nestjs",
  "shopify",
  "wordpress",
  "wix",
  "framer",
];

export const SERVICES = [
  {
    num: "01",
    icon: "⚡",
    name: "Web Development",
    desc: "I build fast, responsive websites with Next.js and React. Whether it’s a landing page or a full app, I focus on making it clean, scalable, and actually usable, not just something that looks nice.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind"],
    featured: true,
  },
  {
    num: "02",
    icon: "🤖",
    name: "Workflow Automation",
    desc: "If you’re doing things manually, we can fix that. I design automations that connect your tools and handle repetitive tasks so you don’t have to keep doing the same thing every day.",
    tags: ["Make.com", "Webhooks", "APIs"],
    featured: false,
  },
  {
    num: "03",
    icon: "🔗",
    name: "API & Integration",
    desc: "I connect your systems properly so everything works together. No messy setups, no confusion, just clean integrations that do exactly what you need.",
    tags: ["REST APIs", "Supabase", "Node.js", "PostgreSQL"],
    featured: false,
  },
];

export const PROJECTS = [
  {
    id: "imani-health",
    type: "Web Application",
    name: "Imani Health — Hospital Management System",
    summary:
      "Multi-tenant HMS platform built for healthcare providers. Features patient flows, appointment scheduling, provider dashboards, and role-based access for admins, providers, and staff. Seamless backend integration with clean API structures.",
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "Multi-tenant",
      "Healthcare",
      "APIs",
    ],
    large: true,
    image: "/projects/imani-med.png",
    url: "https://www.imanimed.com/",
  },
  {
    id: "fantum-app",
    type: "Web Application",
    name: "Fantum — Performance & UX Optimization",
    summary:
      "Improved system performance and streamlined UI/UX flow. Refactored components for scalability and efficiency. Collaborated with cross-functional teams to accelerate feature delivery and enhance user experience.",
    tags: ["React", "Performance Optimization",  "Refactoring"],
    large: false,
    image: "/projects/fantum.png",
    url: "https://app.fantum.me/",
  },
  {
    id: "fashbe-automation",
    type: "Automation + Integration",
    name: "FashBe — Google Sheets to Web Sync",
    summary:
      "Dynamic content management system where updating a Google Sheet automatically syncs to the website. Eliminated manual updates and reduced content management workload. Built with Next.js and Google Sheets API integration.",
    tags: ["Next.js", "Google Sheets API", "Automation", "Real-time Sync"],
    large: false,
    image: "/projects/fashbe.png",
    url: "https://fashbe.net/",
  },
  {
    id: "connecting-bridge",
    type: "Portfolio Website",
    name: "The Connecting Bridge — Portfolio Platform",
    summary:
      "Professional portfolio and bridge website showcasing frontend development work. Built with modern web technologies for fast performance and responsive design across all devices.",
    tags: ["Next.js", "React", "Portfolio", "Responsive Design"],
    large: false,
    image: "/projects/tcb.png",
    url: "https://www.theconnectingbridge.ng/",
  },
  {
    id: "cosmetic-calculator",
    type: "Utility Application",
    name: "Cosmetic Price Calculator",
    summary:
      "Interactive calculator tool for cosmetic pricing and calculations. Built as a lightweight, fast utility with clean UI and intuitive user experience.",
    tags: ["React", "Calculator", "Utility", "Interactive"],
    large: false,
    image: "/projects/cosmetic-calc.png",
    url: "https://nenepo.github.io/cosmetic-calculator/",
  },
];

export const PROCESS_STEPS = [
  {
    num: "01",
    icon: "🔍",
    title: "Understand",
    desc: "First, I need to really understand what you’re trying to do, not just what you said, but what you actually need. That way we don’t build the wrong thing.",
  },
  {
    num: "02",
    icon: "📐",
    title: "Plan",
    desc: "Before I touch code, I map everything out, structure, flow, edge cases. It saves time and avoids issues later.",
  },
  {
    num: "03",
    icon: "⚡",
    title: "Build",
    desc: "I build in iterations and keep you updated, so you’re never guessing what’s going on. You’ll always see progress.",
  },
  {
    num: "04",
    icon: "🚀",
    title: "Launch",
    desc: "Once everything is solid, we ship. And I don’t disappear after, I make sure everything keeps running smoothly.",
  },
];

export const PROFESSIONAL_EXPERIENCE = [
  {
    id: "activeedge-intern",
    role: "Frontend Developer Intern",
    company: "ActiveEdge Technologies",
    location: "Lagos, Nigeria",
    period: "Jan 2025 – Dec 2025",
    highlights: [
      "Built HRMS and internal tools to streamline employee and admin workflows",
      "Integrated REST APIs to reduce manual processes and improve efficiency",
      "Improved mobile responsiveness across systems by ~40%",
      "Worked with incomplete backend systems, ensuring stable data handling",
      "Developed reusable components for scalable system design",
    ],
    tags: ["React", "HRMS", "REST APIs", "Responsive Design"],
    url: "#",
  },
  {
    id: "imani-health",
    role: "Frontend Engineer",
    company: "Imani Health (HMS)",
    location: "Remote",
    period: "sept 2025 - feb 2026",
    highlights: [
      "Built a multi-tenant Hospital Management System (HMS)",
      "Implemented patient flows, scheduling, and provider dashboards",
      "Designed role-based access systems (admins, providers, staff)",
      "Collaborated with backend engineers to define API structures",
      "Identified and resolved backend integration gaps early",
    ],
    tags: ["Next.js", "Healthcare", "Multi-tenant", "Dashboard"],
    url: "https://www.imanimed.com/",
  },
  {
    id: "activeedge-hrms",
    role: "Frontend Developer",
    company: "HRMS (ActiveEdge)",
    location: "Lagos, Nigeria",
    period: "2025",
    highlights: [
      "Developed admin dashboards and employee management tools",
      "Integrated backend APIs to automate HR workflows",
      "Improved system usability and layout consistency",
    ],
    tags: ["React", "Admin Dashboard", "HRMS", "APIs"],
    url: "#",
  },
  {
    id: "fantum-app",
    role: "Contract Frontend Developer",
    company: "Fantum App",
    location: "Remote",
    period: "march 2025 - july 2025",
    highlights: [
      "Improved system performance and UI flow",
      "Refactored components for scalability and efficiency",
      "Collaborated with cross-functional teams for faster feature delivery",
    ],
    tags: ["React", "Performance", "Refactoring", "UI/UX"],
    url: "https://app.fantum.me/",
  },
  {
    id: "fashbe-automation",
    role: "Developer",
    company: "FashBe Platform Automation",
    location: "Remote",
    period: "dec 2025",
    highlights: [
      "Built a system where updating a Google Sheet dynamically updates the website",
      "Reduced manual content management workload",
      "Seamless integration between Google Sheets and web platform",
    ],
    tags: ["Next.js", "Google Sheets API", "Automation", "APIs"],
    url: "https://fashbe.net/",
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "Nafisa didn't just build what we asked for — she spotted gaps in our brief and delivered something smarter. The automation she built saved our team 20+ hours a week.",
    name: "Adaeze M.",
    role: "Operations Lead, TechStartup Lagos",
    initials: "AM",
  },
  {
    quote:
      "The Next.js app she built is blazing fast and looks incredible. We've had clients comment on how professional it feels. 100% recommend for anyone serious about quality.",
    name: "Kofi O.",
    role: "Founder, GrowthLab",
    initials: "KO",
  },
  {
    quote:
      "Delivered ahead of schedule, communicated clearly at every step, and the code is clean enough that our in-house team could extend it without any issues.",
    name: "Rachel I.",
    role: "CTO, FinTech Startup",
    initials: "RI",
  },
  {
    quote:
      "I was skeptical about automating our onboarding flow — thought it'd feel impersonal. Nafisa designed something that actually feels more human. Our NPS jumped 18 points.",
    name: "Babatunde T.",
    role: "Head of Product, SaaSCo",
    initials: "BT",
  },
];
