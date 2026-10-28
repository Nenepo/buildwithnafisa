// ============================================================
// SITE DATA — edit everything here to personalise your portfolio
// ============================================================

export const SITE = {
  name: "buildwithnafisa",
  email: "nafisafaruna@gmail.com",
  url: "https://buildwithnafisa.com",
  github: "https://github.com/Nenepo",
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
    id: "lagousselling",
    type: "Shopify Storefront",
    name: "LagosSelling — Fashion Storefront",
    summary:
      "Online storefront for fashion sneakers, with product discovery, brand navigation, currency selection, and shopping actions.",
    tags: ["Shopify", "E-commerce", "Fashion", "Responsive UI"],
    large: true,
    image:
      "/projects/LagousSelling-Quality-Fashion-Sneakers-in-Nigeria-10-24-2026_04_01_PM.png",
    url: "https://lagousselling.com/",
  },
  {
    id: "mountainwalkerrob",
    type: "WordPress Personal Website",
    name: "MountainWalker Rob — Personal Journey",
    summary:
      "Story-led personal website sharing MountainWalker Rob's journey through outdoor trails, reflective writing, and new directions.",
    tags: ["WordPress", "Personal Website", "Storytelling", "Outdoor"],
    large: false,
    image: "/projects/About-–-Bergloper-Rob-10-24-2026_04_00_PM.png",
    url: "https://mountainwalkerrob.com/about-me",
  },
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

