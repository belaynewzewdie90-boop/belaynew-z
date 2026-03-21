"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaLaptopCode, FaMobileAlt } from "react-icons/fa";

const services = [
  {
    icon: <FaCode className="text-5xl" />,
    title: "WEB DESIGN",
    description:
      "Crafting visually appealing and user-friendly interfaces to enhance online experiences.",
  },
  {
    icon: <FaLaptopCode className="text-5xl" />,
    title: "WEB DEVELOPMENT",
    description:
      "Building innovative full-stack applications that deliver seamless functionality.",
  },
  {
    icon: <FaMobileAlt className="text-5xl" />,
    title: "RESPONSIVE WEB APP",
    description:
      "Creating responsive web applications that provide a consistent user experience on any device.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600">
          My Services
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            whileHover={{ y: -8 }}
            className="bg-black/60 border border-gray-800 rounded-3xl p-8 text-center hover:border-orange-500/50 hover:shadow-xl transition-all duration-300"
          >
            <div className="text-orange-400 mb-4">{service.icon}</div>
            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-orange-400">
              {service.title}
            </h3>
            <p className="text-gray-400">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
