// pages/Home.jsx
import React from 'react';


const Home = () => {
  const skills = ['React.js', 'JavaScript', 'TypeScript', 'Formik', 'API Integration', 'Responsive Design'];

  return (
    <div className="home">
      <div className="hero-section">
        <div className="hero-content">
          <div className="badge">👋 Welcome to my portfolio</div>
          <h1 className="glow-text">
            Frontend Developer
          </h1>
          <h2>React.js Specialist</h2>
          <p className="hero-description">
            I build modern, responsive web applications with a focus on 
            real-world functionality — forms, dashboards, and seamless API integrations.
          </p>
          
          <div className="cta-buttons">
            <a href="./projects" className="btn-primary">
              View Projects <span>→</span>
            </a>
            <a href="mailto:arijitchattopadhyay2004@gmail.com" className="btn-secondary">
              Contact Me
            </a>
          </div>

        </div>

        <div className="hero-visual">
          <div className="code-card">
            <div className="code-header">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
            </div>
            <div className="code-content">
              <pre>
                <code>
{`const developer = {
  name: "Your Name",
  role: "Frontend Dev",
  stack: ["React", "JS", "TS"],
  passion: "Building Functional UIs"
};

developer.code();`}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>

      <div className="skills-section">
        <h3>Tech Stack & Skills</h3>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card" style={{ animationDelay: `${index * 0.1}s` }}>
              <span>{skill}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="featured-section">
        <h3>What I Do Best</h3>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">⚛️</div>
            <h4>React Development</h4>
            <p>Building reusable components, managing state, and optimizing performance</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📝</div>
            <h4>Form Management</h4>
            <p>Expert with Formik, validation schemas, and dynamic form calculations</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🔌</div>
            <h4>API Integration</h4>
            <p>RESTful APIs, error handling, and data synchronization</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🐛</div>
            <h4>Debugging Skills</h4>
            <p>Production issue resolution, type safety, and state debugging</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;