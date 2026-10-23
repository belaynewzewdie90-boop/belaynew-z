"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  FaGithub,
  FaLinkedin,
  FaReact,
  FaNodeJs,
  FaDocker,
  FaArrowRight,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiPostgresql, SiTypescript, SiMongodb } from "react-icons/si";
import CVModal from "./CVModal";
import { profile, highlights } from "@/data/portfolio";

const floatingTech = [
  { icon: <FaReact />, color: "#61dafb", name: "React", angle: 270 },
  { icon: <SiNextdotjs />, color: "#ffffff", name: "Next.js", angle: 315 },
  { icon: <SiTypescript />, color: "#3178c6", name: "TypeScript", angle: 0 },
  { icon: <FaNodeJs />, color: "#68a063", name: "Node.js", angle: 45 },
  { icon: <SiPostgresql />, color: "#4169e1", name: "PostgreSQL", angle: 90 },
  { icon: <SiMongodb />, color: "#47a248", name: "MongoDB", angle: 135 },
  { icon: <FaDocker />, color: "#2496ed", name: "Docker", angle: 180 },
  { icon: <SiTailwindcss />, color: "#38bdf8", name: "Tailwind", angle: 225 },
];

const ORBIT_RADIUS = 210;

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center justify-center px-6 pt-28 pb-16 overflow-hidden"
    >
      <div className="max-w-6xl w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 text-sm font-medium"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
              </span>
              {profile.availability}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl sm:text-6xl font-extrabold leading-tight text-white"
            >
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 bg-clip-text text-transparent">
                {profile.name}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-4 text-2xl md:text-3xl font-bold text-gray-200"
            >
              {profile.role}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 text-lg md:text-xl text-gray-400 max-w-xl leading-relaxed"
            >
              {profile.headline} {profile.summary}
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-4 flex items-center gap-2 text-gray-500"
            >
              <FaMapMarkerAlt className="text-orange-400" />
              {profile.location} · Open to remote
            </motion.p>

            {/* Calls to action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-3 px-7 py-3.5 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 rounded-full text-lg font-semibold text-white shadow-lg shadow-orange-500/30 transition-all"
              >
                View My Work
                <FaArrowRight />
              </a>
              <CVModal />
              <div className="flex gap-4 ml-1">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub profile"
                  className="text-3xl text-gray-300 hover:text-white hover:-translate-y-1 transition-all"
                >
                  <FaGithub />
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn profile"
                  className="text-3xl text-[#0a66c2] hover:-translate-y-1 transition-all"
                >
                  <FaLinkedin />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right: Profile Image & Tech Orbit */}
          <div className="relative flex justify-center items-center h-[340px] sm:h-[520px] w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative z-20"
            >
              <div className="absolute inset-0 bg-orange-500 rounded-full blur-[100px] opacity-20" />
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white/10 shadow-2xl relative z-10">
                <Image
                  src="/hello.jpg"
                  alt={`Portrait of ${profile.name}`}
                  width={320}
                  height={320}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
            </motion.div>

            {/* Orbit is decorative and hidden on small screens where it would overflow */}
            {floatingTech.map((tech, i) => {
              const rad = (tech.angle * Math.PI) / 180;
              const x = Math.cos(rad) * ORBIT_RADIUS;
              const y = Math.sin(rad) * ORBIT_RADIUS;

              return (
                <motion.div
                  key={tech.name}
                  aria-hidden="true"
                  className="hidden sm:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1, x, y }}
                  transition={{ duration: 1, delay: 0.6 + i * 0.08 }}
                >
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 3 + (i % 3) * 0.4, repeat: Infinity, ease: "easeInOut" }}
                    className="flex flex-col items-center"
                  >
                    <div
                      className="text-4xl"
                      style={{ color: tech.color, filter: "drop-shadow(0 0 8px currentColor)" }}
                    >
                      {tech.icon}
                    </div>
                    <span className="mt-1 text-xs font-medium text-gray-300 bg-black/60 px-2 py-0.5 rounded-full">
                      {tech.name}
                    </span>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Quick facts — what a recruiter scans first */}
        <motion.ul
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {highlights.map((item) => (
            <li
              key={item.label}
              className="bg-white/[0.03] border border-gray-800 rounded-2xl p-5 text-center"
            >
              <p className="text-3xl font-extrabold text-orange-400">{item.value}</p>
              <p className="mt-1 text-sm text-gray-400">{item.label}</p>
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
