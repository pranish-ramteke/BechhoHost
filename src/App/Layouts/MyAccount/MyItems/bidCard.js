import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import axios from "axios";
import { API } from "../../../../backend";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

class BidCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth,
      show_bids_modal: false,
      bid_offered: 0,
      sell_price: 0,
      s_charge: 0,
      bid_status: "Pending",
    };
    this.handleBids = this.handleBids.bind(this);
    this.handleBidAccept = this.handleBidAccept.bind(this);
    this.handleBidReject = this.handleBidReject.bind(this);
    this.sendBid = this.sendBid.bind(this);
  }

  handleBids = (price) => {
    let sellPrice, sCharge;
    if (price < 1000) {
      sCharge = 75;
      sellPrice = price - sCharge;
    } else if (price < 2000 && price >= 1000) {
      sCharge = 100;
      sellPrice = price - sCharge;
    } else if (price < 3000 && price >= 2000) {
      sCharge = 150;
      sellPrice = price - sCharge;
    } else if (price < 4000 && price >= 3000) {
      sCharge = 200;
      sellPrice = price - sCharge;
    } else if (price < 5000 && price >= 4000) {
      sCharge = 250;
      sellPrice = price - sCharge;
    } else if (price >= 5000) {
      sCharge = 300;
      sellPrice = price - sCharge;
    }

    this.setState({
      show_bids_modal: !this.state.show_bids_modal,
      sell_price: sellPrice,
      s_charge: sCharge,
      bid_offered: price,
    });
  };

  handleCloseModal = () => {
    this.setState({
      show_bids_modal: !this.state.show_bids_modal,
    });
  };

  handleBidAccept = (status, price) => {
    // console.log(status);
    let sellPrice, sCharge;
    if (price < 1000) {
      sCharge = 75;
      sellPrice = price - sCharge;
    } else if (price < 2000 && price >= 1000) {
      sCharge = 100;
      sellPrice = price - sCharge;
    } else if (price < 3000 && price >= 2000) {
      sCharge = 150;
      sellPrice = price - sCharge;
    } else if (price < 4000 && price >= 3000) {
      sCharge = 200;
      sellPrice = price - sCharge;
    } else if (price < 5000 && price >= 4000) {
      sCharge = 250;
      sellPrice = price - sCharge;
    } else if (price >= 5000) {
      sCharge = 300;
      sellPrice = price - sCharge;
    }

    // to update status
    axios
      .patch(
        `${API}/product/changestatus/${this.props.prodId}/${this.props.bidderId}`,
        {
          status: status,
        }
      )
      .then((res) => {
        if (res.status === 200) {
          this.sendBid(price, sellPrice, sCharge);
          this.setState({
            bid_status: res.data.status,
          });
          toast("Successfully Accepted the Bid", { type: "success" });
          this.setState({
            show_bids_modal: false,
          });
        }
      })
      .catch((err) => {
        toast(err.response.data.error, { type: "warning" });
        this.setState({
          show_bids_modal: false,
        });
      });
  };

  // to send bid data
  sendBid = (price, sellPrice, sCharge) => {
    axios
      .post(
        `${API}/addtrans/${this.props.user._id}/${this.props.bidderId}/${this.props.prodId}`,
        {
          bidAmount: price,
          payToCustomer: sellPrice,
          commission: sCharge,
          date: this.createDate(new Date()),
        }
      )
      .then((res) => {
        toast("Bid Sent Successfully", { type: "success" });
      })
      .catch((err) => {
        toast(err.response.respponseText, { type: "warning" });
      });
  };

  // creating dynamic dates
  createDate = (date) => {
    var year = date.getFullYear();

    var month = (1 + date.getMonth()).toString();
    month = month.length > 1 ? month : "0" + month;

    var day = date.getDate().toString();
    day = day.length > 1 ? day : "0" + day;

    return day + "/" + month + "/" + year;
  };

  // to handle reject
  handleBidReject = (status) => {
    axios
      .patch(
        `${API}/product/changestatus/${this.props.prodId}/${this.props.bidderId}`,
        {
          status: status,
        }
      )
      .then((res) => {
        // console.log(res.data.status);
        this.setState({
          bid_status: res.data.status,
        });
        toast("Successfully Rejected the Bid", { type: "warning" });
      })
      .catch((err) => {
        toast(err.response.data.error, { type: "warning" });
      });

    this.setState({
      show_bids_modal: false,
    });
  };

  render() {
    let bidStatus;
    if (
      this.state.bid_status === "Accepted" ||
      this.state.bid_status === "Rejected"
    ) {
      bidStatus = 0;
    } else {
      bidStatus = 1;
    }

    return (
      <div>
        {bidStatus ? (
          <div className="d-flex justify-content-between align-items-center mb-3">
            <div className="d-lg-flex align-items-lg-center">
              <p className="th-myitems-offered-price mr-md-2 ml-md-2 mb-0">
                ₹ {this.props.price}
              </p>
              <p className="th-myitems-bidder mr-md-2 ml-md-2 mb-0">
                {this.props.bidder}
              </p>
              <p
                className="th-myitems-bid-details ml-md-2 mb-0"
                onClick={() => this.handleBids(this.props.price)}
                style={{ cursor: "pointer" }}
              >
                View details
              </p>
            </div>
            <div
              className="d-flex"
              style={{
                flexDirection: this.state.width < 780 ? "column" : "null",
              }}
            >
              <button
                className="mr-lg-2 th-myitems-bid-approve"
                onClick={() =>
                  this.handleBidAccept("Accepted", this.props.price)
                }
              >
                Approve
              </button>
              <button
                className="th-myitems-bid-decline"
                onClick={() => this.handleBidReject("Rejected")}
              >
                Decline
              </button>
            </div>
          </div>
        ) : null}

        <Modal
          size="lg"
          show={this.state.show_bids_modal}
          centered
          onHide={this.handleCloseModal}
          aria-labelledby="example-modal-sizes-title-sm"
        >
          <Modal.Body>
            <div className="p-lg-5 p-3">
              <h3 className="th-myitems-bids-offerd mb-3 text-center">
                Your Bid Details
              </h3>
              <div className="d-flex justify-content-between">
                <p className="mt-2 mb-2 th-bids-offered-price-title">
                  Bid offerd on this item
                </p>
                <p className="mt-2 mb-2 th-bids-offered-price">
                  ₹ {this.state.bid_offered}
                </p>
              </div>
              <div className="d-flex justify-content-between">
                <p className="mt-2 mb-2 th-bids-sCharge-title">
                  Service Charge(incl all taxes)
                </p>
                <p className="mt-2 mb-2 th-bids-s-charge">
                  {" "}
                  - ₹ {this.state.s_charge}{" "}
                </p>
              </div>
              <hr color="#ffa000" className="th-bids-modal-hr" />
              <div className="d-flex justify-content-between">
                <p className="mt-2 mb-2 th-bids-sell-price-title">
                  Amount will be paid{" "}
                </p>
                <p className="mt-2 mb-2 th-bids-sell-price">
                  ₹ {this.state.sell_price}{" "}
                </p>
              </div>
              <div
                className="d-flex mt-lg-3 mt-2"
                style={{
                  flexDirection: this.state.width < 780 ? "column" : "null",
                }}
              >
                <button
                  className="mr-lg-2 th-myitems-bid-approve"
                  onClick={() =>
                    this.handleBidAccept("Accepted", this.props.price)
                  }
                >
                  Approve
                </button>
                <button
                  className="mr-lg-2 th-myitems-bid-decline"
                  onClick={() => this.handleBidReject("Rejected")}
                >
                  Decline
                </button>
                <button
                  className="btn btn-secondary"
                  onClick={this.handleCloseModal}
                >
                  Cancel
                </button>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

BidCard.propTypes = {
  user: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

export default connect(mapStateToProps)(BidCard);
