import React, { Component } from "react";
import BidCard from "./bidCard";

class MyItemsCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth,
    };
  }
  render() {
    let flag;
    if (
      this.props.BidList.length >= 1 &&
      this.props.BidList[0].status === "Pending"
    ) {
      flag = 1;
    } else if (
      this.props.BidList.length === 1 &&
      this.props.BidList[0].status === "Accepted"
    ) {
      flag = 0;
    }

    return (
      <div>
        <div className="th-myitems-card border-0 ">
          <div
            className="d-flex justify-content-center p-3"
            style={{ height: "400px" }}
          >
            <img
              src={this.props.src}
              alt=""
              style={{ maxWidth: "100%", maxHeight: "100%" }}
            />
          </div>

          <div className="th-myitems-card-box">
            <div className="d-flex align-items-center justify-content-between">
              <div className="mb-md-1 th-myitems-title">{this.props.name}</div>
              <div className="mb-md-1">
                <span className="th-myitems-ask-price">Ask Price:</span>
                <span className="th-myitems-price ">
                  ₹ {this.props.askPrice}
                </span>
              </div>
            </div>
            <div className="th-myitems-bids-offerd mb-2">Bids Offered</div>

            <div className="th-myitems-bidlist">
              {flag ? (
                <div>
                  {this.props.BidList &&
                    this.props.BidList.map((item, index) => {
                      // console.log(item.status);
                      return (
                        <BidCard
                          price={item.offeredprice}
                          status={item.status}
                          prodId={this.props.prodId}
                          bidderId={item.userBidding}
                          bidder={item.name}
                        />
                      );
                    })}
                </div>
              ) : (
                // handling if bid array has 1 elem or 0 elem
                <div className="d-flex justify-content-center align-items-center mt-4">
                  {this.props.BidList.length > 0 &&
                  this.props.BidList[0].status === "Accepted" ? (
                    <span className="th-bidlist-accept-msg ">
                      You have accepted a bid for this item.
                    </span>
                  ) : (
                    <span className="th-bidlist-empty-msg">
                      No current bids available
                    </span>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MyItemsCard;
