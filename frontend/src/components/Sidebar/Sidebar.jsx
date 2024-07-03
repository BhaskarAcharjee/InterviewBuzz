import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'; 

const Sidebar = () => (
    <div className="sidebar">
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/coding">Coding Questions</Link></li>
                {/* Add more links as needed */}
            </ul>
        </nav>
    </div>
);

export default Sidebar;
