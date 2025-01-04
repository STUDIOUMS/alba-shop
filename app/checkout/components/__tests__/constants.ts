import { Order } from "@/types";
import { CheckoutOrder, SuccessfulOrder } from "../types";

export const fakeStateOrder: Order = {
  art: "12345",
  count: 1,
  id: "1",
  img: "http://img.com",
  pack: "1",
  price: 180,
  productId: 1,
  slug: "slug",
  title: "Test title",
};

export const fakeOrder: CheckoutOrder = {
  products: [
    {
      productId: 2,
      quantity: 1,
      price: 180,
    },
  ],
  clientFio: "Test name",
  clientEmail: "test@test.com",
  clientPhone: "+7 (999) 123-45-78",
  legalEntity: false,
  deliveryType: 1,
  paymentType: "delivery-card",
  note: "",
  titleOrganization: "",
  inn: undefined,
  address: undefined,
};

export const fakeResponse: SuccessfulOrder = {
  ...fakeOrder,
  createdAt: new Date("2019-08-24T14:15:22Z"),
  updatedAt: new Date("2019-08-24T14:15:22Z"),
  id: "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  number: "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  paymentUrl: null,
  failUrl: null,
  successUrl: null,
};
