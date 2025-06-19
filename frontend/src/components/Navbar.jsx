import { useState } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

const navLinks = [
  { to: 'hero', label: 'Home' },
  { to: 'about', label: 'About' },
  { to: 'skills', label: 'Skills' },
  { to: 'projects', label: 'Projects' },
  { to: 'contact', label: 'Contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to handle CV download (replace with your actual CV file)
const handleDownloadCV = async (e) => {
    e.preventDefault();
  try {
    const response = await fetch("https://portfolio-zaue.onrender.com/api/download-cv", {
      method: "POST"
    });

    if (!response.ok) {
      throw new Error("Failed to download CV");
    }

    // Convert the response to a Blob and trigger download manually
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "Jayaprakash-CV.pdf"; // Suggested filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url); // Clean up
  } catch (error) {
    console.error("CV download error:", error);
    alert("Failed to download the CV. Please try again later.");
  }
};

  return (
    <motion.nav
      className="fixed top-0 w-full bg-white shadow-md z-50"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-extrabold text-indigo-600 tracking-tight">
          My<span className="text-pink-500">Portfolio</span>
        </h1>

        {/* Desktop Links and CV Button */}
        <div className="space-x-6 hidden md:flex items-center">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.to}
              smooth={true}
              duration={500}
              className="text-gray-700 font-medium hover:text-indigo-600 cursor-pointer transition-all hover:scale-105"
              activeClass="text-indigo-700 font-semibold"
              spy={true}
            >
              {link.label}
            </Link>
          ))}
          <motion.button
            onClick={handleDownloadCV}
            className="inline-flex items-center gap-2 bg-purple-500 text-white px-5 py-2 rounded-full font-semibold shadow-lg
                       hover:bg-purple-600 transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 text-sm"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Download CV
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 focus:outline-none"
          >
            {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <motion.div
          className="md:hidden bg-white shadow-inner px-4 pb-4 flex flex-col items-center" /* Added flex-col and items-center */
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.to}
              smooth={true}
              duration={500}
              offset={-60}
              onClick={() => setIsOpen(false)}
              className="block py-2 text-gray-700 font-medium hover:text-indigo-600 cursor-pointer transition-all"
              spy={true}
              activeClass="text-indigo-700 font-semibold"
            >
              {link.label}
            </Link>
          ))}
          <motion.button
            onClick={() => {
              handleDownloadCV();
              setIsOpen(false); // Close menu after clicking download
            }}
            className="mt-4 inline-flex items-center gap-2 bg-purple-500 text-white px-7 py-3 rounded-full font-semibold shadow-lg
                       hover:bg-purple-600 transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 text-base" /* Adjusted padding/font size for mobile */
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Download My CV
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
          </motion.button>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;