import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../../../redux/actions/authActions";
import { XCircle } from "react-feather";
import Modal from "react-bootstrap/Modal";
import Logo from "../../../Assets/Images/Logo.png";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      contact: "",
      city: "",
      address: "",
      email: "",
      password: "",
      show_modal: true,
      width: window.innerWidth,
      errors: {},
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

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  // validation
  handleValidation() {
    let { name, contact, email, address, password } = this.state;

    let errors = {};
    let formIsValid = true;

    //Name
    if (name.length < 4) {
      formIsValid = false;
      errors["name"] = "Name must be of atleast 4 letters";
    } else if (typeof name !== "undefined") {
      if (!name.match(/^[a-zA-Z][a-zA-Z ]+[a-zA-Z]+$/)) {
        formIsValid = false;
        errors["name"] = "Only letters are allowed";
      }
    }

    // contact
    if (contact.length < 10) {
      formIsValid = false;
      errors["contact"] = "Must be of 10 digits";
    } else if (typeof contact !== "undefined") {
      if (!contact.match(/^[0-9]+$/)) {
        formIsValid = false;
        errors["contact"] = "Only digits are allowed";
      }
    }

    //Address
    if (address.length > 30) {
      formIsValid = false;
      errors["address"] = "Address cannot contain more than 30 letters";
    }

    //Email
    if (typeof email !== "undefined") {
      let lastAtPos = email.lastIndexOf("@");
      let lastDotPos = email.lastIndexOf(".");

      if (
        !(
          lastAtPos < lastDotPos &&
          lastAtPos > 0 &&
          email.indexOf("@@") === -1 &&
          lastDotPos > 2 &&
          email.length - lastDotPos > 2
        )
      ) {
        formIsValid = false;
        errors["email"] = "Email is not valid";
      }
    }

    // password
    if (password.length < 4) {
      formIsValid = false;
      errors["password"] = "Password is too small";
    }

    this.setState({ errors: errors });
    return formIsValid;
  }
  // validation ends

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.handleValidation()) {
      const newUser = {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
        contact: this.state.contact,
        city: this.state.city,
        address: this.state.address,
      };
      this.props.registerUser(newUser, this.props.history);
    } else {
      toast("Cannot register user with invalid details, please try again", {
        type: "warning",
      });
    }
  };

  render() {
    const { name, contact, city, email, password, address } = this.state;

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
            {/* signup starts */}
            <div className="d-flex justify-content-center th-auth-container">
              <div className="left-box">
                <p className="text-center mt-lg-5 mb-0 left-box-header">
                  Welcome
                </p>
                {this.state.width > 780 ? (
                  <div className="text-center" style={{ marginTop: "4.8rem" }}>
                    <img src={Logo} alt="" style={{ width: "240px" }} />
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
                  <p className="text-center right-box-header">
                    Create Your Account
                  </p>
                  {/* signup form */}
                  <form
                    className="d-flex flex-column"
                    onSubmit={this.handleSubmit}
                  >
                    <div className="mb-4 d-flex flex-column">
                      <input
                        className="input-item"
                        type="text"
                        required
                        placeholder="Your Name"
                        name="name"
                        value={name}
                        onChange={this.handleChange}
                        onFocus={this.handleFocus}
                      />
                      {this.state.errors.name && (
                        <span
                          style={{
                            color: "red",
                            fontSize: "16px",
                            fontFamily: "merriweather",
                          }}
                        >
                          {this.state.errors.name}
                        </span>
                      )}
                    </div>

                    <div className="mb-4 d-flex flex-column">
                      <input
                        className="input-item"
                        type="text"
                        required
                        maxLength={10}
                        placeholder="Contact"
                        name="contact"
                        value={contact}
                        onChange={this.handleChange}
                        onFocus={this.handleFocus}
                      />
                      {this.state.errors.contact && (
                        <span
                          style={{
                            color: "red",
                            fontSize: "16px",
                            fontFamily: "merriweather",
                          }}
                        >
                          {this.state.errors.contact}
                        </span>
                      )}
                    </div>

                    <select
                      className="input-item mb-4"
                      required
                      placeholder="City"
                      name="city"
                      value={city}
                      onChange={this.handleChange}
                      onFocus={this.handleFocus}
                      style={{ background: "#fff" }}
                    >
                      <option value="">Select Your City</option>
                      <option value="Delhi">Delhi</option>
                      <option value="Noida">Noida </option>
                      <option value="Gurugram">Gurugram</option>
                      <option value="Bangalore">Bangalore</option>
                      <option value="Pune">Pune</option>
                    </select>

                    <div className="mb-4 d-flex flex-column">
                      <input
                        className="input-item"
                        type="text"
                        required
                        maxLength={50}
                        placeholder="Your Address"
                        name="address"
                        value={address}
                        onChange={this.handleChange}
                        onFocus={this.handleFocus}
                      />
                      {this.state.errors.address && (
                        <span
                          style={{
                            color: "red",
                            fontSize: "16px",
                            fontFamily: "merriweather",
                          }}
                        >
                          {this.state.errors.address}
                        </span>
                      )}
                    </div>

                    <div className="mb-4 d-flex flex-column">
                      <input
                        className="input-item"
                        type="email"
                        required
                        maxLength={36}
                        placeholder="Email"
                        name="email"
                        value={email}
                        onChange={this.handleChange}
                        onFocus={this.handleFocus}
                      />
                      {this.state.errors.email && (
                        <span
                          style={{
                            color: "red",
                            fontSize: "16px",
                            fontFamily: "merriweather",
                          }}
                        >
                          {this.state.errors.email}
                        </span>
                      )}
                    </div>

                    <div className="mb-4 d-flex flex-column">
                      <input
                        className="input-item "
                        required
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={password}
                        onChange={this.handleChange}
                        onFocus={this.handleFocus}
                      />
                      {this.state.errors.password && (
                        <span
                          style={{
                            color: "red",
                            fontSize: "16px",
                            fontFamily: "merriweather",
                          }}
                        >
                          {this.state.errors.password}
                        </span>
                      )}
                    </div>

                    <button className="btn submit" type="submit">
                      Continue
                    </button>
                  </form>
                  {/* form ends */}
                  <div>
                    <div
                      className="d-flex justify-content-center mt-3"
                      style={{ alignItems: "baseline" }}
                    >
                      <span className="query">Have an account?</span>{" "}
                      <Link to="/signin">
                        <span className="login ml-1">Signin</span>
                      </Link>
                    </div>
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
            {/* signup ends */}
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

Signup.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { registerUser })(withRouter(Signup));
