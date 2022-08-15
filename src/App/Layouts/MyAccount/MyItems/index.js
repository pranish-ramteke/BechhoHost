import React, { Component } from "react";
import { Helmet } from "react-helmet";
import MyItemsCard from "./card";
import Loader from "../../../Loader/spinner";
import NoItemsWeb from "../../../Assets/Images/Profile/NoItemsWeb.png";
import NoItemsMob from "../../../Assets/Images/Profile/NoItemsMob.png";
import axios from "axios";
import { API } from "../../../../backend";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

class MyItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myItems: [],
      loading: false,
      width: window.innerWidth,
    };
  }

  componentDidMount() {
    this.setState({
      loading: true,
    });
    this.fetchMyItms();
  }

  fetchMyItms = () => {
    axios
      .get(`${API}/product/getuserproducts/${this.props.user._id}`)
      .then((res) => {
        this.setState({
          myItems: res.data.products,
          loading: false,
        });
      })
      .catch((err) => {
        this.setState({ loading: false });
        toast(err.response.data.error, { type: "warning" });
      });
  };

  render() {
    return (
      <div>
        <Helmet titleTemplate="Bechho | %s" title="My Items" />
        {this.state.loading ? (
          <Loader />
        ) : (
          <div className="container mt-5 th-my-items-mob mb-4">
            <p className="th-myitems-header">My Items</p>
            <div className="d-lg-flex flex-wrap justify-content-lg-between th-mybids-col">
              {this.state.myItems.length > 0 ? (
                this.state.myItems.map((item, index) => {
                  return (
                    <MyItemsCard
                      src={item.photo.path}
                      name={
                        item.name.charAt(0).toUpperCase() + item.name.slice(1)
                      }
                      askPrice={item.price}
                      BidList={item.bid}
                      prodId={item._id}
                    />
                  );
                })
              ) : (
                <div className="mt-3 mb-5">
                  {this.state.width > 780 ? (
                    <img src={NoItemsWeb} alt="" style={{ width: "100%" }} />
                  ) : (
                    <img src={NoItemsMob} alt="" style={{ width: "100%" }} />
                  )}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    );
  }
}

MyItems.propTypes = {
  user: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

export default connect(mapStateToProps)(MyItems);
