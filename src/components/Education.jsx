// src/components/Education.jsx
import { motion } from "framer-motion";

export default function Education() {
  return (
    <motion.section
      id="education"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="
        px-6 py-12 rounded-3xl mx-4 my-8
        bg-[#f0f0f3] text-gray-900
        shadow-[8px_8px_16px_#d1d9e6,-8px_-8px_16px_#ffffff]
        dark:bg-[#1e1e1e] dark:text-gray-100
        dark:shadow-[8px_8px_16px_#0e0e0e,-8px_-8px_16px_#2e2e2e]
      "
    >
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <motion.h3
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold mb-8"
        >
          Education
        </motion.h3>

        {/* B.Tech Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-8"
        >
          <h4 className="text-xl font-semibold">
            B.Tech in Computer Science & Engineering
          </h4>

          <p className="text-gray-700 dark:text-gray-300 mt-1">
            ACE Engineering College
          </p>

          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
            2024 – Present • CGPA:{" "}
            <span className="font-semibold text-purple-600 dark:text-purple-400">
              7.44
            </span>
          </p>

          <p className="mt-2 text-gray-700 dark:text-gray-300">
            Currently focusing on core computer science subjects, software
            development, and modern technologies including web development and
            artificial intelligence.
          </p>
        </motion.div>

        {/* Diploma Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.6 }}
        >
          <h4 className="text-xl font-semibold">
            Diploma in Computer Science & Engineering
          </h4>

          <p className="text-gray-700 dark:text-gray-300 mt-1">
            Arjun College of Technology & Science, Batasingaram, Hayathnagar
          </p>

          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
            2019 – 2021 • CGPA:{" "}
            <span className="font-semibold text-purple-600 dark:text-purple-400">
              5.15
            </span>
          </p>

          <p className="mt-2 text-gray-700 dark:text-gray-300">
            Built a strong foundation in programming, object-oriented concepts,
            and web fundamentals, which shaped my interest in full-stack and AI
            development.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}
