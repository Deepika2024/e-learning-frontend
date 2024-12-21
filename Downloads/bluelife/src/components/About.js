import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <h2>About BluLife</h2>
      <p>
        Blulife, a Bangalore-based brand, specializes in domestic and commercial water purifiers, 
        exclusively available on{" "}
        <a href="https://oshoppe.in" target="_blank" rel="noopener noreferrer">
          oshoppe.in
        </a>
        . As India’s first D2C water purifier brand, it has its own dealer network across the country 
        and is well-known for providing the best water purification solutions.
      </p>
    </div>
  );
};

export default About;
