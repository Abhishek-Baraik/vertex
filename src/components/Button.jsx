import React from "react";
import PropTypes from "prop-types";
import "./Button.css";


const Button = ({ text, backgroundColor, textColor }) => {
  return (
    <a href="#contact-form" className="curtain-button rounded-md " style={{ backgroundColor, color: textColor }}>
      <span className="text-nowrap">{text}</span>
    </a>
  );
};


export default Button;
