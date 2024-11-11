import { Box, styled, Typography } from "@mui/material";
import { BoxProps } from "@mui/system";

type OrderSectionProps = BoxProps & {
  children: React.ReactNode;
  title: string;
};

const Div = styled(Box)(({ theme }) => ({
  borderColor: theme.palette.grey[300],
  borderStyle: "solid",
  borderWidth: 1,
  borderRadius: 6,
  marginBottom: theme.spacing(6),
}));

const Head = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.grey[100],
  borderRadius: "5px 5px 0 0",
  padding: `${theme.spacing(3)} ${theme.spacing(6)}`,
}));

const Inner = styled(Box)(({ theme }) => ({
  padding: theme.spacing(6),
}));

const OrderSection = (props: OrderSectionProps): JSX.Element => {
  const { children, title } = props;
  return (
    <Div {...props}>
      <Head>
        <Typography variant="h4" sx={{ m: 0 }}>
          {title}
        </Typography>
      </Head>
      <Inner>{children}</Inner>
    </Div>
  );
};

export default OrderSection;
