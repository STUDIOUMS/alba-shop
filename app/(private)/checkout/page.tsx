"use client";

import { BreadCrumbsItem } from "@/types";
import BreadCrumbs from "@/ui/BreadCrumbs";
import Section from "@/ui/Section";
import OrderForm from "./components/OrderForm";
import { Typography } from "@mui/material";
import { useEffect } from "react";

/* BreadCrumbs */
const crumbs: BreadCrumbsItem[] = [
  { name: "Оформление заказа", slug: `/order` },
];

function OrderPage() {
  useEffect(() => {
    document.title = "Оформление заказа";
  }, []);

  return (
    <Section>
      <BreadCrumbs links={crumbs} />
      <Typography variant="h1">Оформление заказа</Typography>
      <OrderForm />
    </Section>
  );
}

export default OrderPage;
