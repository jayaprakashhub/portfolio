import React from "react";
import { motion } from "framer-motion";

const About = () => {
  // Animation variants for the text content
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  // Animation variants for the image container
  const imageContainerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        delay: 0.3 // Delay image animation slightly after section appears
      }
    }
  };

  return (
    <motion.section
      id="about"
      className="relative min-h-screen flex flex-col md:flex-row items-center justify-center
                 bg-white text-gray-800 px-6 py-16 md:py-24 gap-12 overflow-hidden font-inter"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }} // Animate when 20% of section is visible
    >
      {/* Background Irregular Shapes with Gradient */}
      <motion.div
        className="absolute -top-20 -left-20 w-48 h-48 md:w-64 md:h-64
                   bg-gradient-to-br from-purple-300 to-yellow-300 rounded-[60%] blur-3xl opacity-50 z-0"
        initial={{ x: -100, y: -100, rotate: 0 }}
        animate={{ x: 0, y: 0, rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      ></motion.div>

      <motion.div
        className="absolute -bottom-20 -right-20 w-48 h-48 md:w-64 md:h-64
                   bg-gradient-to-tl from-pink-300 to-indigo-300 rounded-[50%] blur-3xl opacity-50 z-0"
        initial={{ x: 100, y: 100, rotate: 0 }}
        animate={{ x: 0, y: 0, rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      ></motion.div>

      {/* Left: Profile Image with Enhanced Container */}
      <motion.div
        className="relative flex justify-center items-center w-full md:w-1/2 lg:w-2/5 xl:w-1/3
                   p-4 sm:p-6 md:p-0 z-10" // Added padding for smaller screens
        variants={imageContainerVariants}
      >
        {/* Decorative Ring 1 */}
        <div className="absolute inset-0 m-auto w-52 h-52 md:w-64 md:h-64 rounded-full border-4 border-dashed border-indigo-400 opacity-60 animate-spin-slow"></div>
        {/* Decorative Ring 2 */}
        <div className="absolute inset-0 m-auto w-64 h-64 md:w-72 md:h-72 rounded-full border-4 border-solid border-purple-500 opacity-40 animate-spin-reverse-slow"></div>

        {/* Profile Image */}
        <motion.img
          src="/photo.png" // Placeholder for profile.jpg
          alt="Profile"
          className="absolute right-0 w-60 h-60 md:w-80 md:h-80 rounded-full border-6 border-white shadow-2xl relative object-cover z-10"
          initial={{ rotateY: 90 }}
          animate={{ rotateY: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
        />
      </motion.div>

      {/* Right: About Text Container */}
      <motion.div
        className="w-full md:w-1/2 lg:w-3/5 xl:w-2/3 text-center md:text-left
                   bg-white p-8 rounded-2xl shadow-xl z-10 max-w-2xl" // Card-like container for text
        variants={textVariants}
      >
        <h2 className="text-3xl md:text-4xl font-extrabold mb-6 relative inline-block pb-2">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500">
            About Me
          </span>
          {/* Underline effect with gradient */}
          <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 rounded-full"></span>
        </h2>

        <motion.p
          className="text-lg leading-relaxed text-gray-700 mb-4"
          variants={textVariants}
        >
          I'm a passionate web developer with a focus on building modern, responsive, and user-friendly websites and applications. I love turning complex problems into simple, beautiful, and intuitive solutions. Whether it's front-end interfaces or back-end logic, I enjoy working across the full stack.
        </motion.p>
        <motion.p
          className="text-lg leading-relaxed text-gray-700 mt-4"
          variants={textVariants}
        >
          When I'm not coding, you'll find me exploring new tech trends, working on personal projects, or contributing to open-source communities. I’m currently looking for opportunities where I can grow as a developer and contribute to meaningful projects.
        </motion.p>
      </motion.div>
    </motion.section>
  );
};

export default About;
