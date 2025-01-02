"use client";

import BreadCrumbs from "@/ui/BreadCrumbs";
import { BreadCrumbsItem } from "@/types";
import Section from "@/ui/Section";
import { Alert, Typography } from "@mui/material";
import { useEffect } from "react";
import { useOrderStore } from "@/store/useOrderStore";
import BasketTotal from "./components/BasketTotal";
import BasketButtons from "./components/BasketButtons";
import BasketTable from "./components/BasketTable";
import CustomBtn from "@/ui/CustomBtn";
import SuccessScreen from "@/components/SuccessScreen";
import Carousel from "@/components/Carousel";

/* BreadCrumbs */
const crumbs: BreadCrumbsItem[] = [{ name: "Корзина", slug: `/basket` }];

function BasketPage() {
  const { orders } = useOrderStore();

  useEffect(() => {
    document.title = "Корзина";
  }, []);

  return (
    <Section>
      <BreadCrumbs links={crumbs} />
      <Typography variant="h1">Корзина</Typography>

      {!!orders.length && (
        <>
          <BasketTable orders={orders} />
          <BasketTotal orders={orders} />
          <BasketButtons />
        </>
      )}
      {!orders.length && (
        <>
          <Alert variant="outlined" color="info" sx={{ mb: 6 }}>
            Ваша корзина пуста
          </Alert>
          <CustomBtn href="/" variant="outlined" color="secondary">
            Вернуться на главную
          </CustomBtn>
          <Carousel param="new" title="Новинки" />
        </>
      )}
    </Section>
  );
}

export default BasketPage;
