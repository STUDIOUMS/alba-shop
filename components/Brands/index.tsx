"use client";

import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ozon from "@/assets/ozon.svg";
import wildberries from "@/assets/wildberries.webp";
import svetofor from "@/assets/svetofor.webp";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Box } from "@mui/material";
import Image from "next/image";

const list = [
  { id: 1, img: ozon },
  { id: 2, img: wildberries },
  { id: 3, img: svetofor },
  { id: 4, img: ozon },
  { id: 5, img: wildberries },
  { id: 6, img: svetofor },
  { id: 7, img: ozon },
  { id: 8, img: wildberries },
  { id: 9, img: svetofor },
];

const Brands = (): JSX.Element => {
  return (
    <Box>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={16}
        slidesPerView={2}
        navigation
        pagination
        breakpoints={{
          400: { slidesPerView: 3 },
          750: { slidesPerView: 4 },
          1020: { slidesPerView: 6 },
        }}
      >
        {list.map((el) => (
          <SwiperSlide key={el.id}>
            <Box sx={{ pt: 6, pb: 6 }}>
              <Image
                src={el.img.src}
                alt=""
                width={100}
                height={100}
                style={{ objectFit: "contain" }}
              />
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default Brands;
