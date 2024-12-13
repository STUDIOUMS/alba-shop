"use client";

import { useState } from "react";
import { Alert, Stack } from "@mui/material";
import { useOrderStore } from "@/store/useOrderStore";
import BasketTotal from "./BasketTotal";
import CustomBtn from "@/ui/CustomBtn";
import BasketModal from "./BasketModal";
import Link from "next/link";
import CartItem from "@/components/CartItem";
import CartHead from "@/components/CartItem/CartHead";

const BasketList = (): JSX.Element => {
  const [modal, setModal] = useState<boolean>(false);
  const { orders } = useOrderStore();

  return (
    <>
      {orders.length ? (
        <>
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
            <Link href="/order" passHref>
              <CustomBtn>Оформить заказ</CustomBtn>
            </Link>
          </Stack>

          <BasketModal close={() => setModal(false)} open={modal} />
        </>
      ) : (
        <>
          <Alert variant="outlined" color="info" severity="info" sx={{ mb: 6 }}>
            Ваша корзина пуста
          </Alert>
          <Link href="/" passHref>
            <CustomBtn variant="outlined" color="secondary">
              Вернуться на главную
            </CustomBtn>
          </Link>
        </>
      )}
    </>
  );
};

export default BasketList;
