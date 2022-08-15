import React, { Component } from "react";

class ReturnPolicy extends Component {
  render() {
    return (
      <div className="mt-lg-5 mb-lg-5 th-return-container">
        <h2 className="text-center th-return-header">Return Policy</h2>
        <div className="th-mob-return-div">
          <p className="th-return-content">
            In case the item description provided by users may not match with
            the exact item condition of devices, our buying partners may opt for
            return of item. In that case transportation charges will have to be
            borne by the user and the return process will commence within 2-3
            working days. Partial/Complete refund will have to be done by the
            user and must be initiated and completed within 2-3 business days.
          </p>
        </div>
      </div>
    );
  }
}

export default ReturnPolicy;
