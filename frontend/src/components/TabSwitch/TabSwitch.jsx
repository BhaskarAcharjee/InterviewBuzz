import React from "react";
import "./TabSwitch.css";

const TabSwitch = ({ options, activeOption, onOptionClick }) => {
  return (
    <div className="wrapper">
      <div className={`taeb-switch ${activeOption.direction} text-center`}>
        {options.map((option) => (
          <div
            key={option.label}
            className={`taeb ${activeOption.label === option.label ? "active" : ""}`}
            onClick={() => onOptionClick(option)}
          >
            {option.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TabSwitch;
