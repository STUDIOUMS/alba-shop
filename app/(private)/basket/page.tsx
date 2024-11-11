import BreadCrumbs from "@/ui/BreadCrumbs";
import { BreadCrumbsItem } from "@/types";
import BasketList from "./components/BasketList";
import Section from "@/ui/Section";
import { Typography } from "@mui/material";

// Metatags
export const metadata = {
  title: "Корзина",
  description: "Корзина",
};

/* BreadCrumbs */
const crumbs: BreadCrumbsItem[] = [{ name: "Корзина", slug: `/basket` }];

export default function Page() {
  return (
    <Section>
      <BreadCrumbs links={crumbs} />
      <Typography variant="h1">Корзина</Typography>
      <BasketList />
    </Section>
  );
}
