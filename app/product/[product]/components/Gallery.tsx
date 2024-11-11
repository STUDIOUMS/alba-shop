import "@fancyapps/ui/dist/fancybox/fancybox.css";
import Fancybox from "@/components/Fancybox";

interface IGallery {
  img: string;
  title: string;
}

const Gallery: React.FC<IGallery> = ({ img, title }) => {
  return (
    <Fancybox>
      <a href={img} data-fancybox data-caption={title}>
        <img src={img} alt="" style={{ maxWidth: 300, maxHeight: 300 }} />
      </a>
    </Fancybox>
  );
};

export default Gallery;
