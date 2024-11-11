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

export type CatParent = {
  pk: number;
  name: string;
  slug: string;
};

export type Cat = {
  id: number;
  parent: CatParent | null;
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

export type RelatedPacks = {
  id: number;
  pack: {
    id: number;
    name: string;
  };
  img: string;
  price: string;
  oldPrice: string;
  product: number;
};

export type ProductCat = {
  pk: number;
  name: string;
  slug: string;
};

export type Product = {
  id: number;
  relatedAttrs: RelatedAttrs[];
  relatedPacks: RelatedPacks[];
  defaultPack: RelatedPacks;
  categories: ProductCat[];
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
  price: string;
  slug: string;
  img: string;
  art: string;
  count: number;
  total: string;
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
export type Payment = "acquiring" | "bill";

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
