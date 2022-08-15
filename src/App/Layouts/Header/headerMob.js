import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import Logo from "../../Assets/Images/Header/Logo.png";
import { Link } from "react-router-dom";
import { Menu, MapPin } from "react-feather";
import SideDrawer from "../Sidedrawer/Sidedrawer";
import BackDrop from "../Sidedrawer/Backdrop";
import Delhi from "../../Assets/Images/Home/Delhi.png";
import Noida from "../../Assets/Images/Home/Noida.png";
import Gurgaon from "../../Assets/Images/Home/Gurgaon.png";
import Bangalore from "../../Assets/Images/Home/Bangalore.png";
import Pune from "../../Assets/Images/Home/Pune.png";
// import Kolkata from "../../Assets/Images/Home/Kolkata.png";
import { connect } from "react-redux";
import {
  setCurrentCityByUser,
  setCurrentCityFromUserAuth,
} from "../../../redux/actions/locationActions";
import PropTypes from "prop-types";
import { API } from "../../../backend";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

class HeaderMobile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sideDrawerOpen: false,
      show_modal: false,
      width: window.innerWidth,
      user_name: "",
    };
  }

  componentDidMount = () => {
    this.fetchUser();
  };

  fetchUser = () => {
    if (this.props.isAuthenticated) {
      axios
        .get(`${API}/user/${this.props.user._id}`, {
          headers: {
            "Content-Type": "application/json",
            // Authorization: `${localStorage.getItem("jwtToken")}`,
          },
        })
        .then((res) => {
          this.setState({
            user_name: res.data.name,
          });
          this.props.setCurrentCityFromUserAuth(res.data.city);
        })
        .catch((err) => {
          toast(err.response.data.err, { type: "warning" });
        });
    }
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickhandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  closeSideDrawer = () => {
    this.setState({ sideDrawerOpen: false });
  };

  handleShowModal = () => {
    this.setState({
      show_modal: !this.state.show_modal,
    });
  };

  handleCloseModal = () => {
    this.setState({
      show_modal: !this.state.show_modal,
    });
  };

  handleLocation = (city) => {
    this.props.setCurrentCityByUser(city);
    this.setState({
      show_modal: !this.state.show_modal,
    });
  };

  render() {
    let backdrop;
    if (this.state.sideDrawerOpen) {
      backdrop = <BackDrop click={this.backdropClickhandler} />;
    }
    return (
      <div>
        <div className="pr-3 pl-3 pt-2 pb-2 shadow-sm th-mob-header">
          <div className="d-flex justify-content-between align-items-center">
            <Menu
              size={28}
              className="mr-4"
              onClick={this.drawerToggleClickHandler}
            />
            <Link to="/">
              <img src={Logo} alt="logo" style={{ width: "100px" }} />
            </Link>
            <div className="d-flex align-items-center">
              <span className="mr-2" style={{ color: "#332c7a" }}>
                {this.props.city}
              </span>
              <MapPin
                size={24}
                className="mr-3"
                onClick={this.handleShowModal}
              />
            </div>
          </div>
          <SideDrawer
            show={this.state.sideDrawerOpen}
            clicked={this.drawerToggleClickHandler}
            user_name={this.state.user_name}
          />
          {backdrop}
        </div>
        {/* Location part on mobile */}
        <Modal
          size="md"
          show={this.state.show_modal}
          centered
          onHide={this.handleCloseModal}
          aria-labelledby="example-modal-sizes-title-sm"
        >
          <Modal.Body>
            <div>
              {this.state.width < 768 ? (
                <div className="">
                  <h4 className="text-center mb-3 th-mob-location-title">
                    Preferred Location
                  </h4>
                  <div>
                    <div className="row">
                      <div
                        className="col-6 text-center"
                        onClick={() => this.handleLocation("Delhi")}
                      >
                        <img
                          src={Delhi}
                          alt=""
                          className="th-location-mob-circle"
                        />
                        <p className="mt-2 th-mob-location-city">Delhi</p>
                      </div>
                      <div
                        className="col-6 text-center"
                        onClick={() => this.handleLocation("Noida")}
                      >
                        <img
                          src={Noida}
                          alt=""
                          className="th-location-mob-circle"
                        />
                        <p className="mt-2 th-mob-location-city">Noida</p>
                      </div>
                    </div>
                    <div className="row">
                      <div
                        className="col-6 text-center"
                        onClick={() => this.handleLocation("Gurugram")}
                      >
                        <img
                          src={Gurgaon}
                          alt=""
                          className="th-location-mob-circle"
                        />
                        <p className="mt-2 th-mob-location-city">Gurugram</p>
                      </div>
                      <div
                        className="col-6 text-center"
                        onClick={() => this.handleLocation("Bangalore")}
                      >
                        <img
                          src={Bangalore}
                          alt=""
                          className="th-location-mob-circle"
                        />
                        <p className="mt-2 th-mob-location-city">Bangalore</p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-4 text-center"
                    onClick={() => this.handleLocation("Pune")}
                  >
                    <img src={Pune} alt="" className="th-location-mob-circle" />
                    <p className="mt-2 th-mob-location-city ">Pune</p>
                  </div>
                  {/* <div className="col-4 text-center">
              <img src={Kolkata} alt="" className="th-location-mob-circle" />
              <p className="mt-2 th-mob-location-city ">Kolkata</p>
            </div> */}
                </div>
              ) : null}
            </div>
          </Modal.Body>
        </Modal>
        {/* Location part on mobile ends*/}
      </div>
    );
  }
}

HeaderMobile.propTypes = {
  setCurrentCityByUser: PropTypes.func.isRequired,
  setCurrentCityFromUserAuth: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  city: PropTypes.object.isRequired,
  isAuthenticated: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  city: state.location.city,
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user,
});

export default connect(mapStateToProps, {
  setCurrentCityByUser,
  setCurrentCityFromUserAuth,
})(HeaderMobile);
