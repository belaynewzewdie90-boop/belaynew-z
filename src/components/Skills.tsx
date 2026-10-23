"use client";

import React from "react";
import { motion } from "framer-motion";
import type { IconType } from "react-icons";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaBootstrap,
  FaLinux,
  FaAws,
  FaDocker,
  FaGitAlt,
  FaGithub,
  FaCloud,
  FaServer,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiMysql,
  SiExpress,
  SiNextdotjs,
  SiTypescript,
  SiPostgresql,
  SiPrisma,
  SiSocketdotio,
  SiSupabase,
  SiVercel,
  SiPython,
  SiDjango,
  SiFastapi,
  SiNginx,
} from "react-icons/si";
import SectionHeading from "./SectionHeading";
import { skillGroups } from "@/data/portfolio";

// Icon + brand colour per skill name used in skillGroups
const skillIcons: Record<string, { icon: IconType; color: string }> = {
  React: { icon: FaReact, color: "#61dafb" },
  "Next.js": { icon: SiNextdotjs, color: "#ffffff" },
  TypeScript: { icon: SiTypescript, color: "#3178c6" },
  JavaScript: { icon: FaJsSquare, color: "#f7df1e" },
  "Tailwind CSS": { icon: SiTailwindcss, color: "#38bdf8" },
  HTML5: { icon: FaHtml5, color: "#e34f26" },
  CSS3: { icon: FaCss3Alt, color: "#1572b6" },
  Bootstrap: { icon: FaBootstrap, color: "#7952b3" },
  "Node.js": { icon: FaNodeJs, color: "#68a063" },
  "Express.js": { icon: SiExpress, color: "#ffffff" },
  Python: { icon: SiPython, color: "#3776ab" },
  Django: { icon: SiDjango, color: "#44b78b" },
  FastAPI: { icon: SiFastapi, color: "#009688" },
  "REST APIs": { icon: FaServer, color: "#f97316" },
  Prisma: { icon: SiPrisma, color: "#ffffff" },
  "Socket.IO": { icon: SiSocketdotio, color: "#ffffff" },
  Supabase: { icon: SiSupabase, color: "#3ecf8e" },
  PostgreSQL: { icon: SiPostgresql, color: "#4169e1" },
  MySQL: { icon: SiMysql, color: "#4479a1" },
  MongoDB: { icon: SiMongodb, color: "#47a248" },
  Docker: { icon: FaDocker, color: "#2496ed" },
  Nginx: { icon: SiNginx, color: "#009639" },
  Git: { icon: FaGitAlt, color: "#f05032" },
  GitHub: { icon: FaGithub, color: "#ffffff" },
  Linux: { icon: FaLinux, color: "#f0f0f0" },
  AWS: { icon: FaAws, color: "#ff9900" },
  Azure: { icon: FaCloud, color: "#0078d4" },
  Vercel: { icon: SiVercel, color: "#ffffff" },
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 max-w-6xl mx-auto">
      <SectionHeading
        eyebrow="Tech stack"
        title="Skills & Tools"
        subtitle="The technologies I use to design, build and ship complete products."
      />

      <div className="grid md:grid-cols-2 gap-6">
        {skillGroups.map((group, groupIndex) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
            className="bg-gray-950/80 border border-gray-800 rounded-3xl p-6"
          >
            <h3 className="text-lg font-bold text-orange-400 uppercase tracking-wider mb-5">
              {group.title}
            </h3>
            <ul className="flex flex-wrap gap-3">
              {group.skills.map((name) => {
                const meta = skillIcons[name];
                const Icon = meta?.icon;
                return (
                  <li
                    key={name}
                    className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-gray-800 rounded-xl text-gray-200 hover:border-gray-600 hover:-translate-y-0.5 transition-all"
                  >
                    {Icon && <Icon className="text-xl" style={{ color: meta.color }} aria-hidden="true" />}
                    <span className="font-medium">{name}</span>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
