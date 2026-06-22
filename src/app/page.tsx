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
    title: "Hybrid-Cloud Edge Synchronization Engine",
    description:
      "Enterprise network resilience system localized to manage data state stability and sync to central cloud networks post-outages.",
    tech: ["Node.js", "Docker", "Linux CLI", "PostgreSQL", "Edge Caching"],
    image: "/projects/hybrid-cloud.jpg",
    github: "https://github.com/belaynewzewdie90-boop/hybrid-cloud-sync",
    live: "https://github.com/belaynewzewdie90-boop/hybrid-cloud-sync",
  },
  {
    title: "Merkato Store App",
    description:
      "Robust, secure retail e-commerce application built to digitize brick-and-mortar storefronts with dynamic checkout pipelines.",
    tech: ["React.js", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    image: "/projects/merkato-store.jpg",
    github: "https://github.com/belaynewzewdie90-boop/merkato-store",
    live: "https://merkato-store.vercel.app",
  },
  {
    title: "Hotel Management & Food Order System",
    description:
      "High-performance management engine tracking room bookings, restaurant culinary arrays, and live real-time metrics.",
    tech: ["React.js", "Node.js", "Express", "PostgreSQL", "Prisma ORM"],
    image: "/projects/hotel-system.jpg",
    github: "https://github.com/belaynewzewdie90-boop/hotel-management",
    live: "https://hotel-management.vercel.app",
  },
  {
    title: "Expense Tracker Dashboard",
    description:
      "A modern, high-performance personal finance tracking web application with live UI updates and responsive budget layouts.",
    tech: ["React.js", "Vite", "Tailwind CSS v4", "JavaScript"],
    image: "/projects/expense-tracker.jpg",
    github: "https://github.com/belaynewzewdie90-boop/expense-tracker",
    live: "https://expense-tracker.vercel.app",
  },
  {
    title: "MovieDB",
    description:
      "Movie discovery platform with search mechanisms and trending layouts.",
    tech: ["React", "JavaScript", "CSS", "TMDB API"],
    image: "/projects/moviedb.jpg",
    github: "https://github.com/belaynewzewdie90-boop/MoveDB",
    live: "https://belaynewzewdie90-boop.github.io/MoveDB/",
  },
  {
    title: "Weather App",
    description:
      "Real-time weather companion built with localized geographical API parsing and dynamic layouts.",
    tech: ["HTML", "JavaScript", "CSS", "OpenWeather API"],
    image: "/projects/weather-app.jpg",
    github: "https://github.com/belaynewzewdie90-boop/Weather-App",
    live: "https://belaynewzewdie90-boop.github.io/Weather-App/",
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
