import { motion } from "motion/react";
import confetti from "canvas-confetti";
import { useEffect } from "react";

import LoveStore from "./LoveStore";

export default function App() {
  useEffect(() => {
    const duration = 4 * 1000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 2,
        angle: 60,
        spread: 70,
        origin: { x: 0 },
        colors: ["#fbcfe8", "#fecdd3", "#fde68a"],
      });
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 70,
        origin: { x: 1 },
        colors: ["#fbcfe8", "#fecdd3", "#fde68a"],
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };

    frame();
  }, []);

  return (
    <div className="min-h-screen bg-linear-to-br from-rose-200 via-pink-200 to-amber-100 text-gray-900 overflow-x-hidden">

      {/* HERO */}
       <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden bg-[#fafafa]">

  {/* Ambient Glows */}
  <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-pink-300/30 blur-[120px]" />
  <div className="absolute top-20 right-[-200px] w-[500px] h-[500px] rounded-full bg-rose-300/30 blur-[120px]" />

  {/* SVG BACKGROUND */}
  <svg
    className="absolute inset-0 w-full h-full"
    viewBox="0 0 1440 800"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Curved line */}
    <motion.path
      d="M0 400 C 300 300, 600 500, 900 350 C 1200 200, 1440 300, 1440 300"
      stroke="rgba(244,114,182,0.3)"
      strokeWidth="2"
      fill="none"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 3, ease: "easeInOut" }}
    />

    {/* Sparkles */}
    {[
      { x: 300, y: 200 },
      { x: 900, y: 150 },
      { x: 1100, y: 500 },
    ].map((p, i) => (
      <motion.circle
        key={i}
        cx={p.x}
        cy={p.y}
        r="3"
        fill="rgba(244,114,182,0.6)"
        animate={{ opacity: [0.2, 1, 0.2] }}
        transition={{ duration: 4, repeat: Infinity, delay: i }}
      />
    ))}
  </svg>

  {/* CONTENT */}
  <motion.h1
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1.4, ease: "easeOut" }}
    className="relative z-10 text-5xl md:text-7xl font-medium tracking-tight mb-6"
  >
    <span className="bg-gradient-to-r from-rose-600 to-pink-500 bg-clip-text text-transparent">
      Happy New Year
    </span>{" "}
    💖
  </motion.h1>

  <motion.p
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.7, duration: 1.2 }}
    className="relative z-10 max-w-xl text-lg md:text-xl text-gray-600 leading-relaxed"
  >
    A new year, a new chapter —  
    <span className="block mt-1">
      and my favorite part is writing it with you.
    </span>
  </motion.p>

  {/* FLOATING SVG HEART */}
  <motion.svg
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    className="absolute bottom-24 opacity-80"
    animate={{ y: [0, -20, 0], opacity: [0.6, 1, 0.6] }}
    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
  >
    <path
      d="M12 21s-7-4.35-7-9a4 4 0 0 1 7-2.65A4 4 0 0 1 19 12c0 4.65-7 9-7 9z"
      fill="rgba(244,114,182,0.8)"
    />
  </motion.svg>

</section>


       <section className="py-20 md:py-32 px-4 md:px-6 bg-[#fafafa] text-center">
  {/* PHOTO STACK */}
  <div className="relative w-full flex justify-center mb-10 md:mb-14 min-h-70 md:min-h-90">

    {/* Left image */}
    <motion.img
      src="/1.jpeg"
      alt=""
      initial={{ opacity: 0, x: -30, rotate: -8 }}
      animate={{ opacity: 1, x: 0, rotate: -6 }}
      transition={{ duration: 0.8 }}
      className="
        absolute left-1/2 
        -translate-x-[160%] md:-translate-x-[140%]
        w-30 h-56 md:w-52 md:h-72
        object-cover rounded-xl md:rounded-2xl shadow-lg
      "
    />

    {/* Middle image */}
    <motion.img
      src="/2.jpeg"
      alt=""
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.15 }}
      className="
        relative z-10
        w-40 h-64 md:w-56 md:h-80
        object-cover rounded-2xl md:rounded-3xl shadow-xl
      "
    />

    {/* Right image */}
    <motion.img
      src="/3.jpeg"
      alt=""
      initial={{ opacity: 0, x: 30, rotate: 8 }}
      animate={{ opacity: 1, x: 0, rotate: 6 }}
      transition={{ duration: 0.8, delay: 0.1 }}
      className="
        absolute left-1/2 
        translate-x-[55%] md:translate-x-[40%]
        w-30 h-56 md:w-52 md:h-72
        object-cover rounded-xl md:rounded-2xl shadow-lg
      "
    />
  </div>

  {/* LABEL */}
  <div className="inline-block mb-3 rounded-full bg-gray-200 px-3 py-1 text-[10px] md:text-xs tracking-widest text-gray-600">
    OUR MOMENTS — 2025
  </div>

  {/* TEXT */}
  <p className="max-w-md mx-auto text-gray-500 text-base md:text-lg leading-relaxed px-2">
    Every picture holds a memory, every moment holds a feeling.
    This year was lighter, warmer, and more beautiful — because of you.
  </p>
</section>

    <LoveStore/>

      {/* FOOTER */}
      <footer className="py-10 text-center text-gray-600 text-sm">
        Made with 💖 just for you
      </footer>

    </div>
  );
}
