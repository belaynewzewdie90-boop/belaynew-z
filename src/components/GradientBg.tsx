// src/components/GradientBg.tsx
"use client";

import React, { useCallback } from "react";
import { motion, useMotionValue, useMotionTemplate } from "framer-motion";

interface GradientBgProps {
  children: React.ReactNode;
  className?: string;
}

export default function GradientBg({
  children,
  className = "",
}: GradientBgProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
    },
    [mouseX, mouseY],
  );

  const primaryGradient = useMotionTemplate`
    radial-gradient(
      800px circle at ${mouseX}px ${mouseY}px,
      rgba(139, 92, 246, 0.2),
      rgba(59, 130, 246, 0.1),
      transparent 70%
    )
  `;

  const secondaryGradient = useMotionTemplate`
    radial-gradient(
      1000px circle at ${mouseX}px ${mouseY}px,
      rgba(236, 72, 153, 0.08),
      transparent 80%
    )
  `;

  return (
    <div
      className={`relative min-h-screen w-full overflow-hidden bg-black ${className}`}
      onMouseMove={handleMouseMove}
      suppressHydrationWarning // 👈 Ignores extra attributes from extensions
    >
      {/* Solid black background */}
      <div className="absolute inset-0 bg-black z-0" />

      {/* Interactive gradients */}
      <motion.div
        className="absolute inset-0 pointer-events-none z-10"
        style={{ background: primaryGradient }}
      />
      <motion.div
        className="absolute inset-0 pointer-events-none z-10 opacity-60"
        style={{ background: secondaryGradient }}
      />

      {/* Content */}
      <div className="relative z-20 min-h-screen">{children}</div>
    </div>
  );
}
