"use client";

import CustomBtn from "@/ui/CustomBtn";
import {
  Box,
  BoxProps,
  styled,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Image from "next/image";

type BannerItemProps = {
  src: string;
  title: string;
  description: string;
};

const ItemText = styled(Box)<BoxProps>(({ theme }) => ({
  position: "absolute",
  left: theme.spacing(14),
  top: theme.spacing(12),
  maxWidth: 480,
  [theme.breakpoints.down("sm")]: {
    left: theme.spacing(5),
    right: theme.spacing(5),
    top: theme.spacing(5),
  },
}));

const BannerItem = (props: BannerItemProps): JSX.Element => {
  const { src, description, title } = props;
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box className="sliderItem">
      <Image
        src={src}
        alt=""
        fill={true}
        style={{ borderRadius: "6px", objectFit: "cover" }}
        sizes="400px"
      />
      <ItemText>
        <Typography variant={isMobile ? "h3" : "h1"} component="div">
          {title}
        </Typography>
        <Typography variant="body1" sx={{ mb: 10 }}>
          {description}
        </Typography>
        <CustomBtn>Узнайте подробнее</CustomBtn>
      </ItemText>
    </Box>
  );
};

export default BannerItem;
