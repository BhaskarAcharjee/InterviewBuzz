import React from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css"; // Create and style Sidebar.css as needed

const Sidebar = () => (
  <div className="sidebar">
    <h2>Interview Genius</h2>
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/behavioral">Behavioral Questions</NavLink>
        </li>
        <li>
          <NavLink to="/projects">Project Questions</NavLink>
        </li>
        <li>
          <NavLink to="/technical">Technical Questions</NavLink>
        </li>
        <li>
          <NavLink to="/flashcards">Flashcards</NavLink>
        </li>
        <li>
          <NavLink to="/dream-company">Dream Company</NavLink>
        </li>
      </ul>
    </nav>
  </div>
);

export default Sidebar;
