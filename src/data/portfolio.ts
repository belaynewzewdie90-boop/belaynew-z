// Single source of truth for portfolio content. Edit text here, not in components.

export const profile = {
  name: "Belaynew Zewdie",
  role: "Full-Stack Developer",
  headline: "I build production-ready web apps with React, Next.js & Node.js.",
  summary:
    "Electronics & Communication Engineer turned full-stack developer. I design, build and deploy complete products — from database schema and REST APIs to responsive, accessible interfaces.",
  location: "Addis Ababa, Ethiopia",
  email: "belaynewzewdie90@gmail.com",
  phone: "+251954454027",
  phoneDisplay: "+251 954 454 027",
  github: "https://github.com/belaynewzewdie90-boop",
  linkedin: "https://www.linkedin.com/in/belaynew-zewdie-65574633a/",
  // Filename has spaces, so it must stay URL-encoded
  cv: "/BELAYNEW%20ZEWDIE%20Resume%20soft.pdf",
  availability: "Open to full-time & remote roles",
};

export const highlights = [
  { value: "6+", label: "Full-stack apps deployed live" },
  { value: "3 roles", label: "Developer · DevOps · AI trainer" },
  { value: "BSc", label: "Electronics & Communication Eng." },
  { value: "20+", label: "Technologies in daily use" },
];

export type Project = {
  title: string;
  summary: string;
  highlights: string[];
  image: string;
  tech: string[];
  github?: string;
  live?: string;
};

export const projects: Project[] = [
  {
    title: "Tame Digital Equb — Live Savings Platform",
    summary:
      "Production platform that digitises the traditional Ethiopian equb: members save together and every draw happens on a live wheel that all members can watch.",
    highlights: [
      "Live, transparent draw wheel with every result recorded",
      "Member registration, login and payment flow",
      "Running in production on its own domain: tamedigitalequb.com",
    ],
    tech: ["React", "Node.js", "REST API", "Payments"],
    image: "/tamedigitalequb.jpg",
    live: "https://tamedigitalequb.com",
  },
  {
    title: "AI-Powered Job Marketplace",
    summary:
      "Hiring platform connecting Ethiopian job seekers with companies, with AI matching on skills, experience and education.",
    highlights: [
      "Recruiter dashboards, job posting, search and application tracking",
      "Candidate profiles with CV management",
      "Containerised with Docker; PostgreSQL via Prisma ORM",
    ],
    tech: ["Next.js", "Node.js", "Express.js", "PostgreSQL", "Prisma", "Docker", "AI"],
    image: "/ai-job.jpg",
    github: "https://github.com/belaynewzewdie90-boop/ai-job-market-place",
    live: "https://ai-job-market-place.vercel.app/",
  },
  {
    title: "Smart Hotel QR Ordering & Management",
    summary:
      "Guests scan a table QR code, browse a digital menu and order from their phone — no app install needed.",
    highlights: [
      "Separate Admin, Kitchen and Store/Inventory modules",
      "Automatic inventory deduction on every order",
      "Live order-status tracking from kitchen to table",
    ],
    tech: ["React", "Node.js", "Express.js", "PostgreSQL", "Supabase", "REST API"],
    image: "/projects/hotel-system.jpg",
    github: "https://github.com/belaynewzewdie90-boop/Hotel-MGT-Frontend",
    live: "https://hotel-mgt-frontend-two.vercel.app/",
  },
  {
    title: "MERKATO STORE — E-Commerce Platform",
    summary:
      "Full-stack store covering product discovery, cart, checkout, order tracking and store administration.",
    highlights: [
      "Authentication, cart and checkout flow",
      "Real-time communication with Socket.IO",
      "AI-assisted product discovery",
    ],
    tech: ["React", "Vite", "Node.js", "Express.js", "PostgreSQL", "MongoDB", "Socket.IO"],
    image: "/projects/merkato-store.jpg",
    live: "https://merkato-store-alpha.vercel.app/",
  },
  {
    title: "EYTA — Watch & Earn Platform",
    summary:
      "Users watch assigned videos, earn rewards and withdraw their balance, with admin approval of payouts.",
    highlights: [
      "Wallet and withdrawal-request workflow",
      "Video management for admins",
      "Separate user and admin dashboards",
    ],
    tech: ["React", "Vite", "React Router", "Context API", "Node.js", "REST API"],
    image: "/eyta.jpg",
    github: "https://github.com/belaynewzewdie90-boop/Eyta-in-frontend",
    live: "https://eyta-in-frontend.vercel.app/",
  },
  {
    title: "Cinema Management & Ticket Booking",
    summary:
      "Cinema platform for managing movies, showtimes and customers, with online seat booking.",
    highlights: [
      "Customer browsing and booking flow",
      "Admin management of movies and showtimes",
      "Fully responsive interface",
    ],
    tech: ["React", "TypeScript", "REST API"],
    image: "/cinema-book.jpg",
    github: "https://github.com/belaynewzewdie90-boop/Cinema-System-frontend",
    live: "https://cinema-system-frontend.vercel.app/",
  },
];

export type TimelineItem = {
  date: string;
  title: string;
  org: string;
  description: string;
  type: "work" | "education";
  certificate?: string;
};

export const timeline: TimelineItem[] = [
  {
    date: "May 2026 – Aug 2026",
    title: "Web & Enterprise Application Development Bootcamp",
    org: "EASE-QIYAS · Ministry of Labor and Skills, World Bank & Selam Technical and Vocational College",
    description:
      "Completed theoretical and practical training in web and enterprise application development in Addis Ababa.",
    type: "education",
    certificate: "/Certificate.jpg",
  },
  {
    date: "2025 – Present",
    title: "Full-Stack Developer, DevOps Engineer & AI Engineering Trainer",
    org: "Self-employed",
    description:
      "Design, build and deploy full-stack web applications end to end, manage Docker and Linux-based deployments, and train learners in AI engineering.",
    type: "work",
  },
  {
    date: "2026",
    title: "AI Model Development and Implementation",
    org: "Florida University",
    description:
      "Training in building, training and integrating AI models into real-world applications.",
    type: "education",
  },
  {
    date: "2026",
    title: "UI/UX Design",
    org: "Ayrese Techshow PLC",
    description: "User research, wireframing, prototyping and user-centred interface design.",
    type: "education",
  },
  {
    date: "2021 – 2025",
    title: "BSc, Electronics & Communication Engineering",
    org: "Adama Science and Technology University",
    description:
      "Strong foundation in systems thinking, signal processing, networking and programmatic problem-solving.",
    type: "education",
  },
];

export const skillGroups = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "HTML5", "CSS3", "Bootstrap"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "Python", "Django", "FastAPI", "REST APIs", "Prisma", "Socket.IO", "Supabase"],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MySQL", "MongoDB"],
  },
  {
    title: "DevOps & Tools",
    skills: ["Docker", "Nginx", "Git", "GitHub", "Linux", "AWS", "Azure", "Vercel"],
  },
];

export const strengths = [
  {
    title: "End-to-end delivery",
    description:
      "I take features from database schema to API to UI to deployment — and ship them live.",
  },
  {
    title: "Engineering mindset",
    description:
      "An engineering degree taught me to reason about systems, trade-offs and reliability, not just code.",
  },
  {
    title: "Teacher & communicator",
    description:
      "As an AI engineering trainer I explain complex ideas clearly — a skill that makes me a strong teammate.",
  },
];
