import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/effect-fade';
import "./HomeBanner.css";
import HomeBannerSlide from "./HomeBannerSlide";

const bannerSlideContent = [
  {
    id: 1,
    heading: "Explore a World of Knowledg",
    description: `Unearth the vast treasures of knowledge within our extensive library. From timeless classics to contemporary resources, our collection offers a diverse range of materials for your learning and exploratory journey. Delve into a world of wisdom and curiosity.`,
    bgLink: "https://i.ibb.co/vz4k0q6/img1.jpg",
  },
  {
    id: 2,
    heading: "Your Personal Reading Companion",
    description: `ELib is your devoted reading companion, curating a broad spectrum of books and resources tailored to your individual preferences and interests. We aim to provide a gateway to endless realms of literature, empowering your personal reading adventures.`,
    bgLink: "https://i.ibb.co/kHwj41j/img3.jpg",
  },
  {
    id: 3,
    heading: "Library Management Made Easy",
    description: `Simplify library management with ELib's powerful tools. From cataloging to tracking, we make it easy to organize your resources efficiently, so you can focus on what matters most.`,
    bgLink: "https://i.ibb.co/dggnJrV/img2.jpg",
  },
];

import { A11y, Autoplay, EffectFade } from "swiper/modules";

const HomeBanner = () => {
  return (
    <section>
      <Swiper
        className="mySwiper"
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        effect={'fade'}
        loop={true}
        modules={[EffectFade, Autoplay, A11y]}
      >
        {bannerSlideContent.map((item) => (
          <SwiperSlide key={item.id}>
            <HomeBannerSlide {...item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HomeBanner;