export const CASE_STUDIES = [
  {
    id: "imani-health",
    type: "Healthcare Platform",
    title: "Imani Health — Hospital Management System",
    summary:
      "Building a multi-tenant healthcare platform from scratch, under real-world constraints, with a 4-person remote team.",
    challenge:
      "I walked up to the Imani Health team at a tech summit in Nigeria. They were showcasing a product called YourWay Services, and I told them I liked what they were building. That conversation turned into a full frontend engineering role. What followed was a project that changed direction several times before settling into ImaniMed. The goal was to build a healthcare platform that could serve patients, providers, and organizations at the same time. This system is used to manage care delivery, appointments, records, and hospital operations in a way that is much faster and more organized than paper-heavy manual processes.",
    image: "/projects/imani-med.png",
    liveUrl: "https://www.imanimed.com/",
    metrics: [
      { label: "Role", value: "Frontend Engineer (Lead)" },
      { label: "Timeline", value: "Sep 2025 – Feb 2026" },
      { label: "Team", value: "4 people" },
      { label: "Importance", value: "Core healthcare product" },
    ],
    deliverables: [
      "Built the entire frontend from scratch across approximately 60 screens for a live healthcare workflow",
      "Created a multi-tenant architecture for hospitals, clinics, and pharmacy workflows so different organizations can operate on the same platform safely",
      "Implemented role-based access control for patients, providers, and organizations to protect sensitive healthcare data and reduce operational mistakes",
      "Built telehealth consultation flows using Twilio Video SDK so doctors and patients could consult remotely without friction",
      "Shipped dashboards for patient management, scheduling, provider workflows, and administrative tools that are essential to day-to-day healthcare operations",
    ],
    solution: [
      {
        heading: "Multi-Tenant Architecture",
        body: "Multiple hospitals and organizations run simultaneously on the same platform, each with its own data, staff, and UI context. The frontend dynamically resolves the active organization context and renders the correct UI, data scope, and permissions for that session.",
      },
      {
        heading: "Role-Based Access Control (RBAC)",
        body: "Three primary roles — Patient, Provider, and Organization — each carry different permissions. A doctor sees different screens than a nurse, and a pharmacy admin sees a different set of tools than a hospital owner. I built a scalable RBAC layer to control route access, component visibility, and API interactions based on each user's role and organization context.",
      },
      {
        heading: "Telehealth Feature (Twilio)",
        body: "This was the most technically challenging feature on the project. Using Twilio's video SDK, I built real-time virtual consultation workflows including room creation, join flows, session management, and graceful error handling between doctors and patients.",
      },
    ],
    learnings: [
      "How to architect scalable frontend systems that support multiple user types without the codebase collapsing",
      "How to stay unblocked and keep shipping when the backend is not ready",
      "How to communicate clearly across disciplines — translating API contracts into reliable frontend states",
      "How to maintain code quality and velocity simultaneously under scope changes in a small remote team",
    ],
  },
  {
    id: "hrms-frontend",
    type: "Internal Product",
    title: "HRMS Frontend — Performance, Leave & Review Workflows",
    summary:
      "I led major improvements across performance management, leave management, review cycles, and general UX polish in a production-facing HR system.",
    challenge:
      "The HRMS product had several complex workflows that needed to be production-ready: performance reviews, KPI staging, leave calendars, role-based permissions, and approval flows. The work required balancing product complexity with clarity, accessibility, and reliability. This system is used every day by employees, managers, and HR teams to manage performance, leave, and approvals, so these flows directly affect operational efficiency and employee experience.",
    image: null,
    liveUrl: "",
    metrics: [
      { label: "Role", value: "Frontend Engineer" },
      { label: "Timeline", value: "Jan 2026 – Sep 2026" },
      { label: "Context", value: "Company project" },
      { label: "Importance", value: "Core internal system" },
    ],
    deliverables: [
      "Built a complete KPI selection and review workflow with staging, role-based actions, and contestation flows so performance reviews could be handled in a structured way",
      "Improved review cycle management, including lifecycle states, API integration, and cleaner card UX to support repeatable and accurate review processes",
      "Revamped leave management with calendar views, approval flows, and role-scoped permissions so teams could manage time off without confusion or errors",
      "Improved calendar and pagination usability while reducing data-loss bugs because these issues directly affect trust in internal company tools",
      "Polished appraisal cards and accessibility details for clearer decision-making across managers and employees",
    ],
    solution: [
      {
        heading: "Workflow and Staging",
        body: "I implemented a staging-based KPI process that moved work from saved draft states into a structured review flow. This helped keep reviews more predictable and reduced invalid submissions by adding validation around weights, KPAs, and workflow transitions.",
      },
      {
        heading: "Role-Based UX",
        body: "The system had multiple user types working in the same interface. I built UI logic that scoped actions and visibility by role so employees, managers, and admins only saw what was relevant to them while reducing accidental access to privileged actions.",
      },
      {
        heading: "Accessibility and Clarity",
        body: "I improved the semantics and labeling of core review cards and calendar views so users could clearly understand dates, statuses, durations, and remaining time without confusion. That made the product easier to review and safer to use under pressure.",
      },
    ],
    learnings: [
      "How to design and refine complex business workflows without losing usability",
      "How to build permission-aware interfaces that stay clear and trustworthy",
      "How to make enterprise products feel more reliable through better validation and clearer UI states",
      "How to work with changing backend APIs while keeping the frontend stable and maintainable",
    ],
  },
  {
    id: "introspec-reconciliation",
    type: "Fintech Operations Platform",
    title: "Introspec Reconciliation — Bank Transaction Dashboard",
    summary:
      "Frontend work on a bank reconciliation experience, providing transaction visibility across Union Bank and Zenith Bank integrations.",
    challenge:
      "Bank reconciliation workflows need clear visibility into transaction data across integrations. The interface also needed to support navigation through multiple levels of operational views while staying aligned with backend API contracts.",
    image: null,
    liveUrl: "",
    metrics: [
      { label: "Role", value: "Frontend Developer" },
      { label: "Timeline", value: "Apr 2026 – Present" },
      { label: "Context", value: "ActiveEdge Technologies — Introspec" },
      { label: "Focus", value: "Bank reconciliation" },
    ],
    deliverables: [
      "Developed the reconciliation dashboard for visibility into transaction and reconciliation data across Union Bank and Zenith Bank integrations",
      "Implemented breadcrumb navigation and dynamic URL routing to support deep links across multi-level reconciliation views",
      "Collaborated with backend engineers to align API contracts and data structures for reconciliation workflows",
    ],
    solution: [
      {
        heading: "Transaction Visibility",
        body: "Built a dashboard that brings transaction and reconciliation data from bank integrations into a clear operational view.",
      },
      {
        heading: "Deep-Link Navigation",
        body: "Added breadcrumbs and URL-based routing so users can navigate and return directly to specific levels of reconciliation workflows.",
      },
      {
        heading: "API Alignment",
        body: "Worked with backend engineers on API contracts and data structures to connect the interface with the reconciliation workflows.",
      },
    ],
    learnings: [
      "How clear dashboards support transaction reconciliation across multiple bank integrations",
      "How URL-based navigation improves access to complex operational views",
      "How close API-contract collaboration helps keep fintech interfaces aligned with backend workflows",
    ],
  },
  {
    id: "introspec-settlement",
    type: "Introspec Settlement Platform",
    title: "Introspec Settlement — NICards Workflow & Report Flows",
    summary:
      "I contributed to Introspec's React-based settlement interface, focused on NICards processing, report review, and operational reliability.",
    challenge:
      "Introspec's settlement platform handles sensitive transaction and reporting flows, and the interface needs to stay reliable as business logic and route conditions change. Much of the work centered on stabilizing workflows, route transitions, and reducer-based state behavior for banking operations.",
    image: null,
    liveUrl: "",
    metrics: [
      { label: "Role", value: "Frontend Contributor" },
      { label: "Timeline", value: "Company project" },
      { label: "Focus", value: "Introspec settlement workflows" },
      { label: "Importance", value: "High-risk operations" },
    ],
    deliverables: [
      "Contributed to the NICards settlement and posting detail flows that support the core operational process of reconciliation and review",
      "Improved reporting and file-processing screens for operational clarity so teams could validate settlement records faster and with less confusion",
      "Fixed route and delete-flow issues that caused stale UI states and notifications, which are critical in operational tools where users must trust what they see",
      "Stabilized reducer and state logic to preserve correct data integrity and minimize the chance of bad user actions or state mismatches",
      "Helped maintain codebase hygiene and secure configuration practices so the product remained more reliable and production-aware",
    ],
    solution: [
      {
        heading: "Operational Workflow Support",
        body: "I worked on the trading and settlement screens that support file processing, posting detail review, and settlement reporting. The goal was to keep business operations clear and trustworthy while reducing friction in the day-to-day workflow.",
      },
      {
        heading: "Bug Fixing and State Cleanup",
        body: "A large part of this work was fixing route issues, stale alerts, and state inconsistencies after navigation or delete actions. These are the kinds of details that make an enterprise tool feel stable in real use, and they matter just as much as the visible UI work.",
      },
      {
        heading: "Reliability Mindset",
        body: "I focused on state consistency, reducer integrity, and clean workflows so the interface behaved predictably even under complex operations. That made the system easier to maintain and less likely to break under pressure.",
      },
    ],
    learnings: [
      "How to handle high-stakes business workflows with a strong emphasis on stability",
      "How to debug route and lifecycle issues in real production-style applications",
      "How to improve state predictability in React interfaces with reducer-heavy logic",
      "How to contribute responsibly in fast-moving company environments without sacrificing code quality",
    ],
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
    company: "ActiveEdge Technologies — KorrEdge HRMS",
    location: "Lagos, Nigeria",
    period: "Jan 2026 – Present",
    highlights: [
      "Build and maintain features for a multi-tenant SaaS HR platform serving 10,000+ companies",
      "Implement role-based access across organization, manager, and employee self-service views",
      "Align API contracts and payload structures with backend engineers through sprint reviews",
      "Contribute reusable components with Tailwind CSS and shadcn/ui",
    ],
    tags: ["Next.js", "TypeScript", "Multi-tenant SaaS", "RBAC", "HRMS"],
    url: "#",
  },
  {
    id: "introspec-settlement",
    role: "Frontend Developer",
    company: "ActiveEdge Technologies — Introspec (Interswitch Module)",
    location: "Lagos, Nigeria",
    period: "Apr 2026 – Present",
    highlights: [
      "Build frontend features for a bank settlement platform handling transaction reconciliation for Union Bank and Zenith Bank",
      "Developed the settlement dashboard for visibility into transaction and reconciliation data across bank integrations",
      "Implemented breadcrumbs and dynamic URL routing to support deep links across multi-level views",
      "Collaborate with backend engineers to align API contracts and data structures for fintech workflows",
    ],
    tags: ["React", "Fintech", "Settlement", "API Integration", "Routing"],
    url: "#",
  },
  {
    id: "introspec-reconciliation",
    role: "Frontend Developer",
    company: "ActiveEdge Technologies — Introspec Reconciliation",
    location: "Lagos, Nigeria",
    period: "Apr 2026 – Present",
    highlights: [
      "Built the reconciliation dashboard for visibility into transaction and reconciliation data across Union Bank and Zenith Bank integrations",
      "Implemented breadcrumb navigation and dynamic URL routing to support deep links across multi-level reconciliation views",
      "Collaborate with backend engineers to align API contracts and data structures for bank reconciliation workflows",
    ],
    tags: [
      "React",
      "Fintech",
      "Reconciliation",
      "Bank Integrations",
      "Routing",
    ],
    url: "#",
  },
  {
    id: "fantum-app",
    role: "Contract Frontend Developer",
    company: "Fantum App",
    location: "Remote",
    period: "Mar 2025 – Jul 2025",
    highlights: [
      "Refactored frontend components to improve load performance and long-term maintainability",
      "Streamlined UI flows and shipped iterative product updates",
      "Worked with design and product teammates in a remote cross-functional workflow",
    ],
    tags: ["React", "Performance", "Refactoring", "UI/UX"],
    url: "#",
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
