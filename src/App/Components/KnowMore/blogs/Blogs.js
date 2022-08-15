import React, { Component } from "react";
import BlogWeb from "./blogweb";
import BlogMobile from "./blogmob";

class Blogs extends Component {
  constructor() {
    super();
    this.state = {
      width: window.innerWidth,
    };
  }
  render() {
    return (
      <div className="mt-lg-5 mb-lg-5 th-blogs-container">
        <h2 className="text-center th-blogs-header">Blogs</h2>
        {this.state.width > 780 ? <BlogWeb /> : <BlogMobile />}
      </div>
    );
  }
}

export default Blogs;
