import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Your Name. Built with React.</p>
    </footer>
  );
}

export default Footer;
