import React from "react";
import "./index.css";

const Footer = () => {
  return (
    <footer className="robot-footer">
      <p>
        © {new Date().getFullYear()} RoboMovies. Built with 💙 by 
        <a href="https://your-portfolio-link.com" target="_blank" rel="noreferrer"> You</a>
      </p>
    </footer>
  );
};

export default Footer;
