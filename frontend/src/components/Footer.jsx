import React from 'react'
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Variants for footer animation
  const footerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  // Variants for social icon animations
  const iconVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <motion.footer
      className="bg-indigo-700 text-white py-8 text-center font-inter shadow-inner" // Darker indigo for depth
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={footerVariants}
    >
      <motion.p className="text-lg mb-4 opacity-90" variants={iconVariants}>
        © {currentYear} Jayaprakash. All rights reserved.
      </motion.p>
      <motion.div className="mt-4 flex justify-center space-x-6" variants={iconVariants}>
        <motion.a
          href="https://github.com/jayaprakashhub" // Replace with your GitHub URL
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-yellow-300 transition transform hover:-translate-y-1"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          variants={iconVariants}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="0" // Set strokeWidth to 0 for fill
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-github"
          >
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 3S18.73 2.14 12 5.14c-6.73-3-7.91-3.85-7.91-3.85A5.07 5.07 0 0 0 4 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
          </svg>
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/jayaprakash-n-0199a8264" // Replace with your LinkedIn URL
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-yellow-300 transition transform hover:-translate-y-1"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          variants={iconVariants}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="0" // Set strokeWidth to 0 for fill
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-linkedin"
          >
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
            <rect x="2" y="9" width="4" height="12"></rect>
            <circle cx="4" cy="4" r="2"></circle>
          </svg>
        </motion.a>
        <motion.a
          href="mailto:jayaprakash.mnm@example.com" // Replace with your email address
          className="text-white hover:text-yellow-300 transition transform hover:-translate-y-1"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          variants={iconVariants}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="0" // Set strokeWidth to 0 for fill
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-mail"
          >
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
            <polyline points="22,6 12,13 2,6"></polyline>
          </svg>
        </motion.a>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
