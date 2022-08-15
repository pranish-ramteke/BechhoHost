import React, { Component } from "react";
import Slider from "react-slick";
import TopImgMob from "../../../Assets/Images/Home/TopImageMob.png";
import StepOne from "../../../Assets/Images/Home/StepOne.png";
import StepTwo from "../../../Assets/Images/Home/StepTwo.png";
import StepThree from "../../../Assets/Images/Home/StepThree.png";

const data = [
  {
    src: StepOne,
  },
  {
    src: StepTwo,
  },
  {
    src: StepThree,
  },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: false,
  responsive: [
    {
      breakpoint: 780,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        autoplay: false,
        speed: 850,
      },
    },
  ],
};

class HomeTopMob extends Component {
  render() {
    return (
      <div className="th-hometop-mob-div">
        <div className="">
          <div className="mb-4 d-flex justify-content-center">
            <img src={TopImgMob} alt="" style={{ width: "100%" }} />
          </div>
          <Slider {...settings} className="th-testimonial-mainSlider">
            {data.map((item) => {
              return (
                <div className="d-flex justify-content-center">
                  <div>
                    <img src={item.src} alt="" style={{ width: "100%" }} />
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    );
  }
}

export default HomeTopMob;
