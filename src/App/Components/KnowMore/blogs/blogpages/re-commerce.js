import React, { Component } from "react";
import ReCommerceWeb from "../../../../Assets/Images/Blogs/main/recom-in-india.png";
import ReCommerceMob from "../../../../Assets/Images/Blogs/grid/recom-in-india.png";

class ReCommerce extends Component {
  state = {
    width: window.innerWidth,
  };
  render() {
    let img_url = null;
    if (this.state.width > 780) {
      img_url = ReCommerceWeb;
    } else if (this.state.width < 780) {
      img_url = ReCommerceMob;
    }

    return (
      <div className="container mt-5 mb-5 th-blog-page-mob-container">
        <div>
          <h2 className="text-center mb-3 th-blog-page-header">
            Re-commerce in India
          </h2>
          <img src={img_url} className="th-blog-page-img mb-3" alt="" />
        </div>
        <div>
          <p className="th-blog-page-content">
            We know a lot of concepts but don’t know what they are actually
            called and one of them is Recommerce. The ability to sell and buy
            used merchandise and commodities online is the easiest definition of
            Recommerce. From branded clothes to jewellery and from electronic
            gadgets to books, everything can be and are sold as second hand
            products and bought smoothly, specially by millennials and
            Generation Z.
          </p>
          <p className="th-blog-page-content">
            One of the misconceptions about Recommerce is it being a new concept
            which is not completely true, this concept was commercialised a long
            time ago but not on a global level. But now, merchants in Recommerce
            industry is growing 20 times faster than retail market.
          </p>
          <p className="th-blog-page-content">
            But, it hasn’t been easy to sell used items in the beginning. In
            2013, there was a 69% fail rate for selling items through online
            auctions. A similar failure rate occurred when individuals were
            selling items directly from a vehicle or their home.
          </p>
          <div>
            <label className="th-blog-page-content">
              But now, the things have completely changed. In fact, some
              statistics show some winsome figures of current online Recommerce
              industry.
            </label>
            <ul className="th-blog-page-list">
              <li>
                Recommerce has been outperforming traditional retail for the
                past six years, with a forecast revenue of $20 billion for 2019.
              </li>
              <li>
                Recommerce companies are already a hot trend with Generation Z
                and millennials, and the market is estimated to skyrocket in
                value to $51 billion by 2023.
              </li>
              <li>
                40% of consumers now consider the so-called ‘resale’ value of an
                item before they purchase.
              </li>
            </ul>
          </div>

          <div>
            <label className="th-blog-page-content">
              If you are a nature loving enthusiast, here are some facts which
              might blow you:
            </label>
            <ul className="th-blog-page-list">
              <li>
                Nearly 100 percent of textiles and clothing are recyclable and
                reusable.
              </li>
              <li>
                Compared to disposal in landfills or by incinerators, reusing or
                recycling computers can create 296 more jobs per year for every
                10,000 tons of computer waste processed.
              </li>
              <li>
                By recycling 1 million cell phones, more than 35,000 pounds of
                copper, 33 pounds of palladium, 772 pounds of silver, and 75
                pounds of gold can be recovered.
              </li>
            </ul>
          </div>
          <p className="th-blog-page-content">
            All these facts and figures may give you an indirect hint about how
            much Recommerce can be significant in saving the environment we live
            in.
          </p>
          <p className="th-blog-page-content">
            One of the other helpful features of Recommerce is space saving.
            There are so many things at our homes taking up a lot of space in
            our closets and store rooms but at the same time don’t want to throw
            them for nothing. So, rather than letting such things become a pile
            of junk sitting in our house in near future, why not to make it a
            way of earning.
          </p>
          <p className="th-blog-page-content">
            If this blog has convinced you to resell things online but don’t
            know how to do it, we’ll help you in that too! First of all, choose
            the things you can actually sell really fast and click appealing
            pictures of them. Make sure the stuff you want to sell have a
            market.If you are selling clothes, make sure its the current season
            clothes otherwise they won’t attract much people. After choosing the
            merchandise, find a suitable recommerce website preferably a website
            which will make it easier to find customers in your region quicker
            and make the trade happen in less time. Upload the pictures on that
            website and wait for the genuine buyers to contact you.
          </p>
          <p className="th-blog-page-content">
            It’s not a new trend but need of the hour. Recommerce is not just a
            voluntary service but a way to earn money as well. It’s the best way
            towards consumerism with a much healthier approach.
          </p>
        </div>
      </div>
    );
  }
}

export default ReCommerce;
