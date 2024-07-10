import React, { useState } from "react";
import Signup from "./Signup";
import Login from "./Login";
import "./Auth.css";

const Auth = () => {
  const [isSignUpMode, setIsSignUpMode] = useState(false);

  const switchToSignUp = () => setIsSignUpMode(true);
  const switchToSignIn = () => setIsSignUpMode(false);

  return (
    <div className={`auth-container ${isSignUpMode ? "sign-up-mode" : ""}`}>
      <div className="forms-container">
        <div className="signin-signup">
          <Login switchToSignUp={switchToSignUp} />
          <Signup switchToSignIn={switchToSignIn} />
        </div>
      </div>
      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New here?</h3>
            <p>
              Create your account to access top-notch interview resources and
              start your journey to your dream job!
            </p>
            <button className="btn transparent" onClick={switchToSignUp}>
              Sign up
            </button>
          </div>
          <img
            src="https://static.vecteezy.com/system/resources/previews/020/003/925/original/job-interview-graphic-clipart-design-free-png.png"
            className="image"
            alt="Interview Buzz"
          />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>One of us?</h3>
            <p>
              Login to access your personalized interview preparation resources
              and ace your next job interview!
            </p>
            <button className="btn transparent" onClick={switchToSignIn}>
              Sign in
            </button>
          </div>
          <img
            src="https://png.pngtree.com/png-clipart/20220724/ourmid/pngtree-job-interview-recruitment-find-work-meeting-illustration-png-image_6050073.png"
            className="image"
            alt="Interview Buzz"
          />
        </div>
      </div>
    </div>
  );
};

export default Auth;
