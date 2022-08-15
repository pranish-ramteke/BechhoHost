import React, { Component } from "react";
import CategoryCard from "../Cards/CategoryCard";
import Loader from "../../../Loader/spinner";
import axios from "axios";
import { API } from "../../../../backend";
import { connect } from "react-redux";
import { Search } from "react-feather";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

class CategoryTop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth,
      prodList: [],
      search: "",
      loading: false,
    };
  }

  componentDidMount() {
    this.fetchProducts();
    this.setState({ loading: true });
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
          prodList: res.data,
          loading: false,
        });
      })
      .catch((err) => {
        toast(err.response.data.error, { type: "warning" });
        this.setState({
          loading: false,
        });
      });
  };

  handleChange = (e) => {
    this.setState({
      search: e.target.value,
    });
    console.log(e.target.value);
  };

  render() {
    const products = this.state.prodList.filter((data) => {
      if (this.state.search === "") return data;
      else if (
        data.name.toLowerCase().includes(this.state.search.toLowerCase()) ||
        data.city.toLowerCase().includes(this.state.search.toLowerCase())
      ) {
        return data;
      }
      return data;
    });

    return (
      <div>
        {this.state.loading ? (
          <Loader />
        ) : (
          <div>
            <div className="d-lg-flex justify-content-lg-between">
              <div className="th-category-title">Mobile and Laptops</div>
              {/* search filter */}
              <form action="">
                <div class="input-group">
                  <input
                    type="search"
                    class="form-control"
                    placeholder="Search a product..."
                    onChange={this.handleChange}
                  />
                  <div class="input-group-append th-category-prod-search-icon align-items-center btn-primary">
                    <Search size={24} />
                  </div>
                </div>
              </form>
            </div>
            <div className="mt-3">
              <div class="d-flex flex-wrap justify-content-between">
                {products &&
                  products.map((item, index) => {
                    return (
                      <CategoryCard
                        src={item.photo.path}
                        title={
                          item.name.charAt(0).toUpperCase() + item.name.slice(1)
                        }
                        description={item.description}
                        location={
                          item.city.charAt(0).toUpperCase() + item.city.slice(1)
                        }
                        price={item.price}
                        id={item._id}
                      />
                    );
                  })}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  city: state.location.city,
});

export default connect(mapStateToProps)(CategoryTop);
