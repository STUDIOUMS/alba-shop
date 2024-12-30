import { FormOrderValues, Order } from "@/types";
import {
  CheckoutOrderItem,
  CheckoutOrder,
  Delivery,
  Entity,
  Payment,
  SuccessfulOrder,
} from "./types";

export const getOrderToLines = (orders: Order[]): CheckoutOrderItem[] => {
  return orders.map((el) => {
    const newLine: CheckoutOrderItem = {
      price: Number(el.price),
      productId: el.productId,
      quantity: el.count,
    };
    return newLine;
  });
};

export const createNewOrder = (
  formdata: FormOrderValues,
  entity: Entity,
  delivery: Delivery,
  payment: Payment,
  orders: Order[]
): CheckoutOrder => {
  const { addition, address, email, inn, name, phone, company } = formdata;
  return {
    address,
    clientEmail: email,
    clientFio: name,
    clientPhone: phone,
    deliveryType: delivery === "courier" ? 0 : 1,
    inn,
    legalEntity: entity === "legal",
    note: addition,
    paymentType: payment,
    products: getOrderToLines(orders),
    titleOrganization: company ? company : "",
  };
};
