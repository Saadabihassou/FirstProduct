import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

// Footer component

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left Section */}
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <h4 className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
              Hyper Landing
            </h4>
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Hyper Landing. All rights reserved.
            </p>
          </div>

          {/* Middle Section - Links */}
          <div className="mb-4 md:mb-0 text-center md:text-center">
            <p className="text-md border-b-2 border-blue-500 mb-1 font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500 w-fit mx-auto px-3">
              About Us
            </p>
            <div className="flex space-x-6 mb-4 md:mb-0 mr-10">
              <a href="#" className="text-gray-400 hover:underline hover:underline-offset-8 hover:text-white transition">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:underline hover:underline-offset-8 hover:text-white transition">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:underline hover:underline-offset-8 hover:text-white transition">
                Contact
              </a>
            </div>
          </div>

          {/* Right Section - Socials */}
          <div className="text-center md:text-center">
            <p className="text-md border-b-2 border-blue-500 mb-[5px] font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500 w-fit mx-auto px-3">
              Follow Us
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
