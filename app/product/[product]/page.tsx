import { BreadCrumbsItem, Product } from "@/types";
import BreadCrumbs from "@/ui/BreadCrumbs";
import Section from "@/ui/Section";
import { getData } from "@/utils/api";
import { Typography } from "@mui/material";
import ProductCard from "./components/ProductCard";

type Params = {
  params: Promise<{ product: string }>;
};

// Metatags
export async function generateMetadata(props: Params) {
  const { product } = await props.params;
  const item = await getData<Product>(`/catalog/products/${product}`);
  return {
    title: item ? item.title : "Not found",
  };
}

async function ProductPage(props: Params) {
  const { product } = await props.params;
  const item = await getData<Product>(`/catalog/products/${product}`);

  // Breadcrumbs
  let crumbs: BreadCrumbsItem[] = [];
  if (product) {
    item.categories.forEach((el) => {
      crumbs.push({ name: el.name, slug: `/cat/${el.slug}` });
    });
    crumbs.push({ name: item.title, slug: `/product/${item.slug}` });
  }

  return (
    <Section>
      <BreadCrumbs links={crumbs} />
      <Typography variant="h1">{item.title}</Typography>

      <ProductCard good={item} />

      {/* <ProductTabs
        description={product.description}
        features={product.relatedAttrs}
      /> */}
    </Section>
  );
}

export default ProductPage;
