import { FaFacebook, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-[#f0f0f3] dark:bg-[#1a1a1a] text-center py-6 mt-10 rounded-t-2xl shadow-[0_-4px_10px_rgba(0,0,0,0.1)] dark:shadow-[0_-4px_10px_rgba(0,0,0,0.6)]">
      <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
        © {new Date().getFullYear()} Swayam Prakash Macharla. All rights reserved.
      </p>
      
      <div className="flex justify-center gap-6 text-xl text-indigo-600 dark:text-indigo-400">
        <a href="https://facebook.com/swayamprakash.macharla" target="_blank" rel="noreferrer">
          <FaFacebook />
        </a>
        <a href="https://github.com/swayamprakashm" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/in/swayam-prakash-macharla" target="_blank" rel="noreferrer">
          <FaLinkedin />
        </a>
        <a href="mailto:swayamprakashmacharla@gmail.com" target="_blank" rel="noreferrer">
          <FaEnvelope />
        </a>
      </div>
    </footer>
  );
}
