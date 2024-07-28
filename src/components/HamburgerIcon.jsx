import React from "react";
import "./HamburgerIcon.css";

const HamburgerIcon = ({ onClick, isOpen }) => {
  return (
    <div className={`hamburger-icon ${isOpen ? "open" : ""}`} onClick={onClick}>
      <div className="line line1"></div>
      <div className="line line2"></div>
      <div className="line line3"></div>
    </div>
  );
};

export default HamburgerIcon;
