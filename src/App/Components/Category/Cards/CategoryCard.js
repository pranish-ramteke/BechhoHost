import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

class CategoryCard extends Component {
  state = {
    width: window.innerWidth,
  };

  render() {
    return (
      <div className="pl-lg-2 pr-lg-2">
        <Card className="th-category-all-card">
          <Link to={`/products/${this.props.id}`}>
            <div className="d-flex justify-content-center th-category-all-img-div">
              <img
                src={this.props.src}
                alt=""
                className="th-category-prods-card-image"
              />
            </div>
          </Link>
          <div className="pt-2 pb-2 th-category-card-box">
            <div className="d-flex justify-content-between mb-md-1">
              <Card.Text className="mb-md-1 th-brands-title">
                ₹ {this.props.price}
              </Card.Text>
              <Card.Text className="mb-md-1 th-brands-title">
                <span>{this.props.location} </span>
              </Card.Text>
            </div>
            <Card.Text className="mb-md-1 th-brands-title">
              {this.props.title}
            </Card.Text>
            <Card.Text className="mb-md-1 th-brands-description">
              {this.props.description.slice(0, 50)}{" "}
              <span style={{ fontSize: "20px" }}> ...</span>
            </Card.Text>
          </div>
        </Card>
      </div>
    );
  }
}

export default CategoryCard;
