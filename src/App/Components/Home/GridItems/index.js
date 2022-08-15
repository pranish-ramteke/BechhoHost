import React, { Component } from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Category from "./category";
import PromotedItems from "./PromotedItems";

export class GridComponents extends Component {
  render() {
    return (
      <div className="mt-md-4 mt-sm-2 mb-md-5 mb-sm-2">
        <Row className="text-center">
          <Col lg={5}>
            <PromotedItems />
          </Col>
          <Col lg={7}>
            <Category />
          </Col>
        </Row>
      </div>
    );
  }
}

export default GridComponents;
