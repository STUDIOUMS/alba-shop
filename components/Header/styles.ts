import CustomContainer from "@/ui/CustomContainer";
import { styled, Box } from "@mui/material";

export const Wrap = styled(CustomContainer)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
}));

export const MiddleHeader = styled(Box)(({ theme }) => ({
  background: theme.palette.background.paper,
  boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
  paddingBottom: theme.spacing(2),
  paddingTop: theme.spacing(2),
  position: "sticky",
  top: 0,
  zIndex: 500,
}));

export const Navbox = styled(Box)(({ theme }) => ({
  ul: {
    display: "flex",
    margin: 0,
    padding: 0,
  },
  li: {
    listStyle: "none",
    position: "relative",
    fontFamily: theme.typography.h1.fontFamily,
    "& > a": {
      color: theme.palette.common.black,
      display: "block",
      padding: theme.spacing(2),
      textDecoration: "none",
      "&:hover, &.active": {
        color: theme.palette.primary.main,
      },
    },
    ul: {
      backgroundColor: theme.palette.common.white,
      borderRadius: "6px",
      boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
      padding: theme.spacing(4),
      display: "block",
      position: "absolute",
      left: 0,
      zIndex: 700,
      opacity: 0,
      visibility: "hidden",
      transition: theme.transitions.create(["opacity", "visibility"]),
    },
    "&:hover ul": {
      opacity: 1,
      visibility: "visible",
    },
  },
}));
