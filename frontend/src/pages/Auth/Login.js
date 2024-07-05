import React, { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { login } from "../../services/auth";
import "./Auth.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await login({ email, password });
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));
      navigate("/");
    } catch (error) {
      console.error("Error logging in:", error);
      alert("Invalid email or password");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-content">
        <div className="auth-image">
          <img
            src="https://png.pngtree.com/png-clipart/20220724/ourmid/pngtree-job-interview-recruitment-find-work-meeting-illustration-png-image_6050073.png"
            alt="Interview Buzz"
          />
        </div>
        <div className="auth-form">
          <h2>Welcome Back to Interview Buzz</h2>
          <p>
            Login to access your personalized interview preparation resources
            and ace your next job interview!
          </p>
          <form onSubmit={handleSubmit}>
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
              Login
            </button>
          </form>
          <p className="auth-switch">
            Don't have an account? <NavLink to="/signup">Sign Up</NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
