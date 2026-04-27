// pages/About.jsx
import React from "react";

const About = () => {
  const experiences = [
    {
      year: "2025",
      title: "Junior Frontend Developer",
      company: "Dishashree sofftech pvt. ltd.",
      about: `Developed responsive and scalable web applications using React.js (ES6+).

Designed and maintained reusable, modular UI components.

Integrated RESTful APIs and managed asynchronous data flows.

Utilized React Hooks for efficient state and lifecycle management.

Implemented modern UI with Tailwind CSS / Material UI.

Built and validated dynamic forms using Formik and Yup.

Optimized application performance and resolved UI issues.

Ensured cross-browser compatibility and responsive design.

Collaborated with cross-functional teams and managed code via Git.`,
    },
    {
      year: "2024",
      title: " Frontend Developer Intern",
      company: "Euhoria GenX",
      about: `Designed and developed complete user interfaces for a full-stack PHP application, focusing on clean and intuitive layouts

Built responsive and visually consistent front-end screens using HTML, CSS, and JavaScript

Translated application requirements into structured UI components and page designs

Ensured cross-browser compatibility and optimized UI for different screen sizes and devices

Improved overall user experience through better layout structuring, spacing, and visual hierarchy

Collaborated with backend logic by integrating UI with dynamic data and workflows

Maintained consistency in design patterns, styling, and component structure across the application

`,
    },
  ];

  return (
    <div className="about">
      <div className="about-header">
        <h1>About Me</h1>
        <p>Get to know the developer behind the code</p>
      </div>

      <div className="about-grid">
        <div className="about-card">
          <div className="about-icon">👨‍💻</div>
          <h3>My Journey</h3>
          <p>
            I'm a passionate frontend developer who transitioned into tech with
            a strong focus on building real-world applications. My expertise
            lies in React.js, modern frontend practices, and solving complex UI
            challenges.
          </p>
        </div>

        <div className="about-card">
          <div className="about-icon">🎯</div>
          <h3>What Drives Me</h3>
          <p>
            I thrive on debugging production issues, working with APIs, and
            managing complex state scenarios. Every bug is a learning
            opportunity, and every feature is a chance to create something
            impactful.
          </p>
        </div>

        <div className="about-card">
          <div className="about-icon">🛠️</div>
          <h3>Technical Focus</h3>
          <p>
            Formik for complex forms, conditional rendering for dynamic UIs, and
            TypeScript for type safety. I build responsive, accessible
            applications that work flawlessly across devices.
          </p>
        </div>
      </div>

      <div className="experience-section">
        <h3>Experience Timeline</h3>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-year">{exp.year}</div>
              <div className="timeline-content">
                <h4>{exp.title}</h4>
                <p>{exp.company}</p>
                <p style={{ marginTop: 10, whiteSpace: "pre-line" }}>
                  {exp.about}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="debugging-section">
        <h3>Debugging Philosophy</h3>
        <div className="debugging-tips">
          <div className="tip">
            <span className="tip-number">01</span>
            <p>Reproduce the issue consistently before fixing</p>
          </div>
          <div className="tip">
            <span className="tip-number">02</span>
            <p>Check data flow between frontend & backend</p>
          </div>
          <div className="tip">
            <span className="tip-number">03</span>
            <p>Use console logs strategically, then remove them</p>
          </div>
          <div className="tip">
            <span className="tip-number">04</span>
            <p>Write tests to prevent regression</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
