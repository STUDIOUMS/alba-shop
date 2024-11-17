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
import { Box, styled } from "@mui/material";
import BannerItem from "./BannerItem";

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

const Banner = (): JSX.Element => {
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
          <BannerItem
            src={banner1.src}
            title="Узнайте все об экоинициативах"
            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores nulla aut molestias cumque"
          />
        </SwiperSlide>
        <SwiperSlide>
          <BannerItem
            src={banner2.src}
            title="Выбирайте у нас, покупайте где удобно"
            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores nulla aut molestias cumque"
          />
        </SwiperSlide>
        <SwiperSlide>
          <BannerItem
            src={banner3.src}
            title="Узнавайте о новинках и покупайте на маркетплейсе"
            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores nulla aut molestias cumque"
          />
        </SwiperSlide>
        <SwiperSlide>
          <BannerItem
            src={banner4.src}
            title="Собственное производство экологичная продукция"
            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores nulla aut molestias cumque"
          />
        </SwiperSlide>
        <SwiperSlide>
          <BannerItem
            src={banner5.src}
            title="Купите ваши баллы и меняйте их на нашу продукцию"
            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores nulla aut molestias cumque"
          />
        </SwiperSlide>
      </Swiper>
    </SliderWrap>
  );
};

export default Banner;
