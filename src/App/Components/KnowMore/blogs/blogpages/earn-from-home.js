import React, { Component } from "react";
import EarnFromHomeWeb from "../../../../Assets/Images/Blogs/main/earn-from-home.png";
import EarnFromHomeMob from "../../../../Assets/Images/Blogs/grid/earn-from-home.png";

export class EarnFromHome extends Component {
  state = {
    width: window.innerWidth,
  };
  render() {
    let img_url = null;
    if (this.state.width > 780) {
      img_url = EarnFromHomeWeb;
    } else if (this.state.width < 780) {
      img_url = EarnFromHomeMob;
    }
    return (
      <div className="container mt-5 mb-5 th-blog-page-mob-container">
        <div>
          <h2 className="text-center mb-3 th-blog-page-header">
            Earn from home
          </h2>
          <img src={img_url} className="th-blog-page-img mb-3" alt="" />
        </div>
        <p className="th-blog-page-content">
          The modern world is all about smartwork and not hard work. If you
          can’t do smartwork then you are not considered an asset anywhere. One
          thing that always knocks the door of our mind while thinking about
          smartwork is how to make easy money. But always brush it off thinking
          what can be done anyway.
        </p>
        <p className="th-blog-page-content">
          Few things can actually be done, thanks to Internet. There are so many
          things that we can do online. From grasping new information to
          studying for school, from buying to selling and from communication to
          entertainment purposes, everything can be found on internet while
          sitting at home. Then why not to use it to get some easy cash without
          stepping out anywhere.
        </p>
        <p className="th-blog-page-content">
          Let’s first make you determined about smart earning while sitting at
          your sofa. First step is to understand the concept. Many times it is
          confused with work from home. They are quite similar but not exactly
          same. Earn from home is not directly connected to one’s career, but a
          part of extra money you can earn. You might be doing a job and at the
          same time you can earn money online at home. This doesn’t necessarily
          mean you can’t work and earn both from home. If you are working from
          home, you can still take advantage of earning few extra bucks from
          home.
        </p>
        <p className="th-blog-page-content">
          There are many ways to earn money while pursuing your career at the
          same time like freelancing, content writing, blogging, vlogging and
          many more. But the problem with all these ways is they need skills,
          time and most importantly passion.
        </p>
        <p className="th-blog-page-content">
          If you have the right amount of time, passion and resources then go
          for it. But if you are already having a hectic schedule with your work
          and your family and friends, you might not get time and even strength
          to start doing anything else than relaxing in the break time.
        </p>
        <p className="th-blog-page-content">
          So what to do now? One of the best techniques to be a smart worker is
          to sell things from home. But what can you sell while sitting at home?
          Maybe you can learn cooking or baking and sell food items in your
          neighbourhood but still you don’t have the time to learn cooking or
          even if you know, you can’t take out time to cook, so basically it is
          back to square one. The problem is you can’t invest resources to earn
          extra from home.
        </p>
        <p className="th-blog-page-content">
          The real question is what to sell while sitting at home and don’t have
          to invest your time into it at the same time. What if you get to know
          a way to sell something without investing something? Then why not to
          utilise the already existing things at your home as resources. That
          would be the best. So, here is the solution to the question. Resale!
          Once you look carefully around you in your home and you’ll see so many
          things that you don’t need or use anymore and might actually get you
          some fair cash for them.
        </p>
        <p className="th-blog-page-content">
          So it’s clear now that you can earn extra money while sitting on the
          sofa by selling the things that might become a pile of junk and get
          thrown away for nothing after a while or may go to your store room for
          eternity. They aren’t useful for you right now but after some time
          they might not even be useful for anyone. Cash them out when you
          really can!
        </p>
        <p className="th-blog-page-content">
          The next step towards earning easy money to sell these things now.
          Where to sell it? Is online better or offline? If you think offline,
          going to nearby stores, pondering over their biddings for the whole
          day and wasting days on this is not smartwork at all as the whole
          point was to earn while not stepping out from your home. Sticking to
          online is better than good where you can find so many websites which
          deal with second hand merchandise and items.
        </p>
        <p className="th-blog-page-content">
          Choose the best re-commerce website which deals in all the second hand
          stuff in your city and find you buyers living near you or in your
          region. Buyers might be a store or a person, it won’t matter if they
          provide good biddings for the trade to happen. Post your items’
          pictures on the website, choose the best bidding and make the trade
          happen maybe in just 24 hours.
        </p>
        <p className="th-blog-page-content">
          So, be a smart person and sell the things you don’t want anymore and
          get some fair cash out of it which you might use right there or save
          for future purposes.
        </p>
      </div>
    );
  }
}

export default EarnFromHome;
