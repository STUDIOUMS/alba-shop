"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useOrderStore } from "@/store/useOrderStore";
import Section from "@/ui/Section";
import { Alert, Typography } from "@mui/material";
import { TEXTS } from "@/texts";
import { PaymentStatus } from "../types";
import BreadCrumbs from "@/ui/BreadCrumbs";
import { paymentCrumbs } from "../constants";
import useMutateData from "@/hooks/useMutateData";

const SuccessPayment = (): JSX.Element => {
  const params = useSearchParams();
  const payId = params.get("payId");
  const { deleteAllOrders } = useOrderStore();

  const { data, isSuccess, mutate } = useMutateData<null, PaymentStatus>({
    key: ["success_payment"],
    method: "POST",
    uri: `/payments/${payId}/success/`,
  });

  useEffect(() => {
    if (payId) {
      mutate(null, {
        onSuccess: (data) => {
          if (data.status === "ok") {
            deleteAllOrders();
          }
        },
      });
    }
  }, [payId, deleteAllOrders, mutate]);

  if (isSuccess)
    return (
      <Section>
        <BreadCrumbs links={paymentCrumbs} />
        <Typography variant="h1">{data.message}</Typography>
        {data.status === "ok" && (
          <Alert variant="outlined" color="info" sx={{ mb: 6 }}>
            {TEXTS.notifications.successfulResponse}
          </Alert>
        )}
      </Section>
    );

  return <></>;
};

export default SuccessPayment;
