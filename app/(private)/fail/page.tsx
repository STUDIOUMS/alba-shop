"use client";

import { useEffect, useState } from "react";
import { useOrderStore } from "@/store/useOrderStore";
import { SERVER_URL } from "@/constants";
import Section from "@/ui/Section";
import { Alert, Typography } from "@mui/material";
import { TEXTS } from "@/texts";
import { PaymentStatus } from "../types";

const FailedPayment = () => {
  const [success, setSuccess] = useState<boolean>(false);
  const { paymentId } = useOrderStore();

  useEffect(() => {
    if (paymentId) {
      fetch(`${SERVER_URL}/payments/${paymentId}/fail/`, { method: "POST" })
        .then((response) => response.json())
        .then((data: PaymentStatus) => {
          console.log(data);
          if (data.status === "ok") {
            setSuccess(true);
          }
        });
    }
  }, [paymentId]);

  if (success)
    return (
      <Section>
        <Typography variant="h1">Оплата заказа</Typography>
        <Alert variant="outlined" color="error" sx={{ mb: 6 }}>
          {TEXTS.notifications.failedPayment}
        </Alert>
      </Section>
    );

  return null;
};

export default FailedPayment;
