import React from "react";
import { useNavigate } from "react-router-dom";
import "./LaunchPage2.css";
import text_logo from "../../assets/images/Interview_text_logo.png";
import Footer from "../../components/Footer/Footer";

const LaunchPage2 = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/home");
  };

  return (
    <div className="launch-page">
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
          <button className="gradient-button" onClick={handleGetStarted}>
            Get Started
          </button>
        </div>
      </header>

      <section className="glass-morphic-header">
        <div className="launch-container">
          <h1>Welcome to Interview Buzz</h1>
          <p>Your ultimate destination for interview preparation!</p>
        </div>
        <img
          src="https://static.vecteezy.com/system/resources/previews/020/003/900/non_2x/job-interview-graphic-clipart-design-free-png.png"
          alt="Job Interview Graphic"
        />
      </section>

      <main className="main-content">
        <section id="about" className="section">
          <div className="container">
            <h2>About Interview Buzz</h2>
            <p>
              Interview Buzz is committed to helping job seekers prepare
              effectively for interviews and build successful careers. We
              provide a comprehensive platform with resources ranging from
              interview questions to mock interviews and career advice.
            </p>
          </div>
        </section>

        <section id="features" className="section">
          <div className="container">
            <h2>Features</h2>
            <p>
              Discover our wide range of features designed to enhance your
              interview preparation experience. From customizable flashcards to
              detailed company insights, Interview Buzz equips you with the
              tools you need to succeed.
            </p>
          </div>
        </section>

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

        <section id="testimonials" className="section">
          <div className="container">
            <h2>Testimonials</h2>
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>
                  "Interview Buzz helped me land my dream job! The tips and
                  practice questions were invaluable."
                </p>
                <cite>- John Doe</cite>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>
                  "I couldn't have done it without Interview Buzz. The mock
                  interviews really boosted my confidence."
                </p>
                <cite>- Jane Smith</cite>
              </div>
            </div>
          </div>
        </section>

        <section id="blog" className="section">
          <div className="container">
            <h2>Blog</h2>
            <div className="blog-post">
              <h3>Top 5 Tips for Acing Your Next Interview</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                non leo id sapien ultricies convallis eget non nisi. Phasellus
                at metus elit. Sed dignissim volutpat tristique.
              </p>
              <a href="#">Read more</a>
            </div>
            <div className="blog-post">
              <h3>Common Interview Mistakes and How to Avoid Them</h3>
              <p>
                Nulla ut ex sed mauris tempus bibendum. Phasellus ullamcorper
                felis sit amet felis viverra, eget fringilla dui dapibus.
              </p>
              <a href="#">Read more</a>
            </div>
          </div>
        </section>

        <section id="pricing" className="section">
          <div className="container">
            <h2>Pricing</h2>
            <p>
              All features are currently free! Stay tuned for more premium
              features coming soon.
            </p>
          </div>
        </section>

        <section id="contact" className="section">
          <div className="container">
            <h2>Contact Us</h2>
            <p>
              Have questions or feedback? Reach out to us through our contact
              form or connect with us on social media. We're here to help you
              succeed!
            </p>
          </div>
        </section>
      </main>

      <Footer/>
    </div>
  );
};

export default LaunchPage2;
