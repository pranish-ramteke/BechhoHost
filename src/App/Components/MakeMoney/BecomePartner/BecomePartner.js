import React, { Component } from "react";

class BecomePartner extends Component {
  render() {
    return (
      <div className="mt-lg-5 mb-lg-5 th-partner-container">
        <h2 className="text-center th-partner-header">Become Our Partner </h2>
        <div className="th-mob-partner-div">
          <p className="mt-2 mb-2 th-partner-content">
            As Bechho helps local vendees and dealers build networks and
            encourages social e-commerce and recommerce to expand trade and
            attract buyers, if you sell and purchase in second hand merchandise
            and articles and are a licensed trader, you are more than welcome
            and encouraged to become our partner and attract more business and
            customers through us and expand your business to make it further
            widespread in your region.
          </p>
          <p className="mt-2 mb-2 th-partner-content">
            For further queries and partnership proposals, you can mail us on
            <span style={{ color: "#3327c5" }} className="ml-1">
              <i>emohanty@bechho.in</i>
            </span>
          </p>
        </div>
      </div>
    );
  }
}

export default BecomePartner;
