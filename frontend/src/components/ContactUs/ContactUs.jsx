import React from "react";
import "./ContactUs.css";
import { ReactComponent as ContactUsImg } from "../../assets/images/contact_us.svg";

const ContactUs = () => {
  return (
    <div className="contact-container d-flex justify-content-center align-items-center">
      {/* SVG */}
      <ContactUsImg />

      {/* FORM */}

      <form>
        <h1 className="title text-center mb-4">Talk to Us</h1>

        {/* <!-- Name --> */}
        <div className="form-group position-relative">
          <label htmlFor="formName" className="d-block">
            <i className="icon" data-feather="user"></i>
          </label>
          <input
            type="text"
            id="formName"
            className="form-control form-control-lg thick"
            placeholder="Name"
          />
        </div>

        {/* <!-- E-mail --> */}
        <div className="form-group position-relative">
          <label htmlFor="formEmail" className="d-block">
            <i className="icon" data-feather="mail"></i>
          </label>
          <input
            type="email"
            id="formEmail"
            className="form-control form-control-lg thick"
            placeholder="E-mail"
          />
        </div>

        {/* <!-- Message --> */}
        <div className="form-group message">
          <textarea
            id="formMessage"
            className="form-control form-control-lg"
            rows="7"
            placeholder="Message"
          ></textarea>
        </div>

        {/* <!-- Submit btn --> */}
        <div className="text-center">
          <button type="submit" className="btn btn-primary" tabIndex="-1">
            Send message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactUs;
