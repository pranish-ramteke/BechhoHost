import React, { Component } from "react";
import Slider from "react-slick";
import BrandsCard from "../Cards/brandsCard";
import LeftArrow from "../../Slider/LeftArrow";
import RightArrow from "../../Slider/RightArrow";
import Data from "../Data/brands";
const settings = {
  slidesToShow: 3.5,
  slidesToScroll: 2,
  autoplay: false,
  autoplaySpeed: 4000,
  dots: false,
  arrows: true,
  infinite: false,
  nextArrow: <RightArrow to="next" />,
  prevArrow: <LeftArrow to="prev" />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3.2,
        slidesToScroll: 2,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
      },
    },
  ],
};

class Brands extends Component {
  render() {
    return (
      <div className="mb-5">
        <div className="d-flex justify-content-between mb-2 mt-3">
          <span className="pl-md-1 th-brand-header">Brands</span>
          <span className="th-brand-all-btn">See All</span>
        </div>
        <Slider {...settings} className="px-0 th-slider-margin">
          {Data.map((item, index) => {
            return (
              <BrandsCard
                src={item.src}
                title={item.title}
                description={item.description}
              />
            );
          })}
        </Slider>
      </div>
    );
  }
}

export default Brands;
