import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import 'swiper/css/navigation';

const data = [
  {
    avatar: AVTR1,
    name: "Soon to be populated",
    review:
      "........",
  },
  {
    avatar: AVTR2,
    name: "Soon to be populated",
    review:
    "........",
  },
  {
    avatar: AVTR3,
    name: "Soon to be populated",
    review:
      "........",
  },
  {
    avatar: AVTR4,
    name: "Soon to be populated",
    review:
      "........",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from the Team Members</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container" // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        // navigation
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="alt_text"/>
              </div>
              <h5 className="client__name">{name}</h5>
              <small>{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
