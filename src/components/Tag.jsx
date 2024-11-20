import React from "react";
import "./Tag.css";

const Tag = ({ tagName, selectTag, selected }) => {
  const tagStyle = {
    Html: { backgroundColor: "#fda821" },
    JavaScript: { backgroundColor: "#15d4c8" },
    Css: { backgroundColor: "#ffd12c" },
    React: { backgroundColor: "#4cdafc" },
    default: { backgroundColor: "#f9f9f9" },
  };
  return (
    <button
      type="button"
      className="tag"
      style={selected ? tagStyle[tagName] : tagStyle.default}
      onClick={() => selectTag(tagName)}
    >
      {tagName}
    </button>
  );
};

export default Tag;
