"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaDownload, FaTimes, FaFileAlt, FaExternalLinkAlt } from "react-icons/fa";
import { profile } from "@/data/portfolio";

export default function CVModal() {
  const [isOpen, setIsOpen] = useState(false);

  // Phones and tablets can't render PDFs inside a page, so open the file directly there
  const handleOpen = () => {
    if (window.matchMedia("(max-width: 768px), (pointer: coarse)").matches) {
      window.open(profile.cv, "_blank", "noopener,noreferrer");
      return;
    }
    setIsOpen(true);
  };

  // Close on Escape and lock background scroll while open
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setIsOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <button
        onClick={handleOpen}
        className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full border border-gray-600 text-lg font-semibold text-white hover:border-orange-400 hover:text-orange-300 transition-colors"
      >
        <FaFileAlt />
        View CV
      </button>

      {/* Portal to <body> so the hero's animated (transformed) wrappers can't clip the fixed overlay */}
      {isOpen && createPortal(
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 backdrop-blur-xl p-4"
            onClick={() => setIsOpen(false)}
            role="dialog"
            aria-modal="true"
            aria-label={`${profile.name} CV`}
          >
            {/* No scale/translate here: transformed parents make the browser PDF viewer render blank */}
            <div
              className="relative flex flex-col bg-gray-950 border border-gray-800 rounded-2xl overflow-hidden max-w-5xl w-full h-[90vh] shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between gap-4 px-5 py-3 border-b border-gray-800">
                <p className="font-semibold text-white">{profile.name} — CV</p>
                <div className="flex items-center gap-3">
                  <a
                    href={profile.cv}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden sm:inline-flex items-center gap-2 px-4 py-2 border border-gray-700 hover:border-white text-gray-200 font-semibold rounded-full transition-colors"
                  >
                    <FaExternalLinkAlt className="text-sm" />
                    Open in new tab
                  </a>
                  <a
                    href={profile.cv}
                    download="Belaynew-Zewdie-CV.pdf"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500 hover:bg-orange-600 text-black font-semibold rounded-full transition-colors"
                  >
                    <FaDownload />
                    Download
                  </a>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-gray-300 hover:text-white p-2"
                    aria-label="Close CV preview"
                    autoFocus
                  >
                    <FaTimes className="text-xl" />
                  </button>
                </div>
              </div>

              <iframe
                src={`${profile.cv}#view=FitH`}
                title={`${profile.name} CV`}
                className="flex-1 w-full bg-white"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>,
      document.body,
      )}
    </>
  );
}
