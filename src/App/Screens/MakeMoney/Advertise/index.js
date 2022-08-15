import { Helmet } from "react-helmet";
import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Advertise from "../../../Components/MakeMoney/Advertise/Advertise";
import LinksSidebar from "../../../Components/FooterLinkSidebar/FooterLinkSidebar";

class AdvertiseHome extends Component {
  state = {
    width: window.innerWidth,
  };
  render() {
    return (
      <div>
        <Helmet titleTemplate="Bechho | %s" title="Advertise" />
        {this.state.width > 800 ? (
          <Container>
            <Row>
              <Col md={3} className="d-flex justify-content-center">
                <LinksSidebar />
              </Col>
              <Col md={9}>
                <Advertise />
              </Col>
            </Row>
          </Container>
        ) : (
          <div className="pl-3 pr-3">
            <Advertise />
          </div>
        )}
      </div>
    );
  }
}

export default AdvertiseHome;
