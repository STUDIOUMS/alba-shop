// https://www.tbank.ru/kassa/dev/payments/

import { Order } from "@/types";
import { PayData, PayDataItem } from "./types";

type getPaymentDataProps = {
  Items: PayDataItem[];
  Email: string;
  Phone: string;
};

const PAYMENT_KEY = process.env.NEXT_PUBLIC_PAYMENT_KEY || "TinkoffBankTest";
const TOKEN =
  process.env.NEXT_PUBLIC_PAYMENT_TOKEN ||
  "68711168852240a2f34b6a8b19d2cfbd296c7d2a6dff8b23eda6278985959346";

export const changeOrders = (orders: Order[]): PayDataItem[] => {
  return orders.map((order) => ({
    Amount: order.count * order.price * 100,
    Name: order.title,
    Price: order.price,
    Quantity: order.count,
    Tax: "vat10",
  }));
};

export const getPaymentData = (props: getPaymentDataProps): PayData => {
  const { Items, Email, Phone } = props;
  return {
    TerminalKey: PAYMENT_KEY,
    Amount: Items.reduce((acum, el) => (acum += el.Amount), 0),
    OrderId: "21095",
    Description: "Оплата товаров на сайте alba-72.ru",
    Token: TOKEN,
    DATA: {
      Phone,
      Email,
    },
    Receipt: {
      Email,
      Phone,
      Taxation: "osn",
      Items,
    },
  };
};
