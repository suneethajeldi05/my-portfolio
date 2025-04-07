import React from "react";
import "../styles/About.css";

const AboutUs = () => {
  return (
    <section className="about">
      <div className="about-container">
        {/* <div className="about-image">
          <img src="/img.svg" alt="About Me" className="about-img" />
        </div> */}
        <div className="about-content">
          <h2>About <span>Me</span></h2>
          <p className="about-text">
            I'm a passionate developer who enjoys building modern and efficient
            web applications. With expertise in frontend and backend
            technologies, I strive to create seamless user experiences.
          </p>


          <h2>My <span>Skills</span></h2>
          <div className="skills">
            <span>Java, </span>
            <span>JavaScript, </span>
            <span>HTML, </span>
            <span>CSS, </span>
            <span>Adobe Illustrator, </span>
            <span>Adobe Photoshop and </span>
            <span>After Effects</span>
          </div>

          <h2>Work <span>Experience</span></h2>
          <div className="experience">
            <div>
              <h4>Generative AI Intern at Synchronota</h4>
              <p>2025 APRIL - Present</p>
              {/* <p>Developed responsive web applications using React</p> */}
            </div>
            <div>
              <h4>Full Stack Developer Intern at Kshitij CodeForge</h4>
              <p>2025 FEB - Present</p>
              {/* <p>Developed responsive web applications using React</p> */}
            </div>
            <div>
              <h4>Graphic Designer Intern at Phantasm Solution Pvt Ltd</h4>
              <p>2023 NOV - 2024 MAY</p>
              {/* <p>Built and maintained client websites using modern UI</p> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
