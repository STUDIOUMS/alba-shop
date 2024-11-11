import Advantages from "@/components/Advantages";
import Banner from "@/components/Banner";
import BigBanner from "@/components/BigBanner";
import BlogsWidjet from "@/components/BlogsWidjet";
import Brands from "@/components/Brands";
import Carousel from "@/components/Carousel";
import Section from "@/ui/Section";
import { Grid2 } from "@mui/material";
import banner4 from "../assets/bigbanners/banner3.webp";
import banner5 from "../assets/bigbanners/banner5.webp";
import banner7 from "../assets/bigbanners/banner7.webp";

// Metatags
export const metadata = {
  title: "Интернет-магазин моющих средств",
  description: "Главная",
};

export default async function Home() {
  return (
    <div>
      <BigBanner />

      <Carousel title="Новинки" param="new" />

      <Banner src={banner4.src} />

      <Carousel title="Скидки" param="discount" />

      <Section>
        <Grid2 container spacing={6}>
          <Grid2 size={{ lg: 6, xs: 12 }}>
            <Banner src={banner5.src} />
          </Grid2>
          <Grid2 size={{ lg: 6, xs: 12 }}>
            <Banner src={banner7.src} />
          </Grid2>
        </Grid2>
      </Section>

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
