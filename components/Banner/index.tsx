"use client";

import { Box } from "@mui/material";
import Image from "next/image";

type BannerProps = {
  src: string;
  link?: string;
  large?: boolean;
};

const Banner = (props: BannerProps): JSX.Element => {
  const { src, large, link } = props;
  return (
    <Box
      sx={{
        position: "relative",
        height: large ? 400 : 280,
      }}
    >
      <Image
        src={src}
        alt=""
        fill={true}
        style={{ borderRadius: "6px", objectFit: "cover" }}
        sizes="200px"
      />
    </Box>
  );
};

export default Banner;
