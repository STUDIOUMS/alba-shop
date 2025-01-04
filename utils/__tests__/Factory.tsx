import * as Factory from "factory.ts";
import { CheckoutOrderItem, Order, Product, Category } from "@/types";

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

export const categoryFactory = Factory.Sync.makeFactory<Category>({
  id: Factory.each((i) => i + 1),
  description: "description",
  img: "http://img.com",
  name: Factory.each((i) => `Category name ${i + 1}`),
  slug: Factory.each((i) => `slug${i + 1}`),
  parent: null,
});
