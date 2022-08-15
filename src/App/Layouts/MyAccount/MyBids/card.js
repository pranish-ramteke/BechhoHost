import React, { Component } from "react";
import axios from "axios";
import { API } from "../../../../backend";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

class MyBidsCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prod_image: "",
      prod_name: "",
      width: window.innerWidth,
    };
  }

  componentDidMount() {
    this.fetchProdImage({ id: this.props.prodId });
  }

  fetchProdImage = (params = {}) => {
    axios
      .get(`${API}/product`, {
        params: { ...params },
      })
      .then((res) => {
        this.setState({
          prod_image: res.data.photo,
          prod_name: res.data.name,
        });
      })
      .catch((err) => {
        toast(
          err.response.data.error,
          // .concat(" By the name", this.state.prod_name),
          { type: "warning" }
        );
      });
  };

  render() {
    return (
      <div>
        <div className="th-myitems-card border-0 ">
          <div
            className="pt-3 th-mybids-img-div d-flex justify-content-center"
            style={{ height: this.state.width > 780 ? "350px" : "" }}
          >
            <img
              src={this.state.prod_image.path}
              alt=""
              style={{ maxWidth: this.state.width > 780 ? "500px" : "320px" }}
            />
          </div>
          <div className="th-myitems-card-box">
            <div className="mb-md-1 th-mybids-title">{this.props.title}</div>
            <div className="mb-md-1">
              <span className="th-ask-price">Ask Price:</span>
              <span className="th-mybids-price">₹ {this.props.askPrice}</span>
            </div>
            <div className="mb-md-1">
              <span className="th-offered-price">Offer Price:</span>
              <span className="th-mybids-price ">
                ₹ {this.props.offerPrice}
              </span>
            </div>
            <div className="th-mybid-status-chk">
              <div className="mb-md-1">
                <span className="th-bid-status">Status:</span>
                {this.props.status === "Rejected" ||
                this.props.status === "Accepted" ? (
                  <span
                    className="th-mybids-status"
                    style={{
                      color:
                        this.props.status === "Accepted"
                          ? "#00980F"
                          : "#F25767",
                    }}
                  >
                    {this.props.status}
                  </span>
                ) : (
                  <span
                    className="th-mybids-status"
                    style={{ color: "#DD8B00" }}
                  >
                    Pending
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MyBidsCard;
