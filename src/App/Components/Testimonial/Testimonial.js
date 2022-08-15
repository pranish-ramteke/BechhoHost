import React, { Component } from "react";
import Slider from "react-slick";
import TestimonialsCard from "./card";

const data = [
  {
    src:
      "https://firebasestorage.googleapis.com/v0/b/social-12a42.appspot.com/o/Mask%20Group-1.png?alt=media&token=b5668773-439f-4803-a581-7713c87f23ea",
    content:
      "Highly professional brand design and implementation, a perfect example of a strategic and engaging website.",
    author: "Shakti",
  },
  {
    src:
      "https://firebasestorage.googleapis.com/v0/b/social-12a42.appspot.com/o/Mask%20Group-11.png?alt=media&token=2edab674-a446-4230-b576-642dafe12d2f",
    content:
      "Collaboration with Beccho enables us to connect to more people virtually and is positively impacting our business.",
    author: "Akshat",
  },
  {
    src:
      "https://firebasestorage.googleapis.com/v0/b/social-12a42.appspot.com/o/Mask%20Group-10.png?alt=media&token=065b2a65-ea08-4ecf-90ef-30ca8c7ee8ba",
    content:
      "It is extremely easy to search a particular product on the website giving phenomenal results as it has a user friendly environment.",
    author: "Mayuresh",
  },
  {
    src:
      "https://firebasestorage.googleapis.com/v0/b/social-12a42.appspot.com/o/Mask%20Group.png?alt=media&token=a0cc992f-fa37-4ec3-a097-901eccdc6734",
    content:
      "Bechho’s innovative strategy of campaigning helps reach new users efficiently.",
    author: "Prajwal",
  },
  {
    src:
      "https://firebasestorage.googleapis.com/v0/b/social-12a42.appspot.com/o/Mask%20Group-13.png?alt=media&token=71efe649-01e9-4402-8e08-0887af8e8501",
    content:
      "I highly recommend to visit the website at least once because of the innovative idea on which Bechho is based.",
    author: "Pranish",
  },
  {
    src:
      "https://firebasestorage.googleapis.com/v0/b/social-12a42.appspot.com/o/Mask%20Group-2.png?alt=media&token=83890366-020e-4945-9704-cfce83e59a03",
    content:
      "I highly recommend to use the website to sell your stuff as they provide fair bids and you can actually sell your thing in just 36 hours.",
    author: "Shreya",
  },
  {
    src:
      "https://firebasestorage.googleapis.com/v0/b/social-12a42.appspot.com/o/Mask%20Group-3.png?alt=media&token=650dad0d-d694-42bf-8f25-9cd00dbed489",
    content:
      "Easy to use from the very start and great service, far less complex than other websites.",
    author: "Siddharth",
  },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: false,
  responsive: [
    {
      breakpoint: 780,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        autoplay: false,
        speed: 850,
      },
    },
  ],
};

class Testimonial extends Component {
  render() {
    return (
      <div className="container mt-4">
        <div className="th-testimonial-root ">
          <div className="th-testimonial-header">Testimonials</div>
          <Slider {...settings} className="th-testimonial-mainSlider">
            {data.map((item) => {
              return (
                <TestimonialsCard
                  content={item.content}
                  author={item.author}
                  image={item.src}
                />
              );
            })}
          </Slider>
        </div>
      </div>
    );
  }
}

export default Testimonial;
