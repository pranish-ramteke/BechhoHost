import React, { Component } from "react";
import { Link } from "react-router-dom";
import Ecommerce from "../../../Assets/Images/Blogs/grid/ecom-in-india.png";
import ReCommerce from "../../../Assets/Images/Blogs/grid/recom-in-india.png";
import EarnFromHome from "../../../Assets/Images/Blogs/grid/earn-from-home.png";
import LockdownAndIncome from "../../../Assets/Images/Blogs/grid/lockdown-and-income.png";
import RecomSectorAnalysis from "../../../Assets/Images/Blogs/grid/recomerce-sector-analysis.png";
import TechAndTrade from "../../../Assets/Images/Blogs/grid/tech-and-trade.png";
import MarketingAndEcom from "../../../Assets/Images/Blogs/grid/marketing-and-ecommerce.png";
import DisruptingSecondHandRetail from "../../../Assets/Images/Blogs/grid/disrupting-secon.png";

class BlogMob extends Component {
  render() {
    return (
      <div className="">
        <div className="th-blogs-wraper">
          <div className="d-flex justify-content-between">
            <div className="th-blogmob-img-card">
              <Link to="/blogs/ecommerce">
                <div className="th-blogs-effect-img-card">
                  <img src={Ecommerce} className="th-blog-img" alt="" />
                  <p className="th-blogs-title">Ecommerce in India</p>
                </div>
              </Link>
            </div>

            <div className="th-blogmob-img-card">
              <Link to="/blogs/recommerce">
                <div className="th-blogs-effect-img-card">
                  <img src={ReCommerce} className="th-blog-img" alt="" />
                  <p className="th-blogs-title">Recommerce in India</p>
                </div>
              </Link>
            </div>
          </div>

          <div className="d-flex justify-content-between">
            <div className="th-blogmob-img-card">
              <Link to="/blogs/earnfromhome">
                <div className="th-blogs-effect-img-card">
                  <img src={EarnFromHome} className="th-blog-img" alt="" />
                  <p className="th-blogs-title">Earn from Home</p>
                </div>
              </Link>
            </div>
            <div className="th-blogmob-img-card">
              <Link to="/blogs/recom-sector">
                <div className="th-blogs-effect-img-card">
                  <img
                    src={RecomSectorAnalysis}
                    className="th-blog-img"
                    alt=""
                  />
                  <p className="th-blogs-title">Recommerce Sector Analysis </p>
                </div>
              </Link>
            </div>
          </div>

          <div className="d-flex justify-content-between">
            <div className="th-blogmob-img-card">
              <Link to="/blogs/lockdownandincome">
                <div className="th-blogs-effect-img-card">
                  <img src={LockdownAndIncome} className="th-blog-img" alt="" />
                  <p className="th-blogs-title">Lockdown and Income</p>
                </div>
              </Link>
            </div>

            <div className="th-blogmob-img-card">
              <Link to="/blogs/techntrade">
                <div className="th-blogs-effect-img-card">
                  <img src={TechAndTrade} className="th-blog-img" alt="" />
                  <p className="th-blogs-title">Technolgy & Trade</p>
                </div>
              </Link>
            </div>
          </div>

          <div className="d-flex justify-content-between">
            <div className="th-blogmob-img-card">
              <Link to="/blogs/marketing-in-ecom">
                <div className="th-blogs-effect-img-card">
                  <img src={MarketingAndEcom} className="th-blog-img" alt="" />

                  <p className="th-blogs-title">Marketing in Ecom </p>
                </div>
              </Link>
            </div>

            <div className="th-blogmob-img-card">
              <Link to="#">
                <div className="th-blogs-effect-img-card">
                  <img
                    src={DisruptingSecondHandRetail}
                    className="th-blog-img"
                    alt=""
                  />
                  <p className="th-blogs-title">
                    Disrupting Second Hand Retail
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BlogMob;
