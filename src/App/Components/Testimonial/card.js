import React, { Component } from "react";
import { Helmet } from "react-helmet";
class Card extends Component {
  render() {
    return (
      <div>
        <Helmet titleTemplate="Bechho | %s" title="Testimonial" />
        <div className="d-flex justify-content-center">
          <div
            style={{
              backgroundImage: `url(${this.props.image})`,
            }}
            className="th-testimonial-img"
          ></div>
        </div>

        <div className="text-center">
          <p className="th-testimonial-followContent mt-2 mb-0">
            {this.props.content}
          </p>
          <span class="th-testimonial-dots"></span>
          <span class="th-testimonial-dots"></span>
          <span class="th-testimonial-dots"></span>
          <h3 className="th-testimonial-followHeader">{this.props.author}</h3>
        </div>
      </div>
    );
  }
}

export default Card;
