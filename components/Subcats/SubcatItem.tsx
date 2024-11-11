import { Cat } from "@/types";
import { Button, Grid2, styled, Typography } from "@mui/material";
import Image from "next/image";

type SubcatItemProps = {
  subcat: Cat;
};

const Item = styled(Button)(({ theme }) => ({
  borderWidth: 1,
  borderStyle: "solid",
  borderColor: theme.palette.grey[300],
  borderRadius: "6px",
  color: theme.palette.common.black,
  display: "block",
  padding: "10px 16px",
  fontSize: theme.typography.body1.fontSize,
  lineHeight: theme.typography.body1.lineHeight,
  textAlign: "center",
  textDecoration: "none",
  minHeight: "100%",
  textTransform: "none",
  "&:hover": {
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.25)",
  },
}));

const SubcatItem = (props: SubcatItemProps) => {
  const { subcat } = props;
  return (
    <Grid2 size={{ xs: 4, lg: 3 }}>
      <Item href={`/cat/${subcat.slug}`}>
        {subcat.img && <Image src={subcat.img} alt="" width={50} height={50} />}
        <Typography variant="h6" sx={{ m: 0 }}>
          {subcat.name}
        </Typography>
      </Item>
    </Grid2>
  );
};

export default SubcatItem;
