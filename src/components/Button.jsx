import React from "react";
import PropTypes from "prop-types";
import "./Button.css";


const CurtainButton = ({ text, backgroundColor, textColor }) => {
  return (
    <a href="#contact-form" className="curtain-button rounded-md " style={{ backgroundColor, color: textColor }}>
      <span className="text-nowrap">{text}</span>
    </a>
  );
};

CurtainButton.propTypes = {
  text: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
};

CurtainButton.defaultProps = {
  textColor: "white",
};

export default CurtainButton;
