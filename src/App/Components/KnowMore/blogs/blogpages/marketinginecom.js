import React, { Component } from "react";
import MarketingInEcomWeb from "../../../../Assets/Images/Blogs/main/marketing-and-ecommerce.png";
import MarketingInEcomMob from "../../../../Assets/Images/Blogs/grid/marketing-and-ecommerce.png";

class MarketingInEcom extends Component {
  state = {
    width: window.innerWidth,
  };
  render() {
    let img_url = null;
    if (this.state.width > 780) {
      img_url = MarketingInEcomWeb;
    } else if (this.state.width < 780) {
      img_url = MarketingInEcomMob;
    }

    return (
      <div className="container mt-5 mb-5 th-blog-page-mob-container">
        <div>
          <h2 className="text-center mb-3 th-blog-page-header">
            Marketing in Ecommerce.
          </h2>
          <img src={img_url} className="th-blog-page-img mb-3" alt="" />
        </div>
        <div>
          <p className="th-blog-page-content">
            Most of the people know what online trading is but they don’t know
            what Ecommerce is. In layman terms, Ecommerce is the online trading.
            In easier terms, Ecommerce is online selling and buying of goods or
            services using internet and transfer of money and data to execute
            the transactions.
          </p>
          <p className="th-blog-page-content">
            For some people, it might be a new concept in the times of pandemic
            but Ecommerce has been prevalent in almost every industry since the
            beginning of 21st century. People sell or buy items from other
            people or companies on authenticated websites. Now let’s see how
            prevalent and deeper it has gone in every aspect of our lives in the
            present times with some facts and figures from a survey done:
          </p>

          <div>
            <ul className="th-blog-page-list">
              <li>
                With e-retail sales accounting for 14.1% of all retail sales
                worldwide, ecommerce continues to grow at a speedy rate despite
                global economic uncertainty.
              </li>
              <li>
                Experts predict that retail ecommerce sales will reach $4.13
                trillion in 2020.
              </li>
              <li>There are over 2 billion digital buyers in the world.</li>
              <li>
                A third of the interviewed consumers purchase products online
                once a week or more frequently.
              </li>
              <li>
                It is expected that mobile commerce will take a market share of
                ecommerce of 72.9% by 2021.
              </li>
              <li>India is currently the fastest growing ecommerce market</li>
            </ul>
          </div>
          <p className="th-blog-page-content">
            From these facts and figures, you can realise how much profitable it
            is to do a trade online. Be it electronic goods or clothes, kitchen
            utensils or jewellery, you can find and buy anything, anywhere and
            anytime.
          </p>
          <p className="th-blog-page-content">
            Now, if you are a businessman and want to expand your trade, the
            best way to do it is to connect your business to the internet and
            sell or buy things online and attract customers from all over the
            world. Even if you are someone who just wants to sell something from
            your home, Ecommerce is a really powerful tool to establish and
            monetize your work.
          </p>
          <p className="th-blog-page-content">
            You have gotten a clear idea about what Ecommerce is. Now, what is
            ecommerce marketing? Broad idea is driving awareness about your
            service/product online to attract more and more customers. There are
            many ways to do marketing in Ecommerce like social media, search
            engines, email campaigns and digital content. We’ll discuss about
            all these further in details one by one.
          </p>
          <p className="th-blog-page-content">
            First comes our social media platform. Social media’s marketing is
            like a wildfire. One small ignition can takes months to die down,
            just like that once your service/product gets some popularity with
            the help of influencing pages, the word will be spread everywhere in
            just days, it just needs proper marketing like you can create an
            Instagram page about your services/product or you can place display
            ads on Instagram or you can promote your services/product on social
            influencers’ or a celebrity’s page.
          </p>
          <p className="th-blog-page-content">
            Then comes the search engines campaigns. There are mainly two ways
            to use search engines for promotions and campaign, one is SEO
            (Search Engine Optimization) and other is paid advertising. SEO
            refers to use of commonly used or asked words and phrases on
            browsers on your website to optimize your website according to web
            browser’s algorithms and bring your website at the top when searched
            about something related to your website, it is one of the best
            techniques to gain users and customers without paying anything.
            Other than this, you can pay for your advertisements on search
            engines.
          </p>
          <p className="th-blog-page-content">
            Third is email campaigns, use of email to advertise or promote
            something is a very old practice but still one of the successful
            ways to attract people towards your services/product because you are
            directly connecting to people and can give detailed information and
            explain features which you might not be able to do with paid ads.
          </p>
          <p className="th-blog-page-content">
            And the newest strategy is the digital content. Write and post
            suitable blogs directly or indirectly connecting it to your
            services/product. Post videos on youtube explaining why they should
            pay for your product/services and how to use them. With the help of
            comments from people, you can realise what more people want and what
            you can do to make your services/product better. Replying to
            people’s queries helps in building trust which is also an indirect
            way to promote your product.
          </p>
        </div>
      </div>
    );
  }
}

export default MarketingInEcom;
