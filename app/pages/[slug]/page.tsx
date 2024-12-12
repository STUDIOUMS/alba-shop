import { BreadCrumbsItem, StaticPage } from "@/types";
import BreadCrumbs from "@/ui/BreadCrumbs";
import Section from "@/ui/Section";
import { getData } from "@/utils/api";
import { Typography } from "@mui/material";
import MapFrame from "../components/MapFrame";

type Params = {
  params: Promise<{ slug: string }>;
};

// Metatags
export async function generateMetadata(props: Params) {
  const { slug } = await props.params;
  const data = await getData<StaticPage>(`/web/pages/${slug}/`);
  return {
    title: data ? data.title : "Not found",
  };
}

export default async function Static(props: Params) {
  const { slug } = await props.params;
  const data = await getData<StaticPage>(`/web/pages/${slug}/`);

  // Breadscrumbs
  const crumbs: BreadCrumbsItem[] = [{ name: data.title, slug: data.uri }];

  return (
    <Section>
      <BreadCrumbs links={crumbs} />
      <Typography variant="h1">{data.title}</Typography>
      <div dangerouslySetInnerHTML={{ __html: data.body }}></div>
      {slug === "contacts" && <MapFrame />}
    </Section>
  );
}
