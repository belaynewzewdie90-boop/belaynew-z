"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";

const educationData = [
  {
    date: "Aug-2025",
    title: "Professional Internship Certificate",
    subtitle: "5 months Experience",
    link: "#",
  },
  {
    date: "Nov-2024",
    title: "Certificate-FullStack Development",
    subtitle: "Evangadi Tech Bootcamp",
    link: "#",
  },
  {
    date: "July-2024",
    title: "Bsc In Electronics and communication Engineering",
    subtitle: "Adama Science and Technology University",
    link: "#",
  },
  {
    date: "Oct-2023",
    title: "Certificate-Networking",
    subtitle: "Addis Ababa University",
    link: "#",
  },
  {
    date: "Oct-2019, Sep-2021 & Oct-2022",
    title: "Multiple Certificates",
    subtitle: "Various Achievements",
    link: "#",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-20 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600">
          Education
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {educationData.map((item, index) => (
          <motion.a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -8 }}
            className="group bg-black/60 border border-gray-800 rounded-2xl p-6 hover:border-orange-500/50 hover:shadow-xl transition-all duration-300"
          >
            <div className="text-sm text-orange-400 mb-2">{item.date}</div>
            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">
              {item.title}
            </h3>
            <p className="text-gray-400 text-sm mb-4">{item.subtitle}</p>
            <div className="flex items-center text-orange-400 text-sm font-medium">
              Click to view certificate
              <FaExternalLinkAlt className="ml-2 text-xs" />
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
