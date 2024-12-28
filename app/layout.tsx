"use client";

import Providers from "@/components/Providers";
import ScrollToTop from "@/components/ScrollToTop";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Box, Snackbar, Stack } from "@mui/material";
import { useAppStore } from "@/store/useAppStore";
import CustomContainer from "@/ui/CustomContainer";

type LayoutProps = {
  children: React.ReactNode;
};

const RootLayout = (props: LayoutProps): JSX.Element => {
  const { children } = props;
  const { message, setMessage } = useAppStore();

  return (
    <html lang="ru">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Providers>
          <Stack sx={{ minHeight: "100vh" }} className="app">
            <Header />
            <Box sx={{ flexGrow: 1 }}>
              <CustomContainer>{children}</CustomContainer>
            </Box>
            <Footer />
          </Stack>
          <Snackbar
            open={!!message}
            autoHideDuration={5000}
            onClose={() => setMessage(undefined)}
            message={message}
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          />
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
