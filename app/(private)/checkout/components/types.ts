export type Entity = "individual" | "legal";

export type Delivery = "courier" | "pickup";

export type Payment =
  | "online"
  | "bill"
  | "bill-nds"
  | "delivery-cash"
  | "delivery-card";

export type CheckoutOrderItem = {
  productId: number;
  quantity: number;
  price: number;
};

export type CheckoutOrder = {
  products: CheckoutOrderItem[];
  clientFio: string;
  clientEmail: string;
  clientPhone: string;
  legalEntity: boolean;
  deliveryType: number;
  paymentType: Payment;
  note: string;
  titleOrganization: string;
  inn: string;
  address: string;
};

export type SuccessfulOrder = CheckoutOrder & {
  id: string;
  number: number;
  createdAt: Date;
  updatedAt: Date;
  paymentUrl: string;
};
