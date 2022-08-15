import React, { Component } from "react";
import Loader from "../../../Loader/spinner";
import Form from "react-bootstrap/Form";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import axios from "axios";
import { API } from "../../../../backend";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

class StepTwo extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
      photo: null,
      price: null,
      width: window.innerWidth,
      loading: false,
      // for error
      photoError: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.onFileChange = this.onFileChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleChange = this.toggleChange.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  handleFocus = (event) => {
    event.target.setAttribute("autocomplete", "off");
  };

  toggleChange = (e) => {
    // console.log(e.target.id, e.target.value);
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleChange = (e) => {
    // console.log(e.target.name, e.target.value);
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onFileChange = (e) => {
    // Update the state
    if (e.target.files[0].size > 500000) {
      this.setState({
        photoError: "Image can not be more than 500KB",
      });
    } else {
      this.setState({ photo: e.target.files[0], photoError: "" });
    }

    // for showing the image
    var input = e.target;
    var reader = new FileReader();
    reader.onload = () => {
      var dataURL = reader.result;
      var output = document.getElementById("output");
      output.src = dataURL;
    };
    reader.readAsDataURL(input.files[0]);
  };

  handleValidaiton = () => {};

  handleSubmit = (e) => {
    e.preventDefault();

    this.setState({ loading: true });
    let formData = new FormData();

    formData.append("category", this.props.category);
    formData.append("subCategoryName", this.props.sub_category);
    formData.append("name", this.props.product_name);
    formData.append("description", this.props.description);
    formData.append("address", this.props.address);
    formData.append("city", this.props.city);
    formData.append("ans1", this.state.ans1);
    formData.append("ans2", this.state.ans2);
    formData.append("ans3", this.state.ans3);
    formData.append("ans4", this.state.ans4);
    formData.append("ans5", this.state.ans5);
    formData.append("ans6", this.state.ans6);
    formData.append("ans7", this.state.ans7);
    formData.append("ans8", this.state.ans8);
    formData.append("ans9", this.state.ans9);
    formData.append("ans10", this.state.ans10);
    formData.append("ans11", this.state.ans11);
    formData.append("photo", this.state.photo);
    formData.append("price", this.state.price);

    if (formData) {
      axios
        .post(`${API}/product/create/${this.props.user._id}`, formData, {
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        })
        .then((response) => {
          if (response.status === 200) {
            toast("Successfully Uploaded the Product", { type: "success" });
            this.setState({ loading: false });
          }
          this.props.history.push("/");
        })
        .catch((err) => {
          this.setState({ loading: false });
          toast(err.response.data.error, { type: "warning" });
        });
    }
  };

  render() {
    if (this.props.currentStep !== 2) {
      return null;
    }
    return (
      <div>
        {this.state.loading ? (
          <Loader />
        ) : (
          <form onSubmit={this.handleSubmit}>
            <div className="th-sell-form-item-wraper">
              <div className="th-sell-form-item-header">
                Product Description
              </div>
              {/* mcq starts */}
              <div className="th-sell-form-qna-list">
                <div className="mt-lg-3 mb-lg-3">
                  <div className="mb-lg-2 th-sell-form-qna-ques">
                    Q1. Does your device switch on?
                  </div>
                  <div className="ml-4">
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input "
                        type="radio"
                        name="inline-radio-1"
                        id="ans1"
                        value="on"
                        required
                        onClick={this.toggleChange}
                      />
                      <label class="mb-0 th-sell-form-input-label ">On</label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="inline-radio-1"
                        id="ans1"
                        value="off"
                        required
                        onClick={this.toggleChange}
                      />
                      <label class="mb-0 th-sell-form-input-label mr-1">
                        Off
                      </label>
                    </div>
                  </div>
                </div>
                {/* question 2 */}
                <div className="mt-lg-3 mb-lg-3">
                  <div className="mb-lg-2 th-sell-form-qna-ques">
                    Q2. Display and touch screen status?
                  </div>
                  <div className="ml-4">
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="inline-radio-2"
                        id="ans2"
                        value="Flawless"
                        required
                        onClick={this.toggleChange}
                      />
                      <label class=" mb-0 th-sell-form-input-label">
                        Flawless
                      </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="inline-radio-2"
                        id="ans2"
                        value="Moinor scratches"
                        required
                        onClick={this.toggleChange}
                      />
                      <label class="mb-0 th-sell-form-input-label mr-1">
                        Minor scratches
                      </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="inline-radio-2"
                        id="ans2"
                        value="Shaded / white dots"
                        required
                        onClick={this.toggleChange}
                      />
                      <label class="mb-0 th-sell-form-input-label">
                        Shaded / white dots
                      </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="inline-radio-2"
                        id="ans2"
                        value="Broken dead or does not work properly"
                        required
                        onClick={this.toggleChange}
                      />
                      <label class="mb-0 th-sell-form-input-label mr-1">
                        Broken dead or does not work properly
                      </label>
                    </div>
                  </div>
                </div>
                {/* question 3 */}
                <div className="mt-lg-3 mb-lg-3">
                  <div className="mb-lg-2 th-sell-form-qna-ques">
                    Q3. Device Body (Back Panel / Cover) status?
                  </div>
                  <div className="ml-4">
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="inline-radio-3"
                        id="ans3"
                        value="Flawless"
                        required
                        onClick={this.toggleChange}
                      />
                      <label class="mb-0 th-sell-form-input-label">
                        Flawless
                      </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="inline-radio-3"
                        id="ans3"
                        value="Scratched"
                        required
                        onClick={this.toggleChange}
                      />
                      <label class="mb-0 th-sell-form-input-label mr-1">
                        Scratched
                      </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="inline-radio-3"
                        id="ans3"
                        value="Cracked"
                        required
                        onClick={this.toggleChange}
                      />
                      <label class="mb-0 th-sell-form-input-label mr-1">
                        Cracked
                      </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="inline-radio-3"
                        id="ans3"
                        value="Broken"
                        required
                        onClick={this.toggleChange}
                      />
                      <label class="mb-0 th-sell-form-input-label mr-1">
                        Broken
                      </label>
                    </div>
                  </div>
                </div>
                {/* question 4 */}
                <div className="mt-lg-3 mb-lg-3">
                  <div className="mb-lg-2 th-sell-form-qna-ques">
                    Q4. Main Camera (Camera Glass) status?
                  </div>
                  <div className="ml-4">
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="inline-radio-4"
                        id="ans4"
                        value="Flawless"
                        required
                        onClick={this.toggleChange}
                      />
                      <label class="mb-0 th-sell-form-input-label">
                        Flawless
                      </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="inline-radio-4"
                        id="ans4"
                        value="Scratched"
                        required
                        onClick={this.toggleChange}
                      />
                      <label class="mb-0 th-sell-form-input-label mr-1">
                        Scratched
                      </label>
                      <input
                        class="form-check-input"
                        type="radio"
                        name="inline-radio-4"
                        id="ans4"
                        value="Blur"
                        required
                        onClick={this.toggleChange}
                      />
                      <label class="mb-0 th-sell-form-input-label">Blur</label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="inline-radio-4"
                        id="ans4"
                        value="Cracked"
                        required
                        onClick={this.toggleChange}
                      />
                      <label class="mb-0 th-sell-form-input-label mr-1">
                        Cracked Broken
                      </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="inline-radio-4"
                        id="ans4"
                        value="Broken"
                        required
                        onClick={this.toggleChange}
                      />
                      <label class="mb-0 th-sell-form-input-label mr-1">
                        Broken
                      </label>
                    </div>
                  </div>
                </div>
                {/* question 5 */}
                <div className="mt-lg-3 mb-lg-3">
                  <div className="mb-lg-2 th-sell-form-qna-ques">
                    Q5. Year of purchase ?
                  </div>
                  <div className="mt-lg-2">
                    <Form.Group>
                      <input
                        typ="text"
                        className="th-sell-form-textarea form-control"
                        onChange={this.handleChange}
                        name="ans5"
                        value={this.state.ans5}
                        required
                      />
                    </Form.Group>
                  </div>
                </div>
                {/* question 6 */}
                <div className="mt-lg-3 mb-lg-3">
                  <div className="mb-lg-2 th-sell-form-qna-ques">
                    Q6. Device has undergone repairs?
                  </div>
                  <div className="ml-4">
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="inline-radio-6"
                        id="ans6"
                        value="Yes"
                        required
                        onClick={this.toggleChange}
                      />
                      <label class="mb-0 th-sell-form-input-label">Yes</label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="inline-radio-6"
                        id="ans6"
                        value="No"
                        required
                        onClick={this.toggleChange}
                      />
                      <label class="mb-0 th-sell-form-input-label mr-1">
                        No
                      </label>
                    </div>
                  </div>
                </div>
                {/* question 7 */}
                <div className="mt-lg-3 mb-lg-3">
                  <div className="mb-lg-2 th-sell-form-qna-ques">
                    Q7. Does your device have any functional issues?
                  </div>
                  <div className="ml-4">
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="inline-radio-7"
                        id="ans7"
                        value="Yes"
                        required
                        onClick={this.toggleChange}
                      />
                      <label class="mb-0 th-sell-form-input-label">Yes</label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="inline-radio-7"
                        id="ans7"
                        value="No"
                        required
                        onClick={this.toggleChange}
                      />
                      <label class="mb-0 th-sell-form-input-label mr-1">
                        No
                      </label>
                    </div>
                  </div>
                </div>
                {/* question 8 */}
                <div className="mt-lg-3 mb-lg-3">
                  <div className="mb-lg-2 th-sell-form-qna-ques">
                    Q8. Which of these do you have ?
                  </div>
                  <ul className="th-sell-form-item-list">
                    <li>Original Earphone.</li>
                    <li>Original box with same IMEI number.</li>
                    <li>Original charger.</li>
                  </ul>
                  <div className="mt-lg-2">
                    <Form.Group>
                      <input
                        typ="text"
                        className="th-sell-form-textarea form-control"
                        onChange={this.handleChange}
                        name="ans8"
                        value={this.state.ans8}
                        required
                      />
                    </Form.Group>
                  </div>
                </div>
                {/* question 9 */}
                <div className="mt-lg-3 mb-lg-3">
                  <div className="mb-lg-2 th-sell-form-qna-ques">
                    Q9. OEN/ Brand Warranty utilized
                  </div>
                  <div className="ml-4">
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="inline-radio-9"
                        id="ans9"
                        value="0 to 3 month"
                        required
                        onClick={this.toggleChange}
                      />
                      <label class="mb-0 th-sell-form-input-label">
                        0 to 3 month
                      </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="inline-radio-9"
                        id="ans9"
                        value="3 to 10 month"
                        required
                        onClick={this.toggleChange}
                      />
                      <label class="mb-0 th-sell-form-input-label mr-1">
                        3 to 10 month
                      </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="inline-radio-9"
                        id="ans9"
                        value="more than 10 month"
                        required
                        onClick={this.toggleChange}
                      />
                      <label class="mb-0 th-sell-form-input-label mr-1">
                        more than 10 month
                      </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="inline-radio-9"
                        id="ans9"
                        value="Not available"
                        required
                        onClick={this.toggleChange}
                      />
                      <label class="mb-0 th-sell-form-input-label mr-1">
                        Not available
                      </label>
                    </div>
                  </div>
                </div>
                {/* question 10 */}
                <div className="mt-lg-3 mb-lg-3">
                  <div className="mb-lg-2 th-sell-form-qna-ques">
                    Q10. Silver Frame / Bezel (Around Screen)?
                  </div>
                  <div className="ml-4">
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="inline-radio-10"
                        id="ans10"
                        value="Discolored"
                        required
                        onClick={this.toggleChange}
                      />
                      <label class="mb-0 th-sell-form-input-label">
                        Discolored
                      </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="inline-radio-10"
                        id="ans10"
                        value="Dented"
                        required
                        onClick={this.toggleChange}
                      />
                      <label class="mb-0 th-sell-form-input-label">
                        Dented
                      </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="inline-radio-10"
                        id="ans10"
                        value="Broken"
                        required
                        onClick={this.toggleChange}
                      />
                      <label class="mb-0 th-sell-form-input-label">
                        Broken
                      </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="inline-radio-10"
                        id="ans10"
                        value="Okay"
                        required
                        onClick={this.toggleChange}
                      />
                      <label class="mb-0 th-sell-form-input-label mr-1">
                        Okay
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              {/*  */}
            </div>
            {/* mcq ends */}

            <div className="th-sell-form-item-wraper">
              <div className="th-sell-form-item-header">Faults</div>
              <ul className="th-sell-form-item-list">
                <li>Front Camera Faulty.</li>
                <li>Back Camera Faulty.</li>
                <li>Speaker Faulty.</li>
                <li> Mic Faulty.</li>
                <li>Cellular Faulty.</li>
                <li>WiFi Faulty.</li>
                <li> Bluetooth Faulty.</li>
                <li>Fingerprint Sensor Faulty.</li>
                <li> Charging Faulty.</li>
                <li>Battery Faulty.</li>
                <li>Buttons Faulty.</li>
              </ul>
              <div className="mt-lg-3">
                <Form.Group className="d-flex">
                  <textarea
                    rows="4"
                    placeholder="Choose the faults present in your product from above."
                    className="th-sell-form-textarea form-control"
                    onChange={this.handleChange}
                    onFocus={this.handleFocus}
                    name="ans11"
                    value={this.state.ans11}
                    required
                  />
                </Form.Group>
              </div>
            </div>

            <div className="th-sell-form-item-wraper">
              <div className="th-sell-form-item-header">
                Upload Product Images
              </div>
              <span style={{ color: "#3327ac" }}>(Max size 500kb)</span>
              <div className="d-flex align-items-center mt-lg-4">
                <div className="th-sell-form-image-box mr-4">
                  <img
                    id="output"
                    alt=""
                    style={{
                      width: this.state.width < 780 ? "160px" : "200px",
                    }}
                  />
                </div>
                <div className="th-sell-from-img-upload-btn">
                  <span className="th-sell-from-img-upload-circle">+</span>
                  <input
                    type="file"
                    onChange={this.onFileChange}
                    required
                    style={{ width: "60px" }}
                    accept=".png, .jpg, .jpeg"
                  />
                </div>
              </div>
              <div>
                {this.state.photoError && (
                  <span
                    style={{
                      color: "red",
                      fontSize: "20px",
                      fontFamily: "cursive",
                    }}
                  >
                    {this.state.photoError}
                  </span>
                )}
              </div>
            </div>

            <div className="th-sell-form-item-wraper">
              <div className="th-sell-form-item-header">Asked Price</div>
              <div className="mt-lg-3 mt-2">
                <Form.Group className="d-flex">
                  <span className="th-sell-form-input-label mr-4">
                    Enter Price
                  </span>
                  <input
                    type="number"
                    placeholder="₹"
                    className="th-sell-form-input-price form-control"
                    onChange={this.handleChange}
                    onFocus={this.handleFocus}
                    name="price"
                    value={this.state.price}
                  />
                </Form.Group>
              </div>
            </div>
            <div className="d-flex justify-content-center mb-4">
              <button
                type="submit"
                className="th-sell-form-post"
                onClick={this.handleSubmit}
              >
                Post
              </button>
            </div>
          </form>
        )}
      </div>
    );
  }
}

StepTwo.propTypes = {
  user: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

export default withRouter(connect(mapStateToProps)(StepTwo));
