import React, { Component } from "react";

class BuyerTerms extends Component {
  render() {
    return (
      <div className="mt-lg-5 mb-lg-5 th-buyer-term-container">
        <h2 className="text-center th-buyer-term-header">Buyer Terms</h2>
        <div>
          <ul className="th-buyer-term-list">
            <li>
              Buyers will review and agree to the “Seller Terms” (as described
              below) before placing an order. If the Seller Terms are in an
              unfamiliar language, we recommend using a translation application
              like translate.google.com.
            </li>
            <li>
              When an order is placed, the buyer agrees to accept the Seller
              Terms and provide payment in full within time of receiving the
              article purchased. Failure to do this may result in an order
              cancellation.
            </li>
            <li>
              We encourage both buyers and sellers to use a method of payment
              that provides security and payment protection. Buyers and sellers
              who choose to use an unprotected payment method agree to accept
              any risk of order non-delivery, damage, or mis-grading.
            </li>
            <li>
              Buyers and sellers are expected to comply with all rules set by
              their accepted payment methods, including requirements for refunds
              and returns.
            </li>
            <li>
              Buyers and sellers will communicate directly with each other to
              resolve any and all issues via the order page, using professional
              and courteous language at all times.
            </li>
            <li>
              Buyers are responsible for any and all customs fees, import taxes,
              or other delivery-related charges once the item has been shipped.
            </li>
            <li>
              Buyers are responsible for providing an accurate shipping address.
              Since payment providers, such as PayPal, will only provide seller
              protection if the order is shipped to the address listed with the
              buyer's payment provider, sellers may cancel an order if the
              buyer's shipping information listed in the Service does not match
              what is listed with their payment provider. If a seller cancels an
              order for this reason, they may request Us to remove order
              feedback.
            </li>
            <li>
              If, as a buyer, you are unhappy with your purchase, please do the
              following no later than 60 days after the order has Shipped
            </li>
            <li>
              Before leaving feedback, use the order page to notify the seller,
              then allow the seller four days to respond with a proposed
              solution.
            </li>
            <li>
              If you and the seller cannot agree on a solution, open a dispute
              with your payment provider. Keep in mind, We encourage both buyers
              and sellers to use a method of payment that provides security and
              payment protection. Buyers and sellers who choose to use an
              unprotected payment method agree to accept any risk of order
              non-delivery, damage, or mis-grading.
            </li>
            <li>
              If the seller does not respond in four days, you can use the
              Seller Not Responding feature to send a notification to the
              seller. When the “Seller Not Responding” feature is used, We are
              notified of the situation. Sellers with a clear history of not
              responding to orders, or not providing mutually agreed upon
              solutions may be suspended or removed from the Service.
            </li>
            <li>
              If the seller responds, but does not provide a mutually agreeable
              solution, you (buyer) should open a dispute with your payment
              provider.
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default BuyerTerms;
