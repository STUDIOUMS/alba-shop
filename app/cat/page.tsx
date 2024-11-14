import { BreadCrumbsItem } from "@/types";
import BreadCrumbs from "@/ui/BreadCrumbs";
import Section from "@/ui/Section";
import { Typography } from "@mui/material";
import CatMainGrid from "./components/CatMainGrid";

// Metatags
export const metadata = {
  title: "Каталог",
  description: "Каталог",
};

// Breadcrumbs
const crumbs: BreadCrumbsItem[] = [{ name: "Каталог", slug: "cat" }];

async function Catalog() {
  return (
    <Section>
      <BreadCrumbs links={crumbs} />
      <Typography variant="h1">Каталог</Typography>
      <CatMainGrid />
    </Section>
  );
}

export default Catalog;
