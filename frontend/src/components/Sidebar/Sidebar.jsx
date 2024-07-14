import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { getCurrentUser } from "../../services/auth";
import { IoMdLogIn } from "react-icons/io";
import "./Sidebar.css";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userData = getCurrentUser();
    setUser(userData);
  }, []);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="mobile-header">
        <NavLink to="/" style={{ textDecoration: "none" }}>
          <h2>Interview Buzz</h2>
        </NavLink>
        <div className="header-icons">
          <button className="menu-icon" onClick={toggleSidebar}>
            &#9776;
          </button>
          {user ? (
            <NavLink to="/profile">
              <img
                width="25"
                src="https://img.icons8.com/ios-filled/50/user-male-circle.png"
                alt="Profile"
              />
            </NavLink>
          ) : (
            <NavLink to="/login">
              <IoMdLogIn className="login-button" />
            </NavLink>
          )}
        </div>
      </div>
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <div className="sidebar-content">
          <NavLink to="/" style={{ textDecoration: "none" }}>
            <h2>Interview Buzz</h2>
          </NavLink>
          <nav>
            <ul>
              <li>
                <NavLink to="/home" onClick={toggleSidebar}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/behavioral" onClick={toggleSidebar}>
                  Behavioral Questions
                </NavLink>
              </li>
              <li>
                <NavLink to="/projects" onClick={toggleSidebar}>
                  Project Questions
                </NavLink>
              </li>
              <li>
                <NavLink to="/technical" onClick={toggleSidebar}>
                  Technical Questions
                </NavLink>
              </li>
              <li>
                <NavLink to="/flashcards" onClick={toggleSidebar}>
                  Flashcards
                </NavLink>
              </li>
              <li>
                <NavLink to="/dream-company" onClick={toggleSidebar}>
                  Dream Company
                </NavLink>
              </li>
              <li>
                <NavLink to="/interview-experiences" onClick={toggleSidebar}>
                  Interview Experiences
                </NavLink>
              </li>
              <li>
                <NavLink to="/resume-builder" onClick={toggleSidebar}>
                  Resume Builder
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
        {user ? (
          <div className="sidebar-profile">
            <NavLink to="/profile" onClick={toggleSidebar}>
              <img
                width="25"
                src="https://img.icons8.com/ios-filled/50/user-male-circle.png"
                alt="Profile"
              />
              <span>Profile</span>
            </NavLink>
          </div>
        ) : (
          <div className="sidebar-profile">
            <NavLink to="/login" onClick={toggleSidebar}>
              <span>Log In</span>
              <IoMdLogIn className="login-button" />
            </NavLink>
          </div>
        )}
      </div>
    </>
  );
};

export default Sidebar;
