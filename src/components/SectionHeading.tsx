"use client";

import { motion } from "framer-motion";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  subtitle?: string;
};

export default function SectionHeading({ eyebrow, title, subtitle }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center mb-14"
    >
      <p className="text-orange-400 text-sm font-semibold uppercase tracking-[0.2em] mb-3">
        {eyebrow}
      </p>
      <h2 className="text-3xl md:text-5xl font-extrabold text-white">{title}</h2>
      {subtitle && (
        <p className="text-gray-400 mt-4 text-lg max-w-2xl mx-auto">{subtitle}</p>
      )}
    </motion.div>
  );
}
