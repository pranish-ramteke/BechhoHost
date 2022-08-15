import React, { Component } from "react";
// import { withRouter } from "react-router-dom";
import { Modal } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { MapPin } from "react-feather";
import PopUp from "../Popup/popup";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class ProductTop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth,
      show: false,
    };
  }

  handleShowModal = () => {
    this.setState({
      show: !this.state.show,
    });
  };

  handleCloseModal = () => {
    this.setState({
      show: !this.state.show,
    });
  };

  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col lg={6}>
              <div>
                <div className="d-flex justify-content-center">
                  <img
                    src={this.props.src}
                    alt=""
                    style={{
                      width: "100%",
                    }}
                  />
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="th-prod-box">
                <p className="th-prod-title">{this.props.name}</p>
                <div className="mb-2 d-flex align-items-center th-prod-price-location-box">
                  <div className="d-flex align-items-center">
                    <div className="mr-3 th-prod-price">
                      ₹ {this.props.price}
                    </div>
                    <div className="d-flex align-items-center">
                      <MapPin className="mr-2" size={20} color="#332a7c" />
                      <div className="th-prod-location">{this.props.city} </div>
                    </div>
                  </div>
                  {/* for mobile screen */}
                  {this.state.width < 780 ? (
                    <button
                      className="th-prod-offer text-center"
                      onClick={this.handleShowModal}
                      disabled={!this.props.user._id ? "true" : null}
                    >
                      Make an offer
                    </button>
                  ) : null}
                  {/*  */}
                </div>
                <div className="th-prod-description">
                  <span className="mr-2">{this.props.description}</span>
                </div>
                {/* for laptop/tabs */}
                {this.state.width > 780 ? (
                  <div className="d-flex justify-content-center mt-5">
                    <button
                      className="th-prod-offer text-center"
                      onClick={this.handleShowModal}
                      disabled={!this.props.user._id ? "true" : null}
                    >
                      Make an offer
                    </button>
                  </div>
                ) : null}
                {/*  */}
              </div>
            </Col>
          </Row>
        </Container>
        {this.state.width < 780 ? <hr className="th-prod-hr-line" /> : null}
        {/* Modal */}
        <Modal show={this.state.show} size="lg" onHide={this.handleCloseModal}>
          <Modal.Body className="shadow bg-white p-0 rounded">
            <PopUp
              show={this.state.show}
              closed={this.handleCloseModal}
              prodId={this.props.prodId}
              askedPrice={this.props.price}
            />
          </Modal.Body>
        </Modal>
        {/*  */}
      </div>
    );
  }
}

ProductTop.propTypes = {
  user: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

export default connect(mapStateToProps)(ProductTop);
