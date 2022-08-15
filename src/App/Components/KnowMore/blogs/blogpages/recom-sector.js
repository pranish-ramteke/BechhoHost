import React, { Component } from "react";
import RecomSectorAnalysisWeb from "../../../../Assets/Images/Blogs/main/recomerce-sector-analysis.png";
import RecomSectorAnalysisMob from "../../../../Assets/Images/Blogs/grid/recomerce-sector-analysis.png";

class RecomSectorAnalysis extends Component {
  state = {
    width: window.innerWidth,
  };
  render() {
    let img_url = null;
    if (this.state.width > 780) {
      img_url = RecomSectorAnalysisWeb;
    } else if (this.state.width < 780) {
      img_url = RecomSectorAnalysisMob;
    }

    return (
      <div className="container mt-5 mb-5 th-blog-page-mob-container">
        <div>
          <h2 className="text-center mb-3 th-blog-page-header">
            Recommerce Sector Analysis
          </h2>
          <img src={img_url} className="th-blog-page-img mb-3" alt="" />
        </div>
        <div>
          <p className="th-blog-page-content">
            If you are reading this blog, then you’d have a fair idea about what
            Recommerce is. In layman language, it means selling and buying
            second hand merchandise on the internet effectively. Whatever you
            want to buy or sell, can be done online easily on a Recommerce
            website or a social media platform.
          </p>
          <p className="th-blog-page-content">
            But what is sector analysis? Sector analysis is an assessment of the
            economic and financial condition and prospects of a given sector of
            the economy. In easy terms, it means if you want to have a clear
            judgement on the growth of a particular company, you need to compare
            the company’s performance with its competitors in their respective
            sector or you can call it their field of work to see how well the
            company is doing economically and financially. Obviously, analysis
            can’t give you a discrete answer but will give you a rough idea
            about the company’s functioning.
          </p>

          <p className="th-blog-page-content">
            How analysis is done? Annual reports and balance sheets are audited,
            valuation ratios are checked and stocks are reviewed. But, this is
            all for a company and we are talking about Recommerce. So, analysis
            of Recommerce is done by estimating the future growth of Recommerce
            around the world with the help of present facts and figures.
          </p>

          <div>
            <label className="th-blog-page-content">
              Now, let’s see some of the facts and figures related to
              Recommerce:
            </label>
            <ul className="th-blog-page-list">
              <li>
                The annual growth of the global recommerce industry is expected
                to be 12.5% or greater.
              </li>
              <li>
                Recommerce websites have seen traffic increases of over 1400%
                since 2009. The most popular recommerce sites charge nothing to
                sell items.
              </li>
              <li>
                Amazon began its recommerce business initiative to provide a key
                component to profitability. The industry experiences return
                rates of up to 25%.
              </li>
              <li>
                Recommerce as an industry is expected to double in size over the
                next 5 years.
              </li>
              <li>
                According to ThreadUP’s 2019 Resale Report, millennials and Gen
                Z are driving much of the growth of online selling sites. They
                are adopting second hand clothing 2.5 times faster than other
                age groups!
              </li>
            </ul>
          </div>
          <p className="th-blog-page-content">
            Just like Ecommerce, Recommerce is a fast growing industry.
            Businesses and brands embrace recommerce to improve revenues and
            reduce waste. Individuals embrace recommerce as a way to make ends
            meet. Either way, this industry is going to be around for a long,
            long time.
          </p>
          <p className="th-blog-page-content">
            The major reason of this industry’s growth are modernisation and
            advancement in technology. With the help of smart phones, laptops
            and most importantly easy availability internet the trend of both
            ecommerce and recommerce has grown in the past few years. The
            Government of India's policies and regulatory frameworks such as 100
            per cent foreign direct investment (FDI) in B2B e-commerce and
            recommerce and 100 per cent FDI under automatic route under the
            market place model of B2C e-commerce recommerce are expected to
            further propel growth in the sectors.
          </p>
          <p className="th-blog-page-content">
            Why Recommerce will continue to grow in coming future? Younger
            generations especially Gen Z tend to be passionate about the
            environment and sustainability as a whole. As such, recommerce is
            going to continue to play a prominent role in their consumer
            decisions. In fact, nearly one-third of Generation Z expects to buy
            one secondhand clothing item, shoe or accessory in 2020 alone.
          </p>
          <p className="th-blog-page-content">
            A big part of recommerce is supply and demand. The internet opens up
            the possibility for something that’s highly sought after in one
            place to be met by someone somewhere else. If denim jackets are
            popular in a city but someone in rural Oklahoma knows where there’s
            a ton at their local Goodwill, being able to create that supply
            chain to make a profit has never been easier.
          </p>
          <p className="th-blog-page-content">
            Whether you’re an individual or company, you have an opportunity to
            get involved in recommerce, and start and develop an ecommerce
            store. Research the market and explore your interests — you could be
            reselling in no time.
          </p>
        </div>
      </div>
    );
  }
}

export default RecomSectorAnalysis;
