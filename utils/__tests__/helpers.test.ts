import { describe, expect, it } from "vitest";
import {
  createArray,
  createDate,
  getTotalPrice,
  isSaleDefine,
} from "../helpers";

describe("Utilites", () => {
  it("createDate", () => {
    const output = createDate("2024-11-03T15:08:43.267311Z");
    expect(output).toBe("3 Ноябрь 2024");
  });

  it("createDate with time", () => {
    const output = createDate("2024-11-03T15:08:43.267311Z", true);
    expect(output).toBe("3 Ноябрь 2024, 15:08");
  });

  it("createArray", () => {
    const output = createArray(3);
    expect(output).toHaveLength(3);
  });

  it("getTotalPrice", () => {
    const output = getTotalPrice([
      {
        art: "123",
        count: 3,
        id: "1",
        img: "http://img.com",
        pack: "1 шт.",
        price: 100,
        slug: "slug",
        title: "Title",
      },
    ]);
    expect(output).toBe(300);
  });

  it("isSaleDefine - sale", () => {
    const output = isSaleDefine([
      {
        id: 1,
        img: "http://img.com",
        oldPrice: "200",
        pack: { id: 1, name: "pack" },
        price: "100",
        product: 1,
      },
    ]);
    expect(output).toBeTruthy();
  });

  it("isSaleDefine - no sale", () => {
    const output = isSaleDefine([
      {
        id: 1,
        img: "http://img.com",
        oldPrice: null,
        pack: { id: 1, name: "pack" },
        price: "100",
        product: 1,
      },
    ]);
    expect(output).toBeFalsy();
  });
});
