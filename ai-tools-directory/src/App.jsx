import React from "react";
import { Navigate } from "react-router-dom";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SignIn from "./components/SignIn";
import ToolsList from "./components/ToolsList";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import TextTools from "./components/TextTools";
import ImageTools from "./components/ImageTools"; 
import VoiceAITools from "./components/VoiceAITools";
import CodeAssistants from './components/CodeAssistants';
import VideoAITools from './components/VideoAITools';
import ProductivityAITools from './components/ProductivityAITools';
import HealthcareAITools from './components/HealthcareAITools';
import EducationAITools from "./components/EducationAITools";






function App() {
  return (
    <Router>
      {/* Outer div with light/dark mode classes */}
      <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <Header />
        <main className="flex-grow p-6 max-w-6xl mx-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/tools" element={<ToolsList />} />
            <Route path="*" element={<Navigate to="/" />} />
            <Route path="/tools/text" element={<TextTools />} />
            <Route path="/tools/image" element={<ImageTools />} />
            <Route path="/voiceaitools" element={<VoiceAITools />} />
            <Route path="/codeassistance" element={<CodeAssistants />} />
            <Route path="/videoaitools" element={<VideoAITools />} />
            <Route path="/productivityaitools" element={<ProductivityAITools />} />
            <Route path="/healthcareaitools" element={<HealthcareAITools />} />
            <Route path="/educationaitools" element={<EducationAITools />} />

          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
