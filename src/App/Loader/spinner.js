import React, { Component } from "react";
import "./loader.css";

class Spinner extends Component {
  render() {
    return (
      <div className="th-spinner-fade">
        <div
          class="spinner-grow text-primary th-default-spinner"
          role="status"
        ></div>
        <div
          class="spinner-grow text-primary th-default-spinner"
          role="status"
        ></div>
        <div
          class="spinner-grow text-primary th-default-spinner"
          role="status"
        ></div>
      </div>
    );
  }
}

export default Spinner;
