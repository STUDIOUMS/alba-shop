import * as Factory from "factory.ts";
import { Product, RelatedPack } from "@/types";

export const packFactory = Factory.Sync.makeFactory<RelatedPack>({
  id: Factory.each((i) => i + 1),
  img: "http://img.com/images/image.webp",
  oldPrice: "",
  pack: Factory.each((i) => ({ id: i + 1, name: `${i + 1} шт` })),
  price: Factory.each((i) => `${i + 1}00`),
  product: 1,
});

export const productFactory = Factory.Sync.makeFactory<Product>({
  id: Factory.each((i) => i),
  art: "12345",
  categories: [{ name: "cat", pk: 1, slug: "cat" }],
  createdAt: new Date("2024-11-03T15:08:43.267311Z"),
  docs: [],
  description: "",
  hit: false,
  new: false,
  slug: "product",
  title: "product",
  relatedPacks: [],
  defaultPack: [][0],
  relatedAttrs: [],
});
