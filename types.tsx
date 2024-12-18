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
  productId: number;
};

export type Face = "individual" | "legal";
export type Delivery = "courier" | "pickup";
export type Payment =
  | "online"
  | "bill"
  | "bill-nds"
  | "delivery-cash"
  | "delivery-card";

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

export type StaticPage = {
  id: number;
  title: string;
  uri: string;
  body: string;
  createdAt: Date;
  updatedAt: Date;
};

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
  id: number;
  number: number;
  createdAt: Date;
  updatedAt: Date;
};
