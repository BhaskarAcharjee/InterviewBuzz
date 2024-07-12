import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import "./TagSearchBar.css";

const TagSearchBar = ({ tags, onTagSelect, hasMoreTags }) => {
  return (
    <div className="container">
      <div className="tags">
        <p className="tags-text">
          <span>Tags</span>
          {tags.map((tag, index) => (
            <a
              href="#"
              key={index}
              className="tag"
              onClick={() => onTagSelect(tag)}
            >
              {tag}
            </a>
          ))}
          {hasMoreTags && (
            <a href="#" className="tag" onClick={() => onTagSelect("All")}>
              ..more
            </a>
          )}
        </p>
      </div>
      <div className="box">
        <form name="search">
          <input
            type="text"
            className="input"
            name="txt"
            placeholder="Search..."
            autoComplete="off"
          />
          <AiOutlineSearch className="search-icon" />
        </form>
      </div>
    </div>
  );
};

export default TagSearchBar;
