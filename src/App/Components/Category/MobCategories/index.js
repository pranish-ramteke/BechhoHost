import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Accesories from "../../../Assets/Images/Categories/Accesories.png";
import Bags from "../../../Assets/Images/Categories/Bags.png";
import Eateries from "../../../Assets/Images/Categories/Eateries.png";
import Electronics from "../../../Assets/Images/Categories/Electronics.png";
import Fashion from "../../../Assets/Images/Categories/Fashion.png";
import Gifts from "../../../Assets/Images/Categories/Gift.png";
import Shoe from "../../../Assets/Images/Categories/Shoe.png";

import {
  FashionList,
  AccesoriesList,
  BagsList,
  EateriesList,
  GiftsList,
  ShoeList,
  ElectronicsList,
} from "./data";

import Card from "./card";

class CategoryListMob extends Component {
  state = { width: window.innerWidth };
  render() {
    return (
      <div>
        {this.state.width < 760 ? (
          <div className="container th-mob-category-list">
            <div className=" th-mob-category-list-header ml-2">
              Shop By Category
            </div>
            <div className="th-mob-category-list-wraper pt-3 pb-3 pl-5 pr-5">
              <Card img={Fashion} category="Fashion" list={FashionList} />
              <Card
                img={Electronics}
                category="Electronics"
                list={ElectronicsList}
              />
              <Card img={Shoe} category="Shoes" list={ShoeList} />
              <Card img={Eateries} category="Eateries" list={EateriesList} />
              <Card img={Bags} category="Bags" list={BagsList} />
              <Card img={Gifts} category="Gifts" list={GiftsList} />
              <Card
                img={Accesories}
                category="Accesories"
                list={AccesoriesList}
              />
            </div>
          </div>
        ) : (
          <Redirect to="/" />
        )}
      </div>
    );
  }
}

export default CategoryListMob;
