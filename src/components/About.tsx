"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";
import SectionHeading from "./SectionHeading";
import { profile, strengths } from "@/data/portfolio";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-6xl mx-auto">
      <SectionHeading
        eyebrow="About me"
        title="Engineer by training, developer by craft"
      />

      <div className="grid md:grid-cols-12 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="md:col-span-5 flex justify-center"
        >
          <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-2xl overflow-hidden border-4 border-gray-800 shadow-2xl">
            <Image
              src="/belay.jpg"
              alt={profile.name}
              fill
              sizes="(max-width: 768px) 288px, 320px"
              className="object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="md:col-span-7 space-y-5 text-gray-300 text-lg leading-relaxed"
        >
          <p>
            I&apos;m <strong className="text-white">{profile.name}</strong>, a
            Full-Stack Software Developer and AI Engineering Trainer with a BSc
            in Electronics &amp; Communication Engineering from Adama Science
            and Technology University.
          </p>
          <p>
            I specialize in building responsive, scalable web applications
            using{" "}
            <span className="text-white">
              React.js, Next.js, Node.js, Express.js, Python, Django, and
              FastAPI
            </span>
            . My experience includes database management with{" "}
            <span className="text-white">PostgreSQL and MongoDB</span>, REST API
            development, and application deployment. I&apos;m also expanding my
            DevOps skills with{" "}
            <span className="text-white">Linux, Docker, and Nginx</span>.
          </p>
          <p>
            I&apos;ve developed projects including{" "}
            <span className="text-white">Tamrat Digital Equb</span>,{" "}
            <span className="text-white">LivePlays</span>, an AI-powered job
            marketplace, a QR-based hotel ordering system, and an e-commerce
            platform.
          </p>
          <p>
            I&apos;m passionate about solving real-world problems through
            technology, writing maintainable code, and continuously improving my
            skills to build reliable digital solutions.
          </p>
        </motion.div>
      </div>

      <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-5">
        {strengths.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-gray-900/50 p-6 rounded-2xl border border-gray-800 hover:border-orange-500/40 transition-colors"
          >
            <h3 className="flex items-center gap-2 text-white font-bold text-xl mb-2">
              <FaCheckCircle className="text-orange-400" />
              {item.title}
            </h3>
            <p className="text-gray-400">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
