import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Modal from "react-bootstrap/Modal";
import Logo from "../../../Assets/Images/Logo.png";
import {
  loginUser,
  setUserLoading,
} from "../../../../redux/actions/authActions";
import { XCircle } from "react-feather";

class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      width: window.innerWidth,
      show_modal: true,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
  }

  handleCloseModal = () => {
    this.setState({
      show_modal: !this.state.show_modal,
    });
    this.props.history.push("/");
  };

  handleFocus = (event) => {
    event.target.setAttribute("autocomplete", "off");
    // console.log(event.target.autocomplete);
  };

  componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to home
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/");
    }
  }

  componentDidUpdate(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/"); // push user to Home page when they login
    }
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      email: this.state.email,
      password: this.state.password,
    };
    // console.log(userData);
    this.props.loginUser(userData); // since we handle the redirect within our component,
    //we don't need to pass in this.props.history as a parameter
    // settting loading true to display the loader
    this.props.setUserLoading();
  };

  render() {
    return (
      <div>
        <Modal
          size="lg"
          show={this.state.show_modal}
          centered
          onHide={this.handleCloseModal}
          className="th-auth-modal-background"
        >
          <Modal.Body className="p-0">
            {/* signin starts */}
            <div className="d-flex justify-content-center th-auth-container">
              <div className="left-box">
                <p className="text-center mt-lg-5 mb-0 left-box-header">
                  Welcome
                </p>
                {this.state.width > 780 ? (
                  <div className="text-center">
                    <img src={Logo} alt="" style={{ width: "200px" }} />
                  </div>
                ) : null}
              </div>
              <div className="right-box">
                {this.state.width > 780 ? (
                  <div className="float-right mt-2 mr-3">
                    <XCircle size={20} onClick={this.handleCloseModal} />
                  </div>
                ) : null}
                <div className="wraper">
                  <p className="text-center right-box-header">Login</p>
                  {/* signin form */}
                  <form
                    className="d-flex flex-column"
                    onSubmit={this.handleSubmit}
                  >
                    <input
                      className="input-item mb-4"
                      type="email"
                      maxLength={36}
                      placeholder="Email"
                      name="email"
                      value={this.state.email}
                      onChange={this.handleChange}
                      onFocus={this.handleFocus}
                      required
                    />
                    <input
                      className="input-item mb-4"
                      type="password"
                      placeholder="Password"
                      name="password"
                      value={this.state.password}
                      onChange={this.handleChange}
                      onFocus={this.handleFocus}
                      required
                    />
                    <button className="btn submit" type="submit">
                      Continue
                    </button>
                  </form>
                  {/* form ends */}
                  <div
                    className="d-flex justify-content-center mt-3 "
                    style={{ alignItems: "baseline" }}
                  >
                    <span className="query">Don't have an account?</span>{" "}
                    <Link to="/signup">
                      <span className="login ml-1">Signup</span>
                    </Link>
                  </div>
                  {this.state.width < 780 ? (
                    <div
                      className="d-flex justify-content-center mt-2"
                      onClick={this.handleCloseModal}
                    >
                      <span className="th-auth-modal-back">Go Back</span>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
            {/* signin ends */}
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

Signin.propTypes = {
  setUserLoading: PropTypes.func.isRequired,
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { loginUser, setUserLoading })(Signin);
