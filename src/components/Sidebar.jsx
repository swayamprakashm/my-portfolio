// src/components/Sidebar.jsx
import profile from "../assets/profile.jpg";
import { FaFacebook, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Sidebar() {
  return (
    <aside
      className="
        hidden lg:flex flex-col items-center
        w-72 h-screen fixed top-20 left-8
        px-6 py-8 rounded-3xl
        bg-[#f0f0f3] text-gray-900 
        shadow-[inset_8px_8px_16px_#d1d9e6,inset_-8px_-8px_16px_#ffffff]
        dark:bg-[#1e1e1e] dark:text-gray-100 
        dark:shadow-[inset_8px_8px_16px_#0e0e0e,inset_-8px_-8px_16px_#2e2e2e]
      "
    >
      {/* Profile Image */}
      <motion.img
        src={profile}
        alt="Profile"
        className="w-32 h-32 rounded-full border-[6px] border-purple-500 object-cover"
        whileHover={{ scale: 1.05 }}
      />

      {/* Name */}
      <h1 className="mt-4 text-xl font-bold text-center">Swayam Prakash Macharla</h1>

      {/* Social Icons */}
      <div className="flex mt-6 space-x-4 text-xl">
        <SocialIcon
          href="https://facebook.com/swayamprakash.macharla"
          icon={<FaFacebook />}
          hover="hover:text-blue-600"
        />
        <SocialIcon
          href="https://github.com/swayamprakashm"
          icon={<FaGithub />}
          hover="hover:text-gray-600"
        />
        <SocialIcon
          href="https://linkedin.com/in/swayam-prakash-macharla24330a32a"
          icon={<FaLinkedin />}
          hover="hover:text-blue-400"
        />
        <SocialIcon
          href="mailto:swayamprakashm2003@gmail.com"
          icon={<FaEnvelope />}
          hover="hover:text-pink-500"
        />
      </div>

      {/* Resume Button */}
      <motion.a
        href="/resume.pdf"
        download
        whileHover={{ scale: 1.05 }}
        className="mt-6 px-5 py-2 rounded-2xl font-semibold
                   bg-gradient-to-r from-purple-500 to-pink-500 text-white
                   shadow-[inset_4px_4px_8px_#d1d9e6,inset_-4px_-4px_8px_#ffffff]
                   dark:shadow-[inset_4px_4px_8px_#0e0e0e,inset_-4px_-4px_8px_#2e2e2e]
                   hover:from-purple-600 hover:to-pink-600 transition"
      >
        Resume
      </motion.a>
    </aside>
  );
}

// Reusable SocialIcon component
function SocialIcon({ href, icon, hover }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      whileHover={{ scale: 1.2 }}
      className={`p-3 rounded-full
                  bg-[#f0f0f3] dark:bg-[#1a1a1a]
                  shadow-[inset_4px_4px_8px_#d1d9e6,inset_-4px_-4px_8px_#ffffff]
                  dark:shadow-[inset_4px_4px_8px_#0e0e0e,inset_-4px_-4px_8px_#2e2e2e]
                  ${hover}`}
    >
      {icon}
    </motion.a>
  );
}
