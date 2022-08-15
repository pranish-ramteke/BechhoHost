import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import data from "../data/data";

class StepOne extends Component {
  render() {
    if (this.props.currentStep !== 1) {
      return null;
    }

    const categorylist = data.map((item, index) => {
      return (
        <option id={item.id} required>
          {item.name}
        </option>
      );
    });

    const productslist = data[0].subCategory.map((item, index) => {
      return (
        <option id={item.id} required>
          {item.name}
        </option>
      );
    });

    return (
      <div>
        <div className="th-sell-form-item-wraper">
          <div className="th-sell-form-item-header">Select a Product</div>
          <div className="d-lg-flex justify-content-between mt-4">
            <Form.Group className="d-flex align-items-center">
              <span className="th-sell-form-input-label mr-3 mr-lg-4">
                Category
              </span>
              <Form.Control
                as="select"
                className="th-sell-form-input"
                name="category"
                onChange={this.props.handleChange}
              >
                {categorylist}
              </Form.Control>
            </Form.Group>
            <Form.Group className="d-flex align-items-center">
              <span className="th-sell-form-input-label mr-4">Product</span>
              <Form.Control
                as="select"
                className="th-sell-form-input"
                name="product"
                onChange={this.props.handleChange}
              >
                {productslist}
              </Form.Control>
            </Form.Group>
          </div>
        </div>
        {/* <hr /> */}
        <div className="th-sell-form-item-wraper">
          <div className="th-sell-form-item-header">Upload Product Images</div>
          <div className="d-flex align-items-center mt-4">
            <div className="th-sell-form-image-box mr-4"></div>
            <div className="th-sell-from-img-upload-btn">
              <span className="th-sell-from-img-upload-circle"> + </span>
              <Form.File lang="en" custom required />
            </div>
          </div>
        </div>
        {/* <hr /> */}
        <div className="th-sell-form-item-wraper">
          <div className="th-sell-form-item-header">Breif Description</div>
          <div className="mt-3">
            <Form.Group>
              <Form.Control
                as="textarea"
                rows="4"
                className="th-sell-form-textarea"
                placeholder="Start typing..."
                onChange={this.props.handleChange}
                required
                name="description"
                value={this.props.description}
              />
            </Form.Group>
          </div>
        </div>
      </div>
    );
  }
}

export default StepOne;
