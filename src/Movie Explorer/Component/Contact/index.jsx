import React, { useState } from "react";
import Navbar from "../Navbar/index";
import Footer from "../Footer/index";
import "./index.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Message sent successfully! 🤖");
  };

  return (
    <>
      <Navbar />
      <div className="robot-contact-container">
        <h1 className="robot-contact-title">Contact Us 🤖</h1>
        <form onSubmit={handleSubmit} className="robot-contact-form">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="robot-input"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="robot-input"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            className="robot-textarea"
            required
          ></textarea>
          <button type="submit" className="robot-button">Send Message</button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
