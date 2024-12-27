// https://www.tbank.ru/kassa/dev/payments/

import { Order } from "@/types";
import { PayData, PayDataItem } from "./types";

type getPaymentDataProps = {
  Items: PayDataItem[];
  Email: string;
  Phone: string;
  orderId: string;
};

const TERMINAL_KEY = process.env.NEXT_PUBLIC_TERMINAL_KEY || "TinkoffBankTest";
const TOKEN =
  process.env.NEXT_PUBLIC_PAYMENT_TOKEN ||
  "t.w9zJLCIITRN1M26ZaWSJbdzGAsov3PO8ogo17uYwwGZdG06I04Jew28dnoaGN6Ts5Op1IsB4wkVh-mU-mxjZag";

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
  const { Items, Email, Phone, orderId } = props;
  return {
    TerminalKey: TERMINAL_KEY,
    Amount: Items.reduce((acum, el) => (acum += el.Amount), 0),
    OrderId: orderId,
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
