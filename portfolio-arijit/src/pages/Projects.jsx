// pages/Projects.jsx
import React, { useState } from 'react';


const Projects = () => {
  const [filter, setFilter] = useState('all');
  
  const projects = [
    {
      id: 1,
      title: 'Doctor appointment scheduler ',
      description: 'Full-featured Doctor appointment scheduler to manage all appointment digitally by the doctor.',
      tech: ['React', 'Calender.js', 'Localstorage'],
      type: 'Frontend',
      github: 'https://github.com/FreelancerArijit/Doctor-appointment',
      demo: 'https://teal-truffle-0e26a3.netlify.app',
      image: '👨‍⚕️'
    },
    {
      id: 2,
      title: 'Result viewing portal',
      description: 'Result viewing portla where student can view result list of their centers.',
      tech: ['HTML', 'CSS', 'JS', 'Node.js', 'MongoDB', 'API Integration.'],
      type: 'Fullstack',
      github: '#',
      demo: 'https://weberds.netlify.app',
      image: '📄✅'
    },
    {
      id: 3,
      title: 'Travel agency website',
      description: 'Travel agency website where user can book tours as per their budget and preference.',
      tech: ['React', 'Axios', 'OpenWeather API', 'CSS Modules'],
      type: 'api',
      github: 'https://github.com/FreelancerArijit/Travel-agency-website-development',
      demo: 'https://travelagencylocally.netlify.app/',
      image: '🧳✈️'
    },
    
  ];

  const filters = [
    { value: 'all', label: 'All Projects' },
    { value: 'frontend', label: 'Frontend' },
    { value: 'fullstack', label: 'Full Stack' },
    { value: 'api', label: 'API Integration' },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.type === filter);

  return (
    <div className="projects">
      <div className="projects-header">
        <h1>My Projects</h1>
        <p>Real-world applications built with modern frontend practices</p>
      </div>

      

      <div className="projects-grid">
        {filteredProjects.map((project, index) => (
          <div key={project.id} className="project-card" style={{ animationDelay: `${index * 0.1}s` }}>
            <div className="project-image">{project.image}</div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-stack">
                {project.tech.map(tech => (
                  <span key={tech} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.github} className="project-link">GitHub →</a>
                <a href={project.demo} className="project-link">Live Demo →</a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="no-projects">
          <p>No projects found in this category.</p>
        </div>
      )}
    </div>
  );
};

export default Projects;