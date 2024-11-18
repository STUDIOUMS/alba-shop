import Advantages from "@/components/Advantages";
import Banner from "@/components/Banner";
import BlogsWidjet from "@/components/BlogsWidjet";
import Brands from "@/components/Brands";
import Carousel from "@/components/Carousel";
import HomeCatalog from "@/components/HomeCatalog";

import Section from "@/ui/Section";

// Metatags
export const metadata = {
  title: "Интернет-магазин моющих средств",
  description: "Главная",
};

export default async function Home() {
  return (
    <div>
      <Banner />

      <HomeCatalog />

      <Carousel title="Новинки" param="new" />
      <Carousel title="Скидки" param="discount" />
      <Carousel title="Хиты" param="hit" />

      <Section title="Преимущества">
        <Advantages />
      </Section>

      <Section title="Бренды">
        <Brands />
      </Section>

      <Section title="Блог">
        <BlogsWidjet />
      </Section>
    </div>
  );
}
