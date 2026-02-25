import { useState, useEffect } from "react";
import Profile_img from "../../assets/Profile_img.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaCode } from "react-icons/fa";

function Home() {
  // ----- Typing Effect -----
  const texts = [
    "I'm Sahbaz Alam",
    "Frontend Developer",
    "React & Next.js Enthusiast",
    "Learning DSA & Problem Solving",
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
      "https://www.dropbox.com/scl/fi/64sxfasuroi1l6k18z2e6/Sahbaz_MERN_Developer_Fresher-2026.pdf?rlkey=xq3yczqucmsl9p8uohbvlmfvf&st=0nblzcrb&dl=0";
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
      <div className="absolute top-20 left-10 w-20 h-20 bg-purple-500/20 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-40 right-20 w-16 h-16 bg-pink-500/20 rounded-full blur-xl animate-pulse delay-500" />
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
          className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/20 rounded-full border border-purple-500/30"
        >
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
          <span className="text-sm text-purple-300">Available for work</span>
        </motion.div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-snug">
          <span className="bg-gradient-to-tr from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent inline-block min-w-[18ch]">
            {displayText}
          </span>
        </h1>

        <p className="text-md sm:text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed">
          Frontend Developer from Hyderabad, India. Skilled in React, Next.js,
          Tailwind & MUI. Currently learning DSA & problem solving. 🚀
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mt-4">
          <AnchorLink
            offset={50}
            href="#Contact"
            className="inline-block px-8 py-3 rounded-2xl font-bold shadow-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-500 hover:to-pink-500 focus:outline-none focus:ring-2 focus:ring-purple-400"
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
            className="p-3 bg-white/5 rounded-full hover:bg-purple-500/30 hover:scale-110 transition-all"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/sahbaz-alam-a95680262/"
            target="_blank"
            rel="noreferrer"
            className="p-3 bg-white/5 rounded-full hover:bg-purple-500/30 hover:scale-110 transition-all"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://leetcode.com/u/sahbaz23/"
            target="_blank"
            rel="noreferrer"
            className="p-3 bg-white/5 rounded-full hover:bg-purple-500/30 hover:scale-110 transition-all"
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
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-500 via-pink-500 to-orange-500 rounded-full blur-2xl opacity-50 animate-pulse"></div>
        <div
          className="relative w-64 sm:w-72 md:w-80 lg:w-96 aspect-square rounded-full overflow-hidden shadow-2xl border-4 border-white/20 backdrop-blur-sm"
          style={{
            background:
              "linear-gradient(135deg, rgba(168, 85, 247, 0.2), rgba(236, 72, 153, 0.2))",
          }}
        >
          <img
            src={Profile_img}
            alt="Profile"
            className="object-cover h-full w-full"
          />
        </div>
        {/* Decorative elements around profile */}
        <div className="absolute -top-4 -right-4 w-8 h-8 bg-purple-500 rounded-full animate-bounce" />
        <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-pink-500 rounded-full animate-bounce delay-300" />
      </motion.div>
    </div>
  );
}

export default Home;
