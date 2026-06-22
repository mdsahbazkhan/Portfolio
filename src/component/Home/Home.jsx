import { useState, useEffect } from "react";
import Profile_img from "../../assets/sahbaz.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaCode } from "react-icons/fa";

function Home() {
  // ----- Typing Effect -----
  const texts = [
    "Full Stack Developer",
    "Generative AI Developer",
    "Building AI-Powered Applications",
  ];

  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typeSpeed = 100;
    const deleteSpeed = 50;
    const pauseTime = 1200;

    let timer;

    if (!isDeleting && charIndex < texts[textIndex].length) {
      timer = setTimeout(() => {
        setDisplayText(texts[textIndex].substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, typeSpeed);
    } else if (isDeleting && charIndex > 0) {
      timer = setTimeout(() => {
        setDisplayText(texts[textIndex].substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, deleteSpeed);
    } else if (!isDeleting && charIndex === texts[textIndex].length) {
      timer = setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setTextIndex((textIndex + 1) % texts.length);
    }

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, textIndex, texts]);

  // ----- Resume Download -----
  const handleDownload = () => {
    const url =
      "https://www.dropbox.com/scl/fi/2lammcnssjp36buvzjplv/Sahbaz_AI_FullStack_Developer.pdf?rlkey=hvuyb4w9y3vcmpb5n1p2c1lu8&st=9110cy04&dl=1";
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = "resume.pdf";
    anchor.click();
  };

  return (
    <div
      id="Home"
      className="flex flex-col-reverse md:flex-row items-center justify-center gap-8 md:gap-8 px-6 md:px-12 lg:px-24 min-h-screen text-white transition-colors duration-500 relative pt-20 md:pt-0"
      style={{ paddingTop: "5rem" }}
    >
      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-cyan-500/20 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-40 right-20 w-16 h-16 bg-blue-500/20 rounded-full blur-xl animate-pulse delay-500" />
      <div className="absolute top-1/3 right-1/4 w-12 h-12 bg-blue-500/20 rounded-full blur-xl animate-pulse delay-700" />

      {/* ===== Left Section (Text) ===== */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.3 }}
        className="flex flex-col items-center md:items-start text-center md:text-left gap-6 md:gap-8 max-w-xl w-full"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/20 rounded-full border border-cyan-500/30"
        >
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
          <span className="text-sm text-cyan-300">
            Open to Full Stack & AI Engineering Roles
          </span>
        </motion.div>

        <div className="flex flex-col gap-2">
          <p className="text-lg text-gray-400 font-medium">Hi, I&apos;m</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight">
            Md Sahbaz Alam
          </h1>
          <div className="flex items-center gap-2 text-xl sm:text-2xl md:text-3xl font-semibold mt-1">
            <span className="text-gray-400">—</span>
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-sky-300 bg-clip-text text-transparent">
              {displayText}
            </span>
            <span className="text-cyan-400 animate-pulse font-thin">|</span>
          </div>
        </div>

        <p className="text-md sm:text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed">
          Full Stack & Generative AI Developer from Hyderabad, India. I build
          scalable web applications and AI-powered systems using React, Next.js,
          Node.js, FastAPI, LangChain, and RAG — turning ideas into
          production-ready software.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mt-4">
          <AnchorLink
            offset={50}
            href="#Contact"
            className="inline-block px-8 py-3 rounded-2xl font-bold shadow-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 bg-gradient-to-r from-cyan-600 to-blue-600 text-white hover:from-cyan-500 hover:to-blue-500 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          >
            Connect With Me
          </AnchorLink>

          <button
            onClick={handleDownload}
            className="flex items-center gap-2 px-6 py-3 rounded-2xl border border-gray-600 text-white font-bold shadow-xl bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:scale-105 transition duration-300"
          >
            Resume
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="h-6 w-6 animate-bounce"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
              />
            </svg>
          </button>
        </div>

        {/* Social Icons */}
        <div className="flex gap-6 mt-4 text-2xl">
          <a
            href="https://github.com/mdsahbazkhan"
            target="_blank"
            rel="noreferrer"
            className="p-3 bg-white/5 rounded-full hover:bg-cyan-500/30 hover:scale-110 transition-all"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/md-sahbaz-alam-a95680262/"
            target="_blank"
            rel="noreferrer"
            className="p-3 bg-white/5 rounded-full hover:bg-cyan-500/30 hover:scale-110 transition-all"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://leetcode.com/u/sahbaz23/"
            target="_blank"
            rel="noreferrer"
            className="p-3 bg-white/5 rounded-full hover:bg-cyan-500/30 hover:scale-110 transition-all"
          >
            <FaCode />
          </a>
        </div>
      </motion.div>

      {/* ===== Right Section (Image) ===== */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.3 }}
        className="flex-shrink-0 relative"
      >
        {/* Glowing ring effect */}
        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500 via-blue-500 to-sky-400 rounded-full blur-2xl opacity-50 animate-pulse"></div>
        <div
          className="relative w-64 sm:w-72 md:w-80 lg:w-96 aspect-square rounded-full overflow-hidden shadow-2xl border-4 border-white/20 backdrop-blur-sm"
          style={{
            background:
              "linear-gradient(135deg, rgba(6, 182, 212, 0.2), rgba(59, 130, 246, 0.2))",
          }}
        >
          <img
            src={Profile_img}
            alt="Profile"
            className="object-cover h-full w-full"
          />
        </div>
        {/* Decorative elements around profile */}
        <div className="absolute -top-4 -right-4 w-8 h-8 bg-cyan-500 rounded-full animate-bounce" />
        <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-500 rounded-full animate-bounce delay-300" />
      </motion.div>
    </div>
  );
}

export default Home;
