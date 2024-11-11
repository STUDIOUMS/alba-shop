"use client";

import { useState } from "react";
import { Box, CircularProgress, useMediaQuery, useTheme } from "@mui/material";
import Navbar from "./NavBar";
import CustomBtn from "@/ui/CustomBtn";
import FeedbackModal from "../Modals/FeedbackModal";
import { MiddleHeader, Wrap } from "./styles";
import Image from "next/image";
import logo from "@/assets/logo.webp";
import SmallCart from "./SmallCart";
import useGetData from "@/hooks/useGetData";
import { Cat, Response } from "@/types";
import CatPopup from "../CatPopup";
import Link from "next/link";
import NavDrawer from "./NavDrawer";
import Search from "../Search";

const Header = (): JSX.Element => {
  const [feedBack, setFeedBack] = useState<boolean>(false);
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));

  const { data, isSuccess, isLoading } = useGetData<Response<Cat>>({
    key: ["cats"],
    uri: "/catalog/categories",
  });

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
          {isTablet && <NavDrawer />}
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
          <Link href="/">
            <Image
              src={logo.src}
              alt=""
              width={50}
              height={50}
              style={{ objectFit: "contain" }}
            />
          </Link>

          <Box sx={{ ml: 4, mr: "auto" }}>
            {isLoading && <CircularProgress size={24} />}
            {isSuccess && <CatPopup cats={data.results} />}
          </Box>

          <Search />
          <SmallCart />
        </Wrap>
      </MiddleHeader>

      <FeedbackModal close={() => setFeedBack(false)} show={feedBack} />
    </>
  );
};

export default Header;
