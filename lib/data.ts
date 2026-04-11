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
    "Website Developer specialising in Next.js, React, and intelligent automation with Make.com — turning complex requirements into polished, production-ready products.", // Currently focusing on frontend mastery
  stats: [
    { num: "30+", label: "Projects delivered" },
    { num: "100%", label: "On-time delivery" },
    { num: "5★", label: "Client rating" },
  ],
  gridCells: [
    {
      icon: "⚡",
      label: "Next.js & React",
      sub: "Performant web apps",
      dark: true,
      hot: false,
    },
    {
      icon: "🤖",
      label: "Automation",
      sub: "Make.com workflows", // Currently using Make.com only
      dark: false,
      hot: true,
    },
    {
      icon: "🎨",
      label: "Website builders",
      sub: "Whatever tool is needed to get the job done, trust that thats no problem",
      dark: false,
      hot: false,
    },
    {
      icon: "🔗",
      label: "API Integration",
      sub: "Connect everything",
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
    desc: "Fast, scalable web applications built with Next.js and React. From landing pages to complex frontends — production-grade, always.", // Currently focusing on frontend
    tags: ["Next.js", "React", "TypeScript", "Tailwind"],
    featured: true,
  },
  {
    num: "02",
    icon: "🤖",
    name: "Workflow Automation",
    desc: "Kill the manual work. I design and build automation systems that connect your tools, trigger actions, and free your team to focus on what matters.",
    tags: ["Make.com", "Webhooks", "APIs"], // Currently using Make.com for automation
    featured: false,
  },
  {
    num: "03",
    icon: "🔗",
    name: "API & Integration",
    desc: "Seamlessly connect your services, databases, and third-party tools. Clean APIs, reliable data pipelines, zero headaches.",
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
    title: "Discover",
    desc: "We start with a deep-dive into your goals, existing stack, and pain points. No templates — every solution is scoped to your exact needs.",
  },
  {
    num: "02",
    icon: "📐",
    title: "Design",
    desc: "Architecture first, then UI. I map out the technical plan, review it with you, and only write code once we're aligned.",
  },
  {
    num: "03",
    icon: "⚡",
    title: "Build",
    desc: "Fast, iterative development with regular check-ins. You see progress weekly — no disappearing acts, no surprises at launch.",
  },
  {
    num: "04",
    icon: "🚀",
    title: "Launch & Support",
    desc: "Deployment, testing, and handover docs included. I don't disappear post-launch — I'm here to ensure everything runs smoothly.",
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
