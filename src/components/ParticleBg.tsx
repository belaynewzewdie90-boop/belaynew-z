"use client";

import dynamic from "next/dynamic";

// Dynamically import Particles with SSR disabled
const Particles = dynamic(() => import("@tsparticles/react"), { ssr: false });

export default function ParticleBg() {
  const particlesInit = useCallback(async (engine) => {
    const { loadSlim } = await import("@tsparticles/slim");
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: { color: { value: "#000000" } },
        fpsLimit: 120,
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" },
            resize: true,
          },
          modes: {
            repulse: { distance: 120, duration: 0.4 },
          },
        },
        particles: {
          color: { value: "#8b5cf6" },
          links: {
            color: "#8b5cf6",
            distance: 150,
            enable: true,
            opacity: 0.5,
          },
          move: { enable: true, speed: 1 },
          number: { value: 80 },
          opacity: { value: 0.5 },
          shape: { type: "circle" },
          size: { value: { min: 1, max: 5 } },
        },
        detectRetina: true,
      }}
      className="absolute inset-0 z-0"
    />
  );
}
