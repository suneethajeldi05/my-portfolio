import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <section id="contact" className="contact">
      <h3>Contact Me</h3>
      <p>Send me a message if you want to collaborate or just say hi!</p>
      <a href="mailto:youremail@example.com" className="email-link">Email Me</a>
    </section>
  );
}

export default Contact;
