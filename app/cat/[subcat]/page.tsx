import { BreadCrumbsItem, Category } from "@/types";
import BreadCrumbs from "@/ui/BreadCrumbs";
import Section from "@/ui/Section";
import { getData } from "@/utils/api";
import { Box, Grid2, Typography } from "@mui/material";
import CatGrid from "./components/CatGrid";

type Params = {
  params: Promise<{ subcat: string }>;
};

// Metatags
export async function generateMetadata(props: Params) {
  const { subcat } = await props.params;
  const cat: Category = await getData(`/catalog/categories/${subcat}/`);
  return {
    title: cat ? cat.name : "Not found",
  };
}

async function SubCat(props: Params) {
  const { subcat } = await props.params;
  const cat: Category = await getData(`/catalog/categories/${subcat}/`);

  // breadcrumbs
  const crumbs: BreadCrumbsItem[] = [
    { name: "Каталог", slug: "/cat" },
    { name: cat.name, slug: `/cat/${cat.slug}` },
  ];

  return (
    <Section>
      <BreadCrumbs links={crumbs} />
      <Typography variant="h1">{cat.name}</Typography>

      <CatGrid cat={cat} />

      <Box>
        <div dangerouslySetInnerHTML={{ __html: cat.description }}></div>
      </Box>
    </Section>
  );
}

export default SubCat;
