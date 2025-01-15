"use client";

import { useEffect, useState } from "react";
import { useOrderStore } from "@/store/useOrderStore";
import { SERVER_URL } from "@/constants";
import Section from "@/ui/Section";
import { Alert, Typography } from "@mui/material";
import { TEXTS } from "@/texts";
import { PaymentStatus } from "../types";
import BreadCrumbs from "@/ui/BreadCrumbs";
import { paymentCrumbs } from "../constants";

const SuccessPayment = () => {
  const [success, setSuccess] = useState<boolean>(false);
  const { paymentId, setPaymentId, deleteAllOrders } = useOrderStore();

  useEffect(() => {
    if (paymentId) {
      fetch(`${SERVER_URL}/payments/${paymentId}/success/`, { method: "POST" })
        .then((response) => response.json())
        .then((data: PaymentStatus) => {
          if (data.status === "ok") {
            setSuccess(true);
            deleteAllOrders();
          }
        });
    }
  }, [paymentId, deleteAllOrders]);

  useEffect(() => {
    return () => {
      setPaymentId(null);
    };
  }, [setPaymentId]);

  if (success)
    return (
      <Section>
        <BreadCrumbs links={paymentCrumbs} />
        <Typography variant="h1">Заказ успешно оплачен</Typography>
        <Alert variant="outlined" color="info" sx={{ mb: 6 }}>
          {TEXTS.notifications.successfulResponse}
        </Alert>
      </Section>
    );

  return null;
};

export default SuccessPayment;
