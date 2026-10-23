"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import { profile } from "@/data/portfolio";

const navLinks = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Skills", link: "#skills" },
  { name: "Experience", link: "#experience" },
  { name: "Contact", link: "#contact" },
];

export default function FloatingNavbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  // Highlight the section currently in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    navLinks.forEach(({ link }) => {
      const el = document.querySelector(link);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10"
      aria-label="Main navigation"
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a
          href="#top"
          className="text-2xl font-bold text-white hover:text-orange-300 transition-colors"
        >
          Belaynew<span className="text-orange-400">.Z</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((item) => (
            <a
              key={item.name}
              href={item.link}
              className={`font-medium transition-colors ${
                active === item.link ? "text-orange-400" : "text-gray-300 hover:text-white"
              }`}
            >
              {item.name}
            </a>
          ))}
          <a
            href={profile.cv}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 rounded-full border border-orange-500 text-orange-400 font-semibold hover:bg-orange-500 hover:text-black transition-colors"
          >
            Résumé
          </a>
        </div>

        <button
          onClick={() => setOpen((o) => !o)}
          className="md:hidden text-orange-400 hover:text-orange-300 text-2xl"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden border-t border-white/10 bg-black/95"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.link}
                  onClick={() => setOpen(false)}
                  className="text-gray-200 hover:text-orange-400 text-lg"
                >
                  {item.name}
                </a>
              ))}
              <a
                href={profile.cv}
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-400 font-semibold text-lg"
              >
                Résumé (PDF)
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
