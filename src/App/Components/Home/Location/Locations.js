import React, { Component } from "react";
import { connect } from "react-redux";
import { setCurrentCityByUser } from "../../../../redux/actions/locationActions";
import PropTypes from "prop-types";
import Delhi from "../../../Assets/Images/Home/Delhi.png";
import Noida from "../../../Assets/Images/Home/Noida.png";
import Gurgaon from "../../../Assets/Images/Home/Gurgaon.png";
import Bangalore from "../../../Assets/Images/Home/Bangalore.png";
import Pune from "../../../Assets/Images/Home/Pune.png";
// import Kolkata from "../../../Assets/Images/Home/Kolkata.png";

class Locations extends Component {
  state = {
    width: window.innerWidth,
  };

  handleLocation = (city) => {
    this.props.setCurrentCityByUser(city);
    console.log(city);
  };

  render() {
    return (
      <div>
        {this.state.width > 768 ? (
          <div className="th-locations-container d-flex justify-content-around align-items-center mt-md-5 mb-md-5">
            <div className="th-locations-header">Preferred Locations</div>
            <div
              className=" text-center"
              onClick={() => this.handleLocation("Delhi")}
            >
              <img src={Delhi} alt="" className="th-locations-circle" />
              <p className="mt-md-2 th-location-city">Delhi</p>
            </div>
            <div
              className=" text-center"
              onClick={() => this.handleLocation("Noida")}
            >
              <img src={Noida} alt="" className="th-locations-circle" />
              <p className="mt-md-2 th-location-city">Noida</p>
            </div>
            <div
              className=" text-center"
              onClick={() => this.handleLocation("Gurugram")}
            >
              <img src={Gurgaon} alt="" className="th-locations-circle" />
              <p className="mt-md-2 th-location-city">Gurgaon</p>
            </div>
            <div
              className=" text-center"
              onClick={() => this.handleLocation("Bangalore")}
            >
              <img src={Bangalore} alt="" className="th-locations-circle" />
              <p className="mt-md-2 th-location-city">Bangalore</p>
            </div>
            <div
              className=" text-center"
              onClick={() => this.handleLocation("Pune")}
            >
              <img src={Pune} alt="" className="th-locations-circle" />
              <p className="mt-md-2 th-location-city">Pune</p>
            </div>
            {/* <div className=" text-center">
              <img src={Kolkata} alt="" className="th-locations-circle" />
              <p className="mt-md-2 th-location-city">Kolkata</p>
            </div> */}
          </div>
        ) : null}
      </div>
    );
  }
}

Locations.propTypes = {
  setCurrentCityByUser: PropTypes.func.isRequired,
  city: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  city: state.location.city,
  user: state.auth.user,
});

export default connect(mapStateToProps, {
  setCurrentCityByUser,
})(Locations);
