import { Box, Stack, styled } from "@mui/material";

export const FilterDiv = styled(Box)(({ theme }) => ({
  borderColor: theme.palette.grey[300],
  borderStyle: "solid",
  borderWidth: 1,
  borderRadius: 6,
}));

export const FilterHeader = styled(Box)<{ size?: "small" | "large" }>(
  ({ theme, size = "large" }) => ({
    background: theme.palette.grey[100],
    borderRadius: size === "large" ? "5px 5px 0 0" : 0,
    fontSize:
      size === "large"
        ? theme.typography.h4.fontSize
        : theme.typography.h5.fontSize,
    fontFamily: theme.typography.h4.fontFamily,
    fontWeight: 500,
    padding: `${theme.spacing(2)} ${theme.spacing(4)}`,
  })
);

export const FilterFooter = styled(Stack)(({ theme }) => ({
  borderTopColor: theme.palette.grey[300],
  borderTopStyle: "solid",
  borderTopWidth: 1,
  padding: theme.spacing(4),
}));
