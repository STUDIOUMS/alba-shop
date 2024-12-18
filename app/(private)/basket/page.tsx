"use client";

import BreadCrumbs from "@/ui/BreadCrumbs";
import { BreadCrumbsItem } from "@/types";
import Section from "@/ui/Section";
import { Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useOrderStore } from "@/store/useOrderStore";
import CartHead from "@/components/CartItem/CartHead";
import CartItem from "@/components/CartItem";
import BasketTotal from "./components/BasketTotal";
import CustomBtn from "@/ui/CustomBtn";
import Link from "next/link";
import BasketModal from "./components/BasketModal";

/* BreadCrumbs */
const crumbs: BreadCrumbsItem[] = [{ name: "Корзина", slug: `/basket` }];

function BasketPage() {
  const { orders } = useOrderStore();
  const [modal, setModal] = useState<boolean>(false);

  useEffect(() => {
    document.title = "Корзина";
  }, []);

  return (
    <Section>
      <BreadCrumbs links={crumbs} />
      <Typography variant="h1">Корзина</Typography>

      <CartHead />
      {orders.map((order) => (
        <CartItem key={order.id} order={order} />
      ))}

      <BasketTotal orders={orders} />

      <Stack direction="row" justifyContent="flex-end">
        <CustomBtn
          variant="outlined"
          color="secondary"
          onClick={() => setModal(true)}
          sx={{ mr: 4 }}
        >
          Очистить корзину
        </CustomBtn>
        <Link href="/checkout" passHref>
          <CustomBtn>Оформить заказ</CustomBtn>
        </Link>
      </Stack>

      <BasketModal close={() => setModal(false)} open={modal} />
    </Section>
  );
}

export default BasketPage;
