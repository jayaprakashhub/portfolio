import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Hero Component
const Hero = () => {
  const phrases = [
    "I am Jayaprakash",
    "A Full Stack Developer",
    "A Tech Enthusiast",
    "A Problem Solver"
  ];

  const [text, setText] = useState("");
  const [index, setIndex] = useState(0); // current phrase
  const [subIndex, setSubIndex] = useState(0); // current letter
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    // Loop through phrases if all are typed
    if (index === phrases.length) {
      setIndex(0);
    }

    // When a phrase is fully typed, pause then start deleting
    if (subIndex === phrases[index]?.length + 1 && !deleting) {
      const timeout = setTimeout(() => setDeleting(true), 1500); // Longer pause before deleting
      return () => clearTimeout(timeout);
    }

    // When a phrase is fully deleted, move to the next phrase
    if (deleting && subIndex === 0) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % phrases.length);
      return;
    }

    // Typing/Deleting logic
    const typingSpeed = deleting ? 75 : 150; // Faster delete, slower type
    const timeout = setTimeout(() => {
      setSubIndex((prev) => (deleting ? prev - 1 : prev + 1));
      setText(phrases[index]?.substring(0, subIndex));
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting, phrases]);

  // Function for smooth scrolling
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Function to handle CV download
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
    <motion.section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center text-center
                 bg-gradient-to-br from-indigo-600 via-purple-500 to-pink-500 text-white
                 mt-16 sm:mt-0 px-6 py-12 sm:px-8 lg:px-12 font-inter relative overflow-hidden" // Added overflow-hidden for shapes
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
    >
      {/* Dynamic Background Shapes for Hero Section */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-48 h-48 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"
        animate={{ x: [0, 100, 0], y: [0, -100, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      ></motion.div>
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob-delay"
        animate={{ x: [0, -100, 0], y: [0, 100, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      ></motion.div>

      <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 z-10">
        {/* Text Section */}
        <motion.div
          className="text-left md:w-1/2"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            {/* Conditional rendering for "Jayaprakash" highlight */}
            {text.includes("Jayaprakash") ? (
              <>
                {text.split("Jayaprakash")[0]}
                <span className="text-yellow-300">Jayaprakash</span>
                {text.split("Jayaprakash")[1]}
              </>
            ) : (
              text
            )}
            <span className="inline-block w-1 h-8 bg-yellow-300 ml-1 animate-blink-fast"></span>
          </h1>

          <p className="text-lg md:text-xl lg:text-2xl mb-8 opacity-90">
            A passionate <span className="font-semibold">Full Stack Developer</span> crafting engaging web experiences.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-start"> {/* Container for buttons */}
            <a
              onClick={() => scrollToSection("projects")} // Using onClick for smooth scroll
              className="inline-flex items-center gap-3 bg-white text-indigo-600 px-7 py-3 rounded-full font-semibold shadow-lg
                         hover:bg-yellow-300 hover:text-black transition transform hover:-translate-y-1 cursor-pointer
                         group relative overflow-hidden" // Added group for hover effects
            >
              <span className="relative z-10">View My Projects</span>
              {/* Replaced FaArrowDown with inline SVG */}
              <svg className="relative z-10 w-5 h-5 group-hover:animate-bounce" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10 12a1 1 0 01-.707-.293l-3-3a1 1 0 011.414-1.414L10 9.586l2.293-2.293a1 1 0 011.414 1.414l-3 3A1 1 0 0110 12z" clipRule="evenodd"></path>
              </svg>
              {/* Hover effect background */}
              <span className="absolute inset-0 bg-yellow-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left z-0"></span>
            </a>

            <motion.button
               onClick={handleDownloadCV}
              className="inline-flex items-center gap-2 bg-purple-500 text-white px-7 py-3 rounded-full font-semibold shadow-lg
                         hover:bg-purple-600 transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
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
          </div>
        </motion.div>

        {/* Image + Shapes */}
        <motion.div
          className="relative flex justify-center items-center mt-10 md:mt-0 p-4 sm:p-6 md:p-0"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {/* Shape 1 - uses gradient and refined animation */}
          <motion.div
            className="absolute -top-10 -left-10 w-40 h-40 bg-gradient-to-br from-yellow-300 to-purple-300
                       rounded-[60%] blur-2xl opacity-70 z-0 animate-float-one"
            animate={{ y: [0, -15, 0], x: [0, 15, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          ></motion.div>

          {/* Shape 2 - uses gradient and refined animation */}
          <motion.div
            className="absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-tl from-pink-300 to-indigo-300
                       rounded-[50%] blur-3xl opacity-60 z-0 animate-float-two"
            animate={{ rotate: [0, 360], y: [0, 15, 0], x: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
          ></motion.div>

          {/* Profile Image */}
          <motion.img
            src="/photo.png" // Placeholder for profile.jpg
            alt="Profile"
            className="w-60 h-60 md:w-80 md:h-80 rounded-full border-6 border-white shadow-2xl z-10 relative object-cover" // Increased border
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.08 }} // Only scale on hover
            transition={{ duration: 1, delay: 0.6 }}
          />
        </motion.div>
      </div>
    </motion.section>
  );
};


export default Hero;
