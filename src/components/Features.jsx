import React from "react";
import { useTheme } from "../context/ThemeContext";
import feature2 from "../assets/clipboard.png";
import feature3 from "../assets/dashboard.png";

export default function Features() {
  const { darkMode } = useTheme(); // Not strictly needed unless you're toggling manually elsewhere

  return (
    <section
      className={`flex flex-col justify-center items-center gap-10 p-8 bg-gray-50 ${
        darkMode ? "bg-gray-900" : ""
      } transition-colors duration-300`}
    >
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-3xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500 border-b-2 px-3 border-blue-500 pb-1">
          Many Features!
        </h1>
        <p
          className={`text-center max-w-3xl mt-2 ${
            darkMode ? "text-gray-200" : "text-gray-700"
          }`}
        >
          Explore our extensive range of features designed to enhance your
          experience and productivity, whether you're a developer, designer, or
          business owner.
        </p>
      </div>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Feature 1 */}
        <div
          className={`flex flex-col items-center justify-center border-2 border-r-blue-500 border-l-violet-500 border-t-pink-500 border-b-orange-500 rounded-lg p-4 ${
            darkMode ? "bg-gray-800 text-white" : "bg-white"
          } transition-colors duration-300`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="size-12 rounded-full border-2 text-black border-blue-500 mb-3 bg-white p-2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
            />
          </svg>

          <h1 className="text-2xl font-semibold mb-2 border-b-2 border-indigo-500">
            Work Together in Real Time
          </h1>
          <p
            className={`text-center mt-1 ${
              darkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Collaborate seamlessly with your team, no matter where you are in
            the world, with real-time communication tools.
          </p>
        </div>

        {/* Feature 2 */}
        <div className={`flex flex-col items-center justify-center border-2 border-r-blue-500 border-l-violet-500 border-t-pink-500 border-b-orange-500 rounded-lg p-4 ${darkMode ? "bg-gray-800 text-white" : "bg-white"} transition-colors duration-300`}>
          <img
            src={feature2}
            alt="Feature 2"
            className={`size-12 rounded-full ${darkMode ? "bg-white" : ""} border-2 border-blue-500 mb-3 p-2`}
          />
          <h1 className="text-2xl font-semibold mb-2 border-b-2 border-indigo-500">
            Streamline Your Processes
          </h1>
          <p className={`text-center mt-1 ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
            Automate repetitive tasks and workflows with ease, allowing you to focus on what truly matters.
          </p>
        </div>

        {/* Feature 3 */}
        <div className={`flex flex-col items-center justify-center border-2 border-r-blue-500 border-l-violet-500 border-t-pink-500 border-b-orange-500 rounded-lg p-4 ${darkMode ? "bg-gray-800 text-white" : "bg-white"} transition-colors duration-300`}>
          <img
            src={feature3}
            alt="Feature 3"
            className={`size-12 rounded-full ${darkMode ? "bg-white" : ""} border-2 border-blue-500 mb-3 p-2`}
          />
          <h1 className="text-2xl font-semibold mb-2 border-b-2 border-indigo-500">
            Tailor Your Workspace
          </h1>
          <p className={`text-center mt-1 ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
            Personalize your dashboard to fit your team's needs and preferences, ensuring a seamless experience for everyone.
          </p>
        </div>
      </section>
    </section>
  );
}
