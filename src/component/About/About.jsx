"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="About"
      className="py-20 px-6 md:px-16 lg:px-24 text-white transition-colors duration-500 relative"
    >
      {/* Background decoration */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto text-center md:text-left relative z-10">
        {/* Heading with accent */}
        <motion.div className="inline-block mb-8">
          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-purple-400"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            About Me
          </motion.h2>
        </motion.div>

        {/* Cards container */}
        <motion.div
          className="grid gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.p
            className="text-md sm:text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed p-6 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-purple-500/20 shadow-lg hover:shadow-purple-500/10 transition-shadow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Hi, I'm{" "}
            <span className="text-purple-400 font-semibold">
              Md Sahbaz Alam
            </span>
            , a{" "}
            <span className="text-purple-300">Computer Science student</span>{" "}
            and passionate{" "}
            <span className="text-purple-300">MERN Stack Developer</span>. I
            enjoy building modern, responsive, and scalable web applications
            using{" "}
            <span className="text-purple-300">
              JavaScript, React.js, Next.js, Node.js, MongoDB, TypeScript
            </span>
            , along with{" "}
            <span className="text-purple-300">
              Tailwind CSS and Material UI
            </span>
            .
          </motion.p>

          <motion.p
            className="text-md sm:text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed p-6 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-purple-500/20 shadow-lg hover:shadow-purple-500/10 transition-shadow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            I have completed an{" "}
            <span className="text-purple-300">
              internship as a Frontend Developer
            </span>{" "}
            where I worked on real-world projects and improved my
            problem-solving and development workflow. I have also built multiple
            projects including full-stack applications to strengthen my
            understanding of modern web development and scalable application
            architecture.
          </motion.p>

          <motion.p
            className="text-md sm:text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed p-6 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-purple-500/20 shadow-lg hover:shadow-purple-500/10 transition-shadow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
           Currently, I’m focused on improving my full-stack development skills and
building advanced projects using the MERN stack. I’m actively looking
for opportunities where I can contribute to real products, collaborate
with experienced developers, and continue growing as a software
developer.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
