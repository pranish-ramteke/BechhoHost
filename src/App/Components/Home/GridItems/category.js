import React, { Component } from "react";
import { Link } from "react-router-dom";
import Mobile from "../../../Assets/Images/Home/category/Mobile.png";
import Tablets from "../../../Assets/Images/Home/category/Tablet.png";
import Laptop from "../../../Assets/Images/Home/category/Laptop.png";
import Furniture from "../../../Assets/Images/Home/category/Furniture.png";
import HomeAppliance from "../../../Assets/Images/Home/category/HomeAppliance.png";
import Accesories from "../../../Assets/Images/Home/category/Accesories.png";

class Category extends Component {
  state = {
    width: window.innerWidth,
  };

  render() {
    return (
      <div>
        <div className="th-grid-items-header mb-1 mt-2">Select a Category</div>
        <div>
          <div className="d-flex justify-content-md-end">
            <Link
              to="/category"
              className="border-0 mr-3 mb-3 th-home-category-link"
            >
              <div className="th-category-small-img">
                <img
                  src={Mobile}
                  alt=""
                  style={{
                    width: this.state.width > 760 ? "84px" : "56px",
                  }}
                  className="th-category-img-mob"
                />
              </div>
              <p className="mb-0 mt-2 th-category-name">Mobiles</p>
            </Link>
            <Link
              to="/category"
              className="border-0 mr-3 mb-3 th-home-category-link"
            >
              <div className="th-category-small-img">
                <img
                  src={Tablets}
                  alt=""
                  style={{
                    width: "100%",
                  }}
                />
              </div>
              <p className="mb-0 mt-2 th-category-name">Tablets</p>
            </Link>
            <Link
              to="/comingsoon"
              className="border-0 mr-3 mb-3 th-home-category-link"
            >
              <div className="th-category-small-img">
                <img
                  src={Laptop}
                  alt=""
                  style={{
                    width: "100%",
                  }}
                />
              </div>
              <p className="mb-0 mt-2 th-category-name">Laptops</p>
            </Link>
          </div>
          <div className="d-flex justify-content-md-end">
            <Link
              to="/comingsoon"
              className="border-0 mr-3 mb-3 th-home-category-link "
            >
              <div className="th-category-small-img">
                <img
                  src={Furniture}
                  alt=""
                  style={{
                    width: "100%",
                  }}
                />
              </div>
              <p className="mb-0 mt-2 th-category-name">Furniture</p>
            </Link>
            <Link
              to="/comingsoon"
              className="border-0 mr-3 mb-3 th-home-category-link"
            >
              <div className="th-category-small-img">
                <img
                  src={HomeAppliance}
                  alt=""
                  style={{
                    width: "100%",
                  }}
                />
              </div>
              <p className="mb-0 mt-2 th-category-name">Home Appliances</p>
            </Link>
            <Link
              to="/comingsoon"
              className="border-0 mr-3 mb-3 th-home-category-link"
            >
              <div className="th-category-small-img">
                <img
                  src={Accesories}
                  alt=""
                  style={{
                    width: this.state.width > 780 ? "100%" : "90px",
                  }}
                  className="th-category-img-accesory"
                />
              </div>
              <p className="mb-0 mt-2 th-category-name">Accesories</p>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Category;
