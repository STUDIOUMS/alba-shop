import {
  CheckoutOrder,
  CheckoutOrderItem,
  Delivery,
  Face,
  FormOrderValues,
  Order,
  Pack,
  Payment,
  RelatedPack,
} from "@/types";
import { customAlphabet } from "nanoid";

const nanoId = customAlphabet("1234567890", 10);

// createDate
export function createDate(dateString: string, time?: boolean) {
  const months = [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октбярь",
    "Ноябрь",
    "Декабрь",
  ];

  const date = new Date(dateString);
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  const hours = date.getUTCHours();
  const mins =
    date.getUTCMinutes() < 10
      ? "0" + date.getUTCMinutes()
      : date.getUTCMinutes();
  const timeString = `, ${hours}:${mins}`;
  return `${day} ${month} ${year}${time ? timeString : ""}`;
}

export const createArray = (num: number) => Array.from(new Array(num));

export const getTotalPrice = (orders: Order[]): number => {
  return orders.reduce((acum, order) => {
    const total = order.count * order.price;
    return (acum += total);
  }, 0);
};

export const isSaleDefine = (relatedPacks: RelatedPack[]): boolean => {
  return relatedPacks.some((el) => el.oldPrice !== null);
};

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

export const getPackNames = (packs: Pack[], params?: string[]): string => {
  return packs
    .filter((el: Pack) => params?.includes(el.id.toString()))
    .map((el: Pack) => el.name)
    .join(", ");
};

export const createNewOrder = (
  formdata: FormOrderValues,
  entity: Face,
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
    number: nanoId(),
  };
};
