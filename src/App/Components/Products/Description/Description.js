import React, { Component } from "react";

class Description extends Component {
  state = { width: window.innerWidth };
  render() {
    return (
      <div>
        <div className="container mt-5 mb-4">
          <p className="th-prod-description-title">Product Description</p>
          <div className="th-prod-description-box">
            <ul className="th-description-list">
              <li className="th-list-item-ques">
                Q) Does your device switch on?
              </li>
              <li className="th-list-item-ans"> {this.props.answer1} </li>
            </ul>
            <ul className="th-description-list">
              <li className="th-list-item-ques">
                Q) Display and touch screen status?
              </li>
              <li className="th-list-item-ans "> {this.props.answer2} </li>
            </ul>
            <ul className="th-description-list">
              <li className="th-list-item-ques">
                Q) Device Body (Back Panel / Cover) status?
              </li>
              <li className="th-list-item-ans "> {this.props.answer3} </li>
            </ul>
            <ul className="th-description-list">
              <li className="th-list-item-ques">
                Q) Main Camera (Camera Glass) status?
              </li>
              <li className="th-list-item-ans "> {this.props.answer4} </li>
            </ul>
            <ul className="th-description-list">
              <li className="th-list-item-ques">Q) Year of purchase ?</li>
              <li className="th-list-item-ans "> {this.props.answer5} </li>
            </ul>
            <ul className="th-description-list">
              <li className="th-list-item-ques">
                Q) Device has undergone repairs?
              </li>
              <li className="th-list-item-ans "> {this.props.answer6} </li>
            </ul>
            <ul className="th-description-list">
              <li className="th-list-item-ques">
                Q) Does your device have any functional issues?
              </li>
              <li className="th-list-item-ans "> {this.props.answer7} </li>
            </ul>
            <ul className="th-description-list">
              <li className="th-list-item-ques">
                Q) Accessories available with the product?
              </li>
              <li className="th-list-item-ans"> {this.props.answer8} </li>
            </ul>
            <ul className="th-description-list">
              <li className="th-list-item-ques">
                Q) OEN/ Brand Warranty utilized ?
              </li>
              <li className="th-list-item-ans">{this.props.answer9} </li>
            </ul>
            <ul className="th-description-list">
              <li className="th-list-item-ques">
                Q) Silver Frame / Bezel (Around Screen)?
              </li>
              <li className="th-list-item-ans "> {this.props.answer10} </li>
            </ul>
            <ul className="th-description-list">
              <li className="th-list-item-ques">Q) Any Faults?</li>
              <li className="th-list-item-ans "> {this.props.answer11} </li>
            </ul>
          </div>
        </div>
        {this.state.width < 780 ? <hr className="th-hr-line" /> : null}
      </div>
    );
  }
}

export default Description;
