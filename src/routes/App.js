import React, { Component } from "react";
import Navbar from "../App/Layouts/Header/index";
import Footer from "../App/Layouts/Footer/index";
import BottomNav from "../App/Layouts/BottomNav/BottomNav";
import { HashRouter, Link, Route, Switch } from "react-router-dom";
import history from "../history";
import Modal from "react-bootstrap/Modal";
// import { connect } from "react-redux";
import jwt_decode from "jwt-decode";
import setAuthToken from "../utils/setAuthToken";
import { setCurrentUser } from "../redux/actions/authActions";
import PrivateRoute from "./PrivateRoute";
import store from "../store";

import Home from "../App/Screens/Home/index";
import FAQ from "../App/Screens/KnowMore/Faq";
import AboutUs from "../App/Screens/KnowMore/aboutUs";
import Blogs from "../App/Screens/KnowMore/blogs";
import Career from "../App/Screens/KnowMore/carrer";
import PrivacyPolicy from "../App/Screens/KnowMore/privacyPolicy";

import ReturnPolicy from "../App/Screens/KnowMore/returnPolicy";
import TermsAndConditions from "../App/Screens/KnowMore/TermsAndConditions";

import BuyerTerms from "../App/Screens/MakeMoney/BuyerTerms";
import SellerTerms from "../App/Screens/MakeMoney/SellerTerms";
import Advertise from "../App/Screens/MakeMoney/Advertise";
import Affiliate from "../App/Screens/MakeMoney/Affiliate";
import BecomePartner from "../App/Screens/MakeMoney/BecomePartner";

// products
import Products from "../App//Screens/Products/index";

// categories
import Category from "../App/Screens/Category/index";
import CategoryListMobile from "../App/Components/Category/MobCategories";
// my account items
import MyProfile from "../App/Layouts/MyAccount/MyProfile";
import MyBids from "../App/Layouts/MyAccount/MyBids";
import MyItems from "../App/Layouts/MyAccount/MyItems";
import Sell from "../App/Layouts/MyAccount/sellBeta/StepOne";
// my account items ends
import Testimonial from "../App/Components/Testimonial/Testimonial";
import Ecommerce from "../App/Components/KnowMore/blogs/blogpages/e-commerce";
import ReCommerce from "../App/Components/KnowMore/blogs/blogpages/re-commerce";
import EarnFromHome from "../App/Components/KnowMore/blogs/blogpages/earn-from-home";
import LockdownAndIncome from "../App/Components/KnowMore/blogs/blogpages/lockdown-and-income";
import TechAndtrade from "../App/Components/KnowMore/blogs/blogpages/tech-n-trade";
import RecomSectorAnalysis from "../App/Components/KnowMore/blogs/blogpages/recom-sector";
import MarketingInEcom from "../App/Components/KnowMore/blogs/blogpages/marketinginecom";
import Signin from "../App/Components/Auth/signin/index";
import Signup from "../App/Components/Auth/signup/index";
import Team from "../App/Screens/Team/index";
import Loader from "../App/Loader/index";
import ComingSoon from "../App/Components/ComingSoon/index";
import PageNotFound from "../App/Components/404/404";

const Page404 = ({ location }) => (
  <Modal size="lg" show="true" centered style={{ background: "#808080" }}>
    <div style={{ textAlign: "center", color: "#319788", fontSize: "1em" }}>
      <PageNotFound />
      <h2 className="mt-2" style={{ fontSize: "24px" }}>
        No match found for <code>{location.pathname}</code>
      </h2>
      <Link to="/">
        <span className="mb-2"> Go back</span>
      </Link>
    </div>
  </Modal>
);

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
}

class App extends Component {
  render() {
    return (
      <div>
        <HashRouter history={history}>
          <Loader />
          <Navbar />
          <BottomNav />
          <Switch>
            <Route exact path={["/home", "/"]} component={Home} />
            <Route exact path="/faq" component={FAQ} />
            <Route exact path="/about-us" component={AboutUs} />
            <Route exact path="/blogs" component={Blogs} />
            <Route exact path="/career" component={Career} />
            <Route exact path="/privacy-policy" component={PrivacyPolicy} />
            <Route exact path="/return-policy" component={ReturnPolicy} />
            <Route exact path="/terms" component={TermsAndConditions} />
            <Route exact path="/buyer-terms" component={BuyerTerms} />
            <Route exact path="/seller-term" component={SellerTerms} />
            <Route exact path="/advertise" component={Advertise} />
            <Route exact path="/affiliate" component={Affiliate} />
            <Route exact path="/become-partner" component={BecomePartner} />
            <Route exact path="/products/:id" component={Products} />
            <Route exact path="/category" component={Category} />
            <Route exact path="/categorylist" component={CategoryListMobile} />
            {/* private routes */}
            <PrivateRoute exact path="/sell" component={Sell} />
            <PrivateRoute exact path="/my-bids" component={MyBids} />
            <PrivateRoute exact path="/my-items" component={MyItems} />
            <PrivateRoute exact path="/my-profile" component={MyProfile} />
            {/*  */}
            <Route exact path="/testimonials" component={Testimonial} />
            <Route exact path="/blogs/ecommerce" component={Ecommerce} />
            <Route exact path="/blogs/recommerce" component={ReCommerce} />
            <Route exact path="/blogs/earnfromhome" component={EarnFromHome} />
            <Route exact path="/blogs/techntrade" component={TechAndtrade} />
            <Route
              exact
              path="/blogs/recom-sector"
              component={RecomSectorAnalysis}
            />
            <Route
              exact
              path="/blogs/marketing-in-ecom"
              component={MarketingInEcom}
            />
            <Route
              exact
              path="/blogs/lockdownandincome"
              component={LockdownAndIncome}
            />

            <Route exact path="/signin" component={Signin} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/comingsoon" component={ComingSoon} />
            <Route exact path="/team" component={Team} />
            {/* last route */}
            <Route component={Page404} />
          </Switch>
          <Footer />
        </HashRouter>
      </div>
    );
  }
}

export default App;
