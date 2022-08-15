import React, { Component } from "react";
import { Helmet } from "react-helmet";
import CategoryTop from "../../Components/Category/CategoryTop/CategoryTop";
// import Other from "../../Components/Category/OtherCategory/OtherCategories";/
import { withRouter } from "react-router-dom";
// import axios from "axios";
// import { API } from "../../../backend";

class CategoryHome extends Component {
  render() {
    return (
      <div>
        <Helmet titleTemplate="Bechho | %s" title="Category" />
        <div className="container mt-lg-4 mb-4 mt-5">
          <CategoryTop />
          {/* <Other /> */}
        </div>
      </div>
    );
  }
}

export default withRouter(CategoryHome);
