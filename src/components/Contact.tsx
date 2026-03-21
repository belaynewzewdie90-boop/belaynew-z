"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600">
          Get In Touch
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="grid md:grid-cols-2 gap-8"
      >
        <div className="bg-black/60 border border-gray-800 rounded-3xl p-8">
          <h3 className="text-2xl font-bold text-white mb-6">Contact Info</h3>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-orange-400 text-xl" />
              <a
                href="mailto:your.email@example.com"
                className="text-gray-300 hover:text-orange-400"
              >
                belaynewzewdie90@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-4">
              <FaPhone className="text-orange-400 text-xl" />
              <a
                href="tel:+1234567890"
                className="text-gray-300 hover:text-orange-400"
              >
                +251 954 454 027
              </a>
            </div>
            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-orange-400 text-xl" />
              <span className="text-gray-300">Addis Ababa, Ethiopia</span>
            </div>
          </div>
        </div>

        <div className="bg-black/60 border border-gray-800 rounded-3xl p-8">
          <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 bg-gray-900/50 border border-gray-800 rounded-xl focus:outline-none focus:border-orange-400 text-white"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 bg-gray-900/50 border border-gray-800 rounded-xl focus:outline-none focus:border-orange-400 text-white"
            />
            <textarea
              rows={4}
              placeholder="Your Message"
              className="w-full px-4 py-3 bg-gray-900/50 border border-gray-800 rounded-xl focus:outline-none focus:border-orange-400 text-white"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-gradient-to-r from-orange-500 to-yellow-500 text-gray-900 font-bold rounded-xl hover:shadow-lg transition-shadow"
            >
              Send Message
            </button>
          </form>
        </div>
      </motion.div>
    </section>
  );
}
