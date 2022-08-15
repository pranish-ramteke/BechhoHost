import React, { Component } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Logo from "../../Assets/Images/Footer/Logo.png";
import { Facebook, Linkedin, Instagram } from "react-feather";

class Footer extends Component {
  state = {
    width: window.innerWidth,
  };

  render() {
    return (
      <div className="th-footer-container">
        <Container className="text-center">
          <div className="pt-lg-4 pb-lg-5">
            {this.state.width > 780 ? (
              <Row className="pt-lg-2">
                <Col
                  lg={3}
                  className="th-footer-col th-footer-border-right pr-lg-5"
                >
                  <Link to="/">
                    <img src={Logo} alt="" />
                  </Link>

                  <p className="mt-lg-2 th-beccho-about">
                    Bechho is India's first ecommerce and recommerce O2O
                    platform founded by students.
                  </p>
                </Col>
                <Col
                  lg={3}
                  className="th-footer-col th-footer-border-right pr-lg-4 pl-lg-4"
                >
                  <div className="th-footer-list-title mt-lg-2">Contact Us</div>
                  <div className="d-flex justify-content-around mt-lg-2">
                    <span>
                      <a
                        href="https://www.instagram.com/bechho.in/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Instagram size={26} color="#fff" />
                      </a>
                    </span>
                    <span>
                      <a
                        href="https://www.linkedin.com/company/bechho/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Linkedin size={26} color="#fff" />
                      </a>
                    </span>
                    <span>
                      <Facebook size={26} color="#fff" />
                    </span>
                  </div>
                </Col>
                <Col
                  lg={3}
                  className="th-footer-col th-footer-border-right pr-lg-4 pl-lg-4"
                >
                  <div className="th-footer-list-title mt-lg-2">Know More</div>
                  <div className="mt-lg-2">
                    <Link className="th-footer-list" to="/about-us">
                      <li>About Us </li>
                    </Link>

                    <Link className="th-footer-list" to="/blogs">
                      <li>Blogs</li>
                    </Link>

                    <Link className="th-footer-list" to="/faq">
                      <li>FAQ's</li>
                    </Link>

                    <Link className="th-footer-list" to="/career">
                      <li>Careers</li>
                    </Link>

                    <Link className="th-footer-list" to="/privacy-policy">
                      <li>Privacy Policy</li>
                    </Link>

                    <Link className="th-footer-list" to="/return-policy">
                      <li>Return Policy</li>
                    </Link>

                    <Link className="th-footer-list" to="/terms">
                      <li>Terms and Conditions</li>
                    </Link>

                    <Link className="th-footer-list" to="/team">
                      <li>Team</li>
                    </Link>
                  </div>
                </Col>
                <Col lg={3} className="th-footer-col">
                  <div className="th-footer-list-title mt-lg-2">
                    Make money with us
                  </div>
                  <div className="th-footer-list mt-lg-2">
                    <Link className="th-footer-list" to="/buyer-terms">
                      <li>Buyer terms </li>
                    </Link>

                    <Link className="th-footer-list" to="/seller-term">
                      <li>Seller terms</li>
                    </Link>

                    <Link className="th-footer-list" to="/sell">
                      <li>Sell with Bechho</li>
                    </Link>

                    <Link className="th-footer-list" to="/affiliate">
                      <li>Become an affiliate</li>
                    </Link>

                    <Link className="th-footer-list" to="/advertise">
                      <li>Advertise with us</li>
                    </Link>

                    <Link className="th-footer-list" to="/become-partner">
                      <li>Become a partner</li>
                    </Link>
                  </div>
                </Col>
              </Row>
            ) : (
              <div style={{ marginBottom: "3.6rem" }}>
                <Row className="pt-2 th-footer-mob-col">
                  <div className="th-footer-col mt-2" sm={3}>
                    <Link to="/">
                      <img src={Logo} alt="" className="th-footer-logo" />
                    </Link>
                  </div>
                  <div className="th-footer-col " sm={9}>
                    <div className=" mt-2">
                      <span className="th-footer-list-title"> Contact Us</span>
                      <span className="mr-1 ml-3">
                        <a
                          href="https://www.instagram.com/bechho.in/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Instagram size={20} color="#fff" />
                        </a>
                      </span>
                      <span className="mr-1 ml-1">
                        <a
                          href="https://www.linkedin.com/company/bechho/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Linkedin size={20} color="#fff" />
                        </a>
                      </span>
                      <span className="mr-1 ml-1">
                        <Facebook size={20} color="#fff" />
                      </span>
                    </div>
                  </div>
                </Row>
                <div className="th-footer-hr">
                  <hr className="th-footer-border-bottom" />
                </div>

                <Row className="th-footer-mob-row">
                  <Col className="">
                    <div className="th-footer-list-title mt-2">Know More</div>
                    <div className="th-footer-list mt-2">
                      <Link className="th-footer-list" to="/about-us">
                        <li>About Us </li>
                      </Link>

                      <Link className="th-footer-list" to="/blogs">
                        <li>Blogs</li>
                      </Link>

                      <Link className="th-footer-list" to="/faq">
                        <li>FAQ's</li>
                      </Link>

                      <Link className="th-footer-list" to="/career">
                        <li>Careers</li>
                      </Link>

                      <Link className="th-footer-list" to="/privacy-policy">
                        <li>Privacy Policy</li>
                      </Link>

                      <Link className="th-footer-list" to="/return-policy">
                        <li>Return Policy</li>
                      </Link>

                      <Link className="th-footer-list" to="/terms">
                        <li>Terms and Conditions</li>
                      </Link>

                      <Link className="th-footer-list" to="/team">
                        <li>Team</li>
                      </Link>
                    </div>
                  </Col>
                  <Col className="text-align-left">
                    <div className="th-footer-list-title mt-2">
                      Make money with us
                    </div>
                    <div className="th-footer-list mt-2">
                      <Link className="th-footer-list" to="/buyer-terms">
                        <li>Buyer terms </li>
                      </Link>

                      <Link className="th-footer-list" to="/seller-term">
                        <li>Seller terms</li>
                      </Link>

                      <Link className="th-footer-list" to="/sell">
                        <li>Sell with Bechho</li>
                      </Link>

                      <Link className="th-footer-list" to="/affiliate">
                        <li>Become an affiliate</li>
                      </Link>

                      <Link className="th-footer-list" to="/advertise">
                        <li>Advertise with us</li>
                      </Link>

                      <Link className="th-footer-list" to="/become-partner">
                        <li>Become a partner</li>
                      </Link>
                    </div>
                  </Col>
                </Row>
              </div>
            )}
          </div>
        </Container>
      </div>
    );
  }
}

export default Footer;
