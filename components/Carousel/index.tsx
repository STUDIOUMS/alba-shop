"use client";

import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Section from "@/ui/Section";
import { Product, Response } from "@/types";
import Good from "../Good";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import useGetData from "@/hooks/useGetData";
import ErrorAlert from "../ErrorAlert";
import CarouselLoading from "./CarouselLoading";
import { Alert, AlertTitle, Box } from "@mui/material";

type CarouselProps = {
  title: string;
  param: "hit" | "new" | "discount";
};

const Carousel = (props: CarouselProps): JSX.Element => {
  const { param, title } = props;

  const { data, isLoading, isError, isSuccess } = useGetData<Response<Product>>(
    {
      key: [param],
      uri: `/catalog/products/?${param}=true&limit=10`,
    }
  );

  if (isLoading) return <CarouselLoading />;
  if (isError) return <ErrorAlert />;
  if (isSuccess && !data.results.length)
    return (
      <Alert variant="outlined" severity="info">
        <AlertTitle>Нет записей</AlertTitle> Нет подобных товаров статьи.
      </Alert>
    );

  return (
    <Section title={title}>
      {isSuccess && (
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination
          breakpoints={{
            540: { slidesPerView: 2 },
            750: { slidesPerView: 3 },
            1020: { slidesPerView: 4 },
          }}
          className="carousel_slider"
        >
          {data.results.map((el) => (
            <SwiperSlide key={el.id} style={{ height: "auto" }}>
              <Good el={el} slide />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </Section>
  );
};

export default Carousel;
