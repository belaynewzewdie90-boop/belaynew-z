"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import SectionHeading from "./SectionHeading";
import { profile } from "@/data/portfolio";

const inputClass =
  "w-full px-4 py-3 bg-gray-900/50 border border-gray-800 rounded-xl focus:outline-none focus:border-orange-400 text-white placeholder:text-gray-500";

type Status = "idle" | "sending" | "success" | "error";

const emptyForm = { name: "", email: "", message: "", company: "" };

export default function Contact() {
  const [form, setForm] = useState(emptyForm);
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || "Something went wrong.");
      setStatus("success");
      setForm(emptyForm);
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  };

  const contacts = [
    { icon: FaEnvelope, label: profile.email, href: `mailto:${profile.email}` },
    { icon: FaPhone, label: profile.phoneDisplay, href: `tel:${profile.phone}` },
    { icon: FaLinkedin, label: "LinkedIn", href: profile.linkedin },
    { icon: FaGithub, label: "GitHub", href: profile.github },
    { icon: FaMapMarkerAlt, label: profile.location },
  ];

  return (
    <section id="contact" className="py-24 px-6 max-w-5xl mx-auto">
      <SectionHeading
        eyebrow="Contact"
        title="Let's work together"
        subtitle="Hiring for a frontend or full-stack role? I usually reply within 24 hours."
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="grid md:grid-cols-2 gap-8"
      >
        <div className="bg-gray-950/80 border border-gray-800 rounded-3xl p-8">
          <h3 className="text-2xl font-bold text-white mb-6">Reach me directly</h3>
          <ul className="space-y-5">
            {contacts.map(({ icon: Icon, label, href }) => (
              <li key={label} className="flex items-center gap-4">
                <span className="flex items-center justify-center w-11 h-11 rounded-full bg-orange-500/10 text-orange-400 text-lg">
                  <Icon aria-hidden="true" />
                </span>
                {href ? (
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="text-gray-200 hover:text-orange-400 break-all"
                  >
                    {label}
                  </a>
                ) : (
                  <span className="text-gray-200">{label}</span>
                )}
              </li>
            ))}
          </ul>
          <a
            href={`mailto:${profile.email}`}
            className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-black font-bold rounded-full transition-colors"
          >
            <FaEnvelope />
            Email me
          </a>
        </div>

        <div className="bg-gray-950/80 border border-gray-800 rounded-3xl p-8">
          <h3 className="text-2xl font-bold text-white mb-6">Send a message</h3>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <label className="block">
              <span className="sr-only">Your name</span>
              <input
                type="text"
                required
                placeholder="Your name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className={inputClass}
              />
            </label>
            <label className="block">
              <span className="sr-only">Your email</span>
              <input
                type="email"
                required
                placeholder="Your email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className={inputClass}
              />
            </label>
            <label className="block">
              <span className="sr-only">Message</span>
              <textarea
                rows={5}
                required
                minLength={10}
                maxLength={5000}
                placeholder="Tell me about the role or project"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className={inputClass}
              />
            </label>
            {/* Honeypot for spam bots — hidden from people and screen readers */}
            <input
              type="text"
              name="company"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              value={form.company}
              onChange={(e) => setForm({ ...form, company: e.target.value })}
              className="hidden"
            />
            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full px-6 py-3 bg-gradient-to-r from-orange-500 to-yellow-500 text-gray-900 font-bold rounded-xl hover:shadow-lg hover:shadow-orange-500/30 transition-shadow disabled:opacity-60 disabled:cursor-wait"
            >
              {status === "sending" ? "Sending…" : "Send Message"}
            </button>

            <p aria-live="polite" className="text-sm min-h-5">
              {status === "success" && (
                <span className="text-green-400">
                  Thank you! Your message was sent — I&apos;ll get back to you soon.
                </span>
              )}
              {status === "error" && (
                <span className="text-red-400">
                  {error}{" "}
                  <a href={`mailto:${profile.email}`} className="underline">
                    Email me directly
                  </a>
                  .
                </span>
              )}
            </p>
          </form>
        </div>
      </motion.div>
    </section>
  );
}
