"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Section from "@/ui/Section";
import { Alert, Typography } from "@mui/material";
import { TEXTS } from "@/texts";
import { PaymentStatus } from "../types";
import BreadCrumbs from "@/ui/BreadCrumbs";
import { paymentCrumbs } from "../constants";
import useMutateData from "@/hooks/useMutateData";

const FailedPayment = (): JSX.Element => {
  const params = useSearchParams();
  const payId = params.get("payId");

  const { data, isSuccess, mutate } = useMutateData<null, PaymentStatus>({
    key: ["success_payment"],
    method: "POST",
    uri: `/payments/${payId}/fail/`,
  });

  useEffect(() => {
    if (payId) {
      mutate(null);
    }
  }, [payId, mutate]);

  if (isSuccess && data.status === "ok")
    return (
      <Section>
        <BreadCrumbs links={paymentCrumbs} />
        <Typography variant="h1">Оплата заказа не совершена</Typography>
        <Alert variant="outlined" color="error" sx={{ mb: 6 }}>
          {TEXTS.notifications.failedPayment}
        </Alert>
      </Section>
    );

  return <></>;
};

export default FailedPayment;
