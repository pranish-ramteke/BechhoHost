import React, { Component } from "react";
import PageNotFoundImg from "../../Assets/Images/404.jpg";

class PageNotFound extends Component {
  state = { width: window.innerWidth };
  render() {
    return (
      <div className="">
        <img
          src={PageNotFoundImg}
          alt=""
          className="th-page-not-found"
          style={{
            width: "100%",
            height: this.state.width > 1500 ? "80vh" : "100%",
          }}
        />
      </div>
    );
  }
}

export default PageNotFound;
