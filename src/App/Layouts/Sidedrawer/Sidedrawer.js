import React, { Component } from "react";
import Logo from "../../Assets/Images/Header/bechho-logo.png";
import {
  X,
  Twitter,
  Linkedin,
  Facebook,
  LogIn,
  LogOut,
  Edit,
} from "react-feather";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../../redux/actions/authActions";
import { resetCityOnLogout } from "../../../redux/actions/locationActions";

class SideDrawer extends Component {
  state = {
    width: window.innerWidth,
  };

  handleLogout = (e) => {
    e.preventDefault();
    // reseting city name
    this.props.resetCityOnLogout();
    this.props.logoutUser();
    this.props.clicked();
  };

  render() {
    // console.log(this.props.auth.isAuthenticated);
    // console.log(this.props.user._id, this.props.user.name);
    let drawerClasses = "th-side_drawer";
    if (this.props.show) {
      drawerClasses = "th-side_drawer open";
    }
    // console.log(this.props.user_name);
    return (
      <div>
        <nav className={drawerClasses}>
          <div className="d-flex justify-content-around align-items-center">
            <Link to="/" onClick={this.props.clicked}>
              <img src={Logo} alt="" className="th-sidebar-logo" />
            </Link>
            <X
              size={this.state.width > 320 ? 20 : 16}
              onClick={this.props.clicked}
            />
          </div>
          {/* login/register part */}
          {this.props.auth.isAuthenticated ? (
            <div>
              <div className="d-flex justify-content-center align-items-center mt-3 mb-2">
                <p className="m-0 th-sidebar-list-item">
                  Welcome Back {this.props.user_name}
                </p>
              </div>
              <div
                className="d-flex justify-content-center align-items-center mb-3"
                onClick={this.handleLogout}
              >
                <LogOut size={this.state.width > 320 ? 24 : 16} color="#333" />
                <p
                  className="ml-2 mb-0 th-sidebar-list-item"
                  style={{ color: "#333" }}
                >
                  Logout
                </p>
              </div>
            </div>
          ) : (
            <div>
              <div className="d-flex justify-content-center align-items-center mt-3 mb-2">
                <p className="m-0 th-sidebar-list-item">New to Bechho?</p>
              </div>
              <div className="d-flex justify-content-center align-items-center mb-2">
                <Edit
                  size={this.state.width > 320 ? 24 : 16}
                  color="#333"
                  onClick={this.props.clicked}
                />
                <Link to="/signup" onClick={this.props.clicked}>
                  <span
                    className="ml-3 th-sidebar-list-item"
                    style={{ color: "#333" }}
                  >
                    Signup
                  </span>
                </Link>
              </div>
              <div className="d-flex justify-content-center align-items-center mb-1">
                <p className="m-0 th-sidebar-list-item">
                  Already have an Account?
                </p>
              </div>
              <div className="d-flex justify-content-center align-items-center mb-3">
                <LogIn
                  size={this.state.width > 320 ? 24 : 16}
                  color="#333"
                  onClick={this.props.clicked}
                />
                <Link to="/signin" onClick={this.props.clicked}>
                  <span
                    className="ml-3 th-sidebar-list-item"
                    style={{ color: "#333" }}
                  >
                    Signin
                  </span>
                </Link>
              </div>
            </div>
          )}
          {/* login part ends */}
          <hr className="th-sidebar-hr" />
          <div className="pt-0 pb-0 pl-5 pr-5">
            {/* show only if user is authenticated */}
            <Link to="/sell" onClick={this.props.clicked}>
              <p className="th-sidebar-list-item">Sell a product</p>
            </Link>
            <Link to="/my-bids" onClick={this.props.clicked}>
              <p className="th-sidebar-list-item">My Bids</p>
            </Link>
            <Link to="/my-items" onClick={this.props.clicked}>
              <p className="th-sidebar-list-item">My Items</p>
            </Link>
            {/* show only if user is authenticated */}
            <Link to="/career" onClick={this.props.clicked}>
              <p className="th-sidebar-list-item">Careers</p>
            </Link>
            <Link to="/blogs" onClick={this.props.clicked}>
              <p className="th-sidebar-list-item">Blogs</p>
            </Link>
            <Link to="/testimonials" onClick={this.props.clicked}>
              <p className="th-sidebar-list-item">Testimonials</p>
            </Link>
            <Link to="/faq" onClick={this.props.clicked}>
              <p className="th-sidebar-list-item">FAQ's</p>
            </Link>
          </div>
          <hr className="th-sidebar-hr" />
          <div className="pt-0 pb-0 pl-5 pr-5">
            <Link
              to="#"
              className="mb-1  d-flex align-items-center th-sidebar-icon"
              onClick={this.props.clicked}
            >
              <Twitter size={this.state.width > 320 ? 24 : 16} />
              <p className="mb-2 ml-3 th-sidebar-list-item">Twitter</p>
            </Link>
            <Link
              to="#"
              className="mb-1  d-flex align-items-center th-sidebar-icon"
              onClick={this.props.clicked}
            >
              <Linkedin size={this.state.width > 320 ? 24 : 16} />
              <p className="mb-2 ml-3 th-sidebar-list-item">Linkedin</p>
            </Link>
            <Link
              to="#"
              className="mb-1  d-flex align-items-center th-sidebar-icon"
              onClick={this.props.clicked}
            >
              <Facebook size={this.state.width > 320 ? 24 : 16} />
              <p className="mb-2 ml-3 th-sidebar-list-item">Facebook</p>
            </Link>
          </div>
        </nav>
      </div>
    );
  }
}

SideDrawer.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  resetCityOnLogout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, {
  logoutUser,
  resetCityOnLogout,
})(SideDrawer);
