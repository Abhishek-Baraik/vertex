import React from 'react';
import './CurtainButtonGray.css';

const CurtainButtonGray = ({ text }) => {
  return (
    <button className="curtain-button-gray text-[12px] sm:text-[16px] py-[5px] px-[10px] sm:px-[20px] sm:py-[10px] ">
      <span className="curtain-text">{text}</span>
      <span className="curtain"></span>
    </button>
  );
};

export default CurtainButtonGray;
