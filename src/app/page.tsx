"use client";

import GradientBg from "@/components/GradientBg";
import Hero from "@/components/Hero";
import FloatingNavbar from "@/components/FloatingNavbar";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import { FaCode, FaLaptopCode, FaMobileAlt } from "react-icons/fa";

export default function Home() {
  const projects = [
    {
      id: 1,
      title: "Weather App",
      description:
        "Real-time weather companion with city search and dynamic UI.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS"],
      image: "/projects/weather-app.jpg",
      github: "https://github.com/belaynewzewdie90-boop/Weather-App",
      live: "https://belaynewzewdie90-boop.github.io/Weather-App/",
    },
    {
      id: 2,
      title: "MovieDB",
      description: "Movie discovery platform with search and trending posters.",
      tech: ["React", "TypeScript", "Tailwind CSS"],
      image: "/projects/moviedb.jpg",
      github: "https://github.com/belaynewzewdie90-boop/MoveDB",
      live: "https://belaynewzewdie90-boop.github.io/MoveDB/",
    },
    {
      id: 3,
      title: "React Admin Dashboard",
      description: "Admin panel with product management and analytics.",
      tech: ["React", "TypeScript", "Tailwind CSS"],
      image: "/projects/admin-dashboard.jpg",
      github: "https://github.com/belaynewzewdie90-boop/react-admin",
      live: "https://belaynewzewdie90-boop.github.io/react-admin",
    },
    {
      id: 4,
      title: "Job Portal",
      description: "Job listing and posting platform.",
      tech: ["Next.js", "MongoDB", "TypeScript"],
      image: "/projects/job-portal.jpg",
      github: "https://github.com/belaynewzewdie90-boop/Job-Application",
      live: "https://belaynewzewdie90-boop.github.io/Job-Application",
    },
  ];

  return (
    <GradientBg>
      <div id="top">
        <FloatingNavbar />
        <Hero />
      </div>

      {/* About */}
      <section
        id="about"
        className="py-20 px-6 max-w-7xl mx-auto bg-black text-white"
      >
        <About />
      </section>

      {/* Education */}
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

      {/* Services */}
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

      {/* Skills */}
      <section id="skills" className="py-20 px-6 max-w-7xl mx-auto bg-black">
        <Skills />
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="py-20 px-6 max-w-7xl mx-auto bg-gray-900/50"
      >
        <h2 className="text-5xl font-bold text-center mb-10 text-white">
          My Recent Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-black p-6 rounded-2xl border border-gray-800"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-bold text-white">{project.title}</h3>
              <p className="text-gray-300 mt-2">{project.description}</p>
              <p className="text-gray-400 mt-2">
                Tech: {project.tech.join(", ")}
              </p>
              <div className="mt-4 flex gap-4">
                <a
                  href={project.github}
                  className="text-purple-400 hover:text-purple-300"
                >
                  GitHub
                </a>
                <a
                  href={project.live}
                  className="text-purple-400 hover:text-purple-300"
                >
                  View in website
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-6 max-w-7xl mx-auto bg-black">
        <Contact />
      </section>
    </GradientBg>
  );
}
