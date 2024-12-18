"use client";

import { useOrderStore } from "@/store/useOrderStore";
import { redirect, usePathname } from "next/navigation";
import { Fragment } from "react";

type PrivateLayoutProps = {
  children: React.ReactNode;
};

const routes: string[] = ["/basket", "/checkout"];

const PrivateLayout = (props: PrivateLayoutProps) => {
  const { children } = props;
  const { orders } = useOrderStore();
  const pathname = usePathname();
  const isRoute = routes.some((route) => route === pathname);

  if (!orders.length && isRoute) {
    redirect("/");
  }

  return <Fragment>{children}</Fragment>;
};

export default PrivateLayout;
