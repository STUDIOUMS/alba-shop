import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Suspense } from "react";

const client = new QueryClient();

export const TestWrapper = ({ children }: { children: React.ReactNode }) => (
  <QueryClientProvider client={client}>
    <Suspense>{children}</Suspense>
  </QueryClientProvider>
);
