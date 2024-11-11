"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import banner1 from "@/assets/bigbanners/banner1.webp";
import banner2 from "@/assets/bigbanners/banner2.webp";
import banner3 from "@/assets/bigbanners/banner3.webp";
import banner4 from "@/assets/bigbanners/banner4.webp";
import banner5 from "@/assets/bigbanners/banner5.webp";
import banner6 from "@/assets/bigbanners/banner6.webp";
import banner7 from "@/assets/bigbanners/banner7.webp";
import Banner from "../Banner";
import { Box, styled } from "@mui/material";

const SliderWrap = styled(Box)(({ theme }) => ({
  borderWidth: 1,
  borderStyle: "solid",
  borderRadius: 7,
  borderColor: theme.palette.grey[300],
  height: 400,
  marginTop: theme.spacing(10),
  overflow: "hidden",
  position: "relative",
}));

const BigBanner = (): JSX.Element => {
  return (
    <SliderWrap>
      <Swiper
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        autoplay={{
          delay: 3000,
        }}
        effect="fade"
        navigation
        pagination
        spaceBetween={0}
        slidesPerView={1}
        loop
      >
        <SwiperSlide>
          <Banner src={banner1.src} large />
        </SwiperSlide>
        <SwiperSlide>
          <Banner src={banner2.src} large />
        </SwiperSlide>
        <SwiperSlide>
          <Banner src={banner3.src} large />
        </SwiperSlide>
        <SwiperSlide>
          <Banner src={banner4.src} large />
        </SwiperSlide>
        <SwiperSlide>
          <Banner src={banner5.src} large />
        </SwiperSlide>
        <SwiperSlide>
          <Banner src={banner6.src} large />
        </SwiperSlide>
        <SwiperSlide>
          <Banner src={banner7.src} large />
        </SwiperSlide>
      </Swiper>
    </SliderWrap>
  );
};

export default BigBanner;
