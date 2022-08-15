import React, { Component } from "react";
import LockdownAndIncomeWeb from "../../../../Assets/Images/Blogs/main/lockdown-and-income.png";
import LockdownAndIncomeMob from "../../../../Assets/Images/Blogs/grid/lockdown-and-income.png";

class LockdownAndIncome extends Component {
  state = {
    width: window.innerWidth,
  };
  render() {
    let img_url = null;
    if (this.state.width > 780) {
      img_url = LockdownAndIncomeWeb;
    } else if (this.state.width < 780) {
      img_url = LockdownAndIncomeMob;
    }
    return (
      <div className="container mt-5 mb-5 th-blog-page-mob-container">
        <div>
          <h2 className="text-center mb-3 th-blog-page-header">
            Lockdown and Income
          </h2>
          <img src={img_url} className="th-blog-page-img mb-3" alt="" />
          <i>
            “We now have a unique opportunity to use this crisis to do things
            differently and build back better economies that are more
            sustainable, resilient and inclusive.”
          </i>
        </div>
        <p className="th-blog-page-content mt-2">
          While celebrating new year eve’s party, no one would have thought the
          year 2020 will become such a curse for us in every aspect of our
          lives. Be it globally or locally, COVID-19 has weaken us financially,
          economically and emotionally. To reduce the spread of the disease,
          most of the countries resorted to the solution of lockdown and
          quarantine at home. From last six months, staying at home and only
          going out for emergencies has made us feel caged in the beginning but
          now we are trying to accept the ‘new normal’.
        </p>
        <p className="th-blog-page-content">
          While people are on the two sides discussing whether the lockdown has
          been successful or not especially in India, the main thing to think
          about is how to make our lives economically stable now. You may think
          if the lockdown really impacted our lives financially, but you need to
          understand if you or your family never faced a damaging impact it
          doesn’t mean it impacted no one.
        </p>
        <div>
          <label className="th-blog-page-content">
            Here are some facts proving the damaging after effects of COVID-19
            and ultimately the lockdown:
          </label>
          <ul className="th-blog-page-list">
            <li>
              Unemployment went up to 24 percent on May 17, 2020. Furthermore,
              this caused a GVA loss of more than nine percent for the Indian
              economy that month.
            </li>
            <li>
              Among the agencies that estimated growth, Bernstein predicted a
              contraction of seven percent, while the Asian Development Bank
              foreseeing a growth of four percent. India recorded a growth of
              4.2 percent in the previous fiscal year, the slowest in 11 years.
            </li>
            <li>
              There was a significant decrease in the level of income with
              households reporting a fall in income from about nine percent in
              late February to a whopping 45.7 percent in mid April.
            </li>
            <li>
              People between the ages of 20 and 44 were most impacted by the
              coronavirus (COVID-19) lockdown in India during April 2020 based
              on job loss. Over 14 percent of people between ages 40 and 44 lost
              their jobs in April.
            </li>
            <li>
              The number of people employed was most impacted by the coronavirus
              (COVID-19) lockdown in India which was around 280 million people
              in April 2020. This was a significant decrease in employment from
              the previous month of March with about 396 million employed people
              in the country.
            </li>
          </ul>
        </div>
        <p className="th-blog-page-content">
          You can see how much the COVID-19 has impacted directly and
          indirectly. So, you need to make sure if you are unemployed or prone
          to it, how to have a stable income while sitting at home. It might not
          be a huge amount but as you know
          <i> something is better than nothing.</i>
        </p>
        <p className="th-blog-page-content">
          First, you need to decide what you want to do and if you want to
          pursue it as a long term job for yourself or you want to make it short
          term. You can continue doing what you used to do at your workplace but
          on an individual level at your home like if you are a chef then start
          doing home delivery, if you are a software developer then start
          working as a freelancer, if you are in marketing and advertisements
          you can take small projects from new businesses while sitting at home.
        </p>
        <p className="th-blog-page-content">
          The other way to have continuous income in this pandemic is to pursue
          an untouched passion and try to make it economical. If you are a
          sketch artist you can take paid orders from people, same thing can be
          done with cooking or rather than delivering items why not to take help
          of Internet. Content creating is the modern art these days, be it
          vlogging, blogging, educational videos, etc.
        </p>
        <p className="th-blog-page-content">
          One way to make easy one time money is to sell things from home. There
          would be so many things around you don’t need anymore but may turn out
          to be really handy for other people in your neighbourhood or in your
          city or town. Such easy income can be really helpful for you in this
          crucial time where you can be in the middle of an emergency anytime
          and anywhere.Try selling things on recommerce websites and get cash
          for it while sitting at your home. So be smart and try new ways to get
          some financial help rather than waiting for a conventional way to open
          for you.
        </p>
      </div>
    );
  }
}

export default LockdownAndIncome;
