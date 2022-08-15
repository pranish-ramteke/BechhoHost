import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Helmet } from "react-helmet";
import ProductTop from "../../Components/Products/ProductTop/ProductTop";
import Description from "../../Components/Products/Description/Description";
import SimilarProduct from "../../Components/Products/SimilarProduts/SimilarProducts";
import axios from "axios";
import { API } from "../../../backend";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

class ProductHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product_name: "",
      img_url: "",
      price: "",
      city: "",
      address: "",
      ans1: "",
      ans2: "",
      ans3: "",
      ans4: "",
      ans5: "",
      ans6: "",
      ans7: "",
      ans8: "",
      ans9: "",
      ans10: "",
      ans11: "",
      status: null,
    };
  }

  componentDidMount() {
    this.fetchProductData({ id: this.props.match.params.id });
    window.scrollTo(0, 0);
  }

  fetchProductData = (params = {}) => {
    axios
      .get(`${API}/product`, {
        params: { ...params },
      })
      .then((res) => {
        // console.log(res.data);
        this.setState({
          product_name:
            res.data.name.charAt(0).toUpperCase() + res.data.name.slice(1),
          img_url: res.data.photo.path,
          price: res.data.price,
          city: res.data.city.charAt(0).toUpperCase() + res.data.city.slice(1),
          status: res.data.sold,
          description: res.data.description,
          ans1: res.data.ans1,
          ans2: res.data.ans2,
          ans3: res.data.ans3,
          ans4: res.data.ans4,
          ans5: res.data.ans5,
          ans6: res.data.ans6,
          ans7: res.data.ans7,
          ans8: res.data.ans8,
          ans9: res.data.ans9,
          ans10: res.data.ans10,
          ans11: res.data.ans11,
        });
      })
      .catch((err) => {
        toast("Please signin to view the product", {
          type: "warning",
        });
      });
  };

  render() {
    return (
      <div>
        <Helmet titleTemplate="Bechho | %s" title={this.state.product_name} />
        <div className="mt-lg-5 mb-5 th-products-container">
          <ProductTop
            name={this.state.product_name}
            src={this.state.img_url}
            price={this.state.price}
            city={this.state.city}
            description={this.state.description}
            prodId={this.props.match.params.id}
          />
          <Description
            answer1={this.state.ans1}
            answer2={this.state.ans2}
            answer3={this.state.ans3}
            answer4={this.state.ans4}
            answer5={this.state.ans5}
            answer6={this.state.ans6}
            answer7={this.state.ans7}
            answer8={this.state.ans8}
            answer9={this.state.ans9}
            answer10={this.state.ans10}
            answer11={this.state.ans11}
          />
          <SimilarProduct city={this.state.city} />
        </div>
      </div>
    );
  }
}

export default withRouter(ProductHome);
