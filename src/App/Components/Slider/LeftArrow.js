import React from "react";
import LeftArrow from "../../Assets/Images/Home/left-arrow.svg";

export default ({ className, to, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className={`btn slick-next shadow-sm th-arrow-slider-left ${className}`}
    aria-label={to}
  >
    <img src={LeftArrow} alt="" />
  </button>
);
