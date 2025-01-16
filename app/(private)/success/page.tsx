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
import { useSearchParams } from "next/navigation";

const SuccessPayment = (): JSX.Element => {
  const [success, setSuccess] = useState<boolean>(false);
  const [orderStatus, setOrderStatus] = useState<"ok" | "false">("false");
  const [orderStatusMsg, setOrderStatusMsg] = useState<string>("");
  const { deleteAllOrders } = useOrderStore();
  const params = useSearchParams();
  const payId = params.get("payId");

  useEffect(() => {
    if (payId) {
      fetch(`${SERVER_URL}/payments/${payId}/success/`, { method: "POST" })
        .then((response) => response.json())
        .then((data: PaymentStatus) => {
          console.log(data);
          if (data.status === "ok") {
            deleteAllOrders();
          }
          setOrderStatusMsg(data.message);
          setOrderStatus(data.status);
          setSuccess(true);
        });
    }
  }, [payId, deleteAllOrders]);

  if (success)
    return (
      <Section>
        <BreadCrumbs links={paymentCrumbs} />
        <Typography variant="h1">{orderStatusMsg}</Typography>
        {orderStatus === "ok" && (
          <Alert variant="outlined" color="info" sx={{ mb: 6 }}>
            {TEXTS.notifications.successfulResponse}
          </Alert>
        )}
      </Section>
    );

  return <></>;
};

export default SuccessPayment;
