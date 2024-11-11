import { BreadCrumbsItem } from "@/types";
import BreadCrumbs from "@/ui/BreadCrumbs";
import Section from "@/ui/Section";
import OrderForm from "./components/OrderForm";
import { Typography } from "@mui/material";

// Metatags
export const metadata = {
  title: "Оформление заказа",
  description: "Оформление заказа",
};

/* BreadCrumbs */
const crumbs: BreadCrumbsItem[] = [
  { name: "Корзина", slug: `/basket` },
  { name: "Оформление заказа", slug: `/order` },
];

function OrderPage() {
  return (
    <Section>
      <BreadCrumbs links={crumbs} />
      <Typography variant="h1">Оформление заказа</Typography>
      <OrderForm />
    </Section>
  );
}

export default OrderPage;
