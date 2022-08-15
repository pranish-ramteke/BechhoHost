import React, { Component } from "react";

class ProgCicrle extends Component {
  render() {
    return (
      <div>
        <div className="d-flex justify-content-center align-items-center mb-lg-4">
          <div
            className="th-sell-form-step-circle"
            style={{
              borderColor: this.props.currentStep === 1 ? "#ffb02c" : "#0CCE42",
            }}
          >
            <span className="th-sell-form-step">Step 1</span>
          </div>
          <div
            className="th-sell-form-step-line"
            style={{ backgroundColor: "#ffb02c" }}
          ></div>
          <div
            className="th-sell-form-step-circle"
            style={{
              borderColor:
                this.props.currentStep === 1 || this.props.currentStep === 2
                  ? "#ffb02c"
                  : "",
            }}
          >
            <span className="th-sell-form-step">Step 2</span>
          </div>
        </div>
      </div>
    );
  }
}

export default ProgCicrle;
