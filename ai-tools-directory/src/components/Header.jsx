import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = ["Home", "About", "Contact", "SignIn"];

  return (
    <header className="bg-slate-800 text-white shadow-md p-4 flex items-center justify-between relative z-50">
      {/* Logo */}
      <div className="text-3xl font-extrabold tracking-wide font-sans select-none cursor-pointer hover:text-sky-500 transition-colors duration-300">
        AI <span className="font-light ml-2">Tools Space</span>
      </div>

      {/* Desktop Nav */}
      <nav className="hidden md:flex space-x-6 text-lg font-medium">
        {navItems.map((item) => (
          <Link
            key={item}
            to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
            className="hover:text-sky-500 transition-colors duration-300"
          >
            {item === "SignIn" ? "Sign In" : item}
          </Link>
        ))}
      </nav>

      {/* Hamburger Menu Button */}
      <button
        className="md:hidden ml-4"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {menuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="absolute top-16 left-0 w-full bg-slate-800 text-white flex flex-col space-y-4 p-4 md:hidden transition-all duration-300">
          {navItems.map((item) => (
            <Link
              key={item}
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className="hover:text-sky-500 transition-colors duration-300"
              onClick={() => setMenuOpen(false)}
            >
              {item === "SignIn" ? "Sign In" : item}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
