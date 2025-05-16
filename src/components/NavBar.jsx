import React, { useState } from "react";
import { motion as Motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { FiMenu, FiX } from "react-icons/fi";

export default function NavBar() {
  const { darkMode, toggleDarkMode } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = ["Home", "About", "Contact", "Pricing"];

  return (
    <Motion.nav
      className={`flex flex-col md:flex-row items-center justify-between px-4 md:px-18 py-[13px] border-b-2 ${
        darkMode ? "border-blue-400 bg-gray-900" : "border-blue-500 bg-[#F8FAFC]"
      } transition-colors duration-300 relative`}
      initial={{ x: "-100%", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Logo and Mobile Menu Button */}
      <div className="flex items-center justify-between w-full md:w-auto">
        <div className="flex items-center flex-row gap-x-3">
          <svg
            width="50"
            height="50"
            viewBox="0 0 120 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="60" cy="60" r="50" fill="url(#paint0_linear)" />
                                <defs>
            <linearGradient
              id="paint0_linear"
              x1="60"
              y1="0"
              x2="60"
              y2="120"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#2F80ED" />
              <stop offset="1" stop-color="#56CCF2" />
            </linearGradient>
          </defs>
          </svg>
          <p className={`text-xl md:text-2xl bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 font-semibold`}>
            Hyper Landing
          </p>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 rounded-lg focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <FiX className={`w-6 h-6 ${darkMode ? "text-white" : "text-gray-800"}`} />
          ) : (
            <FiMenu className={`w-6 h-6 ${darkMode ? "text-white" : "text-gray-800"}`} />
          )}
        </button>
      </div>

      {/* Navigation Links - Desktop */}
      <ul className="hidden md:flex flex-row gap-8 font-medium ml-22">
        {navItems.map((item) => (
          <li key={item} className="relative group">
            <div
              className={`absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 transition-transform transform scale-x-0 group-hover:scale-x-100 ${
                darkMode ? "opacity-80" : ""
              }`}
            />
            <a
              href="#"
              className={`${
                darkMode ? "text-blue-400 hover:text-blue-300" : "text-[#3B82F6]"
              } transition-colors duration-200`}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <Motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className={`md:hidden w-full mt-4 ${
            darkMode ? "bg-gray-800" : "bg-gray-100"
          } rounded-lg p-4`}
        >
          <ul className="flex flex-col gap-4">
            {navItems.map((item) => (
              <li key={item} className="relative group">
                <a
                  href="#"
                  className={`block py-2 px-4 rounded-lg ${
                    darkMode
                      ? "text-blue-300 hover:bg-gray-700"
                      : "text-blue-600 hover:bg-gray-200"
                  } transition-colors duration-200`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </Motion.div>
      )}

      {/* Buttons Container - Desktop */}
      <div className="hidden md:flex flex-row gap-4 items-center">
        {/* Dark Mode Toggle */}
        <Motion.button
          onClick={toggleDarkMode}
          whileTap={{ scale: 0.95 }}
          className={`w-14 h-8 rounded-full flex items-center p-1 ${
            darkMode ? "bg-gray-700 justify-end" : "bg-gray-200 justify-start"
          } transition-colors duration-300`}
        >
          <Motion.div
            layout
            className={`w-6 h-6 rounded-full flex items-center justify-center ${
              darkMode ? "bg-gray-900 text-yellow-300" : "bg-white text-gray-700"
            }`}
          >
            {darkMode ? "🌙" : "☀️"}
          </Motion.div>
        </Motion.button>

        {/* Login Button */}
        <div className="relative group">
          <Motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className={`relative inline-block p-px font-semibold leading-6 rounded-lg shadow-lg ${
              darkMode
                ? "shadow-blue-900/30 ring-1 ring-white hover:ring-0"
                : "shadow-zinc-400"
            }`}
          >
            <span
              className={`absolute inset-0 rounded-lg bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 opacity-0 transition-opacity duration-500 group-hover:opacity-100 ${
                darkMode ? "p-[1.5px]" : "p-[2px]"
              }`}
            />
            <span
              className={`relative z-10 block px-4 py-1 rounded-lg ${
                darkMode ? "bg-gray-800" : "bg-gray-950"
              }`}
            >
              <div className="flex items-center space-x-1">
                <span className="text-white text-sm">Login</span>
                <svg
                  className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1 text-white"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                  />
                </svg>
              </div>
            </span>
          </Motion.button>
        </div>

        {/* Gooey Sign Up Button */}
        <div className="relative">
          <Motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className={`
              relative font-bold text-xs md:text-sm uppercase tracking-widest 
              px-4 md:px-5 py-[6.5px] cursor-pointer border-3 rounded-none
              transition-all duration-700 ease-in-out z-10
              ${darkMode ? 
                "text-cyan-300 border-cyan-300 hover:text-white hover:bg-cyan-300" : 
                "text-cyan-500 border-cyan-500 hover:bg-cyan-500 hover:text-white"
              }
            `}
          >
            Sign Up
            <div 
              className="absolute inset-0 -bottom-[2px] -right-[1px] overflow-hidden z-[-1] h-full" 
              style={{ filter: 'url(#goo)' }}
            >
              {[0, 30, 66].map((position, i) => (
                <Motion.div
                  key={i}
                  className={`absolute w-[34%] h-full rounded-full ${
                    darkMode ? "bg-cyan-300" : "bg-cyan-500"
                  }`}
                  initial={{ scale: 1.4, y: "125%" }}
                  whileHover={{ scale: 1.4, y: 0 }}
                  transition={{ 
                    duration: 0.7, 
                    ease: "easeInOut",
                    delay: i * 0.05
                  }}
                />
              ))}
            </div>
          </Motion.button>
        </div>
      </div>

      {/* Mobile Buttons - Show when menu is open */}
      {mobileMenuOpen && (
        <div className="md:hidden w-full mt-4 flex flex-col gap-4">
          <div className="flex justify-center">
            <Motion.button
              onClick={toggleDarkMode}
              whileTap={{ scale: 0.95 }}
              className={`w-14 h-8 rounded-full flex items-center p-1 ${
                darkMode ? "bg-gray-700 justify-end" : "bg-gray-200 justify-start"
              } transition-colors duration-300`}
            >
              <Motion.div
                layout
                className={`w-6 h-6 rounded-full flex items-center justify-center ${
                  darkMode ? "bg-gray-900 text-yellow-300" : "bg-white text-gray-700"
                }`}
              >
                {darkMode ? "🌙" : "☀️"}
              </Motion.div>
            </Motion.button>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Motion.button
              whileTap={{ scale: 0.97 }}
              className={`py-2 md:py-3 px-4 rounded-lg font-medium ${
                darkMode ? "bg-gray-700 text-white" : "bg-gray-200 text-gray-800"
              }`}
            >
              Login
            </Motion.button>
            <Motion.button
              whileTap={{ scale: 0.97 }}
              className={`py-2 px-4 rounded-lg font-medium uppercase ${
                darkMode
                  ? "bg-cyan-400 text-gray-900"
                  : "bg-cyan-500 text-white"
              }`}
            >
              Sign Up
            </Motion.button>
          </div>
        </div>
      )}

      {/* Hidden SVG Filter */}
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        version="1.1" 
        className="absolute h-0 w-0"
      >
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur"/>
            <feColorMatrix 
              in="blur" 
              mode="matrix" 
              values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 18 -7" 
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo"/>
          </filter>
        </defs>
      </svg>
    </Motion.nav>
  );
}