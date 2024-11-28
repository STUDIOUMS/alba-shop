import { Box, styled } from "@mui/material";
import { MainCatalogType } from ".";

export const ItemGrid = styled(Box)<{ type: MainCatalogType }>(
  ({ theme, type }) => ({
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridTemplateRows: "repeat(3, 1fr)",
    columnGap: theme.spacing(4),
    rowGap: theme.spacing(4),
    ".div:nth-of-type(1)": {
      gridArea: type === "catalog" ? "auto" : "1 / 1 / 3 / 2",
    },
    ".div:nth-of-type(2)": {
      gridArea: type === "catalog" ? "auto" : "1 / 2 / 2 / 4",
    },
    ".div:nth-of-type(3)": {
      gridArea: type === "catalog" ? "auto" : "2 / 2 / 3 / 3",
    },
    ".div:nth-of-type(4)": {
      gridArea: type === "catalog" ? "auto" : "2 / 3 / 3 / 4",
    },
    ".div:nth-of-type(5)": {
      gridArea: type === "catalog" ? "auto" : "3 / 1 / 4 / 3",
    },
    ".div:nth-of-type(6)": {
      gridArea: type === "catalog" ? "auto" : "3 / 3 / 4 / 4",
    },
    [theme.breakpoints.down("md")]: {
      columnGap: theme.spacing(2),
      rowGap: theme.spacing(2),
      "& span": {
        fontSize: 16,
      },
    },
  })
);

export const ItemCat = styled(Box)(({ theme }) => ({
  a: {
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    borderColor: theme.palette.grey[300],
    borderRadius: 6,
    borderStyle: "solid",
    borderWidth: 1,
    boxSizing: "border-box",
    color: theme.palette.common.black,
    display: "block",
    minHeight: 220,
    height: "100%",
    padding: theme.spacing(6),
    position: "relative",
    textDecoration: "none",
    [theme.breakpoints.down("lg")]: {
      minHeight: 160,
    },
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(3),
      minHeight: 100,
    },
  },
}));
