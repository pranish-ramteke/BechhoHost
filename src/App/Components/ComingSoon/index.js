import React, { Component } from "react";
import ComingSoonImg from "../../Assets/Images/Coming-Soon.png";
// import Modal from "react-bootstrap/Modal";
class CommingSoon extends Component {
  state = { width: window.innerWidth };
  render() {
    return (
      <div className="container">
        <div
          style={{
            marginTop: "10.25rem",
            marginBottom: "10.25rem",
          }}
        >
          <img src={ComingSoonImg} alt="" style={{ width: "100%" }} />
        </div>
      </div>
    );
  }
}

export default CommingSoon;
