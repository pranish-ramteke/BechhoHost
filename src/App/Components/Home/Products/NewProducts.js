import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Slider from "react-slick";
import LeftArrow from "../../Slider/LeftArrow";
import RightArrow from "../../Slider/RightArrow";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import axios from "axios";
import { API } from "../../../../backend";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

const settings = {
  slidesToShow: 3,
  slidesToScroll: 2,
  autoplay: false,
  autoplaySpeed: 4000,
  dots: false,
  arrows: true,
  infinite: false,
  nextArrow: <RightArrow to="next" />,
  prevArrow: <LeftArrow to="prev" />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
        infinite: true,
        dots: false,
        arrows: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
      },
    },
  ],
};

class NewProducts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    this.fetchProducts();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.city !== this.props.city) {
      this.fetchProducts();
    }
  }

  fetchProducts = () => {
    axios
      .get(`${API}/products/${this.props.city}`)
      .then((res) => {
        this.setState({
          data: res.data,
        });
      })
      .catch((err) => {
        toast("No products found in ".concat(this.props.city), {
          type: "warning",
        });
      });
  };

  render() {
    let start, end;
    start = 0;
    if (this.state.data.length >= 20) {
      end = 15;
    } else if (this.state.data.length < 20 && this.state.data.length >= 10) {
      end = 10;
    } else if (this.state.data.length < 10 && this.state.data.length >= 6) {
      end = 6;
    } else {
      end = this.state.data.length;
    }

    return (
      <div className="mb-5">
        <div className="d-flex justify-content-between mb-2 mt-4">
          <span className="pl-md-1 th-new-product-header">Latest Products</span>
          <Link to="/category" className="th-new-product-all-btn">
            See All
          </Link>
        </div>
        {this.state.data.length > 0 && (
          <Slider {...settings} className="px-0 th-slider-margin">
            {this.state.data.slice(start, end).map((item, index) => {
              return (
                <div key={index} className="pl-3 pr-3">
                  <Card className="th-prods-card border-0">
                    <Link
                      to={`/products/${item._id}`}
                      style={{ textDecoration: "none" }}
                    >
                      <div className="d-flex justify-content-center th-newprods-img-div">
                        <img
                          src={item.photo.path}
                          alt=""
                          className="th-prods-card-image"
                        />
                      </div>
                      <div className="pt-2 th-card-box">
                        <Card.Text className="mb-md-1 th-prods-title">
                          {item.name.charAt(0).toUpperCase() +
                            item.name.slice(1)}
                        </Card.Text>
                        <Card.Text className="mb-md-1 th-prods-description">
                          {item.description.slice(0, 30)}
                          <span style={{ fontSize: "18px" }}>...</span>
                        </Card.Text>
                        <div className="d-flex justify-content-between">
                          <p className="th-prods-location mb-0">
                            {item.city.charAt(0).toUpperCase() +
                              item.city.slice(1)}
                          </p>
                          <p className="th-prods-price mb-0">₹ {item.price} </p>
                        </div>
                      </div>
                    </Link>
                  </Card>
                </div>
              );
            })}
          </Slider>
        )}
      </div>
    );
  }
}

NewProducts.propTypes = {
  city: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  city: state.location.city,
});

export default connect(mapStateToProps)(NewProducts);
