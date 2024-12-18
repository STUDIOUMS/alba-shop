"use client";

import { useOrderStore } from "@/store/useOrderStore";
import Section from "@/ui/Section";
import { Alert, Typography } from "@mui/material";
import { redirect } from "next/navigation";
import { useEffect } from "react";

const SuccessPage = () => {
  const { placed, deleteAllOrders } = useOrderStore();

  useEffect(() => {
    deleteAllOrders();
  }, []);

  if (!placed) {
    redirect("/");
  }

  return (
    <Section>
      <Typography variant="h2">
        Заказ №{placed?.number} успешно добавлен
      </Typography>
      <Alert variant="outlined" color="info">
        Менеджер свяжется с Вами в течении 15 минут.
      </Alert>
    </Section>
  );
};

export default SuccessPage;
