import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class FooterLinkSidebar extends Component {
  render() {
    return (
      <div className="mt-md-5 mb-md-5">
        <h2>Contents</h2>
        <div className="th-links-list-box">
          <div className="pl-3">
            <NavLink className="th-links-list-item " to="/about-us">
              <p>About Us</p>
            </NavLink>

            <NavLink className="th-links-list-item " to="/blogs">
              <p>Blogs</p>
            </NavLink>

            <NavLink className="th-links-list-item " to="/career">
              <p>Careers</p>
            </NavLink>

            <NavLink className="th-links-list-item" to="/faq">
              <p>Faq</p>
            </NavLink>

            <NavLink className="th-links-list-item" to="/privacy-policy">
              <p>Privacy Policy</p>
            </NavLink>

            <NavLink className="th-links-list-item" to="/return-policy">
              <p>Return Policy</p>
            </NavLink>

            <NavLink className="th-links-list-item" to="/terms">
              <p>Terms and Conditions</p>
            </NavLink>

            <NavLink className="th-links-list-item" to="/buyer-terms">
              <p>Buyer Terms</p>
            </NavLink>

            <NavLink className="th-links-list-item" to="/seller-term">
              <p>Seller Terms</p>
            </NavLink>

            <NavLink className="th-links-list-item" to="/sell">
              <p>Sell with Bechho</p>
            </NavLink>

            <NavLink className="th-links-list-item" to="/affiliate">
              <p>Become an Affiliate</p>
            </NavLink>

            <NavLink className="th-links-list-item" to="/become-partner">
              <p>Become a Partner</p>
            </NavLink>

            <NavLink className="th-links-list-item" to="/advertise">
              <p>Advertise with Bechho</p>
            </NavLink>

            <NavLink className="th-links-list-item" to="/team">
              <p>Team</p>
            </NavLink>
          </div>
        </div>
      </div>
    );
  }
}

export default FooterLinkSidebar;
