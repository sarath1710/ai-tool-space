import React from "react";
import { useLocation } from "react-router-dom";
import tools from "../data/tools"; // ✅ full tools list

export default function ToolsList() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const selectedCategory = params.get("category");

  const filteredTools = selectedCategory
    ? tools.filter((tool) =>
        tool.type.toLowerCase().includes(selectedCategory.toLowerCase())
      )
    : tools;

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-slate-800 mb-8">
        {selectedCategory ? `${selectedCategory} Tools` : "All AI Tools"}
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTools.map((tool, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition"
          >
            <h2 className="text-xl font-semibold mb-2 text-slate-900">{tool.name}</h2>
            <p className="text-gray-700 text-sm mb-2">{tool.description}</p>
            <p className="text-sm text-indigo-500 font-medium mb-3">{tool.type}</p>
            <a
              href={tool.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
            >
              Visit
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
