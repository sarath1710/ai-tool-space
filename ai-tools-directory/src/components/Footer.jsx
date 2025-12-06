import React from "react";

export default function Footer() {
  return (
    <footer className="bg-slate-800 text-white py-4 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between text-sm">
        
        {/* Left */}
        <div className="mb-2 md:mb-0 font-semibold">
          AI Tools Space &copy; 2025
        </div>

        {/* Center */}
        <div className="flex space-x-6">
          {["About", "Contact", "Privacy Policy", "Terms of Service"].map((label) => (
            <button
              key={label}
              onClick={() => alert(`${label} page coming soon!`)}
              className="hover:text-sky-500 transition-colors duration-300 bg-transparent border-0 cursor-pointer"
              aria-label={label}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Right: Social Icons */}
        <div className="flex space-x-4 mt-2 md:mt-0">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="hover:text-sky-500 transition-colors duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 fill-current"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M23.954 4.569c-.885.392-1.83.656-2.825.775a4.936 4.936 0 002.163-2.724 9.865 9.865 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482 13.957 13.957 0 01-10.141-5.146 4.822 4.822 0 001.523 6.573 4.903 4.903 0 01-2.228-.616v.06a4.92 4.92 0 003.946 4.827 4.996 4.996 0 01-2.224.085 4.926 4.926 0 004.6 3.417 9.868 9.868 0 01-6.102 2.105c-.397 0-.79-.023-1.17-.067a13.945 13.945 0 007.557 2.212c9.054 0 14-7.496 14-13.986 0-.21 0-.423-.015-.633A9.936 9.936 0 0024 4.59z" />
            </svg>
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-sky-500 transition-colors duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 fill-current"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.11 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0V8zm7.5 0h4.65v2.21h.06c.65-1.23 2.23-2.53 4.59-2.53 4.91 0 5.82 3.23 5.82 7.42V24H18v-7.78c0-1.85-.03-4.23-2.58-4.23-2.59 0-2.99 2.02-2.99 4.11V24H7.5V8z" />
            </svg>
          </a>

          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="hover:text-sky-500 transition-colors duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 fill-current"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M22.675 0H1.325C.593 0 0 .593 0 1.326v21.348C0 23.406.593 24 1.325 24h11.495v-9.294H9.691v-3.622h3.129V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.464.099 2.797.143v3.24l-1.918.001c-1.504 0-1.795.716-1.795 1.763v2.313h3.59l-.467 3.622h-3.123V24h6.116c.73 0 1.324-.594 1.324-1.326V1.326C24 .593 23.406 0 22.675 0z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}


