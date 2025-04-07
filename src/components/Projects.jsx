import React from "react";
import "./Projects.css";

function Projects() {
  return (
    <section id="projects" className="projects">
      <h3>Projects</h3>
      <div className="project-list">
        <div className="project">
          <h4>To-Do App</h4>
          <p>A simple React-based to-do list app.</p>
        </div>
        <div className="project">
          <h4>Portfolio Website</h4>
          <p>This portfolio site you're viewing.</p>
        </div>
      </div>
    </section>
  );
}

export default Projects;
