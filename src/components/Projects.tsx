"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Weather App",
    description:
      "Real-time weather app with city search, temperature, humidity, and dynamic UI.",
    image: "/images/projects/weather-app.jpg",
    tech: ["Next.js", "TypeScript", "Tailwind", "OpenWeather API"],
    github: "https://github.com/yourusername/weather-app",
    live: "https://weather-app.vercel.app",
  },
  {
    title: "MovieDB",
    description:
      "Movie discovery platform with search for titles, actors, and trending posters.",
    image: "/images/projects/moviedb.jpg",
    tech: ["React", "TypeScript", "Tailwind", "TMDB API"],
    github: "https://github.com/yourusername/moviedb",
    live: "https://moviedb.vercel.app",
  },
  {
    title: "Admin Dashboard",
    description:
      "Admin panel for product management with stock, price, and analytics.",
    image: "/images/projects/admin-dashboard.jpg",
    tech: ["React", "TypeScript", "Tailwind", "Chart.js"],
    github: "https://github.com/yourusername/admin-dashboard",
    live: "https://admin-dashboard.vercel.app",
  },
  {
    title: "Job Portal",
    description:
      "Job listing and posting platform with search and apply functionality.",
    image: "/images/projects/job-portal.jpg",
    tech: ["Next.js", "MongoDB", "TypeScript", "Tailwind"],
    github: "https://github.com/yourusername/job-portal",
    live: "https://job-portal.vercel.app",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600">
          My Projects
        </h2>
        <p className="text-gray-400 mt-4">Personal & Freelance Projects</p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            whileHover={{ y: -8 }}
            className="bg-black/60 border border-gray-800 rounded-3xl overflow-hidden hover:border-orange-500/50 hover:shadow-xl transition-all"
          >
            <div className="relative h-48 w-full">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-purple-600/30 text-purple-300 text-sm rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-300 hover:text-orange-400 transition-colors"
                >
                  <FaGithub /> Code
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-300 hover:text-orange-400 transition-colors"
                >
                  <FaExternalLinkAlt /> view in website
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
