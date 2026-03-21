"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaDownload,
  FaTimes,
  FaArrowRight,
  FaExclamationTriangle,
} from "react-icons/fa";

export default function CVModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [pdfError, setPdfError] = useState(false);

  const handleIframeError = () => {
    setPdfError(true);
  };

  return (
    <>
      {/* Trigger Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        whileHover={{
          scale: 1.05,
          boxShadow: "0 0 30px rgba(249, 115, 22, 0.5)",
        }}
        whileTap={{ scale: 0.95 }}
        className="inline-flex items-center gap-4 px-10 py-5 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 rounded-full text-xl font-medium shadow-xl shadow-orange-500/30 transition-all"
      >
        PREVIEW my CV
        <FaArrowRight className="text-2xl" />
      </motion.button>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-xl p-4"
            onClick={() => {
              setIsOpen(false);
              setPdfError(false); // reset error on close
            }}
          >
            <motion.div
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 50 }}
              transition={{ type: "spring", damping: 20, stiffness: 300 }}
              className="relative bg-black/70 backdrop-blur-2xl border border-gray-800/50 rounded-2xl overflow-hidden max-w-5xl w-full h-[90vh] shadow-2xl shadow-purple-500/30"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                onClick={() => {
                  setIsOpen(false);
                  setPdfError(false);
                }}
                className="absolute top-4 right-4 z-20 bg-black/60 text-white p-3 rounded-full hover:bg-black/80 transition"
              >
                <FaTimes className="text-xl" />
              </motion.button>

              {/* PDF Viewer with Error Handling */}
              {!pdfError ? (
                <iframe
                  src="/cv.pdf"
                  className="w-full h-full border-none"
                  title="Belaynew Zewdie CV"
                  onError={handleIframeError}
                />
              ) : (
                <div className="flex flex-col items-center justify-center h-full text-center p-8">
                  <FaExclamationTriangle className="text-6xl text-orange-500 mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">
                    PDF Preview Unavailable
                  </h3>
                  <p className="text-gray-400 mb-6">
                    The PDF could not be displayed. Please download it directly.
                  </p>
                  <motion.a
                    href="/cv.pdf"
                    download="Belaynew-Zewdie-CV.pdf"
                    whileHover={{ scale: 1.05 }}
                    className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded-full shadow-xl"
                  >
                    <FaDownload className="text-xl" />
                    Download CV
                  </motion.a>
                </div>
              )}

              {/* Download Button (always visible) */}
              <motion.a
                href="/cv.pdf"
                download="Belaynew-Zewdie-CV.pdf"
                whileHover={{ scale: 1.05 }}
                className="absolute bottom-6 left-1/2 transform -translate-x-1/2 px-10 py-5 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded-full text-lg shadow-xl shadow-purple-500/30 hover:shadow-purple-500/60 transition-all flex items-center gap-3"
              >
                <FaDownload className="text-xl" />
                Download CV
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
