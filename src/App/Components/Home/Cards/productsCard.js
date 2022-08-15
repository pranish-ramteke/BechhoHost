import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class ProductsCard extends Component {
  state = {
    width: window.innerWidth,
  };

  render() {
    log(this.props.prod_id);
    return (
      <div>
        <Card className="th-brands-card border-0" key={this.props.key}>
          <Link to={`/products`}>
            <Card.Img
              variant="top"
              src={this.props.src}
              className="th-prods-card-image"
              onClick={this.handleProductId(this.props.productid)}
            />
          </Link>
          <div className="pt-2 th-card-box">
            <Card.Text className="mb-md-1 th-prods-title">
              {this.props.title}
            </Card.Text>
            <Card.Text className="mb-md-1 th-prods-description">
              {this.props.description}
            </Card.Text>

            {/* location and price only visible for screen > 780px */}
            {/* {this.state.width > 780 ? ( */}
            <div className="d-flex justify-content-between">
              <span className="th-prods-location">{this.props.location} </span>
              <span className="th-prods-price">₹ {this.props.price} </span>
            </div>
            {/* ) : null} */}
          </div>
        </Card>
      </div>
    );
  }
}

ProductsCard.propTypes = {
  setCurrentClickedProduct: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  prod_id: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  prod_id: state.product.prod_id,
  user: state.auth.user,
});

// export default connect(mapStateToProps, {
//   setCurrentClickedProduct,
// })(ProductsCard);

export default ProductsCard;
