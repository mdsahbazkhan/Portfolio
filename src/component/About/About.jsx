// function About() {
//   return (
//     <section
//       id="about"
//       className="pb-20 px-6 text-white transition-colors duration-500"
//     >
//       <div className="max-w-4xl mx-auto text-center">
//         <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8">
//           About Me
//         </h2>

//         <p className="text-md sm:text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed">
//           Hi, I’m{" "}
//           <span className="font-semibold text-white">Md Sahbaz Alam</span>, a{" "}
//           <span className="font-semibold text-white">
//             Computer Science student
//           </span>{" "}
//           and passionate{" "}
//           <span className="font-semibold text-white">Frontend Developer</span>.
//           I enjoy building clean, responsive, and user-friendly web applications
//           using
//           <span className="font-semibold text-white">
//             {" "}
//             React.js, JavaScript, Tailwind CSS
//           </span>
//           , and <span className="font-semibold text-white">Material UI</span>.
//         </p>

//         <p className="text-md sm:text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed mt-6">
//           I have completed an{" "}
//           <span className="font-semibold text-white">
//             internship as a Frontend Developer
//           </span>
//           , where I gained hands-on experience working on real projects and
//           improving my problem-solving skills. Along with that, I’ve built
//           multiple practice projects to strengthen my fundamentals and sharpen
//           my frontend development skills.
//         </p>

//         <p className="text-md sm:text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed mt-6">
//           Currently, I’m focused on enhancing my skills and looking for new
//           opportunities where I can contribute, learn, and grow as a developer.
//         </p>
//       </div>
//     </section>
//   );
// }

// export default About;

"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="About"
      className="py-20 px-6 md:px-16 lg:px-24 text-white transition-colors duration-500"
    >
      <div className="max-w-4xl mx-auto text-center md:text-left">
        {/* Heading */}
        <motion.h2
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 text-purple-500"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        {/* Paragraphs */}
        <motion.p
          className="text-md sm:text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Hi, I’m{" "}
          <span className="text-purple-400 font-semibold">Md Sahbaz Alam</span>,
          a <span className="text-purple-300">Computer Science student</span>{" "}
          and passionate{" "}
          <span className="text-purple-300">Frontend Developer</span>. I enjoy
          building clean, responsive, and user-friendly web applications using{" "}
          <span className="text-purple-300">
            React.js, JavaScript, Tailwind CSS
          </span>
          , and <span className="text-purple-300">Material UI</span>.
        </motion.p>

        <motion.p
          className="text-md sm:text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          I have completed an{" "}
          <span className="text-purple-300">
            internship as a Frontend Developer
          </span>
          , where I gained hands-on experience working on real projects and
          improving my problem-solving skills. Along with that, I’ve built
          multiple practice projects to strengthen my fundamentals and sharpen
          my frontend development skills.
        </motion.p>

        <motion.p
          className="text-md sm:text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          Currently, I’m focused on enhancing my skills and looking for new
          opportunities where I can contribute, learn, and grow as a developer.
        </motion.p>
      </div>
    </section>
  );
}
