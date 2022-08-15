import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import data from "../data/data";

class StepTwo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questionValue: [],
    };
  }

  toggleChange = (e) => {
    const { questionValue } = this.state;
    this.setState({
      questionValue: [
        ...questionValue,
        { index: Math.random(), question: e.target.id, answer: e.target.value },
      ],
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.questionValue);
  };

  render() {
    if (this.props.currentStep !== 2) {
      return null;
    }
    return (
      <div>
        <div className="th-sell-form-item-wraper">
          <div className="th-sell-form-item-header">Product Description</div>
          <div className="th-sell-form-qna-list">
            {data[0].subCategory.map((item, index) => {
              return item.mcq.map((items, index) => {
                return (
                  <div className="mt-lg-3 mb-lg-3">
                    <div className="mb-lg-2 th-sell-form-qna-ques">
                      Q) {items.question}
                    </div>
                    <div className="ml-4">
                      {/* className="mr-5 th-sell-form-qna-ans" */}
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          name={index}
                          id={items.question}
                          value={items.options[0]}
                          onClick={this.toggleChange}
                        />
                        <label class="form-check-label" for="inlineRadio1">
                          {items.options[0]}
                        </label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          name={index}
                          id={items.question}
                          value={items.options[1]}
                          onClick={this.toggleChange}
                        />
                        <label class="form-check-label" for="inlineRadio2">
                          {items.options[1]}
                        </label>
                      </div>
                    </div>
                  </div>
                );
              });
            })}
          </div>
        </div>

        <div className="th-sell-form-item-wraper">
          <div className="th-sell-form-item-header">Asked Price</div>
          <div className="mt-3">
            <Form.Group className="d-flex">
              <span className="th-sell-form-input-label mr-4">Enter Price</span>
              <Form.Control
                type="text"
                placeholder="₹"
                className="th-sell-form-input-price"
                onChange={this.props.handleChange}
                name="price"
                value={this.props.price}
              />
            </Form.Group>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <button
            // type="submit"
            className="th-sell-form-post"
            onClick={this.handleSubmit}
          >
            Post
          </button>
        </div>
      </div>
    );
  }
}

export default StepTwo;
