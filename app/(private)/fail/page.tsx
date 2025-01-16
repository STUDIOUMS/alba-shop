"use client";

import { useEffect, useState } from "react";
import { SERVER_URL } from "@/constants";
import Section from "@/ui/Section";
import { Alert, Typography } from "@mui/material";
import { TEXTS } from "@/texts";
import { PaymentStatus } from "../types";
import BreadCrumbs from "@/ui/BreadCrumbs";
import { paymentCrumbs } from "../constants";
import { useSearchParams } from "next/navigation";

const FailedPayment = (): JSX.Element => {
  const [success, setSuccess] = useState<boolean>(false);
  const params = useSearchParams();
  const payId = params.get("payId");

  useEffect(() => {
    if (payId) {
      fetch(`${SERVER_URL}/payments/${payId}/fail/`, { method: "POST" })
        .then((response) => response.json())
        .then((data: PaymentStatus) => {
          if (data.status === "ok") {
            setSuccess(true);
          }
        });
    }
  }, [payId]);

  if (success)
    return (
      <Section>
        <BreadCrumbs links={paymentCrumbs} />
        <Typography variant="h1">Оплата заказа</Typography>
        <Alert variant="outlined" color="error" sx={{ mb: 6 }}>
          {TEXTS.notifications.failedPayment}
        </Alert>
      </Section>
    );

  return <></>;
};

export default FailedPayment;
