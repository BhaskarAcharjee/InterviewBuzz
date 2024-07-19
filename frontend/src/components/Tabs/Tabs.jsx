import React, { useState } from "react";
import "./Tabs.css";

const Tabs = ({ children }) => {
  const [activeTab, setActiveTab] = useState(children[0].props.label);

  const handleTabClick = (label) => {
    setActiveTab(label);
  };

  return (
    <div className="tabs-container">
      <div className="tabs-header">
        {children.map((child) => (
          <button
            key={child.props.label}
            className={`tab-button ${
              activeTab === child.props.label ? "active" : ""
            }`}
            onClick={() => handleTabClick(child.props.label)}
          >
            {child.props.label}
          </button>
        ))}
      </div>
      <div className="tabs-content">
        {children.map((child) => {
          if (child.props.label === activeTab) {
            return <div key={child.props.label}>{child.props.children}</div>;
          }
        })}
      </div>
    </div>
  );
};

export default Tabs;
