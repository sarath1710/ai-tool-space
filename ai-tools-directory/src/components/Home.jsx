import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  PencilIcon,
  PhotoIcon,
  MicrophoneIcon,
  CodeBracketIcon,
  VideoCameraIcon,
  ChartBarIcon,
  HeartIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/outline";

export default function Home() {
  const navigate = useNavigate();

  const categories = [
    { name: "Text Generator", icon: <PencilIcon className="w-12 h-12 mx-auto text-sky-500" /> },
    { name: "Image Generation", icon: <PhotoIcon className="w-12 h-12 mx-auto text-sky-500" /> },
    { name: "Voice AI", icon: <MicrophoneIcon className="w-12 h-12 mx-auto text-sky-500" /> },
    { name: "Code Assistant", icon: <CodeBracketIcon className="w-12 h-12 mx-auto text-sky-500" /> },
    { name: "Video AI", icon: <VideoCameraIcon className="w-12 h-12 mx-auto text-sky-500" /> },
    { name: "Productivity", icon: <ChartBarIcon className="w-12 h-12 mx-auto text-sky-500" /> },
    { name: "Healthcare AI", icon: <HeartIcon className="w-12 h-12 mx-auto text-sky-500" /> },
    { name: "Education AI", icon: <AcademicCapIcon className="w-12 h-12 mx-auto text-sky-500" /> },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-tr from-sky-50 via-white to-indigo-50 p-6">
      <h1 className="text-3xl font-bold text-slate-800 mb-8 text-center">
        Explore AI Tools by Category
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {categories.map((cat) => (
          <motion.div
            key={cat.name}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate(`/tools?category=${encodeURIComponent(cat.name)}`)}
            className="cursor-pointer bg-white hover:bg-sky-100 text-center p-6 rounded-xl shadow hover:shadow-lg transition-all border border-slate-200"
          >
            {cat.icon}
            <div className="text-lg font-semibold text-slate-700 mt-4">{cat.name}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}