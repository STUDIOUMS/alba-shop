import { CheckoutOrderItem, Order, RelatedPack } from "@/types";

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
