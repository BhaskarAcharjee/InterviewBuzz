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
        <h2>Interview Genius</h2>
        <button className="menu-icon" onClick={toggleSidebar}>
          &#9776;
        </button>
      </div>
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <h2>Interview Genius</h2>
        <nav>
          <ul>
            <li>
              <NavLink to="/" onClick={toggleSidebar}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/behavioral" onClick={toggleSidebar}>Behavioral Questions</NavLink>
            </li>
            <li>
              <NavLink to="/projects" onClick={toggleSidebar}>Project Questions</NavLink>
            </li>
            <li>
              <NavLink to="/technical" onClick={toggleSidebar}>Technical Questions</NavLink>
            </li>
            <li>
              <NavLink to="/flashcards" onClick={toggleSidebar}>Flashcards</NavLink>
            </li>
            <li>
              <NavLink to="/dream-company" onClick={toggleSidebar}>Dream Company</NavLink>
            </li>
            <li>
              <NavLink to="/interview-experiences" onClick={toggleSidebar}>Interview Experiences</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
