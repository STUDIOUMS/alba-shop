import { BlogItem, BreadCrumbsItem } from "@/types";
import BreadCrumbs from "@/ui/BreadCrumbs";
import Section from "@/ui/Section";
import { getData } from "@/utils/api";
import BlogCard from "../components/BlogCard";

type Params = {
  params: Promise<{ blog: string }>;
};

// Metatags
export async function generateMetadata(props: Params) {
  const { blog } = await props.params;
  const post = await getData<BlogItem>(`/blog/articles/${blog}`);
  return {
    title: post.title,
    description: post.short,
  };
}

export default async function BlogPage(props: Params) {
  const { blog } = await props.params;
  const post = await getData<BlogItem>(`/blog/articles/${blog}`);

  // Breadcrumbs
  let crumbs: BreadCrumbsItem[] = [
    { name: "Блог", slug: "/blog" },
    { name: post.title, slug: post.slug },
  ];

  return (
    <Section>
      <BreadCrumbs links={crumbs} />
      <BlogCard item={post} full />
    </Section>
  );
}
