import { Box, BoxProps, Chip, ChipProps, Grid2, styled } from "@mui/material";

export const GoodItem = styled(Grid2)<BoxProps>(({ theme }) => ({
  borderWidth: 1,
  borderStyle: "solid",
  borderColor: theme.palette.grey[300],
  borderRadius: "6px",
  display: "flex",
  padding: theme.spacing(3),
  position: "relative",
}));

export const GoodImage = styled(Box)<BoxProps>(() => ({
  alignItems: "center",
  display: "flex",
  justifyContent: "center",
  height: 140,
  img: {
    display: "block",
    margin: "0 auto",
    height: 120,
  },
}));

export const GoodChip = styled(Chip)<ChipProps>(({ theme }) => ({
  borderRadius: "6px",
  fontSize: theme.typography.body2.fontSize,
  letterSpacing: 1,
  marginRight: 3,
  height: "auto",
  textTransform: "uppercase",
  "& .MuiChip-label": {
    padding: "4px 8px",
  },
}));

export const GoodItemTitle = styled(Box)(({ theme }) => ({
  fontSize: theme.typography.h4.fontSize,
  fontWeight: 700,
  a: {
    color: theme.palette.common.black,
    textDecoration: "none",
  },
}));
