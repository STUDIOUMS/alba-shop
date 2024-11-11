"use client";

import { useOrderStore } from "@/store/useOrderStore";
import { redirect } from "next/navigation";

type PrivateLayoutProps = {
  children: React.ReactNode;
};

export default function PrivateLayout(props: PrivateLayoutProps) {
  const { children } = props;
  const orders = useOrderStore();
  if (!orders) redirect("/");
  return <div>{children}</div>;
}
