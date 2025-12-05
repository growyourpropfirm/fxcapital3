"use client";

import { motion } from "framer-motion";

export function AnimatedBackground({ variant = "default" }) {
  const variants = {
    default: {
      orbs: [
        {
          color: "rgba(52,211,153,0.4)",
          color2: "rgba(16,185,129,0.2)",
          size: "w-96 h-96",
          position: "top-0 left-[10%]",
          duration: 8,
          x: [0, 50, 0],
          y: [0, 30, 0],
          scale: [1, 1.2, 1],
        },
        {
          color: "rgba(59,130,246,0.4)",
          color2: "rgba(37,99,235,0.2)",
          size: "w-80 h-80",
          position: "top-[20%] right-[15%]",
          duration: 10,
          x: [0, -40, 0],
          y: [0, 50, 0],
          scale: [1, 1.3, 1],
        },
        {
          color: "rgba(168,85,247,0.4)",
          color2: "rgba(147,51,234,0.2)",
          size: "w-72 h-72",
          position: "bottom-[15%] left-[20%]",
          duration: 12,
          x: [0, 60, 0],
          y: [0, -40, 0],
          scale: [1, 1.1, 1],
        },
        {
          color: "rgba(6,182,212,0.4)",
          color2: "rgba(8,145,178,0.2)",
          size: "w-64 h-64",
          position: "top-[50%] right-[5%]",
          duration: 9,
          x: [0, -30, 0],
          y: [0, 40, 0],
          scale: [1, 1.4, 1],
        },
      ],
      opacity: [0.3, 0.25, 0.2, 0.2],
    },
    vibrant: {
      orbs: [
        {
          color: "rgba(52,211,153,0.6)",
          color2: "rgba(16,185,129,0.4)",
          size: "w-[500px] h-[500px]",
          position: "top-0 left-[5%]",
          duration: 7,
          x: [0, 80, 0],
          y: [0, 50, 0],
          scale: [1, 1.3, 1],
        },
        {
          color: "rgba(59,130,246,0.6)",
          color2: "rgba(37,99,235,0.4)",
          size: "w-[450px] h-[450px]",
          position: "top-[15%] right-[10%]",
          duration: 9,
          x: [0, -60, 0],
          y: [0, 70, 0],
          scale: [1, 1.4, 1],
        },
        {
          color: "rgba(168,85,247,0.6)",
          color2: "rgba(147,51,234,0.4)",
          size: "w-[400px] h-[400px]",
          position: "bottom-[10%] left-[15%]",
          duration: 11,
          x: [0, 90, 0],
          y: [0, -60, 0],
          scale: [1, 1.2, 1],
        },
        {
          color: "rgba(6,182,212,0.6)",
          color2: "rgba(8,145,178,0.4)",
          size: "w-[380px] h-[380px]",
          position: "top-[45%] right-[3%]",
          duration: 8,
          x: [0, -50, 0],
          y: [0, 60, 0],
          scale: [1, 1.5, 1],
        },
        {
          color: "rgba(236,72,153,0.5)",
          color2: "rgba(219,39,119,0.3)",
          size: "w-[350px] h-[350px]",
          position: "bottom-[25%] right-[20%]",
          duration: 10,
          x: [0, 40, 0],
          y: [0, -50, 0],
          scale: [1, 1.3, 1],
        },
      ],
      opacity: [0.5, 0.45, 0.4, 0.4, 0.35],
    },
  };

  const config = variants[variant] || variants.default;

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {config.orbs.map((orb, index) => (
        <motion.div
          key={index}
          className={`absolute ${orb.size} ${orb.position} rounded-full blur-3xl`}
          style={{
            background: `radial-gradient(circle, ${orb.color} 0%, ${orb.color2} 50%, transparent 70%)`,
            opacity: config.opacity[index] || 0.3,
          }}
          animate={{
            x: orb.x,
            y: orb.y,
            scale: orb.scale,
          }}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

