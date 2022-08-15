import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Cancel from "../../../Assets/Images/Products/Cancel.png";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import axios from "axios";
import { API } from "../../../../backend";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

class Popup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth,
      price: null,
      checked: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  };

  handleClick = () => {
    this.setState({
      checked: !this.state.checked,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    axios
      .patch(`${API}/product/bid/${this.props.prodId}/${this.props.user._id}`, {
        offeredprice: this.state.price,
        askedprice: this.props.askedPrice,
        status: "Pending",
      })
      .then((res) => {
        if (res.status === 200) {
          toast("Successfully Sent Bid", { type: "success" });
        }
        this.props.closed();
      })
      .catch((err) => {
        console.log(err.response.data);
        toast(err.response.data.error, { type: "warning" });
        this.props.closed();
      });
  };

  render() {
    return (
      <div className="th-prod-popup-box">
        <div className="d-flex justify-content-around align-items-center th-prod-header-box">
          <div className="th-prod-popup-header">Enter offer price</div>
          {this.state.width > 780 ? (
            <div className="d-flex align-items-center">
              <span className="th-prod-popup-close-txt mr-3">Close</span>
              <img
                src={Cancel}
                alt=""
                onClick={this.props.closed}
                style={{ cursor: "pointer" }}
              />
            </div>
          ) : null}
        </div>
        <div className="th-prod-content-box d-lg-flex justify-content-lg-center">
          <Form onSubmit={this.handleSubmit}>
            <Form.Group className="mb-4">
              <input
                type="number"
                placeholder="Your offer price"
                className="th-prod-offer-price form-control"
                onChange={this.handleChange}
                id="price"
                value={this.state.price}
                required
              />
            </Form.Group>
            <div className="">
              <input
                type="range"
                min="1"
                max="10"
                value="10"
                class="th-prod-range-slider"
              />
              <div className="d-flex justify-content-between mt-3 mb-md-5">
                <div>
                  <p className="m-0 th-prod-min-price">₹ 0</p>
                  <p className="ml-3 th-prod-min-price-tag">MIN</p>
                </div>
                <div>
                  <p className="m-0 th-prod-max-price">₹ 35000</p>
                  <p className="ml-3 th-prod-max-price-tag">MAX</p>
                </div>
              </div>
            </div>
            <Form.Group className="d-flex mb-md-5 th-prod-mob-checkbox align-items-center">
              <input
                type="checkbox"
                className="mr-2 form-group"
                onClick={this.handleClick}
                id="checked"
                value={this.state.checked}
                required
              />
              <div className="th-prod-check-terms">
                <p className="m-0"> By clicking the button, you agree to our</p>
                <p className="m-0"> Terms & Conditions and Privacy Policy.</p>
              </div>
            </Form.Group>
            <div className="d-flex justify-content-center">
              <button className="th-prod-offer" type="submit">
                Make an offer
              </button>
            </div>
          </Form>
        </div>
      </div>
    );
  }
}

Popup.propTypes = {
  user: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

export default connect(mapStateToProps)(Popup);
