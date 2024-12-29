"use client";

import { Box, Grid2, useMediaQuery, useTheme } from "@mui/material";
import Image from "next/image";
import logo from "@/assets/logo.svg";
import Socials from "../Socials";
import CustomContainer from "@/ui/CustomContainer";
import FootMenu from "./FootMenu";
import { TEXTS } from "@/texts";

const Footer = (): JSX.Element => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <Box
      sx={(theme) => ({
        bgcolor: theme.palette.grey[100],
        pt: 8,
        pb: 8,
      })}
    >
      <CustomContainer>
        <Grid2 container spacing={6}>
          <Grid2 size={{ lg: 3, xs: 12 }}>
            <div className="header-logo">
              <Image
                src={logo.src}
                alt=""
                style={{ objectFit: "contain" }}
                width={100}
                height={50}
              />
            </div>
            &copy; {TEXTS.common.copyright}
          </Grid2>

          {isDesktop && (
            <>
              <Grid2 size={{ lg: 6, xs: 12 }}>
                <FootMenu />
              </Grid2>
            </>
          )}

          <Grid2 size={{ lg: 3, xs: 12 }}>
            <Socials />
            <p>{TEXTS.common.phoneString}</p>
          </Grid2>
        </Grid2>
      </CustomContainer>
    </Box>
  );
};

export default Footer;
