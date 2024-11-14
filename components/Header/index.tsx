"use client";

import { useState } from "react";
import { Box, IconButton, useMediaQuery, useTheme } from "@mui/material";
import Navbar from "./NavBar";
import CustomBtn from "@/ui/CustomBtn";
import FeedbackModal from "../Modals/FeedbackModal";
import { MiddleHeader, Wrap } from "./styles";
import logo from "@/assets/logo.svg";
import SmallCart from "./SmallCart";
import Link from "next/link";
import NavDrawer from "./NavDrawer";
import Search from "../Search";
import iconBars from "@/assets/bars.svg";

const Header = (): JSX.Element => {
  const [feedBack, setFeedBack] = useState<boolean>(false);
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));
  const [openNav, setOpenNav] = useState(false);

  return (
    <>
      <Box
        sx={(theme) => ({
          borderBottomColor: theme.palette.divider,
          borderBottomWidth: 1,
          borderBottomStyle: "solid",
          p: "16px 0",
        })}
      >
        <Wrap>
          {isTablet && (
            <NavDrawer open={openNav} close={() => setOpenNav(false)} />
          )}
          {isTablet && (
            <Link href="/">
              <img
                src={logo.src}
                alt=""
                style={{ objectFit: "contain", height: 50 }}
              />
            </Link>
          )}
          {!isTablet && <Navbar />}
          <CustomBtn
            color="secondary"
            variant="outlined"
            size="small"
            onClick={() => setFeedBack(true)}
          >
            Обратная связь
          </CustomBtn>
        </Wrap>
      </Box>

      <MiddleHeader>
        <Wrap sx={{ position: "relative" }}>
          {isTablet && (
            <IconButton onClick={() => setOpenNav(true)}>
              <img src={iconBars.src} alt="" style={{ width: 20 }} />
            </IconButton>
          )}
          {!isTablet && (
            <Link href="/">
              <img
                src={logo.src}
                alt=""
                style={{ objectFit: "contain", height: 50 }}
              />
            </Link>
          )}

          <Search />
          <SmallCart />
        </Wrap>
      </MiddleHeader>

      <FeedbackModal close={() => setFeedBack(false)} show={feedBack} />
    </>
  );
};

export default Header;
