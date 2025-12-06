import React from "react";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.3,
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function About() {
  return (
    <motion.div
      className="max-w-4xl mx-auto p-8 bg-white rounded-2xl shadow-2xl"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <motion.h1
        className="text-5xl font-extrabold text-slate-900 mb-8 text-center tracking-tight"
        variants={item}
      >
        About AI Tools Space
      </motion.h1>

      <motion.p className="text-lg text-gray-700 mb-6 leading-relaxed" variants={item}>
        AI Tools Space is your dedicated platform to discover, explore, and leverage the most advanced AI tools available across diverse categories like text generation, image synthesis, voice assistants, coding helpers, and more.
      </motion.p>

      <motion.p className="text-lg text-gray-700 mb-6 leading-relaxed" variants={item}>
        Our mission is to simplify your search for the perfect AI solution, enabling startups, professionals, and enthusiasts to unlock new possibilities and innovate faster with AI-powered tools.
      </motion.p>

      <motion.p className="text-lg text-gray-700 leading-relaxed" variants={item}>
        Whether you're looking for creative inspiration, productivity enhancements, or healthcare advancements, AI Tools Space connects you with the best AI applications tailored to your needs.
      </motion.p>
    </motion.div>
  );
}
