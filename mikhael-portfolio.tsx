import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, Download, ChevronDown, Server, Cloud, Code, Database, Monitor, Shield, Terminal, Zap, BookOpen, ExternalLink } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isVisible, setIsVisible] = useState({});
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.3 }
    );

    document.querySelectorAll('section').forEach((section) => {
      observer.observe(section);
    });

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      observer.disconnect();
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDownloadCV = () => {
    // Option 1: Download from a URL (replace with your actual CV URL)
    const cvUrl = 'https://example.com/your-cv.pdf'; // Replace with your actual CV URL
    
    // Option 2: For now, let's create a mock download
    const link = document.createElement('a');
    link.href = '#'; // Replace with actual CV URL when available
    link.download = 'Mikhael_Youhanna_DevOps_Engineer_Resume.pdf';
    
    // Create a temporary notification
    const notification = document.createElement('div');
    notification.innerHTML = `
      <div style="
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        padding: 16px 24px;
        border-radius: 12px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        z-index: 10000;
        font-family: system-ui, -apple-system, sans-serif;
        font-weight: 500;
        animation: slideIn 0.3s ease-out;
      ">
        <div style="display: flex; align-items: center; gap: 12px;">
          <div style="
            width: 24px;
            height: 24px;
            border: 2px solid #60a5fa;
            border-top: 2px solid transparent;
            border-radius: 50%;
            animation: spin 1s linear infinite;
          "></div>
          <span>CV download will be available soon!</span>
        </div>
      </div>
      <style>
        @keyframes slideIn {
          from { transform: translateX(100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      </style>
    `;
    
    document.body.appendChild(notification);
    
    // Remove notification after 3 seconds
    setTimeout(() => {
      notification.style.animation = 'slideIn 0.3s ease-out reverse';
      setTimeout(() => {
        document.body.removeChild(notification);
      }, 300);
    }, 3000);
    
    // Uncomment the line below when you have an actual CV URL
    // link.click();
  };

  const skills = [
    { category: 'Cloud & Infrastructure', icon: Cloud, items: ['AWS', 'GCP', 'Azure', 'Terraform', 'CloudFormation'] },
    { category: 'Containers & Orchestration', icon: Server, items: ['Docker', 'Kubernetes', 'Helm', 'OpenShift'] },
    { category: 'CI/CD & Automation', icon: Zap, items: ['Jenkins', 'GitHub Actions', 'Ansible', 'CircleCI'] },
    { category: 'Monitoring & Observability', icon: Monitor, items: ['Prometheus', 'Grafana', 'ELK Stack', 'Loki'] },
    { category: 'Programming & Scripting', icon: Code, items: ['Python', 'Bash', 'PowerShell', 'YAML'] },
    { category: 'Databases & Messaging', icon: Database, items: ['MySQL', 'PostgreSQL', 'Kafka', 'MQTT'] }
  ];

  const experience = [
    {
      title: 'Site Reliability Engineer',
      company: 'Giza Systems',
      period: '09/2024 – Present',
      location: 'Cairo',
      highlights: [
        'Assist in building and maintaining CI/CD pipelines using Jenkins and GitHub Actions to automate software deployment, testing, and delivery processes, resulting in 30% faster releases',
        'Deploy containerized applications on Kubernetes clusters in cloud environments, ensuring high availability and scalability',
        'Automate infrastructure provisioning and configuration using Terraform and Ansible, managing cloud resources, Kubernetes cluster setup, networking, and system dependencies across multiple environments',
        'Deploy, develop, and manage message brokers such as MQTT, Kafka, and Mosquitto on multi-master Kubernetes clusters across staging and production environments',
        'Implement backup strategies for the Kubernetes cluster and critical components, such as Elasticsearch and message brokers running on the cluster to ensure data integrity and facilitate disaster recovery without downtime',
        'Design and implement observability solutions using Prometheus, Grafana, Fluent Bit, and Loki, ensuring performance, system uptime, and reliability, while streamlining pod logs for the development team to enable 30% faster issue resolution',
        'Support the implementation of log aggregation and distributed tracing using the ELK stack, leading to a 15% improvement in debugging efficiency and system observability',
        'Develop Python and Bash scripts for automation, regular maintenance tasks, backups, and system monitoring to reduce manual effort by 50%',
        'Gain a deep insight into OpenShift by understanding container orchestration and application deployment workflows'
      ]
    },
    {
      title: 'Datacenter Operations Engineer',
      company: 'Link Datacenter',
      period: '07/2024 – 09/2024',
      location: 'Cairo',
      highlights: [
        'Maintained and monitored servers, backups, system logs, and Infrastructure Support',
        'Continuously analyzed the performance and health of systems, networks, VMs, or applications, troubleshot production issues on Azure, and ensured reliability and security using Orion, WhatsUp Gold, Cacti, and Grafana',
        'Managed backup storage infrastructure and executed backup plans using Veeam Backup and Replication, and Veritas Backup Exec',
        'Resolved user problems related to login, email, network, and hardware/software'
      ]
    },
    {
      title: 'System Administrator',
      company: 'Kobry El Kobba Medical Complex',
      period: '06/2023 – 06/2024',
      location: 'Cairo (Military Service)',
      highlights: [
        'Installed and maintained all server hardware and software systems',
        'Ensured server performance and availability',
        'Administered Windows Server 2012 environment',
        'Managed Virtual machines (VMware, ESXi)',
        'Troubleshot incidents, identified root causes, documented problems, and established preventive measures'
      ]
    }
  ];

  const projects = [
    { name: 'CaptionBot!', grade: 'A+', description: 'AI-powered graduation project', github: 'https://github.com/mikhaelyouhanna/captionbot' },
    { name: 'Inventory System with POS', description: 'Complete point-of-sale solution', github: 'https://github.com/mikhaelyouhanna/inventory-pos' },
    { name: 'Go-Football Mobile App', description: 'Sports management application', github: 'https://github.com/mikhaelyouhanna/go-football' },
    { name: 'Books Library Website', description: 'Web-based library management system', github: 'https://github.com/mikhaelyouhanna/books-library' }
  ];

  const professionalCertifications = [
    {
      name: 'Google Cloud Certified – Professional Cloud Architect',
      issuer: 'Google Cloud',
      link: 'https://www.credly.com/badges/0c7f6971-793e-472f-b25a-c29490f4af00/linked_in_profile',
      status: 'active'
    }
  ];

  const inProgressCertifications = [
    {
      name: 'AWS Solution Architect',
      status: 'In Progress'
    }
  ];

  const courses = [
    {
      name: 'EFK Stack: Enterprise-Grade Logging and Monitoring',
      provider: 'KodeKloud',
      link: 'https://learn.kodekloud.com/certificate/8584d2d9-c088-4ae3-898f-aa3117d7d11a'
    },
    {
      name: 'Certified Kubernetes Administrator Course',
      provider: 'KodeKloud',
      link: 'https://drive.google.com/file/d/1YRN43fRz2jA0ffM_byaHoxOcaiDkEhDq/'
    },
    {
      name: 'Red Hat Certified System Administrator (RHCSA)',
      provider: 'KodeKloud',
      link: 'https://learn.kodekloud.com/certificate/1a3f5618-3141-4025-bc6b-e97c8a99af21'
    }
  ];

  return (
    <div className="bg-gray-900 text-white min-h-screen relative">
      {/* Mouse Follower */}
      <div 
        className="fixed w-4 h-4 bg-blue-400 rounded-full pointer-events-none z-50 opacity-50 transition-transform duration-100 ease-out"
        style={{
          left: mousePosition.x - 8,
          top: mousePosition.y - 8,
          transform: 'scale(1.2)',
        }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm z-40 border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Mikhael Sarkies
            </div>
            <div className="hidden md:flex space-x-8">
              {['hero', 'about', 'experience', 'skills', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-all duration-300 px-4 py-2 rounded-lg relative overflow-hidden ${
                    activeSection === section 
                      ? 'text-blue-400 bg-blue-400/10 shadow-lg' 
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20" />
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-blue-400/30 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
        
        <div className="relative z-10 text-center px-6 animate-fade-in">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-4xl font-bold shadow-2xl animate-bounce hover:scale-110 transition-transform duration-300">
              MY
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Mikhael Sarkies
          </h1>
          <div className="text-2xl md:text-3xl text-gray-300 mb-8 overflow-hidden whitespace-nowrap border-r-2 border-blue-400 animate-typing">
            SRE/DevOps/Cloud Engineer
          </div>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12 opacity-0 animate-fade-in-up" style={{ animationDelay: '1s', animationFillMode: 'forwards' }}>
            Dynamic engineer with 1+ years in DevOps practices, cloud infrastructure automation, 
            and system reliability. Passionate about solving complex technical challenges.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-12 opacity-0 animate-fade-in-up" style={{ animationDelay: '1.5s', animationFillMode: 'forwards' }}>
            <a 
              href="mailto:Mikhael.youhannaa@gmail.com" 
              className="group flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-4 rounded-xl transition-all transform hover:scale-105 hover:shadow-2xl relative overflow-hidden"
            >
              <Mail size={20} />
              <span className="font-semibold">Get In Touch</span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity rounded-xl" />
            </a>
            <button
              onClick={handleDownloadCV}
              className="group flex items-center space-x-2 border-2 border-gray-600 hover:border-blue-500 bg-transparent hover:bg-blue-500/10 px-8 py-4 rounded-xl transition-all transform hover:scale-105 hover:shadow-xl relative overflow-hidden"
            >
              <Download size={20} />
              <span className="font-semibold">Download CV</span>
              <div className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-5 transition-opacity rounded-xl" />
            </button>
          </div>
          <button 
            onClick={() => scrollToSection('about')} 
            className="animate-bounce hover:animate-pulse transition-all transform hover:scale-110"
          >
            <ChevronDown size={32} className="text-gray-400 hover:text-blue-400 transition-colors" />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed hover:text-white transition-colors duration-300">
                I'm a dynamic and enthusiastic SRE/DevOps/Cloud Engineer with expertise in cloud infrastructure 
                automation, containerization, and CI/CD pipelines. My passion lies in streamlining workflows 
                and enhancing system reliability through innovative solutions.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed hover:text-white transition-colors duration-300">
                With a strong foundation in Linux system administration, Kubernetes, and modern DevOps tools, 
                I'm committed to continuous learning and driving operational excellence in dynamic tech environments.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                <div className="flex items-center space-x-3 p-4 bg-gray-800/50 rounded-lg hover:bg-gray-800 transition-all duration-300 transform hover:-translate-y-1">
                  <MapPin className="text-blue-400" size={20} />
                  <span>Shobra, Egypt</span>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-gray-800/50 rounded-lg hover:bg-gray-800 transition-all duration-300 transform hover:-translate-y-1">
                  <Phone className="text-blue-400" size={20} />
                  <span>(+20) 1200513381</span>
                </div>
              </div>
            </div>
            <div>
              <div className="bg-gray-800/70 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-blue-500/50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl">
                <h3 className="text-xl font-semibold mb-6 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Education
                </h3>
                <div className="text-center">
                  <div className="text-lg font-medium text-blue-400 mb-2">Bachelor's in Computer Science</div>
                  <div className="text-gray-400 mb-1">Cairo University</div>
                  <div className="text-sm text-gray-500 mb-4">2018 – 2022</div>
                  <div className="bg-gradient-to-r from-green-400/20 to-blue-500/20 rounded-lg p-4 border border-green-400/30">
                    <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent font-semibold">
                      Graduation Project: A+ Grade
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 bg-gray-800/30 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Experience
          </h2>
          <div className="space-y-8">
            {experience.map((job, index) => (
              <div 
                key={index} 
                className="bg-gray-800/70 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-blue-500/50 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl"
                style={{ 
                  opacity: 0,
                  animation: `fadeInUp 0.8s ease-out ${index * 0.2}s forwards`
                }}
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div className="mb-4 lg:mb-0">
                    <h3 className="text-2xl font-bold text-blue-400 mb-2 hover:text-blue-300 transition-colors">
                      {job.title}
                    </h3>
                    <p className="text-xl text-gray-300 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                      {job.company}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-gray-400 font-medium">{job.period}</div>
                    <div className="text-sm text-gray-500">{job.location}</div>
                  </div>
                </div>
                <div className="space-y-3">
                  {job.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start space-x-3 group hover:bg-gray-700/20 p-2 rounded-lg transition-all duration-300">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0 group-hover:bg-blue-300 transition-colors animate-pulse"></div>
                      <p className="text-gray-300 text-sm hover:text-white transition-colors duration-300 leading-relaxed">
                        {highlight}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skillGroup, index) => (
              <div 
                key={index} 
                className="bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-blue-500/50 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl group"
                style={{ 
                  opacity: 0,
                  animation: `fadeInUp 0.8s ease-out ${index * 0.1}s forwards`
                }}
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-3 bg-blue-500/20 rounded-lg group-hover:bg-blue-500/30 transition-colors duration-300">
                    <skillGroup.icon className="text-blue-400 group-hover:text-blue-300 transition-colors duration-300" size={24} />
                  </div>
                  <h3 className="text-lg font-semibold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                    {skillGroup.category}
                  </h3>
                </div>
                <div className="space-y-3">
                  {skillGroup.items.map((item, idx) => (
                    <div 
                      key={idx} 
                      className="bg-gray-700/50 hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-purple-500/20 rounded-lg px-4 py-3 text-sm text-gray-300 hover:text-white transition-all duration-300 transform hover:scale-105 border border-transparent hover:border-blue-500/30 cursor-pointer"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects & Certifications Section */}
      <section id="projects" className="py-20 px-6 bg-gray-800/30 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Projects, Certifications & Courses
          </h2>
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Featured Projects */}
            <div className="lg:col-span-1">
              <h3 className="text-2xl font-semibold mb-6 text-blue-400 flex items-center">
                <div className="p-2 bg-blue-500/20 rounded-lg mr-3">
                  <Code size={24} />
                </div>
                Featured Projects
              </h3>
              <div className="space-y-6">
                {projects.map((project, index) => (
                  <div 
                    key={index} 
                    className="bg-gray-800/70 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-blue-500/50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl group"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-lg font-medium group-hover:text-blue-400 transition-colors bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                        {project.name}
                      </h4>
                      {project.grade && (
                        <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm animate-pulse border border-green-400/30">
                          Grade: {project.grade}
                        </span>
                      )}
                    </div>
                    <p className="text-gray-400 text-sm mb-4 hover:text-gray-300 transition-colors">
                      {project.description}
                    </p>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-all duration-300 text-sm group-hover:underline"
                    >
                      <Github size={16} />
                      <span>View Project</span>
                      <ExternalLink size={12} />
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Professional Certifications */}
            <div className="lg:col-span-1">
              <h3 className="text-2xl font-semibold mb-6 text-purple-400 flex items-center">
                <div className="p-2 bg-purple-500/20 rounded-lg mr-3">
                  <Shield size={24} />
                </div>
                Certifications
              </h3>
              <div className="space-y-4">
                {professionalCertifications.map((cert, index) => (
                  <div key={index} className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-xl p-6 border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl group">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-start space-x-3">
                        <div className="p-2 bg-purple-500/20 rounded-lg">
                          <Shield className="text-purple-400 group-hover:text-purple-300 transition-colors duration-300" size={20} />
                        </div>
                        <div>
                          <h4 className="text-white font-medium group-hover:text-purple-300 transition-colors">
                            {cert.name}
                          </h4>
                          <p className="text-purple-300 text-sm">{cert.issuer}</p>
                        </div>
                      </div>
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-400 hover:text-purple-300 transition-all duration-300 transform hover:scale-110 p-2 rounded-lg hover:bg-purple-500/10"
                        title="View Certificate"
                      >
                        <ExternalLink size={16} />
                      </a>
                    </div>
                  </div>
                ))}
                
                {inProgressCertifications.map((cert, index) => (
                  <div key={index} className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-xl p-4 border border-yellow-500/30 hover:border-yellow-400/50 transition-all duration-300 animate-pulse transform hover:-translate-y-1">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-yellow-500/20 rounded-lg">
                        <Terminal className="text-yellow-400" size={20} />
                      </div>
                      <div>
                        <span className="text-yellow-400 text-sm font-medium">{cert.name}</span>
                        <p className="text-yellow-300 text-xs">{cert.status}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Courses */}
            <div className="lg:col-span-1">
              <h3 className="text-2xl font-semibold mb-6 text-green-400 flex items-center">
                <div className="p-2 bg-green-500/20 rounded-lg mr-3">
                  <BookOpen size={24} />
                </div>
                Courses
              </h3>
              <div className="space-y-4">
                {courses.map((course, index) => (
                  <div 
                    key={index} 
                    className="bg-gray-800/70 backdrop-blur-sm rounded-xl p-4 border border-gray-700 hover:border-green-500/50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl group"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-start space-x-3">
                        <div className="p-2 bg-green-500/20 rounded-lg">
                          <BookOpen className="text-green-400 group-hover:text-green-300 transition-colors duration-300" size={16} />
                        </div>
                        <div>
                          <h4 className="text-white text-sm font-medium group-hover:text-green-300 transition-colors">
                            {course.name}
                          </h4>
                          <p className="text-green-400 text-xs">{course.provider}</p>
                        </div>
                      </div>
                      <a
                        href={course.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-400 hover:text-green-300 transition-all duration-300 transform hover:scale-110 p-2 rounded-lg hover:bg-green-500/10"
                        title="View Certificate"
                      >
                        <ExternalLink size={14} />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto hover:text-white transition-colors duration-300">
            Ready to bring reliability and efficiency to your infrastructure? 
            Let's discuss how I can help drive your DevOps initiatives forward.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-8 mb-12">
            <a
              href="mailto:Mikhael.youhannaa@gmail.com"
              className="group flex items-center space-x-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl relative overflow-hidden"
            >
              <Mail size={24} />
              <span className="text-lg font-semibold">Email Me</span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
            </a>
            <a
              href="https://www.linkedin.com/in/mikhael11/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center space-x-3 bg-gradient-to-r from-blue-700 to-blue-800 hover:from-blue-800 hover:to-blue-900 px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl relative overflow-hidden"
            >
              <Linkedin size={24} />
              <span className="text-lg font-semibold">LinkedIn</span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
            </a>
            <a
              href="https://github.com/mikhael11"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center space-x-3 bg-gray-700 hover:bg-gray-600 px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl relative overflow-hidden"
            >
              <Github size={24} />
              <span className="text-lg font-semibold">GitHub</span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
            </a>
          </div>
          
          {/* Contact Information Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-blue-500/50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <div className="p-3 bg-blue-500/20 rounded-lg">
                  <MapPin className="text-blue-400" size={24} />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-blue-400">Location</h4>
                  <p className="text-gray-300">Shobra, Egypt</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-green-500/50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <div className="p-3 bg-green-500/20 rounded-lg">
                  <Phone className="text-green-400" size={24} />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-green-400">Phone</h4>
                  <p className="text-gray-300">(+20) 1200513381</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-gray-400">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 inline-block border border-gray-700">
              <p className="font-medium mb-2 text-purple-400">Languages</p>
              <div className="flex justify-center space-x-6">
                <span className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span>Arabic (Native)</span>
                </span>
                <span className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                  <span>English (Excellent)</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 py-8 px-6 border-t border-gray-700">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-gray-400 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent font-semibold">
                &copy; 2025 Mikhael Sarkies
              </p>
            </div>
            
            <div className="flex space-x-6">
              <a
                href="mailto:Mikhael.youhannaa@gmail.com"
                className="text-gray-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-110"
                title="Email"
              >
                <Mail size={20} />
              </a>
              <a
                href="https://linkedin.com/in/mikhael11"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-110"
                title="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com/mikhael11"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-110"
                title="GitHub"
              >
                <Github size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes typing {
          from { width: 0; }
          to { width: 100%; }
        }
        
        @keyframes blink-caret {
          from, to { border-color: transparent; }
          50% { border-color: #3b82f6; }
        }
        
        .animate-fade-in {
          animation: fadeIn 1s ease-out;
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        .animate-typing {
          animation: typing 3.5s steps(40, end), blink-caret 0.75s step-end infinite;
        }
        
        .gradient-text {
          background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
          background-size: 400% 400%;
          animation: gradient 15s ease infinite;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </div>
  );
};

export default Portfolio;