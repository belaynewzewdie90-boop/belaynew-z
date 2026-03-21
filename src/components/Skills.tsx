"use client";

import React from "react";
import { motion } from "framer-motion";
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
  FaCloud, // 👈 generic cloud icon for Azure
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiMysql,
  SiExpress,
  SiNextdotjs,
  // SiMicrosoftazure removed – using FaCloud instead
} from "react-icons/si";

const skills = [
  { icon: <FaHtml5 />, name: "HTML5", color: "#e34f26", floatSpeed: 3.2 },
  { icon: <FaCss3Alt />, name: "CSS3", color: "#1572b6", floatSpeed: 3.0 },
  {
    icon: <FaJsSquare />,
    name: "JavaScript",
    color: "#f7df1e",
    floatSpeed: 3.5,
  },
  {
    icon: <SiTailwindcss />,
    name: "Tailwind CSS",
    color: "#38bdf8",
    floatSpeed: 3.1,
  },
  {
    icon: <FaBootstrap />,
    name: "Bootstrap",
    color: "#7952b3",
    floatSpeed: 3.4,
  },
  { icon: <FaReact />, name: "React", color: "#61dafb", floatSpeed: 3.8 },
  { icon: <FaNodeJs />, name: "Node.js", color: "#68a063", floatSpeed: 3.3 },
  {
    icon: <SiExpress />,
    name: "Express.js",
    color: "#ffffff",
    floatSpeed: 3.0,
  },
  { icon: <SiMongodb />, name: "MongoDB", color: "#47a248", floatSpeed: 3.6 },
  { icon: <SiMysql />, name: "MySQL", color: "#4479a1", floatSpeed: 3.2 },
  { icon: <SiNextdotjs />, name: "Next.js", color: "#ffffff", floatSpeed: 3.7 },
  { icon: <FaGitAlt />, name: "Git", color: "#f05032", floatSpeed: 3.1 },
  { icon: <FaLinux />, name: "Linux", color: "#f0f0f0", floatSpeed: 3.4 },
  { icon: <FaAws />, name: "AWS", color: "#ff9900", floatSpeed: 3.5 },
  { icon: <FaDocker />, name: "Docker", color: "#2496ed", floatSpeed: 3.6 },
  { icon: <FaCloud />, name: "Azure", color: "#0078d4", floatSpeed: 3.3 }, // 👈 Azure represented with cloud icon
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-24 md:py-32 px-6 max-w-7xl mx-auto bg-black overflow-hidden"
    >
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/5 via-transparent to-cyan-900/5 pointer-events-none" />

      <div className="relative z-10">
        {/* Section heading with fade-in */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-500 tracking-tight">
            My Skills
          </h2>
          <p className="mt-4 text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            Technologies & platforms I use to build modern, scalable
            applications
          </p>
        </motion.div>

        {/* Skills grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6 md:gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              // Entrance animation
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.04,
                ease: "easeOut",
              }}
              // Continuous floating
              animate={{
                y: [0, -5, 0],
              }}
              transition={{
                y: {
                  duration: skill.floatSpeed,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                },
              }}
              // Hover effects
              whileHover={{
                y: -12,
                scale: 1.12,
                rotateX: 8,
                rotateY: 8,
                boxShadow: `0 25px 40px -15px ${skill.color}80`,
                borderColor: skill.color,
                transition: { type: "spring", stiffness: 400, damping: 10 },
              }}
              className="group relative flex flex-col items-center p-6 bg-black/60 border border-gray-800/50 rounded-2xl backdrop-blur-sm transition-all duration-300"
              style={{
                transformStyle: "preserve-3d",
                perspective: "1000px",
              }}
            >
              {/* Icon with subtle rotation */}
              <motion.div
                animate={{
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: skill.floatSpeed * 1.2,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
                whileHover={{ rotate: 360 }}
                className="text-5xl md:text-6xl mb-4"
                style={{ color: skill.color }}
              >
                {skill.icon}
              </motion.div>

              <span className="text-base md:text-lg font-medium text-gray-300 group-hover:text-white transition-colors duration-300">
                {skill.name}
              </span>

              {/* Glow overlay on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-transparent to-transparent group-hover:from-purple-500/10 group-hover:via-pink-500/10 group-hover:to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
