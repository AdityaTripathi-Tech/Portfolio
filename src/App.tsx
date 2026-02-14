import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone, MapPin, Download, ExternalLink, Calendar, Award, Users, BookOpen, Code, GraduationCap, Star, Trophy, Target, Menu, X, Play, FileText, MessageCircle } from 'lucide-react';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'community', label: 'Community' },
    { id: 'contact', label: 'Contact' }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'experience', 'achievements', 'certifications', 'community', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const personalInfo = {
    name: "Aditya Tripathi",
    location: "Ghaziabad, Uttar Pradesh, India",
    phone: "+91 6307273997",
    email: "tripathi.aditya384@gmail.com",
    linkedin: "https://www.linkedin.com/in/aditya-tripathi-574374253/",
    github: "https://github.com/AdityaTripathi-Tech",
    tagline: "Harvard Aspire Seed Fund Winner ($500) | SIH'2024 | AI & ML| \n Co-Founder of CODE CRAFTING | Web Developer | \n B.Tech CSE (AI & ML) 2027"
  };

  const about = "I am a B.Tech Computer Science Engineering (AI & ML) student graduating in 2027 with strong interest in artificial intelligence, web development, and impact-driven technology solutions. I have hands-on experience through internships, hackathons, and community initiatives. I focus on building scalable applications, AI-based solutions, and socially impactful tech projects. I am a Harvard Aspire Leaders Program Seed Fund winner ($500) recognized for leadership, innovation, and social impact.";

  const skills = {
    "Programming": ["Python", "JavaScript", "C"],
    "Web Development": ["HTML", "CSS", "React", "Front-End Development"],
    "AI/ML": ["NumPy", "Pandas", "MediaPipe", "NetworkX", "Librosa"],
    "Database": ["MongoDB", "Supabase"],
    "Tools": ["GitHub", "Figma", "Canva"],
    "Soft Skills": ["Leadership", "Public Speaking", "Team Collaboration", "Event Management"]
  };

  const experience = [
    {
      company: "Amdox Technologies",
      role: "Web Development Intern",
      period: "Jan 2026 – Feb 2026",
      description: "Worked on scalable real-world web applications and improved user experience."
    },
    {
      company: "Cloud Gyata Solutions",
      role: "Web Development Intern",
      period: "Dec 2024 – Feb 2025",
      description: "Developed frontend website sections reducing loading time by 18%."
    },
    {
      company: "Ciphermetic Consulting Pvt Ltd",
      role: "Graphic Designer Intern",
      period: "Dec 2024 – Feb 2025",
      description: "Created 50+ design assets increasing engagement by 22%."
    },
    {
      company: "IdeationX",
      role: "R&D / Creative Intern",
      period: "May 2024 – Oct 2024",
      description: "Branding, graphics, startup development support."
    }
  ];

  const projects = [
    {
      title: "TARA – AI Voice Assistant",
      description: "Advanced voice assistant for OS operations, web search, auto-scrolling, screen content detection, and auto-typing.",
      technologies: ["Python", "SpeechRecognition", "pyttsx3", "OpenAI API"],
      liveLink: null,
      githubLink: null,
      demoVideo: "https://drive.google.com/file/d/1imzRTQloUzvZaJxVZweG1d1Efacr79vo/view",
      status: "Completed",
      impact: "Comprehensive AI assistant with multiple automation capabilities"
    },
    {
      title: "CBT: Cognitive Behavioral Therapy",
      description: "AI-powered mental health support platform providing CBT techniques, mood tracking, and personalized therapy sessions.",
      technologies: ["React", "Node.js", "TensorFlow.js", "MongoDB", "Express"],
      status: "Completed",
      liveLink: "https://www.loom.com/share/670a6e0ac1874045a7e2f06fb5825a3b",
      githubLink: null,
      demoVideo: null,
      impact: "Mental health support for 500+ users with AI-driven therapy sessions and mood tracking."
    },
    {
      title: "CBT Mental Health Platform",
      description: "Secure mental therapy platform with blockchain integration for privacy and security.",
      technologies: ["HTML", "CSS", "JavaScript", "Blockchain"],
      liveLink: "https://cbt-test1.netlify.app/",
      githubLink: null,
      demoVideo: null,
      status: "Completed",
      impact: "Accessible mental health support with enhanced privacy features"
    },
    {
      title: "POTONE Website",
      description: "Professional business website showcasing products and services.",
      technologies: ["React", "Tailwind CSS", "Responsive Design"],
      liveLink: "https://www.potoneindia.com",
      githubLink: null,
      demoVideo: null,
      status: "Completed",
      impact: "Live business website serving real customers"
    },
    {
      title: "Delhi Pollution AI Proposal",
      description: "AI-driven environmental monitoring concept for pollution tracking and analysis.",
      technologies: ["AI/ML", "Data Analysis", "Environmental Science"],
      liveLink: null,
      githubLink: null,
      demoVideo: null,
      status: "Concept",
      impact: "Harvard Aspire Seed Fund winning proposal ($500)"
    },
    {
      title: "RAKSHAK AI",
      description: "AI-based safety and emergency monitoring system for personal security.",
      technologies: ["AI/ML", "Computer Vision", "Emergency Systems"],
      liveLink: null,
      githubLink: null,
      demoVideo: null,
      status: "Concept",
      impact: "Potential life-saving emergency response technology"
    },
    {
      title: "Expense Tracker",
      description: "Full-stack application for personal finance management and expense tracking.",
      technologies: ["Full-Stack", "Database", "UI/UX"],
      liveLink: null,
      githubLink: null,
      demoVideo: null,
      status: "Completed",
      impact: "Personal finance management tool"
    }
  ];

  const achievements = [
    { 
      title: "Harvard Aspire Leaders Program Seed Fund Winner", 
      amount: "$500", 
      icon: <Trophy className="w-5 h-5" />,
      description: "Selected for innovative AI-driven environmental monitoring proposal"
    },
    { 
      title: "Smart India Hackathon 2024 Qualifier", 
      icon: <Award className="w-5 h-5" />,
      description: "National-level hackathon qualification for innovative tech solutions"
    },
    { 
      title: "Ideathon Winner (Solo)", 
      icon: <Star className="w-5 h-5" />,
      description: "First place in solo ideation competition"
    },
    { 
      title: "Google DevFest Delhi/Noida Event Recognition", 
      icon: <Target className="w-5 h-5" />,
      description: "Recognized for contributions to developer community"
    },
    { 
      title: "Microsoft Learn Badges (120+)", 
      icon: <Award className="w-5 h-5" />,
      description: "Extensive certification in Microsoft technologies"
    },
    { 
      title: "JEE Qualified", 
      icon: <GraduationCap className="w-5 h-5" />,
      description: "Qualified in prestigious engineering entrance examination"
    }
  ];

  const communityWork = [
    { 
      title: "Microsoft Learn Community Contributor", 
      description: "Active contributor to Microsoft learning community",
      link: null
    },
    { 
      title: "Camp Coordinator at Light De Literacy NGO", 
      description: "Organizing educational camps for underprivileged children",
      link: null
    },
    { 
      title: "Code Crafting Developer Community", 
      description: "Co-founder of a thriving developer community with 1500+ members",
      link: "https://chat.whatsapp.com/IvxdDSNZlzuJsc7Eu1khxT",
      members: "1500+"
    }
  ];

  const certifications = [
    { title: "AWS Educate Introduction to Cloud", issuer: "Amazon Web Services" },
    { title: "Database Management System Certification", issuer: "Technical Institution" },
    { title: "Harvard Aspire Leaders Program 2025", issuer: "Harvard University" },
    { title: "DSA Certification", issuer: "CodeChef" },
    { title: "Microsoft User Group Uttar Pradesh", issuer: "Microsoft" },
    { title: "Power BI Club Volunteer & Outreach", issuer: "Microsoft Power BI Community" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Bar */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md shadow-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold gradient-text">AT</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                      activeSection === item.id
                        ? 'text-purple-600 bg-purple-50'
                        : 'text-gray-700 hover:text-purple-600 hover:bg-purple-50'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-purple-600 p-2"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-white border-t border-gray-100"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-3 py-2 text-base font-medium rounded-md transition-colors ${
                    activeSection === item.id
                      ? 'text-purple-600 bg-purple-50'
                      : 'text-gray-700 hover:text-purple-600 hover:bg-purple-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-100 via-pink-50 to-blue-100"></div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4 max-w-4xl mx-auto"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="mb-8"
          >
            <div className="w-32 h-32 mx-auto rounded-full overflow-hidden shadow-xl border-4 border-purple-200">
              <img 
                src="/profile.png" 
                alt="Aditya Tripathi" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold text-gray-800 mb-6 font-poppins"
          >
            {personalInfo.name}
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-600 mb-8 font-light max-w-3xl mx-auto"
          >
            {personalInfo.tagline}
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-8"
          >
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="bg-white px-6 py-3 rounded-full text-purple-600 hover:bg-purple-50 transition-colors shadow-md hover:shadow-lg">
              <Linkedin className="w-5 h-5 inline mr-2" />
              LinkedIn
            </a>
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="bg-white px-6 py-3 rounded-full text-purple-600 hover:bg-purple-50 transition-colors shadow-md hover:shadow-lg">
              <Github className="w-5 h-5 inline mr-2" />
              GitHub
            </a>
            <a href="/resume.pdf" download className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full hover:opacity-90 transition-opacity shadow-md hover:shadow-lg">
              <Download className="w-5 h-5 inline mr-2" />
              Download Resume
            </a>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap justify-center gap-6 text-gray-600 text-sm"
          >
            <div className="flex items-center gap-2 bg-white/80 px-4 py-2 rounded-full">
              <Mail className="w-4 h-4" />
              {personalInfo.email}
            </div>
            <div className="flex items-center gap-2 bg-white/80 px-4 py-2 rounded-full">
              <Phone className="w-4 h-4" />
              {personalInfo.phone}
            </div>
            <div className="flex items-center gap-2 bg-white/80 px-4 py-2 rounded-full">
              <MapPin className="w-4 h-4" />
              {personalInfo.location}
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-800 font-poppins"
          >
            About Me
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gray-50 rounded-2xl p-8 md:p-12 shadow-lg border border-gray-100"
          >
            <p className="text-lg text-gray-700 leading-relaxed">
              {about}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-800 font-poppins"
          >
            Skills & Expertise
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map((category, index) => (
              <motion.div
                key={category[0]}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100"
              >
                <h3 className="text-xl font-semibold mb-4 text-gray-800">{category[0]}</h3>
                <div className="flex flex-wrap gap-2">
                  {category[1].map((skill, skillIndex) => (
                    <span key={skillIndex} className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-800 font-poppins"
          >
            Featured Projects
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
              >
                <div className="h-48 bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center relative overflow-hidden">
                  {project.title === "TARA – AI Voice Assistant" && (
                    <img 
                      src="/tara_ai_assistant.png" 
                      alt="TARA AI Assistant Interface" 
                      className="w-full h-full object-cover"
                    />
                  )}
                  {project.title === "CBT: Cognitive Behavioral Therapy" && (
                    <img 
                      src="/cbt_project_screenshot.png" 
                      alt="CBT Mental Health Platform" 
                      className="w-full h-full object-cover"
                    />
                  )}
                  {project.title === "CBT Mental Health Platform" && (
                    <img 
                      src="/cbt_mental_health_platform.png" 
                      alt="CBT Mental Health Platform" 
                      className="w-full h-full object-cover"
                    />
                  )}
                  {project.title === "POTONE Website" && (
                    <img 
                      src="/potone.png" 
                      alt="POTONE Website" 
                      className="w-full h-full object-cover"
                    />
                  )}
                  {project.title === "Delhi Pollution AI Proposal" && (
                    <img 
                      src="/delhi pollution.jpg" 
                      alt="Delhi Pollution AI Proposal" 
                      className="w-full h-full object-cover"
                    />
                  )}
                  {project.title === "RAKSHAK AI" && (
                    <img 
                      src="/rakshak ai.png" 
                      alt="RAKSHAK AI" 
                      className="w-full h-full object-cover"
                    />
                  )}
                  {project.title === "Expense Tracker" && (
                    <img 
                      src="/expense tracker.png" 
                      alt="Expense Tracker" 
                      className="w-full h-full object-cover"
                    />
                  )}
                  {(!project.title.includes("TARA") && !project.title.includes("CBT") && !project.title.includes("POTONE") && !project.title.includes("Delhi Pollution") && !project.title.includes("RAKSHAK") && !project.title.includes("Expense Tracker")) && (
                    <Code className="w-16 h-16 text-white relative z-10" />
                  )}
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm ${
                      project.status === 'Completed' ? 'bg-green-500/80 text-white' :
                      project.status === 'In Development' ? 'bg-yellow-500/80 text-white' :
                      'bg-blue-500/80 text-white'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm line-clamp-2">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span key={techIndex} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-500 rounded text-xs">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                  
                  <p className="text-sm text-gray-700 mb-4 font-medium">{project.impact}</p>
                  
                  <div className="flex gap-2 flex-wrap">
                    {project.liveLink && (
                      <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 bg-purple-600 text-white px-3 py-1 rounded text-sm hover:bg-purple-700 transition-colors">
                        <ExternalLink className="w-3 h-3" />
                        Live Demo
                      </a>
                    )}
                    {project.demoVideo && (
                      <a href={project.demoVideo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 bg-red-600 text-white px-3 py-1 rounded text-sm hover:bg-red-700 transition-colors">
                        <Play className="w-3 h-3" />
                        Demo
                      </a>
                    )}
                    {project.githubLink && (
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 bg-gray-800 text-white px-3 py-1 rounded text-sm hover:bg-gray-900 transition-colors">
                        <Github className="w-3 h-3" />
                        Code
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-800 font-poppins"
          >
            Professional Experience
          </motion.h2>
          
          <div className="relative">
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-purple-600 to-pink-600"></div>
            
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex items-center mb-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'}`}>
                  <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{exp.role}</h3>
                    <p className="text-lg text-purple-600 mb-2">{exp.company}</p>
                    <p className="text-sm text-gray-600 mb-3 flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </p>
                    <p className="text-gray-700">{exp.description}</p>
                  </div>
                </div>
                
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-purple-600 rounded-full border-4 border-white"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-800 font-poppins"
          >
            Achievements & Awards
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100"
              >
                <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white">
                  {achievement.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center">{achievement.title}</h3>
                {achievement.amount && (
                  <p className="text-purple-600 font-bold text-center mb-2">{achievement.amount}</p>
                )}
                <p className="text-sm text-gray-600 text-center">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center"
          >
            <a 
              href="https://drive.google.com/drive/folders/14LSefVmsBKqSt1KkrzxOpBg3GYwQKbjG"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors shadow-lg hover:shadow-xl"
            >
              <FileText className="w-5 h-5" />
              View Achievement Proofs
            </a>
          </motion.div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-800 font-poppins"
          >
            Certifications
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100"
              >
                <BookOpen className="w-8 h-8 text-purple-600 mb-4" />
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{cert.title}</h3>
                <p className="text-sm text-gray-600">{cert.issuer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section id="community" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-800 font-poppins"
          >
            Community Work
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {communityWork.map((work, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100"
              >
                <Users className="w-8 h-8 text-purple-600 mb-4" />
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{work.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{work.description}</p>
                {work.members && (
                  <p className="text-purple-600 font-semibold text-sm mb-4">{work.members} Members</p>
                )}
                {work.link && (
                  <a 
                    href={work.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors text-sm"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Join Community
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-800 font-poppins"
          >
            Get In Touch
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
          >
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-100" />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Email</label>
                  <input type="email" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-100" />
                </div>
              </div>
              
              <div>
                <label className="block text-gray-700 font-medium mb-2">Subject</label>
                <input type="text" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-100" />
              </div>
              
              <div>
                <label className="block text-gray-700 font-medium mb-2">Message</label>
                <textarea rows={5} className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-100"></textarea>
              </div>
              
              <button type="submit" className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold py-3 rounded-lg hover:opacity-90 transition-opacity shadow-lg hover:shadow-xl">
                Send Message
              </button>
            </form>
            
            <div className="mt-8 pt-8 border-t border-gray-200">
              <div className="flex flex-wrap justify-center gap-6">
                <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-2 text-gray-700 hover:text-purple-600 transition-colors">
                  <Mail className="w-5 h-5" />
                  {personalInfo.email}
                </a>
                <a href={`tel:${personalInfo.phone}`} className="flex items-center gap-2 text-gray-700 hover:text-purple-600 transition-colors">
                  <Phone className="w-5 h-5" />
                  {personalInfo.phone}
                </a>
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-700 hover:text-purple-600 transition-colors">
                  <Linkedin className="w-5 h-5" />
                  LinkedIn
                </a>
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-700 hover:text-purple-600 transition-colors">
                  <Github className="w-5 h-5" />
                  GitHub
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-white border-t border-gray-100">
        <div className="text-center">
          <p className="text-gray-600">
            © 2024 Aditya Tripathi. Built with React, Tailwind CSS & Framer Motion.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
