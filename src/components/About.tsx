"use client";

import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="max-w-6xl mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600">
          About Me
        </h2>
        <p className="text-gray-400 mt-4 text-lg">
          Engineering Precision × Web Development Scale
        </p>
      </motion.div>

      <div className="grid md:grid-cols-12 gap-12 items-center">
        {/* Left Side: Professional Bio */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="md:col-span-7 space-y-6 text-gray-300 text-lg leading-relaxed"
        >
          <p>
            Hello, I’m Belaynew Zewdie. As a dynamic and detail-oriented
            engineer, I bridge the gap between hardware architecture and
            full-stack software development. With deep expertise in
            React/Next.js, the MERN/PERN stack, and DevOps tools like Docker and
            Linux, I focus on building systems that are not only visually
            appealing but structurally robust. My project portfolio ranges from
            interactive personal finance dashboards to advanced enterprise
            systems like a E-ecomerce platform. I am highly adaptable, value
            strong engineering ethics, and excel at collaborating with
            cross-functional teams to streamline development pipelines and
            deliver secure, scalable platforms from start to finish.
          </p>
        </motion.div>

        {/* Right Side: Key Pillars / Stats */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="md:col-span-5 grid grid-cols-1 gap-4"
        >
          <div className="bg-gray-900/50 p-6 rounded-2xl border border-gray-800 hover:border-orange-500/30 transition-all">
            <h4 className="text-orange-400 font-bold text-xl mb-2">
              ⚡ Engineering Core
            </h4>
            <p className="text-gray-400 text-sm">
              A foundation in system routing, signal optimization, and
              programmatic problem-solving.
            </p>
          </div>

          <div className="bg-gray-900/50 p-6 rounded-2xl border border-gray-800 hover:border-purple-500/30 transition-all">
            <h4 className="text-purple-400 font-bold text-xl mb-2">
              🌐 Full-Stack Developer
            </h4>
            <p className="text-gray-400 text-sm">
              Building high-performance user spaces using React.js and Next.js,
              backed by structured APIs.
            </p>
          </div>

          <div className="bg-gray-900/50 p-6 rounded-2xl border border-gray-800 hover:border-pink-500/30 transition-all">
            <h4 className="text-pink-400 font-bold text-xl mb-2">
              🐳 DevOps & Infrastructure.
            </h4>
            <p className="text-gray-400 text-sm">
              Containerizing applications with Docker, managing workflows inside
              Linux environments, and deploying to AWS.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
