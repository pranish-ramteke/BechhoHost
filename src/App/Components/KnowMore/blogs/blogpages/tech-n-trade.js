import React, { Component } from "react";
import TechWeb from "../../../../Assets/Images/Blogs/main/tech-and-trade.png";
import TechMob from "../../../../Assets/Images/Blogs/grid/tech-and-trade.png";

class TechAndTrade extends Component {
  state = {
    width: window.innerWidth,
  };
  render() {
    let img_url = null;
    if (this.state.width > 780) {
      img_url = TechWeb;
    } else if (this.state.width < 780) {
      img_url = TechMob;
    }

    return (
      <div className="container mt-5 mb-5 th-blog-page-mob-container">
        <div>
          <h2 className="text-center mb-3 th-blog-page-header">
            Technology and Trade
          </h2>
          <img src={img_url} className="th-blog-page-img mb-3" alt="" />
        </div>
        <div>
          <p className="th-blog-page-content">
            Trade has been happening since the birth of human civilisation.
            Findings of Indus stamps in Mesopotamia is one of the biggest proofs
            about trade back in 3000 BC. First question that might come in your
            mind is why they needed to trade anyway. So here’s one of the
            answers, whenever people find a stable place and settle there,
            there’s always an urge to procure everything you need or want, it
            doesn’t matter whether you can produce it right at that time or not.
          </p>
          <p className="th-blog-page-content">
            There are two ways to get the thing you need- produce it yourself or
            acquire from somebody who can produce. But why somebody would give
            it to you for free? Exactly! That’s how trade started. Acquire
            something you yourself can’t produce in exchange of something of
            equal value. And this is what Indus and Mesopotamian civilisations
            did, exchanging things to make their lives better in many aspects of
            life.
          </p>
          <p className="th-blog-page-content">
            So, the main objective to tell about ancient trade was to tell you
            the basic need of trade among people. Obviously all the things they
            used to trade in might not be luxury goods for most of the people
            now but many of them still are but only they are modified more now
            like jewellery, precious metals and delicacies,etc.
          </p>
          <p className="th-blog-page-content">
            The basic need and importance are understood but let’s understand
            how much it helps in globalisation even at the times of Indus
            civilisation. We’ll continue the example of ancient history so that
            you understand the concept in an easy manner. When trade happened
            back then, how would it have impacted the lives of people? First of
            all, sea routes were made so now we can actually go to long distance
            i.e. connectivity with other parts of the world. Second, different
            types of spices and flour were being exchanged i.e. delicacies
            mingled. Precious metals were traded like copper i.e. production of
            better artifacts and utensils. What do these things tell you?
            Commencement of globalisation.
          </p>
          <p className="th-blog-page-content">
            Now, we have understood the concept of trade, it’s need and it’s
            importance. But don’t you think we need to know how trading was made
            successful? Technology! Some of the proofs found tells about
            Indus-Mesopotamia trade that Indus people used to travel to
            Mesopotamia to trade and not the other way around. In the absence of
            proper roads, the only solution was the sea route and Indus people
            had the technology to construct secure boats and ships to travel to
            Mesopotamia. By 1000 BC, the domestication of camels helped early
            civilisations to travel through land which is an another innovative
            idea.
          </p>
          <p className="th-blog-page-content">
            In the modern world of advanced technology, it might come out as a
            shock how it used to be difficult to travel to other parts of the
            world and took days and even months to reach a place but this is the
            basic example to make you understand how trade can’t happen without
            technology.
          </p>
          <p className="th-blog-page-content">
            Let’s discuss the present relationship of trade and technology now.
            The present world shows how earlier technology helped in trading and
            now how technology of different fields is being traded among
            different parts of the world. Here are few statistics proving this:
          </p>
          <div>
            <ul className="th-blog-page-list">
              <li>
                The category with the highest average annual growth rate between
                2009 and 2019 was pharmacy (9.2 %).
              </li>
              <li>
                Growth rates above 5 % were also found in the imports of
                aerospace (8.7 %), electrical machinery (8.4 %), armament (7.8
                %), electronics-telecommunications (6.4 %), non-electrical
                machinery and scientific instruments (both 5.3 %).
              </li>
              <li>
                Imports of computers office machines (3.0 %) grew less strong
                while imports fell in chemistry (-0.3 %).
              </li>
            </ul>
            <label className="th-blog-page-content">
              High-tech industries are expanding most strongly in international
              trade and their dynamism helps to improve performance in other
              sectors.
            </label>
          </div>
          <p className="th-blog-page-content">
            We can’t see a world where we can’t talk to or see people from
            different parts of the world in just few seconds. The combination of
            trade and technology is what have brought humans together and closer
            and helped us to know and grasp new inventions, innovations and
            ideas and use them to make our lives better.
          </p>
        </div>
      </div>
    );
  }
}

export default TechAndTrade;
