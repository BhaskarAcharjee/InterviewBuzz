import React, { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { register } from "../../services/auth";
import "./Auth.css";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await register({ username, email, password });
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));
      navigate("/");
    } catch (error) {
      console.error("Error registering:", error);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-content">
        <div className="auth-image">
          <img
            src="https://static.vecteezy.com/system/resources/previews/020/003/925/original/job-interview-graphic-clipart-design-free-png.png"
            alt="Interview Buzz"
          />
        </div>
        <div className="auth-form">
          <h2>Join Interview Buzz</h2>
          <p>
            Create your account to access top-notch interview resources and
            start your journey to your dream job!
          </p>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="auth-button">
              Sign Up
            </button>
          </form>
          <p className="auth-switch">
            Already have an account? <NavLink to="/login">Log In</NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
