// src/components/Certification.jsx
import { motion } from "framer-motion";

export default function Certification() {
  return (
    <motion.section
      id="certifications"
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
          Certifications
        </motion.h3>

        {/* Intro */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-6 leading-relaxed"
        >
          Alongside my academic journey, I continuously work on building
          industry-relevant skills through certifications, structured learning
          programs, and hands-on practice. My focus is on gaining practical
          knowledge that can be applied to real-world problems.
        </motion.p>

        {/* Completed / Ongoing */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.6 }}
          className="mb-6"
        >
          <h4 className="text-xl font-semibold mb-3">
            Completed & Ongoing Learning
          </h4>

          <ul className="list-disc ml-6 space-y-2 text-gray-700 dark:text-gray-300">
            <li>
              Core Computer Science subjects through Diploma and B.Tech programs
            </li>
            <li>
              Online certification courses in programming, web technologies,
              and artificial intelligence
            </li>
            <li>
              Practical implementation through mini-projects and self-driven
              learning
            </li>
          </ul>
        </motion.div>

        {/* Planned Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <h4 className="text-xl font-semibold mb-3">
            Planned Certifications
          </h4>

          <ul className="list-disc ml-6 space-y-2 text-gray-700 dark:text-gray-300">
            <li>Advanced Python Programming</li>
            <li>Java Development and Object-Oriented Design</li>
            <li>Full Stack Web Development (HTML, CSS, JavaScript)</li>
            <li>Foundations and Applications of Artificial Intelligence</li>
          </ul>
        </motion.div>
      </div>
      {/* Explore Certifications Button */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.7, duration: 0.6 }}
  className="mt-12 flex justify-center"
>
  <motion.a
    href="/Certifications.jsx"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.96 }}
    className="
      relative px-8 py-3 rounded-full font-semibold tracking-wide
      text-indigo-600 dark:text-indigo-400
      bg-[#f0f0f3] dark:bg-[#1e1e1e]
      shadow-[6px_6px_12px_#d1d9e6,-6px_-6px_12px_#ffffff]
      dark:shadow-[6px_6px_12px_#0e0e0e,-6px_-6px_12px_#2e2e2e]
      transition-all duration-300
      hover:shadow-[inset_4px_4px_8px_#d1d9e6,inset_-4px_-4px_8px_#ffffff]
      dark:hover:shadow-[inset_4px_4px_8px_#0e0e0e,inset_-4px_-4px_8px_#2e2e2e]
    "
  >
    View Certifications
  </motion.a>
</motion.div>

    </motion.section>
  );
}
