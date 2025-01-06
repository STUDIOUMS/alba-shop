import { Box, styled } from "@mui/material";

export const OrderSectionDiv = styled(Box)(({ theme }) => ({
  borderColor: theme.palette.grey[300],
  borderStyle: "solid",
  borderWidth: 1,
  borderRadius: 6,
  marginBottom: theme.spacing(4),
}));

export const OrderSectionHead = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.grey[100],
  borderRadius: "5px 5px 0 0",
  padding: `${theme.spacing(3)} ${theme.spacing(6)}`,
}));

export const OrderSectionInner = styled(Box)(({ theme }) => ({
  padding: theme.spacing(6),
}));
