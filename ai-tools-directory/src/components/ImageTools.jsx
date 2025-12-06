import React from "react";
import imageTools from "../data/imageTools";

export default function ImageTools() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-slate-800">Image Generation Tools</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {imageTools.map(tool => (
          <div key={tool.id} className="bg-white p-5 rounded shadow hover:shadow-lg transition">
            <h2 className="text-xl font-semibold mb-2">{tool.name}</h2>
            <p className="text-gray-700 mb-3">{tool.description}</p>
            <a
              href={tool.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 hover:underline"
            >
              Visit Website
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
