// src/components/About.jsx
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="
        px-6 py-12 rounded-3xl mx-4 my-8 flex-1
        bg-[#f0f0f3] text-gray-900
        shadow-[8px_8px_16px_#d1d9e6,-8px_-8px_16px_#ffffff]
        dark:bg-[#1e1e1e] dark:text-gray-100
        dark:shadow-[8px_8px_16px_#0e0e0e,-8px_-8px_16px_#2e2e2e]
      "
    >
      <div className="max-w-4xl mx-auto text-center sm:text-left">
        {/* Heading */}
        <motion.h3
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold mb-6"
        >
          About Me
        </motion.h3>

        {/* Paragraph 1 */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-4 leading-relaxed text-lg"
        >
          Hi, I’m{" "}
          <span className="font-semibold text-indigo-600 dark:text-indigo-400">
            Swayam Prakash Macharla
          </span>
          , a{" "}
          <span className="font-semibold text-indigo-600 dark:text-indigo-400">
            B.Tech Computer Science student
          </span>{" "}
          at ACE Engineering College. I enjoy building software that solves
          practical problems and makes technology easier to use.
        </motion.p>

        {/* Paragraph 2 */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.6 }}
          className="mb-4 leading-relaxed"
        >
          My primary interests lie in{" "}
          <span className="font-semibold text-indigo-600 dark:text-indigo-400">
            AI, Web Development and Android Development
          </span>
          . I focus on writing clean, maintainable code and understanding how
          systems work end to end, from user interface to backend logic.
        </motion.p>

        {/* Paragraph 3 */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="leading-relaxed"
        >
          I’m continuously learning and improving my skills, with a strong
          interest in building{" "}
          <span className="font-semibold text-green-600 dark:text-green-400">
            efficient and scalable applications
          </span>{" "}
          that can grow with real-world requirements.
        </motion.p>
      </div>
    </motion.section>
  );
}
