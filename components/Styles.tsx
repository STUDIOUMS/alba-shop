import { useTheme } from "@mui/material";
import { GlobalStyles } from "@mui/system";

const Styles = (): JSX.Element => {
  const theme = useTheme();
  return (
    <GlobalStyles
      styles={{
        body: {
          margin: 0,
          fontFamily: theme.typography.body1.fontFamily,
          fontSize: theme.typography.body1.fontSize,
          lineHeight: theme.typography.body1.lineHeight,
        },
        p: {
          marginBottom: theme.spacing(6),
          marginTop: theme.spacing(6),
        },
        a: {
          color: theme.palette.primary.main,
        },
        "& .carousel_slider .swiper-pagination": {
          position: "relative",
          left: "auto",
          top: "auto",
          marginTop: 20,
        },
        "& .swiper-pagination-bullet-active": {
          background: `${theme.palette.common.black} !important`,
        },
        "& .swiper-button-prev, & .swiper-button-next": {
          color: `${theme.palette.common.black} !important`,
          width: "16px !important",
          height: "32px !important",
          "&::after": {
            fontSize: "26px !important",
          },
          [theme.breakpoints.down("md")]: {
            display: "none !important",
          },
        },
      }}
    />
  );
};

export default Styles;
