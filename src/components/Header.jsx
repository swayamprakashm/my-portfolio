// src/components/Sidebar.jsx
import { FaFacebook, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import profile from "../assets/profile.png";

export default function Sidebar() {
  return (
    <motion.aside
      id="sidebar"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="
        flex flex-col items-center
        w-full md:max-w-[260px]
        mx-auto p-6 rounded-3xl
        bg-[#f0f0f3] text-gray-900
        shadow-[8px_8px_16px_#d1d9e6,-8px_-8px_16px_#ffffff]
        dark:bg-[#1e1e1e] dark:text-gray-100
        dark:shadow-[8px_8px_16px_#0e0e0e,-8px_-8px_16px_#2e2e2e]
        md:sticky md:top-[5rem]
      "
    >
      {/* Profile Image */}
      <motion.img
        src={profile}
        alt="Swayam Prakash Macharla"
        className="
          w-40 h-40 mb-4
          object-contain
          drop-shadow-xl
        "
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        whileHover={{ scale: 1.05 }}
      />

      {/* Name */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-lg font-bold text-center mb-2"
      >
        Swayam Prakash Macharla
      </motion.h2>

      {/* Role (optional but recommended) */}
      <p className="text-sm text-gray-600 dark:text-gray-400 text-center mb-4">
        B.Tech CSE | Tech explorer
      </p>

      {/* Social Links */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="flex justify-center gap-4 text-2xl text-indigo-600 dark:text-indigo-400"
      >
        <motion.a
          href="https://facebook.com/swayamprakash.macharla"
          target="_blank"
          rel="noreferrer"
          whileHover={{ scale: 1.2 }}
        >
          <FaFacebook />
        </motion.a>

        <motion.a
          href="https://github.com/swayamprakashm"
          target="_blank"
          rel="noreferrer"
          whileHover={{ scale: 1.2 }}
        >
          <FaGithub />
        </motion.a>

        <motion.a
          href="https://linkedin.com/in/swayam-prakash-macharla"
          target="_blank"
          rel="noreferrer"
          whileHover={{ scale: 1.2 }}
        >
          <FaLinkedin />
        </motion.a>

        <motion.a
          href="mailto:swayamprakashmacharla@gmail.com"
          whileHover={{ scale: 1.2 }}
        >
          <FaEnvelope />
        </motion.a>
      </motion.div>
    </motion.aside>
  );
}
