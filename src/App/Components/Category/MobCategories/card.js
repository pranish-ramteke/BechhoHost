import React, { Component } from "react";
import { ChevronDown, ChevronUp } from "react-feather";
import { Link } from "react-router-dom";

class CategoryList extends Component {
  state = {
    show: false,
  };

  handleShow = () => {
    this.setState({
      show: !this.state.show,
    });
  };

  handleClose = () => {
    this.setState({
      show: !this.state.show,
    });
  };

  render() {
    return (
      <div className="mb-3">
        <div className="d-flex justify-content-between align-items-center mb-2">
          <div>
            <img src={this.props.img} alt="Fashion" style={{ width: "28px" }} />
            <span
              className="ml-4 th-mob-category-list-item"
              onClick={this.handleShow}
            >
              {this.props.category}{" "}
            </span>
          </div>
          <div>
            {this.state.show ? (
              <ChevronUp size={20} color="#332a7c" onClick={this.handleClose} />
            ) : (
              <ChevronDown
                size={20}
                color="#332a7c"
                onClick={this.handleShow}
              />
            )}
          </div>
        </div>
        {this.state.show ? (
          <ul style={{ listStyle: "none" }} className="ml-2 mb-2">
            {this.props.list.map((item, index) => {
              return (
                <Link to={`/${item.url}`}>
                  <li className="mb-1 th-subcategory-name">{item.name}</li>
                </Link>
              );
            })}
          </ul>
        ) : null}
      </div>
    );
  }
}

export default CategoryList;
