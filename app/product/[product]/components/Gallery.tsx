import "@fancyapps/ui/dist/fancybox/fancybox.css";
import Fancybox from "@/components/Fancybox";
import Image from "next/image";

interface IGallery {
  img: string;
  title: string;
}

const Gallery: React.FC<IGallery> = ({ img, title }) => {
  return (
    <Fancybox>
      <a href={img} data-fancybox data-caption={title}>
        <Image
          src={img}
          alt=""
          width={300}
          height={300}
          style={{ maxWidth: 300, maxHeight: 300, objectFit: "contain" }}
        />
      </a>
    </Fancybox>
  );
};

export default Gallery;
