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

class BlogWeb extends Component {
  render() {
    return (
      <div className="">
        <div className="th-blogs-wraper">
          <div className="d-flex justify-content-between">
            <div className="th-blogweb-img-card-top">
              <Link to="/blogs/ecommerce">
                <figure className="th-blogs-effect-img-card">
                  <img src={Ecommerce} className="th-blog-img" alt="" />
                  <figcaption className="th-blogs-img-caption">
                    <label className="th-blogs-title">Ecommerce in India</label>
                  </figcaption>
                </figure>
              </Link>
            </div>

            <div className="th-blogweb-img-card-top">
              <Link to="/blogs/recommerce">
                <figure className="th-blogs-effect-img-card">
                  <img src={ReCommerce} className="th-blog-img" alt="" />
                  <figcaption className="th-blogs-img-caption">
                    <label className="th-blogs-title">
                      Recommerce in India
                    </label>
                  </figcaption>
                </figure>
              </Link>
            </div>

            <div className="th-blogweb-img-card-top">
              <Link to="/blogs/earnfromhome">
                <figure className="th-blogs-effect-img-card">
                  <img src={EarnFromHome} className="th-blog-img" alt="" />
                  <figcaption
                    className="th-blogs-img-caption"
                    style={{ borderBottomLeftRadius: "12px" }}
                  >
                    <label className="th-blogs-title">Earn from Home</label>
                  </figcaption>
                </figure>
              </Link>
            </div>
          </div>

          <div className="d-flex justify-content-between">
            <div className="th-blogweb-img-card-mid">
              <Link to="/blogs/recom-sector">
                <figure className="th-blogs-effect-img-card">
                  <img
                    src={RecomSectorAnalysis}
                    className="th-blog-img"
                    alt=""
                  />
                  <figcaption className="th-blogs-img-caption">
                    <label className="th-blogs-title">
                      Recommerce Sector Analysis
                    </label>
                  </figcaption>
                </figure>
              </Link>
            </div>

            <div className="th-blogweb-img-card-mid">
              <Link to="/blogs/techntrade">
                <figure className="th-blogs-effect-img-card">
                  <img src={TechAndTrade} className="th-blog-img" alt="" />
                  <figcaption className="th-blogs-img-caption">
                    <label className="th-blogs-title">
                      Technology and Trade
                    </label>
                  </figcaption>
                </figure>
              </Link>
            </div>
          </div>

          <div className="d-flex justify-content-between">
            <div className="th-blogweb-img-card-bottom">
              <Link to="/blogs/lockdownandincome">
                <figure className="th-blogs-effect-img-card">
                  <img src={LockdownAndIncome} className="th-blog-img" alt="" />
                  <figcaption className="th-blogs-img-caption">
                    <label className="th-blogs-title">
                      Lockdown and Income
                    </label>
                  </figcaption>
                </figure>
              </Link>
            </div>

            <div className="th-blogweb-img-card-bottom">
              <Link to="/blogs/marketing-in-ecom">
                <figure className="th-blogs-effect-img-card">
                  <img src={MarketingAndEcom} className="th-blog-img" alt="" />
                  <figcaption className="th-blogs-img-caption">
                    <label className="th-blogs-title">
                      Marketing in Ecommerce
                    </label>
                  </figcaption>
                </figure>
              </Link>
            </div>

            <div className="th-blogweb-img-card-bottom">
              <Link to="#">
                <figure className="th-blogs-effect-img-card">
                  <img
                    src={DisruptingSecondHandRetail}
                    className="th-blog-img"
                    alt=""
                  />
                  <figcaption
                    className="th-blogs-img-caption"
                    style={{ borderBottomRightRadius: "12px " }}
                  >
                    <label className="th-blogs-title">
                      Disrupting Second Hand Retail
                    </label>
                  </figcaption>
                </figure>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BlogWeb;
