import React, { Component } from "react";
import TopImage from "../../../Assets/Images/Home/HomeTopImage.png";
import HomeTopMobile from "./HomeTopMob";

class HomeTop extends Component {
  state = {
    width: window.innerWidth,
  };
  render() {
    return (
      <div className="th-home-top-container mt-5 mb-4">
        {this.state.width > 780 ? (
          <div>
            <img src={TopImage} alt="" className="th-home-top-image" />
          </div>
        ) : (
          <HomeTopMobile />
        )}
      </div>
    );
  }
}

export default HomeTop;
