"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import SectionHeading from "./SectionHeading";
import type { Project } from "@/data/portfolio";

type ProjectsProps = {
  projects: Project[];
};

export default function Projects({ projects }: ProjectsProps) {
  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
      <SectionHeading
        eyebrow="Portfolio"
        title="Featured Projects"
        subtitle="Real, deployed applications — click through to try them live or read the code."
      />

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: (index % 2) * 0.1 }}
            className={`group bg-gray-950/80 border border-gray-800 rounded-3xl overflow-hidden hover:border-orange-500/50 hover:-translate-y-1 transition-all duration-300 flex flex-col ${
              index === 0 ? "md:col-span-2" : ""
            }`}
          >
            <div className={`relative w-full overflow-hidden ${index === 0 ? "h-64 md:h-80" : "h-52"}`}>
              <Image
                src={project.image}
                alt={`Screenshot of ${project.title}`}
                fill
                sizes={index === 0 ? "100vw" : "(max-width: 768px) 100vw, 50vw"}
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {index === 0 && (
                <span className="absolute top-4 left-4 px-3 py-1 bg-orange-500 text-black text-xs font-bold rounded-full uppercase tracking-wide">
                  Featured
                </span>
              )}
            </div>

            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.summary}</p>

              <ul className="space-y-1.5 mb-5 text-gray-400 text-sm">
                {project.highlights.map((h) => (
                  <li key={h} className="flex gap-2">
                    <span className="text-orange-400">▹</span>
                    {h}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 bg-white/5 border border-gray-800 text-gray-300 text-xs font-medium rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-auto flex flex-wrap gap-3">
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-orange-500 hover:bg-orange-600 text-black font-semibold rounded-full transition-colors"
                  >
                    <FaExternalLinkAlt className="text-sm" />
                    Live Demo
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 border border-gray-700 hover:border-white text-gray-200 font-semibold rounded-full transition-colors"
                  >
                    <FaGithub />
                    Source Code
                  </a>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
