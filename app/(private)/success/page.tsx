"use client";

import { useEffect } from "react";
import { useOrderStore } from "@/store/useOrderStore";

const SuccessPayment = () => {
  const { payUrlSuccess, deletePayUrls } = useOrderStore();

  useEffect(() => {
    if (payUrlSuccess) {
      fetch(payUrlSuccess, { method: "POST" })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        });
    }
  }, [payUrlSuccess]);

  return <div></div>;
};

export default SuccessPayment;
