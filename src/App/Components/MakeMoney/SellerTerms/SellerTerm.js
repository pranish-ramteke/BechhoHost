import React, { Component } from "react";

class SellerTerms extends Component {
  render() {
    return (
      <div className="mt-lg-5 mb-lg-5 th-seller-term-container">
        <h2 className="text-center th-seller-term-header">Seller Terms </h2>
        <div>
          <ul className="th-seller-term-list">
            <li>
              We charge a fee directly tied to the sale of items through Our
              marketplace Service. Additional fees may be charged by third
              parties related to the Services, such as PayPal fees, taxes, etc.
            </li>
            <li>
              We encourage both buyers and sellers to use a method of payment
              that provides security and payment protection. Buyers and sellers
              who choose to use an unprotected payment method agree to accept
              any risk of order non-delivery, damage, or mis-grading.
            </li>
            <li>
              Buyers and sellers will communicate directly with each other to
              resolve any and all issues via the order page, using professional
              and courteous language at all times.
            </li>
            <li>
              Sellers will respond to buyer questions left on the order page
              within four days. Failure to do this, may result in an account
              deactivation.
            </li>
            <li>
              Sellers are not permitted to charge buyers fees for the use of
              PayPal or any form of payment processing. Any handling fees should
              be included in the cost of shipping. Buyers will only be
              responsible for paying the listed price of items plus taxes,
              shipping and shipping add-ons, such as tracking or insurance, that
              are stated in the Seller Terms. No charges may be added as a
              percentage to the order total, with the exception of taxes as
              required by law. Asking the buyer to send a PayPal or any other
              payment as a "gift" or "personal payment" is not permitted.
            </li>
            <li>
              Sellers who are required to charge VAT on sales may not add VAT to
              the price of items after they are purchased through the Service.
              If We are required to charge VAT on Seller sales fees, then the
              Seller is also not allowed to add this charge to the price of
              items after purchase.
            </li>
            <li>
              Once an order is received, the seller will add the shipping charge
              and update the order status to "Invoice Sent" within 12 hours of
              when the order is placed.
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default SellerTerms;
