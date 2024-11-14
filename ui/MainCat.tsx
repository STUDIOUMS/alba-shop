import { Category } from "@/types";
import { Box, BoxProps, styled, Typography } from "@mui/material";
import Link from "next/link";

type MainCatProps = {
  category: Category;
};

const CAT_IMG_HEIGHT = 140;

const Item = styled(Box)<BoxProps>(({ theme }) => ({
  borderColor: theme.palette.grey[300],
  borderStyle: "solid",
  borderWidth: 1,
  borderRadius: 6,
  minHeight: "100%",
  img: {
    display: "block",
    borderRadius: "5px 5px 0 0",
    height: CAT_IMG_HEIGHT,
    objectFit: "cover",
    width: "100%",
    transition: theme.transitions.create(["background-color", "transform"]),
  },
  a: {
    color: theme.palette.common.black,
    textDecoration: "none",
  },
  "&:hover": {
    img: {
      transform: "scale(1.05)",
    },
    a: {
      color: theme.palette.primary.main,
    },
  },
}));

const ItemImg = styled(Box)<BoxProps>(() => ({
  borderRadius: "5px 5px 0 0",
  height: CAT_IMG_HEIGHT,
  overflow: "hidden",
}));

const ItemTitle = styled(Box)<BoxProps>(({ theme }) => ({
  padding: `${theme.spacing(4)} ${theme.spacing(6)}`,
}));

const MainCat = (props: MainCatProps): JSX.Element => {
  const { category } = props;
  return (
    <Item>
      <Link href={`/cat/${category.slug}`}>
        <ItemImg>
          <img src={category.img} alt={category.name} />
        </ItemImg>
        <ItemTitle>
          <Typography variant="h3" sx={{ m: 0 }}>
            {category.name}
          </Typography>
        </ItemTitle>
      </Link>
    </Item>
  );
};

export default MainCat;
