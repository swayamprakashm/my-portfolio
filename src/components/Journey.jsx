import { FaQuoteLeft } from "react-icons/fa";
import { motion } from "framer-motion";

const timelineData = [
  {
    year: "2019",
    title: "Started Diploma in CSE",
    description:
      "Began my journey in computer science at Arjun College of Technology & Science.",
    img: "/src/assets/journey/pic1.jpg",
    quote: "Every expert was once a beginner. 🌱",
  },
  {
    year: "2020",
    title: "Survived Pandemic Year",
    description:
      "Adapted to online learning and honed self-discipline skills and maintaining healthy habits in isolation.",
    img: "/src/assets/journey/p.png",
    quote: "health is wealth. 🧘‍♂️",
  },
  {
    year: "2021",
    title: "Graduated Diploma",
    description:
      "Completed my diploma with a focus on OOP, Python, C, and Web basics.",
    img: "/src/assets/journey/pic2.jpg",
    quote: "Dream big, work hard, and never stop learning. 🚀",
  },
  {
    year: "2022",
    title: "Got break in Career",
    description:
      "Searching for job roles and internships to kickstart my tech career.",
    img: "/src/assets/journey/p2.png",
    quote: "Opportunities don't happen, you create them. 💡",
  },
  {
    year: "2023",
    title: "Failed to get job role and got a major health issue",
    description:
      "Started B.Tech in Computer Science at ACE Engineering College.",
    img: "/src/assets/journey/p3.png",
    quote: "Tough times never last, but tough people do. 💪",
  },
  {
    year: "2024",
    title: "Focused on Career and Joined B.Tech CSE",
    description:
      "Started B.Tech in Computer Science at ACE Engineering College.",
    img: "/src/assets/journey/Square.jpg",
    quote: "The future belongs to those who code it. 💻",
  },
  {
    year: "2025",
    title: "Going to 3rd Year of B.Tech",
    description:
      "Continuing my studies with a focus on AI, NLP, and full-stack development.",
    img: "/src/assets/journey/p4.png",
    quote: "Learning never exhausts the mind. 📚",
  },
  {
    year: "Present & Beyond",
    title: "Got internship at AppProTech Solutions as a MERN Stack Developer",
    description:
      "Excited to apply my skills in real-world projects and continue growing as a developer.",
    img: "/src/assets/journey/p5.png",
    quote: "The best way to predict the future is to invent it. 🌟",
  },
  {
    year: "Future",
    title: "Waiting for Opportunities",
    description:
      "Looking forward to new challenges and opportunities in the tech world.",
    img: "/src/assets/journey/future.jpg",
    quote: "Success is not the key to happiness. Happiness is the key to success. 🔑",
  },
];

export default function Journey() {
  return (
    <section className="relative py-24 px-6">
      <motion.h2
  className="text-3xl md:text-4xl font-bold text-center mb-24"
  initial={{ opacity: 0, scale: 0.95, filter: "blur(8px)" }}
  whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  viewport={{ once: true }}
>
  🙋🏼 My Journey
</motion.h2>


      <div className="relative max-w-6xl mx-auto">
        {/* Animated Wavy Line */}
        <motion.svg
          className="absolute top-0 left-1/2 -translate-x-1/2 h-full w-40 
                     text-indigo-400 dark:text-indigo-500 opacity-30 pointer-events-none"
          fill="none"
          viewBox="0 0 200 2000"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M 100 0 Q 150 100 100 200 Q 50 300 100 400 Q 150 500 100 600 
               Q 50 700 100 800 Q 150 900 100 1000 Q 50 1100 100 1200 
               Q 150 1300 100 1400 Q 50 1500 100 1600 Q 150 1700 100 1800 
               Q 50 1900 100 2000"
            stroke="currentColor"
            strokeWidth="4"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 3, ease: "easeInOut" }}
            viewport={{ once: true }}
          />
        </motion.svg>

        {/* Timeline Items */}
        <div className="space-y-32 relative">
          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`flex flex-col md:flex-row items-center gap-12 ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <motion.div
                whileHover={{ scale: 1.04 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="w-72 rounded-2xl overflow-hidden
                           bg-gray-100 dark:bg-gray-800
                           shadow-[8px_8px_16px_#d1d9e6,-8px_-8px_16px_#ffffff]
                           dark:shadow-[8px_8px_16px_#121212,-8px_-8px_16px_#1f1f1f]"
              >
                <img
                  src={item.img}
                  alt={`${item.title} image`}
                  loading="lazy"
                  className="w-full h-auto object-contain"
                />
              </motion.div>

              {/* Content */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 150 }}
                className="relative bg-[#f0f0f3] dark:bg-[#1a1a1a] p-6 rounded-2xl 
                           max-w-md
                           shadow-[8px_8px_16px_#d1d9e6,-8px_-8px_16px_#ffffff]
                           dark:shadow-[8px_8px_16px_#121212,-8px_-8px_16px_#1f1f1f]"
              >
                {/* Year Badge */}
                <span className="absolute -top-4 -left-4 bg-indigo-600 text-white 
                                 px-3 py-1 rounded-xl text-sm shadow-lg">
                  {item.year}
                </span>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                  {item.title}
                </h3>

                <p className="text-gray-700 dark:text-gray-300 mt-2">
                  {item.description}
                </p>

                <div className="mt-4 flex items-start gap-2 text-indigo-600 dark:text-indigo-400 italic">
                  <FaQuoteLeft className="mt-1 shrink-0" />
                  <span>{item.quote}</span>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
