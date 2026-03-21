"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  FaGithub,
  FaLinkedin,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaBootstrap,
} from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiMysql } from "react-icons/si";

const socials = [
  {
    icon: <FaGithub className="text-3xl" />,
    url: "https://github.com/belaynewzewdie90-boop",
    color: "#ffffff",
    label: "GitHub",
  },
  {
    icon: <FaLinkedin className="text-3xl" />,
    url: "https://www.linkedin.com/in/belaynew-zewdie-90",
    color: "#0a66c2",
    label: "LinkedIn",
  },
];

// Icons with their angles (in degrees) and distance from center (in pixels)
const floatingTech = [
  {
    icon: <FaHtml5 />,
    color: "#e34f26",
    name: "HTML",
    angle: 45,
    distance: 200,
    speed: 3,
  },
  {
    icon: <FaCss3Alt />,
    color: "#1572b6",
    name: "CSS",
    angle: 90,
    distance: 200,
    speed: 2.8,
  },
  {
    icon: <SiTailwindcss />,
    color: "#38bdf8",
    name: "Tailwind",
    angle: 135,
    distance: 200,
    speed: 3.2,
  },
  {
    icon: <FaJsSquare />,
    color: "#f0db4f",
    name: "JavaScript",
    angle: 180,
    distance: 200,
    speed: 3.5,
  },
  {
    icon: <FaBootstrap />,
    color: "#7952b3",
    name: "Bootstrap",
    angle: 225,
    distance: 200,
    speed: 3,
  },
  {
    icon: <FaReact />,
    color: "#61dafb",
    name: "React",
    angle: 270,
    distance: 200,
    speed: 3.8,
  },
  {
    icon: <FaNodeJs />,
    color: "#68a063",
    name: "Node.js",
    angle: 315,
    distance: 200,
    speed: 3.6,
  },
  {
    icon: <SiMongodb />,
    color: "#47a248",
    name: "MongoDB",
    angle: 0,
    distance: 200,
    speed: 4,
  },
  {
    icon: <SiMysql />,
    color: "#4479a1",
    name: "MySQL",
    angle: 20,
    distance: 220,
    speed: 3.4,
  }, // slightly farther
];

export default function Hero() {
  const [displayedName, setDisplayedName] = useState("");
  const fullName = "Belaynew Z";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i <= fullName.length) {
        setDisplayedName(fullName.slice(0, i));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 150);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden"
    >
      <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-12 items-center">
        {/* Left: Text */}
        <div className="text-left">
          {/* ... (same as before) */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-orange-400 text-xl md:text-2xl tracking-widest mb-4"
          >
            HI THERE!
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight mb-4"
          >
            I'm{" "}
            <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
              {displayedName}
            </span>
            <span className="animate-blink ml-1 text-7xl">|</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="text-3xl md:text-4xl font-bold text-gray-300 mb-6"
          >
            A Full-Stack Developer
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.6 }}
            className="text-xl md:text-2xl text-gray-300 max-w-xl leading-relaxed mb-8"
          >
            Looking for a React or NEXT.js developer?
            <br />
            I'm open to freelance collaborations!
          </motion.p>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2.2 }}
            className="flex gap-4"
          >
            {socials.map((social, i) => (
              <motion.a
                key={i}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3, scale: 1.1 }}
                className="text-3xl"
                style={{ color: social.color }}
                title={social.label}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Right: Circular profile image with floating skill icons centered around it */}
        <div className="relative flex justify-center items-center h-[500px] w-full">
          {/* Profile image (center) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 1.8 }}
            className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full blur-3xl opacity-20 animate-pulse-slow" />
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white/10 shadow-2xl relative z-10">
              <Image
                src="/hello.jpg"
                alt="Belaynew Z"
                width={320}
                height={320}
                className="object-cover w-full h-full"
                priority
              />
            </div>
          </motion.div>

          {/* Floating skill icons positioned relative to center */}
          {floatingTech.map((tech, i) => {
            const rad = (tech.angle * Math.PI) / 180;
            const x = Math.cos(rad) * tech.distance;
            const y = Math.sin(rad) * tech.distance;

            return (
              <motion.div
                key={i}
                className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  x: x,
                  y: y,
                }}
                transition={{
                  duration: 1.8,
                  delay: 2.5 + i * 0.15,
                  ease: "easeOut",
                }}
              >
                <motion.div
                  animate={{
                    y: [0, -8, 0],
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: tech.speed,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                  }}
                  className="flex flex-col items-center"
                >
                  <div
                    className="text-4xl md:text-5xl"
                    style={{
                      color: tech.color,
                      filter: "drop-shadow(0 0 8px currentColor)",
                    }}
                  >
                    {tech.icon}
                  </div>
                  <span className="mt-1 text-xs md:text-sm font-medium text-gray-300 bg-black/50 px-2 py-0.5 rounded-full">
                    {tech.name}
                  </span>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
