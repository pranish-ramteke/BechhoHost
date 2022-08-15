import React, { Component } from "react";
import EcommerceWeb from "../../../../Assets/Images/Blogs/main/ecom-in-india.png";
import EcommerceMob from "../../../../Assets/Images/Blogs/grid/ecom-in-india.png";

class Ecommerce extends Component {
  state = {
    width: window.innerWidth,
  };
  render() {
    let img_url = null;
    if (this.state.width > 780) {
      img_url = EcommerceWeb;
    } else if (this.state.width < 780) {
      img_url = EcommerceMob;
    }
    return (
      <div className="container mt-5 mb-5 th-blog-page-mob-container">
        <div>
          <h2 className="text-center mb-3 th-blog-page-header">
            Ecommerce in India
          </h2>
          <img src={img_url} className="th-blog-page-img mb-3" alt="" />
        </div>
        <div>
          <p className="th-blog-page-content">
            From teenagers to gold-agers, everyone is on the internet now and
            always tends to make their lives easier through the internet. While
            at home, sitting on the sofa and ordering something online has
            become one of the favourite things to do these days. In this new era
            of modernisation, making everything come at your doorstep is what we
            all ever try to do. And that’s how ecommerce came into picture in
            the mid 90s. It basically means selling or buying stuff online
            through various websites across the world. From a brand new product
            to an artifact from the 13th century, everything and anything can be
            found being sold online.
          </p>
          <div>
            <label className="th-blog-page-content">
              You might think what else is there to be known about ecommerce,
              actually there is! People don’t know how big this industry in
              India is. Let’s see some statistics proving it.
            </label>
            <ul className="th-blog-page-list">
              <li>
                India’s internet economy is expected to double from US$ 125
                billion as of April 2017 to US$ 250 billion by 2020, backed
                primarily by E-commerce.
              </li>
              <li>
                India’s E-commerce revenue is expected to jump from US$ 39
                billion in 2017 to US$ 120 billion in 2020, growing at an annual
                rate of 51 per cent, the highest in the world.
              </li>
            </ul>
          </div>
          <div>
            <label className="th-blog-page-content">
              Now as we have seen how big it is, let’s talk about how it can be
              important to any financially average person in India.
            </label>
            <ul className="th-blog-page-list">
              <li>
                If you are somebody who has a startup idea about selling an
                innovated product, the best way to expand your startup into a
                widespread business in future is to attract customers and
                investors through internet.
              </li>
              <li>
                If you want to buy stuff for yourself or home and like any other
                Indian want discounts but are not Indian much to go outside and
                bargain with shopkeepers, the best way to do it would be to go
                online, find best offers on various authenticated websites and
                let the products come to your home on their own.
              </li>
              <li>
                If you need some immediate cash and find many things at home
                which are not useful for you but might be for other people, just
                go online and sell them on websites those trade in second hand
                items.
              </li>
            </ul>
            <label className="th-blog-page-content">
              So, you might understand that ecommerce is not some high level
              business gibberish but something you come across everyday in your
              life. Its not some complicated trend for youth but a highly useful
              tool for everyone to sell and buy stuff.
            </label>
          </div>
        </div>
      </div>
    );
  }
}

export default Ecommerce;
