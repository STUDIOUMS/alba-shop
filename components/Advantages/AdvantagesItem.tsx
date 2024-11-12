import { Grid2, Grid2Props, styled, Typography } from "@mui/material";
import Image from "next/image";

type AdvantagesItemProps = {
  src: string;
  title: string;
  text: string;
};

const Item = styled(Grid2)<Grid2Props>(({ theme }) => ({
  borderColor: theme.palette.grey[300],
  borderStyle: "solid",
  borderWidth: 1,
  borderRadius: 6,
  padding: theme.spacing(6),
  textAlign: "center",
}));

const AdvantagesItem = (props: AdvantagesItemProps): JSX.Element => {
  const { src, text, title } = props;
  return (
    <Item size={{ lg: 4, xs: 12 }}>
      <Image src={src} alt="" width={50} height={50} />
      <Typography variant="h3" component="div" sx={{ mt: 4, mb: 2 }}>
        {title}
      </Typography>
      <Typography variant="body1" color="textSecondary">
        {text}
      </Typography>
    </Item>
  );
};

export default AdvantagesItem;
