import React, { Component } from "react";
import HeaderWeb from "./headerWeb";
import HeaderMobile from "./headerMob";

class HeaderMain extends Component {
  state = {
    width: window.innerWidth,
  };

  render() {
    return (
      <div>{this.state.width > 768 ? <HeaderWeb /> : <HeaderMobile />}</div>
    );
  }
}

export default HeaderMain;
