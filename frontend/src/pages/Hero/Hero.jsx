import React from "react";
import "./Hero.css"; // Your CSS file for hero styles

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Welcome to Interview Buzz</h1>
        <p>Your go-to platform for mastering interview skills</p>
        <div className="hero-svg">
          <img
            src="https://static.vecteezy.com/system/resources/previews/020/003/900/non_2x/job-interview-graphic-clipart-design-free-png.png"
            alt="Job Interview Graphic"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
