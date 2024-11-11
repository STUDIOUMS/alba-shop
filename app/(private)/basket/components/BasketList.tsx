"use client";

import { useState } from "react";
import { Alert, Stack, Table, TableBody, TableContainer } from "@mui/material";
import { useOrderStore } from "@/store/useOrderStore";
import BasketHead from "./BasketHead";
import BasketRow from "./BasketRow";
import BasketTotal from "./BasketTotal";
import CustomBtn from "@/ui/CustomBtn";
import BasketModal from "./BasketModal";
import Link from "next/link";

const BasketList = (): JSX.Element => {
  const [modal, setModal] = useState<boolean>(false);
  const { orders } = useOrderStore();

  return (
    <>
      {orders.length ? (
        <>
          <TableContainer sx={{ mb: 6 }}>
            <Table>
              <BasketHead />
              <TableBody>
                {orders.map((el) => (
                  <BasketRow key={el.id} order={el} />
                ))}
              </TableBody>
            </Table>
          </TableContainer>

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
