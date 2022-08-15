import React, { Component } from "react";
import { Helmet } from "react-helmet";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import BecomePartner from "../../../Components/MakeMoney/BecomePartner/BecomePartner";
import LinksSidebar from "../../../Components/FooterLinkSidebar/FooterLinkSidebar";

class BecomePartnerHome extends Component {
  state = {
    width: window.innerWidth,
  };
  render() {
    return (
      <div>
        <Helmet titleTemplate="Bechho | %s" title="Become Partner" />
        {this.state.width > 800 ? (
          <Container>
            <Row>
              <Col md={3} className="d-flex justify-content-center">
                <LinksSidebar />
              </Col>
              <Col md={9}>
                <BecomePartner />
              </Col>
            </Row>
          </Container>
        ) : (
          <div className="pl-3 pr-3">
            <BecomePartner />
          </div>
        )}
      </div>
    );
  }
}

export default BecomePartnerHome;
