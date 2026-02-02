import { useState, useRef } from "react";
import { FaPaperPlane } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    emailjs
      .sendForm(
        "service_gbu9e1t",
        "template_w3n0l20",
        form.current,
        "vJkyg_JaQ7kcczws8"
      )
      .then(() => {
        setSubmitted(true);
        setLoading(false);
        form.current.reset();
        setTimeout(() => setSubmitted(false), 4000);
      })
      .catch(() => {
        setLoading(false);
        setError("Something went wrong. Please try again later.");
      });
  };

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="max-w-3xl mx-auto p-6 sm:p-10 md:p-12
                 bg-[#f3f5f9] dark:bg-[#181a20] rounded-3xl
                 shadow-[9px_9px_16px_#cfd4dc,-9px_-9px_16px_#ffffff]
                 dark:shadow-[9px_9px_16px_#121212,-9px_-9px_16px_#222]"
    >
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-center mb-10"
      >
        📡 Contact Me
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="mb-8 text-gray-600 dark:text-gray-400 text-sm sm:text-base text-center"
      >
        Have a question, collaboration idea, or just want to say hi?
        Feel free to drop a message below.
      </motion.p>

      {/* Form */}
      <motion.form
        ref={form}
        onSubmit={handleSubmit}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        viewport={{ once: true }}
        className="space-y-6"
      >
        {[
          { label: "Name", type: "text", name: "user_name", placeholder: "Your Name" },
          { label: "Email", type: "email", name: "user_email", placeholder: "you@example.com" }
        ].map((field, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.02 }}
            className="flex flex-col"
          >
            <label className="mb-1 font-semibold text-gray-700 dark:text-gray-300">
              {field.label}
            </label>
            <input
              type={field.type}
              name={field.name}
              placeholder={field.placeholder}
              required
              className="w-full p-3 rounded-xl bg-[#f3f5f9] dark:bg-[#181a20]
                         shadow-[inset_6px_6px_12px_#cfd4dc,inset_-6px_-6px_12px_#ffffff]
                         dark:shadow-[inset_6px_6px_12px_#111,inset_-6px_-6px_12px_#222]
                         focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
            />
          </motion.div>
        ))}

        {/* Message */}
        <motion.div whileHover={{ scale: 1.02 }} className="flex flex-col">
          <label className="mb-1 font-semibold text-gray-700 dark:text-gray-300">
            Message
          </label>
          <textarea
            name="message"
            placeholder="Your message..."
            required
            rows={5}
            className="w-full p-3 rounded-xl bg-[#f3f5f9] dark:bg-[#181a20]
                       shadow-[inset_6px_6px_12px_#cfd4dc,inset_-6px_-6px_12px_#ffffff]
                       dark:shadow-[inset_6px_6px_12px_#111,inset_-6px_-6px_12px_#222]
                       focus:outline-none focus:ring-2 focus:ring-indigo-400 transition resize-none"
          />
        </motion.div>

        {/* Submit Button */}
        <motion.button
          type="submit"
          disabled={loading}
          whileHover={!loading ? { scale: 1.06 } : {}}
          whileTap={!loading ? { scale: 0.95 } : {}}
          className={`flex items-center justify-center gap-2
                      bg-gradient-to-r from-indigo-500 to-blue-600
                      text-white px-6 py-3 rounded-xl font-semibold
                      transition-all w-full sm:w-auto
                      ${loading ? "opacity-70 cursor-not-allowed" : ""}`}
        >
          {loading ? "Sending..." : "Send Message"} <FaPaperPlane />
        </motion.button>

        {/* Feedback */}
        {submitted && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-green-600 dark:text-green-400 font-semibold text-center"
          >
            Message sent successfully ✅
          </motion.p>
        )}

        {error && (
          <p className="text-red-500 text-center font-medium">
            {error}
          </p>
        )}
      </motion.form>
    </motion.section>
  );
}
