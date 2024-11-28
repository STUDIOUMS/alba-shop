import { createArray } from "@/utils/helpers";
import { Skeleton, styled } from "@mui/material";
import { ItemGrid } from "./styles";
import { MainCatalogType } from ".";

type MainCatalogLoadProps = {
  type?: MainCatalogType;
};

const SkeletItem = styled(Skeleton)(({ theme }) => ({
  minHeight: 220,
  height: "100%",
  [theme.breakpoints.down("lg")]: {
    minHeight: 160,
  },
  [theme.breakpoints.down("sm")]: {
    minHeight: 100,
  },
}));

const MainCatalogLoading = (props: MainCatalogLoadProps): JSX.Element => {
  const { type = "main" } = props;
  const list = createArray(6);

  return (
    <ItemGrid type={type}>
      {list.map((__, index) => (
        <SkeletItem key={index} variant="rounded" className="div" />
      ))}
    </ItemGrid>
  );
};

export default MainCatalogLoading;
