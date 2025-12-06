import React from "react";
import educationAITools from "../data/EducationAITools";

export default function EducationAITools() {
    return (
      <div className="p-6 max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Education AI Tools</h1>
        <div className="grid gap-6 md:grid-cols-2">
          {educationAITools.map((tool) => (
            <div
              key={tool.id}
              className="border border-gray-300 rounded-md p-4 hover:shadow-lg transition-shadow duration-300"
            >
              <h2 className="text-xl font-semibold mb-2">{tool.name}</h2>
              <p className="text-sm mb-1">
                <strong>Type:</strong> {tool.type}
              </p>
              <p className="mb-2">{tool.description}</p>
              <p className="text-sm mb-1">
                <strong>Pricing:</strong> {tool.pricing}
              </p>
              <p className="text-sm mb-1">
                <strong>Use Case:</strong> {tool.useCase}
              </p>
              <a
                href={tool.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-600 hover:underline"
              >
                Visit Website
              </a>
            </div>
          ))}
        </div>
      </div>
    );
  }