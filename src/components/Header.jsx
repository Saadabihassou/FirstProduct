import React from "react";
import image from "../assets/HeroImg.jpeg";
import { heroData } from "../data/text";
import { motion as Motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext"; // Assuming you've set up ThemeContext

export default function Header() {
  const { darkMode } = useTheme(); // Get dark mode state

  return (
    <header
      className={`flex flex-row relative items-center justify-between px-10 gap-x-10 py-[66.5px] ${
        darkMode ? "text-white bg-gray-900" : ""
      } transition-colors duration-300`}
    >
      <Motion.div
        className="flex flex-col gap-y-5 items-start"
        initial={{ x: "-100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <h1 className="text-5xl font-semibold leading-snug dark:text-white">
          {heroData.titleParts.map((part, i) =>
            typeof part === "string" ? (
              part
            ) : (
              <span
                key={i}
                className={`${part.className} ${
                  darkMode ? "dark:text-blue-400" : ""
                }`} // Dynamic color for dark mode
              >
                {part.text}
              </span>
            )
          )}
        </h1>

        <p
          className={`text-md leading-7 ${
            darkMode ? "text-gray-200" : "text-gray-700"
          }`}
        >
          {heroData.subtitle}
        </p>

        {/* CTA Button - Styled for dark mode */}
        <Motion.button
          id="button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`flex flex-row gap-x-0.5 items-center duration-300 ${
            darkMode
              ? "text-white border-[2px] border-violet-400 hover:ring-blue-400 bg-blue-600 hover:bg-blue-700 hover:ring-offset-gray-900 ring-offset-gray-800"
              : "text-gray-800 hover:ring-blue-500 bg-blue-100 hover:bg-blue-200"
          } px-4 py-2 rounded-lg ring-2 ring-transparent ring-offset-4 border-2 border-green-400 shadow-xl outline-none focus:outline-none focus:ring-2 focus:ring-blue-500`}
        >
          <span>{heroData.cta.text}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
            />
          </svg>
        </Motion.button>
      </Motion.div>

      {/* Image - Adjusted for dark mode */}
      <Motion.img
        initial={{ x: "100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        src={image}
        alt="hero"
        className={`w-1/2 rounded-xl border-2 ${
          darkMode ? "border-blue-400" : "border-blue-500"
        } shadow-lg dark:shadow-xl dark:shadow-blue-900/30`}
      />
    </header>
  );
}
