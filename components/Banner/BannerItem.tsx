"use client";

import CustomBtn from "@/ui/CustomBtn";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

type BannerItemProps = {
  src: string;
  title: string;
  description: string;
  link?: string;
};

const BannerItem = (props: BannerItemProps): JSX.Element => {
  const { src, description, title, link } = props;
  return (
    <Box
      sx={{
        position: "relative",
        height: 400,
      }}
    >
      <Image
        src={src}
        alt=""
        fill={true}
        style={{ borderRadius: "6px", objectFit: "cover" }}
        sizes="400px"
      />
      <Box sx={{ position: "absolute", left: 60, top: 60, maxWidth: 480 }}>
        <Typography variant="h1" component="div">
          {title}
        </Typography>
        <Typography variant="body1" sx={{ mb: 10 }}>
          {description}
        </Typography>
        <CustomBtn>Узнайте подробнее</CustomBtn>
      </Box>
    </Box>
  );
};

export default BannerItem;
