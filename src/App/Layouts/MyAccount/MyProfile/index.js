import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import User from "../../../Assets/Images/User.png";
import axios from "axios";
import { Helmet } from "react-helmet";
import { API } from "../../../../backend";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

class MyProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth,
      fname: "",
      lname: "",
      city: "",
      contact: "",
      email: "",
    };
  }

  componentDidMount() {
    this.fetchUser();
  }

  fetchUser = () => {
    // fetching this data only if user is logged in
    // setting city name based on user input in the store
    if (this.props.user._id) {
      axios
        .get(`${API}/user/${this.props.user._id}`)
        .then((res) => {
          this.setState({
            fname: res.data.name,
            lname: res.data.lastname,
            email: res.data.email,
            city: res.data.city,
            contact: res.data.contact,
          });
        })
        .catch((err) => {
          // console.log(err);
          toast("User does not exists", { type: "warning" });
        });
    }
  };

  render() {
    return (
      <div>
        <Helmet titleTemplate="Bechho | %s" title="Profile" />
        <div className="mt-5 mb-5 container th-my-profile-mob">
          <div className="d-flex justify-content-center">
            <div className="th-myitems-card border-0 ">
              <div className="text-center mt-3">
                <Card.Img
                  variant="top"
                  src={User}
                  className="th-myprofile-card-image"
                />
              </div>

              <div className="d-flex justify-content-center">
                <div className="pt-3 pb-4 pl-lg-5 pr-lg-5 pr-4">
                  <div
                    className="d-flex align-items-center ml-3"
                    style={{
                      flexWrap: this.state.width < 780 ? "wrap" : "null",
                    }}
                  >
                    <div className="mb-md-1 th-myitems-title mr-3">Name</div>
                    <div className="mb-md-1 th-myitems-title">
                      {this.state.fname}
                      {this.state.lname}
                    </div>
                  </div>
                  <div
                    className="d-flex align-items-center ml-3"
                    style={{
                      flexWrap: this.state.width < 780 ? "wrap" : "null",
                    }}
                  >
                    <div
                      className="mb-md-1 th-myitems-title "
                      style={{ marginRight: "1.25rem" }}
                    >
                      Email
                    </div>
                    <div className="mb-md-1 th-myitems-title">
                      {this.state.email}{" "}
                    </div>
                  </div>
                  <div
                    className="d-flex align-items-center ml-3"
                    style={{
                      flexWrap: this.state.width < 780 ? "wrap" : "null",
                    }}
                  >
                    <div
                      className="mb-md-1 th-myitems-title"
                      style={{ marginRight: "2.25rem" }}
                    >
                      City
                    </div>
                    <div className="mb-md-1 th-myitems-title">
                      {this.state.city}
                    </div>
                  </div>
                  <div
                    className="d-flex align-items-center ml-3"
                    style={{
                      flexWrap: this.state.width < 780 ? "wrap" : "null",
                    }}
                  >
                    <div className="mb-md-1 th-myitems-title mr-3">Contact</div>
                    <div className="mb-md-1 th-myitems-title">
                      {this.state.contact}{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

MyProfile.propTypes = {
  user: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

export default connect(mapStateToProps)(MyProfile);
