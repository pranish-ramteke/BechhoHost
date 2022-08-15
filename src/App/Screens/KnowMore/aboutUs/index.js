import React, { Component } from "react";
import { Helmet } from "react-helmet";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AboutUs from "../../../Components/KnowMore/aboutUs/AboutUs";
import LinksSidebar from "../../../Components/FooterLinkSidebar/FooterLinkSidebar";
class AboutUsHome extends Component {
  state = {
    width: window.innerWidth,
  };
  render() {
    return (
      <div>
        <Helmet titleTemplate="Bechho | %s" title="About Us" />
        {this.state.width > 800 ? (
          <Container>
            <Row>
              <Col md={3} className="d-flex justify-content-center">
                <LinksSidebar />
              </Col>
              <Col md={9}>
                <AboutUs />
              </Col>
            </Row>
          </Container>
        ) : (
          <div className="pl-3 pr-3">
            <AboutUs />
          </div>
        )}
      </div>
    );
  }
}

export default AboutUsHome;
