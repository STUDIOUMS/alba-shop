"use client";

import { IconButton, IconButtonProps, styled } from "@mui/material";
import { useSwiper } from "swiper/react";
import prevIcon from "@/assets/left.svg";
import Image from "next/image";

const SwiperButton = styled(IconButton)(({ theme }) => ({
  background: theme.palette.grey[300],
  height: 40,
  width: 40,
}));

const ICON_SIZE = 24;

export const SlidePrevButton = (props: IconButtonProps): JSX.Element => {
  const swiper = useSwiper();
  return (
    <SwiperButton onClick={() => swiper.slidePrev()} {...props}>
      <Image src={prevIcon} alt="" width={ICON_SIZE} height={ICON_SIZE} />
    </SwiperButton>
  );
};

export const SlideNextButton = (props: IconButtonProps): JSX.Element => {
  const swiper = useSwiper();
  return (
    <SwiperButton onClick={() => swiper.slideNext()} {...props}>
      <Image
        src={prevIcon}
        alt=""
        width={ICON_SIZE}
        height={ICON_SIZE}
        style={{ transform: "matrix(-1,0,0,1,0,0)" }}
      />
    </SwiperButton>
  );
};
