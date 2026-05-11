// src/components/Certifications.jsx
import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";


export default function Certifications() {
  const certFiles = [
    "certificate-zscalar2-swayam",
    "certificate-zscalar-swayam",
    "CSS_Essentials_swayam",
    "HTML_Essentials_swayam",
    "Python_Essentials_1_swayam",
    "Python_Essentials_2_swayam",
    "eCertificate-Associate-Rel1",
    "eCertificate-AI-Foundations-Associate",
    "eCertificate-Generative-AI-Professional",
    "IBMDesign2026Swayam",
    "SwayamPrakashMacharlaEDUSKILL1",
    "SwayamPrakashMacharlaEDUSKILL2",
  ];

  return (
    <section className="px-6 py-8 mx-4 my-6 rounded-3xl bg-[#f0f0f3] dark:bg-[#1e1e1e] text-gray-900 dark:text-white shadow-inner">
      <motion.h2
  className="text-3xl md:text-4xl font-bold text-center mb-24"
  initial={{ opacity: 0, scale: 0.95, filter: "blur(8px)" }}
  whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  viewport={{ once: true }}
>
  🎓 My Certifications
</motion.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certFiles.map((name, index) => (
          <div
            key={index}
            className="bg-white dark:bg-[#121212] rounded-xl shadow-md overflow-hidden hover:scale-105 transition-all duration-300"
          >
            {/* Image Frame */}
            <div className="w-full h-56 bg-white dark:bg-[#121212] flex items-center justify-center p-4 overflow-hidden">
              <img
                src={`/certifications/images/${name}.png`}
                alt={name}
                className="max-h-full max-w-full object-contain transition-transform duration-300 hover:scale-105"
              />
            </div>

            {/* Text + Link */}
            <div className="p-4">
              <h4 className="text-lg font-semibold capitalize">
                {name.replace(/[_-]/g, " ")}
              </h4>

              <a
                href={`/certifications/docs/${name}.pdf`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-semibold hover:underline"
              >
                View Certificate <FaExternalLinkAlt />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
