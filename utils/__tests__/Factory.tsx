import * as Factory from "factory.ts";
import { CheckoutOrderItem, Order } from "@/types";

export const orderFactory = Factory.Sync.makeFactory<Order>({
  id: Factory.each((i) => String(i + 1)),
  img: "http://img.com/images/image.webp",
  art: "12345",
  count: 1,
  productId: 1,
  slug: "product",
  title: "Product",
  pack: "1",
  price: 100,
});

export const checkoutItemFactory = Factory.Sync.makeFactory<CheckoutOrderItem>({
  price: 100,
  productId: 1,
  quantity: 1,
});
