import React from "react";
import "./loader.css";
import { connect } from "react-redux";

const Loader = ({ isLoading }) => {
  return (
    <div>
      {isLoading ? (
        <div className="th-loader-fade">
          <div
            className="th-default-spinner spinner-border  text-info"
            role="status"
          ></div>
        </div>
      ) : null}
    </div>
  );
};

const mapStateToProps = (state) => ({
  isLoading: state.auth.loading,
});

export default connect(mapStateToProps)(Loader);
