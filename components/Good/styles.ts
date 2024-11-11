import { View } from "@/types";
import { Box, Chip, ChipProps, Grid2, Stack, styled } from "@mui/material";
import { BoxProps } from "@mui/system";

export const GoodItem = styled(Grid2)<BoxProps>(({ theme }) => ({
  borderWidth: 1,
  borderStyle: "solid",
  borderColor: theme.palette.grey[300],
  borderRadius: "6px",
  display: "flex",
  padding: theme.spacing(3),
  position: "relative",
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
