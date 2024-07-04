import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="mobile-header">
        <h2>Interview Buzz</h2>
        <div className="header-icons">
          <button className="menu-icon" onClick={toggleSidebar}>
            &#9776;
          </button>
          <NavLink to="/profile">
            <img
              width="25"
              src="https://img.icons8.com/ios-filled/50/user-male-circle.png"
              alt="Profile"
            />
          </NavLink>
        </div>
      </div>
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <div className="sidebar-content">
          <h2>Interview Buzz</h2>
          <nav>
            <ul>
              <li>
                <NavLink to="/" onClick={toggleSidebar}>
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
      </div>
    </>
  );
};

export default Sidebar;
