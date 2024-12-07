export type View = "grid" | "list";

export type BreadCrumbsItem = {
  name: string;
  slug: string;
};

export type Response<T> = {
  count: number;
  next: string;
  previous: string;
  results: T[];
};

export type Category = {
  id: number;
  parent?: string;
  slug: string;
  name: string;
  description: string;
  img: string;
};

export type RelatedAttrs = {
  id: number;
  attribute: {
    id: number;
    name: string;
  };
  value: string;
  product: 0;
};

export type Pack = {
  id: number;
  name: string;
};

export type RelatedPack = {
  id: number;
  pack: {
    id: number;
    name: string;
  };
  img: string;
  price: string;
  oldPrice: string | null;
  product: number;
};

export type ProductCat = {
  pk: number;
  name: string;
  slug: string;
};

export type DocType = {
  id: number;
  name: string;
  file: string;
  product: number;
};

export type Product = {
  id: number;
  relatedAttrs: RelatedAttrs[];
  relatedPacks: RelatedPack[];
  defaultPack: RelatedPack;
  categories: ProductCat[];
  docs: DocType[];
  slug: string;
  title: string;
  description: string;
  art: string;
  new: boolean;
  hit: boolean;
  createdAt: Date;
};

export type BlogItem = {
  id: number;
  title: string;
  slug: string;
  short?: string;
  description: string;
  createdAt: string;
  updatedAt: string;
};

export type Order = {
  id: string;
  title: string;
  price: number;
  slug: string;
  img: string;
  art: string;
  count: number;
  pack: string;
};

export type Face = "individual" | "legal";
export type CreatedOrder = {
  name: string;
  email?: string;
  phone: string;
  addition: string;
  city?: string;
  address?: string;
  delivery: Delivery;
  payment: Payment;
  inn?: string;
  company?: string;
  status: "waiting" | "canceled" | "processed" | "done";
  price: number;
  deliveryPrice: number;
  total: number;
  list: Order[];
};

export type Delivery = "courier" | "pickup";
export type Payment =
  | "acquiring"
  | "bill"
  | "delivery-cash"
  | "delivery-card"
  | "bill-nds";

export type FormOrderValues = {
  name: string;
  email: string;
  phone: string;
  city: string;
  street: string;
  address: string;
  addition: string;
  inn: string;
  company?: string;
};

export type Feedback = {
  sender: string;
  senderPhone: string;
  senderEmail: string;
  message: string;
};
