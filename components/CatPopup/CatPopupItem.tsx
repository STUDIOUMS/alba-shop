import { Cat } from "@/types";
import { Box, Grid2, Stack, styled, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

type CatPopupItemProps = {
  cat: Cat;
  subcats: Cat[];
};

const Item = styled(Grid2)(({ theme }) => ({
  ul: {
    margin: 0,
    marginLeft: theme.spacing(4),
    padding: 0,
    li: {
      listStyle: "none",
      a: { textDecoration: "none" },
    },
  },
}));
const ItemTitle = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  "& a": {
    alignItems: "center",
    display: "flex",
    textDecoration: "none",
  },
}));

const CatPopupItem = (props: CatPopupItemProps): JSX.Element => {
  const { cat, subcats } = props;

  return (
    <Item size={{ xs: 12, lg: 4 }}>
      <ItemTitle>
        <Link href={`/cat/${cat.slug}`}>
          {cat.img && (
            <Image
              src={cat.img}
              alt=""
              width={50}
              height={50}
              style={{ marginLeft: "16px" }}
            />
          )}
          <Typography
            variant="h5"
            component="span"
            color="textPrimary"
            sx={{ m: 0 }}
          >
            {cat.name}
          </Typography>
        </Link>
      </ItemTitle>
      <ul>
        {subcats.map((el) => (
          <li key={el.id}>
            <Link href={`/cat/${el.slug}`}>{el.name}</Link>
          </li>
        ))}
      </ul>
    </Item>
  );
};

export default CatPopupItem;
