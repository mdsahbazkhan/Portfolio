import { useState, useEffect } from "react";
import Navbar from "./component/Navbar/Navbar";
import Home from "./component/Home/Home";
import Skills from "./component/Skills/Skills";
import About from "./component/About/About";
import Projects from "./component/Projects/Projects";
import Footer from "./component/Footer/Footer";
import Contact from "./component/Contact/Contact";
import Experience from "./component/Experience/experience";

function App() {
  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem("darkMode")) ?? true
  );

  const toggleMode = () => setDarkMode((prev) => !prev);

  // Apply class to <html> or <body> so CSS reacts
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <div
      className={`min-h-screen transition-colors duration-500 ${
        darkMode
          ? "bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white"
          : "bg-gradient-to-br from-gray-500 via-gray-450 to-gray-400 text-black"
      }`}
    >
      <Navbar darkMode={darkMode} toggleMode={toggleMode} />
      <Home />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
