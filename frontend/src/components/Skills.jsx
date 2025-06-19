import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const orbitSkills = [
  "HTML", "CSS", "JavaScript", "React",
  "Node.js", "MongoDB", "Git", "Tailwind CSS",
  "Python", "Flask", "Framer Motion", "SQL" // Added more skills for variety
];

const Skills = () => {
  const [currentSkill, setCurrentSkill] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkill((prev) => (prev + 1) % orbitSkills.length);
    }, 2500); // Rotate every 2.5 seconds for a slightly faster, engaging feel
    return () => clearInterval(interval);
  }, []);

  // Variants for the heading animation
  const headingVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  // Variants for the paragraph animation
  const paragraphVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: 0.2, ease: "easeOut" }
    }
  };

  // Variants for the main section to animate on scroll
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" }
    }
  };


  return (
    <motion.section
      id="skills"
      className="bg-white py-20 px-6 sm:px-8 lg:px-12 flex flex-col md:flex-row items-center justify-center min-h-screen gap-10 font-inter"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      {/* Left Side - Heading and Description */}
      <div className="text-center md:text-left max-w-lg">
        <motion.h2
          className="text-4xl sm:text-5xl font-extrabold mb-4 relative inline-block pb-2"
          variants={headingVariants}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500">
            My Skills
          </span>
          {/* Underline effect with gradient */}
          <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 rounded-full"></span>
        </motion.h2>
        <motion.p className="max-w-sm text-gray-700 text-lg leading-relaxed" variants={paragraphVariants}>
          These are the technologies I regularly use and enjoy working with to build clean, efficient, and scalable applications.
        </motion.p>
      </div>

      {/* Right Side - Smooth Rotating Skill Bubble */}
      <div className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px]
                      bg-gradient-to-br from-pink-300 to-purple-400 rounded-full
                      shadow-inner overflow-hidden flex items-center justify-center
                      border-4 border-indigo-400 animate-spin-slow-less"> {/* Added border and new animation */}
        {/* Inner circle for the current skill */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSkill}
            className="absolute w-32 h-32 sm:w-36 sm:h-36 bg-white text-pink-600 rounded-full
                       flex items-center justify-center text-lg sm:text-xl font-bold shadow-xl
                       border-4 border-purple-500" // Added border to inner circle
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.8, rotate: 10 }}
            transition={{ duration: 0.8, ease: "easeInOut" }} // Reduced duration for faster transition
          >
            {orbitSkills[currentSkill]}
          </motion.div>
        </AnimatePresence>

        {/* Static dots around the circle */}
        {orbitSkills.map((_, index) => {
          const angle = (360 / orbitSkills.length) * index;
          const radius = 120; // Radius for the outer orbit
          const x = radius * Math.cos((angle * Math.PI) / 180);
          const y = radius * Math.sin((angle * Math.PI) / 180);

          return (
            <div
              key={`dot-${index}`}
              className="absolute w-3 h-3 bg-indigo-600 rounded-full opacity-60"
              style={{
                top: `calc(50% + ${y}px - 0.375rem)`, // Adjust for half of dot size
                left: `calc(50% + ${x}px - 0.375rem)`
              }}
            ></div>
          );
        })}
      </div>
    </motion.section>
  );
};

export default Skills;
