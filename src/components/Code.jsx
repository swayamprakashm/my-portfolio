import { useState } from "react";
import { motion } from "framer-motion";

function CodeCard({ title, img, codeSnippet, inputValue, setInputValue, buttonText, onClick, result, colorClass }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className={`p-5 rounded-2xl bg-[#f0f0f3] dark:bg-[#1a1a1a] shadow-[8px_8px_16px_#d1d9e6,-8px_-8px_16px_#ffffff] dark:shadow-[8px_8px_16px_#121212,-8px_-8px_16px_#1f1f1f] transition-transform`}
    >
      <img src={img} alt={title} className="w-12 h-12 mb-3" />
      <h5 className="text-xl font-bold mb-2">{title}</h5>
      <pre className="bg-gray-100 dark:bg-[#111] p-3 rounded-md text-sm mb-3 overflow-x-auto">{codeSnippet}</pre>
      {inputValue !== undefined && (
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && onClick()}
          placeholder={`Enter ${title.toLowerCase()}...`}
          className="border px-3 py-1 rounded-md mr-2 text-black dark:text-white dark:bg-[#222] focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
      )}
      <button
        onClick={onClick}
        className={`${colorClass} text-white px-3 py-1 rounded-md hover:brightness-110 mt-2`}
      >
        {buttonText}
      </button>
      {result && (
        <motion.p
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-2 font-semibold"
        >
          {result}
        </motion.p>
      )}
    </motion.div>
  );
}

export default function Code() {
  const [palInput, setPalInput] = useState("");
  const [palResult, setPalResult] = useState("");

  const [lieInput, setLieInput] = useState("");
  const [lieResult, setLieResult] = useState("");

  const [quote, setQuote] = useState("");

  const [fullName, setFullName] = useState("");
  const [initials, setInitials] = useState("");

  const checkPalindrome = () => {
    const str = palInput.toLowerCase().replace(/\s/g, "");
    setPalResult(str === str.split("").reverse().join("") ? "Palindrome ✅" : "Not Palindrome ❌");
  };

  const detectLie = () => {
    setLieResult(Math.random() < 0.5 ? "TRUE ✅" : "LIE ❌");
  };

  const generateQuote = () => {
    const quotes = [
      "Code is like humor. When you have to explain it, it’s bad.",
      "Fix the cause, not the symptom.",
      "Simplicity is the soul of efficiency.",
      "Make it work, make it right, make it fast."
    ];
    setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
  };

  const genInitials = () => {
    if (!fullName.trim()) return setInitials("Please enter a name!");
    const parts = fullName.trim().split(" ");
    const init = parts.map(p => p[0].toUpperCase()).join(" ");
    setInitials(init);
  };

  return (
    <section
      id="code"
      className="px-6 py-6 rounded-3xl mx-4 my-6 transition-all duration-300 bg-[#f0f0f3] text-gray-900 dark:bg-[#1a1a1a] dark:text-white"
    >
      {/* Heading */}
  <motion.h2
  className="text-3xl md:text-4xl font-bold text-center mb-24"
  initial={{ opacity: 0, scale: 0.95, filter: "blur(8px)" }}
  whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  viewport={{ once: true }}
>
  💻 Code Playground
</motion.h2>


      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-center text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed"
      >
        This section is my interactive <span className="font-semibold">Code Playground</span> 🎯.  
        Here, I experiment with small coding challenges, fun logic problems, and creative snippets.  
        It’s where I test ideas, practice algorithms, and showcase my thought process in a playful way 🚀.
      </motion.p>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <CodeCard
          title="Palindrome Checker"
          img="/python.png"
          codeSnippet={`def is_palindrome(s):\n    s = s.lower().replace(" ", "")\n    return s == s[::-1]\n\nprint(is_palindrome("Level"))  # True`}
          inputValue={palInput}
          setInputValue={setPalInput}
          buttonText="Check"
          onClick={checkPalindrome}
          result={palResult}
          colorClass="bg-indigo-600 hover:bg-indigo-700"
        />

        <CodeCard
          title="True/Lie Detector"
          img="/cpp.png"
          codeSnippet={`# C++ Simulation\ncout << "Enter statement: ";\ncout << (rand()%2 ? "TRUE ✅" : "LIE ❌");`}
          inputValue={lieInput}
          setInputValue={setLieInput}
          buttonText="Detect"
          onClick={detectLie}
          result={lieResult}
          colorClass="bg-green-600 hover:bg-green-700"
        />

        <CodeCard
          title="Random Quote Generator"
          img="/python.png"
          codeSnippet={`const quotes = ["Code is like humor", "Simplicity is efficiency"];\nconsole.log(quotes[Math.floor(Math.random()*quotes.length)]);`}
          buttonText="Generate"
          onClick={generateQuote}
          result={quote}
          colorClass="bg-purple-600 hover:bg-purple-700"
        />

        <CodeCard
          title="Name Initial Generator"
          img="/python.png"
          codeSnippet={`def initials(name):\n    return " ".join([p[0].upper() for p in name.split()])\n\nprint(initials("Swayam Prakash")) # S P`}
          inputValue={fullName}
          setInputValue={setFullName}
          buttonText="Generate"
          onClick={genInitials}
          result={initials}
          colorClass="bg-blue-600 hover:bg-blue-700"
        />
      </div>
    </section>
  );
}
