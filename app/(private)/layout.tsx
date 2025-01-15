"use client";

import { redirect } from "next/navigation";
import { useOrderStore } from "@/store/useOrderStore";

type PrivateLayoutProps = {
  children: React.ReactNode;
};

const PrivateLayout = ({ children }: PrivateLayoutProps) => {
  const { paymentId } = useOrderStore();
  if (!paymentId) return redirect("/");
  return <>{children}</>;
};

export default PrivateLayout;
