import { useState } from "react";
import { motion } from "framer-motion";

export default function Skills() {
  const [active, setActive] = useState(null);

  const categories = [
    {
      title: "Frontend",
      skills: [
        { name: "HTML", icon: "/html.png" },
        { name: "CSS", icon: "/css.png" },
        { name: "React.js", icon: "/react.png" },
        { name: "Tailwind CSS", icon: "/tailwind.png" },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: "/nodejs.png" },
        { name: "Firebase", icon: "/fire.png" },
        { name: "MySQL", icon: "/sql.png" },
        { name: "REST APIs", icon: "/restapi.png" },
      ],
    },
    {
      title: "Tools",
      skills: [
        { name: "Git", icon: "/git.png" },
        { name: "GitHub", icon: "/github.png" },
        { name: "VS Code", icon: "/vscode.png" },
        { name: "Postman", icon: "/postman.png" },
      ],
    },
    {
      title: "Programming Languages",
      skills: [
        { name: "C", icon: "/c.png" },
        { name: "C++", icon: "/cpp.png" },
        { name: "Java", icon: "/java.png" },
        { name: "Python", icon: "/python.png" },
        { name: "JavaScript", icon: "/js.png" },
      ],
    },
    {
      title: "Exploring Software",
      skills: [
        { name: "Docker", icon: "/docker.png" },
        { name: "Jenkins", icon: "/jenkin.png" },
        { name: "Canva", icon: "/canva.png" },
        { name: "Android Studio", icon: "/android.png" },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="bg-[#f0f0f3] dark:bg-[#1a1a1a] text-gray-900 dark:text-white 
                 rounded-3xl p-6 flex flex-col items-center justify-center"
    >
      {/* Title */}
      <motion.h3
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl font-bold mb-3 text-center"
      >
        ⚡ Skills
      </motion.h3>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-center text-gray-600 dark:text-gray-400 max-w-2xl mb-6"
      >
        Here are the technologies, tools, and languages I have worked with. 
        I enjoy learning new frameworks, exploring developer tools, and 
        building projects that help me grow as a developer 🚀.
      </motion.p>

      {/* Categories */}
      <div className="flex flex-col gap-6 w-full max-w-2xl items-center">
        {categories.map((cat, index) => (
          <motion.div
            key={index}
            onMouseEnter={() => setActive(index)}
            onMouseLeave={() => setActive(null)}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            className="
              w-full p-5 rounded-2xl transition-all duration-500 cursor-pointer
              bg-[#f0f0f3] shadow-[8px_8px_16px_#d1d9e6,-8px_-8px_16px_#ffffff]
              hover:shadow-[inset_8px_8px_16px_#d1d9e6,inset_-8px_-8px_16px_#ffffff]
              dark:bg-[#1a1a1a]
              dark:shadow-[8px_8px_16px_#121212,-8px_-8px_16px_#1f1f1f]
              dark:hover:shadow-[inset_8px_8px_16px_#121212,inset_-8px_-8px_16px_#1f1f1f]
            "
          >
            {/* Category Title */}
            <h4 className="text-lg font-semibold text-center">{cat.title}</h4>

            {/* Expand / Collapse */}
            <motion.div
              animate={{
                height: active === index ? "auto" : 0,
                opacity: active === index ? 1 : 0,
              }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <ul className="flex flex-wrap justify-center gap-4 text-gray-700 dark:text-gray-300 mt-3">
                {cat.skills.map((skill, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{
                      opacity: active === index ? 1 : 0,
                      scale: active === index ? 1 : 0.8,
                    }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-center gap-3 px-4 py-2 
                               bg-gray-100 dark:bg-gray-800 
                               rounded-lg text-base font-medium"
                  >
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-10 h-10 object-contain"
                    />
                    {skill.name}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
  