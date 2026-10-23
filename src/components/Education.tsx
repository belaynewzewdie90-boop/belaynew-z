"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaBriefcase, FaGraduationCap, FaExternalLinkAlt } from "react-icons/fa";
import SectionHeading from "./SectionHeading";
import { timeline } from "@/data/portfolio";

export default function Education() {
  return (
    <section id="experience" className="py-24 px-6 max-w-4xl mx-auto">
      <SectionHeading eyebrow="Background" title="Experience & Education" />

      <ol className="relative border-l border-gray-800 ml-4 space-y-10">
        {timeline.map((item, index) => {
          const Icon = item.type === "work" ? FaBriefcase : FaGraduationCap;
          return (
            <motion.li
              key={item.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="pl-10 relative"
            >
              <span className="absolute -left-5 top-0 flex items-center justify-center w-10 h-10 rounded-full bg-gray-950 border border-orange-500/50 text-orange-400">
                <Icon aria-hidden="true" />
              </span>
              <div className="bg-gray-950/80 border border-gray-800 rounded-2xl p-6 hover:border-orange-500/40 transition-colors">
                <p className="text-sm font-semibold text-orange-400">{item.date}</p>
                <h3 className="text-xl font-bold text-white mt-1">{item.title}</h3>
                <p className="text-gray-300 mt-1">{item.org}</p>
                <p className="text-gray-400 mt-3">{item.description}</p>
                {item.certificate && (
                  <a
                    href={item.certificate}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group mt-5 block"
                  >
                    <div className="relative w-full max-w-md aspect-[1.41] rounded-xl overflow-hidden border border-gray-800 group-hover:border-orange-500/60 transition-colors">
                      <Image
                        src={item.certificate}
                        alt={`${item.title} certificate`}
                        fill
                        sizes="(max-width: 768px) 100vw, 448px"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <span className="mt-3 inline-flex items-center gap-2 text-orange-400 text-sm font-medium">
                      View certificate
                      <FaExternalLinkAlt className="text-xs" />
                    </span>
                  </a>
                )}
              </div>
            </motion.li>
          );
        })}
      </ol>
    </section>
  );
}
