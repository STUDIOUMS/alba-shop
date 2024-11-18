import Section from "@/ui/Section";
import { createArray } from "@/utils/helpers";
import { Skeleton } from "@mui/material";
import { ItemGrid } from "./styles";

const MainCatalogLoading = (): JSX.Element => {
  const list = createArray(6);
  return (
    <ItemGrid>
      {list.map((__, index) => (
        <Skeleton
          key={index}
          variant="rounded"
          height="100%"
          sx={{ minHeight: 220 }}
          className="div"
        />
      ))}
    </ItemGrid>
  );
};

export default MainCatalogLoading;
