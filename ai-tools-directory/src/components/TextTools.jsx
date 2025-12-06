import React from "react";
import textTools from "../data/textTools";
import { motion } from "framer-motion";

export default function TextTools() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <motion.h1
        className="text-4xl font-bold text-center text-slate-800 mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        📝 Top AI Text Generator Tools
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {textTools.map((tool, index) => (
          <motion.div
            key={tool.id}
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl border border-slate-100 transition"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            <h2 className="text-xl font-bold text-slate-900 mb-2">{tool.name}</h2>
            <p className="text-slate-700 text-sm mb-2">{tool.description}</p>
            <p className="text-sm text-sky-600 mb-1">
              <span className="font-medium text-slate-600">Use Cases:</span> {tool.useCases}
            </p>
            <p className="text-sm text-green-600 mb-3">
              <span className="font-medium text-slate-600">Pricing:</span> {tool.pricing}
            </p>
            <a
              href={tool.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-auto text-white bg-sky-600 px-4 py-2 rounded hover:bg-sky-700 transition"
            >
              Visit Website
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
