import React from "react";
import "../styles/Projects.css";

const Projects = () => {
  return (
    <section className="projects">
      <h2>My Projects</h2>
      <div className="projects-grid">
        <div className="project-card">
          <img src="https://via.placeholder.com/400x200" alt="Project 1" />
          <div className="project-info">
            <h3>To-Do-App</h3>
            <p>A brief description of the project showcasing the tools or technologies used.</p>
            <button className="project-btn">View Project</button>
          </div>
        </div>
        <div className="project-card">
          <img src="https://via.placeholder.com/400x200" alt="Project 2" />
          <div className="project-info">
            <h3>Weather Report</h3>
            <p>This project is all about modern UI, interactions, and responsive design.</p>
            <button className="project-btn">View Project</button>
          </div>
        </div>
        {/* Add more project cards as needed */}
      </div>
    </section>
  );
};

export default Projects;
