import React from "react";
import RightArrow from "../../Assets/Images/Home/right-arrow.svg";

export default ({ className, to, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className={`btn slick-next shadow-sm th-arrow-slider-right ${className}`}
    aria-label={to}
  >
    <img src={RightArrow} alt="" />
  </button>
);
