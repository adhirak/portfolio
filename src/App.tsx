import React, { useState, useEffect } from 'react';
import { ChevronDown, Github, Linkedin, Mail, Phone, MapPin, Star, Rocket, Zap, Code, Database, Palette, ExternalLink, Send } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const projects = [
    {
      id: 1,
      title: "EduMatrix",
      subtitle: "Course Management System",
      description: "A comprehensive full-stack course planner designed for educational institutions",
      tech: ["React", "Tailwind CSS", "Java Spring Boot", "Docker", "H2 Database"],
      details: [
        "Developed a full-stack course planner using React, Tailwind CSS, and Java Spring Boot",
        "Implemented course logic, prerequisites, and scheduling with validation via an H2 in-memory database",
        "Containerized with Docker, automated builds using GitHub Actions, and deployed via Docker Compose"
      ],
      color: "from-blue-400 to-purple-600",
      size: "w-32 h-32"
    },
    {
      id: 2,
      title: "DeepCheckers",
      subtitle: "Deepfake Video Detection",
      description: "AI-powered deepfake detection system with advanced neural networks",
      tech: ["TensorFlow", "OpenCV", "Python", "AWS", "Dash", "YOLO"],
      details: [
        "Developed a hybrid 3D-CNN + RNN model for detecting face-swap deepfakes, achieving 81% accuracy",
        "Dash-based frontend with an AWS-hosted backend",
        "Utilized TensorFlow, OpenCV, and YOLO for model training and object detection"
      ],
      color: "from-red-400 to-pink-600",
      size: "w-28 h-28"
    },
    {
      id: 3,
      title: "Edgy",
      subtitle: "Robot Vacuum Cleaner",
      description: "Autonomous cleaning robot with advanced navigation and patent-pending design",
      tech: ["ROS", "Python", "Arduino", "LiDAR", "Ultrasonic Sensors"],
      details: [
        "Autonomous robot with advanced edge detection and corner-cleaning features",
        "Used ultrasonic and LiDAR sensors for obstacle avoidance",
        "Built a servo-actuated sponge mechanism; patent filed for the design"
      ],
      color: "from-green-400 to-teal-600",
      size: "w-24 h-24"
    },
    {
      id: 4,
      title: "RetrieVIT",
      subtitle: "Lost & Found Web App",
      description: "University-focused platform for reporting and claiming lost items",
      tech: ["HTML", "CSS", "JavaScript", "Flask", "MongoDB"],
      details: [
        "Full-stack web app for reporting and claiming lost items at university",
        "Tech stack: HTML, CSS, JS, Flask, MongoDB",
        "Real-time DB integration, secure item verification, and responsive UX"
      ],
      color: "from-yellow-400 to-orange-600",
      size: "w-20 h-20"
    }
  ];

  const skills = {
    "Programming Languages": ["C/C++", "Python", "Java", "Dart", "SQL", "JavaScript", "HTML", "CSS"],
    "Frameworks & Libraries": ["React", "Tailwind CSS", "Bootstrap", "Flask", "Django", "Java Spring Boot", "Flutter"],
    "Data Science & AI": ["TensorFlow", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "OpenCV", "Plotly", "Manim"],
    "Tools & Platforms": ["Docker", "Git", "ROS"],
    "Design Tools": ["Figma", "Canva"]
  };

  const languages = ["English", "Hindi", "Tamil", "Spanish"];

  if (isLoading) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin w-16 h-16 border-4 border-cyan-400 border-t-transparent rounded-full mx-auto mb-4"></div>
          <p className="text-cyan-400 text-xl font-mono">Initializing Starship...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-950 text-white overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-purple-950/20 to-slate-950"></div>
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `starTwinkle ${2 + Math.random() * 3}s infinite`,
              animationDelay: `${Math.random() * 4}s`
            }}
          ></div>
        ))}
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-cyan-400/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-cyan-400 font-mono">ADHIRA.exe</div>
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Projects', 'Skills', 'Experience', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-mono text-sm"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Landing Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative z-10">
        <div className="text-center space-y-8">
          <div className="relative">
            <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
              ADHIRA K K
            </h1>
            <p className="text-2xl md:text-3xl text-gray-300 font-mono mb-8">Computer Science Student</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 text-gray-400 mb-12">
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-cyan-400" />
              <span>+91 8870133263</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-cyan-400" />
              <span>adhirakumaresh@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-cyan-400" />
              <span>India</span>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Welcome aboard the starship of <span className="text-cyan-400 font-semibold">Adhira K K</span>
            </p>
            <a
              href="#about"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full text-white font-semibold hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-cyan-400/25"
            >
              <Rocket className="w-5 h-5" />
              Initiate Launch
            </a>
          </div>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-8 h-8 text-cyan-400" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Planet Earth Base
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-slate-900/50 backdrop-blur-sm p-8 rounded-2xl border border-cyan-400/20">
                <h3 className="text-2xl font-bold text-cyan-400 mb-4">Mission Statement</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Engineering student passionate about robotics, AI, and full-stack development. 
                  Actively building skills in UI/UX design and hands-on projects.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Driven by curiosity, creativity, and a desire to build meaningful tech solutions.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                {languages.map((lang, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/30 rounded-full text-purple-300 text-sm"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <div className="relative">
                <h3 className="text-2xl font-bold text-cyan-400 mb-6">Journey Timeline</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-4 h-4 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-1">VIT University</h4>
                      <p className="text-purple-300 font-mono text-sm mb-2">2023 - 2027</p>
                      <p className="text-gray-300">Bachelor of Computer Science and Engineering</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-4 h-4 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-1">Chinmaya Vidyalaya</h4>
                      <p className="text-purple-300 font-mono text-sm mb-2">2010 - 2023</p>
                      <p className="text-gray-300">12th Grade - 95%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Planet System
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mb-6"></div>
            <p className="text-gray-300 text-lg">Click on any planet to explore the project</p>
          </div>

          <div className="relative h-96 md:h-[500px]">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`absolute cursor-pointer transform hover:scale-110 transition-all duration-500 ${project.size}`}
                style={{
                  left: `${20 + (index * 20)}%`,
                  top: `${30 + (index % 2) * 30}%`,
                }}
                onClick={() => setSelectedProject(project)}
              >
                <div className={`w-full h-full rounded-full bg-gradient-to-br ${project.color} shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center justify-center relative overflow-hidden group`}>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                  <div className="text-center z-10">
                    <h3 className="font-bold text-sm md:text-base text-white mb-1">{project.title}</h3>
                    <p className="text-xs text-white/80">{project.subtitle}</p>
                  </div>
                  <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-white/10 to-transparent"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Star Cluster
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, skillList], index) => (
              <div key={category} className="bg-slate-900/50 backdrop-blur-sm p-6 rounded-2xl border border-cyan-400/20 hover:border-purple-400/40 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  {category.includes('Programming') && <Code className="w-6 h-6 text-cyan-400" />}
                  {category.includes('Data') && <Database className="w-6 h-6 text-purple-400" />}
                  {category.includes('Design') && <Palette className="w-6 h-6 text-pink-400" />}
                  {category.includes('Tools') && <Zap className="w-6 h-6 text-yellow-400" />}
                  {category.includes('Frameworks') && <Star className="w-6 h-6 text-green-400" />}
                  
                  <h3 className="text-xl font-bold text-white">{category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-full text-cyan-300 text-sm hover:scale-105 transform transition-all duration-200 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Rocket Trail
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto"></div>
          </div>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 to-purple-400"></div>
            
            <div className="bg-slate-900/50 backdrop-blur-sm p-8 rounded-2xl border border-cyan-400/20 ml-16 relative">
              <div className="absolute -left-20 top-8 w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center">
                <Rocket className="w-4 h-4 text-white" />
              </div>
              
              <div className="mb-4">
                <h3 className="text-2xl font-bold text-white mb-2">AI Intern</h3>
                <h4 className="text-lg text-purple-300 mb-2">Flybrand Digital Solutions</h4>
                <p className="text-cyan-300 font-mono text-sm mb-4">June 2025 - July 2025</p>
                <p className="text-gray-300 italic mb-4">Digital Solutions company focused on AI and educational content</p>
              </div>

              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Created demo content on AI applications in ECE using Python, Manim, Plotly Dash, and scikit-learn.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Built animated visualizations for filter optimization, LSTM forecasting, and real-time dashboards.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-pink-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Simplified complex AI workflows into beginner-friendly tutorials and student-facing presentations.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Interstellar Signal Station
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto"></div>
          </div>

          <div className="bg-slate-900/50 backdrop-blur-sm p-8 rounded-2xl border border-cyan-400/20">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-cyan-300 font-mono text-sm mb-2">Signal Origin</label>
                  <input
                    type="text"
                    placeholder="Your coordinates (name)"
                    className="w-full px-4 py-3 bg-slate-800/50 border border-cyan-400/30 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                  />
                </div>
                <div>
                  <label className="block text-cyan-300 font-mono text-sm mb-2">Transmission Frequency</label>
                  <input
                    type="email"
                    placeholder="frequency@galaxy.space"
                    className="w-full px-4 py-3 bg-slate-800/50 border border-cyan-400/30 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-cyan-300 font-mono text-sm mb-2">Transmission Content</label>
                <textarea
                  rows={6}
                  placeholder="Transmit your signal..."
                  className="w-full px-4 py-3 bg-slate-800/50 border border-cyan-400/30 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg text-white font-semibold hover:scale-[1.02] transform transition-all duration-300 shadow-lg hover:shadow-cyan-400/25 flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Send Transmission
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-cyan-400/20 relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-8 md:mb-0">
              <h3 className="text-2xl font-bold text-cyan-400 mb-2 font-mono">ADHIRA.exe</h3>
              <p className="text-gray-400">Computer Science Student • AI Enthusiast • Full-Stack Developer</p>
            </div>

            <div className="flex items-center gap-6">
              <a
                href="https://github.com/adhirak"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-slate-800 border border-cyan-400/30 rounded-full flex items-center justify-center text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 hover:scale-110 transform"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/adhira-k/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-slate-800 border border-cyan-400/30 rounded-full flex items-center justify-center text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 hover:scale-110 transform"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:adhirakumaresh@gmail.com"
                className="w-12 h-12 bg-slate-800 border border-cyan-400/30 rounded-full flex items-center justify-center text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 hover:scale-110 transform"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-cyan-400/10 text-center">
            <p className="text-gray-400 font-mono text-sm">
              © 2024 Adhira K K • Designed with ❤️ in the cosmos
            </p>
            <a
              href="#home"
              className="inline-flex items-center gap-2 mt-4 px-6 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 border border-cyan-400/30 rounded-full text-cyan-300 hover:bg-gradient-to-r hover:from-cyan-500/30 hover:to-purple-600/30 transition-all duration-300"
            >
              <Rocket className="w-4 h-4" />
              Back to Launchpad
            </a>
          </div>
        </div>
      </footer>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-slate-900 rounded-2xl border border-cyan-400/30 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-2">{selectedProject.title}</h3>
                  <p className="text-xl text-purple-300">{selectedProject.subtitle}</p>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="w-8 h-8 bg-slate-800 border border-cyan-400/30 rounded-full flex items-center justify-center text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  ×
                </button>
              </div>

              <p className="text-gray-300 text-lg mb-6">{selectedProject.description}</p>

              <div className="mb-6">
                <h4 className="text-xl font-bold text-cyan-400 mb-3">Mission Details</h4>
                <ul className="space-y-3">
                  {selectedProject.details.map((detail, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-300">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="text-xl font-bold text-purple-400 mb-3">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-full text-cyan-300 text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                <button className="flex-1 px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg text-white font-semibold hover:scale-[1.02] transform transition-all duration-300 flex items-center justify-center gap-2">
                  <ExternalLink className="w-5 h-5" />
                  View Project
                </button>
                <button className="flex-1 px-6 py-3 bg-slate-800 border border-cyan-400/30 rounded-lg text-cyan-400 font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center gap-2">
                  <Github className="w-5 h-5" />
                  Source Code
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;