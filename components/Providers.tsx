"use client";

import { Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useOrderStore } from "@/store/useOrderStore";
import { ThemeProvider } from "@mui/material";
import theme from "@/theme";
import Styles from "./Styles";

type ProvidersProps = {
  children: React.ReactNode;
};

const client = new QueryClient();

const Providers = (props: ProvidersProps): JSX.Element => {
  const { children } = props;

  return (
    <QueryClientProvider client={client}>
      <ThemeProvider theme={theme}>
        <Styles />
        <Suspense>{children}</Suspense>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default Providers;
