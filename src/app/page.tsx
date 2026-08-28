"use client";

import GradientBg from "@/components/GradientBg";
import Hero from "@/components/Hero";
import FloatingNavbar from "@/components/FloatingNavbar";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Projects from "@/components/Projects";
import { FaCode, FaLaptopCode, FaMobileAlt } from "react-icons/fa";

export type Project = {
  title: string;
  description: string;
  image: string;
  tech: string[];
  github: string;
  live: string;
};

const projects: Project[] = [
  {
    title: "AI-Powered Ethiopian Job Marketplace",
    description:
      "AI-powered job marketplace connecting Ethiopian job seekers with companies. Features job posting, search, candidate profiles, CV management, applications, tracking, recruiter dashboards, and AI-powered matching based on skills, experience, and education.",
    tech: ["Next.js", "Node.js", "Express.js", "PostgreSQL", "Prisma", "AI", "REST API", "Docker"],
    image: "/ai-job.jpg",
    github: "https://github.com/belaynewzewdie90-boop/ai-job-market-place.git",
    live: "https://ai-job-market-place.vercel.app/",
  },
  {
    title: "QR Code-Based Smart Hotel Food Ordering & Management System",
    description:
      "QR-code-based hotel food ordering system for scanning table QR codes, browsing digital menus, and placing orders from phones. Includes Admin, Kitchen, and Store/Inventory modules with automatic inventory deduction and order status tracking.",
    tech: ["React", "Node.js", "Express.js", "PostgreSQL", "Supabase", "QR Code", "REST API"],
    image: "/projects/hotel-system.jpg",
    github: "https://github.com/belaynewzewdie90-boop/Hotel-MGT-Frontend.git",
    live: "https://hotel-mgt-frontend-two.vercel.app/",
  },
  {
    title: "EYTA – Video Watch & Earn Platform",
    description:
      "Platform where users watch assigned videos, earn rewards, and withdraw balances. Includes video management, wallet management, withdrawal requests, admin approval, and user/admin dashboards.",
    tech: ["React", "Vite", "React Router", "Context API", "Node.js", "REST API"],
    image: "/eyta.jpg",
    github: "https://github.com/belaynewzewdie90-boop/Eyta-in-frontend.git",
    live: "https://eyta-in-frontend.vercel.app/",
  },
  {
    title: "MERKATO STORE – Full-Stack E-Commerce",
    description:
      "Full-stack e-commerce platform for product discovery, shopping, ordering, and store management. Features authentication, cart, checkout, order tracking, admin management, real-time communication, and AI-powered product discovery.",
    tech: ["React", "Vite", "Node.js", "Express.js", "PostgreSQL", "MongoDB", "Socket.IO", "AI"],
    image: "/projects/merkato-store.jpg",
    github: "#",
    live: "https://merkato-store-alpha.vercel.app/",
  },
  {
    title: "Cinema Management & Ticket Booking System",
    description:
      "Cinema management and ticket booking platform for managing movies, showtimes, customers, and bookings. Includes customer-facing browsing/booking and admin management with responsive web interface.",
    tech: ["React", "JavaScript", "TypeScript", "REST API", "Backend API", "Database"],
    image: "/cinema-book.jpg",
    github: "https://github.com/belaynewzewdie90-boop/Cinema-System-frontend.git",
    live: "https://cinema-system-frontend.vercel.app/",
  },
];

export default function Home() {
  return (
    <GradientBg>
      <div id="top">
        <FloatingNavbar />
        <Hero />
      </div>

      <section
        id="about"
        className="py-20 px-6 max-w-7xl mx-auto bg-black text-white"
      >
        <About />
      </section>

      <section
        id="education"
        className="py-20 px-6 max-w-7xl mx-auto bg-gray-900/50"
      >
        <h2 className="text-5xl font-bold text-center mb-10 text-white">
          Education
        </h2>
        <div className="bg-black/60 p-8 rounded-2xl border border-gray-800">
          <h3 className="text-3xl font-bold text-white">
            BSc in Electronics and Communication Engineering
          </h3>
          <p className="text-xl text-gray-400 mt-2">2021 – 2025</p>
          <p className="text-lg text-gray-300 mt-4">
            Adama Science and Technology University, Adama, Ethiopia
          </p>
          <p className="text-gray-300 mt-4">
            I am committed to continuous learning and personal growth, equipping
            myself with the skills and knowledge needed to thrive in the
            ever-evolving tech industry. My academic journey has laid a solid
            foundation in software development, problem-solving, and teamwork,
            which I continually build upon through hands-on projects and
            self-guided study.
          </p>
        </div>
      </section>

      <section id="services" className="py-20 px-6 max-w-7xl mx-auto bg-black">
        <h2 className="text-5xl font-bold text-center mb-10 text-white">
          My Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "WEB DESIGN",
              desc: "Crafting visually appealing and user-friendly interfaces.",
              icon: (
                <FaCode className="text-6xl text-orange-500 mx-auto mb-4" />
              ),
            },
            {
              title: "WEB DEVELOPMENT",
              desc: "Building innovative full-stack applications.",
              icon: (
                <FaLaptopCode className="text-6xl text-orange-500 mx-auto mb-4" />
              ),
            },
            {
              title: "RESPONSIVE WEB APP",
              desc: "Consistent experience on any device.",
              icon: (
                <FaMobileAlt className="text-6xl text-orange-500 mx-auto mb-4" />
              ),
            },
          ].map((service) => (
            <div
              key={service.title}
              className="bg-gray-900 p-8 rounded-2xl border border-gray-800 text-center"
            >
              {service.icon}
              <h3 className="text-2xl font-bold text-white mt-4">
                {service.title}
              </h3>
              <p className="text-gray-300 mt-4">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="skills" className="py-20 px-6 max-w-7xl mx-auto bg-black">
        <Skills />
      </section>

      <Projects projects={projects} />

      <section id="contact" className="py-20 px-6 max-w-7xl mx-auto bg-black">
        <Contact />
      </section>
    </GradientBg>
  );
}
