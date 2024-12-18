import { Box, BoxProps, styled } from "@mui/material";
import { IMG_WIDTH, IMG_WIDTH_MOBILE } from ".";

export const CartBox = styled(Box)<BoxProps>(({ theme }) => ({
  alignItems: "center",
  borderColor: theme.palette.grey[200],
  borderStyle: "solid",
  borderWidth: 1,
  borderRadius: 6,
  display: "flex",
  marginBottom: theme.spacing(3),
  padding: theme.spacing(2),
  position: "relative",
  [theme.breakpoints.down("md")]: {
    alignItems: "flex-start",
  },
}));

export const CartBoxImg = styled(Box)(({ theme }) => ({
  alignItems: "center",
  display: "flex",
  justifyContent: "center",
  minWidth: IMG_WIDTH,
  maxWidth: IMG_WIDTH,
  marginRight: theme.spacing(6),
  img: {
    display: "block",
  },
  [theme.breakpoints.down("md")]: {
    minWidth: IMG_WIDTH_MOBILE,
    maxWidth: IMG_WIDTH_MOBILE,
  },
}));

export const CartBoxDetails = styled(Box)(({ theme }) => ({
  display: "grid",
  flexGrow: 1,
  gridTemplateColumns: "35% 1fr 1fr 1fr",
  "& .textCenter": {
    justifyContent: "center",
  },
  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "auto",
    "& .textCenter": {
      justifyContent: "flex-start",
      marginTop: theme.spacing(4),
    },
    "& .textLeft": {
      justifyContent: "flex-start",
      marginTop: theme.spacing(4),
    },
  },
}));

export const CartBoxInfo = styled(Box)(({ theme }) => ({
  b: {
    color: theme.palette.common.black,
  },
}));
