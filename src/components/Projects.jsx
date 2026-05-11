// src/components/Projects.jsx
import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
  {
    name: "AppOrbit",
    image: "/AO.png", // Ensure this exists in your public folder
    details: "A comprehensive mobile usage tracker featuring robust parental controls and real-time monitoring.",
    link: "https://github.com/swayamprakashm/AppOrbit", // Update with your actual repo link
    tags: ["React Native", "Firebase", "Node.js"]
  },
  {
    name: "Rescue Now App",
    image: "/RNlogo.png",
    details: "A real-time emergency alert system using GPS and SMS services for immediate assistance.",
    link: "https://github.com/swayamprakashm/RescueNowApp.git",
    tags: ["Android", "Java", "Firebase"]
  },
  {
    name: "Name Initials Generator",
    image: "/NGlogo.png",
    details: "A Flask web app that generates clean initials from full names. Example: Macharla Swayam Prakash → M.S.P.",
    link: "https://github.com/swayamprakashm/name-initials-generator.git",
    tags: ["Python", "Flask", "Tailwind"]
  },
  {
    name: "Resume Builder",
    image: "/RBlogo.png",
    details: "React-based platform with dynamic templates and Word document export functionality.",
    link: "https://github.com/swayamprakashm/online-resume-builder.git",
    tags: ["React.js", "Context API", "Docx.js"]
  },
  {
    name: "Diabetes app",
    image: "/da.png",
    details: "Machine Learning application that analyzes health metrics to predict diabetes risk factors.",
    link: "https://github.com/swayamprakashm/diabetes-app.git",
    tags: ["Machine Learning", "Python", "Streamlit"]
  },
  {
    name: "Blood Donation System",
    image: "/bd.png",
    details: "A Python-based management system for organizing donor databases and blood availability.",
    link: "https://github.com/swayamprakashm/blood-donation-system.git",
    tags: ["Python", "SQLite", "Tkinter"]
  }
];

  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="max-w-6xl mx-auto px-6 py-12"
    >
      {/* Heading */}
<motion.h2
  className="text-3xl md:text-4xl font-bold text-center mb-24"
  initial={{ opacity: 0, scale: 0.95, filter: "blur(8px)" }}
  whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  viewport={{ once: true }}
>
  🚀 Projects
</motion.h2>

{/* Description */}
<motion.p
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.2 }}
  viewport={{ once: true }}
  className="text-center text-gray-600 dark:text-gray-400
             max-w-3xl mx-auto mb-12 leading-relaxed"
>
  This section showcases my hands-on projects where I apply real-world problem solving, design thinking, and development skills.🎓 
  Each project reflects my approach to building practical, scalable, and user-focused solutions.🎯

</motion.p>


      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((item, index) => (
          <motion.div
            key={index}
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="p-6 rounded-3xl cursor-pointer
                       bg-[#f0f0f3] dark:bg-[#1a1a1a]
                       shadow-[8px_8px_16px_#d1d9e6,-8px_-8px_16px_#ffffff]
                       dark:shadow-[8px_8px_16px_#121212,-8px_-8px_16px_#1f1f1f]
                       flex flex-col items-center text-center space-y-4
                       hover:shadow-[0_0_20px_rgba(0,0,0,0.15)]
                       dark:hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]"
          >
            {/* Image */}
            <motion.div
              whileHover={{ scale: 1.08 }}
              className="w-full aspect-video flex items-center justify-center
                         bg-gray-100 dark:bg-gray-800 rounded-2xl overflow-hidden
                         shadow-[6px_6px_12px_#d1d9e6,-6px_-6px_12px_#ffffff]
                         dark:shadow-[6px_6px_12px_#121212,-6px_-6px_12px_#1f1f1f]"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-contain"
              />
            </motion.div>

            {/* Title */}
            <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
              {item.name}
            </h4>

            {/* Details */}
            <p className="text-sm text-gray-700 dark:text-gray-300 px-2">
              {item.details}
            </p>

            {/* Link */}
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-3 px-5 py-2 rounded-xl text-indigo-600 dark:text-indigo-400 font-medium
                         bg-[#f0f0f3] dark:bg-[#1a1a1a]
                         shadow-[6px_6px_12px_#d1d9e6,-6px_-6px_12px_#ffffff]
                         dark:shadow-[6px_6px_12px_#121212,-6px_-6px_12px_#1f1f1f]
                         transition hover:scale-105"
            >
              View Project
            </a>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
