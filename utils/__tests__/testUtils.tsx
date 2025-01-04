import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Suspense } from "react";
import nock from "nock";

const client = new QueryClient();

export const TestWrapper = ({ children }: { children: React.ReactNode }) => (
  <QueryClientProvider client={client}>
    <Suspense>{children}</Suspense>
  </QueryClientProvider>
);

export const wrapper = ({ children }: { children: React.ReactNode }) => (
  <QueryClientProvider client={client}>{children}</QueryClientProvider>
);

export const API_NOCK = nock("https://api.alba-72.ru/api/v1");
