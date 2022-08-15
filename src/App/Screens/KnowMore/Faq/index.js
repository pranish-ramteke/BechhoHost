import React, { Component } from "react";
import { Helmet } from "react-helmet";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FAQ from "../../../Components/KnowMore/Faq/index";
import LinksSidebar from "../../../Components/FooterLinkSidebar/FooterLinkSidebar";

class FAQHome extends Component {
  state = {
    width: window.innerWidth,
  };
  render() {
    return (
      <div>
        <Helmet titleTemplate="Bechho | %s" title="Faq's" />
        {this.state.width > 800 ? (
          <Container>
            <Row>
              <Col md={3} className="d-flex justify-content-center">
                <LinksSidebar />
              </Col>
              <Col md={9}>
                <FAQ />
              </Col>
            </Row>
          </Container>
        ) : (
          <div className="pl-3 pr-3">
            <FAQ />
          </div>
        )}
      </div>
    );
  }
}

export default FAQHome;
