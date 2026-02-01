import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import DarkToggle from "./DarkToggle";

export default function Navbar({ setActivePage }) {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: "About", page: "about" },
    { label: "Projects", page: "projects" },
    { label: "Skills", page: "skills" },
    { label: "Code Hub", page: "code" },
    { label: "Journey", page: "journey" },
    { label: "Certifications", page: "certifications" },
    { label: "Contact Me", page: "contact" },
    

  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 
                 bg-white dark:bg-[#1a1a1a] 
                 shadow-md border-b border-gray-200 dark:border-gray-700"
    >
      <div className="max-w-7xl mx-auto px-5 py-3 flex items-center justify-between">
        
        {/* Left: Name */}
        <motion.button
          onClick={() => setActivePage("about")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="text-lg font-bold text-gray-900 dark:text-white 
                     hover:text-indigo-500 dark:hover:text-indigo-300 
                     transition-colors duration-300"
        >
          Swayam Prakash Macharla
        </motion.button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-5">
          <div className="flex gap-2">
            {menuItems.map(({ label, page }) => (
              <motion.button
                key={page}
                onClick={() => setActivePage(page)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="px-4 py-2 rounded-full font-medium
                           bg-gray-100 dark:bg-gray-800 
                           text-gray-800 dark:text-gray-200
                           hover:bg-indigo-100 dark:hover:bg-indigo-700 
                           transition-colors duration-300 shadow-sm"
              >
                {label}
              </motion.button>
            ))}
          </div>

          {/* Resume */}
          <motion.a
            href="/public/Resume.pdf"
            download
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="px-4 py-2 rounded-full font-semibold 
                       bg-gradient-to-r from-purple-500 to-pink-500 
                       text-white shadow-md hover:shadow-lg transition"
          >
            Download Resume
          </motion.a>

          <DarkToggle />
        </div>

        {/* Mobile: Hamburger */}
        <div className="md:hidden flex items-center gap-3">
          <DarkToggle />
          <button onClick={() => setIsOpen(!isOpen)} className="p-2">
            {isOpen ? <X size={28} className="text-gray-800 dark:text-white" /> : <Menu size={28} className="text-gray-800 dark:text-white" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="md:hidden bg-white dark:bg-[#1a1a1a] border-t border-gray-200 dark:border-gray-700 shadow-lg"
          >
            <div className="flex flex-col items-center py-4 gap-4">
              {menuItems.map(({ label, page }) => (
                <motion.button
                  key={page}
                  onClick={() => {
                    setActivePage(page);
                    setIsOpen(false);
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-[80%] px-4 py-2 rounded-full text-center font-medium
                             bg-gray-100 dark:bg-gray-800 
                             text-gray-800 dark:text-gray-200
                             hover:bg-indigo-100 dark:hover:bg-indigo-700 
                             transition-colors duration-300 shadow-sm"
                >
                  {label}
                </motion.button>
              ))}

              {/* Resume */}
              <motion.a
                href="/resume.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-[80%] px-4 py-2 text-center rounded-full font-semibold 
                           bg-gradient-to-r from-purple-500 to-pink-500 
                           text-white shadow-md hover:shadow-lg transition"
              >
                Download Resume
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
