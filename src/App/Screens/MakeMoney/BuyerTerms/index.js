import { Helmet } from "react-helmet";
import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import BuyerTerms from "../../../Components/MakeMoney/BuyerTerms/BuyerTerm";
import LinksSidebar from "../../../Components/FooterLinkSidebar/FooterLinkSidebar";

class BuyerTermsHome extends Component {
  state = {
    width: window.innerWidth,
  };
  render() {
    return (
      <div>
        <Helmet titleTemplate="Bechho | %s" title="Buyer Terms" />

        {this.state.width > 800 ? (
          <Container>
            <Row>
              <Col md={3} className="d-flex justify-content-center">
                <LinksSidebar />
              </Col>
              <Col md={9}>
                <BuyerTerms />
              </Col>
            </Row>
          </Container>
        ) : (
          <div className="pl-3 pr-3">
            <BuyerTerms />
          </div>
        )}
      </div>
    );
  }
}

export default BuyerTermsHome;
