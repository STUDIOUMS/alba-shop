"use client";

import { useOrderStore } from "@/store/useOrderStore";
import CustomBtn from "@/ui/CustomBtn";
import Section from "@/ui/Section";
import { Typography } from "@mui/material";
import { useEffect } from "react";
import { payData, payStatus, URL } from "./constants";

type PaymentResponse = {
  Success: boolean;
  ErrorCode: number;
  TerminalKey: string;
  Status: string;
  PaymentId: string;
  OrderId: string;
  Amount: number;
  PaymentURL: string;
};

const PaymentPage = () => {
  const { placed } = useOrderStore();

  useEffect(() => {
    document.title = "Оплата заказа";
  }, []);

  const payFunc = async () => {
    const response = await fetch(URL.pay, {
      body: JSON.stringify(payData),
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });
    const data: PaymentResponse = await response.json();
    console.log(data);
    window.open(data.PaymentURL, "_blank");
  };

  const statusFunc = async () => {
    const response = await fetch(URL.status, {
      body: JSON.stringify(payStatus),
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
    console.log(data);
  };

  return (
    <Section>
      <Typography variant="h1">Форма оплаты заказа</Typography>
      <CustomBtn sx={{ mr: 4 }} onClick={payFunc}>
        Pay
      </CustomBtn>
      <CustomBtn onClick={statusFunc}>Checking status</CustomBtn>
    </Section>
  );
};

export default PaymentPage;
