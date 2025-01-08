import { describe, expect, it } from "vitest";
import {
  createArray,
  createDate,
  getPackNames,
  getTotalPrice,
  isSaleDefine,
} from "../helpers";
import { checkoutItemFactory, orderFactory } from "./Factory";
import { createNewOrder, getOrderToLines } from "@/app/checkout/components/utils";
import { mockedOrder, mockedPack } from "./constants";

const orders = orderFactory.buildList(2);
const checkoutItems = checkoutItemFactory.buildList(2);

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

  it("getTotalPrice - without delivery", () => {
    const output = getTotalPrice([mockedOrder]);
    expect(output.totalPrice).toBe(300);
  });

  it("getTotalPrice - without delivery, pickup", () => {
    const output = getTotalPrice([mockedOrder], "pickup");
    expect(output.totalPrice).toBe(300);
    expect(output.deliveryPrice).toBe(0);
    expect(output.totalWithDelivery).toBe(300);
  });

  it("getTotalPrice - with delivery, courier", () => {
    const output = getTotalPrice([mockedOrder], "courier");
    expect(output.totalPrice).toBe(300);
    expect(output.deliveryPrice).toBe(100);
    expect(output.totalWithDelivery).toBe(400);
  });

  it("isSaleDefine - sale", () => {
    const output = isSaleDefine([mockedPack]);
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

  it("getOrderToLines", () => {
    const output = getOrderToLines(orders);
    expect(output).toStrictEqual(checkoutItems);
  });

  it("getPackNames", () => {
    const output = getPackNames(
      [
        { id: 1, name: "Pack 1" },
        { id: 2, name: "Pack 2" },
        { id: 3, name: "Pack 3" },
      ],
      ["1", "2"]
    );
    expect(output).toStrictEqual("Pack 1, Pack 2");
  });

  it("createNewOrder", () => {
    const output = createNewOrder(
      {
        addition: "",
        address: "Street",
        city: "City",
        email: "test@test.com",
        inn: "",
        name: "Name",
        phone: "123456789",
      },
      "individual",
      "courier",
      "bill",
      []
    );
    expect(output).toStrictEqual({
      address: "Street",
      clientEmail: "test@test.com",
      clientFio: "Name",
      clientPhone: "123456789",
      deliveryType: 0,
      inn: "",
      legalEntity: false,
      note: "",
      paymentType: "bill",
      products: [],
      titleOrganization: "",
    });
  });
});
