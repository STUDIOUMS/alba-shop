import { Order, RelatedPack } from "@/types";

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
  const hours = date.getHours();
  const mins =
    date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
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
