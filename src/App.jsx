import { useState } from "react";
import About from "./components/About";
import Education from "./components/Education";
import Certification from "./components/Certification"; // text one
import Certifications from "./components/Certifications"; // gallery one
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Code from "./components/Code";
import Journey from "./components/Journey";  
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Header from "./components/Header"; 
import Footer from "./components/Footer";


export default function App() {
  const [activePage, setActivePage] = useState("about");

  const renderPage = () => {
    switch (activePage) {
      case "projects":
        return <Projects />;
      case "skills":
        return <Skills />;
      case "code":
        return <Code />;
      case "contact":
        return <Contact />;
      case "journey": 
        return <Journey />;
      case "certifications":
        return <Certifications />;
      case "about":
      default:
        return (
          <>
            <About />
            <Education />
            <Certification />
          </>
        );
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-[#1a1a1a] text-gray-900 dark:text-white">
      {/* Sticky Top Navbar */}
      <Navbar setActivePage={setActivePage} activePage={activePage} />

      {/* Mobile-only Header (below Navbar, above About) */}
      {activePage === "about" && (
        <div className="md:hidden px-4 mt-20">
          <Header />
        </div>
      )}

      {/* Main layout */}
      <div className="flex flex-col md:flex-row flex-grow">
        {/* Sidebar Header (Desktop only) */}
        {activePage === "about" && (
          <aside className="hidden md:block md:w-1/4 p-4 pt-24 sticky top-20 h-fit">
            <Header />
          </aside>
        )}
        <main
          className={`pt-24 px-4 pb-10 ${
            activePage === "about" ? "md:w-3/4" : "w-full"
          }`}
        >
          {renderPage()}
        </main>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}