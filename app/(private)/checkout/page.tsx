"use client";

import { BreadCrumbsItem } from "@/types";
import BreadCrumbs from "@/ui/BreadCrumbs";
import Section from "@/ui/Section";
import OrderForm from "./components/OrderForm";
import { Typography } from "@mui/material";
import { useEffect } from "react";
import { useOrderStore } from "@/store/useOrderStore";
import { redirect } from "next/navigation";

/* BreadCrumbs */
const crumbs: BreadCrumbsItem[] = [
  { name: "Оформление заказа", slug: `/order` },
];

function OrderPage() {
  const { orders } = useOrderStore();

  useEffect(() => {
    document.title = "Оформление заказа";
  }, []);

  if (!orders.length) {
    redirect("/basket");
  }

  return (
    <Section>
      <BreadCrumbs links={crumbs} />
      <Typography variant="h1">Оформление заказа</Typography>
      {!!orders.length && <OrderForm />}
    </Section>
  );
}

export default OrderPage;
