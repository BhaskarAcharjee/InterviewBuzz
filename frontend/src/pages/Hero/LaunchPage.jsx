import React from "react";
import LandingPageCSS from "../../assets/css/landingpage.module.css";
import logo from "../../assets/images/Interview_text_logo.png";
import featured_item_1 from "../../assets/images/featured-item-01.png";
import left_image from "../../assets/images/left-image.png";
import right_image from "../../assets/images/right-image.png";
import work_process_item_1 from "../../assets/images/work-process-item-01.png";
import testimonial_icon from "../../assets/images/testimonial-icon.png";
import blog_item_1 from "../../assets/images/blog-item-01.png";
import blog_item_2 from "../../assets/images/blog-item-02.png";
import blog_item_3 from "../../assets/images/blog-item-03.png";
import { useNavigate } from "react-router-dom";

const LaunchPage = () => {
  const navigate = useNavigate();
  const handleGetStarted = () => {
    navigate("/home");
  };
  return (
    <div className="launchpage-container">
      {/* <!-- ***** Preloader Start ***** --> */}
      {/* <div id="preloader">
        <div className={LandingPageCSS.jumper}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div> */}
      {/* <!-- ***** Preloader End ***** --> */}

      {/* <!-- ***** Header Area Start ***** --> */}
      <header
        className={`${LandingPageCSS["header-area"]} ${LandingPageCSS["header-sticky"]}`}
      >
        <div className={LandingPageCSS.container}>
          <div className={LandingPageCSS.row}>
            <div className={LandingPageCSS["col-12"]}>
              <nav className={LandingPageCSS["main-nav"]}>
                {/* <!-- ***** Logo Start ***** --> */}
                <a href="#" className={LandingPageCSS.logo}>
                  <img width="120px" src={logo} alt="Interview Buzz" />
                </a>
                {/* <!-- ***** Logo End ***** --> */}
                {/* <!-- ***** Menu Start ***** --> */}
                <ul className={LandingPageCSS.nav}>
                  <li>
                    <a href="#welcome" className={LandingPageCSS.active}>
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#features">About</a>
                  </li>
                  <li>
                    <a href="#work-process">Work Process</a>
                  </li>
                  <li>
                    <a href="#testimonials">Testimonials</a>
                  </li>
                  <li>
                    <a href="#pricing-plans">Pricing Tables</a>
                  </li>
                  <li>
                    <a href="#blog">Blog Entries</a>
                  </li>
                  <li>
                    <a href="#contact-us">Contact Us</a>
                  </li>
                </ul>
                <a className={LandingPageCSS["menu-trigger"]}>
                  <span>Menu</span>
                </a>
                {/* <!-- ***** Menu End ***** --> */}
              </nav>
            </div>
          </div>
        </div>
      </header>
      {/* <!-- ***** Header Area End ***** --> */}

      {/* <!-- ***** Welcome Area Start ***** --> */}
      <div className={LandingPageCSS["welcome-area"]} id="welcome">
        {/* <!-- ***** Header Text Start ***** --> */}
        <div className={LandingPageCSS["header-text"]}>
          <div className={LandingPageCSS.container}>
            <div className={LandingPageCSS.row}>
              <div
                className={`${LandingPageCSS["offset-xl-3"]} ${LandingPageCSS["col-xl-6"]} ${LandingPageCSS["offset-lg-2"]} ${LandingPageCSS["col-lg-8"]} ${LandingPageCSS["col-md-12"]} ${LandingPageCSS["col-sm-12"]}`}
              >
                <h1>
                  We provide the best <strong>tools</strong>
                  <br />
                  to ace your <strong>interviews</strong>
                </h1>
                <p>
                  Interview Buzz is your ultimate platform for mastering
                  interview skills, providing resources and a community for
                  interview aspirants.
                </p>
                {/* <a href="#features" className={LandingPageCSS["main-button-slider"]}>
                  Discover More
                </a> */}
                <button
                  className={["gradient-button"]}
                  onClick={handleGetStarted}
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- ***** Header Text End ***** --> */}
      </div>
      {/* <!-- ***** Welcome Area End ***** --> */}

      {/* <!-- ***** Features Small Start ***** --> */}
      <section
        className={`${LandingPageCSS.section} ${LandingPageCSS["home-feature"]}`}
      >
        <div className={LandingPageCSS.container}>
          <div className={LandingPageCSS.row}>
            <div className={LandingPageCSS["col-lg-12"]}>
              <div className={LandingPageCSS.row}>
                {/* <!-- ***** Features Small Item Start ***** --> */}
                <div
                  className={`${LandingPageCSS["col-lg-4"]} ${LandingPageCSS["col-md-6"]} ${LandingPageCSS["col-sm-6"]} ${LandingPageCSS["col-12"]}`}
                  data-scroll-reveal="enter bottom move 50px over 0.6s after 0.2s"
                >
                  <div className={LandingPageCSS["features-small-item"]}>
                    <div className={LandingPageCSS.icon}>
                      <i>
                        <img src={featured_item_1} alt="" />
                      </i>
                    </div>
                    <h5 className={LandingPageCSS["features-title"]}>
                      Comprehensive Resources
                    </h5>
                    <p>
                      Access a wide range of resources to prepare for your
                      interviews.
                    </p>
                  </div>
                </div>
                {/* <!-- ***** Features Small Item End ***** --> */}

                {/* <!-- ***** Features Small Item Start ***** --> */}
                <div
                  className={`${LandingPageCSS["col-lg-4"]} ${LandingPageCSS["col-md-6"]} ${LandingPageCSS["col-sm-6"]} ${LandingPageCSS["col-12"]}`}
                  data-scroll-reveal="enter bottom move 50px over 0.6s after 0.4s"
                >
                  <div className={LandingPageCSS["features-small-item"]}>
                    <div className={LandingPageCSS.icon}>
                      <i>
                        <img src={featured_item_1} alt="" />
                      </i>
                    </div>
                    <h5 className={LandingPageCSS["features-title"]}>
                      Expert Guidance
                    </h5>
                    <p>
                      Get advice from industry experts to excel in your
                      interviews.
                    </p>
                  </div>
                </div>
                {/* <!-- ***** Features Small Item End ***** --> */}

                {/* <!-- ***** Features Small Item Start ***** --> */}
                <div
                  className={`${LandingPageCSS["col-lg-4"]} ${LandingPageCSS["col-md-6"]} ${LandingPageCSS["col-sm-6"]} ${LandingPageCSS["col-12"]}`}
                  data-scroll-reveal="enter bottom move 50px over 0.6s after 0.6s"
                >
                  <div className={LandingPageCSS["features-small-item"]}>
                    <div className={LandingPageCSS.icon}>
                      <i>
                        <img src={featured_item_1} alt="" />
                      </i>
                    </div>
                    <h5 className={LandingPageCSS["features-title"]}>
                      Community Support
                    </h5>
                    <p>
                      Join our community to connect with other interview
                      aspirants.
                    </p>
                  </div>
                </div>
                {/* <!-- ***** Features Small Item End ***** --> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ***** Features Small End ***** --> */}

      {/* <!-- ***** Features Big Item Start ***** --> */}
      <section
        className={`${LandingPageCSS.section} ${LandingPageCSS["padding-top-70"]} ${LandingPageCSS["padding-bottom-0"]}`}
        id="features"
      >
        <div className={LandingPageCSS.container}>
          <div className={LandingPageCSS.row}>
            <div
              className={`${LandingPageCSS["col-lg-5"]} ${LandingPageCSS["col-md-12"]} ${LandingPageCSS["col-sm-12"]} ${LandingPageCSS["align-self-center"]}`}
              data-scroll-reveal="enter left move 30px over 0.6s after 0.4s"
            >
              <img
                src={left_image}
                className={`${LandingPageCSS.rounded} ${LandingPageCSS["img-fluid"]} ${LandingPageCSS["d-block"]} ${LandingPageCSS["mx-auto"]}`}
                alt="Interview Preparation"
              />
            </div>
            <div className={LandingPageCSS["col-lg-1"]}></div>
            <div
              className={`${LandingPageCSS["col-lg-6"]} ${LandingPageCSS["col-md-12"]} ${LandingPageCSS["col-sm-12"]} ${LandingPageCSS["align-self-center"]} ${LandingPageCSS["mobile-top-fix"]}`}
            >
              <div className={LandingPageCSS["left-heading"]}>
                <h2 className={LandingPageCSS["section-title"]}>
                  Join Our Community Forum
                </h2>
              </div>
              <div className={LandingPageCSS["left-text"]}>
                <p>
                  Engage with fellow interview aspirants, share insights, and
                  gain valuable tips on how to ace your interviews. Our
                  community forum is the perfect place to connect and grow
                  together.
                </p>
              </div>
            </div>
          </div>
          <div className={LandingPageCSS.row}>
            <div className={`${LandingPageCSS["col-lg-12"]}`}>
              <div className={LandingPageCSS["hr"]}></div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ***** Features Big Item End ***** --> */}

      {/* <!-- ***** Features Big Item Start ***** --> */}
      <section
        className={`${LandingPageCSS.section} ${LandingPageCSS["padding-bottom-100"]}`}
      >
        <div className={LandingPageCSS.container}>
          <div className={LandingPageCSS.row}>
            <div
              className={`${LandingPageCSS["col-lg-6"]} ${LandingPageCSS["col-md-12"]} ${LandingPageCSS["col-sm-12"]} ${LandingPageCSS["align-self-center"]} ${LandingPageCSS["mobile-bottom-fix"]}`}
            >
              <div className={LandingPageCSS["left-heading"]}>
                <h2 className={LandingPageCSS["section-title"]}>
                  Master Your Interview Skills
                </h2>
              </div>
              <div className={LandingPageCSS["left-text"]}>
                <p>
                  Take advantage of our comprehensive resources and expert
                  guidance to enhance your interview preparation. Whether you
                  are a beginner or an experienced professional, Interview Buzz
                  provides the tools you need to succeed.
                </p>
              </div>
            </div>
            <div className={LandingPageCSS["col-lg-1"]}></div>
            <div
              className={`${LandingPageCSS["col-lg-5"]} ${LandingPageCSS["col-md-12"]} ${LandingPageCSS["col-sm-12"]} ${LandingPageCSS["align-self-center"]} ${LandingPageCSS["mobile-bottom-fix-big"]}`}
              data-scroll-reveal="enter right move 30px over 0.6s after 0.4s"
            >
              <img
                src={right_image}
                className={`${LandingPageCSS.rounded} ${LandingPageCSS["img-fluid"]} ${LandingPageCSS["d-block"]} ${LandingPageCSS["mx-auto"]}`}
                alt="Interview Skills"
              />
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ***** Features Big Item End ***** --> */}

      {/* <!-- ***** Home Parallax Start ***** --> */}
      <section className={`${LandingPageCSS.mini}`} id="work-process">
        <div className={`${LandingPageCSS["mini-content"]}`}>
          <div className={`${LandingPageCSS.container}`}>
            <div className={`${LandingPageCSS.row}`}>
              <div
                className={`${LandingPageCSS["offset-lg-3"]} ${LandingPageCSS["col-lg-6"]}`}
              >
                <div className={`${LandingPageCSS.info}`}>
                  <h1>How It Works</h1>
                  <p>
                    Discover the streamlined process we follow to help you
                    master your interview skills and land your dream job.
                  </p>
                </div>
              </div>
            </div>

            {/* <!-- ***** Mini Box Start ***** --> */}
            <div className={`${LandingPageCSS.row}`}>
              <div
                className={`${LandingPageCSS["col-lg-2"]} ${LandingPageCSS["col-md-3"]} ${LandingPageCSS["col-sm-6"]} ${LandingPageCSS.col}`}
              >
                <a href="#" className={`${LandingPageCSS["mini-box"]}`}>
                  <i>
                    <img src={work_process_item_1} alt="Get Ideas" />
                  </i>
                  <strong>Get Ideas</strong>
                  <span>Gather insights and strategies from experts.</span>
                </a>
              </div>
              <div
                className={`${LandingPageCSS["col-lg-2"]} ${LandingPageCSS["col-md-3"]} ${LandingPageCSS["col-sm-6"]} ${LandingPageCSS.col}`}
              >
                <a href="#" className={`${LandingPageCSS["mini-box"]}`}>
                  <i>
                    <img src={work_process_item_1} alt="Sketch Up" />
                  </i>
                  <strong>Sketch Up</strong>
                  <span>Outline your plan and prepare your responses.</span>
                </a>
              </div>
              <div
                className={`${LandingPageCSS["col-lg-2"]} ${LandingPageCSS["col-md-3"]} ${LandingPageCSS["col-sm-6"]} ${LandingPageCSS.col}`}
              >
                <a href="#" className={`${LandingPageCSS["mini-box"]}`}>
                  <i>
                    <img src={work_process_item_1} alt="Discuss" />
                  </i>
                  <strong>Discuss</strong>
                  <span>Engage in mock interviews and get feedback.</span>
                </a>
              </div>
              <div
                className={`${LandingPageCSS["col-lg-2"]} ${LandingPageCSS["col-md-3"]} ${LandingPageCSS["col-sm-6"]} ${LandingPageCSS.col}`}
              >
                <a href="#" className={`${LandingPageCSS["mini-box"]}`}>
                  <i>
                    <img src={work_process_item_1} alt="Revise" />
                  </i>
                  <strong>Revise</strong>
                  <span>Refine your answers and improve your approach.</span>
                </a>
              </div>
              <div
                className={`${LandingPageCSS["col-lg-2"]} ${LandingPageCSS["col-md-3"]} ${LandingPageCSS["col-sm-6"]} ${LandingPageCSS.col}`}
              >
                <a href="#" className={`${LandingPageCSS["mini-box"]}`}>
                  <i>
                    <img src={work_process_item_1} alt="Approve" />
                  </i>
                  <strong>Approve</strong>
                  <span>Finalize your preparation with expert advice.</span>
                </a>
              </div>
              <div
                className={`${LandingPageCSS["col-lg-2"]} ${LandingPageCSS["col-md-3"]} ${LandingPageCSS["col-sm-6"]} ${LandingPageCSS.col}`}
              >
                <a href="#" className={`${LandingPageCSS["mini-box"]}`}>
                  <i>
                    <img src={work_process_item_1} alt="Launch" />
                  </i>
                  <strong>Launch</strong>
                  <span>Confidently attend your interview and succeed.</span>
                </a>
              </div>
            </div>
            {/* <!-- ***** Mini Box End ***** --> */}
          </div>
        </div>
      </section>
      {/* <!-- ***** Home Parallax End ***** --> */}

      {/* <!-- ***** Testimonials Start ***** --> */}
      <section className={LandingPageCSS.section} id="testimonials">
        <div className={LandingPageCSS.container}>
          {/* <!-- ***** Section Title Start ***** --> */}
          <div className={LandingPageCSS.row}>
            <div className={LandingPageCSS["col-lg-12"]}>
              <div className={LandingPageCSS["center-heading"]}>
                <h2 className={LandingPageCSS["section-title"]}>
                  What Our Users Say
                </h2>
              </div>
            </div>
            <div
              className={`${LandingPageCSS["offset-lg-3"]} ${LandingPageCSS["col-lg-6"]}`}
            >
              <div className={LandingPageCSS["center-text"]}>
                <p>
                  Hear from our satisfied users who have successfully navigated
                  their interview journey with Interview Buzz.
                </p>
              </div>
            </div>
          </div>
          {/* <!-- ***** Section Title End ***** --> */}

          <div className={LandingPageCSS.row}>
            {/* <!-- ***** Testimonials Item Start ***** --> */}
            <div
              className={`${LandingPageCSS["col-lg-4"]} ${LandingPageCSS["col-md-6"]} ${LandingPageCSS["col-sm-12"]}`}
            >
              <div className={LandingPageCSS["team-item"]}>
                <div className={LandingPageCSS["team-content"]}>
                  <i>
                    <img src={testimonial_icon} alt="Testimonial Icon" />
                  </i>
                  <p>
                    Interview Buzz gave me the confidence and preparation I
                    needed to succeed in my interviews. Highly recommend!
                  </p>
                  <div className={LandingPageCSS["user-image"]}>
                    <img src="http://placehold.it/60x60" alt="User Image" />
                  </div>
                  <div className={LandingPageCSS["team-info"]}>
                    <h3 className={LandingPageCSS["user-name"]}>
                      Catherine Soft
                    </h3>
                    <span>Managing Director</span>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- ***** Testimonials Item End ***** --> */}

            {/* <!-- ***** Testimonials Item Start ***** --> */}
            <div
              className={`${LandingPageCSS["col-lg-4"]} ${LandingPageCSS["col-md-6"]} ${LandingPageCSS["col-sm-12"]}`}
            >
              <div className={LandingPageCSS["team-item"]}>
                <div className={LandingPageCSS["team-content"]}>
                  <i>
                    <img src={testimonial_icon} alt="Testimonial Icon" />
                  </i>
                  <p>
                    The mock interviews were a game-changer. The feedback was
                    invaluable, and I felt well-prepared for my real interviews.
                  </p>
                  <div className={LandingPageCSS["user-image"]}>
                    <img src="http://placehold.it/60x60" alt="User Image" />
                  </div>
                  <div className={LandingPageCSS["team-info"]}>
                    <h3 className={LandingPageCSS["user-name"]}>Kelvin Wood</h3>
                    <span>Digital Marketer</span>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- ***** Testimonials Item End ***** --> */}

            {/* <!-- ***** Testimonials Item Start ***** --> */}
            <div
              className={`${LandingPageCSS["col-lg-4"]} ${LandingPageCSS["col-md-6"]} ${LandingPageCSS["col-sm-12"]}`}
            >
              <div className={LandingPageCSS["team-item"]}>
                <div className={LandingPageCSS["team-content"]}>
                  <i>
                    <img src={testimonial_icon} alt="Testimonial Icon" />
                  </i>
                  <p>
                    Thanks to Interview Buzz, I landed my dream job! The
                    structured approach and expert guidance made all the
                    difference.
                  </p>
                  <div className={LandingPageCSS["user-image"]}>
                    <img src="http://placehold.it/60x60" alt="User Image" />
                  </div>
                  <div className={LandingPageCSS["team-info"]}>
                    <h3 className={LandingPageCSS["user-name"]}>
                      David Martin
                    </h3>
                    <span>Website Manager</span>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- ***** Testimonials Item End ***** --> */}
          </div>
        </div>
      </section>
      {/* <!-- ***** Testimonials End ***** --> */}

      {/* <!-- ***** Pricing Plans Start ***** --> */}
      <section
        className={`${LandingPageCSS.section} ${LandingPageCSS.colored}`}
        id="pricing-plans"
      >
        <div className={LandingPageCSS.container}>
          {/* <!-- ***** Section Title Start ***** --> */}
          <div className={LandingPageCSS.row}>
            <div className={LandingPageCSS["col-lg-12"]}>
              <div className={LandingPageCSS["center-heading"]}>
                <h2 className={LandingPageCSS["section-title"]}>
                  Pricing Plans
                </h2>
              </div>
            </div>
            <div
              className={`${LandingPageCSS["offset-lg-3"]} ${LandingPageCSS["col-lg-6"]}`}
            >
              <div className={LandingPageCSS["center-text"]}>
                <p>
                  Choose the plan that suits your needs and start your journey
                  to interview success with Interview Buzz.
                </p>
              </div>
            </div>
          </div>
          {/* <!-- ***** Section Title End ***** --> */}

          <div className={LandingPageCSS.row}>
            {/* <!-- ***** Pricing Item Start ***** --> */}
            <div
              className={`${LandingPageCSS["col-lg-4"]} ${LandingPageCSS["col-md-6"]} ${LandingPageCSS["col-sm-12"]}`}
              data-scroll-reveal="enter bottom move 50px over 0.6s after 0.2s"
            >
              <div className={LandingPageCSS["pricing-item"]}>
                <div className={LandingPageCSS["pricing-header"]}>
                  <h3 className={LandingPageCSS["pricing-title"]}>Starter</h3>
                </div>
                <div className={LandingPageCSS["pricing-body"]}>
                  <div className={LandingPageCSS["price-wrapper"]}>
                    <span className={LandingPageCSS["currency"]}>$</span>
                    <span className={LandingPageCSS["price"]}>14.50</span>
                    <span className={LandingPageCSS["period"]}>monthly</span>
                  </div>
                  <ul className={LandingPageCSS["list"]}>
                    <li className={LandingPageCSS["active"]}>
                      Access to basic resources
                    </li>
                    <li className={LandingPageCSS["active"]}>
                      Monthly webinars
                    </li>
                    <li className={LandingPageCSS["active"]}>
                      Community support
                    </li>
                    <li>Email support</li>
                    <li>Basic security</li>
                  </ul>
                </div>
                <div className={LandingPageCSS["pricing-footer"]}>
                  <a href="#" className={LandingPageCSS["main-button"]}>
                    Get Started
                  </a>
                </div>
              </div>
            </div>
            {/* <!-- ***** Pricing Item End ***** --> */}

            {/* <!-- ***** Pricing Item Start ***** --> */}
            <div
              className={`${LandingPageCSS["col-lg-4"]} ${LandingPageCSS["col-md-6"]} ${LandingPageCSS["col-sm-12"]}`}
              data-scroll-reveal="enter bottom move 50px over 0.6s after 0.4s"
            >
              <div
                className={`${LandingPageCSS["pricing-item"]} ${LandingPageCSS["active"]}`}
              >
                <div className={LandingPageCSS["pricing-header"]}>
                  <h3 className={LandingPageCSS["pricing-title"]}>Premium</h3>
                </div>
                <div className={LandingPageCSS["pricing-body"]}>
                  <div className={LandingPageCSS["price-wrapper"]}>
                    <span className={LandingPageCSS["currency"]}>$</span>
                    <span className={LandingPageCSS["price"]}>21.50</span>
                    <span className={LandingPageCSS["period"]}>monthly</span>
                  </div>
                  <ul className={LandingPageCSS["list"]}>
                    <li className={LandingPageCSS["active"]}>
                      All Starter features
                    </li>
                    <li className={LandingPageCSS["active"]}>
                      One-on-one coaching
                    </li>
                    <li className={LandingPageCSS["active"]}>Resume review</li>
                    <li className={LandingPageCSS["active"]}>
                      Priority support
                    </li>
                    <li>Advanced security</li>
                  </ul>
                </div>
                <div className={LandingPageCSS["pricing-footer"]}>
                  <a href="#" className={LandingPageCSS["main-button"]}>
                    Get Started
                  </a>
                </div>
              </div>
            </div>
            {/* <!-- ***** Pricing Item End ***** --> */}

            {/* <!-- ***** Pricing Item Start ***** --> */}
            <div
              className={`${LandingPageCSS["col-lg-4"]} ${LandingPageCSS["col-md-6"]} ${LandingPageCSS["col-sm-12"]}`}
              data-scroll-reveal="enter bottom move 50px over 0.6s after 0.6s"
            >
              <div className={LandingPageCSS["pricing-item"]}>
                <div className={LandingPageCSS["pricing-header"]}>
                  <h3 className={LandingPageCSS["pricing-title"]}>Advanced</h3>
                </div>
                <div className={LandingPageCSS["pricing-body"]}>
                  <div className={LandingPageCSS["price-wrapper"]}>
                    <span className={LandingPageCSS["currency"]}>$</span>
                    <span className={LandingPageCSS["price"]}>42.00</span>
                    <span className={LandingPageCSS["period"]}>monthly</span>
                  </div>
                  <ul className={LandingPageCSS["list"]}>
                    <li className={LandingPageCSS["active"]}>
                      All Premium features
                    </li>
                    <li className={LandingPageCSS["active"]}>
                      Mock interviews with experts
                    </li>
                    <li className={LandingPageCSS["active"]}>
                      Personalized feedback
                    </li>
                    <li className={LandingPageCSS["active"]}>24/7 support</li>
                    <li className={LandingPageCSS["active"]}>
                      Top-tier security
                    </li>
                  </ul>
                </div>
                <div className={LandingPageCSS["pricing-footer"]}>
                  <a href="#" className={LandingPageCSS["main-button"]}>
                    Get Started
                  </a>
                </div>
              </div>
            </div>
            {/* <!-- ***** Pricing Item End ***** --> */}
          </div>
        </div>
      </section>
      {/* <!-- ***** Pricing Plans End ***** --> */}

      {/* <!-- ***** Counter Parallax Start ***** --> */}
      <section className={LandingPageCSS.counter}>
        <div className={LandingPageCSS.content}>
          <div className={LandingPageCSS.container}>
            <div className={LandingPageCSS.row}>
              <div
                className={`${LandingPageCSS["col-lg-3"]} ${LandingPageCSS["col-md-6"]} ${LandingPageCSS["col-sm-12"]}`}
              >
                <div
                  className={`${LandingPageCSS["count-item"]} ${LandingPageCSS["decoration-bottom"]}`}
                >
                  <strong>200+</strong>
                  <span>Interviews Conducted</span>
                </div>
              </div>
              <div
                className={`${LandingPageCSS["col-lg-3"]} ${LandingPageCSS["col-md-6"]} ${LandingPageCSS["col-sm-12"]}`}
              >
                <div
                  className={`${LandingPageCSS["count-item"]} ${LandingPageCSS["decoration-top"]}`}
                >
                  <strong>150+</strong>
                  <span>Happy Candidates</span>
                </div>
              </div>
              <div
                className={`${LandingPageCSS["col-lg-3"]} ${LandingPageCSS["col-md-6"]} ${LandingPageCSS["col-sm-12"]}`}
              >
                <div
                  className={`${LandingPageCSS["count-item"]} ${LandingPageCSS["decoration-bottom"]}`}
                >
                  <strong>30+</strong>
                  <span>Companies Engaged</span>
                </div>
              </div>
              <div
                className={`${LandingPageCSS["col-lg-3"]} ${LandingPageCSS["col-md-6"]} ${LandingPageCSS["col-sm-12"]}`}
              >
                <div className={LandingPageCSS["count-item"]}>
                  <strong>50+</strong>
                  <span>Resources Created</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ***** Counter Parallax End ***** --> */}

      {/* <!-- ***** Blog Start ***** --> */}
      <section className={`${LandingPageCSS.section}`} id="blog">
        <div className={`${LandingPageCSS.container}`}>
          {/* <!-- ***** Section Title Start ***** --> */}
          <div className={`${LandingPageCSS.row}`}>
            <div className={`${LandingPageCSS["col-lg-12"]}`}>
              <div className={`${LandingPageCSS["center-heading"]}`}>
                <h2 className={`${LandingPageCSS["section-title"]}`}>
                  Latest Articles
                </h2>
              </div>
            </div>
            <div
              className={`${LandingPageCSS["offset-lg-3"]} ${LandingPageCSS["col-lg-6"]}`}
            >
              <div className={`${LandingPageCSS["center-text"]}`}>
                <p>
                  Discover the latest insights, tips, and success stories in
                  interview preparation, job searching, and career development.
                </p>
              </div>
            </div>
          </div>
          {/* <!-- ***** Section Title End ***** --> */}

          <div className={`${LandingPageCSS.row}`}>
            <div
              className={`${LandingPageCSS["col-lg-4"]} ${LandingPageCSS["col-md-6"]} ${LandingPageCSS["col-sm-12"]}`}
            >
              <div className={`${LandingPageCSS["blog-post-thumb"]}`}>
                <div className={`${LandingPageCSS.img}`}>
                  <img src={blog_item_1} alt="" />
                </div>
                <div className={`${LandingPageCSS["blog-content"]}`}>
                  <h3>
                    <a href="#">How to Ace Technical Interviews</a>
                  </h3>
                  <div className={`${LandingPageCSS.text}`}>
                    Cracking the code: Tips and strategies for acing your next
                    technical interview.
                  </div>
                  <a href="#" className={`${LandingPageCSS["main-button"]}`}>
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div
              className={`${LandingPageCSS["col-lg-4"]} ${LandingPageCSS["col-md-6"]} ${LandingPageCSS["col-sm-12"]}`}
            >
              <div className={`${LandingPageCSS["blog-post-thumb"]}`}>
                <div className={`${LandingPageCSS.img}`}>
                  <img src={blog_item_2} alt="" />
                </div>
                <div className={`${LandingPageCSS["blog-content"]}`}>
                  <h3>
                    <a href="#">Top Behavioral Interview Questions</a>
                  </h3>
                  <div className={`${LandingPageCSS.text}`}>
                    Preparing for common behavioral questions to showcase your
                    skills and experiences effectively.
                  </div>
                  <a href="#" className={`${LandingPageCSS["main-button"]}`}>
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div
              className={`${LandingPageCSS["col-lg-4"]} ${LandingPageCSS["col-md-6"]} ${LandingPageCSS["col-sm-12"]}`}
            >
              <div className={`${LandingPageCSS["blog-post-thumb"]}`}>
                <div className={`${LandingPageCSS.img}`}>
                  <img src={blog_item_3} alt="" />
                </div>
                <div className={`${LandingPageCSS["blog-content"]}`}>
                  <h3>
                    <a href="#">Crafting the Perfect Resume</a>
                  </h3>
                  <div className={`${LandingPageCSS.text}`}>
                    Tips and tricks to make your resume stand out in the job
                    market.
                  </div>
                  <a href="#" className={`${LandingPageCSS["main-button"]}`}>
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ***** Blog End ***** --> */}

      {/* <!-- ***** Contact Us Start ***** --> */}
      <section
        className={`${LandingPageCSS.section} ${LandingPageCSS.colored}`}
        id="contact-us"
      >
        <div className={`${LandingPageCSS.container}`}>
          {/* <!-- ***** Section Title Start ***** --> */}
          <div className={`${LandingPageCSS.row}`}>
            <div className={`${LandingPageCSS["col-lg-12"]}`}>
              <div className={`${LandingPageCSS["center-heading"]}`}>
                <h2 className={`${LandingPageCSS["section-title"]}`}>
                  Get In Touch
                </h2>
              </div>
            </div>
            <div
              className={`${LandingPageCSS["offset-lg-3"]} ${LandingPageCSS["col-lg-6"]}`}
            >
              <div className={`${LandingPageCSS["center-text"]}`}>
                <p>
                  We would love to hear from you. Reach out to us for any
                  queries, feedback, or just to say hello.
                </p>
              </div>
            </div>
          </div>
          {/* <!-- ***** Section Title End ***** --> */}

          <div className={`${LandingPageCSS.row}`}>
            {/* <!-- ***** Contact Text Start ***** --> */}
            <div
              className={`${LandingPageCSS["col-lg-4"]} ${LandingPageCSS["col-md-6"]} ${LandingPageCSS["col-sm-12"]}`}
            >
              <h5 className={`${LandingPageCSS["margin-bottom-30"]}`}>
                Stay Connected
              </h5>
              <div className={`${LandingPageCSS["contact-text"]}`}>
                <p>
                  Interview Buzz HQ, 123 Interview St, Suite 456
                  <br />
                  City, State, 78910
                </p>
                <p>
                  For any inquiries or support, feel free to reach out. Your
                  success is our priority.
                </p>
              </div>
            </div>
            {/* <!-- ***** Contact Text End ***** --> */}

            {/* <!-- ***** Contact Form Start ***** --> */}
            <div
              className={`${LandingPageCSS["col-lg-8"]} ${LandingPageCSS["col-md-6"]} ${LandingPageCSS["col-sm-12"]}`}
            >
              <div className={`${LandingPageCSS["contact-form"]}`}>
                <form id="contact" action="" method="get">
                  <div className={`${LandingPageCSS.row}`}>
                    <div
                      className={`${LandingPageCSS["col-lg-6"]} ${LandingPageCSS["col-md-12"]} ${LandingPageCSS["col-sm-12"]}`}
                    >
                      <fieldset>
                        <input
                          name="name"
                          type="text"
                          className={`${LandingPageCSS["form-control"]}`}
                          id="name"
                          placeholder="Full Name"
                          required=""
                        />
                      </fieldset>
                    </div>
                    <div
                      className={`${LandingPageCSS["col-lg-6"]} ${LandingPageCSS["col-md-12"]} ${LandingPageCSS["col-sm-12"]}`}
                    >
                      <fieldset>
                        <input
                          name="email"
                          type="email"
                          className={`${LandingPageCSS["form-control"]}`}
                          id="email"
                          placeholder="E-Mail Address"
                          required=""
                        />
                      </fieldset>
                    </div>
                    <div className={`${LandingPageCSS["col-lg-12"]}`}>
                      <fieldset>
                        <textarea
                          name="message"
                          rows="6"
                          className={`${LandingPageCSS["form-control"]}`}
                          id="message"
                          placeholder="Your Message"
                          required=""
                        ></textarea>
                      </fieldset>
                    </div>
                    <div className={`${LandingPageCSS["col-lg-12"]}`}>
                      <fieldset>
                        <button
                          type="submit"
                          id="form-submit"
                          className={`${LandingPageCSS["main-button"]}`}
                        >
                          Send Message
                        </button>
                      </fieldset>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            {/* <!-- ***** Contact Form End ***** --> */}
          </div>
        </div>
      </section>
      {/* <!-- ***** Contact Us End ***** --> */}

      {/* <!-- ***** Footer Start ***** --> */}
      <footer>
        <div className={`${LandingPageCSS.container}`}>
          <div className={`${LandingPageCSS.row}`}>
            <div
              className={`${LandingPageCSS["col-lg-12"]} ${LandingPageCSS["col-md-12"]} ${LandingPageCSS["col-sm-12"]}`}
            >
              <ul className={`${LandingPageCSS.social}`}>
                <li>
                  <a href="#">
                    <i className={`${LandingPageCSS.fa} fa-facebook`}></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className={`${LandingPageCSS.fa} fa-twitter`}></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className={`${LandingPageCSS.fa} fa-linkedin`}></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className={`${LandingPageCSS.fa} fa-rss`}></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className={`${LandingPageCSS.fa} fa-dribbble`}></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className={`${LandingPageCSS.row}`}>
            <div className={`${LandingPageCSS["col-lg-12"]}`}>
              <p className={`${LandingPageCSS.copyright}`}>
                Copyright &copy; 2024 Interview Buzz
              </p>
            </div>
          </div>
        </div>
      </footer>
      {/* <!-- ***** Footer End ***** --> */}
    </div>
  );
};

export default LaunchPage;
