import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LaunchPage2.css";
import text_logo from "../../assets/images/Interview_text_logo.png";
import hero_img from "../../assets/images/hero.png";
import Footer from "../../components/Footer/Footer";
import TestimonialCard from "../../components/Testimonoial/TestimonialCard";
import BlogCard from "../../components/Blog/BlogCard";
import Pricing from "../../components/Pricing/Pricing";
import ContactUs from "../../components/ContactUs/ContactUs";
import { getCurrentUser } from "../../services/auth";
import Team from "../../components/Team/Team";

const LaunchPage2 = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userData = getCurrentUser();
    setUser(userData);
  }, []);

  const handleGetStarted = () => {
    navigate("/home");
  };

  const handleLogin = () => {
    navigate("/login");
  };

  const handleProfileClick = () => {
    navigate("/profile");
  };

  return (
    <div className="launch-page">
      {/* Navbar */}
      <header className="modern-navbar">
        <div className="launch-container">
          <a href="#" className="logo">
            <img width="120px" src={text_logo} alt="Interview Buzz" />
          </a>
          <nav>
            <ul>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#features">Features</a>
              </li>
              <li>
                <a href="#community">Community</a>
              </li>
              <li>
                <a href="#testimonials">Testimonials</a>
              </li>
              <li>
                <a href="#blog">Blog</a>
              </li>
              <li>
                <a href="#pricing">Pricing</a>
              </li>
            </ul>
          </nav>
          {user ? (
            <img
              width="40"
              src="https://img.icons8.com/ios-filled/50/user-male-circle.png"
              alt="Profile"
              className="logo"
              onClick={handleProfileClick}
            />
          ) : (
            <button className="gradient-button" onClick={handleLogin}>
              Login
            </button>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="glass-morphic-header" id="about">
        <div className="launch-container">
          <div className="hero-content">
            {/* <div className="hero-keywords">
              <div className="keyword">Learn</div>
              <div className="keyword">Compete</div>
              <div className="keyword">Collaborate</div>
            </div> */}
            <div className="hero-text">
              <h1>Welcome to Interview Buzz</h1>
              <p>Your ultimate destination for interview preparation!</p>
              <button className="gradient-button" onClick={handleGetStarted}>
                Get Started
              </button>
            </div>
          </div>
          <div className="hero-image">
            <img src={hero_img} alt="Job Interview Graphic" />
          </div>
        </div>
      </section>

      <main className="main-content">
        {/* Features */}
        <section id="features" className="section">
          <div className="container">
            <h2>Features</h2>
            <div id="featuresSection" className="container">
              <div className="row mt-3 mb-3">
                <div className="col-12 text-center">
                  <h4 className="mainHeading">
                    Features that make Interview Buzz simply awesome
                  </h4>
                  <p className="subheading">
                    Not sure if Interview Buzz is for you? Check out a few of
                    the key features!
                  </p>
                </div>
              </div>
              <div className="row features-container">
                <div className="col-12 col-md-6 mt-3">
                  <div className="d-flex flex-row">
                    <img
                      src="https://assets.ccbp.in/frontend/responsive-website/awsome-features-1-img.png"
                      alt=""
                    />
                    <div>
                      <h4>Variety of Interview Questions</h4>
                      <p>
                        Access a wide range of interview questions tailored to
                        different industries and job roles.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6 mt-3">
                  <div className="d-flex flex-row">
                    <img
                      src="https://assets.ccbp.in/frontend/responsive-website/awsome-features-2-img.png"
                      alt=""
                    />
                    <div>
                      <h4>Mock Interviews</h4>
                      <p>
                        Practice mock interviews with detailed feedback to
                        simulate real interview scenarios.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6 mt-3">
                  <div className="d-flex flex-row">
                    <img
                      src="https://assets.ccbp.in/frontend/responsive-website/awsome-features-3-img.png"
                      alt=""
                    />
                    <div>
                      <h4>Career Advice</h4>
                      <p>
                        Receive expert career advice and guidance to help you
                        navigate your career path effectively.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6 mt-3">
                  <div className="d-flex flex-row">
                    <img
                      src="https://assets.ccbp.in/frontend/responsive-website/awsome-features-4-img.png"
                      alt=""
                    />
                    <div>
                      <h4>Personalized Learning Paths</h4>
                      <p>
                        Create personalized learning paths based on your
                        strengths and weaknesses identified during practice
                        sessions.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6 mt-3">
                  <div className="d-flex flex-row">
                    <img
                      src="https://assets.ccbp.in/frontend/responsive-website/awsome-features-5-img.png"
                      alt=""
                    />
                    <div>
                      <h4>Interactive Learning Experience</h4>
                      <p>
                        Engage in interactive learning experiences with scroll
                        effects and animations to enhance retention.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6 mt-3">
                  <div className="d-flex flex-row">
                    <img
                      src="https://assets.ccbp.in/frontend/responsive-website/awsome-features-6-img.png"
                      alt=""
                    />
                    <div>
                      <h4>Resource Library</h4>
                      <p>
                        Access a comprehensive resource library to explore
                        articles, case studies, and more for further learning.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Community */}
        <section id="community" className="section">
          <div className="container">
            <h2>Community</h2>
            <p>
              Join our vibrant community of interview aspirants and share your
              experiences. Engage in discussions, ask questions, and learn from
              others to boost your confidence and preparation.
            </p>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="section">
          <div className="container">
            <h2>Testimonials</h2>
            <TestimonialCard />
          </div>
        </section>

        {/* Blogs */}
        <section id="blog" className="section">
          <div className="container">
            <h2>Blog</h2>
            <BlogCard />
          </div>
        </section>

        {/* Pricing Table */}
        <section id="pricing" className="section">
          <div className="container">
            <h2>Pricing</h2>
            <Pricing />
          </div>
        </section>

        {/* Meet our Team */}
        {/* <section id="teamm" className="section">
          <div className="container">
            <h2>Meet Our Team</h2>
            <Team/>
          </div>
        </section> */}

        {/* Contact Us */}
        <section id="contact" className="section">
          <div className="container">
            <h2>Contact Us</h2>
            <ContactUs />
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LaunchPage2;
