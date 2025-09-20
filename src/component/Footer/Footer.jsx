"use client";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-4 px-4 md:px-16 lg:px-24">
      <motion.div
        className="flex flex-col md:flex-row justify-between items-center gap-4"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Left: Name / Copyright */}
        <p className="text-xs md:text-sm">
          &copy; {new Date().getFullYear()} Md Sahbaz Alam. All rights reserved.
        </p>

        {/* Right: Social Icons */}
        <div className="flex gap-4 text-lg">
          <a
            href="https://github.com/mdsahbazkhan"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-500 transition-colors"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/sahbaz-alam-a95680262/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition-colors"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:amdsahbaz19@gmail.com?subject=Hello%20Sahbaz&body=Hi%20Sahbaz,%20I%20would%20like%20to%20get%20in%20touch%20regarding..."
            className="hover:text-pink-500 transition-colors"
          >
            <FaEnvelope />
          </a>
        </div>
      </motion.div>

      {/* Optional: small bottom text */}
      <motion.div
        className="text-center text-[10px] text-gray-500 mt-2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Designed & Built by Md Sahbaz Alam
      </motion.div>
    </footer>
  );
}
