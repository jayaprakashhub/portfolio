import React from 'react';
import { motion } from 'framer-motion';

const Project = () => {
  const projects = [
    {
      title: "Quiz Web App",
      description: "A React-based quiz application with login, timer, result tracking, and an admin dashboard.",
      tech: ["React", "Node.js", "MongoDB", "Express"],
      github: "https://github.com/jayaprakashhub/Infoganza_quiz.git", // Replace with actual URL
      demo: "https://quiz-app-demo.vercel.app" // Replace with actual URL
    },
    {
      title: "Chatbot System",
      description: "Multi-chat chatbot with disease prediction using custom-trained models and a user-friendly interface.",
      tech: ["React", "Flask", "Express", "MongoDB","Pinecone"],
      github: "https://github.com/yourusername/chatbot-system" // Replace with actual URL
    },
    {
      title: "Portfolio Website",
      description: "A sleek, single-page responsive portfolio built with React and Tailwind CSS, featuring smooth scrolling and animations.",
      tech: ["React", "Tailwind CSS","Express","Mongodb"],
      github: "https://github.com/yourusername/portfolio", // Replace with actual URL
      demo: "#"
    },
    {
      title: "E-commerce Platform",
      description: "Developed a full-stack e-commerce solution with product listings, shopping cart, and secure payment processing.",
      tech: ["React.js", "Express", "Mongodb"],
      github: "https://github.com/jayaprakashhub/Demo.git", // Replace with actual URL
      demo: "https://ecommerce-demo.vercel.app" // Replace with actual URL
    }
  ];

  // Animation variants for the container to stagger children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1 // Stagger each child's animation by 0.1 seconds
      }
    }
  };

  // Animation variants for each project card
  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <section id="projects" className="bg-gray-100 py-16 px-6 sm:px-8 lg:px-12 font-inter">
      <div className="max-w-7xl mx-auto text-center">
        {/* Project Section Heading with Gradient Effect */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl font-extrabold mb-12 relative inline-block pb-2"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500">
            My Projects
          </span>
          {/* Underline effect */}
          <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 rounded-full"></span>
        </motion.h2>

        {/* Projects Grid Container with Staggered Animation */}
        <motion.div
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible" // Animate when the component enters the viewport
          viewport={{ once: true, amount: 0.3 }} // Trigger animation once when 30% of element is visible
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-xl p-8 flex flex-col justify-between
                         transition-all duration-300 ease-in-out transform
                         hover:scale-105 hover:shadow-2xl hover:border-indigo-400 border border-transparent"
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }} // Subtle lift on hover
            >
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3 leading-tight">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-5 text-base leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="bg-indigo-50 text-indigo-700 text-sm font-medium
                                 px-3 py-1 rounded-full shadow-sm"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-auto flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold
                               px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-200
                               transform hover:-translate-y-1 flex items-center justify-center text-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2"
                    >
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 3S18.73 2.14 12 5.14c-6.73-3-7.91-3.85-7.91-3.85A5.07 5.07 0 0 0 4 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                    GitHub
                  </a>
                )}
                {/* {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-white text-indigo-600 border border-indigo-500 font-semibold
                               px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-200
                               transform hover:-translate-y-1 flex items-center justify-center text-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                    Live Demo
                  </a>
                )} */}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Project;
