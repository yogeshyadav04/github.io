import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Utility function for smooth scrolling
const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

// Main App Component
const App = () => {
  const nameRef = useRef(null);
  const summaryRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const experienceRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    // GSAP animations for hero section
    gsap.fromTo(
      nameRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
    );
    gsap.fromTo(
      summaryRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, delay: 0.3, ease: 'power3.out' }
    );

    // GSAP ScrollTrigger for sections
    const sections = [
      { ref: skillsRef, id: '#skills' },
      { ref: projectsRef, id: '#projects' },
      { ref: experienceRef, id: '#experience' },
      { ref: contactRef, id: '#contact' },
    ];

    sections.forEach(({ ref, id }) => {
      gsap.fromTo(
        ref.current,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: ref.current,
            start: 'top 80%', // When the top of the element hits 80% of the viewport
            toggleActions: 'play none none none',
          },
        }
      );
    });
  }, []);

  const profile = {
    name: 'YOGESH YADAV',
    title: 'Web Developer',
    summary:
      'An eager and highly motivated Web Developer, currently contributing to innovative solutions at The Ai Matters since May 2025. Proficient in a diverse tech stack including PHP, Python, MySQL, HTML, CSS, JavaScript, and Node.js. Dedicated to building scalable backend systems, designing robust APIs, and crafting responsive, intuitive user interfaces. Eager to apply strong foundational skills and collaborative spirit to contribute to impactful web development projects and grow within a dynamic team.',
    contact: {
      phone: '8279060252',
      email: 'yogeshpvt04@gmail.com',
      linkedin: 'https://www.linkedin.com/in/yogesh-yadav-profile', // Placeholder, user needs to provide actual link
      github: 'https://github.com/yogesh-yadav-repo', // Placeholder, user needs to provide actual link
    },
    skills: [
      { name: 'PHP', icon: 'fab fa-php' },
      { name: 'Python', icon: 'fab fa-python' },
      { name: 'JavaScript', icon: 'fab fa-js' },
      { name: 'Node.js', icon: 'fab fa-node-js' },
      { name: 'Express.js', icon: 'fas fa-server' },
      { name: 'HTML', icon: 'fab fa-html5' },
      { name: 'CSS', icon: 'fab fa-css3-alt' },
      { name: 'Tailwind CSS', icon: 'fab fa-tailwind' }, // Custom icon, assuming 'fab fa-tailwind' from Font Awesome 6
      { name: 'MySQL', icon: 'fas fa-database' },
      { name: 'MongoDB', icon: 'fas fa-leaf' }, // MongoDB icon
      { name: 'Git', icon: 'fab fa-git-alt' },
      { name: 'VS Code', icon: 'fas fa-code' },
      { name: 'RESTful APIs', icon: 'fas fa-exchange-alt' },
      { name: 'ChatGPT', icon: 'fas fa-comments' },
      { name: 'Gemini', icon: 'fas fa-gem' },
      { name: 'Copilot', icon: 'fas fa-robot' },
    ],
    projects: [
      {
        title: 'Real-Time Chat Application',
        description:
          'Engineered a dynamic, real-time chat application featuring instant messaging, secure user authentication, and persistent message storage. Utilized Node.js and Socket.IO for high-speed WebSocket communication, ensuring low-latency message delivery, and integrated with MongoDB for flexible and scalable data management.',
        technologies: ['Node.js', 'Socket.IO', 'MongoDB'],
      },
      {
        title: 'Hotel Management System',
        description:
          'Designed and implemented a comprehensive web-based hotel management system to automate and streamline room bookings, guest check-ins/check-outs, and administrative tasks. Leveraged Node.js for robust backend logic and SQL (MySQL) for efficient relational database management, significantly enhancing operational efficiency.',
        technologies: ['Node.js', 'MySQL'],
      },
      {
        title: 'Spotify Clone',
        description:
          'Engineered a full-stack replica of a music streaming platform, showcasing proficiency in both appealing frontend UI/UX and complex backend API integration. Replicated core functionalities including music playback, playlist creation, user management, and search, using HTML, CSS, JavaScript, and Node.js.',
        technologies: ['HTML', 'CSS', 'JavaScript', 'Node.js'],
      },
      {
        title: 'Music Player',
        description:
          'Built an interactive web-based music player application with essential features such as audio playback controls, dynamic playlist management, and song loading. Implemented using HTML, CSS, and JavaScript, with a strong focus on creating an intuitive user interface and smooth media handling.',
        technologies: ['HTML', 'CSS', 'JavaScript'],
      },
    ],
    experience: [
      {
        role: 'Web Developer',
        company: 'The Ai Matters',
        duration: 'May 2025-Present',
        location: 'Jaipur, Rajasthan',
        description: [
          'Commenced role as a Web Developer, actively contributing to the development and maintenance of web applications utilizing PHP, Python, HTML, CSS, JavaScript, and MySQL.',
          'Assisting in the implementation of backend functionalities using PHP and Python, focusing on database interactions and logical operations with MySQL.',
          'Engaging in frontend development tasks, focusing on creating responsive and user-friendly interfaces with HTML, CSS, and JavaScript.',
          'Familiarizing with the company\'s existing codebase and development workflows, participating in initial project setups and contributing to minor feature enhancements.',
          'Collaborating with senior developers and team members on various development tasks to learn best practices and contribute effectively to project goals.',
        ],
      },
      {
        role: 'Backend Web Development in Node.js Intern',
        company: 'Learn And Build',
        duration: 'Summer 2024 (45 days)',
        location: 'Mansarover, Jaipur',
        description: [
          'Gained practical expertise in backend development, specifically utilizing the Node.js framework to build server-side applications and understand server-client communication.',
          'Focused on implementing core backend logic and understanding API architecture, contributing to functional prototypes for various web services.',
          'Assisted in integrating and managing databases with web applications, learning fundamental principles of data flow and storage.',
        ],
      },
      {
        role: 'Full Stack Web Development Intern',
        company: 'Learn And Build',
        duration: 'Summer 2022 (30 days)',
        location: 'Mansarover, Jaipur',
        description: [
          'Contributed to the full software development lifecycle, from initial client requirements gathering to final deployment, gaining end-to-end project exposure.',
          'Developed both frontend (HTML, CSS, JavaScript) and backend components for web applications, solidifying a holistic understanding of web development.',
          'Enhanced communication and teamwork skills by actively collaborating across frontend and backend development teams to ensure seamless integration.',
        ],
      },
    ],
    education: [
      {
        degree: 'Bachelor of Technology',
        institution: 'Poornima College of Engineering, Jaipur',
        year: '2021-2025',
        grade: '8 CGPA',
      },
      {
        degree: '12th RBSE',
        institution: 'Adarsh Public Sr. Sec. School, Sikar',
        year: '2019',
        grade: '89.80%',
      },
      {
        degree: '10th RBSE',
        institution: 'Shiva Montesarry Public Sr. Sec. School, Sikar',
        year: '2017',
        grade: '84.17%',
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-gray-100 font-inter">
      {/* Font Awesome CDN for icons */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        xintegrity="sha512-Fo3rlrZj/k7ujTnHg4CGR2D7kSs0pReXgVAz/z+BqXv6zN/iFhQp4Fw/f0g9Q9z9A9z9A9z9A9z9A9z9A9z9A9z9A=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />

      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900 bg-opacity-80 backdrop-blur-md p-4 shadow-lg rounded-b-xl">
        <div className="container mx-auto flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text"
          >
            Yogesh Yadav
          </motion.div>
          <ul className="flex space-x-6">
            <li>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-gray-300 hover:text-purple-400 transition-colors duration-300"
                onClick={() => scrollToSection('home')}
              >
                Home
              </motion.button>
            </li>
            <li>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-gray-300 hover:text-purple-400 transition-colors duration-300"
                onClick={() => scrollToSection('skills')}
              >
                Skills
              </motion.button>
            </li>
            <li>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-gray-300 hover:text-purple-400 transition-colors duration-300"
                onClick={() => scrollToSection('projects')}
              >
                Projects
              </motion.button>
            </li>
            <li>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-gray-300 hover:text-purple-400 transition-colors duration-300"
                onClick={() => scrollToSection('experience')}
              >
                Experience
              </motion.button>
            </li>
            <li>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-gray-300 hover:text-purple-400 transition-colors duration-300"
                onClick={() => scrollToSection('contact')}
              >
                Contact
              </motion.button>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center p-4">
        <div className="text-center z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5, type: 'spring', stiffness: 120 }}
            className="mb-8"
          >
            <img
              src="https://placehold.co/200x200/6a0dad/ffffff?text=Profile" // Placeholder image
              alt="Profile Picture"
              className="w-48 h-48 rounded-full mx-auto object-cover border-4 border-purple-500 shadow-xl transform hover:scale-105 transition-transform duration-300 ease-in-out"
            />
          </motion.div>
          <h1 ref={nameRef} className="text-5xl md:text-7xl font-extrabold mb-4 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text leading-tight">
            {profile.name}
          </h1>
          <p ref={summaryRef} className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            {profile.summary}
          </p>
        </div>
        <div className="absolute inset-0 z-0 overflow-hidden">
          {/* Background gradients/shapes */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
          <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" ref={skillsRef} className="container mx-auto py-20 px-4">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
          Skills
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {profile.skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center p-6 bg-gray-800 rounded-xl shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform hover:-translate-y-2"
            >
              <i className={`${skill.icon} text-5xl text-purple-400 mb-4`}></i>
              <p className="text-lg font-semibold text-gray-200">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" ref={projectsRef} className="container mx-auto py-20 px-4">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {profile.projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-gray-800 rounded-xl shadow-lg p-8 transform hover:scale-105 transition-transform duration-300 ease-in-out border border-transparent hover:border-purple-600"
            >
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-300 to-pink-500 text-transparent bg-clip-text">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="bg-purple-700 text-purple-100 text-sm px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Experience & Internship Section */}
      <section id="experience" ref={experienceRef} className="container mx-auto py-20 px-4">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
          Experience & Internships
        </h2>
        <div className="space-y-12">
          {profile.experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              className="bg-gray-800 rounded-xl shadow-lg p-8 border border-transparent hover:border-indigo-600 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-purple-300 to-pink-500 text-transparent bg-clip-text">
                {exp.role}
              </h3>
              <p className="text-xl text-gray-300 mb-2">{exp.company} | {exp.location}</p>
              <p className="text-md text-gray-400 mb-4">{exp.duration}</p>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                {exp.description.map((desc, descIndex) => (
                  <li key={descIndex}>{desc}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Education Section */}
        <h2 className="text-4xl font-bold text-center mt-20 mb-12 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
          Education
        </h2>
        <div className="space-y-8">
          {profile.education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              className="bg-gray-800 rounded-xl shadow-lg p-8 border border-transparent hover:border-indigo-600 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-purple-300 to-pink-500 text-transparent bg-clip-text">
                {edu.degree}
              </h3>
              <p className="text-xl text-gray-300 mb-2">{edu.institution}</p>
              <p className="text-md text-gray-400 mb-2">{edu.year}</p>
              <p className="text-md text-gray-400">Grade: {edu.grade}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" ref={contactRef} className="container mx-auto py-20 px-4">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
          Contact Me
        </h2>
        <div className="flex flex-col items-center space-y-6">
          <motion.a
            href={`tel:${profile.contact.phone}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-3 text-gray-200 hover:text-purple-400 transition-colors duration-300 text-lg"
          >
            <i className="fas fa-phone-alt text-2xl"></i>
            <span>{profile.contact.phone}</span>
          </motion.a>
          <motion.a
            href={`mailto:${profile.contact.email}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-3 text-gray-200 hover:text-purple-400 transition-colors duration-300 text-lg"
          >
            <i className="fas fa-envelope text-2xl"></i>
            <span>{profile.contact.email}</span>
          </motion.a>
          <motion.a
            href={profile.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-3 text-gray-200 hover:text-purple-400 transition-colors duration-300 text-lg"
          >
            <i className="fab fa-linkedin text-2xl"></i>
            <span>LinkedIn</span>
          </motion.a>
          <motion.a
            href={profile.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-3 text-gray-200 hover:text-purple-400 transition-colors duration-300 text-lg"
          >
            <i className="fab fa-github text-2xl"></i>
            <span>GitHub</span>
          </motion.a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} Yogesh Yadav. All rights reserved.</p>
      </footer>

      {/* Tailwind CSS Customizations and Animations */}
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;800&display=swap');

        .font-inter {
          font-family: 'Inter', sans-serif;
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }

        /* Custom scrollbar for dark theme */
        ::-webkit-scrollbar {
          width: 12px;
        }

        ::-webkit-scrollbar-track {
          background: #2d3748; /* bg-gray-800 */
          border-radius: 10px;
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #a78bfa, #ec4899); /* from-purple-400 to-pink-600 */
          border-radius: 10px;
          border: 3px solid #2d3748;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #8b5cf6, #f43f5e);
        }
      `}</style>
    </div>
  );
};

export default App;
