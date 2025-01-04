import { Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import nock from "nock";
import { SERVER_URL } from "@/constants";

const client = new QueryClient();

export const TestWrapper = ({ children }: { children: React.ReactNode }) => (
  <QueryClientProvider client={client}>
    <Suspense>{children}</Suspense>
  </QueryClientProvider>
);

export const API_NOCK = nock(SERVER_URL);
