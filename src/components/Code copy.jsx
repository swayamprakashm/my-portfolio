import { useState } from "react";

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
      <h3 className="text-3xl font-bold mb-6">💻 Code Playground</h3>

      {/* Grid for 4 programs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Palindrome Checker */}
        <div className="p-5 rounded-2xl bg-[#f0f0f3] dark:bg-[#1a1a1a] shadow-[8px_8px_16px_#d1d9e6,-8px_-8px_16px_#ffffff] dark:shadow-[8px_8px_16px_#121212,-8px_-8px_16px_#1f1f1f]">
          <img src="/python.png" alt="Palindrome" className="w-12 h-12 mb-3" />
          <h5 className="text-xl font-bold mb-2">Palindrome Checker</h5>
          <pre className="bg-gray-100 dark:bg-[#111] p-3 rounded-md text-sm mb-3 overflow-x-auto">
{`def is_palindrome(s):
    s = s.lower().replace(" ", "")
    return s == s[::-1]

print(is_palindrome("Level"))  # True`}
          </pre>
          <input
            type="text"
            placeholder="Enter text..."
            value={palInput}
            onChange={(e) => setPalInput(e.target.value)}
            className="border px-3 py-1 rounded-md mr-2 text-black"
          />
          <button onClick={checkPalindrome} className="bg-indigo-600 text-white px-3 py-1 rounded-md hover:bg-indigo-700">Check</button>
          {palResult && <p className="mt-2 font-semibold">{palResult}</p>}
        </div>

        {/* True/Lie Detector */}
        <div className="p-5 rounded-2xl bg-[#f0f0f3] dark:bg-[#1a1a1a] shadow-[8px_8px_16px_#d1d9e6,-8px_-8px_16px_#ffffff] dark:shadow-[8px_8px_16px_#121212,-8px_-8px_16px_#1f1f1f]">
          <img src="/cpp.png" alt="Lie Detector" className="w-12 h-12 mb-3" />
          <h5 className="text-xl font-bold mb-2">True/Lie Detector</h5>
          <pre className="bg-gray-100 dark:bg-[#111] p-3 rounded-md text-sm mb-3 overflow-x-auto">
{`# C++ Simulation
cout << "Enter statement: ";
cout << (rand()%2 ? "TRUE ✅" : "LIE ❌");`}
          </pre>
          <input
            type="text"
            placeholder="Enter statement..."
            value={lieInput}
            onChange={(e) => setLieInput(e.target.value)}
            className="border px-3 py-1 rounded-md mr-2 text-black"
          />
          <button onClick={detectLie} className="bg-green-600 text-white px-3 py-1 rounded-md hover:bg-green-700">Detect</button>
          {lieResult && <p className="mt-2 font-semibold">{lieResult}</p>}
        </div>

        {/* Quote Generator */}
        <div className="p-5 rounded-2xl bg-[#f0f0f3] dark:bg-[#1a1a1a] shadow-[8px_8px_16px_#d1d9e6,-8px_-8px_16px_#ffffff] dark:shadow-[8px_8px_16px_#121212,-8px_-8px_16px_#1f1f1f]">
          <img src="/python.png" alt="Quote" className="w-12 h-12 mb-3" />
          <h5 className="text-xl font-bold mb-2">Random Quote Generator</h5>
          <pre className="bg-gray-100 dark:bg-[#111] p-3 rounded-md text-sm mb-3 overflow-x-auto">
{`const quotes = ["Code is like humor", "Simplicity is efficiency"];
console.log(quotes[Math.floor(Math.random()*quotes.length)]);`}
          </pre>
          <button onClick={generateQuote} className="bg-purple-600 text-white px-3 py-1 rounded-md hover:bg-purple-700">Generate</button>
          {quote && <p className="mt-2 font-semibold">{quote}</p>}
        </div>

        {/* Name Initial Generator */}
        <div className="p-5 rounded-2xl bg-[#f0f0f3] dark:bg-[#1a1a1a] shadow-[8px_8px_16px_#d1d9e6,-8px_-8px_16px_#ffffff] dark:shadow-[8px_8px_16px_#121212,-8px_-8px_16px_#1f1f1f]">
          <img src="/python.png" alt="Initials" className="w-12 h-12 mb-3" />
          <h5 className="text-xl font-bold mb-2">Name Initial Generator</h5>
          <pre className="bg-gray-100 dark:bg-[#111] p-3 rounded-md text-sm mb-3 overflow-x-auto">
{`def initials(name):
    return " ".join([p[0].upper() for p in name.split()])

print(initials("Swayam Prakash")) # S P`}
          </pre>
          <input
            type="text"
            placeholder="Enter full name..."
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="border px-3 py-1 rounded-md mr-2 text-black"
          />
          <button onClick={genInitials} className="bg-blue-600 text-white px-3 py-1 rounded-md hover:bg-blue-700">Generate</button>
          {initials && <p className="mt-2 font-semibold">{initials}</p>}
        </div>

      </div>
    </section>
  );
}
