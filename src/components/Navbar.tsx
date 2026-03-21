"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About Me", href: "#about" },
  { name: "Education", href: "#education" },
  { name: "Services", href: "#services" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Determine active section
      const sections = navItems.map((item) => item.href.substring(1));
      const current = sections.find((section) => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 px-6 py-3 rounded-full backdrop-blur-md transition-all duration-300 ${
        scrolled
          ? "bg-black/80 border border-gray-800 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <ul className="flex gap-4 md:gap-6 text-sm font-medium">
        {navItems.map((item) => (
          <li key={item.name}>
            <button
              onClick={() => scrollTo(item.href)}
              className={`hover:text-orange-400 transition-colors ${
                activeSection === item.href.substring(1)
                  ? "text-orange-400"
                  : "text-gray-300"
              }`}
            >
              {item.name}
            </button>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
}
