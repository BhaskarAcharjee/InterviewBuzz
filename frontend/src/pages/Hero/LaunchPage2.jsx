import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LaunchPage2.css";
import text_logo from "../../assets/images/Interview_text_logo.png";
import Footer from "../../components/Footer/Footer";
import TestimonialCard from "../../components/Testimonoial/TestimonialCard";
import BlogCard from "../../components/Blog/BlogCard";
import Pricing from "../../components/Pricing/Pricing";
import ContactUs from "../ContactUs/ContactUs";
import { getCurrentUser } from "../../services/auth";

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
              width="25"
              src="https://img.icons8.com/ios-filled/50/user-male-circle.png"
              alt="Profile"
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
          <h1>Welcome to Interview Buzz</h1>
          <p>Your ultimate destination for interview preparation!</p>
        </div>
        <div className="hero-container">
          <div className="hero-text">
            <p>
              Interview Buzz is committed to helping job seekers prepare
              effectively for interviews and build successful careers. We
              provide a comprehensive platform with resources ranging from
              interview questions to mock interviews and career advice.
            </p>
            <button className="gradient-button" onClick={handleGetStarted}>
              Get Started
            </button>
          </div>
          <img
            src="https://static.vecteezy.com/system/resources/previews/020/003/900/non_2x/job-interview-graphic-clipart-design-free-png.png"
            alt="Job Interview Graphic"
          />
        </div>
      </section>

      <main className="main-content">
        {/* Features */}
        <section id="features" className="section">
          <div className="container">
            <h2>Features</h2>
            <div id="featuresSection" class="container">
              <div class="row mt-3 mb-3">
                <div class="col-12 text-center">
                  <h1 class="mainHeading">
                    Features that make Interview Buzz simply awesome
                  </h1>
                  <p class="subheading">
                    Not sure if Interview Buzz is for you? Check out a few of
                    the key features!
                  </p>
                </div>
              </div>
              <div class="row features-container">
                <div class="col-12 col-md-6 mt-3">
                  <div class="d-flex flex-row">
                    <img
                      src="https://assets.ccbp.in/frontend/responsive-website/awsome-features-1-img.png"
                      alt=""
                    />
                    <div>
                      <h2>Variety of Interview Questions</h2>
                      <p>
                        Access a wide range of interview questions tailored to
                        different industries and job roles.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-md-6 mt-3">
                  <div class="d-flex flex-row">
                    <img
                      src="https://assets.ccbp.in/frontend/responsive-website/awsome-features-2-img.png"
                      alt=""
                    />
                    <div>
                      <h2>Mock Interviews</h2>
                      <p>
                        Practice mock interviews with detailed feedback to
                        simulate real interview scenarios.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-md-6 mt-3">
                  <div class="d-flex flex-row">
                    <img
                      src="https://assets.ccbp.in/frontend/responsive-website/awsome-features-3-img.png"
                      alt=""
                    />
                    <div>
                      <h2>Career Advice</h2>
                      <p>
                        Receive expert career advice and guidance to help you
                        navigate your career path effectively.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-md-6 mt-3">
                  <div class="d-flex flex-row">
                    <img
                      src="https://assets.ccbp.in/frontend/responsive-website/awsome-features-4-img.png"
                      alt=""
                    />
                    <div>
                      <h2>Personalized Learning Paths</h2>
                      <p>
                        Create personalized learning paths based on your
                        strengths and weaknesses identified during practice
                        sessions.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-md-6 mt-3">
                  <div class="d-flex flex-row">
                    <img
                      src="https://assets.ccbp.in/frontend/responsive-website/awsome-features-5-img.png"
                      alt=""
                    />
                    <div>
                      <h2>Interactive Learning Experience</h2>
                      <p>
                        Engage in interactive learning experiences with scroll
                        effects and animations to enhance retention.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-md-6 mt-3">
                  <div class="d-flex flex-row">
                    <img
                      src="https://assets.ccbp.in/frontend/responsive-website/awsome-features-6-img.png"
                      alt=""
                    />
                    <div>
                      <h2>Resource Library</h2>
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

        {/* Contact Us */}
        <section id="contact" className="section">
          <div className="container">
            <h2>Contact Us</h2>
            <ContactUs />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default LaunchPage2;
