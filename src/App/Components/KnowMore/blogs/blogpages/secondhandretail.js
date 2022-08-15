import React, { Component } from "react";
import SecondHandRetailWeb from "../../../../Assets/Images/Blogs/main/recom-in-india.png";
import SecondHandRetailMob from "../../../../Assets/Images/Blogs/grid/recom-in-india.png";

class SecondHandRetail extends Component {
  state = {
    width: window.innerWidth,
  };
  render() {
    let img_url = null;
    if (this.state.width > 780) {
      img_url = SecondHandRetailWeb;
    } else if (this.state.width < 780) {
      img_url = SecondHandRetailMob;
    }

    return (
      <div className="container mt-5 mb-5 th-blog-page-mob-container">
        <div>
          <h2 className="text-center mb-3 th-blog-page-header">
            Disrupting Second Hand Retail
          </h2>
          <img src={img_url} className="th-blog-page-img mb-3" alt="" />
        </div>
        <div>
          <p className="th-blog-page-content"></p>
          <p className="th-blog-page-content"></p>

          <p className="th-blog-page-content"></p>

          <div>
            <label className="th-blog-page-content"></label>
            <ul className="th-blog-page-list">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
          <p className="th-blog-page-content"></p>
          <p className="th-blog-page-content"></p>
          <p className="th-blog-page-content"></p>
          <p className="th-blog-page-content"></p>
          <p className="th-blog-page-content"></p>
        </div>
      </div>
    );
  }
}

export default SecondHandRetail;
