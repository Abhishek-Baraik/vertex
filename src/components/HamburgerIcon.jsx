import React, { useState } from "react";
import "./HamburgerIcon.css";

const HamburgerIcon = ({ onClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
    onClick();
  };

  return (
    <div className={`hamburger-icon ${isOpen ? "open" : ""}`} onClick={handleClick}>
      <div className="line line1"></div>
      <div className="line line2"></div>
      <div className="line line3"></div>
    </div>
  );
};

export default HamburgerIcon;
