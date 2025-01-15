"use client";

import { redirect, useSearchParams } from "next/navigation";

type PrivateLayoutProps = {
  children: React.ReactNode;
};

const PrivateLayout = ({ children }: PrivateLayoutProps) => {
  const params = useSearchParams();
  const payId = params.get("payId");
  if (!payId) {
    redirect("/");
  }
  return <>{children}</>;
};

export default PrivateLayout;
