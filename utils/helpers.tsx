import { Delivery } from "@/app/checkout/components/types";
import { COURIER_PRICE } from "@/constants";
import { Order, Pack, RelatedPack } from "@/types";

type GetTotalPriceReturn = {
  totalPrice: number;
  deliveryPrice: number;
  totalWithDelivery: number;
};

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
    date.getUTCMinutes() < 10 ? "0" + date.getUTCMinutes() : date.getUTCMinutes();
  const timeString = `, ${hours}:${mins}`;
  return `${day} ${month} ${year}${time ? timeString : ""}`;
}

export const createArray = (num: number) => Array.from(new Array(num));

export const getTotalPrice = (
  orders: Order[],
  delivery?: Delivery
): GetTotalPriceReturn => {
  const totalPrice = orders.reduce((acum, order) => {
    const total = order.count * order.price;
    return (acum += total);
  }, 0);

  const deliveryPrice = delivery === "courier" && totalPrice < 1000 ? COURIER_PRICE : 0;

  return {
    totalPrice,
    deliveryPrice,
    totalWithDelivery: totalPrice + deliveryPrice,
  };
};

export const isSaleDefine = (relatedPacks: RelatedPack[]): boolean => {
  return relatedPacks.some((el) => el.oldPrice !== null);
};

export const getPackNames = (packs: Pack[], params?: string[]): string => {
  return packs
    .filter((el: Pack) => params?.includes(el.id.toString()))
    .map((el: Pack) => el.name)
    .join(", ");
};
