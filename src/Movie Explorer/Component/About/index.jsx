import React from "react";
import Navbar from "../Navbar/index";
import Footer from "../Footer/index";
import "./index.css";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="robot-about-container">
        <h1 className="robot-about-title">About Us 🤖</h1>
        <p className="robot-about-text">
          Welcome to RoboMovies — a futuristic movie explorer designed with an immersive, high-tech vibe. Dive into the
          world of popular films, search your favorite genres, and enjoy a smooth, neon-themed UI experience.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default About;
