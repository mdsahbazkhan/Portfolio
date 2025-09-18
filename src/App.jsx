// import Navbar from "./component/Navbar/Navbar";
// import Home from "./component/Home/Home";
// import Skills from "./component/Skills/Skills";
// import About from "./component/About/About";
// import Projects from "./component/Projects/Projects";
// import Footer from "./component/Footer/Footer";
// import Contact from "./component/Contact/Contact";

// function App() {
//   return (
//     <div>
//       <Navbar />
//       <Home />
//       <Skills />
//       <About />
//       <Projects />
//       <Contact />
//       <Footer />
//     </div>
//   );
// }

// export default App;

import Navbar from "./component/Navbar/Navbar";
import Home from "./component/Home/Home";
import Skills from "./component/Skills/Skills";
import About from "./component/About/About";
import Projects from "./component/Projects/Projects";
import Footer from "./component/Footer/Footer";
import Contact from "./component/Contact/Contact";

function App() {
  return (
    <div
      className="min-h-screen
                 bg-gradient-to-br from-gray-900 via-black to-gray-800
                 dark:from-gray-900 dark:via-black dark:to-gray-800
                 text-white transition-colors duration-500"
    >
      <Navbar />
      <Home />
      <Skills />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
