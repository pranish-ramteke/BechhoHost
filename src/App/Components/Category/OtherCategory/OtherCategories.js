import React, { Component } from "react";
import Card from "react-bootstrap/Card";

const data = [
  {
    src:
      "https://www.nextbigbrand.in/wp-content/uploads/2019/03/Screen-Shot-2019-03-22-at-2.25.31-PM.png",
    category: "Levi's",
  },
  {
    src:
      "https://i.pinimg.com/originals/6d/3b/3b/6d3b3be4d1add6129c4209821be4b1e3.jpg",
    category: "Allen Solly",
  },
  {
    src:
      "https://www.youthpagelive.com/wp-content/uploads/2017/08/page_1_thumb_large.jpg",
    category: "van housen",
  },
  {
    src:
      "https://seeklogo.com/images/P/peter-england-logo-CAA89E9287-seeklogo.com.png",
    category: "Peter England",
  },
  {
    src:
      "https://sgp1.digitaloceanspaces.com/quickcompany/trademark/241ff7027292ebd0.jpg",
    category: "park avenue",
  },
  {
    src:
      "https://images.squarespace-cdn.com/content/v1/57c95f912994ca33e8410394/1473433215876-VACPQ3VCSJIN1GLV47ON/ke17ZwdGBToddI8pDm48kLauA-DAtZa8rxFxHR1_m00UqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcM4ZZh_i2MpC47xJm_VRgldATpLxWP2zT5Q5sgWR5cEsfR5ESeekW32GRF7hoFOLh/logo-lee-cooper1.jpg",
    category: "Lee copper",
  },
];

class OtherCategories extends Component {
  state = {
    width: window.innerWidth,
  };

  render() {
    return (
      <div>
        <div className="th-category-title">Other Categories </div>
        <div className="mt-lg-4">
          <div class="row">
            <div class="col-12 d-flex flex-wrap justify-content-between">
              {data.map((item, index) => {
                return (
                  <Card className="border-0 ">
                    <Card.Img
                      variant="top"
                      src={item.src}
                      className="rounded th-other-category-img"
                    />
                    <p className="mb-0 mt-1 text-center th-other-category">
                      {item.category}
                    </p>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default OtherCategories;
