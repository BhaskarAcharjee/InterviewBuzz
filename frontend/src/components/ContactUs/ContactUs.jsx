import React from "react";
import "./ContactUs.css";
import { ReactComponent as ContactUsImg } from "../../assets/images/contact_us.svg";

const ContactUs = () => {
  return (
    <div class="contact-container d-flex justify-content-center align-items-center">
      {/* SVG */}
      <ContactUsImg />

      {/* FORM */}

      <form>
        <h1 class="title text-center mb-4">Talk to Us</h1>

        {/* <!-- Name --> */}
        <div class="form-group position-relative">
          <label for="formName" class="d-block">
            <i class="icon" data-feather="user"></i>
          </label>
          <input
            type="text"
            id="formName"
            class="form-control form-control-lg thick"
            placeholder="Name"
          />
        </div>

        {/* <!-- E-mail --> */}
        <div class="form-group position-relative">
          <label for="formEmail" class="d-block">
            <i class="icon" data-feather="mail"></i>
          </label>
          <input
            type="email"
            id="formEmail"
            class="form-control form-control-lg thick"
            placeholder="E-mail"
          />
        </div>

        {/* <!-- Message --> */}
        <div class="form-group message">
          <textarea
            id="formMessage"
            class="form-control form-control-lg"
            rows="7"
            placeholder="Message"
          ></textarea>
        </div>

        {/* <!-- Submit btn --> */}
        <div class="text-center">
          <button type="submit" class="btn btn-primary" tabIndex="-1">
            Send message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactUs;
