import React, { Component } from "react";
import { MinusCircle, PlusCircle } from "react-feather";
class FaqCard extends Component {
  state = {
    show: false,
  };

  handleShow = () => {
    this.setState({
      show: !this.state.show,
    });
  };

  render() {
    return (
      <div>
        <div className="th-faq-box mb-4">
          <div className="d-flex justify-content-between align-items-center">
            <h4 className="th-faq-query">{this.props.question}</h4>
            <div>
              {!this.state.show ? (
                <PlusCircle
                  size={20}
                  onClick={this.handleShow}
                  className="th-faq-plus"
                />
              ) : (
                <MinusCircle
                  size={20}
                  onClick={this.handleShow}
                  className="th-faq-minus"
                />
              )}
            </div>
          </div>
          {this.state.show ? (
            <p className="th-faq-answer">{this.props.answer}</p>
          ) : null}
        </div>
      </div>
    );
  }
}

export default FaqCard;
