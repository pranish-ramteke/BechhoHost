import React, { Component } from "react";
import Card from "react-bootstrap/Card";

class BrandsCard extends Component {
  render() {
    return (
      <div className="">
        <div className="th-brands-card border-0 ">
          <Card.Img
            variant="top"
            src={this.props.src}
            className="th-brands-card-image"
          />
          <div className="pt-2 pb-2 th-card-box">
            <Card.Text className="mb-md-1 th-brands-title ">
              {this.props.title}
            </Card.Text>
            <Card.Text className="mb-md-1 th-brands-description">
              {this.props.description}
            </Card.Text>
          </div>
        </div>
      </div>
    );
  }
}

export default BrandsCard;
