import { Grid2, Typography } from "@mui/material";
import Image from "next/image";

type AdvantagesItemProps = {
  src: string;
  title: string;
  text: string;
};

const AdvantagesItem = (props: AdvantagesItemProps): JSX.Element => {
  const { src, text, title } = props;
  return (
    <Grid2 size={{ lg: 4, xs: 12 }} textAlign="center">
      <Image src={src} alt="" width={50} height={50} />
      <Typography variant="h3" component="div" sx={{ mt: 4, mb: 2 }}>
        {title}
      </Typography>
      <Typography variant="body1" color="textSecondary">
        {text}
      </Typography>
    </Grid2>
  );
};

export default AdvantagesItem;
