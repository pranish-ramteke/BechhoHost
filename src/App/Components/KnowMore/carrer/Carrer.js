import React, { Component } from "react";
import { Link } from "react-router-dom";
import CAPoster from "../../../Assets/Images/Bechho-CA-Poster.png";

class Carrers extends Component {
  state = { width: window.innerWidth };

  render() {
    let img_width = "";
    if (this.state.width > 780) {
      img_width = "w-75";
    } else if (this.state.width < 780) {
      img_width = "w-100";
    }

    return (
      <div className="mt-lg-5 mb-lg-5 th-carriers-container">
        <h2 className="text-center th-career-header">Careers </h2>
        <div>
          <h3
            style={{
              color: "#332a7c",
              fontSize: this.state.width < 768 ? "22px" : "28px",
            }}
            className="text-center"
          >
            Campus Ambassador Program
          </h3>
          <div className="d-flex justify-content-center mb-3 mt-3">
            <img src={CAPoster} alt="" className={img_width} />
          </div>
          <p className="mb-0 mt-2 th-carrers-content">
            Calling all campus trendsetters and hustlers for an exciting
            opportunity to intern at Bechho, a IIT Roorkee founded startup. We
            are looking for socially active, confident and active students who
            can spare 3-5 hours per week working via digital and offline
            channels to generate awareness and closure. Register now and
            experience unparalleled exposure to a fast paced startup environment
            and represent us on your campus!
          </p>
          <p className="mb-0 mt-2 th-carrers-content">
            Location: <b>Delhi, Noida, Gurugram, Bengaluru,Pune</b>
          </p>
          <p className="mb-0 mt-2 th-carrers-content">
            Registration Link: {this.state.width < 768 ? <br /> : null}
            <Link to="https://forms.gle/PTZti92uwNGjao6J8" className="ml-1">
              https://forms.gle/PTZti92uwNGjao6J8
            </Link>
          </p>
          <p className="mb-0 mt-2 th-carrers-content">What's in it for you?</p>
          <p className="mb-0 mt-2 th-carrers-content">
            Every Campus Ambassador will be getting the following:
          </p>
          <ul className="th-careers-list">
            <li>Campus Ambassador Internship Certificate</li>
            <li>Letter of Recommendation(LoR)</li>
            <li>Performance based Stipend</li>
          </ul>
          <p className="mb-0 mt-2 th-carrers-content">
            However top 3 campus ambassadors will be given:
          </p>
          <ul className="th-careers-list">
            <li>Goodies and Merchandise</li>
            <li>Letter of Excellence</li>
            <li>Honourable mention across all channels</li>
            <li>Chance to win IPhone X</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Carrers;
