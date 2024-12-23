// https://www.tbank.ru/kassa/dev/payments/

import { Order } from "@/types";
import { PayData, PayDataItem } from "./types";

type getPaymentDataProps = {
  Items?: PayDataItem[];
  Phone?: string;
  Email?: string;
};

export const PAYMENT_URL = {
  pay: "https://securepay.tinkoff.ru/v2/Init",
  status: "https://securepay.tinkoff.ru/v2/GetState",
};

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
    TerminalKey: "TinkoffBankTest",
    //Amount: Items.reduce((acum, el) => (acum += el.Amount), 0),
    Amount: 100,
    OrderId: "21095",
    Description: "Оплата товаров на сайте alba-72.ru",
    Token: "68711168852240a2f34b6a8b19d2cfbd296c7d2a6dff8b23eda6278985959346",
    DATA: {
      Phone: "+71234567890",
      Email: "uralmetstroy@list.ru",
    },
    Receipt: {
      Email: "a@test.ru",
      Phone: "+79031234567",
      Taxation: "osn",
      Items: [
        {
          Amount: 100,
          Name: "Test product",
          Price: 100,
          Quantity: 1,
          Tax: "vat10",
        },
      ],
    },
  };
};
